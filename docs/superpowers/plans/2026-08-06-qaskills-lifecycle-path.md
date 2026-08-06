# QA Skills Lifecycle Path Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 `/[lang]/qaskills/` 首页 Hero 与搜索之间新增「软件测试生命周期路径」区块：6 个阶段列、父级 type + 对应 plus 可点进详情页。

**Architecture:** 在 `src/utils/qaskills.ts` 增加独立常量 `LIFECYCLE_PATH_STAGES` 与纯函数 `resolveLifecyclePath`，按 slug 从已加载 skills 解析节点（缺失则跳过）；`index.astro` 渲染横向阶段列（`max-width: 920px` 竖叠），样式沿用现有 CSS 变量。不改详情页、同步脚本、搜索筛选。

**Tech Stack:** Astro、TypeScript、Vitest（`tests/`）、Playwright e2e（轻量断言）、本站 CSS 变量。

**Spec:** `docs/superpowers/specs/2026-08-06-qaskills-lifecycle-path-design.md`

---

## File Structure

| 文件 | 职责 |
| --- | --- |
| Modify: `src/utils/qaskills.ts` | 导出 `LIFECYCLE_PATH_STAGES`、`resolveLifecyclePath` 及结果类型 |
| Create: `tests/unit/qaskillsLifecyclePath.test.ts` | 路径解析单测（顺序、plus、缺失跳过、不含工具变体） |
| Modify: `src/pages/[lang]/qaskills/index.astro` | Hero 后插入路径图区块 + 样式 |
| Modify: `tests/e2e/specs/qaskills.spec.ts` | 首页可见路径图且节点可进详情 |

---

### Task 1: 路径配置与解析函数（TDD）

**Files:**
- Modify: `src/utils/qaskills.ts`
- Create: `tests/unit/qaskillsLifecyclePath.test.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/unit/qaskillsLifecyclePath.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import {
  LIFECYCLE_PATH_STAGES,
  resolveLifecyclePath,
  type QASkill,
} from "@/utils/qaskills";

function stubSkill(partial: Pick<QASkill, "slug" | "title" | "category"> & Partial<QASkill>): QASkill {
  return {
    lang: "zh-cn",
    chineseName: partial.title,
    author: "naodeng",
    updatedAt: "2026-08-06",
    description: "",
    intro: "",
    subgroup: "",
    hasEvals: false,
    sourceSkillUrl: "",
    sourceRepoUrl: "https://github.com/naodeng/awesome-qa-skills",
    sections: {
      whenToUse: "",
      workflow: "",
      coreConstraints: "",
      progressiveDisclosure: "",
      checklist: "",
      pitfalls: "",
    },
    sectionHtml: {
      whenToUse: "",
      workflow: "",
      coreConstraints: "",
      progressiveDisclosure: "",
      checklist: "",
      pitfalls: "",
    },
    rawSkillMarkdown: "",
    installMarkdown: "",
    installHtml: "",
    ...partial,
  };
}

describe("LIFECYCLE_PATH_STAGES", () => {
  it("has 6 stages in lifecycle order with expected parent and plus slugs", () => {
    expect(LIFECYCLE_PATH_STAGES).toHaveLength(6);
    expect(LIFECYCLE_PATH_STAGES.map((s) => s.key)).toEqual([
      "requirements-strategy",
      "case-design-review",
      "functional-compatibility",
      "api-automation",
      "quality-specialties",
      "defect-reporting",
    ]);
    expect(LIFECYCLE_PATH_STAGES[0].typeSlugs).toEqual([
      "requirements-analysis",
      "test-strategy",
    ]);
    expect(LIFECYCLE_PATH_STAGES[0].plusSlugs).toEqual([
      "requirements-analysis-plus",
      "test-strategy-plus",
    ]);
    expect(LIFECYCLE_PATH_STAGES[3].typeSlugs).toEqual([
      "api-testing",
      "automation-testing",
    ]);
    expect(LIFECYCLE_PATH_STAGES[3].plusSlugs).toEqual([]);
    const allTypeSlugs = LIFECYCLE_PATH_STAGES.flatMap((s) => s.typeSlugs);
    expect(allTypeSlugs).not.toContain("api-test-bruno");
    expect(allTypeSlugs).not.toContain("performance-test-k6");
  });
});

describe("resolveLifecyclePath", () => {
  it("resolves type then plus nodes and skips missing slugs", () => {
    const skills = [
      stubSkill({ slug: "requirements-analysis", title: "需求分析", category: "type" }),
      stubSkill({ slug: "test-strategy-plus", title: "测试策略加强版", category: "plus" }),
      stubSkill({ slug: "api-test-bruno", title: "Bruno", category: "type" }),
    ];
    const stages = resolveLifecyclePath(skills, "zh-cn");
    const first = stages.find((s) => s.key === "requirements-strategy");
    expect(first?.title).toBe("需求与策略");
    expect(first?.nodes.map((n) => n.slug)).toEqual([
      "requirements-analysis",
      "test-strategy-plus",
    ]);
    expect(first?.nodes.map((n) => n.kind)).toEqual(["type", "plus"]);
    expect(first?.nodes[0].label).toBe("需求分析");
    expect(stages.find((s) => s.key === "api-automation")?.nodes).toEqual([]);
  });

  it("uses English stage titles when lang is en", () => {
    const stages = resolveLifecyclePath([], "en");
    expect(stages[0].title).toBe("Requirements & Strategy");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd tests && npx vitest --run unit/qaskillsLifecyclePath.test.ts`

