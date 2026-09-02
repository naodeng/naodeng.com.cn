# 测试技能路由

作者：naodeng

## 元数据
- slug: discover-testing
- category: workflow
- hasEvals: true
- syncedAt: 2026-09-02
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/discover-testing/SKILL.md
- description: Use this skill when you need to route a request to the right testing skill before execution; triggers include 测试技能路由、discover testing and which testing skill.

## 何时使用

- 需要在执行前先判断应该用哪个测试 skill。
- 一个请求同时涉及多个测试方向或多个阶段。

## 执行流程

1. 先读用户请求，识别能力阶段（Core QA / Engineering QA / Production Quality / AI Native QA）与主要测试目标。
2. 阅读并遵循 `prompts/` 路由规范：先选 1 个主 skill；仅必要时再补 1 个辅助 skill。
3. 输出路由结论后，把请求交给目标 skill；不要在本 skill 内把整件事执行完。

## 核心约束

- 一次只推荐少量 skill，避免菜单式罗列。
- 目标 skill 已经很明显时，直接指出，不要无效绕路。
- 路由结果要可执行：写清推荐 skill 名与理由。
- AI for QA 使用 `ai-assisted-testing`；Testing for AI 属于 AI Native QA。路线图中的未来 Skill 未安装前，不得把它们当作可调用主推荐。

## 按需加载

- 产出前必须阅读并遵循 `prompts/discover-testing.md`（最低覆盖清单、输出结构、质量要求）。
- 需要 Excel/CSV/JSON/Word 等格式时：读 `output-formats.md`，并按用户格式要求输出。
- 需要套用现成模板时：读 `output-templates/` 中匹配的模板，不要自创冲突结构。
- 需要格式转换或辅助校验时：优先使用 `scripts/` 中已有脚本，而不是重写一遍。
- 需要评测/回归本 skill 时：使用 `evals/`，并用 skill-up 校验与运行。
- 需要步骤与提示词映射时：读 `reference.md`。

## 交付前自检

- [ ] 已遵循主提示词的输出结构
- [ ] 最低覆盖关注：主要目标、最适合的主 skill、可选辅助 skill、为什么这么选、下一步怎么接着做（细节以主提示词为准）
- [ ] 已覆盖最低清单，或标明为何省略
- [ ] 高风险项有明确优先级
- [ ] 未编造用户未提供的细节
- [ ] 假设与信息缺口已标明

## 常见误区

- 不要一次推荐很多 skill。
- 不要把技能选择写成具体测试执行。
- 不要在信息不足时假装已经选定且可落地。

## 原始 SKILL.md

```markdown
---
name: discover-testing
description: Use this skill when you need to route a request to the right testing skill before execution; triggers include 测试技能路由、discover testing and which testing skill.
---

# 测试技能路由（中文版）

**英文版：** 见对应英文技能。

## 何时使用

- 需要在执行前先判断应该用哪个测试 skill。
- 一个请求同时涉及多个测试方向或多个阶段。

## 执行流程

1. 先读用户请求，识别能力阶段（Core QA / Engineering QA / Production Quality / AI Native QA）与主要测试目标。
2. 阅读并遵循 `prompts/` 路由规范：先选 1 个主 skill；仅必要时再补 1 个辅助 skill。
3. 输出路由结论后，把请求交给目标 skill；不要在本 skill 内把整件事执行完。

## 核心约束

- 一次只推荐少量 skill，避免菜单式罗列。
- 目标 skill 已经很明显时，直接指出，不要无效绕路。
- 路由结果要可执行：写清推荐 skill 名与理由。
- AI for QA 使用 `ai-assisted-testing`；Testing for AI 属于 AI Native QA。路线图中的未来 Skill 未安装前，不得把它们当作可调用主推荐。

## 按需加载

- 产出前必须阅读并遵循 `prompts/discover-testing.md`（最低覆盖清单、输出结构、质量要求）。
- 需要 Excel/CSV/JSON/Word 等格式时：读 `output-formats.md`，并按用户格式要求输出。
- 需要套用现成模板时：读 `output-templates/` 中匹配的模板，不要自创冲突结构。
- 需要格式转换或辅助校验时：优先使用 `scripts/` 中已有脚本，而不是重写一遍。
- 需要评测/回归本 skill 时：使用 `evals/`，并用 skill-up 校验与运行。
- 需要步骤与提示词映射时：读 `reference.md`。

## 交付前自检

- [ ] 已遵循主提示词的输出结构
- [ ] 最低覆盖关注：主要目标、最适合的主 skill、可选辅助 skill、为什么这么选、下一步怎么接着做（细节以主提示词为准）
- [ ] 已覆盖最低清单，或标明为何省略
- [ ] 高风险项有明确优先级
- [ ] 未编造用户未提供的细节
- [ ] 假设与信息缺口已标明

## 常见误区

- 不要一次推荐很多 skill。
- 不要把技能选择写成具体测试执行。
- 不要在信息不足时假装已经选定且可落地。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill discover-testing
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[discover-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/discover-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
