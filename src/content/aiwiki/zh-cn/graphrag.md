---
title: "GraphRAG"
titleEn: "GraphRAG"
titleZh: "GraphRAG"
slug: "graphrag"
lang: "zh-cn"
summary: "GraphRAG 把图结构与检索结合起来，帮助系统回答需要跨文档关联的问题。"
topic: "retrieval-and-rag"
aliases:
  - "Graph RAG"
tags:
  - "知识图谱"
  - "RAG"
related:
  - "codebase-indexing-rag"
  - "embeddings"
  - "multimodal-rag"
lastReviewedAt: "2026-10-12"
---

# GraphRAG

## 科普速读

- **它是什么：** GraphRAG 把检索与实体或关系图结合起来。
- **适合什么场景：** 需要连接多个文档证据的问题。
- **主要边界：** 构建和维护知识图会增加成本，也可能引入错误。

## 概览

“哪些服务依赖这个认证组件？”可能需要查架构文档、工单和事故报告。GraphRAG 会先组织这些关系，再供模型生成回答。

## 核心定义

GraphRAG 是一种检索增强方法，使用图结构组织和检索生成所需的证据。

## 背景与发展

传统检索通常按关键词或向量相似度选择段落。图方法会增加明确的实体和关系，以支持跨来源关联问题。

## 工作机制（How It Works）

流程从资料或结构化数据中抽取实体和关系，构建图，再检索相关节点或摘要，并把证据交给语言模型。

## 在软件测试与开发中的应用

可以用它调查依赖关系、关联缺陷与服务，或汇总多个仓库和报告中的事故。抽取出的关系应保留来源引用。

## 优势与局限

知识图能支持关系查询和跨文档摘要。抽取错误可能制造虚假关系；构建和更新知识图也会增加成本。

## 与相近术语对比

普通 RAG 可以按关键词或向量相似度检索段落；GraphRAG 加入图结构来处理关系问题。简单查找不一定需要图。

## 实施建议（Best Practices）

先从确实需要跨来源关系的问题开始，测量答案覆盖和证据可追溯性，并抽查图中抽取出的关系。

## 常见误区（Pitfalls）

不要认为 GraphRAG 对所有 RAG 任务都更好。小型知识库或直接字段查询可能用更简单的索引就够了。

## FAQ

### GraphRAG 一定比普通 RAG 更好吗？

不一定。只有图关系能解决真实查询需求并值得维护时，才考虑使用。

## 相关资源

### 相关词条

- [代码库索引与 RAG](/zh-cn/AIWiki/codebase-indexing-rag/)
- [向量嵌入](/zh-cn/AIWiki/embeddings/)
- [多模态 RAG](/zh-cn/AIWiki/multimodal-rag/)

### 参考资料

- [Microsoft Research GraphRAG 项目](https://www.microsoft.com/en-us/research/project/graphrag/)
