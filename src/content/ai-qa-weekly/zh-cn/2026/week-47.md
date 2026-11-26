---
title: "AI-Native QA Weekly｜第 47 周"
description: "第 47 周 AI-Native QA Weekly，聚焦 Agent 回归评测、自然语言测试执行、离线 Trace 检查，以及编码 Agent 与 RAG 系统的评测研究。"
lang: "zh-cn"
slug: "2026/week-47"
weekNumber: 47
publishedAt: "2026-11-23"
periodStart: "2026-11-16"
periodEnd: "2026-11-22"
timeZone: "Asia/Shanghai"
itemCount: 10
---

# AI-Native QA Weekly｜第 47 周

本期覆盖 2026-11-16 00:00 至 2026-11-22 23:59（Asia/Shanghai），发布日期为 2026-11-23。10 条动态按对 AI 系统质量保障的直接程度统一排序，涵盖产品发布、评测工具、研究论文和测试社区实践。摘要区分厂商发布信息、论文实验与作者自述；来源中的演示和实验结论不代表我们已独立复现。每条后的 QA 启示是基于来源内容的编辑分析。

## 1. GitHub Copilot Evals 开放预览，可回归检查 Agent 与 MCP 工具

**分类:** Agent Testing

**来源:** GitHub Changelog · GitHub Copilot Evals

**更新日期:** 2026-11-17

**介绍:**

GitHub 将 Copilot Evals 开放预览，供团队检查自己配置的 Skill、自定义 Agent 和 MCP 工具。它把 eval 定义为可重复的行为测试：给 Agent 一个真实任务、说明合格结果，并同时检查最终产出和执行轨迹。提示词、模型、Skill、Agent 或 MCP 配置变更后，可以复跑同一 eval，查看通过与失败项，并比较前后表现。预览版面向 Copilot Individual、Business 和 Enterprise，GitHub 表示评测引擎使用本地 Vally 工具。对 QA 团队来说，关键是把高风险任务、预期结果和需要检查的执行步骤沉淀为回归样例；比较时还可分别记录结果质量与轨迹合规性，帮助定位回归来自答案还是工具调用流程。通过这些样例只说明当前任务集和配置下的行为，不能替代更广泛的探索测试。

**链接:** GitHub Changelog: https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview/

## 2. AWS DevOps Agent 新增历史调查回放与自动质量 Review

**分类:** Agent Testing

**来源:** AWS Cloud Operations Blog · This Month in AWS DevOps Agent

**更新日期:** 2026-11-20

**介绍:**

AWS DevOps Agent 新增调查回放和自动 Review，用于验证团队对 Agent 技能、指令或集成做出的修改。回放会重新执行已完成调查，并与原调查比较 grader 分数、定位根因所用时间、调用的工具和技能，以及调查时间线；AWS 说明回放不会执行修改环境的操作，但会查询当前线上环境，因此历史数据可能已经不可用。Review 则给出有帮助或无帮助的结论，并从范围对齐、证据依据、完整性、环境影响和准确性五个维度返回通过、失败或不适用。自动 Review 默认抽样 10%，可配置为 1% 至 100%。这让 Agent 变更有了可比较的回归证据；团队仍需留意环境变化和抽样比例，避免把一次回放或抽样评分当成完整质量结论。

**链接:** AWS: https://aws.amazon.com/blogs/mt/this-month-in-aws-devops-agent-november-2026/

## 3. TestSprite 4.0 以规格为准生成并持续运行测试

**分类:** Test Automation

**来源:** TestSprite · Product Blog

**更新日期:** 2026-11-20

**介绍:**

TestSprite 4.0 面向使用编码 Agent 的团队，允许用户用自然语言说明产品行为，或提供规格、工单和设计稿。厂商介绍的流程是：Agent 先在真实浏览器中探索应用，再编写和运行测试，并把测试持续应用到后续改动；失败会分类为产品缺陷、测试问题或环境问题。若规格没有说明行为，Agent 会列出假设并等待用户回答；预期行为只有经过用户确认才会更新。文章用合并后才出现的购物车折扣回归作为演示案例，演示数据和效果属于厂商自述，并非独立对比评测。对 QA 而言，这种流程把产品意图保留为测试判据，评审时仍要确认规格覆盖边界条件、测试失败分类正确且每次运行证据可追溯。

