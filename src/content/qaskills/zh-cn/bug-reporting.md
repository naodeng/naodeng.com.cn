# bug-reporting

作者：naodeng

## 中文名称
缺陷上报

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
- 适合谁：负责缺陷提交、推动修复闭环的 QA。
- 何时使用：需要把问题描述清楚，减少研发反复确认成本。
- 怎么使用：记录复现步骤、证据和影响，跟进修复并完成复测关闭。


## 使用说明
1. 先完成 `bug-reporting` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 带缺陷证据触发，例如：“使用 `bug-reporting` 生成研发可直接处理的缺陷单。”
4. 要求固定结构：环境、步骤、预期/实际、日志、影响、复测标准。
5. 修复后让 skill 生成关闭前复核清单。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 发现缺陷后，需要高效推动修复和回归。
- 团队经常因为描述不清反复沟通。
- 管理层需要看到问题影响和处理状态。

### What 立目标：具体成果，解决什么问题
- 产出可复现、可诊断、可优先级决策的缺陷报告。
- 缩短研发定位和修复闭环时间。
- 提升问题分级准确度和跨团队协作效率。

### How 理规则：步骤逻辑，怎么执行
1. 记录环境、前置条件和最小复现步骤。
2. 明确“预期 vs 实际”并附客观证据。
3. 评估严重度、影响范围和业务后果。
4. 补充日志、截图、请求参数等定位材料。
5. 给出修复后复核要点。
6. 跟踪状态直到复测关闭。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 结算链路在 token 刷新后失败

输出：
- 完整复现步骤 + 请求 ID + 失败响应
- 严重度说明（支付中断）
- 修复后复测清单

### 反例（输入 -> 输出）
输入：
- “支付有 bug”

输出（问题）：
- 无环境、无复现步骤、无预期结果
- 研发无法高效定位

### Limits 画边界：明确限制，什么不做
- 不提交无复现证据的缺陷。
- 不在无影响依据时夸大严重度。
- 不把多个无关问题混在一个单里。
- 不复测就直接关闭问题。
- 不忽略偶发问题，需显式标记与跟踪。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/bug-reporting/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[bug-reporting](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/bug-reporting/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
