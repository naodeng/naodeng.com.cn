---
title: "智能体评测"
titleEn: "Agent Evals"
slug: "agent-evals"
lang: "zh-cn"
summary: "通过可重复基准测试评估智能体在任务、策略与结果上的表现。"
topic: "ai-vibe-coding"
aliases:
  - "Agent Evals"
  - "智能体评测"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "graders"
  - "trace-grading"
  - "verification-artifacts"
  - "artifact-feedback-loop"
lastReviewedAt: "2026-10-12"
---
# Agent 评测（Agent Evaluations）

## 科普速读

- **它是什么：** Agent 评测按明确的任务和安全标准检查 Agent 表现。
- **适合什么场景：** 比较不同版本，并发现工具工作流中的失败。
- **主要边界：** 评测结果受测试案例、环境和评分器影响。

## 概览

可以让编码 Agent 修复一个小型仓库中的 Bug，再检查补丁是否满足要求、相关测试是否通过，以及操作是否符合限制。

## 核心定义

Agent 评测是对 Agent 可观察行为和任务结果进行的结构化检查。评测内容可以包括最终输出、工具调用、策略遵循情况和资源使用。它不要求读取模型的私有推理过程。

## 背景与发展

传统软件测试常检查确定性输入和输出。Agent 评测还要考虑模型回答变化、工具调用和任务完成情况。需要判断的标准可以结合自动检查与人工评审。

## 工作机制（How It Works）

1. 定义有代表性的任务和约束。
2. 在受控且有记录的环境中运行 Agent。
3. 按评分规则检查输出和可观察操作。
4. 需要评估波动时，重复运行。
5. 复核失败案例，并比较不同版本的结果。

评分器可以是测试脚本、人员或模型。不同类型的评分器有不同的误差风险。

## 在软件测试与开发中的应用

可评估 Bug 修复、测试生成、仓库问答和工具权限。保存任务输入、代码版本、环境设置和评分器版本，便于复现比较。

## 优势与局限

评测可以发现回归问题，也能比较不同版本的权衡。小型测试集可能漏掉真实任务。模型评分器可能与人工意见不一致，也可能偏好某种回答风格。通过评测不能证明系统在生产环境中可靠。

## 与相近术语对比

Agent 评测覆盖一组任务和评价标准。评分器根据一个或多个标准评估结果。单元测试检查指定程序行为。轨迹评分检查 Agent 运行中记录的步骤。

## 实施建议（Best Practices）

使用真实任务和清晰的通过标准，加入负例和边界案例。评测数据应与训练数据分开。用人工评审校准模型评分器，并检查失败案例。

## 常见误区（Pitfalls）

不要只依赖单个分数或单次运行。若不同版本使用了不同工具或环境，应记录差异后再比较。不要把模型评分器当成事实标准。

## FAQ

### Agent 评测能证明 Agent 是安全的吗？

不能。评测只能提供被测任务和条件下的证据。其他任务或环境可能暴露不同问题。

## 相关资源

### 相关词条

- [graders](https://inaodeng.com/zh-cn/AIWiki/graders/)
- [trace-grading](https://inaodeng.com/zh-cn/AIWiki/trace-grading/)
- [self-healing-code](https://inaodeng.com/zh-cn/AIWiki/self-healing-code/)
- [agentic-workflow](https://inaodeng.com/zh-cn/AIWiki/agentic-workflow/)

### 外部参考

- [OpenAI Evals Framework (GitHub)](https://github.com/openai/evals)
- [LangChain Evaluation Documentation](https://python.langchain.com/docs/guides/evaluation)
