---
title: "Transformer 与自注意力"
titleEn: "Transformers and Self-Attention"
titleZh: "Transformer 与自注意力"
slug: "transformer-self-attention"
lang: "zh-cn"
summary: "Transformer 用注意力层整合序列中的信息，是许多现代语言模型采用的架构基础。"
topic: "ai-foundations"
aliases:
  - "Transformer"
  - "自注意力"
tags:
  - "神经网络"
  - "LLM"
related:
  - "large-language-models-llms"
  - "reasoning-models"
  - "tokenization"
lastReviewedAt: "2026-10-12"
---

# Transformer 与自注意力

## 科普速读

- **它是什么：** Transformer 处理序列，自注意力关联不同位置的信息。
- **适合什么场景：** 理解许多语言模型采用的架构。
- **主要边界：** 注意力不保证理解或可靠性。

## 概览

在“把报告交给她，因为她负责发布”这句话里，模型要结合上下文把“她”和前面的角色联系起来。自注意力提供了一种组合 token 信息的机制。

## 核心定义

Transformer 是处理序列数据的神经网络架构；自注意力通过计算权重，让每个位置利用序列中其他位置的信息。

## 背景与发展

Transformer 架构作为循环序列模型的替代方案提出。注意力机制支持训练时并行处理，并被许多语言模型采用。

## 工作机制（How It Works）

每个 token 都表示为向量。自注意力比较查询向量和键向量来计算权重，再组合值向量。多层重复这些计算，形成带上下文的表示。

## 在软件测试与开发中的应用

代码模型可以结合函数定义、调用处和错误信息生成修改建议。上下文缺失或被截断时，建议仍可能出错。

## 优势与局限

注意力能关联输入中相距较远的部分。它不证明哪些信息真正重要，也不能用人类语言完整解释模型决策或保证答案正确。

## 与相近术语对比

自注意力关联当前输入中的 token；检索从外部索引寻找资料并加入上下文；分词则生成 Transformer 要处理的 token 序列。

## 实施建议（Best Practices）

提供相关代码和错误上下文，控制输入长度，并用测试和代码审查验证生成的改动。

## 常见误区（Pitfalls）

不要把注意力权重当作模型行为的完整解释。它只是计算的一部分，不是可靠性评分。

## FAQ

### 自注意力意味着模型理解了全部输入吗？

不是。它是组合不同 token 表示的一种数学运算。

## 相关资源

### 相关词条

- [大语言模型](/zh-cn/AIWiki/large-language-models-llms/)
- [推理模型](/zh-cn/AIWiki/reasoning-models/)
- [分词与 Token](/zh-cn/AIWiki/tokenization/)

### 参考资料

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
