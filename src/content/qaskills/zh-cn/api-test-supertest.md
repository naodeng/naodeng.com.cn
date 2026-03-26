# api-test-supertest

作者：naodeng

## 中文名称
api-test-supertest

## 目录
- [中文名称](#中文名称)
- [快速介绍](#快速介绍)
- [使用说明](#使用说明)
- [说明汇总](#说明汇总)
  - [When 定场景：触发场景，用户何时使用](#when-定场景触发场景用户何时使用)
  - [What 立目标：具体成果，解决什么问题](#what-立目标具体成果解决什么问题)
  - [How 理规则：步骤逻辑，怎么执行](#how-理规则步骤逻辑怎么执行)
  - [Reference 给示例：正反例，输入---输出](#reference-给示例正反例输入---输出)
  - [Limits 画边界：明确限制，什么不做](#limits-画边界明确限制什么不做)
- [安装](#安装)
- [来源](#来源)
- [同步日期](#同步日期)

## 快速介绍
- 适合谁：接口测试工程师、后端测试和自动化同学。
- 何时使用：接口改动可能影响契约、鉴权、数据结构或上下游集成。
- 怎么使用：先定接口测试矩阵，再执行契约与行为验证，最后输出可复现问题证据。


## 使用说明
1. 先完成 `api-test-supertest` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 带接口背景触发，例如：“使用 `api-test-supertest` 覆盖 staging 的 /orders 和 /payments。”
4. 提供鉴权和数据前提，并要求输出测试矩阵、断言项、缺陷证据格式。
5. 分两轮执行：先冒烟，再异常/边界回归。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 接口改动可能影响契约、鉴权、数据结构或异常处理。
- 前端未就绪但后端已可测，需要先做接口质量把关。
- 发版前要确认上下游集成风险。

### What 立目标：具体成果，解决什么问题
- 使用基于 Supertest 的 Node.js 接口校验完成关键接口验证。
- 发现契约不一致、状态码漂移、数据完整性问题。
- 为接口可发布性和集成安全提供证据。

### How 理规则：步骤逻辑，怎么执行
1. 按业务关键链路确定接口测试范围。
2. 设计测试矩阵：主流程、参数校验、鉴权、幂等、边界数据。
3. 使用稳定数据与隔离环境执行测试。
4. 校验状态码、响应结构、关键字段和副作用。
5. 记录失败请求、复现条件和关联日志。
6. 汇总接口质量结论：通过率、主要风险、后续动作。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 接口：`POST /orders`
- 规则：会员券、库存锁定、超时回滚

输出：
- 覆盖正常下单、无效券、库存不足、重放保护
- 发现支付超时后未正确回滚
- 建议修复前阻塞发版

### 反例（输入 -> 输出）
输入：
- “把订单接口都测一遍”

输出（问题）：
- 只校验 200 返回，没有结构和异常路径验证
- 字段类型变更这类破坏性问题会漏掉

### Limits 画边界：明确限制，什么不做
- 不在环境和数据前提不清晰时开测。
- 不仅靠状态码判断接口正确性。
- 不忽略写接口的副作用验证。
- 不掩盖由数据不稳定导致的假失败。
- 不在无契约校验时宣称“可安全集成”。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/api-test-supertest/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[api-test-supertest](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/api-test-supertest/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
