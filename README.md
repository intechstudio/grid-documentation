# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The site is served from Cloudflare Workers (static assets only) at https://docs.intech.studio, configured in `wrangler.jsonc`.

- Push to `main`: `.github/workflows/cloudflare-workers.yml` builds and deploys it.
- Pull request: the same workflow uploads a preview version and comments its URL on the PR.
- `grid-api.lua` changes in grid-editor: `.github/workflows/generate-api-docs.yml` regenerates the reference manual and deploys daily.

Cloudflare Workers rejects any single asset over 25 MiB, so keep files in `static/` (videos especially) below that.
