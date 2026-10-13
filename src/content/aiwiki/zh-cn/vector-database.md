---
title: "向量数据库（Vector Database）"
titleEn: "Vector Databases"
titleZh: "向量数据库"
slug: "vector-database"
lang: "zh-cn"
summary: "向量数据库管理向量索引、相似度查询和元数据过滤，通常作为检索应用的一部分。"
topic: "retrieval-and-rag"
aliases:
  - "向量库"
tags:
  - "检索"
  - "数据库"
related:
  - "vector-search"
  - "approximate-nearest-neighbor"
  - "codebase-indexing-rag"
lastReviewedAt: "2026-10-12"
---

# 向量数据库（Vector Database）

## 科普速读

- **它是什么：** 向量数据库保存向量表示，并支持相似度检索。
- **适合什么场景：** 大规模查找含义相近的内容片段。
- **主要边界：** 它只是检索系统的一部分。

## 概览

知识助手可以先检索与问题相关的资料，再把内容交给生成模型。向量数据库负责保存和查找这类候选表示。

## 核心定义

向量数据库保存向量及相关记录，并支持近邻检索、过滤和索引管理。

## 背景与发展

嵌入模型让系统能按相似度搜索文档、图像和代码，因此向量数据库逐渐受到关注。一些关系型数据库和搜索引擎也提供向量功能。

## 工作机制（How It Works）

系统把嵌入与标识符和元数据一起保存。查询时，它比较或索引向量，按版本或权限等条件过滤，并返回候选记录。

## 在软件测试与开发中的应用

代码助手可以检索与自然语言问题相关的函数或文档。索引中应包含文件路径、仓库版本和访问权限。

## 优势与局限

向量索引能按模型学到的相似度检索候选，也支持元数据过滤。结果受嵌入模型、索引参数、数据和工作负载影响。

## 与相近术语对比

传统数据库擅长结构化字段查询；向量搜索是检索操作，向量数据库是保存向量并支持这类操作的系统。两者都不是完整 RAG 流程。

## 实施建议（Best Practices）

使用真实问题和有代表性的数据，测召回、过滤正确性、更新删除、延迟和运维成本。

## 常见误区（Pitfalls）

不要以为存了向量就包含文档导入、分块、权限、答案生成和来源核验。

## FAQ

### RAG 一定要用向量数据库吗？

不一定。关系型数据库或搜索引擎也可以提供向量搜索功能。

## 相关资源

### 相关词条

- [向量搜索](/zh-cn/AIWiki/vector-search/)
- [近似最近邻搜索](/zh-cn/AIWiki/approximate-nearest-neighbor/)
- [代码库索引与 RAG](/zh-cn/AIWiki/codebase-indexing-rag/)

### 参考资料

- [pgvector：Postgres 向量相似度搜索](https://github.com/pgvector/pgvector)
