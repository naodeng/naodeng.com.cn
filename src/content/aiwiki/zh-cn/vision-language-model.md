---
title: "视觉语言模型（VLM）"
titleEn: "Vision-Language Models"
titleZh: "视觉语言模型"
slug: "vision-language-model"
lang: "zh-cn"
summary: "视觉语言模型把图像与语言联系起来，可用于图片问答和视觉检索，但识别结果仍需核验。"
topic: "multimodal-ai"
aliases:
  - "VLM"
  - "视觉语言模型"
tags:
  - "多模态"
  - "计算机视觉"
related:
  - "large-language-models-llms"
  - "document-understanding"
  - "multimodal-rag"
  - "vision-language-action"
lastReviewedAt: "2026-10-12"
---

# 视觉语言模型（VLM）

## 科普速读

- **它是什么：** 视觉语言模型把视觉输入与语言联系起来。
- **适合什么场景：** 图片问答、视觉检索和截图检查。
- **主要边界：** 它可能看错小字、布局或图像细节。

## 概览

测试人员可以询问产品截图上的按钮写了什么。模型需要把问题与图像中的正确区域对应，再报告观察结果。

## 核心定义

视觉语言模型（VLM）处理图像与语言之间的关系，例如图片问答或图文表示匹配。

## 背景与发展

VLM 结合了计算机视觉和语言建模方法。有些模型对齐图像与文字表示；另一些把视觉编码器接入语言模型。

## 工作机制（How It Works）

系统对图像和文本编码，再组合它们的表示，用于分类、检索或生成回答。不同模型的架构和支持任务各不相同。

## 在软件测试与开发中的应用

可以用 VLM 筛查截图、描述图表、给图片加标签或比较界面状态。重要结论要对照原始图片和视口核实。

## 优势与局限

VLM 能使用纯文本模型无法直接获取的视觉上下文。它仍可能漏读小字、空间关系、遮挡物或细微差异。

## 与相近术语对比

CLIP 等图文对比模型能匹配图像与文字表示；开放式图片问答模型能处理更广的问题；多模态 RAG 则把检索加入整体流程。

## 实施建议（Best Practices）

提供清晰的裁剪区域和上下文，测试多个屏幕尺寸；需精确读图时可用 OCR 或图像差异工具核对。

## 常见误区（Pitfalls）

不要把看似合理的描述当成核实过的观察。图片不清楚时，模型可能是在猜测。

## FAQ

### 所有 VLM 都能开放式回答图片问题吗？

不能。有些 VLM 侧重匹配或分类；应查看具体模型支持的任务。

## 相关资源

### 相关词条

- [大语言模型](/zh-cn/AIWiki/large-language-models-llms/)
- [文档版面理解](/zh-cn/AIWiki/document-understanding/)
- [多模态 RAG](/zh-cn/AIWiki/multimodal-rag/)

### 参考资料

- [CLIP 论文](https://arxiv.org/abs/2103.00020)
