---
title: "AI-Native QA Weekly｜第 41 周"
description: "第 41 周 AI-Native QA Weekly，聚焦 Agent 评测、LLM 质量、安全测试与质量工程。"
lang: "zh-cn"
slug: "2026/week-41"
weekNumber: 41
publishedAt: "2026-10-10"
periodStart: "2026-10-03"
periodEnd: "2026-10-09"
timeZone: "Asia/Shanghai"
itemCount: 10
---

# AI-Native QA Weekly｜第 41 周

本期按 `ai-qa-weekly` 的规则筛选出 10 条与 Agent 评测、LLM 质量、安全测试和质量工程相关的动态，国内与国际来源统一排序。以下“QA 启示”是编者建议，不代表本期已完成工具实测或研究复现。

## 1. Snyk：把真实 Agent 评测接入每个 PR，并将线上失败回流为回归用例

**分类:** Quality Engineering

**来源:** Snyk / LangChain

**更新日期:** 2026-10-08（工程报告）

**介绍:**

Snyk 本周公开了支持 Agent 的质量工程实践：每个拉取请求都会运行真实 Agent，用已知答案问题和红队测试检查变更；低于仓库约定阈值，合并就会被阻止。线上运行还会接受定期评分，异常轨迹可以转成评测数据集。本周发布的是工程报告；产品并非本周首次上线。QA 可以借鉴其中的发布前回归、发布后监测和失败样本回收，但不要把另一家公司的通过阈值直接套到自己的业务。建议先整理回答正确性、应当拒答和权限隔离三类风险，明确人工复核责任，再固定数据集、判定规则和版本。线上评分能帮助发现问题，却不能自动证明业务已经验收，也不能替代对敏感操作的独立检查。

