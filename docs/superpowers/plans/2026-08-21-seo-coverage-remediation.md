# SEO Coverage Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce the documented 404 coverage caused by legacy English Wiki URLs while keeping redirect and noindex pages out of the sitemap, and add a build-time guard for this class of SEO regression.

**Architecture:** Reuse the existing localized Wiki route. Generate legacy English Wiki paths from the existing Wiki collection and return the route's intended external redirect. Keep the Astro sitemap filter as the indexation boundary, then validate the generated static output with a small zero-dependency Node script.

**Tech Stack:** Astro 6, TypeScript/Astro components, Node.js ESM, npm scripts.

---

### Task 1: Generate the intended English Wiki redirects

**Files:**
- Modify: `src/pages/[lang]/wiki/[...slug].astro`

- [ ] Add English redirect paths for every Wiki entry alongside the existing Chinese content paths.
- [ ] Preserve the existing `Astro.redirect("https://ray.run/wiki#<slug>")` behavior for English paths.
- [ ] Keep the sitemap filter excluding `/en/wiki/` redirect pages.

### Task 2: Add generated SEO output validation

**Files:**
- Create: `scripts/seo-build-check.mjs`
- Modify: `package.json`

- [ ] Validate that `dist/sitemap-0.xml` exists and does not contain the noindex root URL or `/en/wiki/` redirect URLs.
- [ ] Validate that representative generated English Wiki URLs exist and contain the intended redirect target.
- [ ] Exit non-zero with actionable diagnostics when these invariants fail.

### Task 3: Verify the remediation

**Files:**
- Modify: `docs/temporary/seo/SEO-baseline-report-v1.md` only if the existing checker changes it intentionally; otherwise leave generated reports untouched.

- [ ] Run `npm run seo:check`.
- [ ] Run `npm run build`.
- [ ] Run `npm run seo:build:check`.
- [ ] Run `git diff --check` and inspect the final diff.
