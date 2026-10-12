---
title: "扩散模型（Diffusion Model）"
titleEn: "Diffusion Models"
titleZh: "扩散模型"
slug: "diffusion-model"
lang: "zh-cn"
summary: "扩散模型通过逐步加噪与去噪学习数据分布，可用于生成图像、音频或其他内容。"
topic: "multimodal-ai"
aliases:
  - "扩散生成模型"
tags:
  - "生成式 AI"
  - "模型基础"
related:
  - "vision-language-model"
  - "video-language-model"
  - "content-credentials-c2pa"
lastReviewedAt: "2026-10-12"
---

# 扩散模型（Diffusion Model）

## 科普速读

- **它是什么：** 扩散模型通过去噪过程学习生成样本。
- **适合什么场景：** 生成图像、音频、视频和其他结构化数据。
- **主要边界：** 结果逼真，不代表场景真实发生。

## 概览

提示词可以引导模型从随机噪声逐步生成图像。图像可能很细致，但模型生成的是样本，不是事件记录。

## 核心定义

扩散模型学习逐步去除噪声的过程，以生成符合训练数据特征的样本。

## 背景与发展

扩散概率模型研究表明，反复去噪可以生成复杂样本。后续系统把这种方法用于图像和其他数据类型。

## 工作机制（How It Works）

训练时，系统向样本逐步加噪，并让模型学习逆转这一过程。生成时，模型从噪声开始，多次预测噪声更少的样本。提示词可以影响每一步。

## 在软件测试与开发中的应用

团队可以生成界面草稿或视觉测试用的合成图像。检查图中文字、物体数量、布局和边界场景是否符合预期。

## 优势与局限

多步去噪能根据提示词生成多样且细致的样本。模型可能弄错文字和空间关系，结果也受模型、采样器和提示词影响。

## 与相近术语对比

扩散模型通常通过多步去噪生成内容；自回归模型按序预测下一个 token 或片段。系统也可以组合这两种方法。

## 实施建议（Best Practices）

把生成媒体当作草稿，检查关键细节；需要复现结果时，记录模型和提示词版本。

## 常见误区（Pitfalls）

不要把视觉逼真当作事实准确、来源可靠或拥有使用权的证明。

## FAQ

### 扩散模型生成的图片是真实事件记录吗？

不是。它根据学到的模式生成样本；来源和事实都要单独核实。

## 相关资源

### 相关词条

- [视觉语言模型](/zh-cn/AIWiki/vision-language-model/)
- [视频语言模型](/zh-cn/AIWiki/video-language-model/)
- [内容来源凭证（C2PA）](/zh-cn/AIWiki/content-credentials-c2pa/)

### 参考资料

- [Denoising Diffusion Probabilistic Models](https://arxiv.org/abs/2006.11239)
