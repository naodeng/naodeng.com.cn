# AI Testing Real Value vs Hype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a standalone Chinese blog post based primarily on the user's reviewed draft and a faithful English counterpart, while preserving the existing AppAgent Day 2 posts.

**Architecture:** Add two MDX files in the existing AI Testing blog area, following the repository's content schema and metadata conventions. Keep the draft's evidence boundaries, tables, Mermaid diagrams, and JavaScript example; translate its sections and claims into English in the same order.

**Tech Stack:** Astro content collections, MDX, Markdown, Mermaid code fences.

**Spec:** `docs/superpowers/specs/2026-11-11-ai-testing-real-value-vs-hype-design.md`

## Global Constraints

- The attached reviewed draft is the primary content.
- Keep the existing 2024 AppAgent Day 2 posts unchanged.
- Do not add new research claims or present Testkube/vendor-reported figures as independently verified.
- Do not publish, deploy, or modify blog navigation or unrelated content.
- Render external references as `Name: full URL` text, as required for blog portability.
- Use the current publication date, `nao.deng`, and the existing AI Testing category conventions.
- Do not install dependencies or run tests as part of this content task.

## Review Focus

- Evidence attribution: preserve the distinction between the Ministry of Testing commentary, Testkube's vendor article, and editorial recommendations.
- Claim scope: keep sample sizes, dates, percentages, caveats, and the limits of cited studies aligned with the draft and sources.
- Bilingual parity: retain all sections, examples, tables, diagrams, and caveats in the same order.
- Link portability: every external link must show its name and complete absolute URL as plain text.
- Content rendering: keep the JavaScript and Mermaid fences intact and use frontmatter fields accepted by the blog schema.

---

### Task 1: Add and humanizer-review the Chinese article

**Files:**
- Create: `src/blog/zh-cn/AI-Testing/ai-testing-real-value-vs-hype.mdx`
- Source material: `/Users/inaodeng/Downloads/ai-testing-real-value-vs-hype-reviewed.md` (read-only)

- [x] Add the blog frontmatter using the approved title, description, publication date, author, tags, and AI Testing category.
- [x] Bring over the full reviewed draft, retaining its section order, distinct recommendations, data caveats, tables, Mermaid diagrams, and JavaScript example; render source references with visible full URLs.
- [x] Review the Chinese prose with `humanizer-zh`, changing only awkward, repetitive, or formulaic passages and preserving the author's claims and certainty.
- [x] Manually compare the result with the attachment for omitted details, changed attribution, date or number drift, and broken code fences.

### Task 2: Add the English counterpart

**Files:**
- Create: `src/blog/en/AI-Testing/ai-testing-real-value-vs-hype.mdx`
- Consumes: Chinese article from Task 1

- [x] Add matching English frontmatter with the same date, author, tags, category, and slug.
- [x] Translate every Chinese section in the same order, preserving examples, tables, Mermaid diagrams, source attributions, and evidence limitations.
- [x] Manually compare headings, claims, dates, values, and visible source URLs across the two editions.

### Task 3: Check the editorial deliverables

**Files:**
- Review: `src/blog/zh-cn/AI-Testing/ai-testing-real-value-vs-hype.mdx`
- Review: `src/blog/en/AI-Testing/ai-testing-real-value-vs-hype.mdx`

- [x] Confirm frontmatter fields match `src/content.config.ts`, the two section structures align, and no external Markdown links hide their URLs.
- [x] Check whitespace and JavaScript/Mermaid fence balance; keep the existing AppAgent Day 2 files unchanged.
- [x] Check whether Astro is installed; it is unavailable, so no build was run because the plan excludes installing dependencies.
