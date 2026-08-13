# Homepage, QA Skills, and Prompts P1/P2 Follow-up Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 收敛首页信息架构，修复 QA Skills 搜索反馈与任务映射，校正 Prompts 能力边界，并补齐可判断的双语示例和完整 Skill 摘要。

**Architecture:** 保留现有 Astro 路由、内容集合、Zenix 视觉语言和双语结构。页面展示配置集中到 `src/data/`，首页只承担分流，Skills 页面区分默认浏览状态与搜索状态，Prompts 页面只描述辅助设计能力；所有关键行为以 Vitest 契约和 Playwright 页面行为共同约束。

**Tech Stack:** Astro 6、TypeScript、Astro Content Collections、Vitest、Playwright、现有 CSS tokens。

## Global Constraints

- Node.js `>=22.12.0`，npm `10+`，只使用 npm。
- 保留所有 `en`、`zh-cn` 路由、slug、canonical、hreflang、结构化数据、导航和追踪契约。
- 不修改 `dist/`、`node_modules/`、测试报告或部署配置。
- E2E 运行约定：Tasks 2–8 均走仓库默认流程（Playwright 自动 `build` + `preview`，默认端口 4321，不设置 `PLAYWRIGHT_BASE_URL`）。Task 8 的人工验收才单独启动 4327 preview；不得以可能过期的 localhost 服务作为验证依据。
- 不批量重写 Prompt 和 QA Skill Markdown；优先使用集中数据配置，只有内容源本身适合长期维护时才改 frontmatter。
- `Evals` 只表示存在评测用例；没有本次运行证据时不得写成“评测通过”。
- Prompt 文案只能描述分析、设计、建议、整理和辅助检查，不能声称真实执行测试、扫描漏洞或产生未经输入支持的测试结果。
- 中文、英文页面结构和交互一致；文案语义对齐，不要求逐字翻译。
- 每个任务遵循：先写失败测试，再实现，再运行相关验证，再独立提交。

---

## File Structure

### Create

- `src/components/home/HomeCapabilityGuide.astro` — 合并现有核心能力与案例，解释 Skills/Prompts 的选择和输入输出。
- `src/components/home/HomeExploreHub.astro` — 集中承载 Projects、Guild、Wiki、AI Wiki、Tags 等二级入口。
- `tests/unit/homeTaskRouting.test.ts` — 验证首页任务多目标映射、双语完整性和目标 slug。
- `tests/unit/promptClaims.test.ts` — 检查 Prompts 首页能力边界和示例字段完整性。

### Modify

- `src/utils/qaskillsFilter.ts` — 扩展现有过滤模块，新增目录搜索态判断与 eval 筛选可用性判断（不新建工具文件）。
- `src/consts.ts` — Hero 与 Prompts 页文案定义所在（Tasks 3、6 的文案统一改这里，仓库没有 `src/i18n/ui.ts`）。
- `src/data/homeTaskEntries.ts` — 扩展任务目标类型，并成为首页 primary modes 与任务入口的唯一数据源。
- `src/data/promptLibrary.ts` — 增加真实示例字段和辅助测试流程数据，移除页面内联流程文案。
- `src/data/qaSkillLibrary.ts` — 为完整目录提供结构化摘要，并明确 eval 状态标签。
- `src/pages/[lang]/index.astro` — 删除本地 `primaryEntries`，收敛为五段式首页。
- `src/components/home/HomeTaskNavigator.astro` — 支持一个任务关联一个或多个明确目标。
- `src/components/home/CoreCapabilities.astro` — 被新合并组件替代后删除。
- `src/components/home/HomeProofAndCases.astro` — 被新合并组件替代后删除。
- `src/pages/[lang]/qaskills/index.astro` — 实现默认态/搜索态切换，让结果紧邻搜索区。
- `src/components/qaskills/RecommendedQASkills.astro` — 增加可被搜索态整体隐藏的语义容器。
- `src/components/qaskills/QASkillStarterPaths.astro` — 保持默认态展示，在搜索态隐藏。
- `src/pages/[lang]/prompts/index.astro` — 收紧 Hero 和流程文案，统一 title/H1，消费集中流程数据。
- `src/components/prompts/PromptExamples.astro` — 展示输入、版本、输出片段、人工检查点和详情链接。
- `tests/unit/contentEntryConfig.test.ts` — 更新首页、Prompts 和 Skills 数据契约。
- `tests/unit/qaskillsFilter.test.ts` — 增加搜索状态与 eval 区分能力测试。
- `tests/e2e/specs/apple-home.spec.ts` — 验证五段式结构、统一数据源渲染和任务目标。
- `tests/e2e/specs/qaskills.spec.ts` — 验证搜索态、清空恢复、空状态；eval chip 仅在数据有区分度时出现。
- `tests/e2e/specs/navigation.spec.ts` — 首页断言同步为五段式结构。
- `tests/e2e/specs/tracking-contract.spec.ts` — 明确验证首页入口重构后 `home_entry_click` 契约仍成立。
- `tests/e2e/specs/accessibility-contrast.spec.ts`、`tests/e2e/specs/accessibility-hard-metrics.spec.ts` — 首页样本选择器随结构收缩同步更新。
- `tests/e2e/specs/prompts.spec.ts` — 验证能力边界、真实示例和双语标题。
- `tests/e2e/specs/responsive.spec.ts` — 覆盖三个页面在 390×844 下的布局。
- `tests/e2e/specs/seo.spec.ts` — 验证 Prompts title/H1 和既有 SEO 合约。

