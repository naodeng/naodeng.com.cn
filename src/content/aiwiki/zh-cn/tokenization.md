---
title: "分词与 Token（Tokenization）"
titleEn: "Tokenization and Tokens"
titleZh: "分词与 Token"
slug: "tokenization"
lang: "zh-cn"
summary: "分词器把文字、代码和符号切成模型可处理的 token；切分方式会影响上下文长度和调用成本。"
topic: "ai-foundations"
aliases:
  - "Token"
  - "分词"
tags:
  - "LLM"
  - "模型基础"
related:
  - "large-language-models-llms"
  - "small-language-models-slms"
  - "embeddings"
lastReviewedAt: "2026-10-12"
---

# 分词与 Token（Tokenization）

## 科普速读

- **它是什么：** 分词把输入转成模型词表中的 token ID。
- **适合什么场景：** 理解上下文限制和按 token 计费。
- **主要边界：** 一个 token 不等于一个词，也不代表回答质量。

## 概览

分词器可能把代码名 checkoutTimeout 切成几个片段。同一段文字在不同模型里也可能占用不同数量的 token。

## 核心定义

分词把文字、代码或其他输入映射成模型能够处理的 token ID 序列。

## 背景与发展

语言模型处理的是数值输入，不是原始文字字符。分词器提供词表和规则，把输入转换成这些数值单位。

## 工作机制（How It Works）

分词器按词表匹配输入，再输出 token ID 序列。解码器把模型生成的 ID 还原成文字。一个 token 可以是词、词片段、标点或其他符号。

## 在软件测试与开发中的应用

提示词、仓库片段、日志和生成内容会共享模型上下文预算。清理无关日志，可以在保留关键信息的同时减少输入。

## 优势与局限

分词为模型提供可处理的输入表示，也让系统能够计算上下文用量。不同分词器对同一输入的切分不同，估算值也可能不准。

## 与相近术语对比

分词把输入映射成离散 ID；嵌入把输入映射成数值向量；向量搜索比较嵌入，不负责统计 token 数量。

## 实施建议（Best Practices）

需要精确计数时使用目标模型的分词器。提示词接近上下文上限时，只保留相关代码和日志。

## 常见误区（Pitfalls）

不要把一个 token 当成一个词或一个思想单位。token 数量本身也不能预测答案质量。

## FAQ

### 一个 token 一定是一个词吗？

不是。它可能是完整词、词片段、标点或其他符号。

## 相关资源

### 相关词条

- [大语言模型](/zh-cn/AIWiki/large-language-models-llms/)
- [小语言模型](/zh-cn/AIWiki/small-language-models-slms/)
- [向量嵌入](/zh-cn/AIWiki/embeddings/)

### 参考资料

- [Hugging Face Tokenizers 文档](https://huggingface.co/docs/tokenizers/)
