# 授权测试

作者：naodeng

## 元数据
- slug: authorization-testing
- category: type
- hasEvals: true
- syncedAt: 2026-09-15
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/authorization-testing/SKILL.md
- description: Use this skill when you need evidence-bounded authorization-testing analysis and validation preparation; triggers include 授权测试 and authorization-testing.

## 何时使用

- 需要围绕主体-资源-动作关系、权限边界、拒绝路径和委派设计安全测试或审查准备。
- 需要在资料不完整时交付可复核初版，并明确假设、缺口和 Human 决策。
- 需要区分静态安全证据、计划中的验证和已发生的执行。

## 执行流程

1. 先读取 prompts/authorization-testing.md，执行输入审计、覆盖清单和输出合同。
2. 提取范围、环境、版本、角色、数据、依赖、限制和可用证据。
3. 围绕主体-资源-动作关系、权限边界、拒绝路径和委派建立可复核场景，区分已知事实、推断和候选验证。
4. 为每项记录影响、优先级、责任角色、关闭条件和验证方法。
5. 信息不足时交付受限初版，不把风险假设写成漏洞确认或安全通过。

## 核心约束

- 只分析主体-资源-动作关系、权限边界、拒绝路径和委派，不登录系统、不调用真实 API、不读取凭据。
- 不编造漏洞、攻击成功、修复完成、扫描覆盖或安全通过结论。
- 缺少证据时标记待确认、blocked 或 unassessed，并给出隔离验证方法。
- 风险接受、例外授权和发布判断必须留给 Human。

## 交付前自检

- [ ] 已完成 known、missing、conflicting、stale、out_of_scope、assumptions 审计。
- [ ] 已覆盖授权决策、触发条件、预期关注点和证据状态。
- [ ] 已分离事实、推断、建议、信息缺口和 Human 决策。
- [ ] 未把静态发现或 dry-run 写成真实攻击、漏洞不存在或发布批准。

## 常见误区

- 把泛化安全审查或 API 合同检查当成授权测试的完整替代。
- 只列攻击名，不写适用范围、证据、预期结果和关闭条件。
- 信息不足时直接判定安全，或为了完整性读取真实凭据。

## 原始 SKILL.md

```markdown
---
name: authorization-testing
description: Use this skill when you need evidence-bounded authorization-testing analysis and validation preparation; triggers include 授权测试 and authorization-testing.
---

# 授权测试（中文版）

## 何时使用

- 需要围绕主体-资源-动作关系、权限边界、拒绝路径和委派设计安全测试或审查准备。
- 需要在资料不完整时交付可复核初版，并明确假设、缺口和 Human 决策。
- 需要区分静态安全证据、计划中的验证和已发生的执行。

## 输出格式选项

- 默认输出 Markdown，按安全风险、证据和优先级组织。
- 用户要求表格、CSV、JSON 或工单格式时，保留相同的发现字段和证据状态。
- 输出进入自动化流程前，先确认 schema、枚举值和必填字段。

## 如何使用

1. 先读取 prompts/authorization-testing.md，执行输入审计、覆盖清单和输出合同。
2. 提取范围、环境、版本、角色、数据、依赖、限制和可用证据。
3. 围绕主体-资源-动作关系、权限边界、拒绝路径和委派建立可复核场景，区分已知事实、推断和候选验证。
4. 为每项记录影响、优先级、责任角色、关闭条件和验证方法。
5. 信息不足时交付受限初版，不把风险假设写成漏洞确认或安全通过。

## 参考文件

- 每次执行必须读取 prompts/authorization-testing.md。
- 需要评测时读取 evals/eval.yaml 和匹配的 evals/cases/。
- 只有目录存在且任务需要时，才读取 references/、examples/、scripts/ 或 output-formats.md。

## 核心约束

- 只分析主体-资源-动作关系、权限边界、拒绝路径和委派，不登录系统、不调用真实 API、不读取凭据。
- 不编造漏洞、攻击成功、修复完成、扫描覆盖或安全通过结论。
- 缺少证据时标记待确认、blocked 或 unassessed，并给出隔离验证方法。
- 风险接受、例外授权和发布判断必须留给 Human。

## 交付前自检

- [ ] 已完成 known、missing、conflicting、stale、out_of_scope、assumptions 审计。
- [ ] 已覆盖授权决策、触发条件、预期关注点和证据状态。
- [ ] 已分离事实、推断、建议、信息缺口和 Human 决策。
- [ ] 未把静态发现或 dry-run 写成真实攻击、漏洞不存在或发布批准。

## 常见误区

- 把泛化安全审查或 API 合同检查当成授权测试的完整替代。
- 只列攻击名，不写适用范围、证据、预期结果和关闭条件。
- 信息不足时直接判定安全，或为了完整性读取真实凭据。

## 最佳实践

- 从高影响、难探测、权限敏感或数据敏感路径开始。
- 使用脱敏材料、最小权限、隔离环境和可回滚验证建议。
- 让另一位工程师能根据来源和边界复核每个安全结论。
```

## 安装

### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/authorization-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。

## 调用示例

```text
@skill authorization-testing
结合当前项目上下文，按该技能的要求给出可执行结果。
```

## 来源
- 原始技能：[authorization-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/authorization-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
