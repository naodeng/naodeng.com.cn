---
title: "训练数据投毒（Training Data Poisoning）"
titleEn: "Training Data Poisoning"
titleZh: "训练数据投毒"
slug: "training-data-poisoning"
lang: "zh-cn"
summary: "训练数据投毒通过污染训练或微调样本，试图让模型学到错误关联、偏置行为或隐藏后门。"
topic: "ai-safety-quality"
aliases:
  - "数据投毒"
  - "模型投毒"
tags:
  - "AI 安全"
  - "数据治理"
related:
  - "synthetic-training-data"
  - "ai-supply-chain-security"
  - "prompt-injection"
lastReviewedAt: "2026-10-12"
---

# 训练数据投毒（Training Data Poisoning）

## 科普速读

- **它是什么：** 数据投毒会污染训练样本，试图改变模型行为。
- **适合什么场景：** 评估数据收集、微调和反馈管道的风险。
- **主要边界：** 单项过滤无法证明数据集中没有恶意样本。

## 概览

攻击者可能加入带有特定触发词的错误样本，让模型在看到该词时表现异常。这种改变可能进入训练，却在普通测试中不明显。

## 核心定义

训练数据投毒是有意更改训练或微调数据，让模型按攻击者期望行动或降低性能。

## 背景与发展

机器学习模型依赖训练数据。团队会组合公开、供应商、用户和合成数据，因此数据管道也属于系统安全边界的一部分。

## 工作机制（How It Works）

攻击者向训练来源中插入或更改样本。模型从这些样本学习后，可能形成定向行为、偏差或性能下降。

## 在软件测试与开发中的应用

审查数据来源和处理过程，并测试罕见触发词与异常输入。保留模型、适配器和数据集版本，便于调查意外行为。

## 优势与局限

数据审查和来源追踪能降低风险，也有助于调查问题。它们仍可能漏掉精心设计或出现频率很低的投毒样本。

## 与相近术语对比

数据投毒针对训练数据；提示注入针对模型运行时读取的内容。供应链问题可能引入投毒，也可能影响其他资产。

## 实施建议（Best Practices）

记录数据来源和转换过程，去除重复样本，审查高风险新增内容，并让评测数据独立于训练来源。

## 常见误区（Pitfalls）

不要只测试常见输入，也不要声称扫描无异常就证明数据没有被投毒。

## FAQ

### 数据投毒和提示注入是一回事吗？

不是。数据投毒试图改变训练结果；提示注入试图在使用阶段影响模型。

## 相关资源

### 相关词条

- [合成训练数据](/zh-cn/AIWiki/synthetic-training-data/)
- [AI 供应链安全](/zh-cn/AIWiki/ai-supply-chain-security/)
- [提示注入](/zh-cn/AIWiki/prompt-injection/)

### 参考资料

- [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final)
