# Home, QA Skills, and Prompts Content Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganize the bilingual homepage, QA Skills index, and Prompts index so visitors can understand the site's QA value, choose the right resource, and start a testing task without losing the homepage entry, tracking, mobile-navigation, SEO, or content contracts already merged from main.

**Architecture:** Keep Astro collections and routes unchanged. Move bilingual display configuration into three focused `src/data/` modules, render the new page sections through small Astro components, and preserve the existing page-level collection queries as the source of truth for counts and links. Extend the existing homepage tracking detector instead of adding a second analytics implementation.

**Tech Stack:** Astro 6, TypeScript, Astro content collections, Vitest, Playwright, existing CSS tokens and Zenix visual language.

## Global Constraints

- Use Node.js `>=22.12.0`, npm `10+`, and npm only.
- Preserve all existing `en` and `zh-cn` routes, slugs, canonical URLs, hreflang links, structured data, navigation, Footer, search, ads, and deployment configuration.
- Do not modify the Astro content collection schema or bulk-rewrite Prompt and QA Skill Markdown files.
- Do not edit `dist/`, `node_modules/`, Playwright reports, or other generated output.
- Keep the main-branch homepage primary-entry cards, `home_entry_click` tracking contract, and mobile Header priority links.
- Use `Evals` only to mean that evaluation cases exist; do not claim runtime evaluations passed without current execution evidence.
- Keep Chinese and English page structure and interaction behavior aligned.
- Use the existing Zenix tokens and components; do not introduce Tailwind, a new component library, or a second visual theme.
- Build the current worktree before E2E and use the dedicated preview URL `http://127.0.0.1:4327` through `PLAYWRIGHT_BASE_URL`.

---

## File Structure

### Create

- `src/data/homeTaskEntries.ts` — bilingual homepage content modes, six task links, and three lightweight examples.
- `src/data/promptLibrary.ts` — bilingual Prompt type descriptions, six-version guide, quick-start steps, and examples.
- `src/data/qaSkillLibrary.ts` — supported AI tools, recommended Skill slugs, starter-path copy, and bounded intro fallbacks.
- `src/components/home/HomeTaskNavigator.astro` — three retained primary modes plus six QA task links.
- `src/components/home/CoreCapabilities.astro` — Prompt-versus-Skill explanation and recommended links.
- `src/components/home/HomeProofAndCases.astro` — source-backed counts and lightweight examples.
- `src/components/qaskills/QASkillStarterPaths.astro` — search, discovery, and lifecycle entry choices.
- `src/components/qaskills/RecommendedQASkills.astro` — selected Skills rendered from current content.
- `src/components/prompts/PromptVersionGuide.astro` — six-version selection guidance.
- `src/components/prompts/PromptExamples.astro` — three compact input/output examples.
- `src/components/prompts/AIOutputNotice.astro` — AI output review constraints.
- `tests/unit/contentEntryConfig.test.ts` — bilingual config, slug, version, and tool-count contracts.
- `tests/unit/baseTitle.test.ts` — page-title mode contract.

### Modify

- `src/layouts/Base.astro` — support an absolute page title for the homepage without changing other pages.
- `src/pages/[lang]/index.astro` — five-section homepage, source-backed statistics, and retained primary-entry behavior.
- `src/pages/[lang]/qaskills/index.astro` — starter-first order, recommended Skills, dynamic tool count, Evals wording, result count, and lifecycle placement.
- `src/pages/[lang]/prompts/index.astro` — dynamic counts, correct quick start, version guide, examples, quality notice, and shorter mobile title.
- `src/components/TrackingEvents.astro` — recognize Prompts and QA Skills homepage destinations.
- `tests/unit/promptsListPage.test.ts` — verify current Prompt page contracts rather than only duplicating `getStaticPaths()`.
- `tests/unit/qaskillsFilter.test.ts` — cover visible-result count and accessible state.
- `tests/e2e/specs/apple-home.spec.ts` — replace obsolete section assertions with the five-section and retained-entry contract.
- `tests/e2e/specs/tracking-contract.spec.ts` — add Prompts and QA Skills tracking cases.
- `tests/e2e/specs/qaskills.spec.ts` — starter paths, recommended Skills, result count, and Evals wording.
- `tests/e2e/specs/responsive.spec.ts` — 390px overflow and title wrapping for all three pages.
- `tests/e2e/specs/seo.spec.ts` — unique homepage titles and unchanged canonical/hreflang behavior.

---

### Task 1: Add typed bilingual page configuration

**Files:**

- Create: `src/data/homeTaskEntries.ts`
- Create: `src/data/promptLibrary.ts`
- Create: `src/data/qaSkillLibrary.ts`
- Create: `tests/unit/contentEntryConfig.test.ts`

**Interfaces:**

