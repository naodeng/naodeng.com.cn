# Home / QA Skills / Prompts 两份计划状态梳理（2026-08-16）

> 记录 2026-08-10 规划的两份关联计划的落地状态，供后续执行与验收时对照。核对时间：2026-08-16。

## 背景

2026-08-10 同一天规划了两份前后衔接的计划，目标都是收敛首页信息架构、修复 QA Skills 搜索反馈与任务映射、校正 Prompts 能力边界：

| 计划 | 定位 | 状态 |
| --- | --- | --- |
| `2026-08-10-home-qaskills-prompts-content-optimization.md` | 内容层优化（P1 基础版） | 实现已落地，文档 checkbox 已于 2026-08-16 按实现状态回填（54/54） |
| `2026-08-10-home-qaskills-prompts-p1-p2-follow-up.md` | 进阶优化（P1/P2 follow-up） | Task 1–8 已全部完成（2026-08-16），详见执行进度 |

## 计划 A：content-optimization — 实现已完成，文档已同步

### 状态

代码与 git 历史显示实现已落地；2026-08-16 已按实现状态回填全部 checkbox（54/54），文档头部新增同步记录，列出产物与提交证据。同批处理的已落地计划：`2026-08-05-qaskills-pages-redesign.md`（41/41）、`2026-08-06-qaskills-lifecycle-path.md`（21/21）、`2026-08-09-upstream-content-sync.md`（28/28）。

### 落地证据

- 要求的组件全部存在：
  - `src/components/home/`：`HomeTaskNavigator.astro`、`CoreCapabilities.astro`、`HomeProofAndCases.astro`
  - `src/components/qaskills/`：`QASkillStarterPaths.astro`、`RecommendedQASkills.astro`
  - `src/components/prompts/`：`PromptVersionGuide.astro`、`PromptExamples.astro`、`AIOutputNotice.astro`
- 首页已按五段式渲染：Hero → `HomeTaskNavigator` → `CoreCapabilities` → `HomeProofAndCases` → `home-latest-posts`（`src/pages/[lang]/index.astro:239-241`）
- `src/data/` 下三个配置模块（`homeTaskEntries.ts` / `promptLibrary.ts` / `qaSkillLibrary.ts`）存在
- git 提交与计划任务可对应：
  - `feat(content): add bilingual entry page configuration`（Task 1）
  - `fix(content): use accurate titles and resource counts`（Task 2）
  - `feat(prompts): clarify selection and AI review flow`（Task 3）
  - `feat(qaskills): add guided skill discovery`（Task 4）
  - `feat(home): guide visitors from tasks to QA resources`（Task 5，附 `fix(home): restore shared section layout styles` 等修正）
  - `test(ui): cover content pages at mobile width`（Task 6）

### 遗留事项

- 已解决：checkbox 于 2026-08-16 按实现状态回填并加同步记录。
- 本次未重跑构建与 E2E，文档级的"完成"建立在代码与提交证据上（页面本身由后续计划 B 的重构持续覆盖）。

## 计划 B：p1-p2-follow-up — 已按最新内容重新梳理（2026-08-16），尚未执行

### 状态

8 个任务的所有 checkbox 均未勾选，无对应提交，要求的文件均不存在。2026-08-16 按用户要求，依据网站最新内容重写计划文档（`2026-08-10-home-qaskills-prompts-p1-p2-follow-up.md`），文件头部有修订记录，各 Task 内标注"2026-08-16 修订"。

### 缺失证据（对照 File Structure）

- `HomeCapabilityGuide.astro` / `HomeExploreHub.astro` 不存在；`CoreCapabilities.astro` / `HomeProofAndCases.astro` 仍在（计划要求删除）
- `tests/unit/homeTaskRouting.test.ts` / `tests/unit/promptClaims.test.ts` 不存在
- `src/data/homeTaskEntries.ts` 仍为单一 `slug` 结构，无 `key` + `targets` 多目标字段
- 首页无 `home-capability-guide` / `home-explore-hub` 顶级区块
- git 历史中找不到计划规定的任何提交（如 `fix(home): unify task data and target routing`、`refactor(home): consolidate homepage into five sections` 等）

### 2026-08-16 重写要点（对照旧计划的过时假设）

