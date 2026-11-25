# TesterArmy E2E Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the behavior-based migration of the site's E2E acceptance coverage to TesterArmy while retaining the legacy runner until replacement stability is proven.

**Architecture:** Keep the current TesterArmy spec organization and migrate missing behaviors into the existing domain specs. Use deterministic browser setup only where the new runner lacks a native capability; document any residual legacy-only behavior rather than silently dropping it. Keep bilingual test guidance and CI scripts aligned with the actual migration state.

**Tech Stack:** Astro, TypeScript, TesterArmy `e2e` / `@e2e-dev/web`, Playwright legacy suite, Vitest.

**Spec:** `AGENTS.md` (Testing and checks), `tests/README_CN.md`, and `tests/README.md`.

## Global Constraints

- Unit coverage is 100% of all branches in new or changed behavior logic.
- Core E2E coverage is 100% of acceptance behaviors; non-core E2E covers one happy path and one reverse case.
- Do not weaken assertions to obtain a pass; preserve the old suite until behavior coverage and repeated CI stability are demonstrated.
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

- [ ] **Step 1: Inventory test behavior by domain and mark core acceptance journeys**
- [ ] **Step 2: Identify old-only behaviors and prove whether each is still current or obsolete**
- [ ] **Step 3: Record the concrete missing scenarios in the owning task below**

### Task 2: Complete core navigation and discovery journeys

**Files:**
- Modify: `tests/e2e-next/specs/home.e2e.ts`
- Modify: `tests/e2e-next/specs/navigation.e2e.ts`
- Modify: `tests/e2e-next/specs/locale-switch.e2e.ts`
- Modify: `tests/e2e-next/specs/search.e2e.ts`
- Modify: `tests/e2e-next/specs/theme.e2e.ts`

**Interfaces:**
- Consumes: the existing site routes and header controls.
- Produces: end-to-end coverage for every core entry path, locale transition/fallback, search selection and dismissal, and theme persistence.

- [ ] **Step 1: Add failing tests for core journey gaps found in Task 1**
- [ ] **Step 2: Run the focused TesterArmy specs and confirm the missing assertions fail for the expected reason**
- [ ] **Step 3: Port only the missing behavior assertions into the current domain specs**
- [ ] **Step 4: Run the focused TesterArmy specs and confirm the journeys pass in both locales**

### Task 3: Complete core content discovery and reading flows

**Files:**
- Modify: `tests/e2e-next/specs/qaskills.spec.e2e.ts`
- Modify: `tests/e2e-next/specs/prompts.spec.e2e.ts`
- Modify: `tests/e2e-next/specs/wiki.spec.e2e.ts`
- Modify: `tests/e2e-next/specs/guild.spec.e2e.ts`
- Modify: `tests/e2e-next/specs/blog-editorial.spec.e2e.ts`
- Modify: `tests/e2e-next/specs/docs.spec.e2e.ts`

**Interfaces:**
- Consumes: existing bilingual directories, filters, detail pages, and article controls.
- Produces: full coverage for core search/filter-to-detail behavior and one positive plus one reverse case for each non-core content family.

- [ ] **Step 1: Add failing tests for Task 1 gaps, including empty or disabled filters and localized detail navigation**
- [ ] **Step 2: Run the owning specs and verify each new scenario is initially missing/failing**
- [ ] **Step 3: Port the behavior coverage without changing site code unless a real defect is exposed**
- [ ] **Step 4: Run all affected content specs in both locales**

### Task 4: Complete cross-cutting interaction and accessibility coverage

**Files:**
- Modify: `tests/e2e-next/specs/interaction.e2e.ts`
- Modify: `tests/e2e-next/specs/code-block.e2e.ts`
- Modify: `tests/e2e-next/specs/author-stats-card.spec.e2e.ts`
- Modify: `tests/e2e-next/specs/responsive.e2e.ts`
- Modify: `tests/e2e-next/specs/links.e2e.ts`
- Modify: other owning TesterArmy specs identified in Task 1

**Interfaces:**
- Consumes: current shared controls and page layouts.
- Produces: preserved user-visible copy/share, author, external-link, and responsive behaviors; keeps any unsupported native-browser assertion in the legacy runner.

- [ ] **Step 1: Add failing tests for the cross-cutting behaviors not represented in TesterArmy**
- [ ] **Step 2: Run the focused specs and verify expected red results**
- [ ] **Step 3: Migrate browser behaviors supported by TesterArmy; retain a legacy-only test where the framework cannot faithfully verify the native behavior**
- [ ] **Step 4: Run all affected interaction and responsive specs**

### Task 5: Align runner configuration, documentation, and PR evidence

**Files:**
- Modify: `tests/package.json`
- Modify: `tests/package-lock.json`
- Modify: `tests/README.md`
- Modify: `tests/README_CN.md`
- Modify: `.github/workflows/e2e.yml` only if the verified runner commands change

**Interfaces:**
- Consumes: migrated TesterArmy coverage and any documented legacy-only exceptions.
- Produces: accurate scripts, bilingual migration status, CI execution, and a reviewable PR against `main`.

- [x] **Step 1: Update scripts and bilingual docs to reflect the measured coverage and remaining legacy-only checks** — The existing commands still run both suites; bilingual guidance now describes behavior-based parity and the native clipboard/touch checks that remain in Playwright.
- [x] **Step 2: Run unit tests, the full TesterArmy E2E suite, build, and `git diff --check`** — See the measured results in the progress checkpoint below.
- [x] **Step 3: Review the complete diff and confirm no legacy test or dependency is removed without replacement evidence** — Both runners and their dependencies remain enabled; the legacy assertions were aligned with the current header/footer/home layout.
- [ ] **Step 4: Commit, push `develop`, and open a new PR to `main`**

## Progress checkpoint — 2026-11-25

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
