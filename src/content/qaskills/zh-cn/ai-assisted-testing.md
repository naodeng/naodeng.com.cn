# ai-assisted-testing

作者：naodeng

## 中文名称
AI 辅助测试

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
- 适合谁：希望提升产出速度的 QA 和测试设计同学。
- 何时使用：要用 AI 加速分析和草稿产出，同时保持人工质量把关。
- 怎么使用：给 AI 提供结构化上下文，生成结果后做人工校验与修正再落地。


## 使用说明
1. 先完成 `ai-assisted-testing` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 先声明任务类型再触发，例如：“使用 `ai-assisted-testing` 从这份需求生成测试点草稿。”
4. 要求区分“可直接用内容”和“需人工确认假设”。
5. 把通过验证的提示词模板沉淀下来复用。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 想用 AI 提升分析、写用例、缺陷分诊效率。
- 需求变化快，纯手工产出速度跟不上。
- 团队希望沉淀可复用的提示词与校验流程。

### What 立目标：具体成果，解决什么问题
- 在有人把关的前提下，用 AI 提高 QA 产出效率。
- 更快生成测试点、风险清单和问题分析草稿。
- 建立“可复用、可校验、可追溯”的 AI 使用方式。

### How 理规则：步骤逻辑，怎么执行
1. 先定义任务目标和不可妥协的质量要求。
2. 提供结构化输入（需求、边界、数据、约束）。
3. 分阶段使用提示词（分析/用例/评审/报告）。
4. 对 AI 输出做需求对齐和风险补漏校验。
5. 修正幻觉、歧义和边界遗漏。
6. 沉淀通过验证的提示词模板。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 需求片段 + 已知风险 + 输出模板

输出：
- 可追溯的测试点草稿和风险优先级
- 明确标注需要人工确认的假设项

### 反例（输入 -> 输出）
输入：
- “帮我把这个功能所有测试都生成出来”

输出（问题）：
- 通用清单看似完整，实际遗漏系统特有边界
- 缺少人工复核关卡

### Limits 画边界：明确限制，什么不做
- 不把 AI 草稿当最终交付。
- 不在未获授权时输入敏感生产数据。
- 不对高风险决策省略人工评审。
- 不用一套提示词覆盖所有任务。
- 不掩盖 AI 输出中的不确定性。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-assisted-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[ai-assisted-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/ai-assisted-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
