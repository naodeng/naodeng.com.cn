# dsh-qa Project Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive bilingual dsh-qa product page at `/en/dsh-qa/` and `/zh-cn/dsh-qa/` with source-backed product content and collapsed release notes.

**Architecture:** A typed `dshQaSite` data module owns all bilingual copy, commands, feature cards, links, and release notes. A single localized Astro route reads the active locale and renders semantic product sections inside the existing `Base.astro` layout; no client-side GitHub request is used. Playwright verifies the visitor-facing routes, language switch, semantic collapsed release notes, and metadata.

**Tech Stack:** Astro 6, TypeScript, scoped Astro CSS, Vitest 4, Playwright.

**Spec:** `docs/superpowers/specs/2026-09-13-dsh-qa-project-site-design.md`

## Global Constraints

- Node.js must remain `>=22.12.0`; use npm only and add no runtime dependency.
- Keep dsh-qa facts local-first: static source data only, with no visitor-time GitHub API request.
- Keep the quality boundary explicit: `PASS` can proceed; `WARN` and `BLOCK` require review; exceptions cannot convert `BLOCK` into passing.
- Render both `en` and `zh-cn` through the current Astro locale and `Base.astro` mechanisms.
- Keep release notes at the bottom, ordered `v0.3.1`, `v0.3.0`, then `v0.2.0`, and collapsed by default with semantic, keyboard-accessible controls.
- Preserve existing user work and limit Git operations to task files.

---

### Task 1: Create the typed bilingual dsh-qa site data

**Files:**
- Create: `src/data/dshQaSite.ts`
- Test: `tests/unit/dshQaSite.test.ts`

**Interfaces:**
- Produces: `DSH_QA_SITE`, typed as `Record<Lang, DshQaSiteCopy>`.
- Produces: shared `DSH_QA_RELEASE_FACTS` and localized `DshQaReleaseContent`; the page combines them to render release notes without duplicating versions, dates, or URLs per locale.
- Consumes: `Lang` from `@/i18n`.

- [ ] **Step 1: Write the failing data-contract test**

```ts
import { describe, expect, it } from "vitest";
import { DSH_QA_SITE } from "@/data/dshQaSite";

describe("dsh-qa site data", () => {
  it.each(["en", "zh-cn"] as const)("has complete %s page copy", (lang) => {
    const site = DSH_QA_SITE[lang];
    expect(site.hero.title).toContain("dsh-qa");
    expect(site.hero.actions).toHaveLength(3);
    expect(site.features).toHaveLength(4);
    expect(site.deliveryFlow).toHaveLength(5);
    expect(site.installModes).toHaveLength(2);
    expect(site.ecosystemLinks.map((link) => link.href)).toEqual(expect.arrayContaining([`/${lang}/qaskills/`, `/${lang}/prompts/`]));
    expect(site.releases.map((release) => [release.version, release.publishedAt, release.url])).toEqual([
      ["v0.3.1", "2026-09-11", "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.1"],
      ["v0.3.0", "2026-09-11", "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.0"],
      ["v0.2.0", "2026-09-01", "https://github.com/naodeng/dsh-qa/releases/tag/v0.2.0"],
    ]);
    expect(site.releases.every((release) => release.changes.length > 0)).toBe(true);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `cd tests && npm run test:unit -- dshQaSite.test.ts`

Expected: FAIL because `@/data/dshQaSite` does not exist.

- [ ] **Step 3: Add the smallest complete source-of-truth module**

```ts
export interface DshQaSiteCopy {
  meta: { title: string; description: string };
  hero: { title: string; eyebrow: string; summary: string; actions: DshQaLink[] };
  features: DshQaFeature[];
  deliveryFlow: DshQaFlowStage[];
  installModes: DshQaInstallMode[];
  ecosystemLinks: DshQaLink[];
  releaseNotesTitle: string;
  releases: DshQaRelease[];
}

export interface DshQaReleaseFact {
  version: string;
  publishedAt: string;
  url: string;
}

export interface DshQaReleaseContent { summary: string; changes: string[]; }
export type DshQaRelease = DshQaReleaseFact & DshQaReleaseContent;
export interface DshQaLink { label: string; href: string; external?: boolean; }
export interface DshQaFeature { title: string; description: string; icon: string; }
export interface DshQaFlowStage { title: string; detail: string; status: "PASS" | "WARN" | "BLOCK" | "NEUTRAL"; }
export interface DshQaInstallMode { title: string; detail: string; commands: string[]; }

