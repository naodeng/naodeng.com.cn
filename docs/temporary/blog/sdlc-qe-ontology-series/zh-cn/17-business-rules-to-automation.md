---
title: 从业务规则到自动化测试执行：把质量循环接入日常工作
description: 以订单支付规则为例，说明如何形成测试义务、审核用例、自动执行并保存证据，再将结果带回规则与模型。
series: 本体驱动的软件研发与质量工程
seriesOrder: 17
status: draft
repoVersion: v0.19
language: zh-cn
---

# 从业务规则到自动化测试执行：把质量循环接入日常工作

业务规则写进需求文档后，还要形成可执行的验证，团队才能通过测试结果核对系统行为是否符合规则。测试用例生成后也不代表规则已验证；用例需要经过审核、自动执行、结果核验和证据归档。

## 重点：让质量循环进入每次变更

这篇文章的核心流程是：

```mermaid
flowchart LR
  Rule[Approved business rule] --> Obligation[Test obligation]
  Obligation --> Case[Reviewed test case]
  Case --> Run[Automated execution]
  Run --> Evidence[Traceable evidence]
  Evidence --> Review[Human quality review]
  Review -->|update rule, case, or model| Rule
```

执行结果可能暴露规则歧义、测试数据不足、实现缺陷或本体映射错误。团队应把这些发现带回规则、用例或模型，再运行相关回归。这一循环应进入 PR 和发布前的日常流程。

图中从业务规则到义务、用例、执行和证据表达工作顺序。当前 v0.19 本体包含 `TestCase`、`TestObligation`、`TestExecution` 和 `TestEvidence` 等概念；它没有把业务规则到义务的关系作为基线定义。实现前需为这段映射设计并评审扩展。

## 先把业务规则变成可验证义务

以「重复提交相同幂等键不得创建重复支付交易」为例。

| 环节 | 需要明确的内容 | 示例或待确认项 |
|---|---|---|
| 规则 | 业务上必须成立什么 | 相同幂等键不得创建重复交易 |
| 测试义务 | 必须取得什么验证证据 | 重复请求最终只对应一笔成功交易 |
| 测试设计 | 如何触发并观察结果 | 顺序提交、并发提交；检查交易记录与响应 |
| 自动化边界 | 哪部分适合脚本执行 | API 请求、数据库只读断言或受控测试事件 |
| 证据 | 如何复核运行结果 | 用例版本、构建、环境、时间、状态和报告摘要 |

“并发请求最终只创建一笔交易”是示范预期。真实系统的并发契约、响应码、事务边界和存储检查方式必须依据接口与业务规则确认。不要把示例直接当成可运行脚本。

## 给新手的实际使用步骤

1. 选一条已经批准的业务规则，不要先让 AI 一次生成整套支付测试。
2. 提供规则 ID、规则原文、来源版本，以及相关状态图或 API 契约。
3. 请 AI 先产出测试义务和待确认问题，再产出候选用例。
4. 由测试人员和业务负责人审核前置条件、动作、预期结果和测试数据。
5. 将审核通过的用例实现为 API、UI 或组件级自动化测试。
6. 在 CI 中执行，并保存构建、环境、时间、结果和证据位置。
7. 质量人员检查失败、跳过、证据缺失和规则冲突，将结论写回需求或测试模型。

候选用例应使用固定字段，方便人工审核，也方便后续映射到测试管理工具：

```text
Case ID:
Source rule ID and version:
Test obligation ID:
Preconditions:
Actions:
Expected outcome:
Test data:
Automation level:
Evidence to retain:
Unresolved assumptions:
```

## 示例：将义务写成 Gherkin 场景

以下场景是供 review 的伪代码。`@confirmed` 只有在并发语义和测试数据获得业务确认后才能添加。

```gherkin
@draft @business-rule:BR-IDEMPOTENCY
Scenario: Repeating a payment request does not create a duplicate transaction
  Given an order is awaiting payment
  And the payment request has an approved idempotency key
  When the same request is submitted twice
  Then the payment state follows the approved idempotency contract
  And no duplicate successful transaction is recorded
```

这段 Gherkin 没有指定 HTTP 状态码，也没有声明两次响应必须完全相同，因为这些行为需要由真实契约定义。自动化实现应把断言对应到已批准的规则，而不是照抄模型生成的句子。

