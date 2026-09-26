---
title: "AI-Native QA Weekly｜第 39 周"
description: "第 39 周 AI-Native QA Weekly，聚焦 Agent 测试、LLM 质量、AI 测试自动化、质量门禁与可靠性。"
lang: "zh-cn"
slug: "2026/week-39"
weekNumber: 39
publishedAt: "2026-09-26"
periodStart: "2026-09-19"
periodEnd: "2026-09-25"
timeZone: "Asia/Shanghai"
itemCount: 10
---

# AI-Native QA Weekly｜第 39 周

本期严格聚焦 AI-Native QA、Agent 测试、LLM 质量、测试自动化、质量门禁与可靠性。中文来源与国际来源进入同一候选池统一排名；本期有 1 条中文官方来源 DABench 进入前十。

## 1. Microsoft run-assert-eval：让 Agent 风险修复进入可重复评测闭环

**分类:** Agent Testing

**来源:** Microsoft Command Line

**更新日期:** 2026-09-24

**介绍:**

Microsoft 在 9 月 24 日介绍 run-assert-eval，把 Agent 的风险发现、评测、运行时策略生成和修复验证串成一个可重复的质量闭环。它先用 Clarity 发现团队可能没有写进需求的风险，再通过 ASSERT 把风险转换为可测行为和评测场景，生成 Agent Control Specification 策略，最后复用同一套行为定义、测试集和 Judge 重新运行。这样策略是两次运行之间的主要变量，团队可以判断违规是否下降，同时检查正常能力是否被过度限制。它还强调固定同一套行为定义、测试输入和判定器，避免把不同运行的结果差异误归因于策略变化，让安全缺陷、策略回归和误拦截都能被记录和比较。对 AI-Native QA 而言，它把“发现缺陷、施加控制，并用同一评测证明修复”变成可进入发布门禁的工作流，而不是一次性的安全分数。

