---
title: "合成训练数据（Synthetic Training Data）"
titleEn: "Synthetic Training Data"
titleZh: "合成训练数据"
slug: "synthetic-training-data"
lang: "zh-cn"
summary: "合成训练数据由模型或程序生成，可扩充样本，但必须检查错误、重复、偏差和与评测集的污染。"
topic: "ai-foundations"
aliases:
  - "合成数据"
tags:
  - "数据"
  - "模型训练"
related:
  - "knowledge-distillation"
  - "training-data-poisoning"
  - "agent-evals"
lastReviewedAt: "2026-10-12"
---

# 合成训练数据（Synthetic Training Data）

## 科普速读

- **它是什么：** 合成训练数据由模型、程序或规则生成。
- **适合什么场景：** 为罕见任务或格式统一的任务补充样本。
- **主要边界：** 生成更多样本不代表数据质量更高。

## 概览

团队可以生成“代码请求、补丁和测试说明”样本，再审阅后用于训练模型。

## 核心定义

合成训练数据是由软件、规则或模型创建、供模型训练使用的样本。

## 背景与发展

在人类样本稀缺或成本较高时，合成数据可以扩充训练材料。实际价值取决于生成、筛选和检查方式。

## 工作机制（How It Works）

生成器根据提示词、模板、规则或已有数据创建样本。数据进入训练前，团队要筛掉错误、重复和不适合的内容。

## 在软件测试与开发中的应用

可以生成罕见编程语言、错误案例或格式统一的代码审查样本。记录生成器、筛选规则和数据集版本，保留来源信息。

## 优势与局限

合成样本生成较快，格式也容易统一。它可能重复错误、继承生成器偏差，或无法代表真实用户任务。

## 与相近术语对比

训练数据用于更新模型；评测数据用于衡量表现；蒸馏可能使用教师生成的输出，但它描述的是训练方法，而不是单独的数据来源。

## 实施建议（Best Practices）

审阅样本，检查重复和来源，评测数据与训练数据分开，并使用真实或独立创建的案例测试。

## 常见误区（Pitfalls）

不要让相同生成问题同时进入训练集和评测集，也不要用样本数量替代质量检查。

## FAQ

### 合成训练数据能取代人工样本吗？

不一定。应把它的覆盖范围和错误率与经过审阅的真实样本、独立评测进行比较。

## 相关资源

### 相关词条

- [知识蒸馏](/zh-cn/AIWiki/knowledge-distillation/)
- [训练数据投毒](/zh-cn/AIWiki/training-data-poisoning/)
- [AI Agent 评测](/zh-cn/AIWiki/agent-evals/)

### 参考资料

- [Self-Instruct 论文](https://arxiv.org/abs/2212.10560)
