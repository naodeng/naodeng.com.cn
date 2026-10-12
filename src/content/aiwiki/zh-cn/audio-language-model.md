---
title: "音频语言模型（Audio Language Model）"
titleEn: "Audio Language Models"
titleZh: "音频语言模型"
slug: "audio-language-model"
lang: "zh-cn"
summary: "音频语言模型把音频表示成可学习的序列，用于生成或处理语音、音乐等声音任务。"
topic: "multimodal-ai"
aliases:
  - "音频模型"
  - "AudioLM"
tags:
  - "音频"
  - "多模态"
related:
  - "automatic-speech-recognition"
  - "text-to-speech"
  - "video-language-model"
lastReviewedAt: "2026-10-12"
---

# 音频语言模型（Audio Language Model）

## 科普速读

- **它是什么：** 音频语言模型处理或生成代表声音的序列。
- **适合什么场景：** 语音、音乐、声音问答和音频生成。
- **主要边界：** “音频模型”不代表某一种能力或准确率。

## 概览

语音、音乐和环境声都会随时间变化。模型可以学习这些序列中的模式，但转写语音和生成音乐是不同任务。

## 核心定义

音频语言模型使用序列建模方法处理或生成音频表示。

## 背景与发展

早期系统通常一次处理一种音频任务，例如语音识别。AudioLM 等研究探索用音频 token 建模并生成连贯声音；当前系统的输入和输出任务各不相同。

## 工作机制（How It Works）

系统先把音频编码成特征或 token，再处理它们的序列。根据训练任务，它可以转写语音、回答声音问题、分类事件或生成音频。

## 在软件测试与开发中的应用

团队可以测试语音界面、分类口述反馈，或搜索录音中的事件。测试集应覆盖噪声、口音、语速、语言和设备差异。

## 优势与局限

音频模型能处理纯文本系统无法直接接收的声音信号。它可能漏掉短暂声音、混淆说话人，或生成流畅但与来源不符的音频。

## 与相近术语对比

自动语音识别把语音转成文本；文本转语音把文本变成语音。音频语言模型可能支持这些任务，也可能处理其他音频任务。

## 实施建议（Best Practices）

确认模型的具体输入和输出，使用适合任务的指标，并让摘要或转写结果能追溯到原始录音。

## 常见误区（Pitfalls）

模型能回答声音问题，不代表它也能准确转写。应分别测试各项能力；处理录音前还要确认授权。

## FAQ

### 音频语言模型就是语音识别模型吗？

不是。语音识别只是音频任务之一；其他模型还可能分类声音、回答问题或生成音频。

## 相关资源

### 相关词条

- [自动语音识别](/zh-cn/AIWiki/automatic-speech-recognition/)
- [文本转语音](/zh-cn/AIWiki/text-to-speech/)
- [视频语言模型](/zh-cn/AIWiki/video-language-model/)

### 参考资料

- [AudioLM 论文](https://arxiv.org/abs/2209.03143)
