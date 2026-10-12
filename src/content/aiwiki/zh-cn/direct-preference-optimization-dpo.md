---
title: "直接偏好优化（DPO）"
titleEn: "Direct Preference Optimization (DPO)"
slug: "direct-preference-optimization-dpo"
lang: "zh-cn"
summary: "在不依赖完整强化学习流程下，利用偏好对直接对齐模型行为。"
topic: "ai-vibe-coding"
aliases:
  - "Direct Preference Optimization (DPO)"
  - "直接偏好优化（DPO）"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "reinforcement-fine-tuning-rft"
  - "reasoning-models"
  - "agent-evals"
  - "graders"
lastReviewedAt: "2026-10-12"
---
# 直接偏好优化（DPO）

## 科普速读

- **它是什么：** DPO 使用两种回答的偏好样本来微调模型。
- **适合什么场景：** 根据已标注的偏好对调整模型行为。
- **主要边界：** 模型也可能学到数据中的偏差。

## 概览

评审者可能更喜欢简明且引用断言的测试说明。DPO 数据集可以记录较受偏好的回答和较不受偏好的回答，再用这些比较调整模型。

## 核心定义

直接偏好优化（DPO）使用偏好对微调策略模型。原始方法在目标函数中使用参考策略；与常见的 RLHF 流程不同，它不要求单独训练奖励模型。具体实现可能不同。

## 背景与发展

偏好训练通过人的比较来调整模型回答。DPO 为偏好数据提出了一种直接优化目标。它是其中一种方法，并不是所有偏好训练的统称。

## 工作机制（How It Works）

1. 收集提示词和成对回答。
2. 标注每组中更受偏好的回答。
3. 使用偏好比较和参考策略微调模型。
4. 用留出的任务和安全案例评估新模型。

训练样本和目标函数会影响模型学到的行为。偏好标签不能证明内容在事实层面正确。

## 在软件测试与开发中的应用

团队可以比较两种 Bug 分析说明，并选择引用相关断言的一种。微调后，再检查模型是否改善了这项任务，同时没有削弱其他检查。

## 优势与局限

DPO 可以直接使用偏好比较训练模型。常见实现不需要单独训练奖励模型。效果仍取决于样本、标注、训练设置和评估方法。质量差的偏好数据可能让模型重视文风而忽略正确性。

## 与相近术语对比

指令微调通过示例教模型遵循要求。RLHF 通常先用偏好数据训练奖励模型，再进行强化学习。DPO 使用直接目标优化偏好对。强化微调可能使用任务奖励或评分器。

## 实施建议（Best Practices）

先定义该任务中什么回答算好，再检查标注质量。让评测提示词与训练数据分开。训练后检查事实、安全性和回归问题。

## 常见误区（Pitfalls）

不要把更受偏好的回答当成事实标准。不要假设 DPO 能消除偏差或必然提升质量。要检查模型是否能在训练样本之外表现出预期行为。

## FAQ

### DPO 需要单独训练奖励模型吗？

原始 DPO 方法不需要单独训练奖励模型，而是使用偏好比较和参考策略。其他偏好训练方法可能采用不同组件。

## 相关资源

### 相关词条

- [强化微调](/zh-cn/AIWiki/reinforcement-fine-tuning-rft/)
- [推理模型](/zh-cn/AIWiki/reasoning-models/)
- [Agent 评测](/zh-cn/AIWiki/agent-evals/)
- [评分器](/zh-cn/AIWiki/graders/)

### 外部参考

- [Direct Preference Optimization 论文](https://arxiv.org/abs/2305.18290)