---

### Task 1: 统一首页任务数据与目标映射（P1）

**Files:**

- Modify: `src/data/homeTaskEntries.ts`
- Modify: `src/pages/[lang]/index.astro`
- Modify: `src/components/home/HomeTaskNavigator.astro`
- Create: `tests/unit/homeTaskRouting.test.ts`
- Modify: `tests/unit/contentEntryConfig.test.ts`

**Interfaces:**

- `HomeTaskTarget = { kind: "skill" | "prompt"; slug: string; label: string; description: string }`
- `HomeTaskEntry` 由单一 `slug` 改为 `key` 加 `targets: HomeTaskTarget[]`。
- `HOME_PRIMARY_MODES[lang]` 直接驱动首页三张主要入口卡。
- `HOME_TASK_ENTRIES[lang]` 直接驱动任务导航，不再由页面创建重复文案。

- [ ] **Step 1: 写失败的任务路由测试**

在 `tests/unit/homeTaskRouting.test.ts` 中验证：两种语言 task key 完全一致；“编写或评审测试用例”同时包含 `test-case-writing` 与 `test-case-reviewer`；自动化任务分别包含 `api-testing` 与 `automation-testing`；所有 target slug 存在于对应内容集合允许列表。

```ts
expect(HOME_TASK_ENTRIES["zh-cn"].find((item) => item.key === "test-cases")?.targets.map((item) => item.slug))
  .toEqual(["test-case-writing", "test-case-reviewer"]);
expect(HOME_TASK_ENTRIES.en.find((item) => item.key === "automation")?.targets.map((item) => item.slug))
  .toEqual(["api-testing", "automation-testing"]);
```

- [ ] **Step 2: 运行测试并确认旧数据结构失败**

Run: `cd tests && npm run test:unit -- homeTaskRouting.test.ts contentEntryConfig.test.ts`

Expected: FAIL，原因是 `HomeTaskEntry` 尚无 `key` 与 `targets`，且首页仍存在本地 `primaryEntries`。

- [ ] **Step 3: 实现统一数据结构**

在 `homeTaskEntries.ts` 中使用稳定 key：`requirements`、`strategy`、`test-cases`、`automation`、`bugs`、`reporting`。测试用例任务配置两个目标；自动化任务配置 API 与通用自动化两个目标；其他任务保留单目标。每个目标同时提供中英文可见标签和一句适用场景。

- [ ] **Step 4: 删除首页本地 `primaryEntries` 并消费统一配置**

在 `index.astro` 中导入 `HOME_PRIMARY_MODES`，只在渲染层补充本地化 URL。`act` 卡保留 Skills 与 Prompts 两个 CTA；`read` 和 `reference` 卡保持单链接。

- [ ] **Step 5: 更新任务导航的单目标与多目标渲染**

单目标卡直接链接详情；多目标卡显示两个清晰子链接，不增加弹窗。每个链接使用 `getRelativeLocaleUrl(locale, `/${target.kind === "skill" ? "qaskills" : "prompts"}/${target.slug}/`)`。同步更新任务导航副标题：把“直接进入对应 Skill”改为覆盖 Skill 与 Prompt 两种去向的表述。

- [ ] **Step 6: 运行单元测试**

Run: `cd tests && npm run test:unit -- homeTaskRouting.test.ts contentEntryConfig.test.ts`

Expected: PASS。

- [ ] **Step 7: 提交数据与路由修复**

```bash
git add src/data/homeTaskEntries.ts src/pages/'[lang]'/index.astro src/components/home/HomeTaskNavigator.astro tests/unit/homeTaskRouting.test.ts tests/unit/contentEntryConfig.test.ts
git commit -m "fix(home): unify task data and target routing"
```