export const DSH_QA_RELEASE_FACTS: DshQaReleaseFact[] = [
  { version: "v0.3.1", publishedAt: "2026-09-11", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.1" },
  { version: "v0.3.0", publishedAt: "2026-09-11", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.0" },
  { version: "v0.2.0", publishedAt: "2026-09-01", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.2.0" },
];

export const DSH_QA_SITE: Record<Lang, DshQaSiteCopy> = {
  en: {
    meta: { title: "dsh-qa · QA Workbench", description: "A local QA workbench for DeepSeek Harness." },
    hero: { title: "dsh-qa · QA Workbench", eyebrow: "Local-first quality delivery", summary: "Plan, run, and review software quality work in one local workspace.", actions: [{ label: "GitHub", href: "https://github.com/naodeng/dsh-qa", external: true }, { label: "Install plugin", href: "#install-plugin" }, { label: "Run standalone", href: "#install-standalone" }] },
    features: [], deliveryFlow: [], installModes: [], ecosystemLinks: [{ label: "GitHub", href: "https://github.com/naodeng/dsh-qa", external: true }, { label: "QA Skills", href: "/en/qaskills/" }, { label: "QA Prompts", href: "/en/prompts/" }, { label: "Compatibility update", href: "/en/blog/ai-testing/dsh-qa-harness-api-compatibility-404/" }],
    releaseNotesTitle: "Release notes",
    releases: [{ version: "v0.3.1", publishedAt: "2026-09-11", summary: "Current DSH compatibility release.", changes: ["Refresh the DSH plugin connection contract."], url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.1" }],
  },
  "zh-cn": {
    meta: { title: "dsh-qa · 质量工作台", description: "面向 DeepSeek Harness 的本地 QA 工作台。" },
    hero: { title: "dsh-qa · 质量工作台", eyebrow: "本地优先的质量交付", summary: "在一个本地工作区中规划、执行与评审软件质量工作。", actions: [{ label: "GitHub", href: "https://github.com/naodeng/dsh-qa", external: true }, { label: "安装插件", href: "#install-plugin" }, { label: "独立运行", href: "#install-standalone" }] },
    features: [], deliveryFlow: [], installModes: [], ecosystemLinks: [{ label: "GitHub", href: "https://github.com/naodeng/dsh-qa", external: true }, { label: "QA Skills", href: "/zh-cn/qaskills/" }, { label: "QA Prompts", href: "/zh-cn/prompts/" }, { label: "兼容性更新", href: "/zh-cn/blog/ai-testing/dsh-qa-harness-api-compatibility-404/" }],
    releaseNotesTitle: "版本变更",
    releases: [{ version: "v0.3.1", publishedAt: "2026-09-11", summary: "当前 DSH 兼容性版本。", changes: ["更新 DSH 插件连接契约。"], url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.1" }],
  },
};
```

Replace the empty sample arrays with exactly four localized feature cards, exactly five localized delivery stages, and two complete installation modes. The delivery content must include textual `PASS`, `WARN`, and `BLOCK` meanings; the ecosystem array must include GitHub, localized QA Skills, localized QA Prompts, and the localized dsh-qa blog post. Merge each locale's release summary/content with `DSH_QA_RELEASE_FACTS` in its declared order.

- [ ] **Step 4: Run the focused unit test**

Run: `cd tests && npm run test:unit -- dshQaSite.test.ts`

Expected: PASS for both locales.

- [ ] **Step 5: Inspect the changed data and tests**

Run: `git diff --check -- src/data/dshQaSite.ts tests/unit/dshQaSite.test.ts`

Expected: no whitespace errors. Do not create a commit unless the user separately requests one.

### Task 2: Build the localized product route and connect the project listing

**Files:**
- Create: `src/pages/[lang]/dsh-qa/index.astro`
- Modify: `src/data/projects.ts`
- Create: `src/utils/projectLinks.ts`
- Modify: `src/pages/[lang]/projects/index.astro`
- Modify: `src/pages/[lang]/resources.astro`
- Test: `tests/e2e/specs/dsh-qa.spec.ts`
- Test: `tests/e2e/specs/projects.spec.ts`
- Test: `tests/e2e/specs/resources.spec.ts`
- Modify: `tests/e2e/support/constants.ts`

**Interfaces:**
- Consumes: `DSH_QA_SITE[locale]` and `DshQaRelease` from `src/data/dshQaSite.ts`.
- Produces: HTTP 200 pages at `/en/dsh-qa/` and `/zh-cn/dsh-qa/`; projects and resources both point to their matching localized dsh-qa detail page.
- Produces: `data-dsh-qa-page`, `data-release-notes`, and `data-release-note` selectors for stable end-to-end tests.

- [ ] **Step 1: Write failing browser tests**

```ts
for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} dsh-qa renders product content and a collapsed release log`, async ({ page }) => {
    const response = await page.goto(`/${locale}/dsh-qa/`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("[data-dsh-qa-page]")).toBeVisible();
    await expect(page.locator("[data-dsh-qa-action]")).toHaveCount(3);
    await expect(page.locator("[data-dsh-qa-feature]")).toHaveCount(4);
    await expect(page.locator("[data-dsh-qa-flow-stage]")).toHaveCount(5);
    await expect(page.locator("[data-install-mode]")).toHaveCount(2);
    await expect(page.locator("[data-release-note]")).toHaveCount(3);
    expect(await page.locator("[data-release-note]").evaluateAll((notes) => notes.every((note) => !note.hasAttribute("open")))).toBe(true);
  });

  test(`${locale} dsh-qa release log expands and metadata targets the localized page`, async ({ page }) => {
    await page.goto(`/${locale}/dsh-qa/`);
    const note = page.locator("[data-release-note]").first();
    await note.locator("summary").click();
    await expect(note).toHaveAttribute("open", "");
    await expect(note.locator("li")).not.toHaveCount(0);
    await expect(note.locator('a[href*="github.com/naodeng/dsh-qa/releases/tag/"]')).toBeVisible();
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/${locale}/dsh-qa/?$`));
    await expect(page.locator(`a[href="/${locale === "en" ? "zh-cn" : "en"}/dsh-qa/"]`)).toBeVisible();
  });
}
```

- [ ] **Step 2: Run the focused browser test to verify it fails**

Run: `cd tests && npm run test:e2e -- dsh-qa.spec.ts`

Expected: FAIL with a 404 for `/en/dsh-qa/` and `/zh-cn/dsh-qa/`.

- [ ] **Step 3: Implement the route with semantic, responsive sections**

```astro
---
const locale = Astro.currentLocale as Lang;
const site = DSH_QA_SITE[locale];
export const getStaticPaths = () => Object.keys(LOCALES).map((lang) => ({ params: { lang } }));
---
<Layout title={site.meta.title} description={site.meta.description} breadcrumbs={breadcrumbs}>
  <main data-dsh-qa-page>
    <section class="dsh-qa-hero"><p>{site.hero.eyebrow}</p><h1>{site.hero.title}</h1><p>{site.hero.summary}</p></section>
    <section data-release-notes aria-labelledby="release-notes-heading"><h2 id="release-notes-heading">{site.releaseNotesTitle}</h2></section>
  </main>
</Layout>
```

Render hero actions with `data-dsh-qa-action`, feature cards with `data-dsh-qa-feature`, flow stages with `data-dsh-qa-flow-stage`, two installation command cards with `data-install-mode`, localized ecosystem/blog links, and a final `section[data-release-notes]`. Render every release as `<details data-release-note><summary>{release.version} — {release.summary}</summary><ul>{release.changes.map((change) => <li>{change}</li>)}</ul><a href={release.url}>GitHub Release</a></details>` and do not set `open`. Use scoped CSS for the dark command-center treatment, visible `:focus-visible`, `prefers-reduced-motion`, non-color-only statuses, a mobile single column, and horizontal command scrolling.

Add `kind: "internal" | "external"` to `ProjectItem`; change dsh-qa to `{ url: "/dsh-qa/", kind: "internal" }`. Create `getProjectHref(locale, project)` and `isExternalProject(project)` in `src/utils/projectLinks.ts`. Both the projects page and resources page must call this helper; internal project cards use localized hrefs, no `_blank`, no external icon, and `View project / 查看项目`, while external cards retain source/external behavior. GitHub remains an explicit external hero action on the dsh-qa page.

Add `"/dsh-qa/"` to `EXTRA_PATHS` and name map so the shared accessibility page-status suite covers both routes. Add a projects test and a resources test that each assert `/en/` and `/zh-cn/` dsh-qa cards resolve to their matching local URL and do not use `_blank`.

- [ ] **Step 4: Run focused browser coverage**

Run: `cd tests && npm run test:e2e -- dsh-qa.spec.ts page-accessibility.spec.ts`

Expected: PASS for both language routes, including default-collapsed notes and the expand interaction.

- [ ] **Step 5: Inspect the changed route, link helper, and browser tests**

Run: `git diff --check -- src/pages/[lang]/dsh-qa/index.astro src/data/projects.ts src/utils/projectLinks.ts src/pages/[lang]/projects/index.astro src/pages/[lang]/resources.astro tests/e2e/specs/dsh-qa.spec.ts tests/e2e/specs/projects.spec.ts tests/e2e/specs/resources.spec.ts tests/e2e/support/constants.ts`

Expected: no whitespace errors. Do not create a commit unless the user separately requests one.

### Task 3: Run delivery checks and inspect the rendered result

**Files:**
- Modify only if a check exposes a defect in Task 1 or Task 2 files.

**Interfaces:**
- Consumes: completed route, data module, and test coverage.
- Produces: verified production build and static SEO checks.

- [ ] **Step 1: Run focused unit and end-to-end suites**

Run: `npm test && cd tests && npm run test:e2e -- dsh-qa.spec.ts page-accessibility.spec.ts`

Expected: PASS. Treat an environmental browser or listener failure as blocked evidence, not a page-quality conclusion.

- [ ] **Step 2: Run production and SEO checks**

Run: `npm run build && npm run seo:check && git diff --check`

Expected: all commands exit 0; the build contains both localized dsh-qa pages.

- [ ] **Step 3: Inspect the real rendered paths at desktop and mobile widths**

Run: start `npm run dev`, then inspect `/en/dsh-qa/` and `/zh-cn/dsh-qa/` at 1440px and 390px.

Expected: hero actions remain usable, no horizontal body overflow, command blocks scroll instead of clipping, release notes begin collapsed, and color/status meaning remains legible.

- [ ] **Step 4: Report exact evidence and repository scope**

Run: `git status --short`

Expected: report commands run, routes inspected, files changed, and any verification boundary that remains blocked. Do not create a commit unless the user separately requests one.

Report commands run, routes inspected, files changed, and any verification boundary that remains blocked.
