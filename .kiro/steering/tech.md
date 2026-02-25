# Tech Stack

## Core

- **Framework**: Astro 5 (SSG, `output: static`)
- **Language**: TypeScript + JavaScript (ESM, `"type": "module"`)
- **Content**: MDX (blog posts) and Markdown (wiki, guild, docs)
- **Node**: >=20 required

## Key Libraries

- `@astrojs/mdx` — MDX integration
- `@astrojs/sitemap` — sitemap generation with i18n support
- `@astrojs/rss` — RSS feeds
- `rehype-slug` — auto heading IDs in markdown
- `algoliasearch` — search index push + frontend search
- `marked` — markdown parsing in scripts
- `sharp` — image processing (cover generation script)
- `wrangler` — Cloudflare Workers deployment

## Deployment

- Primary: Cloudflare Workers via `wrangler deploy`
- Secondary: GitHub Pages via `gh-pages` workflow

## Testing

- Unit: Vitest + fast-check (in `tests/unit/`)
- E2E: Playwright (in `tests/e2e/`, shared `tests/package.json`)

## Common Commands

```bash
# Development
npm run dev           # start dev server
npm run start         # dev server + open browser

# Build & Preview
npm run build         # astro check + astro build
npm run preview       # preview static build
npm run preview:worker  # build + wrangler dev (Cloudflare local)

# Deploy
npm run deploy        # build + wrangler deploy

# Content utilities
npm run generate-covers     # generate blog cover images
npm run update-blog-tags    # update/normalize blog tags
npm run algolia-index       # push search index to Algolia (requires .env)

# E2E & Unit tests (run from tests/)
cd tests && npm install
npm run test:unit        # unit tests only
npm run test:e2e         # e2e tests only
npm run test             # all tests
```

## Environment Variables

Copy `.env.example` to `.env`. All vars are optional — features degrade gracefully when unset.

- `PUBLIC_GA_MEASUREMENT_ID` — Google Analytics GA4
- `PUBLIC_GISCUS_REPO`, `PUBLIC_GISCUS_REPO_ID`, `PUBLIC_GISCUS_CATEGORY`, `PUBLIC_GISCUS_CATEGORY_ID` — Giscus comments
- `PUBLIC_ALGOLIA_APP_ID`, `PUBLIC_ALGOLIA_SEARCH_KEY`, `PUBLIC_ALGOLIA_INDEX_NAME` — Algolia frontend
- `ALGOLIA_ADMIN_KEY` — required only for `npm run algolia-index`
