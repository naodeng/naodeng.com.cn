# GSC SEO Coverage Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove avoidable SEO coverage noise and broken internal links identified in the 2026-09-14 Google Search Console exports while preserving valid legacy compatibility routes and the user's unrelated blog drafts.

**Architecture:** Centralize URL policy in small pure helpers: canonical Wiki slugs are lowercase, and only canonical one-segment Chinese Wiki URLs may enter the XML sitemap. Keep legacy paths routable as 301 compatibility redirects. Repair source Markdown links and strengthen the existing static SEO check so the same malformed-link and legacy-path classes fail before publication.

**Tech Stack:** Astro 6, TypeScript, Node.js ESM, Vitest, npm.

**Spec:** The user's GSC review conclusion in the current conversation, backed by the four supplied Coverage Drilldown workbooks.

## Global Constraints

- Keep `/en/wiki/` as the existing external `ray.run/wiki` redirect surface and exclude it from the XML sitemap.
- Keep only canonical `/zh-cn/wiki/<lowercase-slug>/` detail URLs indexable and discoverable in the XML sitemap.
- Do not invent redirects for retired content without a clear equivalent; use 404/410 and remove internal references instead.
- Do not modify the two pre-existing untracked `qcov-quality-evidence-gap-engine.mdx` files.
- Use npm and the repository's existing Astro/Vitest checks.

---

### Task 1: Add failing URL-policy regression tests

**Files:**
- Create: `src/utils/seoUrls.ts`
- Create: `tests/unit/seoUrls.test.ts`

**Interfaces:**
- Produces `canonicalWikiSlug(slug: string): string` and `shouldIncludeInSitemap(page: string): boolean` for Astro configuration and route code.

- [ ] **Step 1: Write the failing tests**

