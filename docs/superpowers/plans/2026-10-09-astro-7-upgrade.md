# Astro 7 Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the Astro site from Astro 6 to the latest stable Astro 7 release on the `astro7` branch, then adapt its page layouts for 4K and 5K desktop viewports.

**Architecture:** Use Astro's official upgrade CLI to update Astro and compatible official integrations. Apply migration changes required by the v7 guide, then make page-specific wide-screen adjustments that keep prose readable and show more cards or list items at once.

**Tech Stack:** Astro, npm, Node.js, MDX, Vite.

**Spec:** https://docs.astro.build/en/guides/upgrade-to/v7/

## Global Constraints

- Base the branch on `origin/main` at `f7001ba72d836a5033902650c0657603e9128ec4`.
- Preserve the repository's npm package manager and Node.js `>=22.12.0` engine requirement.
- Preserve existing routes, bilingual content, SEO behavior, and unrelated working-tree changes.
- Upgrade to the latest stable Astro 7 release available at execution time.

## Review Focus

- Vite 8 handling of `vite.build.rollupOptions.output.sanitizeFileName`.
- Astro 7's Rust Markdown/MDX pipeline with the site's custom remark and rehype plugins.
- Astro 7's changed HTML whitespace defaults against generated pages and SEO checks.
- Peer compatibility of `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/rss`, and `@astrojs/check`.

### Task 1: Upgrade Astro dependencies

**Files:** Modify `package.json` and `package-lock.json`.

- [x] Run the official `npx @astrojs/upgrade` command in the `astro7` worktree.
- [x] Confirm the installed Astro version is the latest stable 7.x release and inspect all direct dependency changes.
- [x] Install the resulting lockfile dependencies with `npm ci`.

**Verification:** Inspect npm's resolved dependency tree and peer dependency output; no unresolved peer conflicts.

### Task 2: Resolve migration issues

**Files:** Modify `astro.config.mjs`, `package.json`, `package-lock.json`, or application source for Astro 7 compatibility.

- [x] Keep the site's custom remark/rehype plugins on the supported `unified()` processor by adding `@astrojs/markdown-remark` and configuring `markdown.processor`.
- [x] Review the v6-to-v7 migration changes against the current Astro configuration.
- [x] Run `npm run build` and repair migration-caused errors without changing unrelated content or routes.
- [x] Inspect generated representative text output for whitespace changes caused by Astro 7's JSX-style HTML compression default; preserve the v6 behavior where required.

**Verification:** `npm run build` exits successfully, including `astro check`, static generation, and SEO build checks.

### Task 3: Verify branch and scope

- [x] Run the full unit and E2E suite (`cd tests && npm test`) and `git diff --check`.
- [x] Review the final diff and `git status --short --branch`; confirm the original checkout remains unchanged.

**Verification:** Report exact command results, changed paths, branch base, and any remaining runtime limitations.

### Task 4: Adapt all page families for wide screens

**Files:** Update shared layout sizing and page-specific layouts where wider screens otherwise leave excessive whitespace or stretch text and cards too far.

- [x] Increase the shared desktop content width while retaining existing tablet and mobile behavior.
- [x] Review representative home, blog, wiki, prompt, QA Skill, Guild, legal, and aggregate-list pages; add page-specific limits or extra columns where needed.
- [x] Verify representative routes at a 2560px browser viewport and run the complete unit and E2E suites after the final changes.

**Verification:** Wide-screen pages use the available space without excessive prose line length, oversized controls, or sparse card grids.
