# QA Skills Pages Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 用可复跑同步脚本把 `awesome-qa-skills` 全量对齐到站点，并改版 `/qaskills` 首页（搜索筛选 + Evals/日期卡片）与详情页（SKILL.md 章节流 + Guide/SKILL.md 双 Tab 原始预览 + 侧栏安装）。

**Architecture:** 仓库 `SKILL.md` 经 `scripts/sync-qaskills-from-repo.mjs` 生成 `src/content/qaskills/{zh-cn|en}/*.md`（含结构化章节与 `## 原始 SKILL.md` 全文）；`src/utils/qaskills*.ts` 负责解析、分组、筛选、相关推荐；Astro 详情主栏用 Tab 切换 Guide 与原始预览。英文源标题为 When to Use / Workflow / …，中文为 何时使用 / 执行流程 / …，同步与解析共用双语 heading 表。

**Tech Stack:** Astro、TypeScript、Node ESM scripts、Vitest（`tests/`）、现有本站 CSS 变量。

**Spec:** `docs/superpowers/specs/2026-08-05-qaskills-pages-redesign-design.md`

---

## File Structure

| 文件 | 职责 |
| --- | --- |
| Create: `src/utils/qaskillsSections.ts` | 双语章节键、从 markdown 切分标准章节 |
| Create: `src/utils/qaskillsFilter.ts` | 首页搜索/筛选纯函数 |
| Create: `src/utils/qaskillsRelated.ts` | 相关技能推荐纯函数 |
| Create: `scripts/sync-qaskills-from-repo.mjs` | 从仓库生成站点 md |
| Create: `tests/unit/qaskillsSections.test.ts` | 章节切分单测 |
| Create: `tests/unit/qaskillsFilter.test.ts` | 筛选单测 |
| Create: `tests/unit/qaskillsRelated.test.ts` | 相关推荐单测 |
| Create: `tests/unit/qaskillsParse.site.test.ts` | 站点 md 解析单测 |
| Create: `tests/e2e/specs/qaskills.spec.ts` | 首页/详情冒烟 |
| Modify: `src/utils/qaskills.ts` | 类型、读盘、分组（含 code-review） |
| Modify: `package.json` | 增加 `qaskills:sync` |
| Modify: `src/pages/[lang]/qaskills/index.astro` | 首页改版 |
| Modify: `src/pages/[lang]/qaskills/[skillSlug].astro` | 详情改版 |
| Generate: `src/content/qaskills/{zh-cn,en}/*.md` | 全量覆盖产物 |

---

### Task 1: 双语章节切分工具（TDD）

**Files:**
- Create: `src/utils/qaskillsSections.ts`
- Test: `tests/unit/qaskillsSections.test.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/unit/qaskillsSections.test.ts` with cases that:

1. Chinese headings (`何时使用` / `执行流程` / `核心约束` / `按需加载` / `交付前自检` / `常见误区`) map to canonical keys
2. English headings (`When to Use` / `Workflow` / `Core Constraints` / `Progressive Disclosure` / `Pre-delivery Checklist` / `Common Pitfalls`) map to the **same** keys
3. Missing sections become `""`
4. `SECTION_KEYS` order is stable
5. `firstBulletText` returns first list item

Import from `@/utils/qaskillsSections`. Use inline ZH/EN sample markdown strings with YAML frontmatter `description`.

- [ ] **Step 2: Run test to verify it fails**

Run: `cd tests && npx vitest --run unit/qaskillsSections.test.ts`

Expected: FAIL — cannot resolve module or exports missing

- [ ] **Step 3: Write minimal implementation**

Create `src/utils/qaskillsSections.ts` exporting:

- `SECTION_KEYS` = `whenToUse`, `workflow`, `coreConstraints`, `progressiveDisclosure`, `checklist`, `pitfalls`
- `SECTION_LABELS` bilingual display titles
- `HEADING_TO_KEY` map (zh + en titles above)
- `extractCanonicalSections(markdown)` — strip YAML frontmatter, split on `##` headings, fill canonical record
- `firstBulletText(sectionBody)`
- `parseYamlDescription(markdown)` / `parseYamlName(markdown)`

