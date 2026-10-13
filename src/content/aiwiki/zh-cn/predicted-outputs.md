---
title: "预测输出"
titleEn: "Predicted Outputs"
slug: "predicted-outputs"
lang: "zh-cn"
summary: "通过对已知内容的预判来显著降低大模型生成延迟的加速技术。"
topic: "ai-vibe-coding"
aliases:
  - "Predicted Outputs"
  - "预测输出"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "structured-outputs"
  - "flex-processing"
  - "prompt-caching"
lastReviewedAt: "2026-10-12"
---
# 预测输出（Predicted Outputs）

## 科普速读

- **它是什么：** 预测输出会向 API 提供预计模型将在回答中复用的文本。
- **适合什么场景：** 重新生成文件时，大部分内容预计保持不变。
- **主要边界：** 只有预测内容接近目标输出且 API 支持时，功能才可能有效。

## 概览

重构文件时，开发者可能预计大部分代码行保持不变。支持该功能的 API 可以接收当前文件作为预测文本，再生成修改后的版本。

## 核心定义

预测输出是一种 API 功能：应用提供预期输出文本，引导模型生成回答。模型可以复用匹配内容，并集中生成改动。功能支持的模型、参数限制和计费方式由 API 决定。

## 背景与发展

当预期输出的大部分内容已知时，例如小幅修改文档或代码文件，这项技术可以降低生成延迟。它是供应商提供的功能，不是所有解码优化的统称。

## 工作机制（How It Works）

1. 应用提交提示词和预期输出文本。
2. 支持该功能的 API 将生成结果与预测文本比较。
3. API 可能更快接受匹配内容。
4. API 返回生成结果和用量信息。
5. 应用检查最终内容及被拒绝的预测 token。

## 在软件测试与开发中的应用

代码编辑器可以在请求小型重构时，把当前文件作为预测文本发送。开发者应检查完整返回文件并运行测试。采用该功能前，要用实际任务测量延迟和 token 用量。

## 优势与局限

当输出大部分保持不变时，预测文本可能降低延迟。错误预测可能被拒绝，也可能仍影响用量或费用。该功能不一定支持工具调用或所有模型。

## 与相近术语对比

预测输出提供可能的回答内容。推测解码使用草稿 token 加速模型推理。提示词缓存复用重复输入。它们的机制和 API 支持范围不同。

## 实施建议（Best Practices）

只有在大部分预期输出已知时才使用预测文本。查看 API 当前文档，确认支持的模型和参数。采用前测量实际任务中的质量、延迟和用量。

## 常见误区（Pitfalls）

不要认为预测文本会强制模型照抄。不要把固定的提速或省钱数字套用到所有请求。应检查被拒绝的预测 token 用量和最终输出。

## FAQ

### 预测输出和提示词缓存是一回事吗？

不是。预测输出用预期文本引导回答生成；提示词缓存复用重复的输入上下文。

## 相关资源

### 相关词条

- [结构化输出](/zh-cn/AIWiki/structured-outputs/)
- [弹性处理](/zh-cn/AIWiki/flex-processing/)
- [提示词缓存](/zh-cn/AIWiki/prompt-caching/)
- [上下文窗口管理](/zh-cn/AIWiki/context-window-management/)

### 外部参考

- [OpenAI：预测输出指南](https://developers.openai.com/api/docs/guides/predicted-outputs)
- [OpenAI：提示词缓存指南](https://developers.openai.com/api/docs/guides/prompt-caching)
