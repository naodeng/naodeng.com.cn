---
title: "零样本编程"
titleEn: "Zero-shot Coding"
slug: "zero-shot-coding"
lang: "zh-cn"
summary: "在不给示例的情况下，仅通过指令直接生成目标代码。"
topic: "ai-vibe-coding"
aliases:
  - "Zero-shot code generation"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "gpt"
  - "large-language-models-llms"
  - "prompt-driven-development"
lastReviewedAt: "2026-10-12"
---
# 零样本编程（Zero-Shot Coding）

## 科普速读

- **它是什么：** 零样本编程是在提示词中不提供任务专属示例，让模型完成编码任务。
- **适合什么场景：** 为常见且范围明确的任务起草初步方案。
- **主要边界：** 没有示例不代表没有指令、上下文或预训练数据。

## 概览

提示词可以要求模型编写一个邮箱地址校验函数，而不提供输入输出示例。代码仍需通过符合项目需求的测试。

## 核心定义

零样本编程是在提示词中不提供目标任务的上下文示例，让模型生成或转换代码。提示词仍然可以包括指令、约束、代码和其他上下文。模型也已经经过预训练。

## 背景与发展

零样本提示描述的是如何向模型呈现任务。它不是模型代际，也不保证模型没有训练示例就能解决任务。

## 工作机制（How It Works）

1. 用户说明编码任务和约束。
2. 模型处理提示词及现有上下文。
3. 模型根据学到的模式生成代码。
4. 开发者检查输出并运行测试。

模型内部过程不能作为它如何解决任务的可靠解释。

## 在软件测试与开发中的应用

可以用零样本提示起草常见辅助函数、解释错误或生成初步测试提纲。框架和版本会影响结果时，应明确说明。

## 优势与局限

提示词不需要包含任务专属演示，有助于减少准备工作。生成内容可能不符合项目约定、依赖未说明的假设，或使用当前不可用的 API。

## 与相近术语对比

零样本提示不提供上下文示例；少样本提示会提供示例。微调则使用训练数据改变模型参数。这些术语描述的是不同的任务信息提供或学习方式。

## 实施建议（Best Practices）

说明语言、框架、预期行为和约束。格式或风格要求严格时，应提供示例。根据项目要求评审并测试生成代码。

## 常见误区（Pitfalls）

不要把“零样本”理解为空提示词或未经训练的模型。也不要认为看起来常见的回答一定使用了有效的当前 API。

## FAQ

### 零样本编程意味着模型从未见过类似示例吗？

不是。它只表示提示词没有提供任务专属示例。模型在训练期间可能见过相关内容。

## 相关资源

### 相关词条

- [gpt](https://inaodeng.com/zh-cn/AIWiki/gpt/)
- [large-language-models-llms](https://inaodeng.com/zh-cn/AIWiki/large-language-models-llms/)
- [prompt-driven-development](https://inaodeng.com/zh-cn/AIWiki/prompt-driven-development/)

### 参考资料
- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)
- [OpenAI Codex announcement (2021)](https://openai.com/index/openai-codex/)
