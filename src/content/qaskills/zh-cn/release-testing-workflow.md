# 发布测试工作流程

作者：naodeng

## 元数据
- slug: release-testing-workflow
- category: workflow
- hasEvals: true
- syncedAt: 2026-09-03
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/release-testing-workflow/SKILL.md
- description: Use this skill when you need release-phase QA workflow from T-14 planning to go/no-go and post-release monitoring; triggers include 发布测试工作流程 and release testing workflow.

## 何时使用

- 需要按发布窗口推进：T-N 规划 → 专项 → RC → Go/No-Go → 发布后观察。
- 需要发布门禁与放行证据包，并向类型 skill 交接专项执行。

## 执行流程

1. 阅读并遵循 `prompts/release-testing-workflow.md`（时间线、门禁、Go/No-Go、交接）。
2. 补充发布日、范围、冻结规则、候选版本、已知缺陷等上下文。
3. 定位 T 窗口后按 `reference.md` 点名交接类型 skill；专项执行只点名 skill 名。
4. 信息不全时仍给门禁看板初版，并标假设；**禁止编造测试通过结果**。

## 核心约束

- 管发布时间线与放行决策；专项报告交给 `performance-testing` / `security-testing` 等。
- 门禁可压缩时间，不可删除判据。
- Go/No-Go 必须基于证据；条件放行必须可验证。
- 禁止相对路径链到其他 skill 文件。

## 按需加载

- 产出前必须阅读并遵循 `prompts/release-testing-workflow.md`。
- 步骤与交接对照：读 `reference.md`。
- 阶段/专项深做：调用对应类型 skill，不要在本 skill 内展开完整专项报告。
- 模板：`output-templates/`。

## 交付前自检

- [ ] 已遵循主提示词的输出结构
- [ ] 含范围/排除项、T 窗口、门禁看板、证据缺口、下一跳 skill
- [ ] 若到决策点：Go / No-Go / 条件放行有依据
- [ ] 未编造通过结果或未提供的缺陷状态
- [ ] 假设与开放问题已标明

## 常见误区

- 不要删门禁只压缩日程。
- 不要在未冻结时宣称 RC 完成。
- 不要在本 skill 内代写完整专项长报告。
- 不要用空泛「继续观察」代替条件放行条款。

## 原始 SKILL.md

```markdown
---
name: release-testing-workflow
description: Use this skill when you need release-phase QA workflow from T-14 planning to go/no-go and post-release monitoring; triggers include 发布测试工作流程 and release testing workflow.
---

# 发布测试工作流程（中文版）

**英文版：** 见对应英文技能。

## 何时使用

- 需要按发布窗口推进：T-N 规划 → 专项 → RC → Go/No-Go → 发布后观察。
- 需要发布门禁与放行证据包，并向类型 skill 交接专项执行。

## 执行流程

1. 阅读并遵循 `prompts/release-testing-workflow.md`（时间线、门禁、Go/No-Go、交接）。
2. 补充发布日、范围、冻结规则、候选版本、已知缺陷等上下文。
3. 定位 T 窗口后按 `reference.md` 点名交接类型 skill；专项执行只点名 skill 名。
4. 信息不全时仍给门禁看板初版，并标假设；**禁止编造测试通过结果**。

## 核心约束

- 管发布时间线与放行决策；专项报告交给 `performance-testing` / `security-testing` 等。
- 门禁可压缩时间，不可删除判据。
- Go/No-Go 必须基于证据；条件放行必须可验证。
- 禁止相对路径链到其他 skill 文件。

## 按需加载

- 产出前必须阅读并遵循 `prompts/release-testing-workflow.md`。
- 步骤与交接对照：读 `reference.md`。
- 阶段/专项深做：调用对应类型 skill，不要在本 skill 内展开完整专项报告。
- 模板：`output-templates/`。

## 交付前自检

- [ ] 已遵循主提示词的输出结构
- [ ] 含范围/排除项、T 窗口、门禁看板、证据缺口、下一跳 skill
- [ ] 若到决策点：Go / No-Go / 条件放行有依据
- [ ] 未编造通过结果或未提供的缺陷状态
- [ ] 假设与开放问题已标明

## 常见误区

- 不要删门禁只压缩日程。
- 不要在未冻结时宣称 RC 完成。
- 不要在本 skill 内代写完整专项长报告。
- 不要用空泛「继续观察」代替条件放行条款。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/release-testing-workflow/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill release-testing-workflow
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[release-testing-workflow](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/release-testing-workflow/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