---

### Task 2: 收敛首页为五段式信息架构（P1）

**Files:**

- Create: `src/components/home/HomeCapabilityGuide.astro`
- Create: `src/components/home/HomeExploreHub.astro`
- Modify: `src/pages/[lang]/index.astro`
- Modify: `tests/e2e/specs/apple-home.spec.ts`
- Modify: `tests/e2e/specs/navigation.spec.ts` — 首页断言同步为五段式结构（现有断言依赖将被移除的 `.home-projects`、`.home-tags`、`.guild-showcase` 区块）
- Modify: `tests/e2e/specs/tracking-contract.spec.ts` — 保留或更新首页 primary entry 点击契约
- Modify: `tests/e2e/specs/accessibility-contrast.spec.ts`、`tests/e2e/specs/accessibility-hard-metrics.spec.ts` — 首页样本选择器随结构收缩同步更新
- Delete: `src/components/home/CoreCapabilities.astro`
- Delete: `src/components/home/HomeProofAndCases.astro`

**Interfaces:**

- 首页固定五个顶级区块：`home-hero`、`home-task-navigator`、`home-capability-guide`、`home-latest`、`home-explore-hub`。
- `HomeCapabilityGuide` 消费 `HOME_EXAMPLES[locale]` 和当前内容集合统计值。
- `HomeExploreHub` 接收已本地化的 `exploreCards`，不自行读取内容集合。

- [ ] **Step 1: 将五段式结构写入失败的 E2E 测试**

在 `apple-home.spec.ts` 中按 DOM 顺序断言五个顶级区块（`home-hero`、`home-task-navigator`、`home-capability-guide`、`home-latest`、`home-explore-hub`），并断言旧的独立首页区块类名 `.home-prompts`、`.home-qaskills`、`.home-projects`、`.home-guild`、`.home-wiki`、`.home-aiwiki`、`.home-tags` 不再存在（注意：现状的 Skills 区块类名是 `home-qaskills`，不是 `home-skills`）。同时更新 `navigation.spec.ts` 中依赖旧区块的断言。

- [ ] **Step 2: 运行首页 E2E 并确认结构测试失败**

Run: `cd tests && npm run test:e2e -- apple-home.spec.ts navigation.spec.ts`

Expected: FAIL，当前首页尚无五段式结构，且 navigation.spec 仍在断言将被移除的旧长区块。

- [ ] **Step 3: 创建合并后的能力指南**

`HomeCapabilityGuide.astro` 只保留三类信息：什么时候使用 Skill、什么时候使用 Prompt、三个输入到输出的代表例。统计数据必须由页面传入，不在组件中写死数量。

- [ ] **Step 4: 创建探索中心并迁移二级入口**

`HomeExploreHub.astro` 用紧凑卡片承载 Projects、Guild、Wiki、AI Wiki、Tags；每项保留标题、一句话和 CTA，不再在首页展开列表内容。沿用 `.home-explore-grid`、`.home-card` 等既有类名契约；若 Tags 不再以 `.home-chip` 呈现，必须同步更新 accessibility 两个 spec 的首页样本（hard-metrics spec 对缺失选择器会直接失败）。

- [ ] **Step 5: 重排首页并删除重复长区块**

首页顺序固定为 Hero → Task Navigator → Capability Guide → Latest Posts → Explore Hub。删除 Hero console 中与主要入口重复的三张资源卡（apple-home.spec 中“console cards 链接”用例一并删除）；最新文章保留最多 3 项；二级内容不再各占一整屏。移除首页的 GuildShowcase 区块后，删除 navigation.spec 中对应的 `.guild-showcase` 断言。

- [ ] **Step 6: 删除已替代组件并运行首页 E2E**

Run: `cd tests && npm run test:e2e -- apple-home.spec.ts navigation.spec.ts tracking-contract.spec.ts accessibility-contrast.spec.ts accessibility-hard-metrics.spec.ts`

Expected: PASS，中英文均只有五个主区块且入口仍可访问。`tracking-contract.spec.ts` 依赖 `.home-primary-entry[href='/zh-cn/blog/']` 契约：read 卡必须保持指向 `/blog` 的单链接锚点；若实现改变了该契约，必须同步更新该 spec，而不是让它静默挂掉。

- [ ] **Step 7: 提交首页结构收敛**