**链接:** TestSprite: https://www.testsprite.com/blog/introducing-testsprite-4-0

## 4. Katalon AI Test Runner 用独立 AI 核验手工用例执行结果

**分类:** Test Automation

**来源:** Katalon · Product Blog

**更新日期:** 2026-11-19

**介绍:**

Katalon 在 TestOps 中推出 AI Test Runner，可直接执行团队已有的自然语言手工测试用例，并在云端浏览器中逐步对照实际页面与预期结果。运行前会检查用例是否清晰完整，发现缺口时先请测试人员补充说明；每一步由另一个只读 AI 根据截图和操作证据核验，执行用的 AI 不会自行批准自己的结果。系统会保留视频、截图、AI 日志和逐步判定，供测试人员复核；重复运行不使用 AI，以保持结果确定。产品面向已有手工回归用例的团队，测试人员仍负责选择覆盖范围、调查标记的问题和作出发布判断。落地时应先抽查截图与判定是否一致，并核对应用变化后用例预期是否仍有效。

**链接:** Katalon: https://katalon.com/resources-center/blog/introducing-katalon-ai-test-runner

## 5. agentest 3.5.0 首次上架 PyPI，扩展离线 Agent Trace 测试

**分类:** Tools & Projects

**来源:** GitHub · agentest v3.5.0 Release

**更新日期:** 2026-11-19

**介绍:**

开源项目 agentest 在 11 月 19 日发布首个 PyPI 包 agentest-ai 3.5.0。它读取 Agent 已记录的 OpenTelemetry Trace，并用可重复的规则检查行为；这一版增加 30 个可选测试，默认仍运行 130 项检查，同时发布 Trace 格式 1.0.0 的规范、JSON Schema、连接器和读取器。连接器覆盖 OpenTelemetry、LangChain/LangGraph、OpenAI Agents SDK、n8n、AutoGen、smolagents 等日志格式。项目称工具可以离线运行，不依赖 API 密钥或 LLM 裁判；这些属于项目功能说明，实际覆盖仍取决于 Trace 是否含有检查所需证据。QA 团队可先在脱敏历史记录上验证检查规则和误报，再考虑把稳定的检查放进 CI；使用前也应明确适用规则，并在升级时复核检测项变化，避免清单与当前协议脱节；缺少证据的结果不能简单当作通过。

**链接:** GitHub Release: https://github.com/srpadmanabhuni/agentest/releases/tag/v3.5.0 ；PyPI: https://pypi.org/project/agentest-ai/3.5.0/

## 6. Pentera Apps 开放早期使用，以 Agent 验证 Web 与 API 可利用风险

**分类:** AI Testing

**来源:** Pentera · Press Release

**更新日期:** 2026-11-18

**介绍:**

Pentera 宣布其 Agentic Web 应用与 API 渗透测试产品 Pentera Apps 开始早期使用。厂商称，Agent 会梳理应用暴露面，并通过模拟攻击验证业务逻辑缺陷、身份认证与授权问题、技术漏洞、数据暴露和 API 安全风险；报告提供开发者可用于复现的证据，并支持在修复后重跑攻击路径。产品介绍强调安全护栏和模拟攻击，但没有提供独立测试结果，因此现阶段应把安全性、误报率和生产环境影响视为待实际评估项。它把“发现漏洞”扩展到“确认攻击路径可利用并验证修复”，对安全 QA 的价值在于将测试结果与修复复测连接起来。试点前需要限定目标环境和权限，先确认每类攻击的执行边界与证据质量。

**链接:** Pentera: https://pentera.io/press-release/pentera-apps-unveiled-for-agentic-web-app-and-api-pentesting/

## 7. LangSmith Python SDK 0.15.1 可选择上传评测 Run

**分类:** LLM Quality

**来源:** LangSmith · Python SDK Release PR

**更新日期:** 2026-11-20

**介绍:**

