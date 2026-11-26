# Tests

This directory contains the independent test project for [inaodeng.com](https://inaodeng.com): Vitest unit tests and the TesterArmy E2E suite.

## Structure

```text
tests/
  unit/                    # Vitest and fast-check tests
  e2e/specs/                # TesterArmy browser acceptance tests
  e2e/support/              # Shared route constants and accessibility helpers
  scripts/visual-sampling.mjs # Optional screenshot/layout sampling utility
  e2e.config.ts             # TesterArmy runner configuration
  vitest.config.ts
  package.json
```

## Setup and commands

The site requires Node.js `>=22.12.0`. The test project requires Node.js `^22.22.3 || >=24.8.0`.

```bash
cd tests
npm ci
npx @e2e-dev/web install chromium --with-deps

# Unit tests and E2E tests
npm test

# Unit tests only
npm run test:unit

# Build the current site and run E2E against its preview
npm run test:e2e

# Run against an already-built site (CI uses this after the build step)
npm run test:e2e:run

# Explicit build-then-test alias
npm run test:e2e:build

# Alias used by CI and repository guidance
npm run test:e2e:all
```

Set `E2E_BASE_URL` to test another site. `PLAYWRIGHT_BASE_URL` remains supported as a compatibility alias.

The old Playwright Test E2E suite and its runner config have been retired after behavior review. The `playwright` package remains only for the optional screenshot sampling utility; install its Chromium browser with `npx playwright install chromium` before running `npm run visual:sampling`. This utility is not part of the E2E suite or CI gate.

## Unit tests

Unit tests use [Vitest](https://vitest.dev/) and [fast-check](https://fast-check.dev/). Keep behavior logic testable at module boundaries. For every new or modified behavior-logic branch, add unit cases that exercise all outcomes; the acceptance target is 100% branch coverage for that changed logic, not repository-wide coverage.

Create `*.test.ts` files under `tests/unit/`. Import `describe`, `it`, and `expect` from `vitest`; use `fc.assert(fc.property(...))` for properties that should hold across a range of inputs.

```ts
import { describe, expect, it } from "vitest";
import fc from "fast-check";
import { myUtil } from "../../src/utils/myUtil";

describe("myUtil", () => {
  it("returns a positive number", () => {
    fc.assert(fc.property(fc.nat(), (value) => {
      expect(myUtil(value)).toBeGreaterThan(0);
    }));
  });
});
```

## E2E tests

E2E tests use [TesterArmy e2e](https://github.com/tester-army/e2e) with deterministic locators and assertions; they do not require a model provider or API key. Tests use Chromium through the framework's browser install.

Create `*.e2e.ts` files under `tests/e2e/specs/`. Import `test` from `@e2e-dev/web` and `expect` from `e2e`, open routes with `app.open('/path')`, use `screen` for semantic locators, and use `browser.locator()` for CSS selectors.

```ts
import { test } from "@e2e-dev/web";
import { expect } from "e2e";

test("the localized blog index opens", async ({ app, screen }) => {
  await app.open("/zh-cn/blog/");
  await expect(screen.getByRole("heading", { name: "博客" })).toBeVisible();
});
```

### Coverage policy

- Core E2E journeys cover every behavior in the acceptance scope, including both locales and required responsive breakpoints.
- Non-core E2E behavior has at least one happy path and one reverse/negative case.
- Coverage is judged by behavior and logic branches, not by matching the old test count. Redundant assertions that only pinned transient styling or duplicate DOM details were not carried over as separate cases.
- Clipboard shims verify the page's copy feedback and payload. They do not prove operating-system clipboard permissions or physical-device behavior.

The migrated suite covers the former 46 E2E domains in the canonical `tests/e2e/specs/` directory. The test framework telemetry can be disabled with `E2E_TELEMETRY_DISABLED=1`; CI already opts out.

## CI

The E2E workflow runs the unit suite, builds the site, installs the TesterArmy Chromium browser, and runs the single E2E suite with two workers and one retry. It does not install or invoke Playwright Test.
