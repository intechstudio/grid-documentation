#!/usr/bin/env node
// Reorganizes emmylua_doc_cli output (./gen-temp/docs) into docs/reference-manual,
// matching the frontmatter/slug conventions of the hand-authored pages it replaces.
// See github.com/intechstudio/grid-documentation/issues/32 for the design rationale.

import { readFile, writeFile, readdir, rm, mkdir } from "node:fs/promises";
import { join, dirname, relative, sep } from "node:path";

const GEN_DIR = "./gen-temp/docs";
const JSON_PATH = "./gen-temp/doc.json";
const OUT_DIR = "./docs/reference-manual";

// types/*.md -> destination + frontmatter for the Element/*Element class pages.
const CLASS_PAGES = {
  "Element.md": {
    dest: "control-element-functions/element.md",
    title: "Element",
    slug: "element",
    description: "How to refer to a Control Element by number.",
    // Foundational page (self/element[]/ele referencing) - pin it above the alphabetized
    // Button/Encoder/... entries in the Control Element Functions sidebar category.
    sidebarPosition: 0,
  },
  "ButtonElement.md": {
    dest: "control-element-functions/button.md",
    title: "ButtonElement",
    slug: "button-control-element",
    description: "How to set up button-type control elements.",
  },
  "EncoderElement.md": {
    dest: "control-element-functions/encoder.md",
    title: "EncoderElement",
    slug: "encoder-control-element",
    description: "How to set up encoder-type control elements.",
  },
  "PotmeterElement.md": {
    dest: "control-element-functions/potmeter.md",
    title: "PotmeterElement",
    slug: "potmeter-control-element",
    description: "How to set up potentiometer-type control elements.",
  },
  "FaderElement.md": {
    dest: "control-element-functions/fader.md",
    title: "FaderElement",
    slug: "fader-control-element",
    description: "How to set up fader-type control elements.",
  },
  "EndlessElement.md": {
    dest: "control-element-functions/endless.md",
    title: "EndlessElement",
    slug: "endless-control-element",
    description: "How to set up endless-type control elements.",
  },
  "LCDElement.md": {
    dest: "control-element-functions/lcd.md",
    title: "LCDElement",
    slug: "lcd-control-element",
    description: "How to draw to a Control Element's LCD screen.",
  },
  "SystemElement.md": {
    dest: "grid-functions/system.md",
    title: "System",
    slug: "system",
    description: "System-wide functions available on every Grid module.",
  },
};

