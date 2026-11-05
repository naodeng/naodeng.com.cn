# Ontology-Driven Software Development and Quality Engineering | Bilingual Prepublication Drafts

> Status: 20 complete article drafts in Chinese and English, pending joint review. Every article remains a draft and has not been moved to the published blog collection.

## Series purpose

This series is for readers new to ontologies and for people interested in SDLC (Software Development Life Cycle) ontologies, Quality Engineering ontologies, and AI-Native QA. It starts with everyday examples, then follows requirements, business rules, code changes, test obligations, test executions, and quality evidence.

This collection contains 20 reviewable prepublication article drafts in Chinese and English. Each article has explanatory prose, examples, diagrams or tables, an FAQ, practical guidance, and comprehension questions. Commands, experiment findings, product features, and integration status are described according to the source materials. Work that has not been run or released is not presented as verified.

## Source materials and where their content appears

The articles were drafted against the following sources so that earlier discussion and completed educational material would not be lost by relying only on the v0.19 outline:

| Material | Content retained | Articles |
|---|---|---|
| The user's earlier full “Learn Ontology from Zero” material and revisions | Separate ASD-STE100 plain-language stage, then beginner and professional explanations; everyday examples; Class / Individual / Relation / Axiom; RDF / OWL / SHACL; boundaries, misconceptions, and questions | 00 |
| User-provided AI Native QA research plan | Four application domains, six QA use cases, L1–L3 practice levels, 16 research topics, order/payment example, evaluation measures, and proposed eight-week phases | 01–02, 04–19 |
| v0.19 blog and project materials | Original topics 00–12, project overview SVG, baseline ontology, Turtle example, SHACL shapes, SPARQL queries, and their limits | 00–12 |
| The “解释ASD-STE100” conversation about Workbench | User roles and platform value, six use cases, ordinary-user workflow, MVP import choice, evidence states, and version evolution | 01–03, 07–12, 18 |
| Ontology education content in the current conversation | Library and school examples; concepts-to-facts-to-questions path; glossary; distinctions among ontology, graph, and database; open-world assumption; comprehension questions | 00, 02 |
| User's scope corrections | Complete prepublication drafts; preservation of legends, diagrams, and tables; explicit distinction among existing material, proposed extensions, and unmeasured results | Entire series |

The PR-128 refund-permission example and “20 automated tests passed but evidence is insufficient” scenario from the earlier discussion are illustrative assumptions, not real project data. The selected MVP import approach is “standard templates + visual field mapping + human confirmation.” GitHub / CI connections remain future plans. The four practice domains and six use cases are expanded through the series; planned product capabilities are not described as already shipped.

## Diagrams, charts, and original visual material

Original visual assets have been retained:

- The original v0.19 overview image remains at assets/sdlc-qe-overview.svg and is embedded in articles 00 and 06.
- Article 00 retains and adds the library and school relationship diagrams, a reasoning example, the Concept–Relation–Fact–Question flow, and requirement-to-evidence traceability.
- Mermaid flows, ontology relationship diagrams, scenario matrices, and comparison tables remain in the articles. New diagrams are added by topic; diagrams have not been replaced by one-line summaries.
- Article 12 retains its experiment-results table as a pending template. It does not include invented chart values or expected scores.

## Article index