- [ ] **Step 4: Run test to verify it passes**

Run: `cd tests && npx vitest --run unit/qaskillsSections.test.ts`

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/utils/qaskillsSections.ts tests/unit/qaskillsSections.test.ts
git commit -m "$(cat <<'EOF'
feat(qaskills): add bilingual SKILL section extractor

EOF
)"
```

---

### Task 2: 首页筛选纯函数（TDD）

**Files:**
- Create: `src/utils/qaskillsFilter.ts`
- Test: `tests/unit/qaskillsFilter.test.ts`

- [ ] **Step 1: Write the failing test**

Test `filterQASkills(skills, { query, category, evalsOnly })`:

- empty query + `category: "all"` → all
- `category: "workflow"` → only workflows
- `evalsOnly: true` → only `hasEvals`
- query matches `title` / `chineseName` / `slug` / `intro` case-insensitively

- [ ] **Step 2: Run test to verify it fails**

Run: `cd tests && npx vitest --run unit/qaskillsFilter.test.ts`

Expected: FAIL

- [ ] **Step 3: Write minimal implementation**

```ts
// src/utils/qaskillsFilter.ts
export type QASkillCategory = "type" | "workflow" | "plus";

export type QASkillFilterInput = {
  slug: string;
  title: string;
  chineseName: string;
  category: QASkillCategory;
  intro: string;
  hasEvals: boolean;
};

export type QASkillFilterOptions = {
  query: string;
  category: "all" | QASkillCategory;
  evalsOnly: boolean;
};