// Global functions merged into one page per group (grid-functions/<file>.md), each
// function rendered as its own `### `name`` section - mirrors how a Control Element
// Functions page (e.g. button.md) holds every ButtonElement method on one page. The
// grouping axis is *calling context*, not topic:
//   - module:         implicit module scope, no addressing (position, page nav, LED/MIDI
//                      defaults, event context...). Includes functions that look
//                      element-ish (led_default_*, midi_auto_*) but take no element_index -
//                      they configure the module, not one element.
//   - element-index:   module-scope calls that take an explicit index (element_index,
//                      led_index) to reach a specific element/LED/timer - no `self`. No
//                      index parameter means a function doesn't belong in this bucket.
//   - communication:   global protocol/IO sends, no module or element target. Functions
//                      with both a global and a self: variant (e.g. midi_send) get a page
//                      here for the global call *and* a separate page under Control
//                      Element Functions for the self: variant - see Element:midi_send in
//                      types/Element.md - not merged/duplicated.
//   - math-utility:    pure, context-free helpers
// `sections` are in-page `## ` subheadings for skimmability, unrelated to sidebar routing.
// This mapping is maintained by hand rather than sourced from a grid-api.lua `@category`
// tag, since a documentation-site-only tag doesn't belong in the API source. A function not
// listed here is left as its own flat page under grid-functions/, so a new grid-api.lua
// global doesn't silently vanish - add it here when it lands.
const GLOBAL_GROUPS = [
  {
    file: "module",
    label: "Module Functions",
    description:
      "Functions that operate on the module itself - implicit scope, no element_index needed.",
    sections: [
      {
        heading: "Position & Rotation",
        functions: ["module_position_x", "module_position_y", "module_rotation"],
      },
      {
        heading: "Page",
        functions: ["page_load", "page_next", "page_prev", "page_current"],
      },
      { heading: "Elements", functions: ["element_count"] },
      {
        heading: "LED Defaults",
        functions: ["led_default_red", "led_default_green", "led_default_blue"],
      },
      {
        heading: "MIDI Auto",
        functions: ["midi_auto_ch", "midi_auto_cmd", "midi_auto_p1", "midi_auto_p2"],
      },
      { heading: "MIDI Routing", functions: ["rx_mode"] },
      { heading: "Event Context", functions: ["event_function_name"] },
    ],
  },
  {
    file: "element-index",
    label: "Element Index Functions",
    description:
      "Module-scope calls that address a specific element, LED, or timer by index - no `self`.",
    sections: [
      {
        heading: "Element Naming",
        functions: ["element_name_get", "element_name_send", "element_name_set"],
      },
      {
        heading: "LED",
        functions: ["led_value", "led_color", "led_animation_rate", "led_animation_type"],
      },
      { heading: "Timer", functions: ["timer_start", "timer_stop"] },
      { heading: "Events", functions: ["event_trigger"] },
    ],
  },
  {
    file: "communication",
    label: "Communication / IO Functions",
    description: "Global protocol and IO sends - no module or element target.",
    sections: [
      {
        heading: "Editor Messaging",
        functions: ["immediate_send", "package_send", "websocket_send"],
      },
      { heading: "MIDI", functions: ["midi_send", "midi_sysex_send"] },
      {
        heading: "Keyboard & Mouse",
        functions: ["keyboard_send", "mouse_button_send", "mouse_move_send"],
      },
    ],
  },
  {
    file: "math-utility",
    label: "Math & Utility",
    description: "Pure, context-free helper functions.",
    sections: [
      {
        heading: null,
        functions: ["random8", "limit", "map_saturate", "segment_calculate", "sign"],
      },
    ],
  },
];

// Sidebar category label per generated folder, written by writeCategoryFiles(). Each
// GLOBAL_GROUPS entry is a single flat page rather than its own folder, so it needs no entry.
const CATEGORY_LABELS = {
  "control-element-functions": "Control Element Functions",
};

// Type-alias pages (single definition, no own function docs) - content already shows
// inline wherever it's used as a param/return type, so a standalone page is too granular.
const STRIPPED_TYPES = new Set(["Auto.md", "Layer.md", "EventType.md"]);

// Deprecated stubs kept in grid-api.lua only for editor autocompletion, not published.
const STRIPPED_GLOBALS = new Set([
  "button_value.md",
  "encoder_value.md",
  "potmeter_value.md",
  "endless_value.md",
]);

// Hand-maintained pages with no 1:1 generated replacement at the same path - either
// replaced by several per-function pages, or by a page now under control-element-functions/
// instead. Deleted outright rather than overwritten.
const STALE_ONLY_FILES = [
  "grid-functions/led.md",
  "grid-functions/midi.md",
  "grid-functions/random.md",
  "grid-functions/keyboard.md",
  "grid-functions/print.md",
  "grid-functions/module-position.md",
  "grid-functions/page.md",
  "grid-functions/timer.md",
  "grid-functions/element.md",
  "grid-functions/fader.md",
  "grid-functions/lcd.md",
];

