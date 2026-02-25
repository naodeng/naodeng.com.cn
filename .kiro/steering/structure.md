# Project Structure

```
src/
  blog/           # Blog post MDX files, organized by locale then category
    en/           #   English posts (AI-Testing, API-Automation-Testing, etc.)
    zh-cn/        #   Chinese posts (same categories + QA-Glossary-Wiki, UI-Automation-Testing)
  content/        # Astro content collections (non-blog)
    docs/         #   /docs pages, split by en/ and zh-cn/
    guild/        #   Automation Testing Guild articles, split by en/ and zh-cn/
    wiki/         #   QA Wiki entries (Markdown, Chinese-only, language-agnostic filenames)
  pages/          # Astro file-based routing
    [lang]/       #   All locale-prefixed routes (blog, docs, guild, wiki, tags, series, archive…)
    en/guild/     #   Static English guild pages
    zh-cn/guild/  #   Static Chinese guild pages
    index.astro   #   Root redirect
    404.astro     #   Root 404
  components/     # Astro components
    guild/        #   Guild-specific components
    i18n/         #   Locale switcher, HTML head, locale suggestion
  layouts/        # Page layouts: Base.astro, Article.astro, Docs.astro
  styles/         # Global CSS: reset, base, layout, global
  config/         # Feature configs (guild.config.ts)
  data/           # Static data: docsNav.ts, guild.ts, projects.ts, wiki.ts
  assets/         # Static SVG assets split by locale (en/, zh-cn/)
  consts.ts       # All site-wide string constants (bilingual Multilingual objects)
  i18n.ts         # i18n helpers: useTranslations(), getLocalePaths(), localeParams
  locales.ts      # Locale definitions; DEFAULT_LOCALE_SETTING = "en"
  content.config.ts  # Astro content collection schemas (blog, docs, wiki, guild)

scripts/          # Node utility scripts (cover generation, tag updates, Algolia indexing)
e2e/              # Playwright E2E tests (own package.json)
public/           # Static assets served as-is
```

## Routing Conventions

- All content routes are prefixed with `[lang]` (e.g. `/en/blog/`, `/zh-cn/wiki/`)
- Default locale is `en`; `prefixDefaultLocale: true` so `/en/` is always explicit
- Wiki is Chinese-only; English nav links to external ray.run
- Guild pages exist for both locales

## Content Collections

| Collection | Base path | Format | Notes |
|---|---|---|---|
| `blog` | `src/blog/` | MDX | Required: title, description, date, tags (1–3) |
| `docs` | `src/content/docs/` | MD/MDX | Optional: section, order for sidebar |
| `wiki` | `src/content/wiki/` | MD | IDs prefixed `wiki--` to avoid slug collisions |
| `guild` | `src/content/guild/` | MD | Required: testType, framework, language, stage, difficulty, order |

## i18n Pattern

All user-facing strings live in `src/consts.ts` as `Multilingual` objects `{ en: "...", "zh-cn": "..." }`.
Use `useTranslations(lang)` from `src/i18n.ts` to resolve them in components and pages.

## Component Conventions

- Components are `.astro` files
- Props typed inline with TypeScript interfaces
- Locale-aware components accept a `lang: Lang` prop and call `useTranslations(lang)`