export function filterQASkills<T extends QASkillFilterInput>(
  skills: T[],
  options: QASkillFilterOptions
): T[] {
  const q = options.query.trim().toLowerCase();
  return skills.filter((skill) => {
    if (options.category !== "all" && skill.category !== options.category) return false;
    if (options.evalsOnly && !skill.hasEvals) return false;
    if (!q) return true;
    const haystack = [skill.slug, skill.title, skill.chineseName, skill.intro]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd tests && npx vitest --run unit/qaskillsFilter.test.ts`

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/utils/qaskillsFilter.ts tests/unit/qaskillsFilter.test.ts
git commit -m "$(cat <<'EOF'
feat(qaskills): add homepage skill filter helper

EOF
)"
```

---

### Task 3: 相关技能推荐（TDD）

**Files:**
- Create: `src/utils/qaskillsRelated.ts`
- Test: `tests/unit/qaskillsRelated.test.ts`

- [ ] **Step 1: Write the failing test**

`getRelatedQASkills(pool, slug, limit)`:

- same `subgroup` first, exclude self
- fill from same `category` when subgroup short
- respect `limit`

- [ ] **Step 2: Run test to verify it fails**

Run: `cd tests && npx vitest --run unit/qaskillsRelated.test.ts`

Expected: FAIL

- [ ] **Step 3: Write minimal implementation**

```ts
// src/utils/qaskillsRelated.ts
import type { QASkillCategory } from "@/utils/qaskillsFilter";

export type RelatedSkillInput = {
  slug: string;
  category: QASkillCategory;
  subgroup: string;
};

export function getRelatedQASkills<T extends RelatedSkillInput>(
  skills: T[],
  currentSlug: string,
  limit = 5
): T[] {
  const current = skills.find((s) => s.slug === currentSlug);
  if (!current) return [];
  const others = skills.filter((s) => s.slug !== currentSlug);
  const sameSub = others.filter((s) => current.subgroup && s.subgroup === current.subgroup);
  const sameCat = others.filter((s) => s.category === current.category && !sameSub.includes(s));
  const rest = others.filter((s) => !sameSub.includes(s) && !sameCat.includes(s));
  return [...sameSub, ...sameCat, ...rest].slice(0, limit);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd tests && npx vitest --run unit/qaskillsRelated.test.ts`

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/utils/qaskillsRelated.ts tests/unit/qaskillsRelated.test.ts
git commit -m "$(cat <<'EOF'
feat(qaskills): add related skills helper

EOF
)"
```

---

### Task 4: 同步脚本 + npm script

**Files:**
- Create: `scripts/sync-qaskills-from-repo.mjs`
- Modify: `package.json`

- [ ] **Step 1: Add npm script**

In `package.json` `scripts`:

```json
"qaskills:sync": "node scripts/sync-qaskills-from-repo.mjs"
```

- [ ] **Step 2: Implement `scripts/sync-qaskills-from-repo.mjs`**

Behavior:

1. Args: `--repo-dir <path>`, `--fail-on-lang-mismatch`
2. Without `--repo-dir`: shallow clone `https://github.com/naodeng/awesome-qa-skills.git` into tmp; cleanup after
3. Scan `skills/{zh,en}/{testing-types,testing-workflows}/*/SKILL.md`
4. Per skill: parse YAML name/description; extract sections with **same heading map as Task 1** (duplicate constants in mjs; comment: keep in sync with `src/utils/qaskillsSections.ts`); `hasEvals` if non-empty `evals/` dir; category from path/slug; `syncedAt` = UTC `YYYY-MM-DD`; build GitHub `sourceSkillUrl`
5. Write site markdown to temp dirs then replace `src/content/qaskills/{zh-cn,en}/*.md` (keep `README.md`); delete orphan md files and log them
6. Site md skeleton must include structured sections **and** raw source:

```markdown
## 原始 SKILL.md
\`\`\`markdown
{entire original SKILL.md file contents}
\`\`\`
```

Place this block after canonical skill sections and before `## 安装`. Escape inner fences if any by using a longer fence (e.g. four backticks) when source contains triple backticks.

7. Lang mismatch: warn by default; exit 1 if `--fail-on-lang-mismatch`
8. Print summary counts

Tools list: `codex`, `cursor`, `claudecode`, `kiro`, `opencode`, `trae`.

- [ ] **Step 3: Run sync**

Run: `npm run qaskills:sync`

Expected: exit 0; `code-review.md` exists in both langs; files contain `## 元数据`, section headings, and `## 原始 SKILL.md`

- [ ] **Step 4: Spot-check**

Run:

```bash
rg -n "hasEvals|何时使用|When to Use|原始 SKILL|name: api-testing|name: code-review" \
  src/content/qaskills/zh-cn/code-review.md src/content/qaskills/en/api-testing.md | head
```

Expected: metadata + correct language headings + raw block retaining YAML `name:`

- [ ] **Step 5: Commit**

```bash
git add package.json scripts/sync-qaskills-from-repo.mjs src/content/qaskills
git commit -m "$(cat <<'EOF'
feat(qaskills): sync site content from awesome-qa-skills

EOF
)"
```

---

### Task 5: 重写 `qaskills.ts` 解析层

**Files:**
- Modify: `src/utils/qaskills.ts`
- Create: `tests/unit/qaskillsParse.site.test.ts`

- [ ] **Step 1: Update `QASkill` type**

```ts
export type QASkill = {
  lang: "en" | "zh-cn";
  slug: string;
  title: string;
  chineseName: string;
  author: string;
  updatedAt: string;
  description: string;
  intro: string;
  category: QASkillCategory;
  subgroup: string;
  hasEvals: boolean;
  sourceSkillUrl: string;
  sourceRepoUrl: string;
  sections: CanonicalSections;
  sectionHtml: Record<SectionKey, string>;
  rawSkillMarkdown: string; // from ## 原始 SKILL.md fenced block
  installMarkdown: string;
  installHtml: string;
};
```

- [ ] **Step 2: Parse new site md**

- Read `## 元数据` list for slug/category/hasEvals/syncedAt/sourceSkillUrl/description
- `extractCanonicalSections(body)` for skill body sections
- Extract `rawSkillMarkdown` from `## 原始 SKILL.md` / `## Raw SKILL.md` fenced code block (prefer longest matching fence)
- `intro = description || firstBulletText(sections.whenToUse)`
- Remove `summaryCards` / old Quick Intro / Skill Breakdown paths
- Export `parseQASkillMarkdown(lang, slug, body)` for tests
- Export `getRelatedForSkill(lang, slug, limit)` wrapping `getRelatedQASkills`

- [ ] **Step 3: Update grouping**

```ts
{
  key: "defect-reporting",
  title: { "zh-cn": "缺陷、报告与审查", en: "Defect, Reporting & Review" },
  slugs: ["bug-reporting", "test-reporting", "ai-assisted-testing", "code-review"],
}
```

Fill each skill's `subgroup` from matched subgroup key.

- [ ] **Step 4: Write site parse test + run**

Test fixture inline site md → `hasEvals`, `category`, non-empty `sections.whenToUse`, and `rawSkillMarkdown` containing original frontmatter `name:`.

Run: `cd tests && npx vitest --run unit/qaskills`

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/utils/qaskills.ts tests/unit/qaskillsParse.site.test.ts
git commit -m "$(cat <<'EOF'
feat(qaskills): parse synced SKILL-aligned site markdown

EOF
)"
```

---

### Task 6: 首页改版

**Files:**
- Modify: `src/pages/[lang]/qaskills/index.astro`

- [ ] **Step 1: Frontmatter data**

Compute `allSkills`, `totalCount`, `evalsCount`, `latestSync`, `toolCount = 6`, and lean `cardsJson` for client filter (`slug`, `title`, `chineseName`, `category`, `intro`, `hasEvals`, `updatedAt`, `href`, `displayName`).

- [ ] **Step 2: Markup order**

1. Hero — title, intro, stats (skills · tools · synced · evals), GitHub CTA
2. Discovery — `#qaskills-search`, chips `all|type|workflow|plus`, evals toggle
3. Short quick-start (3 steps)
4. Category directory with cards showing **name, category tag, Evals tag, updatedAt, intro**
5. `#qaskills-empty` hidden by default

Card example attributes: `data-slug`, `data-category`, `data-evals`.

- [ ] **Step 3: Client filter script**

Mirror `filterQASkills` matching rules inline; toggle card visibility; show empty state with discover-testing hint.

- [ ] **Step 4: Styles**

Use existing CSS variables only (no SkillHub purple skin). Chips wrap / scroll on mobile.

- [ ] **Step 5: Dev check**

Run: `npm run dev` → `/zh-cn/qaskills/` — search `code` finds code-review; Evals filter works; cards show Evals + date.

- [ ] **Step 6: Commit**

```bash
git add "src/pages/[lang]/qaskills/index.astro"
git commit -m "$(cat <<'EOF'
feat(qaskills): redesign index with search filters and card metadata

EOF
)"
```

---

### Task 7: 详情页改版（含 Guide / SKILL.md Tab）

**Files:**
- Modify: `src/pages/[lang]/qaskills/[skillSlug].astro`

- [ ] **Step 1: Load related; remove summaryCards UI**

`const related = await getRelatedForSkill(lang, skill.slug, 5);`

- [ ] **Step 2: Layout with dual tabs on main column**

- Header: title, author, category, Evals, syncedAt, source links, Install CTA
- Main column tablist:
  - `Guide` (default, `aria-selected`): render `SECTION_KEYS` with content via `sectionHtml` + `SECTION_LABELS`
  - `SKILL.md`: if `skill.rawSkillMarkdown` non-empty, show `<pre class="skill-raw"><code>` + `#copy-raw-skill-btn`; else show fallback link to `sourceSkillUrl`. Hide the SKILL.md tab button when raw is empty **and** no source URL.
- Aside `#install-section`: sticky installer panel (reuse existing OS×tool×copy logic), call example, related skills
- Mobile: aside becomes top collapse (`<details>`); single column under 900px
- Footer: keep ArticleShare, ads, Giscus

Tab switch script (`is:inline`): toggle `.is-active` / `hidden` on panels; copy button writes `rawSkillMarkdown` to clipboard (text already in DOM or `data-raw` on panel).

- [ ] **Step 3: CSS**

```css
.detail-tabs { display: flex; gap: 0.5rem; margin-bottom: 0.75rem; }
.detail-tab.is-active { border-bottom: 2px solid var(--color-theme); }
.skill-raw {
  max-height: min(70vh, 640px);
  overflow: auto;
  padding: 0.85rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-main) 15%, transparent);
  background: color-mix(in srgb, var(--color-main) 8%, var(--color-base));
  font-size: 0.82rem;
  line-height: 1.5;
  white-space: pre;
}
.detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 340px);
  gap: 0.85rem;
  align-items: start;
}
.detail-aside { position: sticky; top: 0.75rem; }
@media (max-width: 900px) {
  .detail-layout { grid-template-columns: 1fr; }
  .detail-aside { position: static; }
}
```

- [ ] **Step 4: Dev check**

`/zh-cn/qaskills/api-testing/` — Guide shows 何时使用; switch to SKILL.md tab shows frontmatter `name: api-testing`; copy works; installer still works; `/zh-cn/qaskills/code-review/` loads.

- [ ] **Step 5: Commit**

```bash
git add "src/pages/[lang]/qaskills/[skillSlug].astro"
git commit -m "$(cat <<'EOF'
feat(qaskills): redesign detail with SKILL sections, raw tab, and install aside

EOF
)"
```

---

### Task 8: 构建、E2E 冒烟与收尾

**Files:**
- Create: `tests/e2e/specs/qaskills.spec.ts`

- [ ] **Step 1: Unit suite**

Run: `npm test`

Expected: PASS

- [ ] **Step 2: Build**

Run: `npm run build`

Expected: success; dist contains zh-cn/en `qaskills/code-review`

- [ ] **Step 3: Playwright smoke**

```ts
import { test, expect } from "@playwright/test";

test.describe("QA Skills", () => {
  test("zh-cn index shows search and code-review card metadata", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    await expect(page.locator("#qaskills-search")).toBeVisible();
    const card = page.locator('a.card[data-slug="code-review"]');
    await expect(card).toBeVisible();
    await expect(card.locator(".tag-evals")).toBeVisible();
  });

  test("detail shows Guide section, raw SKILL tab, and install panel", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/api-testing/");
    await expect(page.getByRole("heading", { name: /何时使用|When to Use/ })).toBeVisible();
    await page.getByRole("tab", { name: /SKILL\.md/i }).click();
    await expect(page.locator(".skill-raw")).toContainText("name: api-testing");
    await expect(page.locator("#copy-raw-skill-btn")).toBeVisible();
    await expect(page.locator("#installer-panel")).toBeVisible();
    await expect(page.locator("#copy-quick-btn")).toBeVisible();
  });
});
```

- [ ] **Step 4: Run e2e**

Run: `cd tests && npx playwright test e2e/specs/qaskills.spec.ts`

Expected: PASS

- [ ] **Step 5: Mark spec implemented + commit**

Update design doc status to `已实现` only after steps 1–4 pass.

```bash
git add tests/e2e/specs/qaskills.spec.ts docs/superpowers/specs/2026-08-05-qaskills-pages-redesign-design.md
git commit -m "$(cat <<'EOF'
test(qaskills): add e2e smoke for redesigned skill pages

EOF
)"
```

---

## Spec Coverage

| Spec 要求 | Task |
| --- | --- |
| 全量同步 + `qaskills:sync` | 4 |
| 含 `code-review` | 4–5 |
| 首页搜索/筛选 | 2, 6 |
| 卡片必显 Evals/日期 | 6 |
| 详情对齐 SKILL 章节 | 1, 5, 7 |
| 原始 SKILL.md Tab 预览 + 复制 | 4, 5, 7, 8 |
| 安装侧栏强化 | 7 |
| 相关推荐 | 3, 7 |
| 不做评分/Flow/直拉 | 未纳入 |
| 单测 + build + e2e | 1–3, 5, 8 |

## Notes for executors

- Heading map critical pair: English `Workflow` ↔ Chinese `执行流程`
- Duplicate heading constants in sync `.mjs` must stay aligned with `qaskillsSections.ts`
- Raw SKILL tab stores full upstream file; use longer code fences when source contains ` ``` `
- If user says not to commit yet, skip each Task commit step and batch at the end after confirmation
