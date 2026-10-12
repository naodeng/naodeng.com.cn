---
title: "文档分块（Document Chunking）"
titleEn: "Document Chunking"
titleZh: "文档分块"
slug: "document-chunking"
lang: "zh-cn"
summary: "文档分块把长资料拆成可索引和检索的单元；切分边界会影响上下文完整性与检索精度。"
topic: "retrieval-and-rag"
aliases:
  - "文本分块"
  - "Chunking"
tags:
  - "RAG"
  - "数据处理"
related:
  - "codebase-indexing-rag"
  - "vector-search"
  - "reranking"
lastReviewedAt: "2026-10-12"
---

# 文档分块（Document Chunking）

## 科普速读

- **它是什么：** 分块把长资料拆成较小的索引和检索单元。
- **适合什么场景：** 为 RAG 准备手册、工单或代码。
- **主要边界：** 切分不当会把本来相关的信息拆开。

## 概览

如果按固定字数切分手册，参数表可能和解释被分到不同片段。检索器因此只找到一半信息，无法完整回答问题。

## 核心定义

文档分块把长资料拆成较小单元，供系统索引、检索或放入模型上下文。

## 背景与发展

检索系统开始向上下文有限的模型提供精选资料后，分块就成为重要设计选择。适合的切分单元取决于资料结构和使用场景。

## 工作机制（How It Works）

处理流程先抽取资料，再按长度或结构切分，并为每块保存标题、页码和版本等元数据。检索时系统选出片段供后续处理。

## 在软件测试与开发中的应用

代码索引可以按函数或类切分，并保留文件路径。技术文档助手可以按标题切分并记录页码，让答案能指向原始位置。

## 优势与局限

较小片段有助于提高检索精度并减少无关上下文。片段过小可能漏掉条件；片段过大则会降低相关性并占用上下文。

## 与相近术语对比

分块决定哪些文本单元进入索引；嵌入把这些单元转换成向量表示；检索从索引中选出候选内容。

## 实施建议（Best Practices）

用真实问题检查切分边界，保留标题和来源元数据；每次修改后都比较检索结果和答案依据。

## 常见误区（Pitfalls）

不要只按向量库条目数选择分块大小。改变切分方式后，应重新建索引并重新评测。

## FAQ

### RAG 的文档应该切成多大？

没有通用大小。用真实问题评估上下文完整度、检索质量、延迟和索引成本。

## 相关资源

### 相关词条

- [代码库索引与 RAG](/zh-cn/AIWiki/codebase-indexing-rag/)
- [向量搜索](/zh-cn/AIWiki/vector-search/)
- [检索重排](/zh-cn/AIWiki/reranking/)

### 参考资料

- [Retrieval-Augmented Generation 论文](https://arxiv.org/abs/2005.11401)
- [OpenAI retrieval guide](https://developers.openai.com/api/docs/guides/retrieval)