Expected: FAIL — `LIFECYCLE_PATH_STAGES` / `resolveLifecyclePath` not exported

- [ ] **Step 3: Write minimal implementation**

In `src/utils/qaskills.ts`, after `TESTING_TYPE_SUBGROUPS` (near line 106), add:

```ts
export type LifecyclePathNodeKind = "type" | "plus";

export type LifecyclePathStageConfig = {
  key: string;
  title: { "zh-cn": string; en: string };
  typeSlugs: string[];
  plusSlugs: string[];
};

export type LifecyclePathNode = {
  slug: string;
  label: string;
  kind: LifecyclePathNodeKind;
};

export type LifecyclePathStage = {
  key: string;
  title: string;
  nodes: LifecyclePathNode[];
};

export const LIFECYCLE_PATH_STAGES: LifecyclePathStageConfig[] = [
  {
    key: "requirements-strategy",
    title: { "zh-cn": "需求与策略", en: "Requirements & Strategy" },
    typeSlugs: ["requirements-analysis", "test-strategy"],
    plusSlugs: ["requirements-analysis-plus", "test-strategy-plus"],
  },
  {
    key: "case-design-review",
    title: { "zh-cn": "用例与评审", en: "Case Design & Review" },
    typeSlugs: ["test-case-writing", "test-case-reviewer"],
    plusSlugs: ["testcase-writer-plus", "test-case-reviewer-plus"],
  },
  {
    key: "functional-compatibility",
    title: { "zh-cn": "功能与兼容", en: "Functional & Compatibility" },
    typeSlugs: ["functional-testing", "manual-testing", "mobile-testing"],
    plusSlugs: [],
  },
  {
    key: "api-automation",
    title: { "zh-cn": "接口与自动化", en: "API & Automation" },
    typeSlugs: ["api-testing", "automation-testing"],
    plusSlugs: [],
  },
  {
    key: "quality-specialties",
    title: { "zh-cn": "质量专项", en: "Quality Specialties" },
    typeSlugs: ["performance-testing", "security-testing", "accessibility-testing"],
    plusSlugs: [],
  },
  {
    key: "defect-reporting",
    title: { "zh-cn": "缺陷、报告与审查", en: "Defect, Reporting & Review" },
    typeSlugs: ["bug-reporting", "test-reporting", "code-review", "ai-assisted-testing"],
    plusSlugs: [],
  },
];

function displayLabel(skill: QASkill, lang: "en" | "zh-cn") {
  return lang === "zh-cn" ? skill.chineseName || skill.title : skill.title;
}

export function resolveLifecyclePath(
  skills: QASkill[],
  lang: "en" | "zh-cn"
): LifecyclePathStage[] {
  const bySlug = new Map(skills.map((skill) => [skill.slug, skill]));

  return LIFECYCLE_PATH_STAGES.map((stage) => {
    const nodes: LifecyclePathNode[] = [];
    for (const slug of stage.typeSlugs) {
      const skill = bySlug.get(slug);
      if (!skill) continue;
      nodes.push({ slug, label: displayLabel(skill, lang), kind: "type" });
    }
    for (const slug of stage.plusSlugs) {
      const skill = bySlug.get(slug);
      if (!skill) continue;
      nodes.push({ slug, label: displayLabel(skill, lang), kind: "plus" });
    }
    return {
      key: stage.key,
      title: stage.title[lang],
      nodes,
    };
  });
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd tests && npx vitest --run unit/qaskillsLifecyclePath.test.ts`