```bash
git add src/pages/'[lang]'/index.astro src/components/home tests/e2e/specs/apple-home.spec.ts tests/e2e/specs/navigation.spec.ts tests/e2e/specs/tracking-contract.spec.ts tests/e2e/specs/accessibility-contrast.spec.ts tests/e2e/specs/accessibility-hard-metrics.spec.ts
git commit -m "refactor(home): consolidate homepage into five sections"
```

---

### Task 3: 统一首页首屏定位与 CTA（P1）

**Files:**

- Modify: `src/consts.ts` — Hero H1/副标题/CTA 文案定义所在（仓库没有 `src/i18n/ui.ts`，i18n 模块是 `src/i18n.ts` 且无需改动）
- Modify: `src/pages/[lang]/index.astro`
- Modify: `tests/e2e/specs/apple-home.spec.ts`
- Modify: `tests/e2e/specs/seo.spec.ts`

**Interfaces:**

- 中文 H1：`软件测试、质量工程与 AI 测试实践`。
- 英文 H1：`Software Testing, Quality Engineering, and AI-assisted Testing`。
- 主 CTA 定位到 `#home-task-navigator`；次 CTA 分别进入 `/qaskills/` 与 `/prompts/`，不再使用“开始阅读/浏览百科”作为首要动作。
- 注意：`.home-task-navigator` 区块目前只有 class 没有 id，实现时需补充 `id="home-task-navigator"` 供锚点使用。

- [ ] **Step 1: 写中英文 Hero 与 CTA 失败断言**

断言 H1 精确匹配、主 CTA href 为 `#home-task-navigator`、Skills 与 Prompts CTA 均存在；继续保留现有唯一 SEO title 断言。

- [ ] **Step 2: 运行相关 E2E 并确认旧文案失败**

Run: `cd tests && npm run test:e2e -- apple-home.spec.ts seo.spec.ts`

- [ ] **Step 3: 更新双语可见文案和 CTA**

副标题明确说明内容包括实践文章、可复用 QA Skills、测试 Prompts 与知识库；不使用“高覆盖率”“自动完成”等不可证实词语。

- [ ] **Step 4: 运行相关 E2E 并提交**

Run: `cd tests && npm run test:e2e -- apple-home.spec.ts seo.spec.ts`

Expected: PASS。

```bash
git add src/consts.ts src/pages/'[lang]'/index.astro tests/e2e/specs/apple-home.spec.ts tests/e2e/specs/seo.spec.ts
git commit -m "content(home): align hero positioning and actions"
```

---

### Task 4: 修复 QA Skills 搜索反馈链路（P1）

**Files:**

- Modify: `src/utils/qaskillsFilter.ts` — 复用现有过滤模块，新增搜索态判断与 eval 筛选可用性判断（不新建 qaskillsCatalog.ts）
- Modify: `src/pages/[lang]/qaskills/index.astro`
- Modify: `src/components/qaskills/RecommendedQASkills.astro`
- Modify: `src/components/qaskills/QASkillStarterPaths.astro`
- Modify: `tests/unit/qaskillsFilter.test.ts`
- Modify: `tests/e2e/specs/qaskills.spec.ts`

**Interfaces:**

- `isQASkillSearchActive(state: { query: string; category: string; evalsOnly: boolean }): boolean` 与 `shouldShowEvalsFilter(skills): boolean` 均定义在 `src/utils/qaskillsFilter.ts`。
- 页面默认态显示 starter paths、recommended、quickstart、lifecycle；搜索态隐藏这些辅助区，目录结果紧跟筛选区。
- eval chip 仅在 `shouldShowEvalsFilter(allSkills)` 为 true 时渲染（当前全量数据 hasEvals 全为 true，无区分度，chip 不渲染）。
- `#qaskills-results` 保持 `aria-live="polite"`（已存在，勿删除）；`#qaskills-empty` 在零结果时显示清空按钮。

- [ ] **Step 1: 写搜索状态单元测试和页面行为 E2E**

单测覆盖：`isQASkillSearchActive` 的空查询默认态、文本查询、分类筛选、eval 筛选组合；`shouldShowEvalsFilter` 在混合 fixture 返回 true、全量一致 fixture 返回 false。E2E：输入 `API` 后断言辅助区隐藏、第一张可见卡包含 API、结果区位于搜索框之后；清空后辅助区恢复；输入无匹配词后出现空状态和清空按钮。现有 qaskills.spec.ts 中“点击 eval chip”的用例替换为“当前数据无区分度时不渲染 chip”的断言。

- [ ] **Step 2: 运行测试并确认当前布局失败**

Run: `cd tests && npm run test:unit -- qaskillsFilter.test.ts`

Run: `cd tests && npm run test:e2e -- qaskills.spec.ts`

