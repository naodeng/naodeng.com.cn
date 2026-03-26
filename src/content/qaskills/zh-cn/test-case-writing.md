# test-case-writing

作者：naodeng

## 中文名称
测试用例编写

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
- 适合谁：需要产出可执行用例的一线 QA。
- 何时使用：范围已明确，团队要进入具体测试执行阶段。
- 怎么使用：根据需求和风险写原子化用例，补齐数据和预期，再做自检后交付。


## 使用说明
1. 先完成 `test-case-writing` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 用已确认需求触发，例如：“使用 `test-case-writing` 生成可执行测试用例。”
4. 指定用例格式：前置条件、步骤、预期、优先级、追溯 id。
5. 分批输出：先冒烟用例，再全量回归用例。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 需求和风险已明确，需要产出可执行测试用例。
- 冻结前必须把覆盖范围写清楚、可追踪。
- 多人协作需要统一用例质量标准。

### What 立目标：具体成果，解决什么问题
- 产出完整、可评审、可执行的测试用例。
- 覆盖主流程、边界流程、异常流程和关键数据变体。
- 让每条用例都有明确前置条件、步骤和预期结果。

### How 理规则：步骤逻辑，怎么执行
1. 从业务规则和用户路径提取场景。
2. 拆成单一测试目标的原子用例。
3. 为每条用例定义数据与环境前提。
4. 编写可观察、可复现的执行步骤。
5. 写清预期结果和校验依据。
6. 自检歧义、重复和边界遗漏。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 故事：结算时使用优惠券，区分会员与非会员

输出：
- 覆盖有效券、过期券、叠加冲突、支付失败回滚
- 每条用例含明确金额预期和错误提示
- 可追溯到需求条款

### 反例（输入 -> 输出）
输入：
- “写一下结算用例”

输出（问题）：
- 只有大纲，没有步骤、数据和预期
- 其他同学无法直接执行

### Limits 画边界：明确限制，什么不做
- 不写“描述性大纲”替代可执行用例。
- 不跳过失败路径和回滚验证。
- 不把多个目标混在一条用例里。
- 不省略前置条件和测试数据。
- 不在无追溯关系时宣称覆盖完整。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/test-case-writing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[test-case-writing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/test-case-writing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