- Produces `HOME_PRIMARY_MODES: Record<Lang, HomePrimaryMode[]>`.
- Produces `HOME_TASK_ENTRIES: Record<Lang, HomeTaskEntry[]>` with exactly six entries per language.
- Produces `HOME_EXAMPLES: Record<Lang, HomeExample[]>` with exactly three entries per language.
- Produces `PROMPT_TYPE_COPY: Record<Lang, Record<PromptTestingType, PromptTypeCopy>>`.
- Produces `PROMPT_VERSION_GUIDE: Record<Lang, PromptVersionGuideItem[]>` in `Standard`, `ROSES`, `LangGPT`, `ICIO`, `CRISPE`, `RISE` order.
- Produces `PROMPT_QUICK_STEPS: Record<Lang, PromptQuickStep[]>` and `PROMPT_EXAMPLES: Record<Lang, PromptExample[]>`.
- Produces `QA_SKILL_TOOLS: readonly ["codex", "cursor", "claudecode", "kiro", "opencode", "trae"]`.
- Produces `RECOMMENDED_QA_SKILL_SLUGS` and `QA_SKILL_STARTER_PATHS`.
- Produces `getQASkillCardIntro(skill: Pick<QASkill, "slug" | "intro">, lang: Lang): string`.

- [ ] **Step 1: Write the failing configuration test**

Create `tests/unit/contentEntryConfig.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { HOME_EXAMPLES, HOME_PRIMARY_MODES, HOME_TASK_ENTRIES } from "../../src/data/homeTaskEntries";
import { PROMPT_TYPE_COPY, PROMPT_VERSION_GUIDE } from "../../src/data/promptLibrary";
import { QA_SKILL_TOOLS, RECOMMENDED_QA_SKILL_SLUGS } from "../../src/data/qaSkillLibrary";

const languages = ["en", "zh-cn"] as const;

describe("content entry configuration", () => {
  it.each(languages)("defines complete homepage entries for %s", (lang) => {
    expect(HOME_PRIMARY_MODES[lang]).toHaveLength(3);
    expect(HOME_TASK_ENTRIES[lang]).toHaveLength(6);
    expect(HOME_EXAMPLES[lang]).toHaveLength(3);
    expect(new Set(HOME_TASK_ENTRIES[lang].map((item) => item.slug)).size).toBe(6);
  });

  it.each(languages)("defines all Prompt versions and 15 types for %s", (lang) => {
    expect(PROMPT_VERSION_GUIDE[lang].map((item) => item.version)).toEqual([
      "Standard", "ROSES", "LangGPT", "ICIO", "CRISPE", "RISE",
    ]);
    expect(Object.keys(PROMPT_TYPE_COPY[lang])).toHaveLength(15);
  });

  it("keeps supported tools and recommended Skills explicit and unique", () => {
    expect(QA_SKILL_TOOLS).toEqual(["codex", "cursor", "claudecode", "kiro", "opencode", "trae"]);
    expect(new Set(RECOMMENDED_QA_SKILL_SLUGS).size).toBe(RECOMMENDED_QA_SKILL_SLUGS.length);
    expect(RECOMMENDED_QA_SKILL_SLUGS).toContain("discover-testing");
  });
});
```

- [ ] **Step 2: Run the test and verify the missing-module failure**

Run:

```bash
cd tests && npm run test:unit -- contentEntryConfig.test.ts
```

Expected: FAIL because the three `src/data/` modules do not exist.

- [ ] **Step 3: Implement `homeTaskEntries.ts`**

Define focused types and bilingual entries. Use locale-independent paths and localize them at render time:

```ts
import type { Lang } from "@/i18n";

export type HomePrimaryMode = {
  key: "read" | "reference" | "act";
  eyebrow: string;
  title: string;
  description: string;
};

export type HomeTaskEntry = {
  slug: "requirements-analysis" | "test-strategy" | "test-case-writing" |
    "automation-testing" | "bug-reporting" | "test-reporting";
  title: string;
  description: string;
};

export type HomeExample = {
  key: "requirements" | "test-cases" | "bug-report";
  input: string;
  capability: string;
  output: string;
};

export const HOME_PRIMARY_MODES: Record<Lang, HomePrimaryMode[]> = {
  "zh-cn": [
    { key: "read", eyebrow: "阅读实践", title: "博客", description: "阅读软件测试、自动化、AI 工程和个人实践总结。" },
    { key: "reference", eyebrow: "查询知识", title: "Wiki / AI 百科", description: "查询测试概念、AI 术语和工程实践词条。" },
    { key: "act", eyebrow: "完成任务", title: "Skills 与 Prompts", description: "选择可复用的测试能力，直接开始当前 QA 任务。" },
  ],
  en: [
    { key: "read", eyebrow: "Read practices", title: "Blog", description: "Read software testing, automation, AI engineering, and practice notes." },
    { key: "reference", eyebrow: "Look up knowledge", title: "Wiki / AI Wiki", description: "Look up testing concepts, AI terms, and engineering references." },
    { key: "act", eyebrow: "Complete a task", title: "Skills and Prompts", description: "Choose a reusable testing capability and start the QA task at hand." },
  ],
};

export const HOME_TASK_ENTRIES: Record<Lang, HomeTaskEntry[]> = {
  "zh-cn": [
    { slug: "requirements-analysis", title: "分析需求", description: "识别信息缺口、业务规则和高风险测试场景。" },
    { slug: "test-strategy", title: "制定测试策略", description: "确定测试范围、优先级、方法和质量风险。" },
    { slug: "test-case-writing", title: "编写或评审测试用例", description: "生成或检查带优先级的结构化测试用例。" },
    { slug: "automation-testing", title: "设计 API / UI 自动化", description: "规划可维护的接口或界面自动化测试。" },
    { slug: "bug-reporting", title: "分析与报告缺陷", description: "整理复现步骤、影响范围和诊断信息。" },
    { slug: "test-reporting", title: "输出测试报告", description: "汇总执行结果、风险、阻塞项和发布建议。" },
  ],
  en: [
    { slug: "requirements-analysis", title: "Analyze requirements", description: "Find information gaps, business rules, and high-risk test scenarios." },
    { slug: "test-strategy", title: "Define a test strategy", description: "Set scope, priorities, methods, and quality risks." },
    { slug: "test-case-writing", title: "Write or review test cases", description: "Create or review prioritized, structured test cases." },
    { slug: "automation-testing", title: "Design API / UI automation", description: "Plan maintainable API or UI automated tests." },
    { slug: "bug-reporting", title: "Analyze and report defects", description: "Organize reproduction steps, impact, and diagnostic evidence." },
    { slug: "test-reporting", title: "Produce a test report", description: "Summarize results, risks, blockers, and release advice." },
  ],
};

export const HOME_EXAMPLES: Record<Lang, HomeExample[]> = {
  "zh-cn": [
    { key: "requirements", input: "需求文档或 User Story", capability: "需求分析 Skill", output: "信息缺口、业务规则、风险和测试场景" },
    { key: "test-cases", input: "测试场景与业务约束", capability: "测试用例 Prompt", output: "带优先级的结构化测试用例" },
    { key: "bug-report", input: "现象、日志和复现信息", capability: "缺陷上报 Skill", output: "可复现、可诊断的 Bug Report" },
  ],
  en: [
    { key: "requirements", input: "Requirements or user story", capability: "Requirements Analysis Skill", output: "Gaps, rules, risks, and test scenarios" },
    { key: "test-cases", input: "Test scenarios and business constraints", capability: "Test Case Prompt", output: "Prioritized, structured test cases" },
    { key: "bug-report", input: "Symptoms, logs, and reproduction details", capability: "Bug Reporting Skill", output: "A reproducible, diagnosable bug report" },
  ],
};
```

