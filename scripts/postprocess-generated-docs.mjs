#!/usr/bin/env node
// Reorganizes emmylua_doc_cli output (./gen-temp/docs) into docs/reference-manual,
// matching the frontmatter/slug conventions of the hand-authored pages it replaces.
// See github.com/intechstudio/grid-documentation/issues/32 for the full pipeline.

import { readFile, writeFile, readdir, rm, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";

const GEN_DIR = "./gen-temp/docs";
const OUT_DIR = "./docs/reference-manual";

// types/*.md -> destination + frontmatter for the Element/*Element class pages.
const CLASS_PAGES = {
  "Element.md": {
    dest: "grid-functions/element.md",
    title: "Element Referencing",
    slug: "element",
    description: "How to refer to a Control Element by number.",
  },
  "ButtonElement.md": {
    dest: "control-element-functions/button.md",
    title: "Button",
    slug: "button-control-element",
    description: "How to set up button-type control elements.",
  },
  "EncoderElement.md": {
    dest: "control-element-functions/encoder.md",
    title: "Encoder",
    slug: "encoder-control-element",
    description: "How to set up encoder-type control elements.",
  },
  "PotmeterElement.md": {
    dest: "control-element-functions/potmeter.md",
    title: "Potmeter",
    slug: "potmeter-control-element",
    description: "How to set up potentiometer-type control elements.",
  },
  "FaderElement.md": {
    dest: "grid-functions/fader.md",
    title: "Fader",
    slug: "fader",
    description: "How to set up fader-type control elements.",
  },
  "EndlessElement.md": {
    dest: "control-element-functions/endless.md",
    title: "Endless potentiometer",
    slug: "endless-control-element",
    description: "How to set up endless-type control elements.",
  },
  "LCDElement.md": {
    dest: "grid-functions/lcd.md",
    title: "LCD",
    slug: "lcd",
    description: "How to draw to a Control Element's LCD screen.",
  },
  "SystemElement.md": {
    dest: "grid-functions/system.md",
    title: "System",
    slug: "system",
    description: "System-wide functions available on every Grid module.",
  },
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
];

function stripClassHeading(content) {
  return content.replace(/^#\s*class\s+\S+\s*\n+/, "");
}

// Rewrite class method notation to instance method notation.
// Before: `function ButtonElement.button_value(value: integer?) -> value integer`
// After:  `self:button_value(value: integer?) -> value integer`
function rewriteSignatures(content) {
  return content.replace(
    /function\s+([A-Za-z]+)\.([a-zA-Z_][a-zA-Z0-9_]*)\(/g,
    "function self:$2("
  );
}

// Rename "## methods" heading to "## Functions" for clarity.
function renameMethodsHeading(content) {
  return content.replace(/^##\s+methods\s*$/m, "## Functions");
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

function toFrontmatter({ title, slug, description }) {
  return `---\ntitle: ${title}\nslug: ${slug}\nlayout: reference_manual\ncategory: reference-manual\ndescription: ${description}\n---\n\n`;
}

async function writeDoc(destRelPath, content) {
  const destPath = join(OUT_DIR, destRelPath);
  await mkdir(dirname(destPath), { recursive: true });
  await writeFile(destPath, content, "utf8");
}

function addEditorContextNote(content, className) {
  // Insert explanatory note before the functions list for element types.
  // This helps readers understand how `self` is typed in the editor.
  const elementTypes = [
    "ButtonElement",
    "EncoderElement",
    "PotmeterElement",
    "EndlessElement",
    "FaderElement",
    "LCDElement",
  ];

  if (!elementTypes.includes(className)) return content;

  const note = `> In the Grid editor, when editing code for a ${className}, the variables \`self\`, \`element\`, and \`ele\` are automatically typed as ${className}. This means you can call these functions directly on \`self\`:
>
> \`\`\`lua
> self:encoder_value()     -- on the current element
> element[1]:encoder_value() -- on a specific element from the array
> \`\`\`
`;

  // Insert before the Functions heading, preserving existing spacing.
  return content.replace(/(\n\n)(##\s+Functions)/m, "$1" + note + "\n$2");
}

async function processClassPages() {
  for (const [file, meta] of Object.entries(CLASS_PAGES)) {
    const raw = await readFile(join(GEN_DIR, "types", file), "utf8");
    let body = stripClassHeading(raw);
    body = rewriteSignatures(body);
    body = renameMethodsHeading(body);
    body = addEditorContextNote(body, file.replace(/\.md$/, ""));
    body = rewriteLinks(body);
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
    await writeDoc(join("grid-functions", file), toFrontmatter(meta) + rewriteLinks(raw));
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
  await removeStaleFiles();
  console.log("Postprocessing complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
