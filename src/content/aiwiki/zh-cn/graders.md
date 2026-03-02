---
title: "评分器"
titleEn: "Graders"
slug: "graders"
lang: "zh-cn"
summary: "用于按质量标准自动评估模型或智能体输出的程序化评分器。"
topic: "ai-vibe-coding"
aliases:
  - "Graders"
  - "评分器"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "agent-evals"
  - "trace-grading"
  - "verification-artifacts"
  - "structured-outputs"
lastReviewedAt: "2026-03-02"
---

# 评分器（Graders）

> 一句话定义：一种专门负责对 AI 任务输出进行评估、分类或量化打分的“裁判”模型或脚本程序。

## 科普速读

- 解决问题：把“感觉好用”变成“可量化质量”。
- 适用场景：用于评测、回归、验收和策略对比。
- 使用边界：不适合只看一次结果就下结论。

## 概览

`评分器` 常被误解为“高级功能”，但它本质上是为了解决工程交付中的基础问题：结果不稳定、流程不可复用、问题难以追踪。从科普视角看，它的价值在于把 AI 从“会回答”推进到“可落地”。

## 核心定义

### 标准定义

Grader 是评估框架中的执行单元。它接收任务的输入（Input）、模型的响应（Output）以及可选的参考答案（Reference/Golden Answer），并根据特定的评分准则（Rubric）输出得分、理由或分类结果。

### 通俗解释

如果把 AI 工作流比作流水线，`评分器` 就是其中负责“减少出错、提高可复用性”的关键工位。它不是为了炫技，而是为了让团队在真实项目里更稳地交付结果。

## 背景与发展

### 起源

- **提出背景**：随着 Agent 任务变得复杂（如生成几百行代码），人类已经无法通过肉眼逐一核对。
- **关注重点**：评估的“准确性”与“效率”之间的平衡。

### 演进

- **脚本 Grader 时代**：写 Regex 或 Assert 语句检查。只能检查格式，不能检查逻辑。
- **LLM-as-a-Judge 时代**：用超大规模模型做 Grader。虽然聪明，但太贵且存在幻觉。
- **定制化小模型 Grader 时代**：通过高质量的人工评分数据训练专用 Grader，实现高性能、低延迟且极其客观的评分。

## 工作机制（How It Works）

1. **接收上下文**：Grader 获取到用户原始请求和 Agent 的输出。
2. **加载 Rubric（评分量表）**：例如：“如果输出包含敏感词，扣 10 分；如果解决了 Bug 且代码风格一致，得 100 分”。
3. **推理分析 (Evaluation Logic)**：
   - **基于代码的 Grader**：运行 `npm test` 或 `pytest`。
   - **基于语义的 Grader**：使用 LLM 进行逻辑推导，判断回答是否满足用户隐含需求。
4. **输出报告**：返回得分（Score）、分项指标（Metrics）和详细理由（Rationale）。

## 在软件测试与开发中的应用

- **自动筛选最优答案**：让 Agent 并行生成三个版本的修复方案，由 Grader 自动选出那个测试通过率最高、代码最简洁的版本。
- **幻觉检测过滤**：在将 AI 生成的文档发布之前，由 Grader 交叉检查文档事实与数据库是否匹配，拦截潜在的幻觉。
- **回归测试工厂**：在 CI 环境中，利用成千上万个 Grader 实例同时对海量历史案例进行打分，快速识别模型升级带来的负面影响。

## 优势与局限

### 优势

- **规模化生产力**：一分钟可以处理上万份“作业”，这在物理世界是不可能的。
- **标准一致性**：Grader 不会因为疲劳或心情不好而改变评分标准。
- **结构化反馈**：提供具体的扣分原因，帮助开发者精准改进 Prompt。

### 局限与风险

- **裁判偏差 (Bias)**：如果 Grader 模型本身有偏好，它会误导开发者。
- **过度拟合**：开发者可能会为了迎合 Grader 的口味而优化 Prompt，但这种优化对真实用户未必有效。
- **自循环谬误**：绝对不能用模型 A 训练出来的 Grader 去评测同一个模型 A 的输出，这会导致“循环论证”。

## 与相近术语对比

| 维度 | Graders (评分器) | Deterministic Tests (断言测试) | Evaluators (评估框架) |
| :--- | :--- | :--- | :--- |
| **判定逻辑** | **语义理解为主** | 逻辑匹配 (True/False) | 整个流程的管理层 |
| **处理语义能力** | 强 | 无 | 中 |
| **确定性** | 较低 | 极高 | 取决于 Grader 对象 |

## 实施建议（Best Practices）

- **组合式 Grader**：用代码脚本检查“硬性指标”（如 JSON 格式），用 LLM 检查“软性指标”（如可读性）。
- **理由优先 (Chain-of-Thought Grading)**：要求 Grader 在给出分数前先写下它的评估逻辑，这能显著提高评分的准确率。
- **定期校准**：每个月抽样 1% 的 Grader 结果进行人工 Review，确保 AI 裁判没有“走偏”。

## 常见误区（Pitfalls）

- **把 Grader 当成最终真理**：Grader 只是一个参考指标。特别是在涉及极高安全性要求的任务时，依然需要专家复核。
- **忽略 Grader 的响应时延**：如果 Grader 太慢，会拖慢整个开发者的反馈回路。

## FAQ

### Q1: 新手是否需要马上使用它？

A: 取决于任务复杂度。简单任务可先不用；一旦涉及团队协作、自动化或上线风险，就建议尽早引入。

### Q2: 如何避免“用了很多机制但效果一般”？

A: 先设清晰目标与指标，再逐步引入机制；每次只调整一个变量，避免同时改太多。

## 相关资源

### 相关词条

- [agent-evals](/zh-cn/AIWiki/agent-evals/)
- [trace-grading](/zh-cn/AIWiki/trace-grading/)
- [self-healing-code](/zh-cn/AIWiki/self-healing-code/)

### 外部参考

- [How to build a reliable Grader](https://docs.smith.langchain.com/concepts/evaluation)
- [The Art of Evaluation: Evaluators and Graders in AI](https://docs.qoder.com/)