**链接:** [https://www.langchain.com/blog/how-snyk-turned-an-internal-support-agent-into-a-customer-feature](https://www.langchain.com/blog/how-snyk-turned-an-internal-support-agent-into-a-customer-feature)

## 2. AISI 发布 Transect：让长任务和多 Agent 评测回到原始轨迹

**分类:** Agent Testing

**来源:** AISI

**更新日期:** 2026-10-07

**介绍:**

英国 AI 安全研究所 AISI 本周介绍开源工具 Transect，把行为标签、Token 使用和已记录事件放到同一条按轮次排列的时间线上，并允许评审者从标签回到原始轨迹。Transect 处理的是长任务评测难以复核的问题。QA 面对存在委派、反复试验和中途修正的 Agent 时，应把最终结果与过程证据分开检查，保留任务配置、分类口径及需要人工复核的片段。工具生成的行为标签仍可能错误，子 Agent 的委派说明也不等于实际完成情况。所以，报告中的标签不能单独证明任务已经执行，轮次时间线也不等于真实耗时。建议先用一组已经人工标注的失败运行检查解释一致性，再决定是否纳入正式评测流程。

**链接:** [https://www.aisi.gov.uk/blog/transect-making-large-scale-agentic-evaluations-easier-to-understand](https://www.aisi.gov.uk/blog/transect-making-large-scale-agentic-evaluations-easier-to-understand)

## 3. Langfuse 接入 OpenAI decision models：为固定规则评测增加结构化判定

**分类:** LLM Quality

**来源:** Langfuse

**更新日期:** 2026-10-07

**介绍:**

Langfuse 本周新增 OpenAI decision models 评测集成，支持选择、评分和是非问题，并将每个答案保存为评测分数。官方文档明确，是非问题的返回值表示概率，转成通过或失败之前需要设定判定阈值。这类判定适合输出类别明确的检查，例如问题分类、规则等级或护栏信号；需要解释复杂业务错误时，仍应保留人工复核或能够提供理由的评审方式。接入前建议用人工确认的样本检查误报、漏报和不同语言的表现，按具体风险选择阈值，而不是统一设置一个看起来合理的数字。模型版本、问题定义和阈值都应随测试资产一起保存。结构化结果便于统计，但不意味着判定天然正确，也不能据此宣称评测成本或准确率已经改善。

**链接:** [https://langfuse.com/changelog/2026-10-07-openai-decision-model-evaluators](https://langfuse.com/changelog/2026-10-07-openai-decision-model-evaluators) 和 [https://langfuse.com/docs/evaluation/evaluation-methods/decision-models](https://langfuse.com/docs/evaluation/evaluation-methods/decision-models)

## 4. MemLeak：共享记忆需要单独验证跨用户权限

**分类:** Agent Testing

**来源:** MemLeak 研究团队

**更新日期:** 2026-10-03（论文首发）

**介绍:**

本周发布的 MemLeak 研究检查多租户 Agent 共享向量记忆时的跨用户泄露：普通相似度检索也可能取回其他用户的信息，问题不一定需要恶意提示才能触发。研究中加入硬性归属检查后，回答污染有所减少，但作者明确承认实验样本较小，不能把结果外推为企业系统的普遍泄露比例。记忆类产品还需要为检索结果和最终回答分别设置权限断言，不能只检查答案是否相关。建议构造语义相近、身份不同的用户样本，比较共享检索、权限过滤与拒绝访问路径，检查被拒绝的数据是否仍进入上下文或回答。同时记录隐私保护带来的有效信息损失，把可用性与隔离效果分开报告，避免综合分数掩盖越权问题。该研究提供的是风险验证线索，不是任何现有产品已经泄露的证据。

**链接:** [https://arxiv.org/abs/2610.04195](https://arxiv.org/abs/2610.04195)

## 5. APEX：在实际动作执行边界检查 Agent 授权

**分类:** Agent Testing

**来源:** 清华大学等机构的 APEX 研究团队

**更新日期:** 2026-10-04（论文首发，按 Asia/Shanghai 换算）

**介绍:**

清华大学等机构的研究团队本周提出 APEX，在 Agent 即将执行外部动作或释放输出时检查任务授权，同时覆盖输入中的攻击文字。论文覆盖工具、MCP 与 Skill 场景，并公开了多项基准中的防御结果；这些结果只适用于其研究设置，不能解读为任意部署环境都不会被攻破。QA 做提示注入测试时，应同时观察模型说了什么、准备调用什么，以及最终产生了哪些外部副作用。把网页、工具返回和嵌套 Skill 当作不同的不可信入口，构造正常任务与越权动作并存的用例，再分别断言恶意动作被阻止、合法任务仍能继续、敏感数据未被释放。执行边界是否生效，要看这些动作断言，不能把回答中的拒绝措辞当成测试通过。

**链接:** [https://arxiv.org/abs/2610.06966](https://arxiv.org/abs/2610.06966)

## 6. AWS 发布 steering file 配置实践：用代码证据约束 AI 的漏洞判断

**分类:** AI Testing

**来源:** AWS Security Blog

**更新日期:** 2026-10-07

**介绍:**

AWS Security Blog 本周发布 AI 漏洞分析框架的配置实践，要求模型先核实文件、函数、数据流和调用路径，再给出发现；置信度使用可观察信号计算，并结合部署控制判断优先级。它把重点放在可追查、可质疑的报告结论上。QA 使用 AI 辅助安全测试或代码审查时，应把问题是否存在、证据是否完整及风险优先级拆成不同检查项，表达流畅不等于证据充分。建议在验证集中加入函数已删除、路径已改名、输入经过清洗以及防护配置不同等对照情况，检查工具能否区分真实缺陷、证据不足和已经缓解的风险。文章中的配置和试验结果是作者实践，不能证明换一个仓库或模型后仍有相同效果，落地时还需独立复测。

**链接:** [https://aws.amazon.com/blogs/security/configuring-your-ai-vulnerability-harness-part-2-the-steering-file](https://aws.amazon.com/blogs/security/configuring-your-ai-vulnerability-harness-part-2-the-steering-file)

## 7. OpenAI 介绍 LASER：优先寻找稀有、模糊的安全评测样本

**分类:** LLM Quality

**来源:** OpenAI Alignment Research

**更新日期:** 2026-10-06

**介绍:**

OpenAI 本周介绍 LASER，通过轻量分类器与推理模型反复配合，从合成或去标识化对话中寻找稀有、模糊的策略边界案例，并在选样时考虑多样性。LASER 处理的是评测数据如何被挑选，不是发布一个更高分的新模型。QA 面对安全评测时，可以增加拒答边界、相似表达和规则冲突的定向样本，但不能因此取消代表真实流量的基础测试集。建议将风险发现集与总体质量测量集分开维护，分别说明采样规则和统计用途，防止把经过富集的危险样本比例误当成线上发生率。文中报告的效率收益也只对应特定比较条件，不能据此推断整个测试流程都会等比例降本。采样改进之后，判定准确性、隐私和覆盖偏差仍需单独检查。

**链接:** [https://alignment.openai.com/laser](https://alignment.openai.com/laser)

## 8. Hack The Box 推出 AI Range 企业版：按岗位任务持续评估安全 Agent

**分类:** Agent Testing

**来源:** Hack The Box

**更新日期:** 2026-10-06

**介绍:**

Hack The Box 本周推出 AI Range 企业版，让企业把自己的安全 Agent 放进受控环境，按具体网络安全岗位进行评估，查看场景通过情况及表现变化。本周新增的是企业版和岗位化评估能力，不能把此前已经存在的 AI Range 说成首次发布。QA 验收安全 Agent 时，应围绕它被分配的真实职责，而不只是比较通用基准分数。建议先定义任务完成条件、禁止动作和人工介入点，再在模型、工具、数据或环境改变时重复执行同一组场景。结果需要保留场景范围与失败证据，避免用一个岗位的高分为其他职责背书。平台评分方法由厂商提供，仍应与团队自己的权限边界、误报漏报和事故处理要求共同审查，不能把采购测试平台等同于完成上线验收。

**链接:** [https://www.hackthebox.com/blog/hack-the-box-launches-ai-range-enterprise-edition](https://www.hackthebox.com/blog/hack-the-box-launches-ai-range-enterprise-edition)

## 9. AgentLens 补充父子调用关联：帮助定位多 Agent 失败的实际来源

**分类:** Tools & Projects

**来源:** AgentLens 维护者

**更新日期:** 2026-10-04（维护者更新说明）

**介绍:**

AgentLens 维护者本周在原始社区帖中说明新增父子调用关联，能够把失败的工具调用追溯到触发它的 Agent；当前仓库也保存了 LangChain 调用标识和父调用标识。这里收录的是有实质内容的维护者更新，不是把旧帖的新回复直接当成新项目发布。QA 测试多 Agent 系统时，除了统计失败次数，还要验证错误能否关联到正确的执行链。建议用并发、嵌套和人为失败场景检查链路是否完整，确认一次调用的错误不会被错误归到另一个 Agent。工具目前属于早期本地审计方案，不能据此推定已经覆盖完整的分布式追踪或跨运行比较；可选的模型生成叙述也需要单独审查数据发送范围。我们核验了说明和源码，没有在本期运行该工具，实际兼容性仍需使用方验证。

**链接:** [https://forum.langchain.com/t/agentlens-free-local-only-cli-to-audit-what-your-langchain-agent-actually-did/4551](https://forum.langchain.com/t/agentlens-free-local-only-cli-to-audit-what-your-langchain-agent-actually-did/4551) 和 [https://github.com/subhash-0000/AgentLens/blob/main/agentlens/capture.py](https://github.com/subhash-0000/AgentLens/blob/main/agentlens/capture.py)

## 10. AACP 草案：将 Agent 评测证据绑定到实际配置，避免旧报告为新版本背书

**分类:** Research & Trends

**来源:** N. Levi / O. Yeger，个体 Internet-Draft

**更新日期:** 2026-10-04

**介绍:**

本周发布的 AACP 个体 Internet-Draft 提出，用版本化评测配置和测试集描述能力证明，并把证明绑定到实际接受评测的模型、指令、工具及运行配置。它区分评测通过与操作授权，也要求强制安全条件不能被较高的总分抵消。QA 编写发布报告时，应能回答测试了哪个版本、用了哪些规则，以及上线配置是否仍与测试对象一致。可以把提示词、工具权限和评测集摘要纳入证据清单，在相关配置变化后重新运行必要用例，而不是继续引用旧的通过结果。对于不稳定任务，还应报告重复次数和不确定性；越权写入等硬性条件则应独立判断。这仍是作者提交的早期草案，不是已经获 IETF 采纳的标准，也不是现成产品或已经实现的认证服务。

**链接:** [https://www.ietf.org/archive/id/draft-levi-agent-certification-00.html](https://www.ietf.org/archive/id/draft-levi-agent-certification-00.html)