Use these exact Chinese task titles: `分析需求`, `制定测试策略`, `编写或评审测试用例`, `设计 API / UI 自动化`, `分析与报告缺陷`, `输出测试报告`. English titles must be concise semantic equivalents.

- [ ] **Step 4: Implement `promptLibrary.ts`**

Export the 15-type copy map using the `testingType` values from `src/content.config.ts`. Add all six versions in the required order and mark only Standard as recommended:

```ts
export type PromptVersion = "Standard" | "ROSES" | "LangGPT" | "ICIO" | "CRISPE" | "RISE";
export type PromptVersionGuideItem = {
  version: PromptVersion;
  description: string;
  recommended: boolean;
};

export const PROMPT_VERSION_GUIDE = {
  "zh-cn": [
    { version: "Standard", description: "默认选择，结构完整、容易直接使用。", recommended: true },
    { version: "ROSES", description: "适合需要明确角色、目标、场景和步骤的任务。", recommended: false },
    { version: "LangGPT", description: "适合需要严格角色、约束和结构化输出的任务。", recommended: false },
    { version: "ICIO", description: "适合输入条件和输出边界清楚的任务。", recommended: false },
    { version: "CRISPE", description: "适合需要上下文、角色、洞察和迭代调整的任务。", recommended: false },
    { version: "RISE", description: "适合需要分步执行和结果检查的任务。", recommended: false },
  ],
  en: [
    { version: "Standard", description: "The default choice with a complete structure that is easy to use directly.", recommended: true },
    { version: "ROSES", description: "Use when the task needs an explicit role, objective, scenario, and steps.", recommended: false },
    { version: "LangGPT", description: "Use when the task needs strict roles, constraints, and structured output.", recommended: false },
    { version: "ICIO", description: "Use when input conditions and output boundaries are clear.", recommended: false },
    { version: "CRISPE", description: "Use when context, role, insight, and iterative refinement matter.", recommended: false },
    { version: "RISE", description: "Use when the task needs stepwise execution and result checks.", recommended: false },
  ],
} satisfies Record<Lang, PromptVersionGuideItem[]>;
```

Define exactly five quick-start steps and exactly three examples for both languages. The steps must not mention `_EN.md`, `_Lite.md`, or fixed file naming.

- [ ] **Step 5: Implement `qaSkillLibrary.ts`**