- [ ] **Step 3: 提取搜索状态判断并重组 DOM**

把目录 `#categories` 移到筛选区之后；给 starter paths、recommended、quickstart、lifecycle 辅助模块统一增加 `data-qaskills-default-only`。`apply()` 用 `isQASkillSearchActive` 判断是否切换这些模块的 `hidden`，并同步更新结果数量与空状态；eval chip 的渲染由 `shouldShowEvalsFilter` 决定。

- [ ] **Step 4: 实现可访问的清空恢复行为**

清空按钮重置 query、category、eval 状态、chip 的 `aria-pressed`，恢复辅助区，并把焦点放回 `#qaskills-search`。

- [ ] **Step 5: 运行单元与 E2E 并提交**

Run: `cd tests && npm run test:unit -- qaskillsFilter.test.ts`

Run: `cd tests && npm run test:e2e -- qaskills.spec.ts`

Expected: PASS；当前数据下 eval chip 不渲染。

```bash
git add src/utils/qaskillsFilter.ts src/pages/'[lang]'/qaskills/index.astro src/components/qaskills/RecommendedQASkills.astro src/components/qaskills/QASkillStarterPaths.astro tests/unit/qaskillsFilter.test.ts tests/e2e/specs/qaskills.spec.ts
git commit -m "fix(qaskills): surface filtered results immediately"
```

---

### Task 5: 校正评测状态并补齐完整 Skill 摘要（P2）

**Files:**

- Modify: `src/data/qaSkillLibrary.ts`
- Modify: `src/pages/[lang]/qaskills/index.astro`
- Modify: `tests/unit/contentEntryConfig.test.ts`
- Modify: `tests/e2e/specs/qaskills.spec.ts`

**Interfaces:**

- `QASkillCardSummary = { whenToUse: string; input: string; output: string; humanReview: string }`。
- `getQASkillCardSummary(skill, lang)` 为完整目录返回结构化摘要，定义在 `src/data/qaSkillLibrary.ts`。
- eval 筛选可用性由 Task 4 的 `shouldShowEvalsFilter` 负责，本任务不再新增接口。
- 状态标签限定为“提供评测用例 / Evaluation cases included”；不展示运行通过状态。

- [ ] **Step 1: 写失败的数据覆盖测试**

通过 `getQASkillsGrouped`（直接读内容文件、不依赖 astro:content，可在 Vitest 中导入）遍历两种语言的所有目录 Skill，断言摘要的四个字段非空；并断言所有摘要均不包含“处理相关任务”一类通用句。

- [ ] **Step 2: 运行失败测试**

Run: `cd tests && npm run test:unit -- contentEntryConfig.test.ts qaskillsFilter.test.ts`

- [ ] **Step 3: 建立完整目录摘要来源**

只复用已有结构化章节，不解析自由文案 `intro`：适用场景取 `skill.sections.whenToUse` 的首条有效 bullet；输入线索取 `skill.sections.workflow` 中首条输入或准备步骤；输出线索取 `skill.sections.checklist` 中首条交付物或完成条件；人工复核取 `skill.sections.coreConstraints` 或 `skill.sections.pitfalls` 的首条约束。某个字段无法从对应 section 稳定取得时，在 `qaSkillLibrary.ts` 中按 slug 显式维护双语 fallback（延续现有 `INTRO_FALLBACKS` 的集中配置方式）。不得从 `intro` 猜测输入输出，也不得用“处理相关任务”一类通用句作为最终卡片描述。

- [ ] **Step 4: 更新卡片展示与 eval 筛选**

目录卡展示“适用场景、输入、输出”三行；人工复核信息通过可访问说明或详情链接提供。eval chip 渲染维持 Task 4 的“有区分度才渲染”行为，无需重复实现。

- [ ] **Step 5: 运行测试并提交**

Run: `cd tests && npm run test:unit -- contentEntryConfig.test.ts qaskillsFilter.test.ts`

Run: `cd tests && npm run test:e2e -- qaskills.spec.ts`

Expected: PASS；当前全量 Skill 均 hasEvals=true，页面不显示无区分度的 eval 筛选。

```bash
git add src/data/qaSkillLibrary.ts src/pages/'[lang]'/qaskills/index.astro tests/unit/contentEntryConfig.test.ts tests/unit/qaskillsFilter.test.ts tests/e2e/specs/qaskills.spec.ts
git commit -m "content(qaskills): clarify summaries and eval status"
```

---

### Task 6: 收紧 Prompts 能力边界并统一标题（P1）

**Files:**

