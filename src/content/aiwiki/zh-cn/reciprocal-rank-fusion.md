---
title: "倒数排名融合（RRF）"
titleEn: "Reciprocal Rank Fusion"
titleZh: "倒数排名融合"
slug: "reciprocal-rank-fusion"
lang: "zh-cn"
summary: "RRF 按候选在多个结果列表中的名次计算融合分数，适用于组合量纲不同的检索排序。"
topic: "retrieval-and-rag"
aliases:
  - "RRF"
tags:
  - "搜索排序"
  - "混合检索"
related:
  - "hybrid-search"
  - "bm25"
  - "vector-search"
lastReviewedAt: "2026-10-12"
---

# 倒数排名融合（RRF）

## 科普速读

- **它是什么：** RRF 根据搜索结果的名次合并多个排序列表。
- **适合什么场景：** 合并分数尺度不同的检索器结果。
- **主要边界：** 所有检索器都漏掉的文档，融合也找不回来。

## 概览

关键词检索可能把精确错误码页面排第一，向量搜索可能把相关事故记录排第二。RRF 可以合并两份列表，而不直接比较原始分数。

## 核心定义

倒数排名融合（RRF）根据结果在各排序列表中的位置计算分数，再合并列表。

## 背景与发展

搜索系统常要组合关键词和向量检索。两者分数可能无法直接比较，因此可以采用基于名次的融合方法，减少分数校准工作。

## 工作机制（How It Works）

每个结果根据名次获得一部分分数。在多个列表中都排得靠前的结果会得到较高的融合分数，并在合并列表中靠前显示。

## 在软件测试与开发中的应用

可以用 RRF 合并 BM25 检索出的精确标识符与向量检索出的相似描述，再用真实问题检查是否找到所需证据。

## 优势与局限

RRF 不要求各检索器的分数尺度相同，使用方式也较直接。结果仍取决于候选列表和名次，不能判断内容真假。

## 与相近术语对比

混合检索组合不同检索方式；RRF 是合并结果列表的一种排序融合方法；重排器则对候选做另一轮相关性判断。

## 实施建议（Best Practices）

在同一组问题上比较 RRF、单一检索器和其他融合方法，并跟踪召回、答案依据、延迟和候选数量。

## 常见误区（Pitfalls）

不要指望融合找回所有检索器都漏掉的证据。融合后排名靠前，也不能证明片段内容正确。

## FAQ

### RRF 会把原始检索分数相加吗？

不会。它合并的是名次，因此不必直接比较不同尺度的分数。

## 相关资源

### 相关词条

- [混合检索](/zh-cn/AIWiki/hybrid-search/)
- [BM25 关键词检索](/zh-cn/AIWiki/bm25/)
- [向量搜索](/zh-cn/AIWiki/vector-search/)

### 参考资料

- [Reciprocal Rank Fusion 论文入口](https://research.google/pubs/reciprocal-rank-fusion-outperforms-condorcet-and-individual-rank-learning-methods/)