```ts
import type { Lang } from "@/i18n";
import type { QASkill } from "@/utils/qaskills";

export const QA_SKILL_TOOLS = ["codex", "cursor", "claudecode", "kiro", "opencode", "trae"] as const;
export const RECOMMENDED_QA_SKILL_SLUGS = [
  "discover-testing", "requirements-analysis", "test-case-writing",
  "test-strategy", "bug-reporting", "daily-testing-workflow",
] as const;

const INTRO_FALLBACKS: Record<Lang, Partial<Record<(typeof RECOMMENDED_QA_SKILL_SLUGS)[number], string>>> = {
  "zh-cn": {
    "discover-testing": "输入当前测试任务和项目背景，选择最匹配的主 Skill，并给出下一步执行方式。",
    "requirements-analysis": "输入需求文档或 User Story，输出信息缺口、业务规则、风险和测试范围。",
    "test-case-writing": "输入测试场景和业务约束，输出带优先级的结构化测试用例。",
    "test-strategy": "输入项目目标、范围和风险，输出可执行的测试策略与质量保障重点。",
    "bug-reporting": "输入问题现象、日志和复现信息，输出清晰、可诊断的缺陷报告。",
    "daily-testing-workflow": "输入当天范围、进度和风险，输出可执行的日常测试节奏与交付清单。",
  },
  en: {
    "discover-testing": "Provide the testing task and project context to select the best primary Skill and the next execution step.",
    "requirements-analysis": "Provide requirements or a user story to produce gaps, rules, risks, and test scope.",
    "test-case-writing": "Provide test scenarios and constraints to produce prioritized, structured test cases.",
    "test-strategy": "Provide project goals, scope, and risks to produce an actionable test strategy and quality priorities.",
    "bug-reporting": "Provide symptoms, logs, and reproduction details to produce a clear, diagnosable defect report.",
    "daily-testing-workflow": "Provide today's scope, progress, and risks to produce an actionable daily QA flow and delivery checklist.",
  },
};

export function getQASkillCardIntro(
  skill: Pick<QASkill, "slug" | "intro">,
  lang: Lang,
): string {
  const generic = /(?:真实项目里处理|real project.*related task)/i.test(skill.intro);
  return generic ? INTRO_FALLBACKS[lang][skill.slug as keyof typeof INTRO_FALLBACKS[typeof lang]] || skill.intro : skill.intro;
}
```

- [ ] **Step 6: Run the configuration test**

Run:

```bash
cd tests && npm run test:unit -- contentEntryConfig.test.ts
```

Expected: PASS, 5 test cases when expanded by `it.each`.

- [ ] **Step 7: Commit the configuration boundary**

```bash
git add src/data/homeTaskEntries.ts src/data/promptLibrary.ts src/data/qaSkillLibrary.ts tests/unit/contentEntryConfig.test.ts
git commit -m "feat(content): add bilingual entry page configuration"
```

---

### Task 2: Fix title and source-backed count contracts

**Files:**

- Create: `tests/unit/baseTitle.test.ts`
- Modify: `src/layouts/Base.astro`
- Modify: `tests/unit/promptsListPage.test.ts`
- Modify: `src/pages/[lang]/prompts/index.astro`
- Modify: `src/pages/[lang]/qaskills/index.astro`

**Interfaces:**

- Adds `titleMode?: "append-site" | "absolute"` to `Base.astro`, defaulting to `append-site`.
- Homepage will later consume `titleMode="absolute"`; every existing page keeps its current title behavior.
- Prompts computes `promptCount`, `testingTypeCount`, and `workflowCount` from locale collections.
- QA Skills computes tool count as `QA_SKILL_TOOLS.length`.

- [ ] **Step 1: Write the failing title test**

Create `tests/unit/baseTitle.test.ts`:

```ts
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync("../src/layouts/Base.astro", "utf8");

describe("Base title mode", () => {
  it("supports absolute titles while preserving append-site as the default", () => {
    expect(source).toContain('titleMode?: "append-site" | "absolute"');
    expect(source).toContain('titleMode = "append-site"');
    expect(source).toContain('titleMode === "absolute"');
  });
});
```

- [ ] **Step 2: Strengthen the Prompts page source test**

Extend `tests/unit/promptsListPage.test.ts` with source assertions:

```ts
import { readFileSync } from "node:fs";
const source = readFileSync("../src/pages/[lang]/prompts/index.astro", "utf8");

it("uses collection-backed counts and current usage guidance", () => {
  expect(source).toContain("localePrompts.length");
  expect(source).toContain("typeCards.length");
  expect(source).toContain("localeWorkflows.length");
  expect(source).not.toContain("60+");
  expect(source).not.toContain("_EN.md");
  expect(source).not.toContain("_Lite.md");
});
```

- [ ] **Step 3: Run both tests and verify failure**

```bash
cd tests && npm run test:unit -- baseTitle.test.ts promptsListPage.test.ts
```

Expected: FAIL because `titleMode` and the new dynamic-count expressions are absent and stale guidance remains.

- [ ] **Step 4: Implement the Base title mode**

In `src/layouts/Base.astro`:

```ts
interface Props {
  title?: string;
  titleMode?: "append-site" | "absolute";
  // existing props remain unchanged
}

const {
  title,
  titleMode = "append-site",
  // existing destructuring remains unchanged
} = Astro.props.frontmatter || Astro.props;

const localeTitle = title
  ? titleMode === "absolute" ? title : `${title} | ${t(SITE_TITLE)}`
  : t(SITE_TITLE);
```

- [ ] **Step 5: Replace hardcoded page counts**

In Prompts:

```ts
const promptCount = localePrompts.length;
const testingTypeCount = typeCards.length;
const workflowCount = localeWorkflows.length;
```

Render the localized hero sentence from those values. In QA Skills import `QA_SKILL_TOOLS` and replace `const toolCount = 6` with:

```ts
const toolCount = QA_SKILL_TOOLS.length;
```

At this stage remove `_EN.md`, `_Lite.md`, and `60+` copy even though Task 3 will replace the full quick-start section.

- [ ] **Step 6: Run the focused tests**

