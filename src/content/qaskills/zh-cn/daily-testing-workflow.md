# 日常测试工作流程

作者：naodeng

## 元数据
- slug: daily-testing-workflow
- category: workflow
- hasEvals: true
- syncedAt: 2026-09-02
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/daily-testing-workflow/SKILL.md
- description: Use this skill when you need a day-by-day QA routine including planning, execution, bug reporting, and end-of-day wrap-up; triggers include 日常测试工作流程 and daily testing workflow.

## 何时使用

- 需要按「一日 QA」节奏推进：晨间计划、执行、缺陷、日终收口。
- 需要阶段门禁与向类型 skill 的交接，而不是只做单一测试任务。

## 执行流程

1. 阅读并遵循 `prompts/daily-testing-workflow.md`（阶段、门禁、交接、输出结构）。
2. 只补充真正影响结果的项目上下文：当日范围、环境、限制、风险、遗留缺陷。
3. 定位当前阶段后，按 `reference.md` 点名交接类型 skill；禁止相对路径链到其他 skill 内部文件。
4. 信息不全时先给可用日计划，并显式标出假设与信息缺口。

## 核心约束

- 管阶段与门禁；完整用例/策略/报告交给类型 skill。
- 按风险排优先级；门禁必须可检查。
- 把「已确认事实」和「当前假设」分开写。
- 不要编造用户未提供的细节；禁止相对路径链到其他 skill 文件。

## 按需加载

- 产出前必须阅读并遵循 `prompts/daily-testing-workflow.md`。
- 需要步骤与交接 skill 对照时：读 `reference.md`。
- 进入某阶段深做时：调用对应类型 skill（如 `bug-reporting`），不要在本 skill 内展开完整产物。
- 需要套用模板时：读 `output-templates/` 中匹配文件。

## 交付前自检

- [ ] 已遵循主提示词的输出结构
- [ ] 含今日范围/不做清单、门禁状态、优先队列、下一跳 skill
- [ ] 高风险项有明确优先级
- [ ] 未编造用户未提供的细节
- [ ] 假设与信息缺口已标明

## 常见误区

- 不要把日常工作流写成功能测试百科。
- 不要无退出标准地让任务永远「进行中」。
- 不要一次交接多个同等主 skill。
- 不要在红环境上假装执行完成。

## 原始 SKILL.md

```markdown
---
name: daily-testing-workflow
description: Use this skill when you need a day-by-day QA routine including planning, execution, bug reporting, and end-of-day wrap-up; triggers include 日常测试工作流程 and daily testing workflow.
---

# 日常测试工作流程（中文版）

**英文版：** 见对应英文技能。

## 何时使用

- 需要按「一日 QA」节奏推进：晨间计划、执行、缺陷、日终收口。
- 需要阶段门禁与向类型 skill 的交接，而不是只做单一测试任务。

## 执行流程

1. 阅读并遵循 `prompts/daily-testing-workflow.md`（阶段、门禁、交接、输出结构）。
2. 只补充真正影响结果的项目上下文：当日范围、环境、限制、风险、遗留缺陷。
3. 定位当前阶段后，按 `reference.md` 点名交接类型 skill；禁止相对路径链到其他 skill 内部文件。
4. 信息不全时先给可用日计划，并显式标出假设与信息缺口。

## 核心约束

- 管阶段与门禁；完整用例/策略/报告交给类型 skill。
- 按风险排优先级；门禁必须可检查。
- 把「已确认事实」和「当前假设」分开写。
- 不要编造用户未提供的细节；禁止相对路径链到其他 skill 文件。

## 按需加载

- 产出前必须阅读并遵循 `prompts/daily-testing-workflow.md`。
- 需要步骤与交接 skill 对照时：读 `reference.md`。
- 进入某阶段深做时：调用对应类型 skill（如 `bug-reporting`），不要在本 skill 内展开完整产物。
- 需要套用模板时：读 `output-templates/` 中匹配文件。

## 交付前自检

- [ ] 已遵循主提示词的输出结构
- [ ] 含今日范围/不做清单、门禁状态、优先队列、下一跳 skill
- [ ] 高风险项有明确优先级
- [ ] 未编造用户未提供的细节
- [ ] 假设与信息缺口已标明

## 常见误区

- 不要把日常工作流写成功能测试百科。
- 不要无退出标准地让任务永远「进行中」。
- 不要一次交接多个同等主 skill。
- 不要在红环境上假装执行完成。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/daily-testing-workflow/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill daily-testing-workflow
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[daily-testing-workflow](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/daily-testing-workflow/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
