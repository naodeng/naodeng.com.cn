---
title: "强化微调（RFT）"
titleEn: "Reinforcement Fine-Tuning (RFT)"
slug: "reinforcement-fine-tuning-rft"
lang: "zh-cn"
summary: "通过强化信号微调模型，以提升特定任务表现。"
topic: "ai-vibe-coding"
aliases:
  - "Reinforcement Fine-Tuning (RFT)"
  - "强化微调（RFT）"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "direct-preference-optimization-dpo"
  - "reasoning-models"
  - "agent-evals"
  - "trace-grading"
lastReviewedAt: "2026-10-12"
---
# 强化微调（RFT）

## 科普速读

- **它是什么：** RFT 根据任务奖励或评分器提供的分数调整模型。
- **适合什么场景：** 目标清晰且结果可以评估的任务。
- **主要边界：** 模型学到的是评分信号，不一定是完整目标。

## 概览

团队可以训练模型生成测试案例，再根据 schema 和可执行检查对结果评分。只有当检查项能衡量实际需要的行为时，高分才有意义。

## 核心定义

强化微调（RFT）是在微调过程中使用强化学习方法。奖励信号或评分器评估候选输出，训练过程再调整模型，使其更倾向于产生高分行为。不同实现的算法和适用任务可能不同。

## 背景与发展

RFT 把基于奖励的学习用于预训练模型。一些供应商用这个名称描述特定 API 流程。功能支持范围和具体行为可能变化，实施前应查看当前文档。

## 工作机制（How It Works）

1. 定义任务和奖励标准。
2. 生成候选输出。
3. 使用评分器或奖励函数评价候选结果。
4. 按训练方法更新模型。
5. 使用独立数据和安全案例评估结果。

## 在软件测试与开发中的应用

团队可以用可执行测试给生成代码评分，也可以用结构化细则评估 Bug 解释。评分器应检查正确性和约束，而不只是格式。

## 优势与局限

当任务有有用的奖励信号时，RFT 可以针对该任务调整模型。但训练可能成本较高，也容易受到评分器错误影响。模型可能学会钻评分规则的空子，而没有解决真正的问题。

## 与相近术语对比

监督微调使用目标示例训练。DPO 使用偏好对和直接优化目标。RLHF 通常先用偏好数据训练奖励模型，再进行强化学习。RFT 是使用奖励反馈进行微调的较广泛称呼；不同供应商的定义可能不同。

## 实施建议（Best Practices）

确认独立评审者对任务标准有一致理解。设计不容易被利用的奖励规则。评测数据应与训练数据分开。检查高分和低分案例，并在训练后重新评估。

## 常见误区（Pitfalls）

不要认为高分就代表输出有用或安全。不要只用训练评分器评估模型。规划实现前要确认供应商当前是否支持相关功能。

## FAQ

### RFT 适用于所有任务吗？

不适用。它更适合目标能够通过有意义且可靠的信号进行评估的任务。

## 相关资源

### 相关词条

- [直接偏好优化](/zh-cn/AIWiki/direct-preference-optimization-dpo/)
- [推理模型](/zh-cn/AIWiki/reasoning-models/)
- [Agent 评测](/zh-cn/AIWiki/agent-evals/)
- [轨迹评分](/zh-cn/AIWiki/trace-grading/)

### 外部参考

- [OpenAI：强化微调指南](https://developers.openai.com/api/docs/guides/reinforcement-fine-tuning)