```bash
cd tests && npm run test:unit -- baseTitle.test.ts promptsListPage.test.ts contentEntryConfig.test.ts
```

Expected: PASS.

- [ ] **Step 7: Run Astro type checking**

```bash
npx astro check
```

Expected: 0 errors, 0 warnings, 0 hints.

- [ ] **Step 8: Commit correctness fixes**

```bash
git add src/layouts/Base.astro 'src/pages/[lang]/prompts/index.astro' 'src/pages/[lang]/qaskills/index.astro' tests/unit/baseTitle.test.ts tests/unit/promptsListPage.test.ts
git commit -m "fix(content): use accurate titles and resource counts"
```

---

### Task 3: Rebuild the Prompts index around correct selection and review

**Files:**

- Create: `src/components/prompts/PromptVersionGuide.astro`
- Create: `src/components/prompts/PromptExamples.astro`
- Create: `src/components/prompts/AIOutputNotice.astro`
- Modify: `src/pages/[lang]/prompts/index.astro`
- Modify: `tests/unit/promptsListPage.test.ts`

**Interfaces:**

- Each new component consumes `lang: Lang`.
- `PromptVersionGuide.astro` consumes `items: PromptVersionGuideItem[]`.
- `PromptExamples.astro` consumes `examples: PromptExample[]`.
- `AIOutputNotice.astro` owns bilingual review constraints and exposes `id="ai-output-notice"`.
- The Prompts page preserves CollectionPage, ItemList, breadcrumbs, 15 type links, testing flow, workflows, and GoogleAd placement.

- [ ] **Step 1: Add failing Prompts structure assertions**

In `tests/unit/promptsListPage.test.ts`:

```ts
it("renders version guidance, examples, and AI review notice", () => {
  expect(source).toContain("PromptVersionGuide");
  expect(source).toContain("PromptExamples");
  expect(source).toContain("AIOutputNotice");
  expect(source).toContain("PROMPT_QUICK_STEPS");
});
```

- [ ] **Step 2: Run the focused test and verify failure**

```bash
cd tests && npm run test:unit -- promptsListPage.test.ts
```

Expected: FAIL because the new components are not imported or rendered.

- [ ] **Step 3: Implement `PromptVersionGuide.astro`**

Render a semantic section with six cards. Use these stable selectors:

```astro
<section class="prompts-section prompt-version-guide" aria-labelledby="prompt-version-heading">
  <h2 id="prompt-version-heading">{localizedHeading}</h2>
  <p>{localizedIntro}</p>
  <ul role="list">
    {items.map((item) => (
      <li data-prompt-version={item.version} data-recommended={String(item.recommended)}>
        <h3>{item.version}</h3>
        {item.recommended && <span>{localizedDefaultLabel}</span>}
        <p>{item.description}</p>
      </li>
    ))}
  </ul>
</section>
```

- [ ] **Step 4: Implement examples and AI review notice**

`PromptExamples.astro` renders exactly three `<li data-prompt-example>` items with input, recommended capability, and output-structure labels. `AIOutputNotice.astro` renders the four approved constraints from the design as a list; do not introduce claims about accuracy or coverage improvement.

- [ ] **Step 5: Reorder and simplify the Prompts page**

Use this exact order after the hero:

1. Testing-type cards.
2. `PromptVersionGuide`.
3. Five-step quick start from `PROMPT_QUICK_STEPS[lang]`.
4. `PromptExamples`.
5. `AIOutputNotice`.
6. Existing full testing flow.
7. Existing workflow cards.

Change the Chinese H1 to `软件测试提示词库`; keep the English H1 `QA Prompt Library`. Replace each type-card description with `PROMPT_TYPE_COPY[lang][testingType].description`, keeping current links and `ItemList` URLs.

- [ ] **Step 6: Add responsive component styles**

Use existing tokens and page breakpoints. At widths up to 640px:

- H1 must fit naturally within the card without a one-character orphan line.
- Hero actions wrap vertically without overlap.
- Version and example grids use one column.
- No component sets a fixed width wider than its container.

- [ ] **Step 7: Run the focused tests and Astro check**

```bash
cd tests && npm run test:unit -- promptsListPage.test.ts contentEntryConfig.test.ts
npx astro check
```

Expected: all focused tests PASS; Astro reports 0 diagnostics.

- [ ] **Step 8: Commit the Prompts index**

```bash
git add src/components/prompts src/data/promptLibrary.ts 'src/pages/[lang]/prompts/index.astro' tests/unit/promptsListPage.test.ts
git commit -m "feat(prompts): clarify selection and AI review flow"
```

---

### Task 4: Make QA Skills starter-first and transparent

**Files:**

- Create: `src/components/qaskills/QASkillStarterPaths.astro`
- Create: `src/components/qaskills/RecommendedQASkills.astro`
- Modify: `src/pages/[lang]/qaskills/index.astro`
- Modify: `tests/unit/qaskillsFilter.test.ts`
- Modify: `tests/e2e/specs/qaskills.spec.ts`

**Interfaces:**

- `QASkillStarterPaths.astro` consumes `lang: Lang` and renders links to `#qaskills-search`, the localized `/qaskills/discover-testing/`, and `#lifecycle-path`.
- `RecommendedQASkills.astro` consumes `lang: Lang` and `skills: QASkill[]`; missing configured slugs are skipped.
- Search filtering updates `<p id="qaskills-results" aria-live="polite">` with the visible count.
- Existing `.card`, `data-category`, `data-evals`, search, chip, empty, and clear selectors remain available.

