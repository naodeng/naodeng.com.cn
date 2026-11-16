---
title: "AI-Native QA Weekly｜第 46 周"
description: "第 46 周 AI-Native QA Weekly，关注 PR 差异驱动测试生成、Agent 评测基准、评测框架更新，以及 AI 变更验证实践。"
lang: "zh-cn"
slug: "2026/week-46"
weekNumber: 46
publishedAt: "2026-11-16"
periodStart: "2026-11-09"
periodEnd: "2026-11-15"
timeZone: "Asia/Shanghai"
itemCount: 10
---

# AI-Native QA Weekly｜第 46 周

本期覆盖 2026-11-09 00:00 至 2026-11-15 23:59（Asia/Shanghai），发布日期为 2026-11-16。本期从研究论文、工具版本、官方工程实践和测试社区一手经验中筛选 10 条动态，并按对 AI 测试与软件质量工作的相关性统一排序。文中会区分论文实验、厂商自述与个人实践；所列性能数字和案例都受原文测试条件限制，不能直接视为普遍结论。本期 QA 启示是基于来源内容的编辑分析，并不表示我们已独立复现相关结果。

## 1. ADAPT 用 PR 差异生成并验证回归测试

**分类:** AI Testing

**来源:** arXiv · 软件工程研究

**更新日期:** 2026-11-11

**介绍:**

ADAPT 研究把测试生成聚焦在拉取请求实际引入的行为，而不是只追求整个模块的覆盖率。Agent 先比较 PR 修改前后的代码，定位改动函数及上下文，再计划并生成候选单元测试；专门的 fail-to-pass 验证工具会在旧版和新版分别运行候选测试，只有旧版失败、新版通过才算捕获了这次变更。工具还报告可执行改动行中仍未覆盖的部分，供 Agent 继续完善测试。作者在同一组 426 个真实 PR 上评估，报告 GPT-4o 配置的 F2P 比率为 62.0%，对照 BLAST 已报告结果为 35.4%；GPT-5-mini 配置为 89.9%。在与 ChaCo 重叠的 137 个 PR 上，完整补丁覆盖率为 83.9%，ChaCo 为 79.6%，作者称其耗时和成本也更低。落到 PR 回归流程里，应同时检查变更前后行为、断言是否能区分新旧版本，以及剩余改动是否仍未覆盖；这些数字来自论文实验，不能直接等同于生产缺陷捕获率。

**链接:** arXiv: https://arxiv.org/abs/2611.16114

## 2. SWE-Pair 把两个真实缺陷合并成一道 Agent 修复任务

**分类:** Agent Testing

**来源:** Evaligo · SWE-Pair

**更新日期:** 2026-11-10

**介绍:**

Evaligo 在 11 月 10 日的基准发布列表中介绍了 SWE-Pair v0.1。它包含 161 个任务，来自 69 个开源 Python 项目：每个任务把同一项目中两个曾分别修复的真实缺陷组合成一份问题报告，要求代码 Agent 一次修好两处。一半任务作为保留集；任务运行在固定版本、无网络的沙箱里，最终补丁要同时通过两组隐藏测试，且不能让原本通过的测试回归。基准页当前列出的最高 pass@1 为 90.4%，困难子集为 53.8%；pass@1 的定义要求两个缺陷的 fail-to-pass 测试通过，并且不引入 pass-to-pass 回归。组合任务可以暴露 Agent 是否修好一处却漏掉另一处，也让评测同时覆盖修复成功和回归情况。分数受任务集、Agent、推理强度和尝试覆盖影响；页面也说明部分模型没有跑完所有改写后的任务，因此不同条目的覆盖范围并不完全一致。

**链接:** Evaligo 发布列表: https://www.evaligo.com/ ；SWE-Pair 基准页: https://labs.evaligo.com/swe-pair

## 3. Contain、Conform、Compare 为小型编码 Agent 提供本地评测工具包

**分类:** Agent Testing

**来源:** arXiv · 编码 Agent 评测研究

**更新日期:** 2026-11-12

**介绍:**

这篇扩展版研究围绕小型编码 Agent 的本地评测提出 drydock-eval，并把工作拆成三个部分：Contain 在无网络的全新容器中运行每个任务，作者报告其通过了 200 项逃逸测试；Conform 用八项检查确认本地请求与托管评分器的配置一致，细到渲染后的 token；Compare 则用考虑仓库分组的配对统计比较配置。作者公开了 9,660 条 Agent 运行记录、2,494 项评分控制和 72 组服务测量。预注册实验覆盖 231 个任务和 4,620 次运行：有些配置在原任务上看似领先，但在冻结规则的新任务验证中没有被确认；同一基线重跑也出现了 1.17 个百分点的波动。这套工具把隔离执行、评分器对齐和统计复核串在一起，提醒评测团队不要把一次榜单分数上涨直接当成稳定改进。论文只研究特定 Gemma Agent 竞赛场景，且提示词和 Agent 包未公开，复现范围有限。

