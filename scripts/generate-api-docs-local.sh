#!/usr/bin/env bash
# Regenerates docs/reference-manual from a local grid-editor checkout, the same steps
# .github/actions/generate-api-docs/action.yml runs in CI - so `npm run build:local` can
# reproduce a CI content-pipeline failure (e.g. an MDX-breaking Lua doc comment) without
# waiting on a CI run. Keep the emmylua_doc_cli version below in lockstep with that action.
set -euo pipefail
cd "$(dirname "$0")/.."

./scripts/link-grid-editor.sh

EMMYLUA_VERSION="0.23.2"
if ! command -v emmylua_doc_cli >/dev/null 2>&1 || [ "$(emmylua_doc_cli --version)" != "emmylua_doc_cli $EMMYLUA_VERSION" ]; then
  echo "installing emmylua_doc_cli $EMMYLUA_VERSION..."
  cargo install emmylua_doc_cli --version "$EMMYLUA_VERSION"
fi

rm -rf ./gen-temp
emmylua_doc_cli ./grid-editor/build-assets/lua-annotations/ -o ./gen-temp --site-name "Grid Lua API"
emmylua_doc_cli ./grid-editor/build-assets/lua-annotations/ -o ./gen-temp --output-format json --site-name "Grid Lua API"

node scripts/postprocess-generated-docs.mjs