- Modify upstream: `/Users/nao.deng/awsomeCode/awesome-qa-prompt/testing-types/zh/functional-testing/CRISPE-version/FunctionalTesting-CRISPE-Full.md`
- Modify upstream: `/Users/nao.deng/awsomeCode/awesome-qa-prompt/testing-types/zh/functional-testing/CRISPE-version/FunctionalTesting-CRISPE-Full-Mobile.md`
- Modify upstream: `/Users/nao.deng/awsomeCode/awesome-qa-prompt/testing-types/zh/functional-testing/CRISPE-version/FunctionalTesting-CRISPE-Full-Web.md`
- Modify upstream: `/Users/nao.deng/awsomeCode/awesome-qa-prompt/testing-types/zh/functional-testing/CRISPE-version/FunctionalTesting-CRISPE-Full-all_round.md`
- Modify upstream: `/Users/nao.deng/awsomeCode/awesome-qa-prompt/testing-types/zh/functional-testing/LangGPT-version/FunctionalTesting-LangGPT-Full.md`
- Modify upstream: `/Users/nao.deng/awsomeCode/awesome-qa-prompt/testing-types/zh/functional-testing/LangGPT-version/FunctionalTesting-LangGPT-Full-Mobile.md`
- Modify upstream: `/Users/nao.deng/awsomeCode/awesome-qa-prompt/testing-types/zh/functional-testing/LangGPT-version/FunctionalTesting-LangGPT-Full-Web.md`
- Modify upstream: `/Users/nao.deng/awsomeCode/awesome-qa-prompt/testing-types/zh/functional-testing/LangGPT-version/FunctionalTesting-LangGPT-Full-all_round.md`
- Modify: `src/consts.ts` — `PROMPTS_PAGE_TITLE`、`PROMPTS_PAGE_DESCRIPTION`、`PROMPTS_FLOW_TITLE` 定义所在
- Modify: `src/data/promptLibrary.ts`
- Modify: `src/pages/[lang]/prompts/index.astro`
- Regenerate: `src/content/prompts/zh-cn/functional-testing/CRISPE.md`
- Regenerate: `src/content/prompts/zh-cn/functional-testing/LangGPT.md`
- Create: `tests/unit/promptClaims.test.ts`
- Modify: `tests/unit/promptsSync.test.ts`
- Modify: `tests/e2e/specs/prompts.spec.ts`
- Modify: `tests/e2e/specs/seo.spec.ts`

**Interfaces:**

- 页面 H1/SEO 主名称统一为 `软件测试提示词库` / `Software Testing Prompt Library`（即把 consts 中 `PROMPTS_PAGE_TITLE` 的“专业质量保证提示词库 / Professional QA Prompt Library”与页面内联 H1 的“QA Prompt Library”一起收敛）。
- 流程区块标题（`PROMPTS_FLOW_TITLE`）改为含“辅助/assisted”的表述，如“AI 辅助测试流程参考 / AI-assisted Testing Flow Reference”。
- `PROMPT_ASSISTED_FLOW[lang]` 提供九步参考流程，页面不再定义内联数组。
- 禁止发布层文案（页面 `.astro`、`src/data/promptLibrary.ts`、`src/consts.ts`、`src/content/prompts/`）包含：`生成高覆盖率`、`执行功能测试`、`检测安全漏洞`、`生成测试执行报告` 及其英文直译。

- [ ] **Step 1: 写失败的能力边界测试**

`promptClaims.test.ts` 读取 Prompts 页面源、`src/data/promptLibrary.ts`、`src/consts.ts` 与 `src/content/prompts/`，断言禁用表达不存在，并断言流程标题包含“辅助/assisted”。E2E 精确断言 H1 和浏览器标题。`promptsSync.test.ts` 增加同步回归，确保从修正后的本地上游生成的内容也不含禁用表达。

- [ ] **Step 2: 运行测试并确认现有越界文案失败**

Run: `cd tests && npm run test:unit -- promptClaims.test.ts`

- [ ] **Step 3: 迁移并修正流程文案**

功能测试改为“设计功能测试步骤与检查清单”；安全测试改为“识别潜在安全风险与验证点”；报告改为“基于真实执行数据整理测试报告”；Hero 改为“辅助设计更完整的测试用例”。

- [ ] **Step 4: 在上游修正同步内容的越界表述**

在 `awesome-qa-prompt` 的 CRISPE、LangGPT 中文 Full 与三个变体中，把“能够高效执行功能测试并快速定位问题”改为“能够辅助设计功能测试步骤，并根据真实执行结果整理定位线索”。先在上游仓库运行 `npm run check:all`。如果当前执行环境没有上游写权限，本任务在此处明确阻塞；不得直接编辑本站生成 Markdown 冒充永久修复。

