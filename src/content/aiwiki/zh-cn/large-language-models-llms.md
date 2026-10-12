---
title: "大语言模型（LLMs）"
titleEn: "Large Language Models (LLMs)"
slug: "large-language-models-llms"
lang: "zh-cn"
summary: "在海量文本上训练的基础模型，可执行生成、推理和工具协作任务。"
topic: "ai-vibe-coding"
aliases:
  - "LLM"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "small-language-models-slms"
  - "gpt"
  - "claude"
lastReviewedAt: "2026-10-12"
---
# 大语言模型（LLM）

## 科普速读

- **它是什么：** 大语言模型是经过训练、能够处理和生成语言的模型。
- **适合什么场景：** 起草、摘要、分类和代码辅助等文字任务。
- **主要边界：** 表达流畅的内容仍可能错误、不完整或过时。

## 概览

开发者可以提供错误信息，请 LLM 解释原因。模型可以提出可能性，但开发者仍需检查源代码和测试输出。

## 核心定义

大语言模型（LLM）是在大量数据上训练、用于处理或生成语言的机器学习模型。许多 LLM 使用 Transformer 架构。现在有些模型也能处理图像、音频或其他输入。

## 背景与发展

早期语言系统通常使用特定任务的规则或模型。大规模训练和指令微调让同一个模型可以处理多种语言任务。模型规模本身不能决定质量或适用性。

## 工作机制（How It Works）

训练时，模型从 token 序列中学习统计模式。推理时，它根据提供的上下文估计并生成下一个 token 或输出单元。指令和额外训练会影响模型的响应方式。

## 在软件测试与开发中的应用

LLM 可以解释代码、起草测试、总结问题、生成示例或分类报告。生成内容应根据项目需求、当前文档和可执行测试核验。

## 优势与局限

LLM 可以处理多种语言任务，不必为每项任务单独训练模型。但它也可能给出看似合理却错误的内容，反映训练数据中的偏差，或遗漏近期变化。它不能保证事实正确或推理可靠。

## 与相近术语对比

小语言模型参数较少或面向较窄的部署场景，但“小”没有统一门槛。基础模型面向多种下游用途，也可能处理语言以外的数据。推理模型会针对需要额外推理计算的任务进行优化。

## 实施建议（Best Practices）

提供清楚的指令和相关上下文。事实重要时要求来源或证据。运行代码和测试，不要只依赖文字说明。保护敏感输入。

## 常见误区（Pitfalls）

不要把表达流畅当成准确证明。除非应用明确提供，不要假设模型掌握最新信息或可以访问代码仓库。

## FAQ

### LLM 内部存有事实数据库吗？

通常不是可检索、经过验证的数据库。模型从训练数据中学习模式，也可能给出错误回答。

## 相关资源

### 相关词条

- [small-language-models-slms](https://inaodeng.com/zh-cn/AIWiki/small-language-models-slms/)
- [gpt](https://inaodeng.com/zh-cn/AIWiki/gpt/)
- [claude](https://inaodeng.com/zh-cn/AIWiki/claude/)

### 参考资料
- [Google: Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [Stanford Foundation Models report](https://crfm.stanford.edu/report.html)