function stripClassHeading(content) {
  return content.replace(/^#\s*class\s+\S+\s*\n+/, "");
}

// A class-level doc comment can lead with a bold `**TITLE**` paragraph before the first
// `## methods`/`## fields` section (currently only Element's "self" variable explainer) -
// rewrite it to a `:::tip` admonition, matching the convention used throughout the
// hand-authored docs/wiki pages, instead of leaving it as a bolded pseudo-heading.
function formatIntroTip(content) {
  return content.replace(
    /^\*\*([^*\n]+)\*\*\n([\s\S]*?)\n{2,}(?=-{3,}\s*\n\s*\n##\s+(?:methods|fields))/,
    (_match, rawTitle, body) => {
      const title = rawTitle.trim().replace(/"([^"]+)"/g, "`$1`").toLowerCase();
      const titleCased = title.charAt(0).toUpperCase() + title.slice(1);
      return `:::tip ${titleCased}\n${body.trim()}\n:::\n\n`;
    }
  );
}

// Rewrite class method notation from dot to colon call syntax, dropping the `function`
// keyword (this is documentation pseudo-code, not literal Lua, so it doesn't need it).
// Keeps the class name rather than `self` - the class is the function's actual scope,
// `self` is just what it's called through in practice (editorContextNote demonstrates the
// `self:`/`element[]:` call pattern separately).
// Before: `function ButtonElement.button_value(value: integer?) -> value integer`
// After:  `ButtonElement:button_value(value: integer?) -> value integer`
// Also rewrites section headings: `### ButtonElement.button_value` -> `### \`ButtonElement:button_value\``
function rewriteClassSignatures(content) {
  return content
    .replace(
      /function\s+([A-Za-z]+)\.([a-zA-Z_][a-zA-Z0-9_]*)\(/g,
      "$1:$2("
    )
    .replace(
      /^###\s+([A-Za-z]+)\.([a-zA-Z_][a-zA-Z0-9_]*)$/gm,
      "### `$1:$2`"
    );
}

// emmylua_doc_cli's `-> name Type` return notation reads as EmmyLua/Lua idiom, not
// obvious to JS/TS readers (or as an unambiguous signal for LLM tooling). Rewrite to a
// TS-style `): Type` - the return variable name is dropped since it's already documented
// on its own `@return` line.
// `foo() -> count integer`              -> `foo(): integer`
// `foo() -> step (boolean|integer)`     -> `foo(): boolean | integer`
// `foo() -> current_value integer?`     -> `foo(): integer?`
function rewriteReturnArrow(content) {
  return content.replace(
    /\)\s*->\s*[A-Za-z_][A-Za-z0-9_]*\s+(.+)$/gm,
    (_match, rawType) => {
      let type = rawType.trim();
      const wrapped = type.match(/^\((.+)\)$/);
      if (wrapped) type = wrapped[1];
      type = type.replace(/\|/g, " | ");
      return `): ${type}`;
    }
  );
}

// Drop emmylua_doc_cli's "## methods"/"## fields" section headings (and their underlines)
// entirely - the surrounding editor context note already tells readers these are functions,
// so the headings are noise.
function removeStructuralHeadings(content) {
  return content.replace(/^##\s+(?:methods|fields)\s*\n-+\s*\n/gm, "");
}

// emmylua_doc_cli puts the prose description last (after the signature and its
// @param/@return list). Move it to the top of each entry, right after the heading, so
// readers (and LLMs skimming the page) get "what this does" before the signature detail.
// Runs per function/field entry - `[\s\S]*?\n```\n` isolates one code fence, the
// following block matches its @param/@return lines, and whatever prose is left before
// the next heading (or EOF) is the description. Fields with no prose are left untouched.
function reorderDescriptionBeforeSignature(content) {
  return content.replace(
    /(```lua\n[\s\S]*?\n```\n)((?:\n*@(?:param|return)\s+`[^`]+`\s*-\s*.*\n?)*)\n*([\s\S]*?)(?=\n*(?:#{1,6}\s|\n*$))/g,
    (match, signature, tags, description) => {
      const trimmed = description.trim();
      if (!trimmed) return match;
      return `${trimmed}\n\n${signature}${tags}\n`;
    }
  );
}

// Turn the bare "- supers: Element" line into a link to the Element page.
function linkifySupers(content, fromDest) {
  const elementDest = CLASS_PAGES["Element.md"].dest;
  if (fromDest === elementDest) return content;
  const relPath = relative(dirname(fromDest), elementDest).split(sep).join("/");
  return content.replace(/^-\s*supers:\s*Element\s*$/m, `- supers: [Element](${relPath})`);
}

// `# global mouse_move_send` -> `# \`mouse_move_send\``.
function rewriteGlobalHeading(content, name) {
  return content.replace(/^#\s+global\s+\S+/m, `# \`${name}\``);
}

// Drop the leading `function` keyword from global signatures, same rationale as
// rewriteClassSignatures. `function mouse_move_send(` -> `mouse_move_send(`.
function stripGlobalFunctionKeyword(content) {
  return content.replace(/^function\s+([a-zA-Z_][a-zA-Z0-9_]*)\(/m, "$1(");
}

// Shared by colorizeDocTags (markdown/regex path) and renderMember (JSON path) - both
// need to turn a raw {r, g, b}/`code` param description into safe inline HTML.
//
// Once a line starts with a raw HTML/JSX tag, MDX v1 stops treating the rest of that
// line as markdown - literal `{`/`}` (common here, e.g. `{r, g, b}` Lua table examples)
// and nested `` ` `` code spans break its JSX compilation. So for these lines only, we
// do the markdown-to-HTML conversion ourselves: escape braces to HTML entities (the
// browser decodes them back at render time, including inside <code>) and turn backtick
// spans into <code> tags, leaving no raw `{`, `}`, or `` ` `` for MDX to trip on.
function escapeBraces(text) {
  return text.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
}

function toInlineHtml(text) {
  return escapeBraces(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function paramTagDiv(name, desc) {
  return `<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>${escapeBraces(
    name
  )}</code> — ${toInlineHtml(desc)}</div>`;
}

function returnTagDiv(name, desc) {
  return `<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>${escapeBraces(
    name
  )}</code> — ${toInlineHtml(desc)}</div>`;
}

// Color-code the markdown/regex path's `@param`/`@return` tag lines using the same divs
// as the JSON path, so both renderers produce identical markup. Styled via .doc-tag rules
// in src/css/custom.css (light + dark mode).
function colorizeDocTags(content) {
  return content
    .replace(/^@param\s+`([^`]+)`\s*-\s*(.*)$/gm, (_m, name, desc) => paramTagDiv(name, desc))
    .replace(/^@return\s+`([^`]+)`\s*-\s*(.*)$/gm, (_m, name, desc) => returnTagDiv(name, desc));
}

// Rewrites emmylua_doc_cli's internal cross-links (to types/*.md and globals/*.md) so they
// resolve inside the flattened reference-manual/ layout instead.
function rewriteLinks(content) {
  return content
    .replace(/\]\((\.\.\/)?types\/([A-Za-z]+)\.md\)/g, (match, _up, className) => {
      const target = CLASS_PAGES[`${className}.md`];
      return target ? `](../${target.dest.replace("grid-functions/", "").replace("control-element-functions/", "")})` : match;
    })
    .replace(/\]\((\.\.\/)?globals\/([a-zA-Z0-9_]+)\.md\)/g, "](./$2.md)");
}

// Shift every ATX heading in `content` down by `delta` levels (capped at 6). A function
// body can contain its own sub-headings from the LuaCATS description (e.g. rx_mode's
// "Types:"/"Sources:"); when the function's own heading is demoted to fit a merged group
// page, those sub-headings must shift by the same amount to stay nested below it.
function shiftHeadings(content, delta) {
  return content.replace(/^(#{1,6})(?=\s)/gm, (hashes) => "#".repeat(Math.min(hashes.length + delta, 6)));
}

function humanizeFunctionName(name) {
  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function toFrontmatter({ title, slug, description, sidebarPosition }) {
  const position =
    sidebarPosition !== undefined ? `sidebar_position: ${sidebarPosition}\n` : "";
  return `---\ntitle: ${title}\nslug: ${slug}\nlayout: reference_manual\ncategory: reference-manual\n${position}description: ${description}\n---\n\n`;
}

async function writeDoc(destRelPath, content) {
  const destPath = join(OUT_DIR, destRelPath);
  await mkdir(dirname(destPath), { recursive: true });
  await writeFile(destPath, content, "utf8");
}

// One _category_.json per generated folder, so the autogenerated sidebar (sidebars.js)
// shows a proper label instead of titleizing the folder name.
async function writeCategoryFiles() {
  for (const [dir, label] of Object.entries(CATEGORY_LABELS)) {
    const destPath = join(OUT_DIR, dir, "_category_.json");
    await mkdir(dirname(destPath), { recursive: true });
    await writeFile(destPath, JSON.stringify({ label }, null, 2) + "\n", "utf8");
  }
}

// One representative method per element class, used by editorContextNote() below to show a
// real `self:method()` call - must be an actual method on that class (FaderElement's value
// accessor is `potmeter_value`, since it shares Potmeter's implementation).
const ELEMENT_TYPE_EXAMPLE_FN = {
  ButtonElement: "button_value",
  EncoderElement: "encoder_value",
  PotmeterElement: "potmeter_value",
  EndlessElement: "endless_value",
  FaderElement: "potmeter_value",
  LCDElement: "draw_pixel",
};

// Emitted as a Docusaurus `:::tip` admonition - the convention already used throughout the
// hand-authored docs/wiki pages, rather than a plain `>` blockquote.
function editorContextNote(className) {
  if (className === "Element") {
    // The base class has no single example method shared verbatim across subclasses (each
    // has its own value accessor) - point out instead that the functions on *this* page are
    // inherited by every concrete element type.
    return `:::tip Available on every element type
\`self\`, \`element\`, and \`ele\` are always typed as your current element's specific class (ButtonElement, EncoderElement, PotmeterElement, FaderElement, EndlessElement, or LCDElement) - but the functions on this page are inherited by all of them:

\`\`\`lua
self:element_index()
element[1]:element_index()
\`\`\`
:::
`;
  }
  const exampleFunc = ELEMENT_TYPE_EXAMPLE_FN[className];
  if (!exampleFunc) return null;
  return `:::tip Editor typing
When editing code for a ${className}, the Grid editor automatically types \`self\`, \`element\`, and \`ele\` as ${className} - so you can call these functions directly:

\`\`\`lua
self:${exampleFunc}()     -- on the current element
element[1]:${exampleFunc}() -- on a specific element from the array
\`\`\`
:::
`;
}

function addEditorContextNote(content, className) {
  const note = editorContextNote(className);
  if (!note) return content;
  // Must run after removeStructuralHeadings, which strips the "## methods" heading this
  // would otherwise anchor on - target the first `### ` function entry instead.
  // String.replace without /g only touches that first match (fields, if any, come later).
  return content.replace(/(\n\n)(###\s+)/, "$1" + note + "\n$2");
}

// emmylua_doc_cli's `-> name Type` return notation reads as EmmyLua/Lua idiom, not
// obvious to JS/TS readers. Also strips the wrapping parens JSON puts around unions, e.g.
// `(boolean|integer)` -> `boolean | integer`. Shared by rewriteReturnArrow (regex path)
// and renderMember (JSON path).
function formatType(rawType) {
  let type = rawType.trim();
  const wrapped = type.match(/^\((.+)\)$/);
  if (wrapped) type = wrapped[1];
  return type.replace(/\|/g, " | ");
}

// Renders one class member straight from emmylua_doc_cli's JSON member data - no markdown
// scraping needed, since `fn` members already carry structured params[]/returns[] with
// descriptions. (This only works for `fn` members - a `field` member's doc comment isn't
// captured at all in JSON, only in markdown; see processClassPages.)
function renderMember(className, member) {
  const params = member.params ?? [];
  const returns = member.returns ?? [];
  const returnSuffix = returns.length
    ? `: ${returns.map((r) => formatType(r.typ)).join(" | ")}`
    : "";
  const signature =
    params.length >= 2
      ? `${className}:${member.name}(\n  ${params.map((p) => `${p.name}: ${p.typ}`).join(",\n  ")}\n)${returnSuffix}`
      : `${className}:${member.name}(${params.map((p) => `${p.name}: ${p.typ}`).join(", ")})${returnSuffix}`;

  return [
    `### \`${className}:${member.name}\``,
    "---",
    (member.description || "").trim(),
    "",
    "```lua",
    signature,
    "```",
    ...params.map((p) => paramTagDiv(p.name, p.desc)),
    ...returns.map((r) => returnTagDiv(r.name, r.desc)),
  ].join("\n");
}

// Builds a class page straight from JSON structured data, skipping the regex gauntlet
// entirely (rewriteClassSignatures/rewriteReturnArrow/reorderDescriptionBeforeSignature
// exist only for the markdown fallback below). Safe whenever every member is a plain
// method (`fn`) - which is every element class except Element itself.
async function writeClassPageFromJson(className, type, meta) {
  const parts = [];
  const base = type.bases?.[0];
  if (base) {
    const targetMeta = CLASS_PAGES[`${base}.md`];
    const relPath = relative(dirname(meta.dest), targetMeta.dest).split(sep).join("/");
    parts.push(`- supers: [${base}](${relPath})\n---`);
  }
  const note = editorContextNote(className);
  if (note) parts.push(note);
  for (const member of type.members) {
    parts.push(renderMember(className, member));
  }
  await writeDoc(meta.dest, toFrontmatter(meta) + parts.join("\n\n") + "\n");
}

// Markdown/regex fallback - only reached for a class with `field` members (currently just
// Element, for its post_init_cb/midirx_cb/sysexrx_cb/rtmrx_cb/eventrx_cb callback docs).
// emmylua_doc_cli's JSON export carries no description at all for `field` members (only
// for `fn` methods), so those pages can't be built from JSON without losing their prose.
async function writeClassPageFromMarkdown(file, meta) {
  const raw = await readFile(join(GEN_DIR, "types", file), "utf8");
  let body = stripClassHeading(raw);
  body = formatIntroTip(body);
  body = linkifySupers(body, meta.dest);
  body = rewriteClassSignatures(body);
  body = rewriteReturnArrow(body);
  body = reorderDescriptionBeforeSignature(body);
  body = removeStructuralHeadings(body);
  body = addEditorContextNote(body, file.replace(/\.md$/, ""));
  body = rewriteLinks(body);
  body = colorizeDocTags(body);
  await writeDoc(meta.dest, toFrontmatter(meta) + body);
}

async function processClassPages(doc) {
  const typesByName = new Map(doc.types.map((t) => [t.name, t]));

  for (const [file, meta] of Object.entries(CLASS_PAGES)) {
    const className = file.replace(/\.md$/, "");
    const type = typesByName.get(className);
    const hasFieldMembers = type?.members.some((m) => m.type === "field");

    if (type && !hasFieldMembers) {
      await writeClassPageFromJson(className, type, meta);
    } else {
      await writeClassPageFromMarkdown(file, meta);
    }
  }
}

async function processGlobalPages() {
  const files = await readdir(join(GEN_DIR, "globals"));
  const sectionByFunction = new Map();

  for (const file of files) {
    if (STRIPPED_GLOBALS.has(file)) continue;
    const name = file.replace(/\.md$/, "");
    const raw = await readFile(join(GEN_DIR, "globals", file), "utf8");
    let body = rewriteGlobalHeading(raw, name);
    body = stripGlobalFunctionKeyword(body);
    body = rewriteReturnArrow(body);
    body = reorderDescriptionBeforeSignature(body);
    body = rewriteLinks(body);
    body = colorizeDocTags(body);
    sectionByFunction.set(name, body.trim());
  }

  // One merged page per group: each function's headings (shiftHeadings) demoted so its
  // top-level `# `name`` lands at `### `name`` - the same heading depth as a Control
  // Element Functions page's per-method sections.
  for (const group of GLOBAL_GROUPS) {
    const parts = [];
    for (const section of group.sections) {
      if (section.heading) parts.push(`## ${section.heading}`);
      for (const name of section.functions) {
        const body = sectionByFunction.get(name);
        if (!body) continue; // function renamed/removed upstream in grid-api.lua
        parts.push(shiftHeadings(body, 2));
        sectionByFunction.delete(name);
      }
    }
    const meta = { title: group.label, slug: group.file, description: group.description };
    await writeDoc(join("grid-functions", `${group.file}.md`), toFrontmatter(meta) + parts.join("\n\n"));
  }

  // Whatever's left isn't in any group - keep as its own flat page.
  for (const [name, body] of sectionByFunction) {
    const meta = {
      title: humanizeFunctionName(name),
      slug: name.replace(/_/g, "-"),
      description: `Reference for the \`${name}()\` function.`,
    };
    await writeDoc(join("grid-functions", `${name}.md`), toFrontmatter(meta) + body);
  }
}

async function removeStaleFiles() {
  for (const rel of STALE_ONLY_FILES) {
    await rm(join(OUT_DIR, rel), { force: true });
  }
}

async function main() {
  const doc = JSON.parse(await readFile(JSON_PATH, "utf8"));
  await processClassPages(doc);
  await processGlobalPages();
  await writeCategoryFiles();
  await removeStaleFiles();
  console.log("Postprocessing complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
