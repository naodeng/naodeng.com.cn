# functional-testing

作者：naodeng

## 中文名称
功能测试

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
- 适合谁：负责业务功能正确性验证的 QA。
- 何时使用：核心业务链路需要上线前功能质量确认。
- 怎么使用：围绕主路径、边界和异常场景执行验证，并输出剩余风险结论。


## 使用说明
1. 先完成 `functional-testing` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 带功能范围触发，例如：“使用 `functional-testing` 覆盖退款+优惠券回退流程。”
4. 要求分组输出：主流程、边界、异常、依赖校验。
5. 执行中发现遗漏后补跑一轮缺口场景。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 核心业务功能上线前需要验证正确性。
- 需求变更可能影响关键业务链路。
- 需要确认正常、边界、异常输入下的行为一致性。

### What 立目标：具体成果，解决什么问题
- 验证功能是否符合需求与验收标准。
- 发现流程逻辑、状态流转和异常处理缺口。
- 形成可用于发布判断的功能质量结论。

### How 理规则：步骤逻辑，怎么执行
1. 从需求和用户流程建立功能地图。
2. 识别主路径、边界路径、异常路径。
3. 准备代表性测试数据和前置状态。
4. 执行并校验界面、接口、数据一致性。
5. 记录问题并标注业务影响。
6. 汇总功能准备度与剩余风险。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 功能：部分退款 + 优惠券回退

输出：
- 覆盖正常退款、异常退款、回滚失败路径
- 发现 UI 状态与结算记录不一致问题

### 反例（输入 -> 输出）
输入：
- “退款功能快速测一下”

输出（问题）：
- 只测主流程，不测状态与异常
- 发版前形成错误安全感

### Limits 画边界：明确限制，什么不做
- 不把功能测试简化为点点页面。
- 不跳过异常和回滚路径。
- 不只看 UI，不校验数据与状态。
- 不在无需求追溯下判定通过。
- 不忽视跨模块依赖影响。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/functional-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[functional-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/functional-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
