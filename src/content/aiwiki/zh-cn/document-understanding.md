---
title: "文档版面理解（Document Understanding）"
titleEn: "Document Understanding"
titleZh: "文档版面理解"
slug: "document-understanding"
lang: "zh-cn"
summary: "文档版面理解结合文字内容和页面布局，帮助模型识别表格、表单与字段之间的结构关系。"
topic: "multimodal-ai"
aliases:
  - "文档理解"
  - "版面分析"
tags:
  - "文档 AI"
  - "多模态"
related:
  - "vision-language-model"
  - "automatic-speech-recognition"
  - "multimodal-rag"
lastReviewedAt: "2026-10-12"
---

# 文档版面理解（Document Understanding）

## 科普速读

- **它是什么：** 文档理解同时读取内容和版面结构。
- **适合什么场景：** 从表单、表格和扫描页中提取字段及关系。
- **主要边界：** 文字识别正确，不代表字段归属正确。

## 概览

发票上可能有“税额”“总额”和多个数字。系统必须把每个数字对应到正确标签，才能校验内容。

## 核心定义

文档理解从页面的文字、位置和视觉结构中识别信息及其关系。

## 背景与发展

光学字符识别让机器能读取印刷文字。文档理解进一步处理版面和关系，因为有些含义取决于文字出现的位置。

## 工作机制（How It Works）

处理流程可能组合图像清理、OCR、版面检测、表格结构分析和语言模型，并输出带页面位置的结构化字段供复核。

## 在软件测试与开发中的应用

用旋转页面、低分辨率扫描、手写、多栏和表格测试文档流程，再把提取结果与人工标注样本对比。

## 优势与局限

考虑版面的处理方式能提取纯文本中缺失的关系。系统仍可能把数字连错字段，或把空白处补成看似合理的值。

## 与相近术语对比

OCR 识别文字；文档理解还处理版面和字段关系；视觉语言模型范围更广，也能回答各类图像问题。

## 实施建议（Best Practices）

保留页面图像和坐标，用业务规则校验字段，并把不确定或影响重大的情况交给人工复核。

## 常见误区（Pitfalls）

付款或合规决策不能只依赖提取出的数值；还要检查原始证据和字段关系。

## FAQ

### OCR 结果正确，就能确保字段提取正确吗？

不能。系统还必须把每个文字值对应到正确标签或表格单元。

## 相关资源

### 相关词条

- [视觉语言模型](/zh-cn/AIWiki/vision-language-model/)
- [自动语音识别](/zh-cn/AIWiki/automatic-speech-recognition/)
- [多模态 RAG](/zh-cn/AIWiki/multimodal-rag/)

### 参考资料

- [LayoutLMv3 论文](https://arxiv.org/abs/2204.08387)
