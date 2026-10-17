---
title: "AI-Native QA Weekly｜第 42 周"
description: "第 42 周 AI-Native QA Weekly，聚焦 Agent 评测、LLM 质量、AI 测试自动化与质量工程。"
lang: "zh-cn"
slug: "2026/week-42"
weekNumber: 42
publishedAt: "2026-10-17"
periodStart: "2026-10-10"
periodEnd: "2026-10-16"
timeZone: "Asia/Shanghai"
itemCount: 10
---

# AI-Native QA Weekly｜第 42 周

本期覆盖 2026-10-10 00:00 至 2026-10-16 23:59（Asia/Shanghai），发布日期为 2026-10-17。本期按 ai-qa-weekly 的规则筛选出 10 条与 Agent 评测、LLM 质量、测试自动化和质量工程相关的动态，国内与国际来源统一排序。以下“QA 启示”是编者建议，不代表本期已完成工具实测或研究复现。

## 1. Google Cloud：评测 Agent 要检查执行轨迹，而不只是最终回答

**分类:** Agent Testing

**来源:** Google Cloud Blog

**更新日期:** 2026-10-16

**介绍:**

Google Cloud 本周总结了构建 Google Cloud Developer plugin 时得到的四条评测工程经验，其中最直接的发现是：只让评审模型阅读 Agent 的最终文字回答，可能会把真正成功的运行判成失败。文章给出的 11 条提示评测中，自动评分器最初判定 3 条失败，但查看原始工具调用日志和完整轨迹后，团队确认这 3 条实际上都完成了要求的执行步骤。Google Cloud 因此建议建立覆盖模型、Harness、插件和真实工作流的 Golden Set，按执行步骤、工具调用、最终状态和破坏性副作用来评分，并把评测套件当成持续集成的一部分。QA 落地时应把最终文本、过程轨迹和环境状态分别断言，尤其检查权限、删除操作和多步恢复；文章中的经验来自该插件的实践，不能直接证明在其他 Agent 或业务上同样有效。

