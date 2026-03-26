# requirements-analysis-plus

作者：naodeng

## 中文名称
requirements-analysis-plus

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
- 适合谁：负责前置分析的 QA、测试设计人员、需求协作角色。
- 何时使用：需求有歧义、变更频繁，写用例前需要先做可测性和风险判断。
- 怎么使用：先梳理需求与边界，再输出澄清问题、风险清单和测试方向。


## 使用说明
1. 先完成 `requirements-analysis-plus` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 输入需求文档触发，例如：“使用 `requirements-analysis-plus` 分析这份 PRD 的歧义和风险。”
4. 固定输出项：歧义清单、澄清问题、风险优先级、可测性结论。
5. 产品/研发回复后带着新信息再跑一轮得到最终版。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 需求文档不完整、有歧义或变更频繁。
- 你需要在写用例前先做风险识别和测试边界确认。
- 团队对“现在能测什么、还缺什么”不清晰。

### What 立目标：具体成果，解决什么问题
- 产出需求层面的风险与可测性分析，并补充歧义矩阵、可测性评分与假设追踪。
- 给出清晰范围、依赖项和验证策略。
- 把模糊需求转成可决策的问题清单。

### How 理规则：步骤逻辑，怎么执行
1. 拆解业务规则、状态流转和异常处理逻辑。
2. 标记歧义点：输入缺失、结果不明确、规则冲突。
3. 映射测试维度：功能、数据、接口、流程、非功能。
4. 按业务影响和变更频率做优先级。
5. 形成澄清问题并指定决策责任人。
6. 输出分析结论和下一步测试动作建议。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- PRD：优惠叠加规则 + 会员等级 + 退款例外

输出：
- 规则矩阵与边界说明
- 高风险清单（舍入、冲突规则、回滚行为）
- 澄清问题与建议验收标准

### 反例（输入 -> 输出）
输入：
- “读一下 PRD，给我测试点”

输出（问题）：
- 只给通用测试点，没有发现规则冲突和未决问题
- 无法支撑后续用例质量

### Limits 画边界：明确限制，什么不做
- 不把缺失规则当成既定事实。
- 不在歧义未处理前直接进入用例编写。
- 不忽视上下游依赖影响。
- 不给“无依据”的风险排序。
- 不在缺少验收标准时宣称“需求可测”。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirements-analysis-plus/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[requirements-analysis-plus](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/requirements-analysis-plus/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