- [ ] **Step 1: Write failing source and E2E expectations**

Add source assertions to `tests/unit/qaskillsFilter.test.ts` for `qaskills-results`, `aria-live="polite"`, `QASkillStarterPaths`, and `RecommendedQASkills`.

Add these expectations to `tests/e2e/specs/qaskills.spec.ts` for both languages:

```ts
await expect(page.locator("[data-starter-path]")).toHaveCount(3);
await expect(page.locator("[data-starter-path='discover']")).toHaveAttribute(
  "href", new RegExp(`/${lang}/qaskills/discover-testing/?$`),
);
await expect(page.locator("[data-recommended-skill]")).toHaveCount(6);
await expect(page.locator("#qaskills-results")).toHaveAttribute("aria-live", "polite");
```

- [ ] **Step 2: Run the unit test and verify failure**

```bash
cd tests && npm run test:unit -- qaskillsFilter.test.ts contentEntryConfig.test.ts
```

Expected: FAIL because the starter, recommendation, and result-count contracts are absent.

- [ ] **Step 3: Implement starter and recommendation components**

`QASkillStarterPaths.astro` renders exactly three ordinary links with `data-starter-path="search|discover|lifecycle"`. `RecommendedQASkills.astro` renders a semantic list and calls `getQASkillCardIntro()` for display copy. Keep card links locale-aware through `getRelativeLocaleUrl()`.

- [ ] **Step 4: Reorder the page**

Use this exact order:

1. Hero and status.
2. `QASkillStarterPaths`.
3. Existing discovery/search section.
4. `RecommendedQASkills`.
5. Existing quick start.
6. Existing lifecycle path.
7. Existing complete categories.

Build `recommendedSkills` by mapping `RECOMMENDED_QA_SKILL_SLUGS` against `allSkills` and filtering missing values with a typed predicate.

- [ ] **Step 5: Correct status and Evals wording**

- Chinese: `38 个 Skills 包含评测用例`.
- English: `38 skills include evaluation cases`.
- Filter label: `包含 Evals` / `Has Evals`.
- Add a short explanatory note that Evals means evaluation cases exist and does not assert current runtime results.
- Do not render a date tag when `updatedAt` is empty.

- [ ] **Step 6: Update the search script**

Add:

```js
const results = document.getElementById("qaskills-results");

const updateResultCount = (visible) => {
  if (!results) return;
  results.textContent = results.dataset.template.replace("{count}", String(visible));
};
```

Call `updateResultCount(visible)` at the end of every `apply()`. Update `aria-pressed` on all filter buttons when state changes. Preserve existing empty-state and clear behavior.

- [ ] **Step 7: Run unit and focused E2E tests**

First run unit tests:

```bash
cd tests && npm run test:unit -- qaskillsFilter.test.ts qaskillsLifecyclePath.test.ts contentEntryConfig.test.ts
```

Then build and start the dedicated preview in another terminal:

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4327
```

Run:

```bash
cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4327 npm run test:e2e -- e2e/specs/qaskills.spec.ts
```

Expected: focused unit and E2E tests PASS.

- [ ] **Step 8: Commit the QA Skills index**

```bash
git add src/components/qaskills src/data/qaSkillLibrary.ts 'src/pages/[lang]/qaskills/index.astro' tests/unit/qaskillsFilter.test.ts tests/e2e/specs/qaskills.spec.ts
git commit -m "feat(qaskills): add starter-first discovery flow"
```

---

### Task 5: Consolidate the homepage without losing main behavior

**Files:**

- Create: `src/components/home/HomeTaskNavigator.astro`
- Create: `src/components/home/CoreCapabilities.astro`
- Create: `src/components/home/HomeProofAndCases.astro`
- Modify: `src/pages/[lang]/index.astro`
- Modify: `src/components/TrackingEvents.astro`
- Modify: `tests/e2e/specs/apple-home.spec.ts`
- Modify: `tests/e2e/specs/tracking-contract.spec.ts`
- Modify: `tests/e2e/specs/seo.spec.ts`

**Interfaces:**

- `HomeTaskNavigator.astro` consumes `lang: Lang`; retains `.home-primary-entry`, adds `data-home-mode`, and renders six `[data-home-task]` links.
- The `act` primary card contains two explicit localized links to `/qaskills/` and `/prompts/`.
- `CoreCapabilities.astro` consumes localized recommended Prompt entries and `QASkill[]`.
- `HomeProofAndCases.astro` consumes a typed `HomeProofStats` object and examples.
- `TrackingEvents.astro` recognizes `prompts` and `qaskills` alongside existing names.
- Homepage passes `titleMode="absolute"` to Base.

- [ ] **Step 1: Replace obsolete homepage E2E expectations with failing target behavior**

Update `tests/e2e/specs/apple-home.spec.ts` to assert for both languages:

```ts
await expect(page.locator(".home-apple-hero")).toBeVisible();
await expect(page.locator("[data-home-mode]")).toHaveCount(3);
await expect(page.locator("[data-home-task]")).toHaveCount(6);
await expect(page.locator("[data-core-capability]")).toHaveCount(2);
await expect(page.locator("[data-home-example]")).toHaveCount(3);
await expect(page.locator(".home-latest-posts .home-card")).toHaveCount(3);
await expect(page.locator("[data-continue-exploring]")).toHaveCount(4);
```

Delete assertions that require the old standalone `.home-prompts`, `.home-projects`, `.home-tags`, or six-post layout. Keep the existing three-primary-entry assertions and adapt them to `[data-home-mode]`.

- [ ] **Step 2: Add failing tracking tests**

Refactor the first tracking-contract test into a table covering:

```ts
const cases = [
  { href: "/zh-cn/blog/", entryName: "blog" },
  { href: "/zh-cn/wiki/", entryName: "wiki" },
  { href: "/zh-cn/prompts/", entryName: "prompts" },
  { href: "/zh-cn/qaskills/", entryName: "qaskills" },
];
```

For each case, click a visible matching homepage link, prevent navigation, and assert `eventName`, `entry_name`, `lang`, `session_id`, and `path`. Use a fresh page or clear the matching session-storage dedupe key between cases.

- [ ] **Step 3: Run E2E against the pre-change page and verify failure**

Use the dedicated preview:

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4327
cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4327 npm run test:e2e -- e2e/specs/apple-home.spec.ts e2e/specs/tracking-contract.spec.ts
```

