# automation-testing

作者：naodeng

## 中文名称
自动化测试

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
- 适合谁：自动化测试工程师、持续集成质量守护者。
- 何时使用：手工回归成本高，需要稳定、可重复的自动化校验。
- 怎么使用：优先自动化高价值稳定场景，分层接入流水线并持续治理脆弱用例。


## 使用说明
1. 先完成 `automation-testing` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 带候选范围触发，例如：“使用 `automation-testing` 选出前 20 个自动化候选场景。”
4. 要求输出：ROI 排序、分层建议（API/UI）、门禁建议。
5. 每月复跑一次，更新候选并淘汰低价值脚本。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 回归范围大、重复执行成本高。
- 需要在持续集成中稳定拦截高风险问题。
- 关键链路希望每次构建都能快速得到反馈。

### What 立目标：具体成果，解决什么问题
- 为高价值回归路径建立稳定自动化校验。
- 通过持续验证降低发版风险。
- 在可维护前提下提升反馈速度。

### How 理规则：步骤逻辑，怎么执行
1. 按业务价值与稳定性筛选自动化候选。
2. 分层设计（接口/服务/UI）以控制投入产出比。
3. 建立稳定数据策略和环境隔离策略。
4. 增强断言和失败诊断能力。
5. 接入流水线并配置质量门禁。
6. 持续治理脆弱用例和过时脚本。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 每周固定回归：登录、支付、退款、发票

输出：
- 构建级冒烟 + 夜间全量回归套件
- 脆弱性看板和责任人修复机制

### 反例（输入 -> 输出）
输入：
- “把所有测试都自动化”

输出（问题）：
- 大量低价值且不稳定 UI 脚本占满成本
- 流水线变慢、告警可信度变低

### Limits 画边界：明确限制，什么不做
- 不优先自动化高波动低价值场景。
- 不忽视脚本维护成本和责任归属。
- 不把脆弱用例直接挂到发版门禁。
- 不把自动化覆盖率等同整体质量。
- 不取消对未知风险的人工探索。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/automation-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[automation-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/automation-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