**链接:** [https://cloud.google.com/blog/topics/developers-practitioners/four-eval-engineering-lessons](https://cloud.google.com/blog/topics/developers-practitioners/four-eval-engineering-lessons)

## 2. OpenAI 发布 GPT-Live-1.1 系统卡：生产提示与合成语音评测应分开解读

**分类:** LLM Quality

**来源:** OpenAI Deployment Safety Hub

**更新日期:** 2026-10-15

**介绍:**

OpenAI 在 10 月 15 日发布 GPT-Live-1.1 和 GPT-Live-1.1 Quip 的系统卡，说明这两个全双工语音模型如何使用生产提示和合成提示进行安全评测。生产评测使用经过隐私与资格处理的真实音频样本，合成评测则根据安全策略主动生成难采样的边界场景；系统卡明确指出，这两套数据都不是线上安全行为发生率的估计，且历史系统卡中的分数不应在评测规则、数据集或评分器变化后直接横向比较。结果显示，生产评测整体与上一代大致持平，没有统计显著回归；合成评测则在性内容、心理健康、情感依赖和血腥类别发现统计显著回归。QA 做语音或多模态系统验收时，应保留真实分布集与风险发现集两条链路，记录评分器和版本变化，不要用定向合成集的分数代替线上质量结论。

**链接:** [https://deploymentsafety.openai.com/gpt-live-1-1](https://deploymentsafety.openai.com/gpt-live-1-1)

## 3. LangChain 梳理 Agent 评测：从真实轨迹建小数据集，再把失败回流为回归用例

**分类:** Agent Testing

**来源:** LangChain

**更新日期:** 2026-10-15

**介绍:**

LangChain 本周发布 Agent 评测问答指南，把一套可落地的起步流程讲得更具体：先从真实运行轨迹中挑出一个关心的行为，建立包含 10 到 20 个样本的小数据集，运行当前版本形成基线，再把测试和生产中发现的新失败加入数据集。文章建议能用代码判断的地方优先使用确定性评估器，无法直接判断的部分再使用 LLM 评审，同时保留人工复核；对于多步 Agent，还要检查完整线程、工具调用路径和最终状态，而不是只看最后一段回答。离线评测适合在发布前比较提示词、模型或工具改动，在线评测则帮助发现真实流量中的遗漏，两者需要互相补充。QA 可以按核心行为拆分 PR 级小回归集与发布前大回归集，并保留数据集、评估器和版本关系；这些是 LangChain 的工程建议，不代表任何业务接入后会自动获得可靠性。

**链接:** [https://www.langchain.com/blog/common-questions-about-agent-evals](https://www.langchain.com/blog/common-questions-about-agent-evals)

## 4. Snowflake 调整 Cortex 评测默认版本：指标升级时要重新校准质量门禁

**分类:** LLM Quality

**来源:** Snowflake Documentation

**更新日期:** 2026-10-13（计划生效，日期可能调整）

**介绍:**

Snowflake 本周的行为变更公告说明，Cortex Agent 和 Cortex Analyst 的评测默认值将从旧的 v1 指标版本和 claude-4-sonnet 评审模型切换到 v3 指标版本和 claude-sonnet-4-6；如果新模型不可用，系统会回退到 openai-gpt-5.4。公告把变更标为 Pending，预计从 10 月 13 日开始默认启用，并明确说明显式指定版本或模型的配置不会被自动修改。由于不同指标版本的分数不能直接比较，使用评测结果驱动仪表盘、告警或 CI/CD 阈值的团队需要先用 v3 重新跑样本、校准门槛并检查评审模型的权限与成本；tool_selection_accuracy 不使用评审模型，因此其分数不受该项变化影响。这个案例提醒 QA，评测平台升级本身就是回归风险，不能把“同一个指标名”当作“同一把尺子”，应把评测版本、评审模型和阈值一起固定在发布证据中。

**链接:** [https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-2442](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-2442)

## 5. TesterArmy 发布 e2e 0.21.2：让 Agent 测试的回放、模型来源和失败归因更可追踪

**分类:** Tools & Projects

**来源:** GitHub · tester-army/e2e

**更新日期:** 2026-10-16

**介绍:**

TesterArmy 本周发布 e2e 0.21.2，这是一个面向 Web 和移动端的 Agent 化端到端测试框架补丁版本。更新包括让 agent.act 和 MCP Server 的 tap、double_tap、right_click 支持修饰键，并把按键状态记录到动作回放缓存；缓存回放还会记录产生动作的模型，方便识别换模型后的重放结果。发布说明同时修正了失败步骤在 Markdown 摘要、GitHub 评论和 trace 页面中的归因，改善多 Worker 分片时跳过测试的重复统计，并把项目的 MCP Server 列入官方 MCP Registry。对 QA 来说，这些改动的价值不在于“Agent 测试天然可靠”，而在于让一次执行能留下更完整的动作、模型和失败证据。接入时仍应验证缓存失效条件、模型切换、并发分片和真实断言，不能把补丁发布说明当作对自身业务套件的通过证明。

**链接:** [https://github.com/tester-army/e2e/releases/tag/e2e@0.21.2](https://github.com/tester-army/e2e/releases/tag/e2e@0.21.2)

## 6. Thunders 增强 AI 测试运行控制：实时浏览器、人工接管和步骤级状态同时可见

**分类:** Test Automation

**来源:** Thunders

**更新日期:** 2026-10-15

**介绍:**

Thunders 在 10 月 15 日的云端更新中加入实时浏览器视图，测试运行时不再只能查看截图，测试人员可以在步骤失败或断点处接管浏览器、补充缺失步骤后继续执行，也可以直接把人工操作录成测试步骤。更新还为 Thunders AI 增加 effort level，让短编辑和长流程可以使用不同的推理投入，并用新的时间线展示每个步骤是成功、失败、中断、停止、跳过、未运行还是正在运行；此外还增加了认证配置记录、CI 上传移动构建包和 MCP 中未定义变量提醒。对 AI 测试来说，实时状态与人工接管能缩短失败定位和修复闭环，但它们不等于测试结果已经确定可信。团队仍要检查接管后的步骤是否进入版本化资产、AI 生成步骤是否有稳定断言，以及不同浏览器、移动设备和 CI 环境中的行为是否一致。

**链接:** [https://www.thunders.ai/resources/release-notes](https://www.thunders.ai/resources/release-notes)

## 7. Artificial Analysis 发布 Decision Index 1.0：把工具调用与拒答能力放进决策模型基准

**分类:** LLM Quality

**来源:** Artificial Analysis

**更新日期:** 2026-10-13

**介绍:**

Artificial Analysis 本周发布 Decision Index 1.0，用来比较输出固定选项和每个选项概率的决策模型。首版指数由四个各占 25% 的评测组成：基于 500 个私有问题的知识与幻觉评测、513 道题的 HLE-MultiChoice 推理评测、NVIDIA 的 When2Call 工具调用评测，以及 Ai2 的 WildGuardTest 安全分类集；同时还运行普通语言模型基线，但它们只输出结构化选项，不提供决策概率。文章报告 Jev 1.13 以 58 分领先，工具调用评测则由其他模型取得更高分，并给出每百万任务成本和单任务中位耗时的比较。QA 可以借此把分类、是否调用工具、幻觉和安全拒答放进同一套候选模型对比，但指数只代表固定基准和一次发布快照，不能替代业务数据、真实工具权限、稳定性重复运行或线上成本验证，尤其不能把排行榜位置直接当作上线结论。

**链接:** [https://artificialanalysis.ai/articles/artificial-analysis-decision-index](https://artificialanalysis.ai/articles/artificial-analysis-decision-index)

## 8. “求索”4.0 发布：国内人工智能全产业链评测基准覆盖模型、智能体和安全治理

**分类:** Research & Trends

**来源:** 数字中国建设峰会 / 央视新闻

**更新日期:** 2026-10-13（正式发布；来源页发表于 2026-10-14）

**介绍:**

“求索”4.0 于 10 月 13 日正式发布，数字中国建设峰会网站转发的央视新闻信息显示，这是面向算力、模型算法、智能系统与产品、行业应用和安全治理等环节的人工智能全产业链评测基准。体系提供统一测试流程和评测标尺，并配套电力、医疗、钢铁等真实业务测试负载，官方称已经在金融、电力、石油石化等场景完成多轮试点和产品验证。整套体系分成基础软硬件、模型与智能系统、安全治理、行业落地四个板块，共包含 16 项测评工具，算力、大模型和智能体相关的轻量版代码工具对外开源，便于复现评测和软硬件协同验证。对 QA 团队而言，它提供了从模型能力到行业负载的分层参考，但国家标准评测基准的发布不等于某个具体 Agent 已经通过业务验收；落地时仍需核对数据集、环境、权限和本地质量门禁。

**链接:** [https://www.digitalchina.gov.cn/2026/xwzx/szkx/202610/t20261014_5381616.htm](https://www.digitalchina.gov.cn/2026/xwzx/szkx/202610/t20261014_5381616.htm)

## 9. QA Wolf 上线原生 Windows 桌面测试：每次运行使用一次性环境并支持跨端流程

**分类:** Test Automation

**来源:** QA Wolf

**更新日期:** 2026-10-13

**介绍:**

QA Wolf 本周上线原生 Windows 桌面应用的并行端到端测试能力。使用者可以在创建流程时选择 Windows 目标，平台负责准备干净的 Windows 机器、交付应用并记录运行；Windows 流程沿用 Web、iOS 和 Android 流程的测试写法，用无障碍 ID 查找控件并执行断言，同时支持 exe、msi、msix 安装包和自定义磁盘镜像。官方说明每条测试会使用独立 Windows 虚拟机，单次运行结束后销毁，以减少文件、设置和登录状态的串扰；桌面流程还可以和 Web、移动端步骤组合，通过 Run Rules 传递数据。对 QA 来说，这扩大了 AI 辅助测试从浏览器到桌面应用的覆盖范围，也让跨端回归有了统一入口，但仍应自行验证虚拟机镜像、安装依赖、无障碍标识、数据清理和录制结果，不能把平台具备执行能力等同于业务流程已经覆盖。

**链接:** [https://www.qawolf.com/changelog/windows-desktop-app-testing](https://www.qawolf.com/changelog/windows-desktop-app-testing)

## 10. Harvard Library Innovation Lab 发布 Agent 风险评估工具：把 Agent、人工和专家基线放在同一任务上比较

**分类:** Research & Trends

**来源:** Harvard Library Innovation Lab

**更新日期:** 2026-10-14

**介绍:**

Harvard Library Innovation Lab 本周公开 AI Benchmarking Exercise 的网页工具和实验报告，用来评估 Agent 是否能为联邦数据集完成带有领域背景、检索和风险分级要求的任务。项目在同一批数据上比较三种方式：人工研究员独立完成、人工引导 LLM 完成，以及能够自主搜索互联网的后台 Agent；所有结果都与 Data Index 的专家风险评估对照。报告覆盖 47 个数据集和 6 个风险类别，使用完全匹配和距离专家答案的等级差来衡量结果，并同时记录模型、搜索量、运行时长和成本。实验中 DeepSeek V4 Pro 达到 55% 的类别完全匹配，所有模型平均偏差不超过一个等级；提示缓存还把一个模型的单数据集成本从 17.58 美元降到 3.74 美元。QA 可借鉴它同时验证任务结果、评分基线、搜索约束和成本的做法，但这些结果属于特定数据风险任务，不能外推成通用 Agent 能力或生产可靠性证明。

**链接:** [https://lil.law.harvard.edu/blog/2026/10/14/announcing-the-publication-of-an-agentic-assessment-tool/](https://lil.law.harvard.edu/blog/2026/10/14/announcing-the-publication-of-an-agentic-assessment-tool/)
