---
title: "指令微调（Instruction Tuning）"
titleEn: "Instruction Tuning"
titleZh: "指令微调"
slug: "instruction-tuning"
lang: "zh-cn"
summary: "指令微调用任务指令和示范答案训练模型，让它更容易按用户要求组织输出。"
topic: "ai-foundations"
aliases:
  - "指令微调"
  - "监督式微调"
tags:
  - "模型训练"
  - "后训练"
related:
  - "pretraining"
  - "rlhf"
  - "direct-preference-optimization-dpo"
lastReviewedAt: "2026-10-12"
---

# 指令微调（Instruction Tuning）

## 科普速读

- **它是什么：** 指令微调用请求和目标回答训练模型。
- **适合什么场景：** 教模型采用特定任务格式和响应方式。
- **主要边界：** 它不会安装一份固定且始终最新的知识库。

## 概览

一条训练样本可以要求“用三条总结测试日志”，并提供示范答案。模型反复学习类似样本后，更可能按类似方式响应。

## 核心定义

指令微调用包含任务指令和目标输出的样本训练模型。

## 背景与发展

预训练语言模型从数据中学习广泛模式。指令微调让模型更容易完成以请求形式表达的任务。

## 工作机制（How It Works）

训练集包含提示或指令以及目标输出。模型调整参数，使类似示例的输出更可能出现。监督式微调是常见做法。

## 在软件测试与开发中的应用

团队可以训练模型统一格式化缺陷摘要，或解释测试失败原因。开始训练前，也要比较提示词、检索和工作流规则等简单方案。

## 优势与局限

指令微调可以让模型在样本覆盖的任务上更一致。效果取决于样本质量，也不保证模型会遵循所有新指令或说对事实。

## 与相近术语对比

预训练学习更广泛的数据模式；指令微调侧重如何响应任务；RLHF 或 DPO 等偏好方法用偏好信号调整行为。

## 实施建议（Best Practices）

使用有代表性且经过审阅的样本，评测集与训练集分开，并在发布前检查回归、安全性和成本。

## 常见误区（Pitfalls）

不要以为示例中的事实会被模型永久、可靠地记住。微调能改变响应方式，却不能代替可靠的知识存储。

## FAQ

### 指令微调和预训练是一回事吗？

不是。指令微调通常发生在后续阶段，重点是任务指令和目标回答。

## 相关资源

### 相关词条

- [预训练](/zh-cn/AIWiki/pretraining/)
- [人类反馈强化学习](/zh-cn/AIWiki/rlhf/)
- [直接偏好优化](/zh-cn/AIWiki/direct-preference-optimization-dpo/)

### 参考资料

- [Finetuned Language Models Are Zero-Shot Learners](https://arxiv.org/abs/2109.01652)
