# 本体驱动的软件研发与质量工程｜双语预发布 Draft

> 状态：20 篇中英文完整文章草稿，尚待共同 review。所有正文保留 draft 状态，尚未迁入正式博客发布目录。

## 系列定位

系列面向第一次接触本体的读者，也面向希望了解 SDLC（软件开发生命周期）本体、质量工程本体及 AI Native QA 实践的用户。文章从生活例子讲本体，再沿着需求、业务规则、代码变更、测试义务、测试执行和质量证据展开。

这里收录 20 篇可继续预发布 review 的中英文完整草稿。各篇包含说明性正文、例子、关系图或表格、FAQ、最佳实践和理解检查题。命令、实验结论、产品功能和集成状态均按材料中实际状态描述；没有运行或上线的内容不会写成已验证结果。

## 原始材料与内容去向

本系列在起草时对照了以下材料，避免只保留 v0.19 的提纲而遗漏之前讨论与写好的科普内容：

| 材料 | 保留的内容 | 对应文章 |
|---|---|---|
| 用户之前提供的《从 0 到 1 学习本体》完整内容及修订要求 | ASD-STE100 简明表达阶段；小白版和专业版两个独立层次；生活化例子、Class / Individual / Relation / Axiom、RDF / OWL / SHACL、适用边界、常见误解、自测 | 00 |
| 用户提供的 AI Native QA 研究规划 | 四个应用领域、六类 QA 场景、L1–L3 实践层级、16 个研究主题、订单支付案例、评价指标和建议的八周研究阶段 | 01–02、04–19 |
| v0.19 博客与项目资料 | 00–12 原定主题、项目总览 SVG、baseline ontology、Turtle 示例、SHACL 形状、SPARQL 查询及其限制 | 00–12 |
| 《解释ASD-STE100》对话中的 Workbench 讨论 | 用户角色与平台价值、六类场景、普通用户工作流、MVP 导入选择、证据状态和版本演进 | 01–03、07–12、18 |
| 当前对话中的本体科普稿 | 学校和图书馆例子、概念至事实再到问题的理解路径、术语表、知识图谱与数据库区别、开放世界假设与检查题 | 00、02 |
| 用户对内容范围的补充 | 文章应是可预发布草稿；保留图例、示意图、表格；明确区分已存在材料、提议扩展和待实测内容 | 全系列 |

前面对话中采用的 PR-128 退款权限和「20 条自动化测试通过但证据不足」是说明性的假设案例，不代表真实项目数据。MVP 数据导入决策为「标准模板 + 可视化字段映射 + 人工确认」；GitHub / CI 连接仍属于后续规划。四个实践领域及六个使用场景会在系列中展开，相关产品能力不会被描述成已经上线。

## 图示、图表与原始视觉材料

原始资源没有删除：

- v0.19 的原始总览图保存在 assets/sdlc-qe-overview.svg，并嵌入第 00、06 篇。
- 第 00 篇保留并补充学校与图书馆关系图、推理示意图、概念—关系—事实—问题流程，以及从需求到证据的追溯图。
- 各篇的 Mermaid 流程图、模型关系图、案例矩阵和对照表仍保留在正文。新增内容按主题补图，不用一句话替代图示。
- 第 12 篇的实验表保留为待实测模板；不会在没有运行数据时绘造柱状图或填写预期分数。

## 系列文章索引