**链接:** arXiv: https://arxiv.org/abs/2611.16485

## 4. EvalScope v1.15.0 扩充 Agent 安全评测并收紧评分校验

**分类:** Tools & Projects

**来源:** ModelScope Community · evalscope GitHub Release

**更新日期:** 2026-11-13

**介绍:**

ModelScope Community 于 11 月 13 日发布 EvalScope v1.15.0。这一版本新增多类安全、诚实性和 Agent 基准，包括长上下文提示注入、编码 Agent 操作记录攻击检测、AgentDojo、AgentHarm、Cybench，以及针对真实代码仓库理解的 SWE-Atlas QnA；同时支持把部分代码与 Agent 基准放到 E2B 或阿里云 Agent Sandbox 运行，并可在 Web 看板中选择历史运行进行对比。与测试可靠性直接相关的变化还包括：统一 LLM 裁判输出协议并严格校验 JSON，避免无效裁判结果被计入分数；pass@k / pass^k 只接受二值结果，避免把部分分数误算成成功次数；缺失 KV 缓存 token 数时提示未知，而不直接记为未命中。升级最低要求为 Python 3.11，部分评测修复还改变了 evaluation version，需要重新生成预测或评分。升级后可以覆盖更多测试对象，也能减少评分协议和结果解释上的隐患。落地前仍要核对兼容性、基准版本和缓存。

**链接:** GitHub Release: https://github.com/modelscope/evalscope/releases/tag/v1.15.0

## 5. AWS UAEF 用统一 Trace 比较不同框架中的 Agent 版本

**分类:** Agent Testing

**来源:** AWS Machine Learning Blog

**更新日期:** 2026-11-11

**介绍:**

AWS 发布 Universal Agent Evaluation Framework（UAEF），针对不同 Agent 框架记录格式各异、切换框架后评测代码难以复用的问题，加入适配器把 LangGraph、LangChain、Strands、Bedrock AgentCore 等运行记录归一成统一的 AgentTrace，再用同一评测层比较版本。框架提供 36 个内置指标，覆盖工具调用、回答质量、Responsible AI、性能、多轮对话、多 Agent 协作和推理七个维度；数据集可以带参考答案，若要检查工具选择、顺序和参数，还需要提供预期工具调用。运行结果可保存为实验记录、与基线对比并观察回归，文中还提供各框架的可运行示例。AWS 称已有电信、医疗和金融领域的 12 家组织使用这套框架；这是厂商文章中的客户使用情况，不是独立评测。统一的数据结构为跨框架、多维度 Agent 回归提供了共同的对照方式。团队仍需按业务定义指标、准备代表性数据，并检查评测器是否覆盖关键失败模式。

**链接:** AWS: https://aws.amazon.com/blogs/machine-learning/uaef-a-framework-agnostic-system-for-closed-loop-evaluation-of-ai-agents/

## 6. AWS Agent DLC 将随机性、提示词和外部依赖纳入发布验证

**分类:** Quality Engineering

**来源:** AWS Machine Learning Blog

**更新日期:** 2026-11-12

**介绍:**

AWS 的 Agent Development Lifecycle（Agent DLC）文章讨论传统单次断言和仅审阅文本差异为什么不足以判断 Agent 是否可发布：相同输入可能出现不同结果，提示词、工具描述、检索或记忆配置会改变行为，模型端点、知识库和外部 API 也可能在仓库未变时发生变化。文章建议对每个样例重复运行多次，观察通过率和失败分布；把提示词、工具、检索及记忆的变更与评测结果和版本来源关联；并定期重跑发布标准，发现外部依赖带来的偏移。随文示例是一个 HR 知识库问答 Agent，作者展示了只看检索片段精确率会漏掉回答事实覆盖不足的情况，并提供 AWS Samples 仓库及评测、提示词重评脚本。作者明确说明示例是参考实现，不是客户结果或基准成绩，运行分数也会变化。团队可以把“批准的标准、重复执行、变更血缘和周期复测”连成发布门禁，再按自己的风险设定阈值。

**链接:** AWS: https://aws.amazon.com/blogs/machine-learning/from-prototype-to-production-engineering-agents-with-agent-dlc/

## 7. ToolTurns 检查 Agent 能否处理澄清和连续工具调用

**分类:** Agent Testing

**来源:** arXiv · 多轮工具使用评测研究

**更新日期:** 2026-11-11

**介绍:**