- [ ] **Step 5: 从已修正的本地上游重新同步**

Run: `npm run prompts:sync -- --repo-dir /Users/nao.deng/awsomeCode/awesome-qa-prompt --fail-on-lang-mismatch`

Expected: `src/content/prompts/zh-cn/functional-testing/CRISPE.md` 与 `LangGPT.md` 重新生成，禁用表达消失，语言完整性检查通过。

- [ ] **Step 6: 统一 title、H1、description 和流程标题**

在 `src/consts.ts` 中收敛 `PROMPTS_PAGE_TITLE`、`PROMPTS_PAGE_DESCRIPTION`、`PROMPTS_FLOW_TITLE` 三处文案；详情页面包屑引用 `PROMPTS_PAGE_TITLE`，会自动跟随，无需额外改动。保留统计数字动态计算，不改 URL 和结构化数据类型。中文和英文 title 均使用统一主名称，站点后缀仍由 Base 负责。

- [ ] **Step 7: 运行测试并分别提交两个仓库**

Run: `cd tests && npm run test:unit -- promptClaims.test.ts promptsListPage.test.ts promptsSync.test.ts`

Run: `cd tests && npm run test:e2e -- prompts.spec.ts seo.spec.ts`

Expected: PASS；页面层与同步内容层均无禁用表达。

```bash
git -C /Users/nao.deng/awsomeCode/awesome-qa-prompt add testing-types/zh/functional-testing/CRISPE-version testing-types/zh/functional-testing/LangGPT-version
git -C /Users/nao.deng/awsomeCode/awesome-qa-prompt commit -m "content(functional-testing): clarify prompt execution boundary"
git add src/consts.ts src/data/promptLibrary.ts src/pages/'[lang]'/prompts/index.astro src/content/prompts/zh-cn/functional-testing/CRISPE.md src/content/prompts/zh-cn/functional-testing/LangGPT.md tests/unit/promptClaims.test.ts tests/unit/promptsSync.test.ts tests/e2e/specs/prompts.spec.ts tests/e2e/specs/seo.spec.ts
git commit -m "content(prompts): clarify assisted testing boundaries"
```

---

### Task 7: 将 Prompt 标签示例升级为真实示例（P2）

**Files:**

- Modify: `src/data/promptLibrary.ts`
- Modify: `src/components/prompts/PromptExamples.astro`
- Modify: `tests/unit/contentEntryConfig.test.ts`
- Modify: `tests/e2e/specs/prompts.spec.ts`

**Interfaces:**

- `PromptExample = { key; scenario; input; version; versionReason; outputLines; reviewPoints; href }`。
- `outputLines` 固定 3～5 行，`reviewPoints` 至少 2 项。
- 首批提供六类示例：需求分析、API 测试、UI 自动化、缺陷报告、测试报告、安全检查清单。

- [ ] **Step 1: 写六个示例的数据契约测试**

断言中英文 key 一致、每种语言正好六项、Standard 是默认版本、输出行数为 3～5、人工检查项不少于 2、详情 href 指向真实 Prompt slug。

- [ ] **Step 2: 运行测试并确认旧三字段示例失败**

Run: `cd tests && npm run test:unit -- contentEntryConfig.test.ts`

- [ ] **Step 3: 编写六组双语代表性示例**

输入使用短小但真实的需求/API/缺陷上下文；输出片段必须包含结构和具体内容，不使用“这里是结果”式占位文本；人工检查点明确指出业务规则、真实日志、权限模型、环境数据或执行证据。

- [ ] **Step 4: 更新示例组件**

每张卡依次展示场景、输入、推荐版本与理由、输出片段、人工检查项和详情链接。输出使用列表或 `pre`，保证移动端可换行且不产生横向滚动。

- [ ] **Step 5: 运行单元和 E2E 并提交**

Run: `cd tests && npm run test:unit -- contentEntryConfig.test.ts promptClaims.test.ts`

Run: `cd tests && npm run test:e2e -- prompts.spec.ts responsive.spec.ts`

Expected: PASS。

```bash
git add src/data/promptLibrary.ts src/components/prompts/PromptExamples.astro tests/unit/contentEntryConfig.test.ts tests/e2e/specs/prompts.spec.ts tests/e2e/specs/responsive.spec.ts
git commit -m "feat(prompts): add reviewable bilingual examples"
```

---

### Task 8: 完整回归与人工页面验收（P1/P2）

