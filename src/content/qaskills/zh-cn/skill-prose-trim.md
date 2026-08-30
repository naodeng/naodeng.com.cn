# 过程性文案清理

作者：naodeng

## 元数据
- slug: skill-prose-trim
- category: type
- hasEvals: true
- syncedAt: 2026-08-30
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/skill-engineering/skill-prose-trim/SKILL.md
- description: Use this skill when auditing or trimming process residue from Skill、Prompt、注释或文档；触发词包括过程性文案清理、审查残留、当前状态改写。

## 何时使用

需要清理“本次修改”“审查者认为”“之前版本”、未提交设计编号或其他无法在当前仓库语境中解析的文字时使用。

## 执行流程

1. 明确文件范围、语言配对和是否允许修改。
2. 区分当前事实、契约、历史记录、推理过程和审查对话。
3. 删除纯过程性内容；把有价值的事实改写成当前状态表述。
4. 保留负向保证、测量边界、正式引用、归档记录和 fixture fidelity。

## 核心约束

- 不把假设改写成已实现能力。
- 不修改 sealed archive、记录型 fixture 或生成文件，除非用户明确授权。
- 双语文件必须保持语义同步。

产出前阅读 `prompts/skill-prose-trim.md`。

## 原始 SKILL.md

```markdown
---
name: skill-prose-trim
description: Use this skill when auditing or trimming process residue from Skill、Prompt、注释或文档；触发词包括过程性文案清理、审查残留、当前状态改写。
---

# 过程性文案清理

## 何时使用

需要清理“本次修改”“审查者认为”“之前版本”、未提交设计编号或其他无法在当前仓库语境中解析的文字时使用。

## 执行流程

1. 明确文件范围、语言配对和是否允许修改。
2. 区分当前事实、契约、历史记录、推理过程和审查对话。
3. 删除纯过程性内容；把有价值的事实改写成当前状态表述。
4. 保留负向保证、测量边界、正式引用、归档记录和 fixture fidelity。

## 核心约束

- 不把假设改写成已实现能力。
- 不修改 sealed archive、记录型 fixture 或生成文件，除非用户明确授权。
- 双语文件必须保持语义同步。

产出前阅读 `prompts/skill-prose-trim.md`。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-trim/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill skill-prose-trim
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[skill-prose-trim](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/skill-engineering/skill-prose-trim/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