Expected: PASS

- [ ] **Step 5: Commit**（仅在用户要求提交时执行）

```bash
git add src/utils/qaskills.ts tests/unit/qaskillsLifecyclePath.test.ts
git commit -m "$(cat <<'EOF'
feat(qaskills): add lifecycle path stage config and resolver

EOF
)"
```

---

### Task 2: 首页路径图区块（markup + CSS）

**Files:**
- Modify: `src/pages/[lang]/qaskills/index.astro`

- [ ] **Step 1: Import resolver and compute stages**

Near top imports / data prep in `src/pages/[lang]/qaskills/index.astro`, change:

```ts
import { getQASkillsGrouped, resolveLifecyclePath } from "@/utils/qaskills";
```

After `const allSkills = ...` add:

```ts
const lifecycleStages = resolveLifecyclePath(
  allSkills,
  lang === "zh-cn" ? "zh-cn" : "en"
);
```

- [ ] **Step 2: Add bilingual copy to `text`**

In the zh-cn `text` object add:

```ts
lifecycleTitle: "软件测试生命周期路径",
lifecycleIntro: "按生命周期阶段查看会用到的 Skills，点击进入详情。",
lifecyclePlusLabel: "Plus",
```

In the en `text` object add:

```ts
lifecycleTitle: "Software Testing Lifecycle Path",
lifecycleIntro: "Browse skills by lifecycle stage. Click any skill to open its detail page.",
lifecyclePlusLabel: "Plus",
```

- [ ] **Step 3: Insert section between Hero and discovery**

Immediately after `</header>` (hero) and before `<section class="section discovery" ...>`, insert:

```astro
    <section id="lifecycle-path" class="section lifecycle-path" aria-labelledby="lifecycle-path-title">
      <h2 id="lifecycle-path-title">{text.lifecycleTitle}</h2>
      <p class="lifecycle-intro">{text.lifecycleIntro}</p>
      <ol class="lifecycle-track" role="list">
        {lifecycleStages.map((stage, index) => (
          <>
            <li class="lifecycle-stage" data-stage={stage.key}>
              <p class="lifecycle-stage-title">
                <span class="lifecycle-stage-num" aria-hidden="true">{index + 1}</span>
                {stage.title}
              </p>
              <ul class="lifecycle-skills" role="list">
                {stage.nodes.map((node) => (
                  <li>
                    <a
                      class:list={["lifecycle-skill", node.kind === "plus" && "lifecycle-skill--plus"]}
                      href={getRelativeLocaleUrl(lang, `/qaskills/${node.slug}/`)}
                      data-slug={node.slug}
                      data-kind={node.kind}
                    >
                      <span>{node.label}</span>
                      {node.kind === "plus" && (
                        <span class="lifecycle-plus-tag">{text.lifecyclePlusLabel}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {index < lifecycleStages.length - 1 && (
              <li class="lifecycle-arrow" aria-hidden="true">→</li>
            )}
          </>
        ))}
      </ol>
    </section>
```

Note: Astro fragments (`<>...</>`) inside `.map` are supported in current Astro; if the project version complains, wrap stage+arrow in a single `<li class="lifecycle-cell">` structure instead — prefer keeping stage and arrow as separate list items as above, or switch track to `<div class="lifecycle-track">` with `<div class="lifecycle-stage">` children (not `ol`) if fragment issues appear. **Preferred fallback if fragments fail:**

```astro
      <div class="lifecycle-track">
        {lifecycleStages.map((stage, index) => (
          <div class="lifecycle-cell">
            <div class="lifecycle-stage" data-stage={stage.key}>
              ...
            </div>
            {index < lifecycleStages.length - 1 && (
              <span class="lifecycle-arrow" aria-hidden="true">→</span>
            )}
          </div>
        ))}
      </div>
```

Use the **div fallback** in implementation to avoid Astro fragment/`ol` + arrow-as-`li` a11y quirks. Final markup to ship:

