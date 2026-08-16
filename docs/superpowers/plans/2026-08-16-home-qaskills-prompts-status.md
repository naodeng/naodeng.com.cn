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

## 计划 B：p1-p2-follow-up — 未开始

### 状态

8 个任务的所有 checkbox 均未勾选，无对应提交，要求的文件均不存在。

### 缺失证据（对照 File Structure）

- `HomeCapabilityGuide.astro` / `HomeExploreHub.astro` 不存在；`CoreCapabilities.astro` / `HomeProofAndCases.astro` 仍在（计划要求删除）
- `tests/unit/homeTaskRouting.test.ts` / `tests/unit/promptClaims.test.ts` 不存在
- `src/data/homeTaskEntries.ts` 仍为单一 `slug` 结构，无 `key` + `targets` 多目标字段
- 首页无 `home-capability-guide` / `home-explore-hub` 顶级区块
- git 历史中找不到计划规定的任何提交（如 `fix(home): unify task data and target routing`、`refactor(home): consolidate homepage into five sections` 等）

### 依赖关系

- 计划 B 的 Task 1 基于计划 A 已落地的数据结构扩展（`HomeTaskEntry.slug` → `key` + `targets`），因此 B 必须在 A 之后执行。
- Gate 结构：Gate A（数据准确性，Task 1/6 后）→ Gate B（页面结构，Task 2/3/4 后）→ Gate C（内容深度，Task 5/7 后）→ Gate D（交付，Task 8 全量 E2E）。

## 后续动作

- 2026-08-16 起按计划 B 从 Task 1 开始执行，每个任务先写失败测试、再实现、验证、独立提交。
- 每完成一个 Gate 对应的任务后，同步把本状态文档与计划 B 的 checkbox 更新为已勾选。
