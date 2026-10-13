---
title: "多模态 RAG（Multimodal RAG）"
titleEn: "Multimodal RAG"
titleZh: "多模态 RAG"
slug: "multimodal-rag"
lang: "zh-cn"
summary: "多模态 RAG 从文字、图像、音频或视频中检索证据，再把相关内容交给生成模型回答。"
topic: "retrieval-and-rag"
aliases:
  - "多模态检索增强生成"
tags:
  - "RAG"
  - "多模态"
related:
  - "codebase-indexing-rag"
  - "vision-language-model"
  - "embeddings"
lastReviewedAt: "2026-10-12"
---

# 多模态 RAG（Multimodal RAG）

## 科普速读

- **它是什么：** 多模态 RAG 先从文字和媒体中检索证据，再生成回答。
- **适合什么场景：** 问题需要截图、文档、音频或视频证据时。
- **主要边界：** 模型仍可能误读媒体或引用错误证据。

## 概览

测试人员上传截图并说“保存后按钮一直是灰色”。系统可以先检索截图、设计文档和相关测试报告，再生成回答。

## 核心定义

多模态 RAG 从非文本或混合媒体资料中检索证据，并用这些证据生成回答。

## 背景与发展

RAG 最初用于向语言模型提供外部文本。多模态系统把检索扩展到图像、音频和视频，通常还需要额外抽取和索引。

## 工作机制（How It Works）

处理流程抽取或索引文本、图像、时间戳和元数据，再检索相关证据，交给能处理相应媒体的模型，并生成关联来源的回答。

## 在软件测试与开发中的应用

调查界面缺陷时，可以一起搜索截图、测试录屏、设计文件和缺陷报告。保留原始媒体链接及对应帧或页面。

## 优势与局限

混合媒体检索能在同一流程中提供更多相关证据。OCR、图片说明、抽帧或检索可能漏掉细节，也可能选中相似但无关的内容。

## 与相近术语对比

视觉语言模型描述模型处理图像和语言的能力；多模态 RAG 描述检索和组织证据的系统流程，其中可以使用一个或多个模型。

## 实施建议（Best Practices）

保留来源、页码和时间戳；分别评估检索和答案依据；重要结论要检查原始媒体。

## 常见误区（Pitfalls）

不要以为提供图片就能保证回答准确。模型可能看错，检索也可能选错视频帧。

## FAQ

### 多模态 RAG 和视觉语言模型是一回事吗？

不是。多模态 RAG 是系统流程，视觉语言模型可以是其中一个组件。

## 相关资源

### 相关词条

- [代码库索引与 RAG](/zh-cn/AIWiki/codebase-indexing-rag/)
- [视觉语言模型](/zh-cn/AIWiki/vision-language-model/)
- [向量嵌入](/zh-cn/AIWiki/embeddings/)

### 参考资料

- [ImageBind 论文](https://arxiv.org/abs/2305.05665)
- [Retrieval-Augmented Generation 论文](https://arxiv.org/abs/2005.11401)
