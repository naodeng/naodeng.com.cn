---
title: "轨迹评分"
titleEn: "Trace Grading"
slug: "trace-grading"
lang: "zh-cn"
summary: "不仅评估最终结果，也对中间推理与动作轨迹进行评分。"
topic: "ai-vibe-coding"
aliases:
  - "Trace Grading"
  - "轨迹评分"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "agent-evals"
  - "graders"
  - "verification-artifacts"
  - "artifact-feedback-loop"
lastReviewedAt: "2026-03-02"
---

# 推理路径评分（Trace Grading）

> 一句话定义：一种不仅评估 AI 任务的最终结果，且对 Agent 在完成任务过程中执行的每一个中间思考步骤、工具调用及决策逻辑进行深度分析与判分的评估方法。

## 科普速读

- 解决问题：把“感觉好用”变成“可量化质量”。
- 适用场景：用于评测、回归、验收和策略对比。
- 使用边界：不适合只看一次结果就下结论。

## 概览

`轨迹评分` 常被误解为“高级功能”，但它本质上是为了解决工程交付中的基础问题：结果不稳定、流程不可复用、问题难以追踪。从科普视角看，它的价值在于把 AI 从“会回答”推进到“可落地”。

## 核心定义

### 标准定义

Trace Grading 是对 Agent 运行轨迹（Trace/Log）的结构化审计。它从轨迹中提取 **“思考片段 (Thoughts)”**、**“动作 (Actions)”** 和 **“观察结果 (Observations)”**，并结合时间戳和资源消耗数据，针对每一步的合理性、合规性及效率进行独立评分。

### 通俗解释

如果把 AI 工作流比作流水线，`轨迹评分` 就是其中负责“减少出错、提高可复用性”的关键工位。它不是为了炫技，而是为了让团队在真实项目里更稳地交付结果。

## 背景与发展

### 起源

- **提出背景**：复杂的 Agent 任务往往包含几十个步骤。仅看终点无法区分“靠实力完成”和“靠运气撞巧完成”。
- **关注重点**：决策链路的稳健性（Robustness）与成本效率（Token Efficiency）。

### 演进

- **End-to-End Eval 时代**：只看最终代码跑不跑得通。
- **Step-by-Step Eval 时代**：开始关注每一步的成功率。
- **Deep Trace Audit 时代**：引入高阶模型对 Agent 的“心路历程”进行语义化审计，识别逻辑漏洞。

## 工作机制（How It Works）

1. **轨迹捕获 (Instrumentation)**：使用 OpenTelemetry 或专有的 Trace 库监控 Agent 的全生命周期，将所有意图和调用保存为 JSON/Trace 文件。
2. **片段切分 (Slicing)**：将冗长的 Trace 切分为独立的逻辑块（如：需求分析块、文件读取块、代码编写块）。
3. **分阶段 Rubric 匹配**：
   - **规划阶段**：计划是否包含了所有必要步骤？是否遗漏了重要的边界条件？
   - **执行阶段**：调用的工具参数是否正确？是否在短时间内进行了重复且无效的尝试？
4. **异常检测 (Anomaly Detection)**：自动识别“循环调用”（Looping）或“权限越界”等异常路径。
5. **综合判分**：汇总各阶段分数，生成一份包含 **“推理一致性分数”** 和 **“资源效率分数”** 的深度报告。

## 在软件测试与开发中的应用

- **找出“过度思考”的 Agent**：通过 Trace Grading 识别那些写三行代码却要进行 20 次自我对话的低效 Agent，从而优化 Prompt 结构。
- **安全合规性审计**：在金融或医疗行业，利用 Trace Grading 自动化审查 AI 是否非法访问了非授权目录。
- **Bug 复现路径优化**：当 Agent 修复了一个极难复现的 Bug 时，通过 Trace Grading 提取其成功的关键推理点，转化为团队的 SOP 文档。

## 优势与局限

### 优势

- **根因分析 (Root Cause Analysis)**：能精准指出 Agent 在哪一秒、哪一步开始产生幻觉或执行错误。
- **抑制成本浪费**：量化每一步的价值，淘汰那些“话痨型”模型配置。
- **提升安全性**：捕获那些隐蔽的、不产生可见报错但违反策略的中间行为。

### 局限与风险

- **数据量巨大**：一个复杂任务的 Trace 文件可能达到数 MB，解析和分析成本极高。
- **判分复杂度**：对“思考过程”进行判分非常主观，需要编写极细致的 Rubric 和强大的判分模型。
- **过度干预风险**：如果评分逻辑太死板，可能会扼杀 Agent 解决问题时的“创造力”路径。

## 与相近术语对比

| 维度 | Trace Grading (路径评分) | Output Eval (结果评估) | Unit Testing (单元测试) |
| :--- | :--- | :--- | :--- |
| **关注点** | **动作逻辑与动机** | 最终输出的一致性 | 代码功能的正确性 |
| **可观测性** | 极高（全透明） | 较低（灰盒） | 高（白盒） |
| **适合场景** | 复杂多步 Agent | 简单 Chat/补全任务 | 确定性函数 |

## 实施建议（Best Practices）

- **抽样深度审计**：由于全量审计太贵，可以对 90% 的请求进行结果评估，对剩余 10% 的请求进行 Trace Grading 深度审计。
- **热点分析**：找出所有失败任务中重合度最高的“报错路径”，将其作为重点优化对象。
- **与产物反馈闭环结合**：如果 Trace 表明 Agent 在某个工具上反复失败，应自动调整该工具的 Description 或权限。

## 常见误区（Pitfalls）

- **把 Trace 等同于 Log**：Log 只是文本流，Trace 应该是包含父子关系、耗时和语义意图的结构化树图。
- **忽略了观察结果 (Observations)**：评估时不看工具返回了什么，就无法判断 Agent 的决策是否合理。

## FAQ

### Q1: 新手是否需要马上使用它？

A: 取决于任务复杂度。简单任务可先不用；一旦涉及团队协作、自动化或上线风险，就建议尽早引入。

### Q2: 如何避免“用了很多机制但效果一般”？

A: 先设清晰目标与指标，再逐步引入机制；每次只调整一个变量，避免同时改太多。

## 相关资源

### 相关词条

- [agent-evals](/zh-cn/AIWiki/agent-evals/)
- [graders](/zh-cn/AIWiki/graders/)
- [reflection](/zh-cn/AIWiki/reflection/)
- [autonomous-agents](/zh-cn/AIWiki/autonomous-agents/)

### 外部参考

- [LangSmith: How to grade your LLM tracing](https://docs.smith.langchain.com/)
- [Observability for AI Agents: Traces and Scores](https://docs.qoder.com/)
