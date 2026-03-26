# test-case-reviewer

作者：naodeng

## 中文名称
测试用例评审

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
- 适合谁：负责用例评审的资深 QA 或测试负责人。
- 何时使用：已有用例很多，需要做质量、覆盖和可维护性把关。
- 怎么使用：按追溯性与覆盖度评审，输出有优先级的修订清单。


## 使用说明
1. 先完成 `test-case-reviewer` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 提供现有用例触发，例如：“使用 `test-case-reviewer` 评审这 120 条用例。”
4. 要求问题导向输出：覆盖缺口、歧义、重复、修订优先级。
5. 用例修订后只对变更部分做复评。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 已有测试用例需要在执行前做质量把关。
- 回归包越来越大，重复和过时内容增多。
- 团队希望评审标准统一，减少主观差异。

### What 立目标：具体成果，解决什么问题
- 识别用例质量问题。
- 输出可执行的修订项和优先级。
- 提升用例可读性、覆盖平衡和可维护性。

### How 理规则：步骤逻辑，怎么执行
1. 检查需求追溯和场景完整性。
2. 评估用例原子性、可读性和可复现性。
3. 识别重复、过期和预期不一致项。
4. 核对关键/边界/异常路径覆盖。
5. 按严重度和影响给出修改建议。
6. 输出评审摘要和复审门槛。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 账号/资料模块 120 条回归用例

输出：
- 18 条高优先修订（缺少异常路径、数据依赖不稳）
- 27 条合并/删除建议（重复覆盖）
- 下轮可复用评审清单

### 反例（输入 -> 输出）
输入：
- “快速帮我过一下用例”

输出（问题）：
- 只改措辞，不评估覆盖和风险
- 没有可执行的修订优先级

### Limits 画边界：明确限制，什么不做
- 不在无证据情况下推翻整套用例。
- 不只做文字润色式评审。
- 不忽视脆弱数据和环境依赖。
- 不在关键断言缺失时判定可通过。
- 不在无验收门槛时关闭评审。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-reviewer/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[test-case-reviewer](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/test-case-reviewer/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