| 编号 | 中文文章 | English article | 主要内容 |
|---|---|---|---|
| 00 | [什么是本体（Ontology）？从日常分类看懂 AI 知识建模](zh-cn/00-what-is-ontology.md) | [What Is an Ontology?](en/00-what-is-ontology.md) | ASD-STE100 简明表达、小白版和专业版 |
| 01 | [为什么 AI 时代的软件研发需要本体？连接需求、代码与测试](zh-cn/01-why-ontology-for-sdlc-qe.md) | [Why Does Software Development Need an Ontology?](en/01-why-ontology-for-sdlc-qe.md) | 用户价值、应用领域与 QA 场景 |
| 02 | [本体、知识图谱、RAG、数据库有什么区别？](zh-cn/02-ontology-graph-rag-database.md) | [Ontology, Knowledge Graph, RAG, and Database](en/02-ontology-graph-rag-database.md) | 技术职责、研究现状与复用边界 |
| 03 | [从需求到发布：用一个软件项目看懂本体如何工作](zh-cn/03-sdlc-qe-walkthrough.md) | [From Requirement to Release](en/03-sdlc-qe-walkthrough.md) | 贯穿项目案例、用户流程和数据导入规划 |
| 04 | [什么是 SDLC 本体？把需求、代码变更和发布连起来](zh-cn/04-sdlc-ontology.md) | [What Is an SDLC Ontology?](en/04-sdlc-ontology.md) | 研发对象、关系方向和生命周期追溯 |
| 05 | [什么是质量工程（QE）本体？从质量风险到测试证据](zh-cn/05-qe-ontology.md) | [What Is a Quality Engineering Ontology?](en/05-qe-ontology.md) | 义务、用例、执行、证据与声明 |
| 06 | [SDLC 本体与 QE 本体如何连接？](zh-cn/06-connect-sdlc-qe.md) | [How Do SDLC and QE Ontologies Connect?](en/06-connect-sdlc-qe.md) | 原始总览图、跨域语义和追溯链 |
| 07 | [从零搭建一个可运行的 SDLC-QE 本体](zh-cn/07-build-runnable-ontology.md) | [Build a Runnable SDLC-QE Ontology](en/07-build-runnable-ontology.md) | L1–L3、RDF、OWL、SHACL、SPARQL 与复现入口 |
| 08 | [需求变更后，哪些测试需要重跑？](zh-cn/08-change-impact.md) | [Which Tests Should a Requirement Change Affect?](en/08-change-impact.md) | 变更影响路径和回归范围 |
| 09 | [让 AI 做 PR Review：本体如何补充质量上下文](zh-cn/09-ai-pr-review.md) | [AI PR Review with Ontology](en/09-ai-pr-review.md) | 可追溯的审查建议与来源 |
| 10 | [测试覆盖率够吗？追踪测试义务和质量证据](zh-cn/10-quality-evidence.md) | [Is Test Coverage Enough?](en/10-quality-evidence.md) | 关联覆盖、执行覆盖和证据资格 |
| 11 | [从 CI/CD 到 Go/No-Go：整理发布质量门禁](zh-cn/11-quality-gate.md) | [From CI/CD to Go/No-Go](en/11-quality-gate.md) | 门禁策略、未知状态和人工决策 |
| 12 | [本体能提升 AI Native QA 吗？用对照实验看收益和成本](zh-cn/12-ontology-effectiveness.md) | [Can an Ontology Improve AI-Native QA?](en/12-ontology-effectiveness.md) | 对照实验设计、指标和待实测表格 |
| 13 | [本体驱动的缺陷与质量风险分析](zh-cn/13-defect-risk-analysis.md) | [Ontology-Driven Defect and Quality-Risk Analysis](en/13-defect-risk-analysis.md) | 缺陷、根因、规则和回归测试复用 |
| 14 | [从零设计订单与支付业务本体](zh-cn/14-order-payment-ontology.md) | [Design an Order and Payment Business Ontology](en/14-order-payment-ontology.md) | 业务概念、状态和规则 |
| 15 | [业务本体如何帮助 AI 设计测试用例？](zh-cn/15-ai-business-test-design.md) | [How Can a Business Ontology Help AI Design Test Cases?](en/15-ai-business-test-design.md) | 规则到义务、候选用例与人工审核 |
| 16 | [用本体发现业务测试遗漏](zh-cn/16-find-business-test-gaps.md) | [Find Business Test Gaps with an Ontology](en/16-find-business-test-gaps.md) | 状态、边界、时序和证据缺口 |
| 17 | [从业务规则到自动化测试执行：把质量循环接入日常工作](zh-cn/17-business-rules-to-automation.md) | [From Business Rules to Automated Tests](en/17-business-rules-to-automation.md) | 规则、审核用例、执行和反馈循环 |
| 18 | [构建理解质量领域的 QA Agent](zh-cn/18-build-a-domain-aware-qa-agent.md) | [Build a Domain-Aware QA Agent](en/18-build-a-domain-aware-qa-agent.md) | 本体查询、证据引用、权限与评估 |
| 19 | [多个 QA Agent 如何共享质量知识？](zh-cn/19-multi-agent-shared-quality-knowledge.md) | [How Can QA Agents Share Quality Knowledge?](en/19-multi-agent-shared-quality-knowledge.md) | 统一语义、版本快照、交接和八周研究路径 |

## 已覆盖的核心循环

系列重点保留「业务规则 / 需求 → 测试义务 → 审核后的用例 → 测试执行 → 可追溯证据 → 人工质量判断 → 更新规则、模型或测试」这条循环。第 17、19 篇分别用独立流程图重点说明自动化质量循环和 Agent 协作中的质量循环。

## 尚待实际运行或后续验证的内容

- 正文中保留的 `01_project/...` 和 `02_blog/...` 是 v0.19 资料包的编辑核对位置，不是读者可访问的链接。迁入正式博客前，应为可公开来源补充完整 URL，或将这些内部核对项移到编辑备注。
- 第 07 篇的复现命令已于 2026-11-05 在提供的 v0.19 资料包中运行：Python 3.15.2、rdflib 7.6.0、pySHACL 0.40.2，22 项通过、0 项失败、0 项跳过。资料包没有 Git 元数据，因此结果没有对应的 commit SHA；正式发布前仍需在不可变源码版本上复跑，并补充代表性的缺口输出。
- 第 12 篇对照实验没有结果数据。指标表保持「待实测」，完成实验后再写观察结果。
- 订单支付规则是教学示例，需要业务方确认；定时、并发、退款手续费等细节不作推断。
- BusinessRule 到 TestObligation、QualityClaim 与证据、缺陷和风险等扩展，需要单独评审模型和关系方向。
- Workbench 导入、GitHub / CI 集成和多 Agent 协作均按规划讨论，未表述为已上线功能。

## 目录

- zh-cn/：中文完整文章草稿。
- en/：英文完整文章草稿。
- assets/：来自 v0.19 资料包的原始图片资源。
- 每篇 frontmatter 使用 status: draft；通过 review 后，再决定是否迁入正式博客目录。
