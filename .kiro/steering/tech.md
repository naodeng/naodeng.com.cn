# Tech Stack

## Core Framework

- **Astro 5.x** - Static site generator with content collections
- **MDX** - Markdown with JSX support for blog and content
- **TypeScript** - Type-safe development
- **Node.js** - Requires version >=20

## Key Libraries

- **@astrojs/mdx** - MDX integration
- **@astrojs/sitemap** - Sitemap generation with i18n support
- **@astrojs/rss** - RSS feed generation
- **rehype-slug** - Auto-generate heading IDs
- **algoliasearch** - Search functionality
- **marked** - Markdown parsing for scripts

## Deployment

- **Cloudflare Workers** - Edge deployment platform
- **Wrangler** - Cloudflare Workers CLI tool

## Testing

- **Playwright** - E2E testing framework (in e2e/ directory)
- **@astrojs/check** - Astro type checking

## Common Commands

### Development
```bash
npm run dev          # Start dev server
npm start            # Start dev server and open browser
```

### Build & Deploy
```bash
npm run build        # Type check + build (runs astro check first)
npm run preview      # Preview production build locally
npm run preview:worker  # Build + preview with Wrangler
npm run deploy       # Build + deploy to Cloudflare Workers
```

### Content Management
```bash
npm run generate-covers     # Generate blog cover images
npm run update-blog-tags    # Update blog tags
npm run algolia-index       # Index content to Algolia
npm run create-instantsearch-app  # Create Algolia InstantSearch app
```

### Testing
```bash
cd e2e && npm test          # Run Playwright E2E tests
cd e2e && npm run test:ui   # Run Playwright with UI mode
```

## Build Process

1. Type checking with `astro check`
2. Static site generation with `astro build`
3. Deployment to Cloudflare Workers via `wrangler deploy`

## Content Collections

Astro content collections are defined in `src/content.config.ts`:
- **blog** - MDX files with tags, categories, series
- **docs** - Markdown/MDX documentation
- **wiki** - Testing encyclopedia (Chinese)
- **guild** - Test automation learning paths

All collections use glob loaders for file-based content management.
