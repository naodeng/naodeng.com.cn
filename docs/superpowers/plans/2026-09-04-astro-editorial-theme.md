# Astro Editorial Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a responsive, restrained light/dark editorial UI without changing a single existing route, link target, content item, or deployment setting.

**Architecture:** Define semantic CSS tokens and Astro-derived layout primitives once, then restyle existing components and page CSS in place. Use a 1280px standard container, 24px/32px gutters, 768px prose column, and 80px Header.

**Tech Stack:** Astro, scoped CSS, global CSS custom properties, Vitest, Playwright.

**Spec:** `docs/superpowers/specs/2026-09-04-astro-editorial-theme-design.md`

## Implementation status — 2026-09-04

The editorial token system, shared navigation and Footer, home, blog, docs, Prompt, QA Skills, and Guild presentation surfaces were delivered in PR #112 (merged as `9bdb753d2`). The earlier local Chromium permission limitation is historical, not the current acceptance status.

## Review closure — 2026-09-05

The follow-up repairs synchronize DESIGN.md and .impeccable/design.json, retire the old theme guidance, cap QA Skills reading width at 768px, remove Footer gradient/blur remnants, and limit card hover lift to 2px. Verification results are recorded in [the review closure record](../../verification/2026-09-05-editorial-review.md).

The checkboxes below preserve the original execution plan, not a current outstanding-task list. Historical failing-first runs and per-step commits were not independently recorded; they must not be retroactively marked as verified. Current acceptance is based on the implemented source and the explicit verification record above.

## Global Constraints

- Preserve every existing `href`, route, external URL, content collection, SEO field, and deployment setting.
- Use `--layout-max: 1280px`, `--layout-gutter: 24px` rising to `32px` at `768px`, `--reading-max: 768px`, and `--header-height: 80px`.
- Remove default gradient/mist/glass surfaces. Only Header and mobile navigation may retain near-opaque transparency.
- Use existing QR asset and URLs. Add no dependencies or image assets.

---

### Task 1: Create global editorial tokens and layout primitives

**Files:**
- Modify: `src/styles/base.css:1-140`
- Modify: `src/styles/layout.css:1-31`
- Create: `tests/unit/editorialThemeTokens.test.ts`

**Interfaces:**
- Produces semantic colour tokens plus `--layout-max`, `--layout-gutter`, `--reading-max`, `--sidebar-layout-max`, and `--header-height`.

- [ ] **Step 1: Write the failing token contract test**

Read both CSS files and assert the four official measurements, light/dark semantic surface tokens, and absence of `--color-mist-primary`, `--color-mist-secondary`, `--gradient-hero`, and `--color-glass-medium`.

- [ ] **Step 2: Verify it fails**

Run: `cd tests && npm run test:unit -- editorialThemeTokens.test.ts`

Expected: FAIL before the new tokens exist.

- [ ] **Step 3: Implement tokens and responsive containers**

Replace legacy vivid/glass variables with canvas, surface, elevated-surface, border, primary/secondary text, accent, accent-hover, focus, and code-surface tokens. Make standard layout width `min(var(--layout-max), calc(100% - 2 * var(--layout-gutter)))`.

- [ ] **Step 4: Verify and commit**

Run: `cd tests && npm run test:unit -- editorialThemeTokens.test.ts && git diff --check`

```bash
git add src/styles/base.css src/styles/layout.css tests/unit/editorialThemeTokens.test.ts
git commit -m "style: add editorial theme tokens"
```

### Task 2: Re-style shared Header and harden theme tests

**Files:**
- Modify: `src/components/Header.astro:580-1500`
- Modify: `tests/e2e/specs/theme.spec.ts:1-91`

**Interfaces:**
- Consumes Task 1 tokens.
- Produces an 80px sticky Header with unchanged nav URLs and a visible theme switch in both locales.

- [ ] **Step 1: Make theme tests observable**

Require visible `[data-theme-toggle]` controls; remove conditional visibility branches and skipped tests. Assert click changes `html[data-theme]`, accessible labels change, refresh persists, and `/blog/` navigation retains the preference.

- [ ] **Step 2: Verify the current contract fails when visibility is missing**

Run: `cd tests && npm run test:e2e -- specs/theme.spec.ts`

- [ ] **Step 3: Implement Header presentation only**

Keep Header markup, nav arrays, anchors, and scripts. Replace glass/gradient styles with an 80px neutral surface, hairline border, text-first navigation, quiet active state, outlined icon controls, and semantic submenu/mobile-drawer surfaces.

- [ ] **Step 4: Verify and commit**

Run: `cd tests && npm run test:e2e -- specs/theme.spec.ts`

```bash
git add src/components/Header.astro tests/e2e/specs/theme.spec.ts
git commit -m "style: simplify editorial header"
```

### Task 3: Recompose Footer into subscription, link, and social bands

**Files:**
- Modify: `src/components/Footer.astro:1-640`
- Create: `tests/e2e/specs/footer.spec.ts`

**Interfaces:**
- Consumes existing `socialLinks`, `footerGroups`, QR asset, RSS URL, social URLs, and legal links.
- Produces a responsive three-band Footer with direct QR visibility.