```astro
    <section id="lifecycle-path" class="section lifecycle-path" aria-labelledby="lifecycle-path-title">
      <h2 id="lifecycle-path-title">{text.lifecycleTitle}</h2>
      <p class="lifecycle-intro">{text.lifecycleIntro}</p>
      <div class="lifecycle-track">
        {lifecycleStages.map((stage, index) => (
          <div class="lifecycle-cell">
            <div class="lifecycle-stage" data-stage={stage.key}>
              <p class="lifecycle-stage-title">
                <span class="lifecycle-stage-num" aria-hidden="true">{index + 1}</span>
                {stage.title}
              </p>
              <ul class="lifecycle-skills" role="list">
                {stage.nodes.map((node) => (
                  <li>
                    <a
                      class:list={["lifecycle-skill", node.kind === "plus" && "lifecycle-skill--plus"]}
                      href={getRelativeLocaleUrl(lang, `/qaskills/${node.slug}/`)}
                      data-slug={node.slug}
                      data-kind={node.kind}
                    >
                      <span>{node.label}</span>
                      {node.kind === "plus" && (
                        <span class="lifecycle-plus-tag">{text.lifecyclePlusLabel}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {index < lifecycleStages.length - 1 && (
              <span class="lifecycle-arrow" aria-hidden="true">→</span>
            )}
          </div>
        ))}
      </div>
    </section>
```

- [ ] **Step 4: Add CSS before existing `@media (max-width: 920px)` block**

```css
  .lifecycle-intro {
    margin: 0 0 0.85rem;
    opacity: 0.88;
  }
  .lifecycle-track {
    display: flex;
    align-items: stretch;
    gap: 0.35rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.25rem;
  }
  .lifecycle-cell {
    display: flex;
    align-items: stretch;
    gap: 0.35rem;
    flex: 1 1 0;
    min-width: 9.5rem;
  }
  .lifecycle-stage {
    flex: 1;
    border-radius: 12px;
    border: 1px solid color-mix(in srgb, var(--color-main) 14%, transparent);
    background: color-mix(in srgb, var(--color-base) 97%, var(--color-main));
    padding: 0.75rem;
  }
  .lifecycle-stage-title {
    margin: 0 0 0.55rem;
    font-weight: 800;
    font-size: 0.92rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    line-height: 1.35;
  }
  .lifecycle-stage-num {
    display: inline-grid;
    place-items: center;
    width: 1.35rem;
    height: 1.35rem;
    border-radius: 999px;
    flex-shrink: 0;
    background: color-mix(in srgb, var(--color-theme) 18%, transparent);
    color: var(--color-theme);
    font-size: 0.75rem;
  }
  .lifecycle-skills {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.4rem;
  }
  .lifecycle-skill {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.35rem;
    text-decoration: none;
    color: inherit;
    border-radius: 8px;
    border: 1px solid color-mix(in srgb, var(--color-main) 14%, transparent);
    background: color-mix(in srgb, var(--color-theme) 8%, transparent);
    padding: 0.4rem 0.55rem;
    font-size: 0.86rem;
    font-weight: 650;
    line-height: 1.35;
  }
  .lifecycle-skill:hover {
    border-color: color-mix(in srgb, var(--color-theme) 45%, transparent);
  }
  .lifecycle-skill:focus-visible {
    outline: 2px solid var(--color-theme);
    outline-offset: 2px;
  }
  .lifecycle-skill--plus {
    background: transparent;
    border-style: dashed;
    opacity: 0.92;
    font-weight: 600;
  }
  .lifecycle-plus-tag {
    flex-shrink: 0;
    font-size: 0.68rem;
    font-weight: 800;
    padding: 0.1rem 0.35rem;
    border-radius: 999px;
    border: 1px dashed color-mix(in srgb, var(--color-main) 28%, transparent);
    color: var(--color-theme);
  }
  .lifecycle-arrow {
    align-self: center;
    flex-shrink: 0;
    color: color-mix(in srgb, var(--color-main) 45%, transparent);
    font-weight: 700;
    padding: 0 0.1rem;
  }
```

Inside existing `@media (max-width: 920px)` add:

```css
    .lifecycle-track {
      flex-direction: column;
      overflow-x: visible;
    }
    .lifecycle-cell {
      min-width: 0;
      flex-direction: column;
    }
    .lifecycle-arrow {
      transform: rotate(90deg);
      align-self: center;
      padding: 0.15rem 0;
    }
```

- [ ] **Step 5: Smoke-check pages compile**

Run: `npm run build`

Expected: build succeeds; no Astro/TS errors about `resolveLifecyclePath` or `lifecycleStages`