**链接:** [Microsoft run-assert-eval](https://commandline.microsoft.com/run-assert-eval-responsible-ai-agent-risk-discovery-at-runtime/)

## 2. LangWatch Instant Evals：把生产交互转成持续评测与回归资产

**分类:** LLM Quality

**来源:** LangWatch

**更新日期:** 2026-09-20

**介绍:**

LangWatch 在 9 月 20 日发布 Instant Evals，把生产环境中的对话、Trace 和 LLM 调用纳入可检索的持续评测范围。使用者可以在选定的历史窗口里用自然语言提出质量问题，系统返回匹配样本及概率，并支持通过 CLI、API 或 MCP 调用；命中的结果还能导出为 JSONL，继续用于回归测试集、微调数据集或提示词修复。这个变化对 QA 的价值在于把线上观测数据直接连接到缺陷定位和测试资产生成，测试人员可以用真实交互筛选失败模式，再比较提示词、模型或策略调整前后的结果，而不必只依赖少量人工抽样。这也允许 QA 按时间窗口、标签和问题类型反复抽取线上样本，形成可追踪的回归基线，并在发布后继续观察同一缺陷是否复现。

**链接:** [LangWatch Instant Evals](https://langwatch.ai/changelog/instant-evals)

## 3. Inspect AI 0.3.266-0.3.269：增强 Agent 评测中的模型、沙箱与审批控制

**分类:** Agent Testing

**来源:** Inspect AI

**更新日期:** 2026-09-19、2026-09-22、2026-09-25

**介绍:**

Inspect AI 在 9 月 19 日、22 日和 25 日连续发布 0.3.266 至 0.3.269，扩展了 AI Agent 评测框架的模型、执行和控制能力。更新覆盖 LiteLLM Proxy、DeepSeek V4.1-Flash、Anthropic SDK Agent Bridge、Claude Opus 5.5 等 computer-use 模型支持，并加入 Agent Bridge 的审批策略、沙箱桥接约束、检查点强化和空响应评分原因记录；同时还修复 Docker sandbox、重试取消、任务日志等问题。版本链还带来对不同供应商、不同执行后端和不同审批路径的统一验证入口，团队可以在同一评测定义下复现模型调用、工具调用、沙箱限制及失败重试行为。对 AI-Native QA 团队而言，这些不是单纯的模型适配，而是让评测运行更接近真实工具调用、权限控制和异常执行场景，并改善结果解释与复现条件。

**链接:** [Inspect AI changelog](https://inspect.aisi.org.uk/CHANGELOG.html)

## 4. Testkube AI Test Creation：将自然语言测试生成接入真实基础设施和 PR 流程

**分类:** AI Testing

**来源:** Testkube

**更新日期:** 2026-09-22

**介绍:**

Testkube 在 9 月 22 日发布 September Release，重点推出 AI Test Creation：用户用自然语言描述测试目标，系统在真实基础设施中生成并执行测试，随后把结果沉淀为代码仓库中的 GitHub PR。它覆盖 E2E、API、负载和基础设施测试，并通过专门的测试技能约束生成内容，使测试不只是聊天窗口里的示例，而是能运行在真实服务和交付流程中的工程资产。由于变更进入仓库 PR，团队还可以沿用代码审查、分支保护、CI 结果和回滚流程，把生成的测试当作普通工程变更管理；这比只保存一次聊天记录更利于长期维护。对 QA 来说，这个变化把 AI 生成测试从“给出一段可能可用的脚本”推进到“生成、执行、审阅、合并”的闭环，重点仍然是环境真实性、可审查变更和可重复执行，而不是生成速度本身。

**链接:** [Testkube AI Test Creation](https://testkube.io/blog/ai-test-creation)

## 5. SWE-Serve：用服务级 E2E 测试验证 Agent 生成的工程补丁

**分类:** Agent Testing

**来源:** arXiv

**更新日期:** 2026-09-22

**介绍:**

SWE-Serve 论文在 9 月 22 日提交了一套面向生产推理服务软件工程任务的评测，覆盖 53 个基于真实代码仓库的 SGLang 任务和六类工程场景。研究使用隐藏的功能、回归、端到端和性能测试，并加入 oracle、no-op、对抗式及 closed-book 控制来识别补丁是否真正解决问题；最佳配置的平均 pass@1 为 75%。在 19 个端到端任务上，服务级 E2E 验证会拒绝约三分之一能够通过其他测试的补丁。研究中的对照设计也说明，质量门禁不仅要问“补丁是否通过测试”，还要确认测试是否能区分有效修复、无操作补丁和只迎合测试的补丁。这个结果直接提醒 AI-Native QA：单元或局部检查不能代表服务可用性，Agent 生成补丁必须经过真实部署路径和端到端质量门禁。

**链接:** [SWE-Serve](https://arxiv.org/abs/2609.26777)

## 6. FDE-Bench：用四道质量门评估 Agent 的部署配置能力

**分类:** Agent Testing

**来源:** arXiv

**更新日期:** 2026-09-23

**介绍:**

FDE-Bench 论文在 9 月 23 日发布，评测 Agent 完成 Docker、Compose 和 Kubernetes 部署配置任务的能力，包含从零搭建与修复已有环境两类场景，并用 build、readiness、behavior、conformance 四道门判断是否真正可用。基准还设计了三种对抗式捷径策略，结果显示没有一种能真正绕过完整评测；7 个模型的总体得分为 52.9% 到 75%，其中 readiness 是最大失败来源，313 个未解决门禁中有 110 个属于这一项。同时，四道门的结果和中间产物可检查、可回放，便于定位是构建、服务就绪、实际行为还是规范一致性出了问题；这对评估部署 Agent 的回归风险尤其重要。对 QA 而言，它提供了比“命令执行成功”更严格的部署验证思路，也让环境就绪、行为正确和规范符合成为可分别诊断、可回放的质量信号。

**链接:** [FDE-Bench](https://arxiv.org/abs/2609.27571)

## 7. DOW-BENCH：把 Agent 的成本、状态和工具安全转成运行时不变量

**分类:** Agent Testing

**来源:** arXiv

**更新日期:** 2026-09-23

**介绍:**

Persistent Billable State 论文在 9 月 23 日提出 DOW-BENCH，用四个主机不变量约束 Agent 的提示词负载、上下文增长、递归机会和累计支出，并在 123 条评测回放中包含可重复触发的攻击模式。对 24 个 Mistral Small 4 工作流的实验显示，带有 progress-authorized 策略时有 22 个工作流通过 oracle，固定上限策略只有 13 个；研究还发现，在 3,830 个 MCP 仓库中只有 71 个存在相应的 safeguard proxy。它把成本、状态和工具调用安全纳入可测试的运行时不变量，提醒 QA 不要只验证最终答案。这类约束可以转化为测试断言和运行时监控，在相同工作流重放时检查状态是否越界、费用是否异常累积、工具权限是否被重复利用，从而把长期会话风险纳入发布前和线上回归。

**链接:** [Persistent Billable State / DOW-BENCH](https://arxiv.org/abs/2609.28585)

## 8. DeepSeek DSec：为大规模 Agent 评测提供弹性、隔离的沙箱执行层

**分类:** Performance & Reliability

**来源:** DeepSeek / arXiv

**更新日期:** 2026-09-19

**介绍:**

DeepSeek 在 9 月 19 日提交的 DSec 论文介绍了一套面向大规模 Agent 训练、评测和数据构造的弹性沙箱基础设施。平台通过统一 SDK 接入函数调用、容器、microVM 和完整 VM 后端，把有状态的 rollout 执行与可抢占 GPU 训练解耦，并支持状态保留、资源回收和细粒度网络规则。论文报告其生产环境每天可运行约 300 万个 sandbox，最高并发超过 38 万、创建速率超过每秒 5,000 个；沙箱还能执行命令和工具调用并收集输出与状态。它还把执行结果和状态作为可收集证据，使评测失败可以回到具体命令、工具调用、网络规则或资源回收环节，而不是只得到一个最终分数。对 AI-Native QA 来说，稳定、隔离且可扩展的执行层是 Agent 回归评测、工具调用测试和奖励劫持诊断的基础，而不是评测框架之外的运维细节。

**链接:** [DeepSeek DSec paper](https://arxiv.org/abs/2609.22978)

## 9. LLM 生成测试套件研究：执行成功和覆盖率不足以证明测试有效

**分类:** AI Testing

**来源:** arXiv

**更新日期:** 2026-09-21

**介绍:**

一项在 9 月 21 日提交的研究评估了 LLM 生成的 Python 测试套件在 ClassEval 上的实际质量，除了执行成功率，还同时检查行覆盖率、分支覆盖率、Cosmic Ray 变异分数和结构质量。结果显示覆盖率很容易接近上限、区分能力有限；不同模型生成测试的可执行性差异明显；没有一个提示词在所有指标上占优，而且模型选择对结果变化的解释力高于提示词选择。研究因此建议把执行门槛、覆盖率、变异测试和结构检查组合使用，并在提示词调优前先选择合适模型。对 QA 团队而言，这是一条具体的评测设计原则：能运行不等于测得好，单一 coverage 指标也不足以判断 AI 生成测试是否有缺陷发现能力。

**链接:** [LLM-generated test suites study](https://arxiv.org/abs/2609.24341)

## 10. 火山引擎 DABench：面向真实数据分析场景的 Agent 评测集

**分类:** Agent Testing

**来源:** 火山引擎 Agent 社区

**更新日期:** 2026-09-22

**介绍:**

火山引擎 Agent 社区的评测集页面在 9 月 22 日记录了 DABench 条目，面向真实数据分析场景提供 Agent 评测数据，覆盖零售、金融、汽车等七个行业，并按简单、中等和困难等级组织知识问答任务。它的价值不在于再发布一个泛化的模型榜单，而在于给数据分析 Agent 提供带有业务场景和难度层次的测试材料，使团队能够围绕任务完成、答案质量和场景复杂度建立更具体的评测集。这使评测结果更适合做分层回归，而不是把不同难度和不同业务场景混成一个不可解释的总分。对中国团队的 AI-Native QA 工作来说，这类中文官方数据源可以补充国际基准的覆盖盲区，但仍需和其他候选放在同一个相关度、可操作性、证据质量和覆盖价值评分池中。

**链接:** [火山引擎 Agent 评测集](https://developer.volcengine.com/evaluation-set)