| 旧计划假设 | 最新现状 | 修订处理 |
| --- | --- | --- |
| 部分任务目标指向 prompts | `test-case-reviewer`、`api-testing` 已是完整 qaskills skill | 全部目标用 `kind: "skill"`；`kind: "prompt"` 保留类型但暂不启用 |
| 首页已有 primary entries / hero console 资源卡 | `HOME_PRIMARY_MODES` 定义但未被消费；无 console | Task 1 改为从零渲染 primary modes（hero pill CTA 保留）；删除 console 步骤与相应 E2E 用例表述 |
| 首页按 5 段式重构后旧 spec 断言不明确 | 13 个区块；`navigation.spec` 依赖 `.home-projects`/`.home-tags`（无 `.guild-showcase` 断言）；contrast spec 含 `.home-chip`；hero CTA 2 个指向 blog+wiki；latest 5 篇 | Task 2/3 逐条列出实际 spec 改动点与选择器迁移 |
| `getQASkillsGrouped` 可在 Vitest 中直接导入 | 其内部用 `process.cwd()` 解析内容目录，`tests/` 下 cwd 不对 | Task 5 写明测试需先 `process.chdir()` 到仓库根 |
| eval 筛选有区分度、chip 交互有可测行为 | 38 个 skill 全部 `hasEvals: true`，无区分度 | Task 4 用 `shouldShowEvalsFilter` 决定 chip 渲染（构建期判断）；页面内联脚本与 utils 契约对齐；qaskills.spec 的 eval chip 点击用例替换为"不渲染"断言 |
| Prompts 页 H1/title/flow 结构待定 | H1 zh 已是"软件测试提示词库"，en 为 "QA Prompt Library"；`PROMPTS_PAGE_TITLE` 与 H1 不一致；flow 为页面内联 9 步数组 | Task 6 统一 title/H1（含 en 侧）、flow 文案移入 `PROMPT_ASSISTED_FLOW`、越界表述列表精确到出现位置；上游 8 个文件确认仍有待改文案 |
| Prompts 示例 3 项、字段少 | `PROMPT_EXAMPLES` 3 项 × `{key,input,capability,output}`；prompts.spec 断言 3 | Task 7 扩为 6 项 × 新字段，href 指向真实 slug，spec 同步改 6 |
| 埋点契约位置未明 | `tracking-contract.spec` 点击 `.home-hero__ctas a[href='/zh-cn/blog/']` | Task 3 迁移到 `.home-primary-entry[href='/zh-cn/blog/']`，保持 `home_entry_click` 契约 |
| `.home-task-navigator` 无锚点 | 区块只有 class 没有 id | Task 3 补充 `id="home-task-navigator"` 供主 CTA 锚定 |

### 依赖关系

- 计划 B 的 Task 1 基于计划 A 已落地的数据结构扩展（`HomeTaskEntry.slug` → `key` + `targets`），因此 B 必须在 A 之后执行。
- Gate 结构：Gate A（数据准确性，Task 1/6 后）→ Gate B（页面结构，Task 2/3/4 后）→ Gate C（内容深度，Task 5/7 后）→ Gate D（交付，Task 8 全量 E2E）。

## 执行进度

