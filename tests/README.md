# Tests

This directory contains all tests for [inaodeng.com](https://inaodeng.com), organized as an independent project with two test suites: unit tests (Vitest) and end-to-end tests (Playwright).

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
  package.json
  vitest.config.ts
  playwright.config.ts
```

## Setup

```bash
cd tests
npm install
```

> Playwright browsers are installed automatically. If needed, run `npx playwright install chromium`.

## Running Tests

```bash
# Run all tests (unit + e2e)
npm test

# Unit tests only
npm run test:unit

# Unit tests in watch mode
npm run test:unit:watch

# E2E tests only (requires the site to be built first)
npm run test:e2e

# E2E tests with interactive UI
npm run test:e2e:ui

# Open last E2E report
npm run test:e2e:report
```

> E2E tests automatically build and preview the site unless `PLAYWRIGHT_BASE_URL` is set.

## Unit Tests

Unit tests use [Vitest](https://vitest.dev/) with [fast-check](https://fast-check.dev/) for property-based testing. They test pure utility functions in `src/utils/` without requiring a browser or server.

### Writing Unit Tests

1. Create a `*.test.ts` file in `tests/unit/`
2. Import the utility from `../../src/utils/your-util`
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
| `wikiFilter.test.ts` | `filterWikiEntries(entries, query)` | Returns all on empty query, subset of input, length ≤ input, case-insensitive |

## E2E Tests

E2E tests use [Playwright](https://playwright.dev/) and run against a built and previewed version of the site. All tests run on Chromium.

### Writing E2E Tests

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

### Coverage

| Spec | What It Tests |
|---|---|
| `code-block.spec.ts` | Code block rendering, copy button behavior |
| `docs.spec.ts` | Docs pages load, sidebar navigation |
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

## CI

In CI (`CI=true`), E2E tests:
- Use 2 workers with 2 retries
- Expect the site to already be built (`npm run preview` only)
- Output GitHub Actions annotations + HTML report