- [ ] **Step 6: Commit**（仅在用户要求提交时执行）

```bash
git add src/pages/[lang]/qaskills/index.astro
git commit -m "$(cat <<'EOF'
feat(qaskills): render lifecycle path map on skills index

EOF
)"
```

---

### Task 3: E2E 冒烟 + 手工核对清单

**Files:**
- Modify: `tests/e2e/specs/qaskills.spec.ts`

- [ ] **Step 1: Add e2e coverage**

Append inside `test.describe("QA Skills", ...)`:

```ts
  test("index lifecycle path links to skill detail", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    const section = page.locator("#lifecycle-path");
    await expect(section).toBeVisible();
    await expect(section.getByRole("heading", { name: "软件测试生命周期路径" })).toBeVisible();
    const link = section.locator('a.lifecycle-skill[data-slug="requirements-analysis"]');
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/\/zh-cn\/qaskills\/requirements-analysis\/?/);
  });

  test("en index shows lifecycle path", async ({ page }) => {
    await page.goto("/en/qaskills/");
    const section = page.locator("#lifecycle-path");
    await expect(section).toBeVisible();
    await expect(
      section.getByRole("heading", { name: "Software Testing Lifecycle Path" })
    ).toBeVisible();
    await expect(
      section.locator('a.lifecycle-skill[data-slug="api-testing"]')
    ).toBeVisible();
  });
```

- [ ] **Step 2: Run unit + e2e**

Run:

```bash
cd tests && npx vitest --run unit/qaskillsLifecyclePath.test.ts
cd tests && npx playwright test e2e/specs/qaskills.spec.ts
```

Expected: all PASS（e2e 需按仓库惯例先有 preview/`PLAYWRIGHT_BASE_URL`；若本地无服务，先 `npm run build && npm run preview` 或使用现有测试脚本）

若项目用 `cd tests && npm run test:e2e -- e2e/specs/qaskills.spec.ts`，改用该命令。

- [x] **Step 3: Manual checklist（实现者勾选）**

- [x] `/zh-cn/qaskills/`：路径图在 Hero 下、搜索上（dist HTML 位置核对 + e2e）
- [x] 六个阶段顺序正确；阶段 1/2 可见 Plus 虚线样式（`--plus` + `border-style: dashed` 在源码；dist 有 4 个 plus 节点）
- [x] 点击 `api-testing`、`bug-reporting` 进详情（链接存在于 dist；e2e 覆盖 requirements-analysis 跳转）
- [x] `/en/qaskills/` 英文标题与标签正常（e2e + dist）
- [x] 窄视口（≤920px）阶段竖叠，箭头旋转，无横向整页撑破（CSS `@media (max-width: 920px)`：`flex-direction: column` + `rotate(90deg)`）

- [ ] **Step 4: Commit**（仅在用户要求提交时执行）

```bash
git add tests/e2e/specs/qaskills.spec.ts tests/unit/qaskillsLifecyclePath.test.ts
git commit -m "$(cat <<'EOF'
test(qaskills): cover lifecycle path unit and e2e smoke

EOF
)"
```

- [ ] **Step 5: Update spec status**

In `docs/superpowers/specs/2026-08-06-qaskills-lifecycle-path-design.md`, change status line to:

`> 状态：已实现（2026-08-06）`

Commit with docs only if user asks.

---

## Spec coverage self-check

| Spec 要求 | Task |
| --- | --- |
| Hero 与搜索之间 | Task 2 Step 3 |
| 6 阶段 + 挂载表 | Task 1 Step 3 |
| Type + Plus 弱样式 | Task 2 Steps 3–4 |
| 仅父级、无工具变体 | Task 1 测试断言 |
| 链接到详情 | Task 2 + Task 3 e2e |
| 桌面横向 / 920 竖叠 | Task 2 Step 4 |
| 缺失 slug 跳过 | Task 1 `resolveLifecyclePath` |
| 不改详情/同步/筛选 | 文件范围无这些文件 |
| `npm run build` | Task 2 Step 5 |
| 中英 | Task 2 copy + Task 3 en e2e |

## Placeholder / consistency self-check

- 无 TBD；类型名统一 `LifecyclePath*` / `resolveLifecyclePath` / `LIFECYCLE_PATH_STAGES`
- 阶段 key 与现有 subgroup key 对齐（便于维护），但配置独立，不复用 `TESTING_TYPE_SUBGROUPS.slugs`（因后者含工具变体）
