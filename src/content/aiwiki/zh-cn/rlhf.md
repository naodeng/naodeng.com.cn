---
title: "人类反馈强化学习（RLHF）"
titleEn: "Reinforcement Learning from Human Feedback"
titleZh: "人类反馈强化学习"
slug: "rlhf"
lang: "zh-cn"
summary: "RLHF 利用人类偏好信号调整模型行为，常见流程包含偏好比较、奖励建模和策略优化。"
topic: "ai-foundations"
aliases:
  - "RLHF"
tags:
  - "模型训练"
  - "偏好对齐"
related:
  - "instruction-tuning"
  - "direct-preference-optimization-dpo"
  - "reinforcement-fine-tuning-rft"
lastReviewedAt: "2026-10-12"
---

# 人类反馈强化学习（RLHF）

## 科普速读

- **它是什么：** RLHF 用人类偏好信号调整模型行为。
- **适合什么场景：** 让回答更符合特定的人类偏好。
- **主要边界：** 偏好不等于事实正确。

## 概览

标注者比较同一问题的两份回答并选出更喜欢的一份。训练过程使用这些比较，让类似回答更容易出现。

## 核心定义

人类反馈强化学习（RLHF）把人类反馈作为训练信号，用来调整模型行为。

## 背景与发展

RLHF 因指令跟随语言模型的研究而广为人知。这个名称涵盖多类方法，并非所有系统都使用相同步骤。

## 工作机制（How It Works）

常见流程先收集示范和偏好比较，再训练奖励模型，最后优化语言模型以获得更高奖励。其他方法也可以采用不同反馈方式。

## 在软件测试与开发中的应用

团队可以用偏好数据让模型更倾向于给出简洁、可执行的代码建议。但仍要检查代码能否编译、通过测试并满足安全要求。

## 优势与局限

偏好训练可以调整语气、格式或回答选择，使其更符合评审者判断。结果受反馈和奖励设计影响，回答听起来更有帮助，不代表事实更准确。

## 与相近术语对比

指令微调从示范回答中学习；RLHF 使用偏好反馈调整行为；DPO 是一种无需单独奖励模型的偏好训练方法。

## 实施建议（Best Practices）

给标注者明确标准，记录意见分歧，单独评估正确性，并把偏好数据和评测数据分开。

## 常见误区（Pitfalls）

不要认为偏好的回答必然正确，也不要把所有用户行为都当成直接训练反馈。

## FAQ

### RLHF 会让模型更真实吗？

它本身不能保证。RLHF 根据偏好信号调整行为；事实仍需证据和评测。

## 相关资源

### 相关词条

- [指令微调](/zh-cn/AIWiki/instruction-tuning/)
- [直接偏好优化](/zh-cn/AIWiki/direct-preference-optimization-dpo/)
- [强化微调](/zh-cn/AIWiki/reinforcement-fine-tuning-rft/)

### 参考资料

- [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)
