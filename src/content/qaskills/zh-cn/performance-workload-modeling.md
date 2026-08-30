# 性能负载建模

作者：naodeng

## 元数据
- slug: performance-workload-modeling
- category: type
- hasEvals: true
- syncedAt: 2026-08-30
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/performance-workload-modeling/SKILL.md
- description: Use this skill when you need to model realistic performance workload, traffic, and acceptance assumptions; triggers include 性能负载建模 and performance workload modeling.

## 何时使用

- 需要把生产流量和业务行为转成可复现的性能测试负载模型。
- 需要对现有方案、结果或证据做风险评审，并形成可执行改进项。
- 输入不完整，但仍需先给出带假设和信息缺口的可用初版。

## 执行流程

1. 先阅读并遵循 `prompts/performance-workload-modeling.md` 的输入、执行规则、最低覆盖清单和输出顺序。
2. 补充真正影响判断的范围、环境、版本、限制、证据和成功标准。
3. 先做输入审计，再区分已确认事实、合理假设和待确认问题。
4. 按风险和证据强度排序，产出可直接执行、评审或验证的结果。
5. 信息不足时不要停在提问：先交付受限初版，并说明哪些结论暂不能成立。

## 核心约束

- 不要直接把在线用户数当并发数
- 区分开放与封闭模型
- 缺少生产数据时用可调整区间
- 不编造输入中不存在的系统行为、字段、数据、指标或根因。
- 关键结论必须关联证据；证据不足时标记为假设并给出验证方法。
- 优先级必须说明业务影响、发生可能性或可探测性依据。

## 交付前自检

- [ ] 已覆盖：交易模型、到达率、并发、思考时间、峰值突发、数据分布、缓存预热、依赖约束。
- [ ] 已区分事实、假设、缺口和建议。
- [ ] 高风险项有明确优先级、证据、负责人或下一步。
- [ ] 输出包含可验证的判断标准，而非泛泛而谈。
- [ ] 未执行未经授权的生产写操作或破坏性动作。

## 常见误区

- 只列检查点，不说明输入条件、预期结果或证据。
- 把所有事项都标为高优先级，失去取舍价值。
- 用工具名或通用理论替代领域判断。
- 输入不完整时直接拒绝，或反过来假装结论已经确定。

## 原始 SKILL.md

```markdown
---
name: performance-workload-modeling
description: Use this skill when you need to model realistic performance workload, traffic, and acceptance assumptions; triggers include 性能负载建模 and performance workload modeling.
---

# 性能负载建模（中文版）

## 何时使用

- 需要把生产流量和业务行为转成可复现的性能测试负载模型。
- 需要对现有方案、结果或证据做风险评审，并形成可执行改进项。
- 输入不完整，但仍需先给出带假设和信息缺口的可用初版。

## 输出格式选项

- 默认输出 Markdown，适合评审、执行和持续补充。
- 用户要求表格、CSV、JSON 或工单格式时，保留同样的风险、证据、优先级和边界字段。
- 若输出会进入自动化流程，先确认字段 schema、枚举值和必填项。

## 如何使用

1. 先阅读并遵循 `prompts/performance-workload-modeling.md` 的输入、执行规则、最低覆盖清单和输出顺序。
2. 补充真正影响判断的范围、环境、版本、限制、证据和成功标准。
3. 先做输入审计，再区分已确认事实、合理假设和待确认问题。
4. 按风险和证据强度排序，产出可直接执行、评审或验证的结果。
5. 信息不足时不要停在提问：先交付受限初版，并说明哪些结论暂不能成立。

## 参考文件

- 每次执行必须读取 `prompts/performance-workload-modeling.md`；它是本 Skill 的完整执行规范。
- 需要评测或回归本 Skill 时，读取 `evals/eval.yaml` 与匹配的 `evals/cases/` 用例。
- 只有目录实际存在且任务需要时，才读取 `references/`、`examples/`、`scripts/` 或 `output-formats.md`，不要假设不存在的资产。

## 核心约束

- 不要直接把在线用户数当并发数
- 区分开放与封闭模型
- 缺少生产数据时用可调整区间
- 不编造输入中不存在的系统行为、字段、数据、指标或根因。
- 关键结论必须关联证据；证据不足时标记为假设并给出验证方法。
- 优先级必须说明业务影响、发生可能性或可探测性依据。

## 交付前自检

- [ ] 已覆盖：交易模型、到达率、并发、思考时间、峰值突发、数据分布、缓存预热、依赖约束。
- [ ] 已区分事实、假设、缺口和建议。
- [ ] 高风险项有明确优先级、证据、负责人或下一步。
- [ ] 输出包含可验证的判断标准，而非泛泛而谈。
- [ ] 未执行未经授权的生产写操作或破坏性动作。

## 常见误区

- 只列检查点，不说明输入条件、预期结果或证据。
- 把所有事项都标为高优先级，失去取舍价值。
- 用工具名或通用理论替代领域判断。
- 输入不完整时直接拒绝，或反过来假装结论已经确定。

## 最佳实践

- 从最可能造成业务损失、安全问题或发布阻塞的路径开始。
- 用最小可验证实验缩小不确定性，并记录复现条件。
- 让输出能够被另一位工程师直接执行和复核。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/performance-workload-modeling/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill performance-workload-modeling
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[performance-workload-modeling](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/performance-workload-modeling/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
