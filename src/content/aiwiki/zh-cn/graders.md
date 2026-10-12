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
lastReviewedAt: "2026-10-12"
---
# 评分器（Graders）

## 科普速读

- **它是什么：** 评分器按明确标准评估 AI 输出或任务结果。
- **适合什么场景：** 检查一组评测案例中的预期行为。
- **主要边界：** 评分器可能不完整、不一致或带有偏差。

## 概览

评分器可以检查生成的测试能否编译、是否包含断言。测试是否覆盖目标行为，仍可能需要单独评审。

## 核心定义

评分器是按标准给结果评分或分类的人员、程序或模型。它可以检查精确输出、规则、参考答案或评分细则。可靠性取决于任务和设计。

## 背景与发展

不同任务需要不同的评估方法，因此评测系统会使用不同类型的评分器。精确条件适合用确定性检查；没有唯一答案的内容则可能需要人工或模型评审。

## 工作机制（How It Works）

1. 定义评价标准和所需证据。
2. 向评分器提供结果及必要上下文。
3. 根据规则、评分细则或参考答案进行评估。
4. 记录分数和解释。
5. 复核意见不一致或难以判断的案例。

## 在软件测试与开发中的应用

可以用脚本检查语法和测试结果，再用评分细则检查说明是否引用正确代码。用于重要决策前，应先把模型评分结果与人工判断进行比较。

## 优势与局限

自动评分器能重复执行明确检查。人工和模型评分器可以评估更开放的内容。任何评分器都可能漏掉缺陷或奖励错误信号。解读分数时，应同时考虑评测集和评分细则。

## 与相近术语对比

评分器按标准评估单个结果。评测是使用一组案例检查系统的整体过程。单元测试检查已定义的软件行为。轨迹评分器评估 Agent 运行中记录的事件。

## 实施建议（Best Practices）

能使用确定性检查时优先使用。明确评分细则，并测试正例、反例和边界案例。统计意见分歧，并抽样进行人工复核。

## 常见误区（Pitfalls）

不要假设模型评分器客观无偏。评分器给出的解释不能证明分数正确。如果要求检查行为，不要只评价表面特征。

## FAQ

### LLM 评分器可以取代人工评审吗？

不能默认取代。它可以辅助执行明确标准，但团队应先验证评分器，并复核不确定或影响较大的案例。

## 相关资源

### 相关词条

- [agent-evals](https://inaodeng.com/zh-cn/AIWiki/agent-evals/)
- [trace-grading](https://inaodeng.com/zh-cn/AIWiki/trace-grading/)
- [self-healing-code](https://inaodeng.com/zh-cn/AIWiki/self-healing-code/)

### 外部参考

- [How to build a reliable Grader](https://docs.smith.langchain.com/concepts/evaluation)
- [The Art of Evaluation: Evaluators and Graders in AI](https://docs.qoder.com/)
