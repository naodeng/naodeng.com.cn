# Postman API 测试

作者：naodeng

## 元数据
- slug: api-test-postman
- category: type
- hasEvals: true
- syncedAt: 2026-08-30
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/api-test-postman/SKILL.md
- description: Use this skill when you need to design Postman collections, environments, scripts, and Newman-ready API regression plans; triggers include Postman API testing, API testing, and api-test-postman.

## 何时使用

- 需要输出面向 Postman API 测试工作流的测试方案或自动化设计。
- 项目已经使用相关工具，或希望得到可直接落地的工具专项方案。

## 执行流程

1. 打开 `prompts/api-test-postman.md`，将其作为主提示词。
2. 补充真实项目上下文：范围、环境、约束、风险、依赖和期望交付物。
3. 如果输入不完整，先返回可用的第一版，并标出缺失信息和假设。

## 常见误区

- 不要在范围模糊且缺少上下文时直接给泛泛方案。
- 不要把所有模块和场景视为同等重要。
- 不要跳过假设和缺失信息说明。

## 原始 SKILL.md

```markdown
---
name: api-test-postman
description: Use this skill when you need to design Postman collections, environments, scripts, and Newman-ready API regression plans; triggers include Postman API testing, API testing, and api-test-postman.
---

# Postman API 测试

**English version:** see the matching English skill.

## 何时使用

- 需要输出面向 Postman API 测试工作流的测试方案或自动化设计。
- 项目已经使用相关工具，或希望得到可直接落地的工具专项方案。

## 输出格式选项

默认使用 Markdown。除非请求明确要求其他格式，不额外扩展输出格式。

## 如何使用

1. 打开 `prompts/api-test-postman.md`，将其作为主提示词。
2. 补充真实项目上下文：范围、环境、约束、风险、依赖和期望交付物。
3. 如果输入不完整，先返回可用的第一版，并标出缺失信息和假设。

## 参考文件

- `prompts/api-test-postman.md`：本技能主提示词。
- `references/framework-spec.md`：工具专项结构和覆盖说明。
- `references/setup-and-ci.md`：安装、执行和 CI 说明。
- `examples/sample-context.md`：示例请求上下文。
- `scripts/run-tests.sh`：轻量本地执行入口。

## 常见误区

- 不要在范围模糊且缺少上下文时直接给泛泛方案。
- 不要把所有模块和场景视为同等重要。
- 不要跳过假设和缺失信息说明。

## 最佳实践

- 从 prompt 文件开始，只补充真正影响结果的上下文。
- 输出保持风险驱动，并能直接用于执行或评审。
- 信息不完整时，先给可用版本，再标清缺口。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-postman/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill api-test-postman
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[api-test-postman](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/api-test-postman/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
