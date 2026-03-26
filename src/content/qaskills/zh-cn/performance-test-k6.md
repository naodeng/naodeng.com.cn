# performance-test-k6

作者：naodeng

## 中文名称
performance-test-k6

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
- 适合谁：性能测试工程师、关注容量风险的 QA。
- 何时使用：需要用数据回答系统性能、容量和瓶颈问题。
- 怎么使用：先定性能目标和负载模型，再分阶段压测并输出容量阈值与优化建议。


## 使用说明
1. 先完成 `performance-test-k6` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 带性能目标触发，例如：“使用 `performance-test-k6`，目标 p95<300ms，峰值 1200 RPS。”
4. 要求输出：负载模型、阈值、瓶颈分析、调优建议。
5. 调优后再跑一轮，并让 skill 输出前后对比。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 预期流量上涨，但系统容量上限不清晰。
- 线上出现延迟、错误率或资源饱和迹象。
- 团队需要有数据支撑的扩容和优化决策。

### What 立目标：具体成果，解决什么问题
- 通过k6 压测脚本与指标分析评估系统在不同负载下的表现。
- 识别应用、数据库、外部依赖的瓶颈位置。
- 产出容量基线和优化优先级。

### How 理规则：步骤逻辑，怎么执行
1. 先定义性能目标（如 P95、错误率、吞吐目标）。
2. 设计贴近真实业务的负载模型与数据分布。
3. 分阶段执行：基线、爬坡、稳态、峰值。
4. 联合分析接口指标与资源指标。
5. 定位瓶颈并验证根因假设。
6. 输出阈值、失效模式和整改建议。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 目标：P95 < 300ms，峰值 1200 RPS，链路：搜索+结算

输出：
- 1050 RPS 开始 DB 连接池饱和，P95 上升至 340ms
- CPU 平稳但 DB 等待时间显著升高
- 建议：先扩池并优化热点 SQL，再做复测

### 反例（输入 -> 输出）
输入：
- “跑一下压测”

输出（问题）：
- 没有目标、没有负载模型、没有瓶颈证据
- 结果无法用于容量决策

### Limits 画边界：明确限制，什么不做
- 不用脱离真实流量特征的假负载做结论。
- 不只看平均响应时间。
- 不跳过依赖层诊断。
- 不在环境基线不一致时横向对比结果。
- 不在缺少阈值证据时给容量通过结论。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-test-k6/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[performance-test-k6](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/performance-test-k6/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
