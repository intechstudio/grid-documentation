#!/usr/bin/env bash
# Points ./grid-editor at a local grid-editor checkout so emmylua_doc_cli can read
# build-assets/lua-annotations from it - mirrors the "checkout grid-editor" step in
# .github/workflows/generate-api-docs.yml / firebase-hosting-merge.yml for local dev.
#
# emmylua_doc_cli only picks up types/globals when the input path is canonically inside
# the cwd - pointing it at a `../grid-editor` sibling path silently yields an empty
# doc.json (0 types, 0 globals, no error). A ./grid-editor symlink keeps the checkout
# outside this repo while still satisfying that.
set -euo pipefail
cd "$(dirname "$0")/.."

TARGET="${GRID_EDITOR_PATH:-../grid-editor}"

if [ -e ./grid-editor ] && [ -z "${GRID_EDITOR_PATH:-}" ]; then
  echo "./grid-editor already exists, leaving it as-is (set GRID_EDITOR_PATH to relink)."
  exit 0
fi

if [ ! -d "$TARGET/build-assets/lua-annotations" ]; then
  echo "error: $TARGET/build-assets/lua-annotations not found." >&2
  echo "Checkout intechstudio/grid-editor locally, e.g.:" >&2
  echo "  git clone https://github.com/intechstudio/grid-editor ../grid-editor" >&2
  echo "or point GRID_EDITOR_PATH at an existing checkout." >&2
  exit 1
fi

rm -f ./grid-editor
ln -s "$TARGET" ./grid-editor
echo "Linked ./grid-editor -> $TARGET"
