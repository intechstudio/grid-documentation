#!/usr/bin/env node
// Reorganizes emmylua_doc_cli output (./gen-temp/docs) into docs/reference-manual,
// matching the frontmatter/slug conventions of the hand-authored pages it replaces.
// See github.com/intechstudio/grid-documentation/issues/32 for the full pipeline.

import { readFile, writeFile, readdir, rm, mkdir } from "node:fs/promises";
import { join, dirname, relative, sep } from "node:path";

const GEN_DIR = "./gen-temp/docs";
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

// Global functions grouped into topic subfolders (grid-functions/<dir>/), mirroring the
// hand-authored topic pages this pipeline replaced (see STALE_ONLY_FILES). A function not
// listed here is left flat under grid-functions/ - add new grid-api.lua globals here when
// they land, otherwise they'll fall through ungrouped.
const GLOBAL_GROUPS = [
  {
    dir: "led",
    label: "LED",
    functions: [
      "led_value",
      "led_color",
      "led_default_red",
      "led_default_green",
      "led_default_blue",
      "led_animation_rate",
      "led_animation_type",
    ],
  },
  {
    dir: "midi",
    label: "MIDI",
    functions: [
      "midi_send",
      "midi_sysex_send",
      "midi_auto_ch",
      "midi_auto_cmd",
      "midi_auto_p1",
      "midi_auto_p2",
      "rx_mode",
    ],
  },
  { dir: "timer", label: "Timer", functions: ["timer_start", "timer_stop"] },
  {
    dir: "page",
    label: "Page",
    functions: ["page_load", "page_next", "page_prev", "page_current"],
  },
  {
    dir: "module-position",
    label: "Module Position",
    functions: ["module_position_x", "module_position_y", "module_rotation"],
  },
  {
    dir: "keyboard-mouse",
    label: "Keyboard & Mouse",
    functions: ["keyboard_send", "mouse_button_send", "mouse_move_send"],
  },
  {
    dir: "math-utility",
    label: "Math & Utility",
    functions: ["random8", "limit", "map_saturate", "segment_calculate", "sign"],
  },
  {
    dir: "elements",
    label: "Elements",
    functions: [
      "element_count",
      "element_name_get",
      "element_name_send",
      "element_name_set",
    ],
  },
  {
    dir: "events",
    label: "Events",
    functions: ["event_function_name", "event_trigger"],
  },
  {
    dir: "communication",
    label: "Communication",
    functions: ["immediate_send", "package_send", "websocket_send"],
  },
];

const GLOBAL_GROUP_DIR_BY_FUNCTION = new Map(
  GLOBAL_GROUPS.flatMap((group) => group.functions.map((fn) => [fn, group.dir]))
);