LangSmith Python SDK 0.15.1 增加了在 evaluate() 中只上传部分运行记录的能力。版本发布说明写明可以选择要上传的 Run；PyPI 记录显示该版本于 11 月 20 日上传，GitHub 发布说明日期为 11 月 19 日。对于包含敏感输入或内部数据的评测，选择性上传可以让团队控制哪些运行轨迹进入托管平台，同时仍按自己的评测流程检查结果。实际使用时要把上传筛选规则与评分口径分开管理，确认被排除的 Trace 不会造成数据集偏差，并明确本地结果的留存方式。该更新影响评测记录的数据流，不会自动验证模型质量；团队仍需维护代表性样本、评估器和可复核的评分依据。

**链接:** GitHub Release PR: https://github.com/langchain-ai/langsmith-python/pull/110 ；PyPI: https://pypi.org/project/langsmith/0.15.1/

## 8. 研究发现编码 Agent 的单测覆盖优势会随项目变大而减弱

**分类:** Agent Testing

**来源:** arXiv · Software Engineering Research

**更新日期:** 2026-11-20

**介绍:**

论文《Can Coding Agents Write and Transpile Unit Tests》比较了三种编码 Agent 编写单元测试和跨语言翻译测试的表现。作者报告，Agent 生成的测试套件在传统覆盖率指标上高于人工编写的套件，但项目规模扩大后测试质量明显下降，覆盖率优势很大一部分来自写了更多测试，而非每条测试都更有效。论文还发现，Agent 将测试迁移到另一种语言时结果不稳定、不可靠。这个结果提醒 QA 团队不能只看行覆盖率或测试数量，还要检查断言是否能暴露回归、测试是否有区分力，以及移植后的测试是否仍验证同一行为。结论来自论文使用的三种 Agent 和实验项目，不代表所有代码库或模型。该论文 11 月 16 日提交，并在 11 月 20 日更新版本。

**链接:** arXiv: https://arxiv.org/abs/2611.21797

## 9. 测试之家作者分享用统计检验辅助 Agent 版本发布决策

**分类:** Quality Engineering

**来源:** 测试之家 · AI 测试实践

**更新日期:** 2026-11-16

**介绍:**

测试之家作者 dengdagui 分享了一套用于比较大模型 Agent 版本的自动化评测与发布决策平台。文章称，系统使用 LangChain 运行 Agent、Langfuse 记录 Trace、DeepSeek 作为 LLM 裁判，并用 SciPy 对版本得分做 1000 次 Bootstrap 重采样、计算 95% 置信区间和 P 值；同时记录工具调用次数、意图完成情况以及首字和逐字延迟等指标。作者提出只有统计差异达到设定条件时才把新版视为改善，并提醒不要凭少量样本的平均分决定上线。这是作者对其实现和判定方法的说明，不是独立验证的通用流程。可借鉴之处是把质量、成本、时延和执行轨迹放入同一发布评审，但团队需要审查样本配对方式、统计假设和裁判一致性。

**链接:** 测试之家: https://testerhome.com/topics/45137

## 10. AutoRAGBench 评测 LLM Agent 从头构建 RAG 系统的能力

**分类:** Agent Testing

**来源:** arXiv · RAG Agent Benchmark

**更新日期:** 2026-11-19

**介绍:**

AutoRAGBench 提出一个基准，评测 LLM Agent 能否在开放代码空间中从零搭建并迭代改进 RAG 系统。论文包含九项开发任务，Agent 在没有起始代码或指定策略的情况下分析数据、实现检索流程并依据实验反馈调整方案；每项任务限制为六小时、使用一张 H800 GPU。作者评估九种 Agent 配置，并同时分析最终系统表现和开发轨迹。论文报告 GPT-6.1 Sol 配合 Codex CLI 的平均分最高，为 56.1；复合 Human-SOTA 基线为 44.4；从人工设计方案开始的七项任务中，该配置平均提升 16.6 分。这些数字仅适用于论文任务和资源限制。对 QA 来说，基准把过程与结果一并纳入评测，但它测的是 RAG 系统开发 Agent，不等于一般软件产品的测试能力。

**链接:** arXiv: https://arxiv.org/abs/2611.25582
