# test-reporting

作者：naodeng

## 中文名称
测试报告

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
- 适合谁：负责测试结果汇总与决策沟通的 QA 与测试负责人。
- 何时使用：需要让管理层和团队快速看懂质量状态与阻塞风险。
- 怎么使用：汇总执行证据和趋势，突出关键风险，再给出可执行的下一步建议。


## 使用说明
1. 先完成 `test-reporting` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 带执行数据触发，例如：“使用 `test-reporting` 汇总本周测试结果并给发布建议。”
4. 要求决策导向输出：阻塞清单、趋势、剩余风险、建议动作。
5. 每轮复用同一报告模板，便于横向对比。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 利益相关方需要基于测试结果做决策。
- 一轮测试执行后要形成可读、可用的结论。
- 团队需要对当前质量状态和阻塞项达成共识。

### What 立目标：具体成果，解决什么问题
- 产出简明但有证据的测试报告。
- 把执行数据转成可决策的风险信息。
- 对齐各角色对质量现状和后续动作的认知。

### How 理规则：步骤逻辑，怎么执行
1. 汇总范围、通过率、失败分布、阻塞项。
2. 统一口径，剔除噪音数据与重复统计。
3. 聚焦关键问题和未决阻塞。
4. 把缺陷映射到业务影响和发布风险。
5. 对比上一轮趋势变化。
6. 输出建议动作和决策意见。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 执行 420 条，用例通过率 95%，2 个关键缺陷未解决

输出：
- 报告包含风险摘要、阻塞归属、预计修复窗口
- 建议：支付回滚缺陷未解前不建议发布

### 反例（输入 -> 输出）
输入：
- “发一下测试进度”

输出（问题）：
- 只给通过率，没有风险背景和阻塞分析
- 管理层无法做发布判断

### Limits 画边界：明确限制，什么不做
- 不做“只有数字没有上下文”的报告。
- 不用总体通过率掩盖关键阻塞。
- 不把假设写成事实。
- 不省略趋势与变化原因。
- 不在证据不足时给 go/no-go 建议。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-reporting/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[test-reporting](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/test-reporting/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