Expected: FAIL on the new task, capability, example, consolidated-section, Prompts tracking, and QA Skills tracking expectations.

- [ ] **Step 4: Implement `HomeTaskNavigator.astro`**

Move main's `primaryEntries` rendering and CSS into the component, preserving `.home-primary-entry`. Render three modes from `HOME_PRIMARY_MODES[lang]`; the read and reference modes have one primary link, while the act mode contains two links. Render the six tasks immediately below in the same section using localized QA Skill links.

Do not nest `<a>` elements. The act mode must be a non-link card containing two child links; adjust tests so the three cards are counted by `[data-home-mode]`, not by anchor count.

- [ ] **Step 5: Implement capabilities and proof components**

`CoreCapabilities.astro` renders exactly two panels with `data-core-capability="skills|prompts"` and three recommended links each. `HomeProofAndCases.astro` renders only computed counts and exactly three explicitly labelled examples.

Define in the homepage:

```ts
const homeProofStats = {
  skillCount: qaSkillsGrouped.testingTypes.length + qaSkillsGrouped.testingWorkflows.length + qaSkillsGrouped.plus.length,
  skillEvalCount: [...qaSkillsGrouped.testingTypes, ...qaSkillsGrouped.testingWorkflows, ...qaSkillsGrouped.plus]
    .filter((skill) => skill.hasEvals).length,
  promptCount: localePrompts.length,
  promptTypeCount: promptTypeMap.size,
  workflowCount: localeWorkflowsAll.length,
};
```

Keep an unsliced `localeWorkflowsAll` for counts and derive the three display workflows separately where still needed.

- [ ] **Step 6: Rebuild the homepage into five sections**

Use this order:

1. Hero with absolute title, new QA positioning, Skills CTA, Prompts CTA, and existing console visual.
2. `HomeTaskNavigator` containing the three modes and six tasks.
3. `CoreCapabilities`.
4. `HomeProofAndCases`.
5. Continue exploring: three latest posts plus Wiki, AI Wiki, Guild, and Projects compact links.

Remove the old standalone Prompts, QA Skills, Projects, Guild, Wiki, AI Wiki, and Tags bands only after their required destinations exist in the new five-section layout. Keep `GoogleAd` placement between meaningful content blocks without adding more ads.

- [ ] **Step 7: Extend tracking without breaking dedupe**

In `getEntryName()` add, before the fallback return:

```js
if (p.startsWith(`${prefix}prompts`)) return "prompts";
if (p.startsWith(`${prefix}qaskills`)) return "qaskills";
```

Preserve current Blog, Wiki, AI Wiki, Guild recognition, 10-second per-entry dedupe, `session_id`, timestamp, language, and path fields.

- [ ] **Step 8: Add the homepage SEO assertion**

In `tests/e2e/specs/seo.spec.ts`, assert exact titles:

```ts
await page.goto(`${baseURL}/zh-cn/`);
await expect(page).toHaveTitle("软件测试同学 X naodeng｜AI 测试知识、Skills 与 Prompts");
await page.goto(`${baseURL}/en/`);
await expect(page).toHaveTitle("Nao Deng | QA Skills, Prompts and AI Testing Knowledge");
```

Keep existing canonical, hreflang, schema, and robots assertions.

- [ ] **Step 9: Run focused E2E and unit tests**

```bash
cd tests && npm run test:unit -- baseTitle.test.ts contentEntryConfig.test.ts
cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4327 npm run test:e2e -- e2e/specs/apple-home.spec.ts e2e/specs/tracking-contract.spec.ts e2e/specs/seo.spec.ts
```

Expected: PASS.

- [ ] **Step 10: Commit the homepage consolidation**

```bash
git add src/components/home src/data/homeTaskEntries.ts src/components/TrackingEvents.astro 'src/pages/[lang]/index.astro' tests/e2e/specs/apple-home.spec.ts tests/e2e/specs/tracking-contract.spec.ts tests/e2e/specs/seo.spec.ts
git commit -m "feat(home): prioritize QA tasks and core capabilities"
```

