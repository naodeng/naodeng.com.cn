---
title: "内容来源凭证（C2PA）"
titleEn: "Content Credentials (C2PA)"
titleZh: "内容来源凭证（C2PA）"
slug: "content-credentials-c2pa"
lang: "zh-cn"
summary: "C2PA 用可验证的清单记录媒体来源和编辑历史；签名可验证，不代表画面所述事实真实。"
topic: "multimodal-ai"
aliases:
  - "Content Credentials"
  - "内容凭证"
tags:
  - "内容溯源"
  - "标准"
related:
  - "diffusion-model"
  - "vision-language-model"
  - "model-and-data-cards"
lastReviewedAt: "2026-10-12"
---

# 内容来源凭证（C2PA）

## 科普速读

- **它是什么：** C2PA 记录与数字内容及其历史相关的签名声明。
- **适合什么场景：** 查看图片、视频等媒体附带的来源信息。
- **主要边界：** 签名有效不代表内容真实。

## 概览

图片编辑工具可以记录文件经过裁剪或生成式编辑。查看者可以检查这条记录，而不只凭图片外观猜测。

## 核心定义

C2PA 是记录和验证数字内容来源及编辑历史声明的技术标准。

## 背景与发展

数字文件可以被复制和修改，单看文件通常看不到所有编辑记录。C2PA 定义了可与媒体关联的签名清单，用来携带来源信息。标准和实际采用方式仍在发展。

## 工作机制（How It Works）

创作者或编辑工具为资产添加包含来源声明的清单。验证器检查签名，以及清单是否绑定到当前文件。应用决定记录和展示哪些声明。

## 在软件测试与开发中的应用

媒体平台可以测试凭证是否能在上传、缩放、转码和下载后保留。测试既要检查签名验证，也要检查界面如何展示来源信息。

## 优势与局限

C2PA 能让部分来源声明更容易验证。凭证可能在处理过程中丢失；签名不能证明画面事件确实发生，也不能证明声明诚实。

## 与相近术语对比

数字签名验证已签名数据是否被更改；C2PA 把签名声明与媒体来源信息组织起来。两者都不是通用的真假或 AI 生成检测器。

## 实施建议（Best Practices）

检查资产绑定、签名、声明来源和验证器策略，并结合来源核验与事实核查。

## 常见误区（Pitfalls）

没有凭证不代表内容造假；凭证有效也不代表其中声明完整或真实。

## FAQ

### 有 C2PA 凭证就能证明图片是真的吗？

不能。凭证能帮助验证绑定到文件的来源声明，不能证明画面中的事件真实发生。

## 相关资源

### 相关词条

- [扩散模型](/zh-cn/AIWiki/diffusion-model/)
- [视觉语言模型](/zh-cn/AIWiki/vision-language-model/)
- [模型卡与数据卡](/zh-cn/AIWiki/model-and-data-cards/)

### 参考资料

- [C2PA 技术规范 2.4（2026-04）](https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html)
- [C2PA Explainer](https://spec.c2pa.org/specifications/specifications/2.4/explainer/Explainer.html)
