# AI 特性发布工作流

作者：naodeng

## 元数据
- slug: ai-feature-release-workflow
- category: workflow
- hasEvals: true
- syncedAt: 2026-11-25
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/ai-feature-release-workflow/SKILL.md
- description: Use this skill when taking an AI feature from evaluation design through a release gate, canary or shadow rollout, monitoring, and rollback planning; triggers include AI feature release, AI go/no-go, AI 特性发布 and AI 灰度发布流程.

## 何时使用

- 用户需要把 AI 特性的评测资产、发布门禁、灰度或影子发布、监控与回滚连成一条证据链。
- 模型、Prompt、数据集、judge 或服务配置变更，需要跨发布前和线上阶段管理证据。

## 执行流程

1. 阅读 `prompts/ai-feature-release-workflow.md` 与 `workflow.yaml`。
2. 记录特性、模型/Prompt/数据/judge 版本、责任人、环境和发布范围。
3. 建立阶段与证据契约；每个门禁和阶段都要标明状态。
4. 按需交接给评测设计、门禁设计、发布协调和生产验证 Skill。
5. 给出建议和交接信息；发布批准与生产操作由有权限的人负责。

## 核心约束

- `PASS`、`FAIL`、`BLOCKED`、`NOT_RUN`、`UNKNOWN`、`STALE` 表示证据状态；缺少运行证据不能标 `PASS`。
- 每项评测和灰度结论绑定适用的模型、Prompt、数据集、judge 与 run 身份。
- 本 Skill 定义阶段与证据，不实现评测 Runner、不执行生产灰度，也不批准发布。
- 灰度或影子计划必须有来源可查的阈值、流量范围、观察窗口、负责人、停止条件和回滚路径。

## 按需加载

- 总是先阅读主 Prompt 与 `workflow.yaml` 了解生命周期契约。
- 用户需要证据包字段或阶段交接示例时，再读取 `references/`。
- 评测本 Skill 时阅读 `evals/`；真实模型评测需另行授权。

## 交付前自检

- [ ] 每个阶段都有进入证据、退出标准、负责人和状态。
- [ ] 评测与灰度产物绑定版本和运行身份。
- [ ] 缺失、过期和未运行证据均明确标记。
- [ ] 人工批准、生产执行、停止和回滚权限清楚。

## 常见误区

- 把计划中的评测写成已完成运行。
- 模型、Prompt、数据集、judge 或服务配置变化后复用旧门禁结果。
- 把灰度成功当作正式发布批准。
- 在这个 Host 无关的 Workflow 中编写 Runner 或硬编码特定供应商发布引擎。

## 原始 SKILL.md

```markdown
---
name: ai-feature-release-workflow
description: Use this skill when taking an AI feature from evaluation design through a release gate, canary or shadow rollout, monitoring, and rollback planning; triggers include AI feature release, AI go/no-go, AI 特性发布 and AI 灰度发布流程.
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

# AI 特性发布工作流

**English version:** See the corresponding English skill.

## 何时使用

- 用户需要把 AI 特性的评测资产、发布门禁、灰度或影子发布、监控与回滚连成一条证据链。
- 模型、Prompt、数据集、judge 或服务配置变更，需要跨发布前和线上阶段管理证据。

## 执行流程

1. 阅读 `prompts/ai-feature-release-workflow.md` 与 `workflow.yaml`。
2. 记录特性、模型/Prompt/数据/judge 版本、责任人、环境和发布范围。
3. 建立阶段与证据契约；每个门禁和阶段都要标明状态。
4. 按需交接给评测设计、门禁设计、发布协调和生产验证 Skill。
5. 给出建议和交接信息；发布批准与生产操作由有权限的人负责。

## 核心约束

- `PASS`、`FAIL`、`BLOCKED`、`NOT_RUN`、`UNKNOWN`、`STALE` 表示证据状态；缺少运行证据不能标 `PASS`。
- 每项评测和灰度结论绑定适用的模型、Prompt、数据集、judge 与 run 身份。
- 本 Skill 定义阶段与证据，不实现评测 Runner、不执行生产灰度，也不批准发布。
- 灰度或影子计划必须有来源可查的阈值、流量范围、观察窗口、负责人、停止条件和回滚路径。

## 按需加载

- 总是先阅读主 Prompt 与 `workflow.yaml` 了解生命周期契约。
- 用户需要证据包字段或阶段交接示例时，再读取 `references/`。
- 评测本 Skill 时阅读 `evals/`；真实模型评测需另行授权。

## 交付前自检

- [ ] 每个阶段都有进入证据、退出标准、负责人和状态。
- [ ] 评测与灰度产物绑定版本和运行身份。
- [ ] 缺失、过期和未运行证据均明确标记。
- [ ] 人工批准、生产执行、停止和回滚权限清楚。

## 常见误区

- 把计划中的评测写成已完成运行。
- 模型、Prompt、数据集、judge 或服务配置变化后复用旧门禁结果。
- 把灰度成功当作正式发布批准。
- 在这个 Host 无关的 Workflow 中编写 Runner 或硬编码特定供应商发布引擎。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-feature-release-workflow/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill ai-feature-release-workflow
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[ai-feature-release-workflow](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/ai-feature-release-workflow/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
