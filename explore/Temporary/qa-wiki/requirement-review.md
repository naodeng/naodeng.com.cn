---
title: "需求评审 ｜ Requirement Review"
description: "需求评审（Requirement Review）是缺陷前置预防中的关键术语，主要用于在开发前对需求一致性、完整性、可实现性进行协同审查，帮助团队在软件测试与发布中做出更稳定的质量决策。"
section: "R"
related:
  - software-testing
  - test-strategy
  - test-plan
  - test-design-specification
  - test-case
order: 10
---
# 需求评审 ｜ Requirement Review

<!-- TOC START -->
- [需求评审 ｜ Requirement Review](#需求评审--requirement-review)
- [关于需求评审的问题](#关于需求评审的问题)
  - [术语定义与适用边界](#术语定义与适用边界)
  - [方法框架与实施步骤](#方法框架与实施步骤)
  - [关键指标与口径说明](#关键指标与口径说明)
  - [工程落地建议](#工程落地建议)
  - [实施检查清单](#实施检查清单)
  - [基于 Google / Medium 的实践观察](#基于-google--medium-的实践观察)
  - [常见误区与改进建议](#常见误区与改进建议)
  - [相关词条](#相关词条)
  - [参考资料](#参考资料)
<!-- TOC END -->

需求域词条是质量前移的起点。需求可测性不清，后续测试执行越努力，返工越大。

## 关于需求评审的问题

## 术语定义与适用边界

### 什么是需求评审？

需求评审（Requirement Review）在软件测试语境里是“可执行方法”，不是“概念说明”。它的价值在于把质量决策结构化：谁提供证据、谁做判断、谁承担结果。

### 适用与不适用场景

- 适用：需要跨团队协同、需要可追溯决策、需要稳定交付节奏的项目。
- 不适用：输入数据极不完整、责任边界不清、流程 owner 缺失的场景。

## 方法框架与实施步骤

### 推荐实施框架

1. 先定义边界（范围、目标、阈值）。
2. 再统一输入（数据口径、证据来源）。
3. 执行过程中持续校验（偏差、阻塞、风险）。
4. 输出可执行结论（动作、owner、时间）。
5. 最终复盘并更新规则（而不是复述结果）。

### 输出物建议

- 决策记录：背景、证据、结论、owner、截止时间。
- 指标追踪：定义、口径、阈值、触发动作。
- 复盘条目：问题模式、根因、改进动作、验证结果。

## 关键指标与口径说明

### 核心指标

- 可测性问题数
- 需求返工率
- 验收争议率
- 开发中变更率

### 口径说明

- 指标需要统一时间窗口（例如按迭代/版本统计）。
- 指标需要固定样本边界（统计对象、环境、触发条件）。
- 指标需要绑定动作（告警、阻断、升级、复盘）。

建议在需求阶段就落地“可验证条件、边界条件、失败条件、验收证据”。

## 工程落地建议

- 需求评审中引入 QA 必选项。
- 用验收标准模板约束描述质量。
- 在开发前关闭关键可测性缺口。

## 实施检查清单

- [ ] 是否定义了清晰输入与输出。
- [ ] 是否定义了指标阈值与触发动作。
- [ ] 是否指定 owner 与完成时限。
- [ ] 是否留存了可审计的执行证据。
- [ ] 是否在版本结束后完成复盘。

## 基于 Google / Medium 的实践观察

- Google 与 Medium 的高质量内容通常都给出可执行步骤。
- 共识做法是“先试点，后扩展”，不做一次性大改。
- 失败案例多数来自口径不一致或无审批边界。

## 常见误区与改进建议

- 误区：把术语当模板填空  
  建议：术语是决策机制，不是排版格式。
- 误区：只追求覆盖率或速度  
  建议：必须同时衡量质量风险。
- 误区：缺少复盘闭环  
  建议：没有回看就没有持续改进。

## 相关词条

- [软件测试 ｜ Software Testing](/zh-cn/wiki/software-testing/)
- [测试策略 ｜ Test Strategy](/zh-cn/wiki/test-strategy/)
- [测试计划 ｜ Test Plan](/zh-cn/wiki/test-plan/)
- [测试设计规范 ｜ Test Design Specification](/zh-cn/wiki/test-design-specification/)
- [测试用例 ｜ Test Case](/zh-cn/wiki/test-case/)

## 参考资料

- [BABOK Overview](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/)
- [ISTQB Glossary](https://glossary.istqb.org/)
- [Atlassian Requirements](https://www.atlassian.com/agile/project-management/requirements)
- [Medium（术语检索）](https://medium.com/search?q=Requirement%20Review)
- [Wikipedia（术语检索）](https://zh.wikipedia.org/wiki/Special:Search?search=%E9%9C%80%E6%B1%82%E8%AF%84%E5%AE%A1)
