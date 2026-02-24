# Project Structure

## Root Directory

```
├── .astro/              # Astro build artifacts and type definitions
├── .kiro/               # Kiro AI assistant configuration
├── dist/                # Production build output
├── e2e/                 # Playwright E2E tests (separate package)
├── public/              # Static assets (images, robots.txt, etc.)
├── scripts/             # Build and content management scripts
├── src/                 # Source code
└── instantsearch-app/   # Algolia InstantSearch standalone app
```

## Source Structure (`src/`)

```
src/
├── assets/              # Static assets by locale (en/, zh-cn/)
├── blog/                # Blog content organized by locale
│   ├── en/             # English blog posts (MDX)
│   └── zh-cn/          # Chinese blog posts (MDX)
├── components/          # Astro components
│   ├── guild/          # Guild-specific components
│   └── i18n/           # Internationalization components
├── config/              # Configuration files
├── content/             # Content collections
│   ├── docs/           # Documentation (Markdown/MDX)
│   ├── guild/          # Test automation learning paths
│   └── wiki/           # Testing encyclopedia (Chinese only)
├── data/                # Static data files (navigation, projects)
├── layouts/             # Page layout components
├── pages/               # File-based routing
│   ├── [lang]/         # Dynamic locale routes
│   ├── en/             # English pages
│   └── zh-cn/          # Chinese pages
├── styles/              # Global CSS
├── consts.ts            # Constants
├── content.config.ts    # Content collections schema
├── i18n.ts              # i18n utilities
└── locales.ts           # Locale configuration
```

## Content Organization

### Blog (`src/blog/`)
- Organized by locale (en/, zh-cn/)
- Nested by category folders
- MDX files with frontmatter (title, description, date, tags, categories, series)
- Max 3 tags per post

### Wiki (`src/content/wiki/`)
- Chinese-only testing terminology
- Flat structure with alphabetical organization
- Frontmatter: title (format: "中文 (English)"), description, section (A-Z/#), order

### Guild (`src/content/guild/`)
- Structured learning paths for test automation
- Organized by test type (api-testing, ui-testing, performance-testing)
- Frontmatter includes: testType, framework, language, stage, difficulty, duration, order

### Docs (`src/content/docs/`)
- General documentation
- Organized by locale
- Frontmatter: title, description, section, order

## Key Files

- `astro.config.mjs` - Astro configuration with i18n and integrations
- `src/content.config.ts` - Content collections schema definitions
- `src/locales.ts` - Locale settings (DEFAULT_LOCALE_SETTING, LOCALES_SETTING)
- `src/consts.ts` - Site-wide constants

## Scripts (`scripts/`)

- `algolia-index.mjs` - Index content to Algolia search
- `generate-blog-covers.mjs` - Generate blog cover images
- `update-blog-tags.mjs` - Manage blog tags
- `normalize-wiki.mjs` - Normalize wiki content
- `wiki-toc-and-format.mjs` - Generate wiki table of contents

## E2E Tests (`e2e/`)

Separate npm package with Playwright tests:
- `specs/` - Test specifications (accessibility, performance, SEO, etc.)
- `support/` - Test utilities and constants
- Independent package.json and configuration

## Conventions

- Default locale: Chinese (zh-cn)
- Locale prefix required in URLs (including default)
- Content collections use glob loaders for file discovery
- Rehype-slug auto-generates heading IDs
- Wiki entries use `wiki--` prefix to avoid ID conflicts
