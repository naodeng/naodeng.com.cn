---
title: "近似最近邻搜索（ANN）"
titleEn: "Approximate Nearest-Neighbor Search"
titleZh: "近似最近邻搜索"
slug: "approximate-nearest-neighbor"
lang: "zh-cn"
summary: "ANN 索引以可控的召回损失换取更快的高维近邻查询，适合大规模向量检索。"
topic: "retrieval-and-rag"
aliases:
  - "ANN"
  - "近似最近邻"
tags:
  - "向量检索"
  - "算法"
related:
  - "vector-search"
  - "vector-database"
  - "reranking"
lastReviewedAt: "2026-10-12"
---

# 近似最近邻搜索（ANN）

## 科普速读

- **它是什么：** ANN 搜索不必逐项精确比较，就能找出相近向量。
- **适合什么场景：** 减少大型向量集合的查询时间。
- **主要边界：** 它可能漏掉精确距离最近的结果。

## 概览

支持系统可能要从数百万条历史故障报告中查找相似案例。逐条精确扫描代价较高，因此可以先用近似索引找出可能相关的候选。

## 核心定义

近似最近邻搜索使用索引，以低于全量精确比较的成本找到接近查询向量的结果。

## 背景与发展

向量集合变大后，逐一扫描会更慢、成本更高。ANN 方法通过减少候选比较数量，接受一定召回损失来降低查询成本。

## 工作机制（How It Works）

索引把向量组织成分区或邻居图等结构。查询只访问部分区域，返回可能的近邻，再交给重排器做更细的比较。

## 在软件测试与开发中的应用

代码助手可以为“登录超时在哪里处理”查找相关文件。若精确标识符很重要，可再加关键词搜索，并检查最终结果是否包含目标文件。

## 优势与局限

ANN 能在大规模数据上减少延迟和计算量。召回效果受索引、参数、数据和查询分布影响；更新数据也可能需要维护索引。

## 与相近术语对比

向量搜索是查找相似向量这一类任务；ANN 是加速向量搜索的一种方法；重排则是在召回后调整候选顺序。

## 实施建议（Best Practices）

用真实查询和有代表性的数据测召回率，并比较延迟、内存、索引构建时间和更新成本。

## 常见误区（Pitfalls）

不要把 ANN 结果当作数学上精确的最近邻。平均指标高，也可能掩盖重要查询的漏检。

## FAQ

### ANN 一定会返回实际距离最近的结果吗？

不一定。它用更少的比较换取速度，因此可能损失精确度。

## 相关资源

### 相关词条

- [向量搜索](/zh-cn/AIWiki/vector-search/)
- [向量数据库](/zh-cn/AIWiki/vector-database/)
- [检索重排](/zh-cn/AIWiki/reranking/)

### 参考资料

- [Faiss: Billion-scale similarity search with GPUs](https://arxiv.org/abs/1702.08734)
