# TesterArmy E2E Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the behavior-based migration of the site's E2E acceptance coverage to TesterArmy and retire the legacy Playwright Test runner after replacement coverage is reviewed.

**Architecture:** Keep one TesterArmy suite in `tests/e2e/specs/`; migrate missing behaviors into domain specs and use deterministic browser setup where needed. Keep bilingual test guidance and CI scripts aligned with the single-runner setup.

**Tech Stack:** Astro, TypeScript, TesterArmy `e2e` / `@e2e-dev/web`, Vitest.

**Spec:** `AGENTS.md` (Testing and checks), `tests/README_CN.md`, and `tests/README.md`.

## Global Constraints

- Unit coverage is 100% of all branches in new or changed behavior logic.
- Core E2E coverage is 100% of acceptance behaviors; non-core E2E covers one happy path and one reverse case.
- Do not weaken assertions to obtain a pass; review behavior parity before retiring the old runner.
- Tests use the pinned TesterArmy versions and the repository's supported Node.js version (`^22.22.3 || >=24.8.0` under `tests/`).

## Review Focus

- Locale fallback and blocked browser storage: verify matching-page navigation, fallback, and language selection without assuming storage is writable (`locale-switch.e2e.ts`).
- Search and filter empty states: verify a no-match result can be cleared and returns to the default catalog (`search.e2e.ts`, domain directory specs).
- Keyboard and clipboard actions: verify focus return, copy feedback, and touch-specific visibility without claiming a deterministic shim proves OS clipboard permission (`interaction.e2e.ts`, `code-block.e2e.ts`).
- Responsive extremes: exercise narrow mobile through 2K/4K widths and assert no horizontal overflow (`responsive.e2e.ts`, homepage and footer specs).
- External destinations and localized links: verify same-origin route targets, safe external-link attributes, and bilingual fallbacks (`navigation.e2e.ts`, `links.e2e.ts`).

---

### Task 1: Establish the behavior coverage map

**Files:**
- Read: `tests/e2e/specs/*.spec.ts`
- Read: `tests/e2e-next/specs/*.e2e.ts`, `tests/e2e-next/specs/*.spec.e2e.ts`
- Modify: this plan, checking off audited domains

**Interfaces:**
- Consumes: existing Playwright and TesterArmy test behavior.
- Produces: a reviewed list of behavior gaps grouped into core and non-core acceptance criteria.

- [x] **Step 1: Inventory test behavior by domain and mark core acceptance journeys**
- [x] **Step 2: Identify old-only behaviors and prove whether each is still current or obsolete**
- [x] **Step 3: Record the concrete missing scenarios in the owning task below**

**Behavior inventory:** Both runners contain 46 matching domain specs. Matching names are only an index, not a parity claim. Core journeys map to `home`, `header`, `navigation`, `locale-switch`, `search`, `theme`, `qaskills`, `prompts`, `wiki`, `guild`, `blog-editorial`, `interaction`, `code-block`, and `responsive` TesterArmy specs. Supporting behavior is grouped in layout, link, accessibility, SEO, RSS, tracking, performance, editorial, and content integrity specs. Presentation-only assertions that pin a transient card style, exact spacing, or obsolete copy are not acceptance behaviors and are not being copied one-for-one.

The remaining old-runner-only browser APIs were found in exactly three specs: `code-block` uses `isMobile`/`hasTouch`; `code-block`, `prompts`, and `dsh-qa` grant clipboard permissions. Copy success/failure and copied payload are already verified with deterministic clipboard shims in the new suite; this proves the page behavior, not OS clipboard permission. Touch visibility is being replaced by a narrow-viewport behavior assertion, which the new runner can exercise reliably.

Existing new-suite viewport checks already exercise the home, header, and footer at 2048px and 3840px, plus the phone/tablet breakpoints. A concrete gap was found in QA Skills: category result counts, query-dependent facet counts, subcategory filter/reset, unavailable lifecycle filters, and lifecycle entry links were not all represented. Guild stage filtering did not prove the result set changes and recovers, and its directory had only one filter category represented. These gaps are assigned to Tasks 3–4 below.

### Task 2: Complete core navigation and discovery journeys