```ts
import { describe, expect, it } from "vitest";
import { canonicalWikiSlug, shouldIncludeInSitemap } from "../../src/utils/seoUrls";

describe("SEO URL policy", () => {
  it("normalizes Wiki slugs to lowercase", () => {
    expect(canonicalWikiSlug("A-B-Testing")).toBe("a-b-testing");
    expect(canonicalWikiSlug("manual-testing")).toBe("manual-testing");
  });

  it.each([
    ["https://inaodeng.com/", false],
    ["https://inaodeng.com/en/wiki/inspection/", false],
    ["https://inaodeng.com/zh-cn/wiki/wiki/inspection/", false],
    ["https://inaodeng.com/zh-cn/wiki/inspection.md/", false],
    ["https://inaodeng.com/zh-cn/wiki/A-B-Testing/", false],
    ["https://inaodeng.com/zh-cn/wiki/a-b-testing/", true],
    ["https://inaodeng.com/zh-cn/wiki/", true],
    ["https://inaodeng.com/zh-cn/blog/", true],
  ])("applies sitemap inclusion policy to %s", (page, expected) => {
    expect(shouldIncludeInSitemap(page)).toBe(expected);
  });
});
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run: `cd tests && npx vitest --run unit/seoUrls.test.ts`

Expected: FAIL because `src/utils/seoUrls.ts` does not yet provide the required helpers.

- [ ] **Step 3: Implement the minimal helpers**

Implement lowercase slug normalization and pathname-based filtering. Reject the root, English Wiki paths, nested Chinese Wiki paths, `.md` aliases, and uppercase Chinese Wiki detail aliases; keep the Chinese Wiki index and all unrelated canonical pages.

- [ ] **Step 4: Run the focused test and verify it passes**

Run: `cd tests && npx vitest --run unit/seoUrls.test.ts`

Expected: PASS.

---

### Task 2: Apply the URL policy to Wiki routes and sitemap generation

**Files:**
- Modify: `astro.config.mjs`
- Modify: `public/_redirects`
- Modify: `src/data/wiki.ts`
- Modify: `src/pages/[lang]/wiki/[...slug].astro`
- Modify: `src/pages/[lang]/resources.astro`
- Modify: `tests/e2e/support/constants.ts`
- Modify: `scripts/seo-build-check.mjs`

**Interfaces:**
- Consumes `canonicalWikiSlug` and `shouldIncludeInSitemap` from `src/utils/seoUrls.ts`.
- Produces lowercase canonical Wiki routes, 301 compatibility routes for old casing/filename variants, and a sitemap with no legacy Chinese Wiki aliases.

- [ ] **Step 1: Add route-policy assertions before implementation changes**

Extend `tests/unit/seoUrls.test.ts` with `canonicalWikiSlug("A-B-Testing") === "a-b-testing"`, and add source-contract assertions that `astro.config.mjs` imports `shouldIncludeInSitemap` and the Wiki route marks a case-only alias with `legacyCanonical`.

- [ ] **Step 2: Run the focused test to verify the new route contract fails**

Run: `cd tests && npx vitest --run unit/seoUrls.test.ts`

Expected: FAIL on the source-contract assertions because the existing config and route still use the old inline policy and leave the original filename casing indexable.

- [ ] **Step 3: Implement the minimal route changes**

Make `wikiIdToSlug` return lowercase canonical slugs. Use the helper in Wiki URL-producing pages. In `getStaticPaths`, generate canonical lowercase routes and keep `.md` and nested `wiki/` aliases as `legacyCanonical` redirects. Handle the reported `A-B-Testing` filename-casing alias in `public/_redirects` before static file resolution; do not generate a second case-only directory because macOS can map it over the canonical directory. Replace the sitemap filter with `shouldIncludeInSitemap`.

- [ ] **Step 4: Update the build guard**

Extend `scripts/seo-build-check.mjs` to fail if `dist/sitemap-0.xml` contains `/zh-cn/wiki/wiki/`, a `/zh-cn/wiki/*.md/` alias, or an uppercase Chinese Wiki detail URL, and to verify the lowercase `/zh-cn/wiki/a-b-testing/` page exists.

- [ ] **Step 5: Run unit and build-policy checks**

Run: `cd tests && npx vitest --run unit/seoUrls.test.ts`

Expected: PASS.

---

### Task 3: Repair source Markdown links and add a regression contract

**Files:**
- Create: `tests/unit/wikiLinkQuality.test.ts`
- Modify: `src/content/wiki/*.md` for the 23 files containing malformed nested links
- Modify: `src/content/wiki/agile-testing.md`
- Modify: `src/content/wiki/actual-result.md`
- Modify: `src/content/wiki/astqb.md`
- Modify: `src/content/wiki/black-box-testing.md`
- Modify: `src/content/wiki/keyword-driven-testing.md`
- Modify: `src/content/wiki/*.md` references to `A-B-Testing`
- Modify: `src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-testing-strategy-2-more-reasonable-testing-strategy-for-UI-testing.mdx`
- Modify: `src/blog/zh-cn/QA-Glossary-Wiki/QA-Glossary-Wiki-api.mdx`
- Modify: `src/data/wiki-related.json`

**Interfaces:**
- Produces source content with no nested `[[...]]` link syntax, no legacy relative Wiki paths, and canonical lowercase A/B Testing links.

- [ ] **Step 1: Write the failing content-quality tests**

The test will scan `src/content/wiki` and assert that no Markdown source contains `[[`, no Wiki link uses `../<letter>/...`, no `/sections/...` path is used as a site-relative link, and no site Wiki URL contains `A-B-Testing`.

- [ ] **Step 2: Run the focused test to verify the reported defects are caught**

Run: `cd tests && npx vitest --run unit/wikiLinkQuality.test.ts`

Expected: FAIL with the existing malformed-link and legacy-link paths.

- [ ] **Step 3: Repair the source content**

Collapse duplicated Markdown links to one link while preserving visible text, repair the malformed black-box inspection link, convert the three relative Wiki paths to canonical absolute paths, replace the invalid site-relative UI-testing reference with its existing GitHub source URL, correct the `wTiki` GitHub path to the `T` section, and normalize A/B Testing links and related references to lowercase.

- [ ] **Step 4: Run the focused content test**

Run: `cd tests && npx vitest --run unit/wikiLinkQuality.test.ts`

Expected: PASS.

---

### Task 4: Strengthen static SEO checks and verify the full change

**Files:**
- Modify: `scripts/seo-static-check.mjs`
- Modify: `scripts/generate-wiki-related.mjs`
- Modify: `scripts/wiki-aiwiki-integrity-check.mjs`
- Modify: `tests/e2e/specs/seo.spec.ts`

**Interfaces:**
- Consumes canonical Wiki source slugs and Markdown links.
- Produces actionable static failures for malformed nested links, relative Wiki aliases, and non-canonical Wiki casing.

- [ ] **Step 1: Add regression assertions to the static checker contract**

Add unit-level source assertions for the checker to report malformed Markdown links and compare Wiki links case-insensitively against canonical slugs.

- [ ] **Step 2: Run the targeted tests and confirm the old implementation fails**

Run: `cd tests && npx vitest --run unit/wikiLinkQuality.test.ts unit/seoUrls.test.ts`

Expected: FAIL before the checker and source repairs, then PASS after the implementation.

- [ ] **Step 3: Implement checker and E2E sitemap assertions**

Have `seo-static-check.mjs` count malformed nested Wiki Markdown and invalid relative Wiki links, and have `seo.spec.ts` assert that the generated sitemap excludes both English and Chinese legacy Wiki patterns.

- [ ] **Step 4: Run all relevant validation commands**

Run:

```bash
cd tests && npm run test:unit
cd .. && npm run wiki:style:check
cd .. && npm run wiki:integrity:check
cd .. && npm run seo:check
cd .. && npm run build
cd .. && npm run seo:build:check
cd .. && git diff --check
```

Expected: every command exits 0; any generated `docs/temporary/seo/` changes are inspected and unrelated pre-existing changes are preserved.
