# WebdriverIO UI 自动化测试

作者：naodeng

## 元数据
- slug: ui-test-webdriverio
- category: type
- hasEvals: true
- syncedAt: 2026-11-25
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/ui-test-webdriverio/SKILL.md
- description: Use this skill when you need to design WebdriverIO suites with config, services, runner behavior, Page Objects, capabilities, and reporters; triggers include WebdriverIO UI testing, UI automation testing, and ui-test-webdriverio.

## 何时使用

- 需要输出面向 WebdriverIO UI 自动化测试工作流的测试方案或自动化设计。
- 项目已经使用相关工具，或希望得到可直接落地的工具专项方案。

## 执行流程

1. 打开 `prompts/ui-test-webdriverio.md`，将其作为主提示词。
2. 补充真实项目上下文：范围、环境、约束、风险、依赖和期望交付物。
3. 如果输入不完整，先返回可用的第一版，并标出缺失信息和假设。

## 常见误区

- 不要在范围模糊且缺少上下文时直接给泛泛方案。
- 不要把所有模块和场景视为同等重要。
- 不要跳过假设和缺失信息说明。

## 原始 SKILL.md

```markdown
---
name: ui-test-webdriverio
description: Use this skill when you need to design WebdriverIO suites with config, services, runner behavior, Page Objects, capabilities, and reporters; triggers include WebdriverIO UI testing, UI automation testing, and ui-test-webdriverio.
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

# WebdriverIO UI 自动化测试

**English version:** see the matching English skill.

## 何时使用

- 需要输出面向 WebdriverIO UI 自动化测试工作流的测试方案或自动化设计。
- 项目已经使用相关工具，或希望得到可直接落地的工具专项方案。

## 输出格式选项

默认使用 Markdown。除非请求明确要求其他格式，不额外扩展输出格式。

## 如何使用

1. 打开 `prompts/ui-test-webdriverio.md`，将其作为主提示词。
2. 补充真实项目上下文：范围、环境、约束、风险、依赖和期望交付物。
3. 如果输入不完整，先返回可用的第一版，并标出缺失信息和假设。

## 参考文件

- 校准领域结果、正确对照或证据缺口时，读取 [references/domain-decision-example.md](references/domain-decision-example.md) 的脱敏输入、逐项预期与复算依据。

- `prompts/ui-test-webdriverio.md`：本技能主提示词。
- `references/framework-spec.md`：工具专项结构和覆盖说明。
- `references/setup-and-ci.md`：安装、执行和 CI 说明。
- `examples/sample-context.md`：示例请求上下文。
- `scripts/run-tests.sh`：轻量本地执行入口。

## 领域执行要点

1. 固定WebdriverIO/Node、runner/framework、browser/driver/service版本组合；核对capabilities、services与实际安装包、配置及远端支持，不从名称假定兼容。
2. 生成该版本的async spec/BDD步骤，所有异步命令await；等待以可观察业务状态和元素条件，原命令错误不得catch吞成通过。
3. 每worker独立session/身份/业务键，生命周期hooks负责初始化和清理；平台/浏览器差异仅覆盖项目支持矩阵，缺矩阵标未知。
4. 失败证据含testID、worker/session/capability、版本、URL、截图/日志和原堆栈；不兼容配置CONFIG_ERROR、业务断言失败与环境错误分列，均需可诊断并传播至CI。

## 常见误区

- 不要在范围模糊且缺少上下文时直接给泛泛方案。
- 不要把所有模块和场景视为同等重要。
- 不要跳过假设和缺失信息说明。

## 最佳实践

- 从 prompt 文件开始，只补充真正影响结果的上下文。
- 输出保持风险驱动，并能直接用于执行或评审。
- 信息不完整时，先给可用版本，再标清缺口。

- 验证生成资产的业务断言、失败传播或隔离时，读取 [evals/fixtures/checkout-app/README.md](evals/fixtures/checkout-app/README.md)，使用本地good/bug/timeout对照；仅在明确运行时执行。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ui-test-webdriverio/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill ui-test-webdriverio
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[ui-test-webdriverio](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/ui-test-webdriverio/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
