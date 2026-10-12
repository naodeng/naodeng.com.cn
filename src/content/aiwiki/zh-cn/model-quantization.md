---
title: "模型量化（Model Quantization）"
titleEn: "Model Quantization"
titleZh: "模型量化"
slug: "model-quantization"
lang: "zh-cn"
summary: "模型量化用较低精度表示部分数值，常用于减少模型存储和内存占用，速度与质量影响需实测。"
topic: "ai-foundations"
aliases:
  - "量化"
  - "权重量化"
tags:
  - "模型部署"
  - "效率"
related:
  - "small-language-models-slms"
  - "lora-peft"
  - "knowledge-distillation"
lastReviewedAt: "2026-10-12"
---

# 模型量化（Model Quantization）

## 科普速读

- **它是什么：** 量化用较低数值精度存储或计算模型参数。
- **适合什么场景：** 减少模型存储和运行时内存。
- **主要边界：** 速度和质量收益取决于硬件与方法。

## 概览

量化后的代码助手可能更容易放进开发者的内存预算。仍需通过测试确认代码质量和延迟是否变化。

## 核心定义

模型量化用较低数值精度表示权重或计算值，以减少资源消耗。

## 背景与发展

大模型需要大量存储和内存。量化是减少这些要求、同时尽量保持任务质量的一种部署方法。

## 工作机制（How It Works）

量化方法把高精度数值映射为低精度表示。推理引擎和硬件决定这种表示是否能加快运行。

## 在软件测试与开发中的应用

用代码生成、编译、单元测试、响应时间、吞吐和内存峰值，对比量化模型与原模型。

## 优势与局限

量化能减少模型文件大小和内存占用。它可能改变输出，而且部分硬件无法让所有量化格式运行得更快。

## 与相近术语对比

量化改变数值表示；蒸馏训练学生模型；剪枝移除部分参数或连接。

## 实施建议（Best Practices）

在相同任务、提示词和硬件上对比模型，同时测质量与运行表现，并检查许可和格式兼容性。

## 常见误区（Pitfalls）

文件更小不等于服务更快或更好。应在目标硬件上测端到端结果。

## FAQ

### 量化一定会让模型更快吗？

不一定。它可能减少存储或内存，但速度取决于格式、硬件和推理软件。

## 相关资源

### 相关词条

- [小语言模型](/zh-cn/AIWiki/small-language-models-slms/)
- [LoRA 与参数高效微调](/zh-cn/AIWiki/lora-peft/)
- [知识蒸馏](/zh-cn/AIWiki/knowledge-distillation/)

### 参考资料

- [GPTQ 论文](https://arxiv.org/abs/2210.17323)
