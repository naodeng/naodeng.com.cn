---
title: "测试章程 ｜ Test Charter"
description: "测试章程（Test Charter）是会话驱动测试管理中的关键术语，主要用于用于定义一次探索性测试会话的范围、目标、时间盒和关注风险点，帮助团队在软件测试与发布中做出更稳定的质量决策。"
section: "T"
related:
  - software-testing
  - test-strategy
  - test-plan
order: 1
---
# 测试章程 ｜ Test Charter

<!-- TOC START -->
- [测试章程 ｜ Test Charter](#测试章程--test-charter)
- [关于测试章程的问题](#关于测试章程的问题)
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

这个词条不只是“定义是什么”，而是“在项目里怎么做，做到什么程度算合格”。如果没有方法和口径，术语本身没有价值。

## 关于测试章程的问题

## 术语定义与适用边界

### 什么是测试章程？

测试章程（Test Charter）在软件测试语境里是“可执行方法”，不是“概念说明”。它的价值在于把质量决策结构化：谁提供证据、谁做判断、谁承担结果。

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

- 准确性指标
- 效率指标
- 风险指标
- 稳定性指标

### 口径说明

- 指标需要统一时间窗口（例如按迭代/版本统计）。
- 指标需要固定样本边界（统计对象、环境、触发条件）。
- 指标需要绑定动作（告警、阻断、升级、复盘）。

建议至少保留“版本、环境、样本量、时间窗口、责任人”五个维度，这样后续复盘才可比。

## 工程落地建议

- 把规则写进流水线而不是停留在文档。
- 将每次结论映射到明确动作。
- 每个迭代只优化少量关键指标，保持稳定。

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

## 参考资料

- [ISTQB Glossary](https://glossary.istqb.org/)
- [ISO/IEC/IEEE 29119 (overview)](https://www.iso.org/standard/45142.html)
- [IEEE 829（legacy）](https://standards.ieee.org/standard/829-2008.html)
- [Medium（术语检索）](https://medium.com/search?q=Test%20Charter)
- [Wikipedia（术语检索）](https://zh.wikipedia.org/wiki/Special:Search?search=%E6%B5%8B%E8%AF%95%E7%AB%A0%E7%A8%8B)

## 基于链接抓取的补充证据（自动）

- 抓取链接总数：35
- 抓取成功：25
- 抓取失败：10

### 高价值证据摘录（按来源优先级）

- [Exploratives Testen – Wikipedia](https://de.wikipedia.org/wiki/Exploratives_Testen)
  - 摘要：Exploratives Testen ist ein Ansatz zum Testen von Software , der als gleichzeitiges Lernen, Testdesign und Testausführung beschrieben wird. Cem Kaner, der den Begriff 1984 geprägt hat &#91; 1 &#93; , definiert explorativ...
  - 来源域名：de.wikipedia.org（HTTP 200）
- [Ad hoc testing - Wikipedia](https://en.wikipedia.org/wiki/Ad_hoc_testing)
  - 摘要：Ad hoc testing is a commonly used term for planned software testing that is performed without initial test case documentation; &#91; 1 &#93; however, ad hoc testing can also be applied to other scientific research and qu...
  - 来源域名：en.wikipedia.org（HTTP 200）
- [Black-box testing - Wikipedia](https://en.wikipedia.org/wiki/Black-box_testing)
  - 摘要：Black-box testing, sometimes referred to as specification-based testing , &#91; 1 &#93; is a method of software testing that examines the functionality of an application without peering into its internal structures or wo...
  - 来源域名：en.wikipedia.org（HTTP 200）
- [Exploratory testing - Wikipedia](https://en.wikipedia.org/wiki/Exploratory_testing)
  - 摘要：Exploratory testing is an approach to software testing that is concisely described as simultaneous learning, test design and test execution. Cem Kaner , who coined the term in 1984, &#91; 1 &#93; defines exploratory test...
  - 来源域名：en.wikipedia.org（HTTP 200）
- [James Marcus Bach - Wikipedia](https://en.wikipedia.org/wiki/James_Marcus_Bach)
  - 摘要：James Marcus Bach (born c. &#8201;1966 ) is an American software tester , author, &#91; 1 &#93; &#91; 2 &#93; trainer, and consultant.
  - 来源域名：en.wikipedia.org（HTTP 200）
- [Risk-based testing - Wikipedia](https://en.wikipedia.org/wiki/Risk-based_testing)
  - 摘要：Risk-based testing (RBT) is a type of software testing that functions as an organizational principle used to prioritize the tests of features and functions in software, based on the risk of failure, the function of their...
  - 来源域名：en.wikipedia.org（HTTP 200）
- [Scenario testing - Wikipedia](https://en.wikipedia.org/wiki/Scenario_testing)
  - 摘要：Scenario testing is a software testing activity that uses scenarios : hypothetical stories to help the tester work through a complex problem or test system. The ideal scenario test is a credible, complex, compelling or m...
  - 来源域名：en.wikipedia.org（HTTP 200）
- [Session-based testing - Wikipedia](https://en.wikipedia.org/wiki/Session-based_testing)
  - 摘要：Session-based testing is a software test method that aims to combine accountability and exploratory testing to provide rapid defect discovery, creative on-the-fly test design , management control and metrics reporting. T...
  - 来源域名：en.wikipedia.org（HTTP 200）
- [Software testing - Wikipedia](https://en.wikipedia.org/wiki/Software_testing)
  - 摘要：未提取到可用摘要
  - 来源域名：en.wikipedia.org（HTTP 200）
- [Test strategy - Wikipedia](https://en.wikipedia.org/wiki/Test_strategy)
  - 摘要：A test strategy is an outline that describes the testing approach of the software development cycle . The purpose of a test strategy is to provide a rational deduction from organizational, high-level objectives to actual...
  - 来源域名：en.wikipedia.org（HTTP 200）
- [ISTQB Glossary](https://glossary.istqb.org/en_US/search?term=test%20charter)
  - 摘要：未提取到可用摘要
  - 来源域名：glossary.istqb.org（HTTP 200）
- [无标题](https://istqb.org/wp-content/uploads/2024/11/ISTQB-CTFL-AT_Syllabus_v1.0.pdf)
  - 摘要：未提取到可用摘要
  - 来源域名：istqb.org（HTTP 200）

### 抓取说明

- 本节用于将词条内链接与可抓取网页内容建立证据对应关系。
- 词条定义与工程方法以原有 `qa-wiki` 结构为主，本节仅做补充校对。