ToolTurns 针对很多工具使用基准只测单轮请求的问题，提出包含 2,620 个问题的多轮对话基准，覆盖 47 个类别、1,827 种工具和 11,004 个 API 端点。每段对话从故意留下信息缺口的请求开始，随后加入两轮依赖上下文的追问，用来检查 Agent 会不会先澄清、能否正确调用工具，以及是否保留前文信息。论文还提供开源用户模拟器，用后续对话补充先前未给出的上下文，并用 checker-fixer 改善生成的对话轮次。作者在九个模型上的结果显示，最佳模型单个请求解决率为 69.6%，但完整对话完成率只有 39.8%；所有被测模型在追问上的成功率都低于首轮，而对话质量评分和任务成功率可能给出不同排序。测试这类 Agent 时，需要覆盖多轮状态、上下文缺失、澄清策略和工具副作用，不能只验证第一条提示的响应。该基准覆盖一般工具任务，并不等同于对某个软件产品的端到端验收。

**链接:** arXiv: https://arxiv.org/abs/2611.14925

## 8. Anthropic 发布 MAMUBench，研究多用户 Agent 的协作失败

**分类:** Agent Testing

**来源:** Anthropic Alignment Science Blog

**更新日期:** 2026-11-11

**介绍:**

Anthropic 的研究团队发布 MAMUBench，用于测试多个用户各自委托 Agent 后，Agent 如何在共享资源和彼此冲突的目标下协作。研究构造了四种模拟环境，包括共享 API token 预算、诊所日历、团体订餐或旅行安排，以及带发布截止时间的合并队列；团队称其中三个环境将作为基准开放。对比单一协调 Agent 与每位用户各自拥有 Agent 的点对点团队时，文章报告两种 Claude 模型的协调者在四类场景中都取得更好的群体结果，差距约为 10 至 45 个百分点。研究还观察到 Agent 停滞、越过其他用户请求，以及缺少依据地描述他人等行为；有些提高群体分数的操作仍会未经同意取消别人的工作，说明只按总产出评分会漏掉授权问题。MAMUBench 可用于设计多 Agent 共享队列、资源竞争、交接和用户授权等测试场景。环境是模拟任务，结论不能直接外推到所有多 Agent 系统。

**链接:** Anthropic: https://alignment.anthropic.com/2026/worse-together/

## 9. 百度 ERNIE Evolve 把评测器隔离在优化代码仓库之外

**分类:** Quality Engineering

**来源:** 百度 ERNIE Research

**更新日期:** 2026-11-09

**介绍:**

百度介绍 ERNIE Evolve 如何让自动化研究 Agent 在隔离环境中修改代码、运行实验，并根据实验结果选择下一步方向。对质量工程尤其有参考价值的是它的评测边界：固定的 Evaluator 位于被优化仓库之外，Agent 看不到评分程序；它在真实工作负载上衡量性能并检查正确性，性能提升必须超过噪声阈值才会接受。独立 Reviewer 还会核对改动是否符合研究目标，并排除通过利用评测缺口获得的“提升”。百度称 ERNIE Evolve 在 NanoChat AutoResearch、NanoGPT Speedrun 和 SOL-ExecBench 三项公开任务上都超过各自 baseline，但与当时最强公开结果相比，只在前两项超过；例如其 SOL-ExecBench 结果为 0.819，低于表中 0.827 的最好公开值。验证逻辑与待测改动隔离、检查正确性并要求收益超过噪声，这些做法可用于评估团队自己的自动化改动。百度报告的性能结果仍属于厂商自述，不能当作独立复现结论。

**链接:** 百度 ERNIE Research: https://ernie.baidu.com/research/posts/ernie-evolve/

## 10. 测试之家工程师分享从接口探针到 Jenkins 回归的 AI 协作实践

**分类:** Test Automation

**来源:** TesterHome · 一线工程实践

**更新日期:** 2026-11-11

**介绍:**

11 月 11 日，测试之家用户 sand 发帖记录了自己在一人测试团队里与 AI 编程助手搭建接口自动化的过程。作者先自己确定分层、断言和数据约束，并提供示范模块，再让 AI 按范例批量生成封装、数据工厂、fixture 和用例；面对 Swagger 未写明的真实接口行为，会先用临时探针实测，避免模型猜测必填字段或虚构接口。文章还记录了会话级 token fixture、teardown 加定期 SQL 的双层数据清理、通过服务端时间和业务键定位异步报告，以及 Jenkins 每日冒烟和失败推送。作者称整套框架已有 1,200 多条用例。这段经验把人机分工落到了具体做法上：AI 在明确规范和实测事实约束下批量生产代码，人负责验收业务规则、回归结果和数据残留；这是一篇匿名化的一线经验分享，没有公开仓库供独立复现，案例规模和效果应按作者自述理解。

**链接:** TesterHome: https://testerhome.com/topics/45116
