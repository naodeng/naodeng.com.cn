# sprint-testing-workflow

作者：naodeng

## 中文名称
迭代测试工作流程

## 目录
- [中文名称](#中文名称)
- [快速介绍](#快速介绍)
- [使用说明](#使用说明)
- [说明汇总](#说明汇总)
  - [When 定场景：触发场景，用户何时使用](#when-定场景触发场景用户何时使用)
  - [What 立目标：具体成果，解决什么问题](#what-立目标具体成果解决什么问题)
  - [How 理规则：步骤逻辑，怎么执行](#how-理规则步骤逻辑怎么执行)
  - [Reference 给示例：正反例，输入---输出](#reference-给示例正反例输入---输出)
  - [Limits 画边界：明确限制，什么不做](#limits-画边界明确限制什么不做)
- [安装](#安装)
- [来源](#来源)
- [同步日期](#同步日期)

## 快速介绍
- 适合谁：测试负责人、项目协同角色、跨团队交付成员。
- 何时使用：你需要做 迭代质量节奏和范围协同，而不是零散执行测试。
- 怎么使用：先定范围和时间，再按阶段推进，最后输出状态、风险和下一步动作。


## 使用说明
1. 先完成 `sprint-testing-workflow` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 用明确指令触发，例如：“使用 `sprint-testing-workflow` 给我生成这次版本/迭代/日常测试流程。”
4. 明确要交付的结果：阶段计划、负责人、阻塞项、决策清单。
5. 约束变化后只让 skill 重算受影响部分，不整份重写。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 你需要面向迭代周期的一套完整测试流程，而不是零散执行。
- 多个测试活动要协同推进，需要统一节奏与状态透明。
- 团队希望提前暴露阻塞项，避免最后一刻集中爆雷。

### What 立目标：具体成果，解决什么问题
- 把分析、执行、复核、汇总串成可落地流程。
- 交付可用于迭代级质量跟踪的过程证据和结论。
- 提前识别迭代内范围变更并明确责任人和时限。

### How 理规则：步骤逻辑，怎么执行
1. 明确目标、范围、准入条件和完成条件。
2. 拆分阶段：准备、执行、汇总、签出。
3. 每项任务绑定负责人、时间和依赖关系。
4. 先跑关键路径，再跑支撑路径和边界场景。
5. 按严重级别和业务影响汇总问题。
6. 输出最终状态：可发布性、剩余风险、下一步动作。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 范围：支付 + 优惠券 + 拆单
- 时间：3 天
- 目标：支持发版决策

输出：
- 分阶段执行看板（含负责人和排期）
- 风险优先级执行顺序与阻塞清单
- 最终决策摘要（阻塞/非阻塞问题）

### 反例（输入 -> 输出）
输入：
- “上线前把核心流程测一下”

输出（问题）：
- 没有阶段拆分、责任归属和完成标准
- 团队无法判断真实进度和发布准备度

### Limits 画边界：明确限制，什么不做
- 不在缺少准入/完成标准时启动流程。
- 不把关键阻塞隐藏在汇总口径里。
- 不在无证据情况下给结论。
- 不把流程降级成静态清单、缺少动态调优。
- 不在关键信息缺失时输出 go/no-go 建议。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/sprint-testing-workflow/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[sprint-testing-workflow](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/sprint-testing-workflow/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
