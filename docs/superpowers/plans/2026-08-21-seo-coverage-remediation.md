# SEO Coverage Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Resolve missing English Wiki content by generating local English detail pages and add a build-time guard for page and sitemap coverage.

**Architecture:** Reuse the localized Wiki route and pair each English detail page with its Chinese counterpart. Include indexable English detail pages in the Astro sitemap, then validate generated pages and sitemap entries with a small zero-dependency Node script.

**Tech Stack:** Astro 6, TypeScript/Astro components, Node.js ESM, npm scripts.

---

### Task 1: Generate local English Wiki pages

**Files:**
- Modify: `src/pages/[lang]/wiki/[...slug].astro`

- [ ] Generate a local English detail page for each English Wiki entry alongside the existing Chinese content pages.
- [ ] Validate that each English page has a self-canonical URL and appears in the XML sitemap.

### Task 2: Add generated SEO output validation

**Files:**
- Create: `scripts/seo-build-check.mjs`
- Modify: `package.json`

- [ ] Validate that the generated sitemap contains English Wiki index and detail URLs while excluding noindex pages.
- [ ] Validate that representative English Wiki pages contain local article content, language metadata, and a self-canonical URL.
- [ ] Exit non-zero with actionable diagnostics when these invariants fail.

### Task 3: Verify the remediation

**Files:**
- Modify: `docs/temporary/seo/SEO-baseline-report-v1.md` only if the existing checker changes it intentionally; otherwise leave generated reports untouched.

- [ ] Run `npm run seo:check`.
- [ ] Run `npm run build`.
- [ ] Run `npm run seo:build:check`.
- [ ] Run `git diff --check` and inspect the final diff.