// Sidebar category labels for every generated folder, written by writeCategoryFiles().
const CATEGORY_LABELS = {
  "control-element-functions": "Control Element Functions",
  ...Object.fromEntries(GLOBAL_GROUPS.map((g) => [`grid-functions/${g.dir}`, g.label])),
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

// Hand-maintained pages that grouped several functions under one topic. They have no
// 1:1 generated replacement (replaced by many per-function pages instead) so they're
// deleted outright rather than overwritten.
const STALE_ONLY_FILES = [
  "grid-functions/led.md",
  "grid-functions/midi.md",
  "grid-functions/random.md",
  "grid-functions/keyboard.md",
  "grid-functions/print.md",
  "grid-functions/module-position.md",
  "grid-functions/page.md",
  "grid-functions/timer.md",
  // Element/Fader/LCD moved into control-element-functions/ - clean up their old spot.
  "grid-functions/element.md",
  "grid-functions/fader.md",
  "grid-functions/lcd.md",
];

function stripClassHeading(content) {
  return content.replace(/^#\s*class\s+\S+\s*\n+/, "");
}

// Rewrite class method notation from dot to colon call syntax, dropping the `function`
// keyword (this is documentation pseudo-code, not literal Lua, so it doesn't need it).
// Keeps the class name rather than `self` - the class is the function's actual scope,
// `self` is just what it's called through in practice (see addEditorContextNote, which
// still demonstrates the `self:`/`element[]:` call pattern in its example).
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

// Drop the "## methods" heading (and its underline) entirely - the surrounding editor
// context note already tells readers these are functions, so the heading is noise.
function removeMethodsHeading(content) {
  return content.replace(/^##\s+methods\s*\n-+\s*\n/m, "");
}

// emmylua_doc_cli puts the prose description last (after the signature and its
// @param/@return list). Move it to the top of each entry, right after the heading, so
// readers (and LLMs skimming the page) get "what this does" before the signature detail.
// Runs per function/field entry - `[\s\S]*?\n```\n` isolates one code fence, the
// following block matches its @param/@return lines, and whatever prose is left before
// the next heading (or EOF) is the description. Fields with no prose are left untouched.
function reorderDescriptionBeforeSignature(content) {
  return content.replace(
    /(```lua\n[\s\S]*?\n```\n)((?:\n*@(?:param|return)\s+`[^`]+`\s*-\s*.*\n?)*)\n*([\s\S]*?)(?=\n*(?:###\s|\n*$))/g,
    (match, signature, tags, description) => {
      const trimmed = description.trim();
      if (!trimmed) return match;
      return `${trimmed}\n\n${signature}${tags}\n`;
    }
  );
}

// Turn the bare "- supers: Element" line into a link to the Element Referencing page,
// using the same CLASS_PAGES destinations processClassPages() already writes to (no new
// data, just linking what's there).
function linkifySupers(content, fromDest) {
  const elementDest = CLASS_PAGES["Element.md"].dest;
  if (fromDest === elementDest) return content;
  const relPath = relative(dirname(fromDest), elementDest).split(sep).join("/");
  return content.replace(/^-\s*supers:\s*Element\s*$/m, `- supers: [Element](${relPath})`);
}

// Global function pages: drop emmylua_doc_cli's "global" qualifier and code-style the
// name, e.g. `# global mouse_move_send` -> `# \`mouse_move_send\``.
function rewriteGlobalHeading(content, name) {
  return content.replace(/^#\s+global\s+\S+/m, `# \`${name}\``);
}

// Drop the leading `function` keyword from global signatures, same rationale as
// rewriteClassSignatures. `function mouse_move_send(` -> `mouse_move_send(`.
function stripGlobalFunctionKeyword(content) {
  return content.replace(/^function\s+([a-zA-Z_][a-zA-Z0-9_]*)\(/m, "$1(");
}

// Color-code the `@param`/`@return` tags so they read as semantic markers rather than
// plain text. Styled via .doc-tag rules in src/css/custom.css (light + dark mode).
//
// Once a line starts with a raw HTML/JSX tag, MDX v1 stops treating the rest of that
// line as markdown - literal `{`/`}` (common here, e.g. `{r, g, b}` Lua table examples)
// and nested `` ` `` code spans break its JSX compilation. So for these lines only, we
// do the markdown-to-HTML conversion ourselves: escape braces to HTML entities (the
// browser decodes them back at render time, including inside <code>) and turn backtick
// spans into <code> tags, leaving no raw `{`, `}`, or `` ` `` for MDX to trip on.
function colorizeDocTags(content) {
  const escapeBraces = (text) => text.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
  const toInlineHtml = (text) =>
    escapeBraces(text).replace(/`([^`]+)`/g, "<code>$1</code>");

  return content
    .replace(/^@param\s+`([^`]+)`\s*-\s*(.*)$/gm, (_m, name, desc) =>
      `<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>${escapeBraces(
        name
      )}</code> — ${toInlineHtml(desc)}</div>`
    )
    .replace(/^@return\s+`([^`]+)`\s*-\s*(.*)$/gm, (_m, name, desc) =>
      `<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>${escapeBraces(
        name
      )}</code> — ${toInlineHtml(desc)}</div>`
    );
}

// Best-effort rewrite of emmylua_doc_cli's internal cross-links so they resolve inside
// the flattened reference-manual/ layout. Verify against a real `gen-temp` output on the
// first workflow_dispatch run - the exact link syntax wasn't available to test locally.
function rewriteLinks(content) {
  return content
    .replace(/\]\((\.\.\/)?types\/([A-Za-z]+)\.md\)/g, (match, _up, className) => {
      const target = CLASS_PAGES[`${className}.md`];
      return target ? `](../${target.dest.replace("grid-functions/", "").replace("control-element-functions/", "")})` : match;
    })
    .replace(/\]\((\.\.\/)?globals\/([a-zA-Z0-9_]+)\.md\)/g, "](./$2.md)");
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

function addEditorContextNote(content, className) {
  // Insert explanatory note before the functions list for element types.
  // This helps readers understand how `self` is typed in the editor.
  const elementTypes = {
    ButtonElement: "button_value",
    EncoderElement: "encoder_value",
    PotmeterElement: "potmeter_value",
    EndlessElement: "endless_value",
    FaderElement: "fader_value",
    LCDElement: "lcd_draw",
  };

  if (!elementTypes[className]) return content;

  const exampleFunc = elementTypes[className];
  const note = `> In the Grid editor, when editing code for a ${className}, the variables \`self\`, \`element\`, and \`ele\` are automatically typed as ${className}. This means you can call these functions directly on \`self\`:
>
> \`\`\`lua
> self:${exampleFunc}()     -- on the current element
> element[1]:${exampleFunc}() -- on a specific element from the array
> \`\`\`
`;

  // Insert before the first function heading, preserving existing spacing. There's no
  // "## Functions" heading to anchor on anymore (removeMethodsHeading strips it), so
  // target the first `### ` entry instead - String.replace without /g only touches the
  // first match, which is always the first function (fields, if any, come later).
  return content.replace(/(\n\n)(###\s+)/, "$1" + note + "\n$2");
}

async function processClassPages() {
  for (const [file, meta] of Object.entries(CLASS_PAGES)) {
    const raw = await readFile(join(GEN_DIR, "types", file), "utf8");
    let body = stripClassHeading(raw);
    body = linkifySupers(body, meta.dest);
    body = rewriteClassSignatures(body);
    body = rewriteReturnArrow(body);
    body = reorderDescriptionBeforeSignature(body);
    body = removeMethodsHeading(body);
    body = addEditorContextNote(body, file.replace(/\.md$/, ""));
    body = rewriteLinks(body);
    body = colorizeDocTags(body);
    await writeDoc(meta.dest, toFrontmatter(meta) + body);
  }
}

async function processGlobalPages() {
  const files = await readdir(join(GEN_DIR, "globals"));
  for (const file of files) {
    if (STRIPPED_GLOBALS.has(file)) continue;
    const name = file.replace(/\.md$/, "");
    const raw = await readFile(join(GEN_DIR, "globals", file), "utf8");
    const meta = {
      title: humanizeFunctionName(name),
      slug: name.replace(/_/g, "-"),
      description: `Reference for the \`${name}()\` function.`,
    };
    let body = rewriteGlobalHeading(raw, name);
    body = stripGlobalFunctionKeyword(body);
    body = rewriteReturnArrow(body);
    body = reorderDescriptionBeforeSignature(body);
    body = rewriteLinks(body);
    body = colorizeDocTags(body);
    const groupDir = GLOBAL_GROUP_DIR_BY_FUNCTION.get(name);
    const destRelPath = groupDir
      ? join("grid-functions", groupDir, file)
      : join("grid-functions", file);
    await writeDoc(destRelPath, toFrontmatter(meta) + body);
  }
}

async function removeStaleFiles() {
  for (const rel of STALE_ONLY_FILES) {
    await rm(join(OUT_DIR, rel), { force: true });
  }
}

async function main() {
  await processClassPages();
  await processGlobalPages();
  await writeCategoryFiles();
  await removeStaleFiles();
  console.log("Postprocessing complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
