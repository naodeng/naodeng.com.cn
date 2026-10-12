---
title: "预训练（Pretraining）"
titleEn: "Pretraining"
titleZh: "预训练"
slug: "pretraining"
lang: "zh-cn"
summary: "预训练让模型从大量数据中的学习目标建立通用模式，为后续指令微调和应用提供起点。"
topic: "ai-foundations"
aliases:
  - "基础模型预训练"
tags:
  - "模型训练"
  - "LLM"
related:
  - "large-language-models-llms"
  - "small-language-models-slms"
  - "instruction-tuning"
  - "mixture-of-experts"
  - "test-time-compute"
  - "transformer-self-attention"
lastReviewedAt: "2026-10-12"
---

# 预训练（Pretraining）

## 科普速读

- **它是什么：** 预训练让模型通过初始学习目标，从大量数据中学习模式。
- **适合什么场景：** 为后续适配和应用提供模型起点。
- **主要边界：** 学到的模式不是经过核实的最新事实库。

## 概览

许多语言模型会根据前文预测可能出现的下一个 token。这让它们获得可用于语言或代码任务的模式。

## 核心定义

预训练是模型的初始训练阶段，通过特定学习目标形成供后续阶段使用的参数表示。

## 背景与发展

预训练为许多现代语言模型提供基础。后续的指令微调、偏好训练、检索和工具可以继续调整模型如何完成任务。

## 工作机制（How It Works）

训练过程提供大规模数据和学习目标，例如预测文本后续内容。模型通过大量样本调整参数，以减少预测误差。

## 在软件测试与开发中的应用

预训练模型可以起草代码或解释常见模式。检索能补充当前仓库信息，测试能检查生成的代码是否可用。

## 优势与局限

预训练能让单个模型获得较广泛的语言和代码能力。数据缺失、信息过时和训练选择都会影响结果，模型也可能输出无依据的说法。

## 与相近术语对比

预训练学习广泛模式；指令微调专注任务请求与回答；偏好优化可以进一步调整行为。

## 实施建议（Best Practices）

把预训练视为能力起点。项目任务应提供可信的当前上下文，并按需求测试输出。

## 常见误区（Pitfalls）

不要以为预训练模型已经适合特定产品，也不要假设它学到的信息始终最新。

## FAQ

### 预训练意味着模型掌握了训练数据里的事实吗？

不意味着。模型学习数据模式，但不会因此变成经过核实的事实数据库。

## 相关资源

### 相关词条

- [大语言模型](/zh-cn/AIWiki/large-language-models-llms/)
- [小语言模型](/zh-cn/AIWiki/small-language-models-slms/)
- [指令微调](/zh-cn/AIWiki/instruction-tuning/)

### 参考资料

- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)
