# Prompt Format Normalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make all bilingual Prompt Markdown files render consistently when they contain tables, code blocks, and embedded Markdown.

**Architecture:** Keep each Prompt as Markdown source, use fenced blocks for Markdown examples that must remain copyable text, and use normal headings/tables only for the Prompt document structure. The detail page renders the cleaned source directly and applies shared prose styling.

**Tech Stack:** Astro content collections, Markdown/MDX rendering, CSS custom properties, npm build checks.

---

### Task 1: Inventory and normalize source structure

**Files:**
- Modify: `src/content/prompts/en/**/*.md`
- Modify: `src/content/prompts/zh-cn/**/*.md`

- [ ] Audit all 180 files for heading depth, fenced-code balance, table separators, trailing editorial sections, and language/version parity.
- [ ] Normalize malformed nested headings and blank-line boundaries without changing Prompt meaning.
- [ ] Keep Markdown examples inside fenced code blocks so they render as code rather than page headings/tables.
- [ ] Remove editorial Change Log sections from all Prompt sources as requested.

### Task 2: Keep detail-page rendering source-driven

**Files:**
- Modify: `src/pages/[lang]/prompts/[testingType].astro`

- [ ] Render the normalized source body directly.
- [ ] Keep copy-button content aligned with the displayed Prompt body.
- [ ] Scope tab and table-of-contents behavior to the Prompt detail page.
- [ ] Keep code, table, blockquote, and heading styles theme-aware.

### Task 3: Add structural validation and verify

**Files:**
- Modify: `tests/unit/promptsDetailPage.test.ts` or add the smallest focused source validator under `tests/unit/`.

- [ ] Add checks for balanced fences, valid table separators, no nested-heading anti-patterns, and no Change Log markers.
- [ ] Run focused unit tests and `git diff --check`.
- [ ] Run `npm run build` and inspect representative Chinese/English Prompt pages in light and dark themes.
