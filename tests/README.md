# Tests

This directory contains all tests for [inaodeng.com](https://inaodeng.com), organized as an independent project with unit tests (Vitest) and two E2E suites: the existing Playwright suite and a parallel suite using [TesterArmy e2e](https://github.com/tester-army/e2e).

## Directory Structure

```
tests/
  unit/                    # Unit & property-based tests (Vitest + fast-check)
    readingTime.test.ts    # Reading time calculation
    progressBar.test.ts    # Progress bar width calculation
    scrollToTop.test.ts    # Scroll-to-top button visibility
    wikiFilter.test.ts     # Wiki client-side search filtering
  e2e/
    specs/                 # Playwright E2E test specs
      code-block.spec.ts
      docs.spec.ts
      guild.spec.ts
      interaction.spec.ts
      layout.spec.ts
      links.spec.ts
      locale-switch.spec.ts
      navigation.spec.ts
      page-accessibility.spec.ts
      performance.spec.ts
      reading-progress.spec.ts
      responsive.spec.ts
      scroll-to-top.spec.ts
      search.spec.ts
      seo.spec.ts
      theme.spec.ts
      toc.spec.ts
      wiki-search.spec.ts
      wiki.spec.ts
    support/
      constants.ts         # Shared URL helpers and locale constants
  e2e-next/
    specs/                 # e2e framework specs (kept alongside Playwright)
  e2e.config.ts            # e2e framework runner configuration
  package.json
  vitest.config.ts
  playwright.config.ts
```

## Setup

The site supports Node.js `22.12.0` or later. The e2e framework requires Node.js `22.22.3+` on the Node 22 line or `24.8+`.

```bash
cd tests
npm install
```

> Install the browsers if needed: `npx playwright install chromium` for the existing suite and `npx @e2e-dev/web install chromium` for the new suite.

## Running Tests

```bash
# Run unit tests and both E2E suites
npm test

# Unit tests only
npm run test:unit

# Unit tests in watch mode
npm run test:unit:watch

# Existing Playwright suite
npm run test:e2e

# New e2e framework suite (builds the site first)
npm run test:e2e:next

# Both E2E suites, after the site is built
npm run test:e2e:all

# E2E tests with interactive UI
npm run test:e2e:ui

# Open last E2E report
npm run test:e2e:report
```

> Playwright builds and previews the site automatically unless `PLAYWRIGHT_BASE_URL` is set. The new suite uses the built preview; `test:e2e:next` builds it first, while `test:e2e:next:run` is for CI or an already-built site. Set `E2E_BASE_URL` (or `PLAYWRIGHT_BASE_URL`) to use an external site.

## Unit Tests

Unit tests use [Vitest](https://vitest.dev/) with [fast-check](https://fast-check.dev/) for property-based testing. They primarily test pure utility functions in `src/utils/` without requiring a browser or server. Deterministic Node-side utilities, CLI contracts, and workflow/configuration contracts under `scripts/` may also be covered in this suite when they do not require a browser or running server.

### Writing Unit Tests

1. Create a `*.test.ts` file in `tests/unit/`
2. Import the utility from `../../src/utils/your-util`; for deterministic script or workflow contracts, import the relevant module from `../../scripts/`
3. Use `describe` / `it` / `expect` from `vitest`
4. Use `fc.assert(fc.property(...))` from `fast-check` for property-based tests

```ts
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { myUtil } from '../../src/utils/myUtil';

describe('myUtil', () => {
  it('always returns a positive number', () => {
    fc.assert(
      fc.property(fc.nat(), (n) => {
        expect(myUtil(n)).toBeGreaterThan(0);
      })
    );
  });
});
```

### Coverage

| File | Function | Properties Tested |
|---|---|---|
| `readingTime.test.ts` | `readingTime(wordCount)` | Min 1 min, monotonically non-decreasing, always positive integer |
| `progressBar.test.ts` | `progressBarWidth(scrollY, totalHeight)` | Clamped to [0,100], 0 at start, monotonically non-decreasing |
| `scrollToTop.test.ts` | `shouldShowScrollToTop(scrollY, threshold?)` | False at 0, false ≤ threshold, true > threshold, always boolean |
| `markdownTitleMetadata.test.ts` | Markdown title and stable heading IDs | Preserves visible title text, explicit IDs, and duplicate-heading slugs |
| `markdownPresentation.test.ts` | Markdown presentation transform | Removes source-only TOCs and template-rendered titles; preserves Wiki heading structure |
| `wikiFilter.test.ts` | `filterWikiEntries(entries, query)` | Returns all on empty query, subset of input, length ≤ input, case-insensitive |

## E2E Tests

The existing E2E suite uses [Playwright](https://playwright.dev/). New migration specs use [TesterArmy e2e](https://github.com/tester-army/e2e) in parallel; both run on Chromium and remain enabled while the new framework is evaluated. The new suite currently uses deterministic locators and assertions, so it does not require a model provider or API key.

### Writing E2E Tests

For the existing Playwright suite:

1. Create a `*.spec.ts` file in `tests/e2e/specs/`
2. Import helpers from `../support/constants`
3. Use `test` and `expect` from `@playwright/test`

```ts
import { test, expect } from '@playwright/test';

test('page loads correctly', async ({ page }) => {
  await page.goto('/zh-cn/blog/');
  await expect(page).toHaveTitle(/博客/);
});
```

For the new framework, create `*.e2e.ts` files under `tests/e2e-next/specs/`, import `test` from `@e2e-dev/web` and `expect` from `e2e`, and navigate with `app.open('/path')`. Use `screen` for semantic locators and `browser.locator()` for CSS selectors. Keep old Playwright specs until the migration is stable and coverage has been reviewed.

### Migration policy

The framework is still pre-1.0, so keep its package versions pinned and review upgrades before changing the lockfile. Retire the Playwright suite only after the replacement coverage is reviewed and the new suite has passed repeatedly in CI; keep any behavior that still depends on unsupported APIs in the legacy suite until it has a reviewed replacement.

The new suite currently has a counterpart for each of the 46 Playwright spec files, and both suites remain enabled. The legacy contrast audit now uses reduced motion so it samples settled text instead of the first frame of an entrance animation. Same-origin link status checks grew from 28 route pages in the legacy scan (main, extra, and blog detail pages) to 40, adding both Wiki indexes and five representative Wiki articles per language. The new suite also checks homepage image loading, TOC scroll position, share controls in both languages, and author-profile link destinations. Two behaviors still rely on Playwright-only browser-context features: code-copy visibility on a real touch device (`isMobile` / `hasTouch`) and native clipboard permission/write verification (the new suite uses a deterministic clipboard shim). Keep these checks in the old suite until equivalent support is available and reviewed.

The framework sends anonymous command, version, OS, and run-summary telemetry; it does not send test names, app data, or credentials. Disable it locally with `E2E_TELEMETRY_DISABLED=1`. CI runs already set this opt-out.

### Coverage

| Spec | What It Tests |
|---|---|
| `code-block.spec.ts` | Code block rendering, copy button behavior |
| `detail-page-engagement-actions.spec.ts` | Localized support and discussion links, TOC placement, Wiki title anchors, and Giscus states |
| `docs.spec.ts` | Retired demo routes return 404; live content keeps shared sidebar navigation |
| `guild.spec.ts` | Guild homepage, framework cards, filter pills |
| `interaction.spec.ts` | Tag clicks, search modal, interactive elements |
| `layout.spec.ts` | Header, footer, overall page structure |
| `links.spec.ts` | Internal links return 200, no broken links |
| `locale-switch.spec.ts` | Language switcher toggles between en / zh-cn |
| `navigation.spec.ts` | Nav links, active states, mobile menu |
| `page-accessibility.spec.ts` | ARIA roles, landmark regions, keyboard focus |
| `performance.spec.ts` | Lazy loading, no render-blocking resources |
| `reading-progress.spec.ts` | Progress bar appears and updates on scroll |
| `responsive.spec.ts` | Layout adapts at mobile / tablet / desktop breakpoints |
| `scroll-to-top.spec.ts` | Button appears after scroll, returns to top |
| `search.spec.ts` | Algolia / local search modal opens and returns results |
| `seo.spec.ts` | Meta tags, Open Graph, canonical URLs, structured data |
| `theme.spec.ts` | Light / dark theme toggle persists |
| `toc.spec.ts` | Table of contents renders, active heading highlights |
| `wiki-search.spec.ts` | Wiki client-side filter works correctly |
| `wiki.spec.ts` | Wiki index and entry pages load |

## Environment Variables

E2E tests respect the following environment variable:

| Variable | Default | Description |
|---|---|---|
| `PLAYWRIGHT_BASE_URL` | `http://localhost:4321` | Override the base URL for E2E tests |
| `E2E_BASE_URL` | unset | Override the base URL for the new e2e framework suite |

## CI

In CI (`CI=true`), E2E tests:
- Use 2 workers with 2 retries
- Expect the site to already be built (`npm run preview` only)
- Install the browser versions required by both runners
- Run the Playwright suite and the new e2e framework suite; the new suite uses 2 workers and 1 retry
- Disable e2e framework telemetry
