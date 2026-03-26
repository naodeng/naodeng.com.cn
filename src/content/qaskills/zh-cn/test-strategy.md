# test-strategy

作者：naodeng

## 中文名称
测试策略

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
- 适合谁：测试负责人、资深 QA、质量决策参与者。
- 何时使用：要为一组功能或版本制定可执行的测试策略。
- 怎么使用：输入业务目标和资源约束，按风险定优先级，再形成关卡和执行计划。


## 使用说明
1. 先完成 `test-strategy` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 带业务约束触发，例如：“使用 `test-strategy` 给 2.3 版本（5 天、2 人）做策略。”
4. 要求输出可执行项：优先范围、质量关卡、延后范围、发布判定条件。
5. 范围或人力变化时，只更新策略差异部分。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 一组功能或一个版本需要先确定总体测试打法。
- 你需要在质量风险和交付时间之间做取舍。
- 多方希望对“测什么、先测什么、为什么”达成一致。

### What 立目标：具体成果，解决什么问题
- 给出可执行的测试策略。
- 明确优先范围、延后范围和取舍理由。
- 对齐 QA、研发、产品的质量目标和验收口径。

### How 理规则：步骤逻辑，怎么执行
1. 明确业务目标和可接受失败成本。
2. 按模块关键性与变更强度建立风险地图。
3. 为不同风险层选择测试层级和方法。
4. 分配人力、环境和自动化投入。
5. 设定质量关卡、关键指标和升级规则。
6. 根据执行反馈动态修正策略。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 4 个模块，测试人力紧张，支付风险高

输出：
- 风险优先策略（优先支付/订单/回滚）
- 量化关卡（阻塞缺陷数、关键链路通过率）
- 低风险范围延后及影响说明

### 反例（输入 -> 输出）
输入：
- “快速写个测试策略”

输出（问题）：
- 只有原则口号，没有优先级和关卡定义
- 无法指导真实执行

### Limits 画边界：明确限制，什么不做
- 不给“一刀切”的通用策略。
- 不脱离资源约束谈策略。
- 不设“不可衡量”的质量关卡。
- 不隐去延后范围带来的风险。
- 不在风险变化后继续使用过期策略。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-strategy/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[test-strategy](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/test-strategy/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
