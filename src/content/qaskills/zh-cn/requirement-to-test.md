# 需求到测试工作流

作者：naodeng

## 元数据
- slug: requirement-to-test
- category: workflow
- hasEvals: true
- syncedAt: 2026-11-06
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/requirement-to-test/SKILL.md
- description: Use this skill when you need to turn requirements into testable, risk-driven, traceable test design; triggers include requirement-to-test and 需求到测试工作流.

## 何时使用

将需求转成可测试、风险驱动且可追踪的测试设计时使用。

## 执行流程

执行前读取 `prompts/requirement-to-test.md`；按契约检查输入，逐阶段分析需求、设计测试并指出覆盖缺口。通过 `README.md` 查看调用示例和 FAQ。

## 核心约束

只组合已有专业 Skill，不复制分析规则；缺少 Host 安装证据时标 `UNKNOWN`。不把计划或静态分析写成已执行结果；默认只读，对外写入需授权。

## 交付前自检

- [ ] 输入范围和假设明确
- [ ] 阶段交接保留来源、状态和缺口
- [ ] 执行证据与计划分开
- [ ] 下一步和授权边界明确

## 常见误区

不编造输入、不假设依赖已安装、不把建议当作实际执行或批准。

## 原始 SKILL.md

```markdown
---
name: requirement-to-test
description: Use this skill when you need to turn requirements into testable, risk-driven, traceable test design; triggers include requirement-to-test and 需求到测试工作流.
license: PolyForm-Noncommercial-1.0.0
metadata:
  version: "1.0.0"
  compatibility: ""
  author: "Awesome QA Skills contributors"
  language: "zh-CN"
  category: "testing-workflows"
  source: "https://github.com/naodeng/awesome-qa-skills"
  license-url: "https://polyformproject.org/licenses/noncommercial/1.0.0"
---

# 需求到测试工作流

## 何时使用

将需求转成可测试、风险驱动且可追踪的测试设计时使用。

## 输出格式选项

默认使用 Markdown，包含测试用例和需求追踪矩阵。若用户要求 JSON，仍需按 Prompt 将事实、推断、计划、执行状态和来源分开。

## 核心约束

只组合已有专业 Skill，不复制分析规则；缺少 Host 安装证据时标 `UNKNOWN`。不把计划或静态分析写成已执行结果；默认只读，对外写入需授权。

## 如何使用

执行前读取 `prompts/requirement-to-test.md`；按契约检查输入，逐阶段分析需求、设计测试并指出覆盖缺口。通过 `README.md` 查看调用示例和 FAQ。

## 参考文件

- `prompts/requirement-to-test.md`：完整需求分析、测试设计、输出和恢复规则。
- `README.md`：使用示例和 FAQ。
- `evals/`：触发与行为回归用例。

## 交付前自检

- [ ] 输入范围和假设明确
- [ ] 阶段交接保留来源、状态和缺口
- [ ] 执行证据与计划分开
- [ ] 下一步和授权边界明确

## 常见误区

不编造输入、不假设依赖已安装、不把建议当作实际执行或批准。

## 最佳实践

保留需求 ID；缺少阈值时提问；标出每个用例的来源和设计方法；说明未覆盖区域。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/requirement-to-test/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill requirement-to-test
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[requirement-to-test](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/requirement-to-test/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