- **Task 1（统一首页任务数据与目标映射）已完成**（提交 `5da4e4721`）：`HomeTaskEntry` 由单一 `slug` 改为 `key` + `targets`，6 个任务目标全部映射到已有 qaskills skill；`HOME_PRIMARY_MODES` 在首页 hero 渲染（read→/blog、reference→/wiki|/AIWiki、act→qaskills+prompts 两个子链接）；`HomeTaskNavigator` 支持单/多目标渲染；新增 `tests/unit/homeTaskRouting.test.ts`（9 个用例，含真实 qaskills 集合的 slug 允许列表校验）。验证：86 个单元测试全过、build 成功（875 页）、首页相关 E2E 19 个全过。
- **Task 2（收敛首页为五段式信息架构）已完成**（提交 `0213245ef`）：首页固定为 Hero（含 primary modes）→ Task Navigator → Capability Guide → Latest Posts（3 篇）→ Explore Hub 五段；删除 CoreCapabilities / HomeProofAndCases 组件与 Prompts、QA Skills、Projects、Guild、Wiki、AI Wiki、Tags 七个旧长区块；`HomeCapabilityGuide` 承载 3 能力卡 + 3 输入→输出示例，`HomeExploreHub` 接收本地化卡片；同步 apple-home / navigation / accessibility-contrast 断言。额外：`10cea2177` 清理 guild.spec.ts 中已随首页收敛失效的 10 个旧断言、修复 qaskills 详情页偶发超时。
- **Task 3（统一首页首屏定位与 CTA）已完成**（提交 `9c35b6835`）：H1 改为「软件测试、质量工程与 AI 测试实践」/「Software Testing, Quality Engineering, and AI-assisted Testing」；主 CTA 锚定 `#home-task-navigator`（该区块补 id），次 CTA 进入 QA Skills 与 Prompts；tracking-contract 入口点击迁移到 `.home-primary-entry[href='/zh-cn/blog/']`，`home_entry_click` 事件与 payload 不变。另外修复 HomeCapabilityGuide 样式串扰（`970baf6ea`，类选择器化 + 字号归位 DESIGN.md 阶梯）。验证：33 个相关 E2E 通过、锚点/桌面/移动端实测正常、build 875 页。
- **Task 3 修订（按 spec 5.1 精确文案重写 Hero，2026-08-16）**：H1 改为「面向测试工程师的 AI 测试知识与工作台」/「AI Testing Knowledge and Workbench for Test Engineers」；副标题改为「从需求分析、测试设计到自动化与质量评估，使用可直接落地的 Skills、Prompts、工作流和实践指南。」及对应英文；CTA 收敛为两个——主按钮「找到适合我的测试 Skill」→ `/qaskills/`、次按钮「使用测试 Prompt」→ `/prompts/`，移除 `#home-task-navigator` 锚点 CTA（`HOME_CTA_TASKS` 常量一并删除）；`apple-home.spec` 英雄用例同步改为断言 2 个 CTA 与 primary/ghost 类。验证：build 875 页成功、apple-home / tracking-contract / navigation 34 个 E2E 通过、seo:check 无新增问题。
- **Task 4（修复 QA Skills 搜索反馈链路）已完成**（提交 `b78100879`）：`qaskillsFilter.ts` 新增 `isQASkillSearchActive` / `shouldShowEvalsFilter`；`#categories` 移到筛选区之后；四个辅助模块统一加 `data-qaskills-default-only`，搜索态隐藏、清空恢复并把焦点放回搜索框；38 个 skill 全 `hasEvals: true`，eval chip 不渲染。验证：qaskillsFilter 单测 14 个、qaskills E2E 9 个全过。
- **Task 5（校正评测状态并补齐完整 Skill 摘要）已完成**（提交 `ee5898a04`）：`getQASkillCardSummary` 从结构化章节提取适用场景/输入/输出/人工复核；8 个工具类 skill 缺执行流程/交付自检章节，按 slug 维护双语 fallback；目录卡改四行摘要。验证：双语 76 个 skill 摘要覆盖测试全过、qaskills E2E 10 个通过。
- **Task 6（收紧 Prompts 能力边界并统一标题）已完成**（站点提交 `28e27c2c3`；上游 `awesome-qa-prompt` 提交 `1b10497` + `4ddeb2c`）：`PROMPTS_PAGE_TITLE` 统一为「软件测试提示词库 / Software Testing Prompt Library」；流程标题改「AI 辅助测试流程参考」；九步流程迁入 `PROMPT_ASSISTED_FLOW` 并修正功能/安全/报告三处越界表述；上游 zh/en 各 8 个文件修正后重新同步 CRISPE/LangGPT；新增 `promptClaims.test.ts` 守护发布层禁用表达。注意：上游现已有 34 个测试类型，站点维持 15 个支持类型，本次未采纳新增类型目录（采纳需另行规划）。
- **Task 7（Prompt 示例升级为六组真实双语示例）已完成**（提交 `c9cfe14c6`）：`PROMPT_EXAMPLES` 扩为六组双语示例，含场景、输入、推荐版本与理由、输出片段、人工检查点与真实详情链接；`PromptExamples` 组件按新结构渲染，移动端防横向滚动。验证：contentEntryConfig 单测 13 个、prompts + responsive E2E 28 个全过。
- **Task 8（完整回归与页面验收）已完成（2026-08-16）**：全量单测 107 个通过；build 875 页成功；seo:check 计数无变化；全量 E2E **390 passed / 0 failed / 26 skipped**（跳过均为既有条件跳过）；独立 4327 preview + 脚本化验收六个页面 × 两种视口 12/12 通过（标题、H1、横向溢出、首页五段顺序、qaskills 搜索/清空/焦点、prompts 示例与辅助流程标题）。原计划的人工检查以脚本等价验证替代，发布前建议人工抽检一遍。
- E2E 提速（提交 `85161600e`）：全套件 246 处 `waitUntil: "networkidle"` 改为 `domcontentloaded`（第三方广告/统计脚本不再拖死等待），完整 411 用例从数十分钟大量超时降为 **2.1 分钟全绿**（385 passed / 0 failed / 26 skipped 均为既有条件跳过）。
- 计划 B checkbox：Task 1–8 已全部勾选，Gate A–D 均达成。

## 后续动作

- 计划 B 已全部执行完毕。遗留事项：
  - 上游 `awesome-qa-prompt` 已扩展到 34 个测试类型，站点只支持 15 个；如需采纳新增类型（api-test-*、ui-test-*、performance-test-*、*-plus 等），需补齐 `PROMPT_TYPE_COPY`、`TESTING_TYPE_ORDER`、E2E 数量断言并重新同步。
  - E2E 配置 `reuseExistingServer: true`：本地跑测试前建议先确认 4321 端口没有旧 preview 进程，否则可能误用旧构建导致断言误报。
  - 发布前对首页、qaskills、prompts 三页做一次人工抽检（本次以脚本化验收替代人工检查）。