| No. | Chinese article | English article | Main topic |
|---|---|---|---|
| 00 | [什么是本体（Ontology）？从日常分类看懂 AI 知识建模](zh-cn/00-what-is-ontology.md) | [What Is an Ontology?](en/00-what-is-ontology.md) | ASD-STE100 plain language, beginner, and professional explanations |
| 01 | [为什么 AI 时代的软件研发需要本体？连接需求、代码与测试](zh-cn/01-why-ontology-for-sdlc-qe.md) | [Why Does Software Development Need an Ontology?](en/01-why-ontology-for-sdlc-qe.md) | User value, application domains, and QA scenarios |
| 02 | [本体、知识图谱、RAG、数据库有什么区别？](zh-cn/02-ontology-graph-rag-database.md) | [Ontology, Knowledge Graph, RAG, and Database](en/02-ontology-graph-rag-database.md) | Technology roles, research landscape, and reuse boundaries |
| 03 | [从需求到发布：用一个软件项目看懂本体如何工作](zh-cn/03-sdlc-qe-walkthrough.md) | [From Requirement to Release](en/03-sdlc-qe-walkthrough.md) | Project walkthrough, user workflow, and import plans |
| 04 | [什么是 SDLC 本体？把需求、代码变更和发布连起来](zh-cn/04-sdlc-ontology.md) | [What Is an SDLC Ontology?](en/04-sdlc-ontology.md) | Engineering objects, relationship direction, and lifecycle traceability |
| 05 | [什么是质量工程（QE）本体？从质量风险到测试证据](zh-cn/05-qe-ontology.md) | [What Is a Quality Engineering Ontology?](en/05-qe-ontology.md) | Obligations, cases, executions, evidence, and claims |
| 06 | [SDLC 本体与 QE 本体如何连接？](zh-cn/06-connect-sdlc-qe.md) | [How Do SDLC and QE Ontologies Connect?](en/06-connect-sdlc-qe.md) | Original overview image, cross-domain semantics, and traceability |
| 07 | [从零搭建一个可运行的 SDLC-QE 本体](zh-cn/07-build-runnable-ontology.md) | [Build a Runnable SDLC-QE Ontology](en/07-build-runnable-ontology.md) | L1–L3, RDF, OWL, SHACL, SPARQL, and reproduction entry point |
| 08 | [需求变更后，哪些测试需要重跑？](zh-cn/08-change-impact.md) | [Which Tests Should a Requirement Change Affect?](en/08-change-impact.md) | Change-impact paths and regression scope |
| 09 | [让 AI 做 PR Review：本体如何补充质量上下文](zh-cn/09-ai-pr-review.md) | [AI PR Review with Ontology](en/09-ai-pr-review.md) | Traceable review suggestions and sources |
| 10 | [测试覆盖率够吗？追踪测试义务和质量证据](zh-cn/10-quality-evidence.md) | [Is Test Coverage Enough?](en/10-quality-evidence.md) | Link coverage, execution coverage, and evidence qualification |
| 11 | [从 CI/CD 到 Go/No-Go：整理发布质量门禁](zh-cn/11-quality-gate.md) | [From CI/CD to Go/No-Go](en/11-quality-gate.md) | Gate policy, unknown states, and human decisions |
| 12 | [本体能提升 AI Native QA 吗？用对照实验看收益和成本](zh-cn/12-ontology-effectiveness.md) | [Can an Ontology Improve AI-Native QA?](en/12-ontology-effectiveness.md) | Controlled-experiment design, metrics, and pending results table |
| 13 | [本体驱动的缺陷与质量风险分析](zh-cn/13-defect-risk-analysis.md) | [Ontology-Driven Defect and Quality-Risk Analysis](en/13-defect-risk-analysis.md) | Reuse links among defects, root causes, rules, and regression tests |
| 14 | [从零设计订单与支付业务本体](zh-cn/14-order-payment-ontology.md) | [Design an Order and Payment Business Ontology](en/14-order-payment-ontology.md) | Business concepts, states, and rules |
| 15 | [业务本体如何帮助 AI 设计测试用例？](zh-cn/15-ai-business-test-design.md) | [How Can a Business Ontology Help AI Design Test Cases?](en/15-ai-business-test-design.md) | Rules to obligations, candidate cases, and human review |
| 16 | [用本体发现业务测试遗漏](zh-cn/16-find-business-test-gaps.md) | [Find Business Test Gaps with an Ontology](en/16-find-business-test-gaps.md) | State, boundary, timing, and evidence gaps |
| 17 | [从业务规则到自动化测试执行：把质量循环接入日常工作](zh-cn/17-business-rules-to-automation.md) | [From Business Rules to Automated Tests](en/17-business-rules-to-automation.md) | Rules, reviewed cases, execution, and feedback loop |
| 18 | [构建理解质量领域的 QA Agent](zh-cn/18-build-a-domain-aware-qa-agent.md) | [Build a Domain-Aware QA Agent](en/18-build-a-domain-aware-qa-agent.md) | Ontology queries, evidence citations, permissions, and evaluation |
| 19 | [多个 QA Agent 如何共享质量知识？](zh-cn/19-multi-agent-shared-quality-knowledge.md) | [How Can QA Agents Share Quality Knowledge?](en/19-multi-agent-shared-quality-knowledge.md) | Common semantics, versioned snapshots, handoffs, and research path |

## The quality cycle covered by the series

The series keeps the cycle “business rule / requirement → test obligation → reviewed case → test execution → traceable evidence → human quality review → update rule, model, or test.” Articles 17 and 19 each include a dedicated diagram for the automation quality cycle and agent collaboration cycle.

## Work that still needs real execution or follow-up

- The `01_project/...` and `02_blog/...` references in article text are editorial pointers into the v0.19 package, not reader-accessible links. Before moving articles into the published blog, replace public source references with full URLs or move internal pointers to editorial notes.
- Previous and next entries in the article files currently use draft filenames as editorial pointers, not reader-facing links. Replace them with full absolute URLs that follow the site standard before publication.
- Article 07's reproduction commands ran on the supplied v0.19 package snapshot on 2026-11-05: Python 3.15.2, rdflib 7.6.0, pySHACL 0.40.2; 22 passed, 0 failed, and 0 skipped. The package has no Git metadata, so the result is not tied to a commit SHA. Before publication, rerun against an immutable source revision and add representative gap-case output.
- Article 12 has no experiment results. Its metrics table remains marked as pending measurement until a real comparison is complete.
- Order and payment rules are teaching examples that need confirmation by a business owner. No assumptions are made about timing, concurrency, or refund fees.
- Extensions for BusinessRule to TestObligation, QualityClaim-to-evidence links, defects, and risks need separate review, including relationship directions.
- Workbench import, GitHub / CI integration, and multi-agent collaboration are discussed as plans, not shipped capabilities.

## Directories

- zh-cn/: complete Chinese article drafts.
- en/: complete English article drafts.
- assets/: original visual resources from the v0.19 package.
- Every article uses status: draft. After review, the team can decide whether to move it to the formal blog collection.
