# Skill 变更验证

作者：naodeng

## 元数据
- slug: skill-change-verification
- category: type
- hasEvals: true
- syncedAt: 2026-09-02
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/skill-engineering/skill-change-verification/SKILL.md
- description: Use this skill when selecting and reporting verification for Skill changes; triggers include Skill 变更验证、质量门禁、evidence level。

## 何时使用

需要根据变更范围选择最小但足够的检查，并准确说明证据能支持什么结论时使用。

## 执行流程

1. 将变更分为内容、元数据/目录、脚本、Evals 和运行时影响。
2. 选择对应的静态、结构、评测、运行时和人工审查证据。
3. 记录已执行命令、结果、未执行项目及原因。
4. 输出残余风险，以及“可以声称/不能声称”的结论边界。

## 核心约束

- `skill-up validate` 不等于运行时语义验证。
- 不知道项目命令时标记待确认，不得猜测。
- 验证范围必须覆盖实际变更，不因运行全量检查而隐藏缺口。

## 按需加载

产出前阅读 `prompts/skill-change-verification.md`；需要评测时阅读 `evals/`。

## 原始 SKILL.md

```markdown
---
name: skill-change-verification
description: Use this skill when selecting and reporting verification for Skill changes; triggers include Skill 变更验证、质量门禁、evidence level。
---

# Skill 变更验证

## 何时使用

需要根据变更范围选择最小但足够的检查，并准确说明证据能支持什么结论时使用。

## 执行流程

1. 将变更分为内容、元数据/目录、脚本、Evals 和运行时影响。
2. 选择对应的静态、结构、评测、运行时和人工审查证据。
3. 记录已执行命令、结果、未执行项目及原因。
4. 输出残余风险，以及“可以声称/不能声称”的结论边界。

## 核心约束

- `skill-up validate` 不等于运行时语义验证。
- 不知道项目命令时标记待确认，不得猜测。
- 验证范围必须覆盖实际变更，不因运行全量检查而隐藏缺口。

## 按需加载

产出前阅读 `prompts/skill-change-verification.md`；需要评测时阅读 `evals/`。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-change-verification/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill skill-change-verification
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[skill-change-verification](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/skill-engineering/skill-change-verification/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
