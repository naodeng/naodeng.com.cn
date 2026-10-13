---
title: "自动语音识别（ASR）"
titleEn: "Automatic Speech Recognition"
titleZh: "自动语音识别"
slug: "automatic-speech-recognition"
lang: "zh-cn"
summary: "ASR 把语音音频转换为文字，可用于转写和语音检索，效果会受到噪声、口音和重叠说话影响。"
topic: "multimodal-ai"
aliases:
  - "语音转文字"
  - "ASR"
tags:
  - "语音"
  - "多模态"
related:
  - "text-to-speech"
  - "audio-language-model"
  - "multimodal-rag"
lastReviewedAt: "2026-10-12"
---

# 自动语音识别（ASR）

## 科普速读

- **它是什么：** ASR 把语音音频转换成文字。
- **适合什么场景：** 生成转写、字幕、语音搜索和口述反馈。
- **主要边界：** 转写读起来通顺，也可能包含原音里没有的词。

## 概览

团队可以转写用户访谈，再搜索重复出现的抱怨。文字更容易查找，但核对细节时仍应以原始录音为准。

## 核心定义

自动语音识别（ASR）把语音音频转换为文字，有时也会输出词语或片段的时间戳。

## 背景与发展

ASR 从识别少量固定命令，发展到使用大规模、多样化音频训练的系统。有些模型还支持多语言转写或翻译，具体能力取决于模型和配置。

## 工作机制（How It Works）

系统分析音频信号并预测词语序列。它也可能添加标点、说话人标签或时间戳。这些是不同输出，都需要单独检查。

## 在软件测试与开发中的应用

可以用 ASR 搜索口述的可用性测试记录、为缺陷报告加字幕，或转写语音命令。姓名、数字、路径和命令应回听原音核对。

## 优势与局限

转写文本可以搜索，也更方便浏览录音。噪声、口音、多人重叠说话、专业词和语言切换都可能造成错误或丢失上下文。

## 与相近术语对比

ASR 把音频转成文字；文本转语音把文字变成音频。两者都可能用于语音助手，但模型和评价指标不同。

## 实施建议（Best Practices）

保留录音，记录模型和语言设置，并抽样核对转写。若错误会影响决策，应安排人工复核。

## 常见误区（Pitfalls）

不要把转写当成逐字记录。识别器可能生成听起来合理、但原音中并不存在的词。

## FAQ

### 转写出来的每个词都能当作原话吗？

不能。涉及重要姓名、数字或决策时，应回听原音。

## 相关资源

### 相关词条

- [文本转语音](/zh-cn/AIWiki/text-to-speech/)
- [音频语言模型](/zh-cn/AIWiki/audio-language-model/)
- [多模态 RAG](/zh-cn/AIWiki/multimodal-rag/)

### 参考资料

- [Robust Speech Recognition via Large-Scale Weak Supervision](https://arxiv.org/abs/2212.04356)