---

### Task 6: Complete bilingual responsive regression coverage

**Files:**

- Modify: `tests/e2e/specs/responsive.spec.ts`
- Modify: `tests/e2e/specs/header.spec.ts` only if selectors changed indirectly; do not change the three mobile priority-link expectations.
- Modify: `tests/e2e/specs/qaskills.spec.ts` only for final cross-page assertions not already covered.

**Interfaces:**

- Uses the stable selectors introduced in Tasks 3–5.
- Preserves main's mobile Header contract: Blog, Wiki / AI Wiki, and Prompts priority links.

- [ ] **Step 1: Add a failing 390px overflow matrix**

In `tests/e2e/specs/responsive.spec.ts`:

```ts
for (const lang of ["zh-cn", "en"] as const) {
  for (const path of ["", "qaskills/", "prompts/"] as const) {
    test(`${lang}/${path} has no horizontal overflow at 390px`, async ({ page, baseURL }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(`${baseURL}/${lang}/${path}`);
      const widths = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        document: document.documentElement.scrollWidth,
      }));
      expect(widths.document).toBeLessThanOrEqual(widths.viewport + 1);
    });
  }
}
```

Add a Chinese Prompts H1 check that its bounding box remains inside the hero card and its computed font size is at least 32px.

- [ ] **Step 2: Run the responsive test and capture any real failure**

```bash
cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4327 npm run test:e2e -- e2e/specs/responsive.spec.ts
```

Expected before final responsive adjustment: either PASS or a concrete page/viewport failure. If it passes, keep the regression test and do not manufacture a CSS change.

- [ ] **Step 3: Apply only evidence-backed responsive fixes**

If the test reports overflow, identify the exact overflowing selector with `getBoundingClientRect()` and change only that component's mobile rule. Do not add a global `overflow-x: hidden` workaround. If the H1 check fails, adjust only the Prompts hero title's mobile `font-size`, `line-height`, or max width.

- [ ] **Step 4: Run all focused browser contracts**

```bash
cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4327 npm run test:e2e -- e2e/specs/apple-home.spec.ts e2e/specs/tracking-contract.spec.ts e2e/specs/header.spec.ts e2e/specs/qaskills.spec.ts e2e/specs/responsive.spec.ts e2e/specs/seo.spec.ts
```

Expected: all tests in the six focused specifications PASS for configured projects.

- [ ] **Step 5: Commit responsive regression coverage**

```bash
git add tests/e2e/specs/responsive.spec.ts tests/e2e/specs/header.spec.ts tests/e2e/specs/qaskills.spec.ts src/components/home src/components/prompts src/components/qaskills 'src/pages/[lang]/index.astro' 'src/pages/[lang]/prompts/index.astro' 'src/pages/[lang]/qaskills/index.astro'
git commit -m "test(ui): cover bilingual content entry pages"
```

---

### Task 7: Final repository verification

**Files:**

- Verify only; modify files only to fix failures caused by Tasks 1–6.

**Interfaces:**

- No new interfaces.

- [ ] **Step 1: Run the complete unit suite**

```bash
npm test
```

Expected: all Vitest files and tests PASS with zero failures.

- [ ] **Step 2: Run the production build**

```bash
npm run build
```

Expected: Astro check reports 0 errors, 0 warnings, and 0 hints; the static build completes successfully.

- [ ] **Step 3: Run SEO static checks**

```bash
npm run seo:check
```

Expected: exit code 0 with no broken required SEO contract.

- [ ] **Step 4: Start a fresh preview from the verified build**

```bash
npm run preview -- --host 127.0.0.1 --port 4327
```

Expected: Astro reports `http://127.0.0.1:4327/` ready. Stop any older process on this exact port before starting; do not reuse a stale server.

- [ ] **Step 5: Run the focused E2E suite against that preview**

```bash
cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4327 npm run test:e2e -- e2e/specs/apple-home.spec.ts e2e/specs/tracking-contract.spec.ts e2e/specs/header.spec.ts e2e/specs/qaskills.spec.ts e2e/specs/responsive.spec.ts e2e/specs/seo.spec.ts
```

Expected: all configured browser projects PASS with zero failures.

- [ ] **Step 6: Perform manual browser evidence checks**

Inspect these six combinations at 1280×720 and 390×844:

- `/zh-cn/` and `/en/`
- `/zh-cn/qaskills/` and `/en/qaskills/`
- `/zh-cn/prompts/` and `/en/prompts/`

Confirm visible hierarchy, button wrapping, no horizontal scroll, no obstructed content, correct language copy, and working primary links. Treat local Google Ads 403 responses as local third-party behavior, but report any site-owned console error as a failure.

- [ ] **Step 7: Check the final diff and working tree**

```bash
git diff --check
git status --short
git diff --stat origin/main...HEAD
```

Expected: `git diff --check` is empty; only intentional task changes are present; generated output is absent.

- [ ] **Step 8: Commit any verification-only fixes**

If Step 1–7 required source fixes, stage only those exact files and commit:

```bash
git commit -m "fix(ui): resolve content entry regression"
```

If no files changed, do not create an empty commit.
