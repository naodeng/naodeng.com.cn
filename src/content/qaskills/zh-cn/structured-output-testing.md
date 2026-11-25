# 结构化输出测试

作者：naodeng

## 元数据
- slug: structured-output-testing
- category: type
- hasEvals: true
- syncedAt: 2026-11-25
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/structured-output-testing/SKILL.md
- description: Use this skill when you need to verify JSON or other structured model outputs against a schema, required fields, enums, and semantic oracles; triggers include 结构化输出测试, JSON Schema 测试, and structured output testing.

## 何时使用

- 验证 LLM 或 Agent 输出的 JSON、工具调用参数、结构化字段或枚举值。
- 需要区分 JSON 解析、Schema 约束与领域语义失败。
- 需要记录输出版本、运行参数、样本和失败证据，避免把单个样例当成整体质量结论。

## 执行流程

1. 先阅读并遵循 `prompts/structured-output-testing.md` 的执行流程、最低覆盖清单和输出契约。
2. 获取项目 Schema、字段含义、必填项、枚举、未知字段策略和语义 oracle；没有时标出缺口。
3. 先解析 JSON，再验证 Schema，再按领域 oracle 判断语义，分别记录每层结果。
4. 固定并追踪输入、模型、提示词、数据集、Schema 版本、参数和重复次数。
5. 信息不足时交付受限测试设计，并把 `evaluation_status` 设为 `NOT_RUN`、`BLOCKED` 或 `UNKNOWN`，不可伪造通过结果。

## 核心约束

- 按产品声明分别测试 JSON mode、函数调用参数、流式片段/终止标记和旧新 Schema 消费者兼容；模式名称不等于成功证据。

- `parse_status`、`schema_status` 与 `semantic_status` 是独立结果；JSON 可解析不表示字段或业务语义正确。
- 每个结论都要能追溯到样本、版本、参数、运行记录或脱敏输出引用。
- 区分一次观察与分布结论；报告重复数、失败数和分母。
- 不自行发明字段约束、语义预期或业务验收门槛。

## 交付前自检

- [ ] 已确认 schema 版本、必填字段、类型、枚举和额外字段策略。
- [ ] 已分别判断 JSON 可解析性、结构合规性与语义正确性。
- [ ] 已记录输入/运行身份、参数、重复次数、分母与证据引用。
- [ ] 缺少结果时没有报告 `PASS`，并明确最小下一步。

## 常见误区

- 把合法 JSON 当成 Schema 合规或业务正确。
- 仅用字符串完全相等比较允许改写的语义字段。
- 丢失模型、提示词、Schema 或数据集版本，导致回归不可比。
- 用一个通过样例宣称稳定，或把没有证据的状态标为通过。

## 原始 SKILL.md

```markdown
---
name: structured-output-testing
description: Use this skill when you need to verify JSON or other structured model outputs against a schema, required fields, enums, and semantic oracles; triggers include 结构化输出测试, JSON Schema 测试, and structured output testing.
license: PolyForm-Noncommercial-1.0.0
metadata:
  version: "1.0.0"
  compatibility: ""
  author: "Awesome QA Skills contributors"
  language: "zh-CN"
  category: "testing-types"
  source: "https://github.com/naodeng/awesome-qa-skills"
  license-url: "https://polyformproject.org/licenses/noncommercial/1.0.0"
---

# 结构化输出测试

## 何时使用

- 验证 LLM 或 Agent 输出的 JSON、工具调用参数、结构化字段或枚举值。
- 需要区分 JSON 解析、Schema 约束与领域语义失败。
- 需要记录输出版本、运行参数、样本和失败证据，避免把单个样例当成整体质量结论。

## 输出格式选项

- 默认输出 Markdown，包含结构检查、语义检查、证据和结论边界。
- 用户要求机器消费时，先确认 schema、必填字段、类型、枚举、额外字段策略和证据状态字段。

## 如何使用

1. 先阅读并遵循 `prompts/structured-output-testing.md` 的执行流程、最低覆盖清单和输出契约。
2. 获取项目 Schema、字段含义、必填项、枚举、未知字段策略和语义 oracle；没有时标出缺口。
3. 先解析 JSON，再验证 Schema，再按领域 oracle 判断语义，分别记录每层结果。
4. 固定并追踪输入、模型、提示词、数据集、Schema 版本、参数和重复次数。
5. 信息不足时交付受限测试设计，并把 `evaluation_status` 设为 `NOT_RUN`、`BLOCKED` 或 `UNKNOWN`，不可伪造通过结果。

## 参考文件

- 每次执行必须读取 `prompts/structured-output-testing.md`；它是完整执行规范。
- 需要回归本 Skill 时，读取 `evals/eval.yaml` 和对应的 `evals/cases/`。
- 仅当任务需要时读取存在的 `references/`、`examples/`、`scripts/` 或 `output-formats.md`。

## 核心约束

- 按产品声明分别测试 JSON mode、函数调用参数、流式片段/终止标记和旧新 Schema 消费者兼容；模式名称不等于成功证据。

- `parse_status`、`schema_status` 与 `semantic_status` 是独立结果；JSON 可解析不表示字段或业务语义正确。
- 每个结论都要能追溯到样本、版本、参数、运行记录或脱敏输出引用。
- 区分一次观察与分布结论；报告重复数、失败数和分母。
- 不自行发明字段约束、语义预期或业务验收门槛。

## 评测证据状态

- 输出评测结论时包含 `evaluation_status`：`PASS`、`FAIL`、`BLOCKED`、`NOT_RUN` 或 `UNKNOWN`。
- `PASS` 需要范围内的实际运行记录和所有必需断言证据；没有运行结果用 `NOT_RUN`，运行受阻用 `BLOCKED`，证据不足用 `UNKNOWN`。方案、静态检查或文件存在不能单独证明 `PASS`。
- 结构化追踪记录 `trace_id`、样本与版本、参数、run/trial、解析、Schema、语义状态及证据引用；三类检查分别判定。

## 交付前自检

- [ ] 已确认 schema 版本、必填字段、类型、枚举和额外字段策略。
- [ ] 已分别判断 JSON 可解析性、结构合规性与语义正确性。
- [ ] 已记录输入/运行身份、参数、重复次数、分母与证据引用。
- [ ] 缺少结果时没有报告 `PASS`，并明确最小下一步。

## 常见误区

- 把合法 JSON 当成 Schema 合规或业务正确。
- 仅用字符串完全相等比较允许改写的语义字段。
- 丢失模型、提示词、Schema 或数据集版本，导致回归不可比。
- 用一个通过样例宣称稳定，或把没有证据的状态标为通过。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/structured-output-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill structured-output-testing
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[structured-output-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/structured-output-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