**Files:**

- Modify only if a verified regression requires a scoped fix: files changed in Tasks 1–7 and their corresponding tests.

**Interfaces:**

- 自动化 E2E 使用 Playwright 默认 webServer；人工验收使用当前 build 的独立 4327 preview，禁止复用可能过期的 localhost 服务。

- [ ] **Step 1: 运行完整单元测试**

Run: `npm test`

Expected: 所有 Vitest 测试通过。

- [ ] **Step 2: 运行构建和 SEO 检查**

Run: `npm run build`

Expected: Astro build 成功，无 error。

Run: `npm run seo:check`

Expected: SEO 静态检查通过。

- [ ] **Step 3: 运行全量 E2E（CI 同范围）**

Run: `cd tests && npm run test:e2e`

Expected: 全量 E2E 通过；Playwright 自动以当前源码 build 并启动默认 preview。首页结构收缩会波及 navigation、tracking、accessibility 等既有契约，因此不能只跑目标 spec。

- [ ] **Step 4: 为人工验收启动独立预览**

Run（单独终端）: `npm run preview -- --host 127.0.0.1 --port 4327`

Expected: 预览服务监听 `http://127.0.0.1:4327`，页面内容来自 Step 2 的当前 build。

- [ ] **Step 5: 人工检查六个页面**

检查 `/zh-cn/`、`/en/`、`/zh-cn/qaskills/`、`/en/qaskills/`、`/zh-cn/prompts/`、`/en/prompts/`。每页分别检查 1440×900 与 390×844；验证标题、模块顺序、任务跳转、搜索/清空、空状态、Prompt 示例、键盘焦点和横向溢出。

- [ ] **Step 6: 检查工作区范围**

Run: `git status --short`

Expected: 仅包含本计划文件和 Tasks 1–7 的相关源码/测试改动，无 `dist/`、报告、截图或无关文件。

- [ ] **Step 7: 提交仅由回归发现的修正**

若步骤 1～6 没有产生额外代码改动，则跳过本步骤；如有范围内修正，使用：

```bash
git add src/consts.ts src/data/homeTaskEntries.ts src/data/promptLibrary.ts src/data/qaSkillLibrary.ts src/utils/qaskillsFilter.ts src/pages/'[lang]'/index.astro src/pages/'[lang]'/qaskills/index.astro src/pages/'[lang]'/prompts/index.astro src/components/home src/components/qaskills src/components/prompts tests/unit tests/e2e/specs/apple-home.spec.ts tests/e2e/specs/qaskills.spec.ts tests/e2e/specs/prompts.spec.ts tests/e2e/specs/responsive.spec.ts tests/e2e/specs/seo.spec.ts tests/e2e/specs/navigation.spec.ts tests/e2e/specs/tracking-contract.spec.ts tests/e2e/specs/accessibility-contrast.spec.ts tests/e2e/specs/accessibility-hard-metrics.spec.ts
git commit -m "test(site): close homepage library regression gaps"
```

---

## Milestones and Review Gates

1. **Gate A — 数据和准确性：** Task 1、Task 6 完成后，先审查任务映射与能力边界，不进入视觉收敛前就消除误导。
2. **Gate B — 页面结构：** Task 2、Task 3、Task 4 完成后，审查首页五段式和 Skills 搜索反馈，再继续扩充内容。
3. **Gate C — 内容深度：** Task 5、Task 7 完成后，审查完整 Skill 摘要与 Prompt 示例是否真实可判断。
4. **Gate D — 交付：** Task 8（含全量 E2E）全部通过后才可声明 P1/P2 完成。

## Completion Criteria

- 首页只有五个主区块，首屏价值定位与任务 CTA 一致，旧内容入口仍可到达。
- 首页 primary modes 与任务映射只有一个数据源，测试用例和自动化任务不再错配。
- Skills 搜索结果紧邻搜索区，清空可恢复默认模块，零结果行为可访问。
- eval 状态只表达“包含评测用例”，无区分度筛选不展示。
- 完整 Skills 目录均有明确的适用场景、输入和输出。
- Prompts 页面与同步发布内容均不宣称真实执行、漏洞检测或无依据的高覆盖率；相关表达在上游修正并重新同步，不留下会被下次同步覆盖的本站补丁。
- Prompts 有六组双语、可复核的输入输出示例与人工检查点。
- 首页结构收缩未破坏既有 navigation、tracking、accessibility E2E 契约（spec 与实现同步更新）。
- 中英文、1440px、390px、单元测试、构建、SEO 和全量 E2E 全部通过。
