# Home / QA Skills / Prompts 两份计划状态梳理（2026-08-16）

> 记录 2026-08-10 规划的两份关联计划的落地状态，供后续执行与验收时对照。核对时间：2026-08-16。

## 背景

2026-08-10 同一天规划了两份前后衔接的计划，目标都是收敛首页信息架构、修复 QA Skills 搜索反馈与任务映射、校正 Prompts 能力边界：

| 计划 | 定位 | 状态 |
| --- | --- | --- |
| `2026-08-10-home-qaskills-prompts-content-optimization.md` | 内容层优化（P1 基础版） | 实现已落地，文档 checkbox 未同步 |
| `2026-08-10-home-qaskills-prompts-p1-p2-follow-up.md` | 进阶优化（P1/P2 follow-up） | 未开始 |

## 计划 A：content-optimization — 实现已完成，文档未同步

### 状态

代码与 git 历史均显示实现已落地，但计划文档内 55 个 checkbox 全部保持未勾选（`- [ ]`）。

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

- 计划文档 checkbox 未勾选；要么按实现补勾，要么在文档中标注"实现已完成、文档待同步"。
- 本次未重跑构建与 E2E，文档级的"完成"只建立在代码与提交证据上。

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
- 计划 B checkbox：Task 1 的 7 项已勾选，其余任务待执行。

## 后续动作

- 继续按重写后的计划 B 从 Task 2 开始执行，每个任务先写失败测试、再实现、验证、独立提交。
- 每完成一个 Gate 对应的任务后，同步把本状态文档与计划 B 的 checkbox 更新为已勾选。