**Files:**
- Modify: `tests/e2e/specs/home.e2e.ts`
- Modify: `tests/e2e/specs/navigation.e2e.ts`
- Modify: `tests/e2e/specs/locale-switch.e2e.ts`
- Modify: `tests/e2e/specs/search.e2e.ts`
- Modify: `tests/e2e/specs/theme.e2e.ts`

**Interfaces:**
- Consumes: the existing site routes and header controls.
- Produces: end-to-end coverage for every core entry path, locale transition/fallback, search selection and dismissal, and theme persistence.

- [x] **Step 1: Add failing tests for core journey gaps found in Task 1**
- [x] **Step 2: Run the focused TesterArmy specs and confirm the missing assertions fail for the expected reason**
- [x] **Step 3: Port only the missing behavior assertions into the current domain specs**
- [x] **Step 4: Run the focused TesterArmy specs and confirm the journeys pass in both locales**

### Task 3: Complete core content discovery and reading flows

**Files:**
- Modify: `tests/e2e/specs/qaskills.spec.e2e.ts`
- Modify: `tests/e2e/specs/prompts.spec.e2e.ts`
- Modify: `tests/e2e/specs/wiki.spec.e2e.ts`
- Modify: `tests/e2e/specs/guild.spec.e2e.ts`
- Modify: `tests/e2e/specs/blog-editorial.spec.e2e.ts`
- Modify: `tests/e2e/specs/docs.spec.e2e.ts`

**Interfaces:**
- Consumes: existing bilingual directories, filters, detail pages, and article controls.
- Produces: full coverage for core search/filter-to-detail behavior and one positive plus one reverse case for each non-core content family.

- [x] **Step 1: Add failing tests for Task 1 gaps, including empty or disabled filters and localized detail navigation**
- [x] **Step 2: Run the owning specs and verify each new scenario is initially missing/failing**
- [x] **Step 3: Port the behavior coverage without changing site code unless a real defect is exposed**
- [x] **Step 4: Run all affected content specs in both locales**

### Task 4: Complete cross-cutting interaction and accessibility coverage

**Files:**
- Modify: `tests/e2e/specs/interaction.e2e.ts`
- Modify: `tests/e2e/specs/code-block.e2e.ts`
- Modify: `tests/e2e/specs/author-stats-card.spec.e2e.ts`
- Modify: `tests/e2e/specs/responsive.e2e.ts`
- Modify: `tests/e2e/specs/links.e2e.ts`
- Modify: other owning TesterArmy specs identified in Task 1

**Interfaces:**
- Consumes: current shared controls and page layouts.
- Produces: preserved user-visible copy/share, author, external-link, and responsive behaviors in the single E2E runner.

- [x] **Step 1: Add failing tests for the cross-cutting behaviors not represented in TesterArmy**
- [x] **Step 2: Run the focused specs and verify expected red results**
- [x] **Step 3: Migrate the user-visible behavior checks; replace native touch emulation with narrow viewport behavior and keep OS clipboard permissions outside the claim**
- [x] **Step 4: Run all affected interaction and responsive specs**

### Task 5: Align runner configuration, documentation, and PR evidence

**Files:**
- Modify: `tests/package.json`
- Modify: `tests/package-lock.json`
- Modify: `tests/README.md`
- Modify: `tests/README_CN.md`
- Modify: `.github/workflows/e2e.yml`

**Interfaces:**
- Consumes: reviewed TesterArmy coverage for the old suite's behavior domains.
- Produces: one E2E runner, accurate scripts and bilingual guidance, CI execution, and an updated PR #157 against `main`.

- [x] **Step 1: Update scripts and bilingual docs to reflect the single TesterArmy suite and optional Playwright-based screenshot utility.**
- [x] **Step 2: Run unit tests, the full TesterArmy E2E suite, build, and `git diff --check`** — See the 2026-11-26 checkpoint below.
- [x] **Step 3: Review the complete diff and confirm no legacy behavior is removed without replacement evidence.**
- [ ] **Step 4: Commit and push `develop`, then update existing PR #157 and verify its CI**

## Progress checkpoint — 2026-11-25 (historical; superseded)

This is an incremental coverage and CI-fix slice; the behavior inventory and full migration audit in Tasks 1–4 remain open. The legacy runner stays enabled.

