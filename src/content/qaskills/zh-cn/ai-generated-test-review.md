# AI 生成测试评审

作者：naodeng

## 元数据
- slug: ai-generated-test-review
- category: type
- hasEvals: true
- syncedAt: 2026-09-03
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/ai-generated-test-review/SKILL.md
- description: Use this skill when reviewing AI-generated unit, functional, API, or end-to-end tests for false confidence, weak assertions, missing risks, or unsafe test behavior; triggers include AI 生成测试评审, AI-generated test review, and functional test review.

## 何时使用

- 需要合入、修改或评估 AI 生成的单元、功能、API 或 E2E 测试。
- 测试看似通过，但断言、隔离、数据或覆盖价值值得怀疑。

## 执行流程

1. 先盘点当前范围内实际存在的测试类型与文件：单元、功能（functional testing）、API、E2E 或其组合；只审查已发现或用户明确指定的类型。
2. 再明确被测行为、风险和可用的需求或实现证据；缺失时列为待确认，不虚构结论。
3. 阅读 `prompts/review-test.md`，按严重度输出可行动的发现；每项关联具体测试、风险和修正方向。
4. 仅加载已发现层级的规则：单元测试、功能测试（functional testing）、API 或 E2E；跨层问题可加载多份。不要因存在多个规则文件而直接全局审查。
5. 将“阻断合入”的错误与可接受的改进分开；不要因风格偏好把有效测试判为问题。

## 核心约束

- 以可观察行为、失败信号和风险覆盖为准，不能只评价行覆盖率、测试名称或 mock 调用次数。
- 发现测试会在实现被破坏后仍通过时，明确说明最小破坏方式和需要加强的断言。
- 不建议为了绿灯删除断言、吞掉异常、放宽时间阈值或改生产逻辑以适应测试。
- 测试代码、日志和示例中不得泄露真实凭据、个人数据或生产写操作。

## 按需加载

- 每次评审必须读 `prompts/review-test.md`；其中的“测试类型路由”先于逐条评审。
- 识别伪测试、过度 mock 或无效断言时读 `references/fake-test-patterns.md`。
- 单元测试读 `references/unit-test-rules.md`；功能测试 / functional testing 读 `references/functional-test-rules.md`；API 测试读 `references/api-test-rules.md`；E2E 测试读 `references/e2e-test-rules.md`。
- 需要展示期望水准或反例时，读取 `examples/good/` 或 `examples/bad/` 的相关样例。

## 交付前自检

- [ ] 已说明审查范围、证据和待确认信息
- [ ] 发现按严重度排序，且每项有位置、影响和建议
- [ ] 已审查真实断言、负向路径、边界、隔离和可重复性
- [ ] 未把无证据的推测写成事实

## 原始 SKILL.md

```markdown
---
name: ai-generated-test-review
description: Use this skill when reviewing AI-generated unit, functional, API, or end-to-end tests for false confidence, weak assertions, missing risks, or unsafe test behavior; triggers include AI 生成测试评审, AI-generated test review, and functional test review.
---

# AI 生成测试评审（中文版）

审查 AI 生成的测试是否能证明真实行为，而不是只增加覆盖率或制造“全绿”的假象。

## 何时使用

- 需要合入、修改或评估 AI 生成的单元、功能、API 或 E2E 测试。
- 测试看似通过，但断言、隔离、数据或覆盖价值值得怀疑。

## 工作方式

1. 先盘点当前范围内实际存在的测试类型与文件：单元、功能（functional testing）、API、E2E 或其组合；只审查已发现或用户明确指定的类型。
2. 再明确被测行为、风险和可用的需求或实现证据；缺失时列为待确认，不虚构结论。
3. 阅读 `prompts/review-test.md`，按严重度输出可行动的发现；每项关联具体测试、风险和修正方向。
4. 仅加载已发现层级的规则：单元测试、功能测试（functional testing）、API 或 E2E；跨层问题可加载多份。不要因存在多个规则文件而直接全局审查。
5. 将“阻断合入”的错误与可接受的改进分开；不要因风格偏好把有效测试判为问题。

## 核心约束

- 以可观察行为、失败信号和风险覆盖为准，不能只评价行覆盖率、测试名称或 mock 调用次数。
- 发现测试会在实现被破坏后仍通过时，明确说明最小破坏方式和需要加强的断言。
- 不建议为了绿灯删除断言、吞掉异常、放宽时间阈值或改生产逻辑以适应测试。
- 测试代码、日志和示例中不得泄露真实凭据、个人数据或生产写操作。

## 按需加载

- 每次评审必须读 `prompts/review-test.md`；其中的“测试类型路由”先于逐条评审。
- 识别伪测试、过度 mock 或无效断言时读 `references/fake-test-patterns.md`。
- 单元测试读 `references/unit-test-rules.md`；功能测试 / functional testing 读 `references/functional-test-rules.md`；API 测试读 `references/api-test-rules.md`；E2E 测试读 `references/e2e-test-rules.md`。
- 需要展示期望水准或反例时，读取 `examples/good/` 或 `examples/bad/` 的相关样例。

## 交付前自检

- [ ] 已说明审查范围、证据和待确认信息
- [ ] 发现按严重度排序，且每项有位置、影响和建议
- [ ] 已审查真实断言、负向路径、边界、隔离和可重复性
- [ ] 未把无证据的推测写成事实
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/ai-generated-test-review/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill ai-generated-test-review
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[ai-generated-test-review](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/ai-generated-test-review/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