- [ ] **Step 1: Write failing Footer tests**

On `/zh-cn/`, assert the existing QR source and `/zh-cn/rss.xml` are visible. On `/en/`, assert visible footer navigation and current social URLs. At 375px, assert no horizontal overflow.

- [ ] **Step 2: Verify it fails before refactor**

Run: `cd tests && npm run test:e2e -- specs/footer.spec.ts`

Expected: FAIL because the QR is currently dialog-only.

- [ ] **Step 3: Implement the three-band Footer**

Left: existing QR asset, copy, and RSS link. Right: existing footer groups. Next row: existing social URLs and language control. Final row: existing legal/technology links. Preserve every `href`; remove dialog code only if no trigger remains. Use opaque surfaces and responsive grid rules.

- [ ] **Step 4: Verify and commit**

Run: `cd tests && npm run test:e2e -- specs/footer.spec.ts && git diff --check`

```bash
git add src/components/Footer.astro tests/e2e/specs/footer.spec.ts
git commit -m "style: restructure editorial footer"
```

### Task 4: Convert Home to opaque editorial modules

**Files:**
- Modify: `src/components/home/HomeGlassHero.astro:1-38`
- Modify: `src/components/home/HomeExploreHub.astro`
- Modify: `src/components/home/HomeCapabilityGuide.astro`
- Modify: `src/components/home/HomeTaskNavigator.astro`
- Modify: `src/pages/[lang]/index.astro:182-528`
- Modify: `tests/e2e/specs/home.spec.ts`

**Interfaces:**
- Consumes Task 1 tokens and layout primitives.
- Produces Home cards/CTAs with unchanged hrefs.

- [ ] **Step 1: Write failing Home visual/link checks**

Capture existing Home CTA/card paths in both locales; assert them after styling. Assert Hero/cards lack `backdrop-filter`, Home inner width is at most 1280px at 1440px, and there is no horizontal overflow at 375px.

- [ ] **Step 2: Verify pre-change glass assertion fails**

Run: `cd tests && npm run test:e2e -- specs/home.spec.ts`

- [ ] **Step 3: Implement Hero and card styling**

Keep filename, markup, anchors, and card data. Replace blur/mist Hero with an opaque accent-rule Hero. Replace glass/gradient cards with semantic surface, border, and 1–2px hover lift. Align inner blocks to shared tokens.

- [ ] **Step 4: Verify and commit**

Run: `cd tests && npm run test:e2e -- specs/home.spec.ts`

```bash
git add src/components/home src/pages/[lang]/index.astro tests/e2e/specs/home.spec.ts
git commit -m "style: apply editorial homepage layout"
```

### Task 5: Apply editorial layout to blog list and detail pages

**Files:**
- Modify: `src/pages/[lang]/blog/index.astro:144-360`
- Modify: `src/pages/[lang]/blog/[...id].astro:294-640`
- Modify: affected existing blog E2E spec

**Interfaces:**
- Consumes shared layout and reading tokens.
- Produces a 1280px blog list and 768px prose column with existing post/tag/pagination/share URLs unchanged.

- [ ] **Step 1: Add failing list/detail layout and link checks**

Assert featured and first-card hrefs remain unchanged, list container is at most 1280px at 1440px, and `.article-body`/`.prose` are at most 768px while desktop TOC remains visible.

- [ ] **Step 2: Verify it fails first**

Run: `cd tests && npm run test:e2e -- specs/blog.spec.ts`

- [ ] **Step 3: Implement list/detail presentation**

Keep data iteration and href construction. Restyle featured post with an accent rule, standard posts as quiet bordered cards, and prose/sidebar/metadata/tags/code/tables/related links with semantic surfaces.

- [ ] **Step 4: Verify and commit**

Run: `cd tests && npm run test:e2e -- specs/blog.spec.ts && git diff --check`

```bash
git add src/pages/[lang]/blog tests/e2e/specs/blog.spec.ts
git commit -m "style: align blog pages with editorial system"
```

### Task 6: Propagate tokens and complete validation

**Files:**
- Modify: scoped legacy visual declarations in `src/pages/` and `src/components/`
- Modify: relevant existing tests only

- [ ] **Step 1: Inventory legacy visual declarations**

Run: `rg -n "color-glass|color-mist|gradient-theme|backdrop-filter" src/pages src/components src/styles`

- [ ] **Step 2: Replace visual declarations only**

Convert the scoped list to Task 1 semantic tokens. Do not alter component data, content, markup, or href expressions.

- [ ] **Step 3: Validate the complete site**

Run: `npm test && npm run build && npm run seo:check && cd tests && npm run test:e2e`

- [ ] **Step 4: Inspect built output and commit**

Inspect Home, blog index, blog detail, and Footer at 375px, 768px, 1024px, 1440px, and 1920px from an exact built preview. Then run `git diff --check` and commit the final scoped changes, specification, and plan.

```bash
git add src tests docs/superpowers/specs/2026-09-04-astro-editorial-theme-design.md docs/superpowers/plans/2026-09-04-astro-editorial-theme.md
git commit -m "style: complete Astro editorial theme"
```
