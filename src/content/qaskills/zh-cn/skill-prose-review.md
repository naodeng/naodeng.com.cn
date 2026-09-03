# Skill 文案契约审查

作者：naodeng

## 元数据
- slug: skill-prose-review
- category: type
- hasEvals: true
- syncedAt: 2026-09-03
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/skill-engineering/skill-prose-review/SKILL.md
- description: Use this skill when reviewing Skill、Prompt、元数据或 QA 文档的契约完整性；触发词包括 Skill 文案审查、Prompt review、契约检查。

## 何时使用

- 需要审查 Skill、Prompt、元数据、示例或输出格式。
- 需要判断文案是否可执行、可独立安装、可验证。

## 执行流程

1. 确认审查范围和文档角色。
2. 建立“触发条件 → 输入 → 执行规则 → 输出 → 约束 → 验证”的契约链。
3. 按阻塞问题、重要建议、一般建议报告问题、位置、影响和证据。
4. 列出缺失信息，并说明哪些结论尚未得到验证。

## 核心约束

- 不凭空补充用户未提供的行为或工具能力。
- 不把静态阅读说成运行时验证。
- 不因风格偏好掩盖真实契约缺失。
- 除非用户明确要求，不直接改写文件。

## 按需加载

- 产出前必须阅读 `prompts/skill-prose-review.md`。
- 需要评测时使用 `evals/`；静态验证与运行时验证分开报告。

## 交付前自检

- [ ] 范围和文档角色明确
- [ ] 输入、输出、约束和验证链完整
- [ ] 信息缺口和证据等级已标明
- [ ] 未越权修改文件

## 原始 SKILL.md

```markdown
---
name: skill-prose-review
description: Use this skill when reviewing Skill、Prompt、元数据或 QA 文档的契约完整性；触发词包括 Skill 文案审查、Prompt review、契约检查。
---

# Skill 文案契约审查

## 何时使用

- 需要审查 Skill、Prompt、元数据、示例或输出格式。
- 需要判断文案是否可执行、可独立安装、可验证。

## 执行流程

1. 确认审查范围和文档角色。
2. 建立“触发条件 → 输入 → 执行规则 → 输出 → 约束 → 验证”的契约链。
3. 按阻塞问题、重要建议、一般建议报告问题、位置、影响和证据。
4. 列出缺失信息，并说明哪些结论尚未得到验证。

## 核心约束

- 不凭空补充用户未提供的行为或工具能力。
- 不把静态阅读说成运行时验证。
- 不因风格偏好掩盖真实契约缺失。
- 除非用户明确要求，不直接改写文件。

## 按需加载

- 产出前必须阅读 `prompts/skill-prose-review.md`。
- 需要评测时使用 `evals/`；静态验证与运行时验证分开报告。

## 交付前自检

- [ ] 范围和文档角色明确
- [ ] 输入、输出、约束和验证链完整
- [ ] 信息缺口和证据等级已标明
- [ ] 未越权修改文件
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/skill-prose-review/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill skill-prose-review
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[skill-prose-review](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/skill-engineering/skill-prose-review/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