## 把运行结果变成可审查证据

| 执行状态 | 记录要求 | 对质量判断的影响 |
|---|---|---|
| Passed | 保存运行版本、环境、用例版本和结果摘要 | 仍需检查用例是否验证目标义务 |
| Failed | 保存失败断言、日志和可重现输入 | 可形成缺陷线索，人工确认后再归因 |
| Skipped | 保存跳过原因和适用范围 | 不能当作通过证据 |
| Not run | 标明未执行的构建与用例 | 当前没有执行证据 |
| Unknown | 说明缺少字段、数据或来源 | 不应自动折算为通过或失败 |

v0.19 使用 `TestExecution executes TestCase` 表示执行与用例的关联，并通过 `TestEvidence prov:wasGeneratedBy TestExecution` 表示证据来源。报告还需要明确构建、环境和时间等信息是否满足团队制定的证据资格规则。

## 日常质量循环如何接到 PR 和发布

| 时点 | 自动化可以做什么 | 人工需要决定什么 |
|---|---|---|
| 需求或规则更新 | 找出关联义务和测试候选 | 确认规则含义和预期结果 |
| PR 创建或更新 | 根据变更关系选择回归范围 | 确认映射是否完整、候选风险是否相关 |
| CI 执行 | 运行审核过的自动化用例并收集日志 | 处理失败、跳过、环境异常和缺失证据 |
| 发布准备 | 汇总当前构建的义务与证据状态 | 根据风险政策作出 Go/No-Go 决定 |
| 复盘 | 将缺陷和逃逸问题关联回规则、模型和测试 | 决定更新规则、补用例或调整验证策略 |

质量循环有两个方向：变更发生时，规则帮助选择验证；执行和生产反馈出现后，结果又推动规则、用例和追踪关系更新。只做前半段会留下过期模型；只做后半段则难以把既有知识用于变更审查。

## 最佳实践

- 一次从一条规则和一个义务开始，先把端到端链路跑通。
- 把模型生成内容标成候选；审核通过后才进入自动化库。
- 为每次执行绑定构建、环境和用例版本，并保留原始结果。
- 将失败、跳过、未运行和未知分别处理，不合并成简单的通过率。
- 在 PR 和发布复盘中更新规则、测试义务、用例与证据映射。
- 自动化能执行断言，但业务预期和发布决定仍由有责任的人确认。

## FAQ

### 可以让 AI 直接把所有规则写成自动化代码吗？

不建议跳过审核。AI 可以生成候选场景或脚本框架，但规则预期、环境、数据和副作用需要由团队确认。未审核代码不能代表业务验证已经完成。

### 有了自动化测试，测试义务就满足了吗？

不一定。还需检查用例断言是否覆盖义务、目标版本是否执行，以及结果和来源是否满足证据政策。

### 测试失败后应该直接修改业务规则吗？

先定位失败原因。它可能来自产品缺陷、测试代码错误、环境问题或规则本身存在歧义。确认原因后再更新对应记录。

## 三个理解检查题

1. AI 生成的用例在审核前可以计为有效覆盖吗？A. 可以；B. 不可以；C. 只要格式正确就可以。
2. CI 中的 `Skipped` 应怎样记录？A. 当作通过；B. 保留跳过原因，不能当成通过证据；C. 删除记录。
3. 质量循环中执行和复盘的作用是什么？A. 只生成更多报告；B. 将运行发现带回规则、测试和模型；C. 自动替代发布审批。

答案：1-B，2-B，3-B。

## 小结

自动化执行让经过审核的测试义务能在日常变更中反复验证。每次运行留下的证据和失败原因，都应回到规则、用例和模型审查中。这样，业务规则才不会停留在一次性的提示词或文档里。

## 系列导航

- 上一篇：`16-find-business-test-gaps.md`
- 下一篇：`18-build-a-domain-aware-qa-agent.md`

## 参考资料

- W3C PROV-O: https://www.w3.org/TR/prov-o/
- W3C SHACL: https://www.w3.org/TR/shacl/
- 系列实验模型 v0.19：`01_project/ontology/baseline.ttl`、`01_project/examples/delivery-flow.ttl`
- 本文 Gherkin 为说明格式的伪代码，未连接或运行于具体自动化框架。