The GitHub Actions run supplied for review is run `45614909028` (#623), on merged `main` commit `830c77ac25768203b72ad241b13193b45a784353` (PR #156). Its build and unit-test steps passed; the combined E2E step failed on outdated expectations for the current header/footer/homepage and a mobile menu that opened outside the viewport after scrolling. The corresponding local changes align the old suite with the current interface and anchor the open mobile menu below the fixed header.

Local evidence on the current workspace:

- `npm run build`: PASS, 3,601 routes generated.
- `npm test`: PASS, 47 files / 294 tests.
- Full TesterArmy suite: PASS, 46 files / 576 passed / 1 skipped.
- Full legacy Playwright suite: 885 passed / 3 skipped / 1 intermittent failure out of 889; the failing AI Wiki anchor-spacing test passed on three immediate repeats. Treat legacy E2E as unstable until a clean CI run confirms otherwise.
- The legacy tests covering the stale expectations from run #623: PASS, 12 tests.
- `git diff --check`: PASS.

The new suite now covers the locale fallback when storage/browser language access fails, search result selection and empty-state recovery, QA Skills keyboard tab navigation and install feedback, and the current footer QR group. This does not establish full behavioral parity: code-copy visibility under mobile/touch emulation and copy feedback after granting browser clipboard permissions are still verified only by Playwright. These checks do not represent physical-device coverage or read back operating-system clipboard contents. Do not retire the old runner until the remaining inventory is reviewed and CI is repeatedly clean.

The initial inventory found matching filenames for all 46 old specs, but that is not proof of behavioral parity. Registered test declarations differ significantly in several domains (for example, QA Skills 41→3, Guild 47→3, Wiki 18→3, header 27→7, and navigation 26→8); loops and consolidated assertions make raw counts non-equivalent, so Tasks 1–4 remain open until those behaviors are compared and classified as core or non-core.

## Progress checkpoint — 2026-11-26

This checkpoint supersedes the 2026-11-25 statement that the legacy runner remains enabled. The semantic inventory and coverage work is complete: 46 legacy behavior domains map to 46 TesterArmy specs. This is behavior-based coverage, not a claim that every legacy assertion was copied one-for-one; obsolete and presentation-only assertions were excluded as recorded above.

Local verification on the current changes:

- `npm run build`: PASS, 3,601 routes generated; Astro reports 0 errors and 0 warnings (one existing hint).
- `npm run test:unit` from `tests/`: PASS, 47 files / 294 tests.
- Full TesterArmy E2E from `tests/`: PASS, 46 files / 596 passed / 1 skipped (Giscus external-environment skip).
- `npm ls --depth=0` from `tests/`: PASS; no `@playwright/test` dependency remains. Playwright remains only for the optional visual sampling script.
- `git diff --check`: PASS.
- Phone (430×932) and iPad (820×1180) menu previews were visually checked; labels are legible at 16px on an opaque panel and links remain navigable.

At this checkpoint, fresh whole-branch review and PR #157 CI were still pending. The final verification and remote status will be recorded below.

## Final local verification checkpoint — 2026-11-26

This supersedes the interim local counts above. The full diff was checked against the 46-domain behavior inventory; gaps found during final review were filled with bilingual search selection/focus recovery, bilingual Prompt empty-state recovery, a positive Postman demo-link case, and explicit local sitemap/search-index response checks. The Docs route check fetches all five retired slugs per locale from the local preview and verifies each response body, avoiding redirects to the production site.

- `npm run build`: PASS, 3,601 pages; Astro 0 errors / 0 warnings / 1 pre-existing hint; SEO build check passed with 3,093 sitemap URLs.
- `npm run test:unit` from `tests/`: PASS, 48 files / 300 tests.
- Full TesterArmy E2E after all coverage additions: PASS, 46 files / 641 passed / 1 skipped (external Giscus environment).
- `npm ls --depth=0` from `tests/`: PASS; no `@playwright/test` remains. `playwright` is retained only for optional screenshot sampling.
- `git diff --cached --check`: PASS on the final staged changes.

Task 5 Step 4 and the fresh whole-branch review remain pending until `develop` is updated and PR #157 checks are verified.
