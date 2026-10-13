---
title: "LoRA 与参数高效微调"
titleEn: "LoRA and Parameter-Efficient Fine-Tuning"
titleZh: "LoRA 与参数高效微调"
slug: "lora-peft"
lang: "zh-cn"
summary: "LoRA 冻结基础模型的大部分权重，只训练低秩适配器，降低特定任务微调所需的可训练参数量。"
topic: "ai-foundations"
aliases:
  - "LoRA"
  - "PEFT"
  - "低秩适配"
tags:
  - "模型训练"
  - "微调"
related:
  - "model-quantization"
  - "instruction-tuning"
  - "small-language-models-slms"
lastReviewedAt: "2026-10-12"
---

# LoRA 与参数高效微调

## 科普速读

- **它是什么：** LoRA 固定基础模型的大部分权重，只训练较小的适配参数。
- **适合什么场景：** 用比全量微调更少的可训练参数调整模型。
- **主要边界：** 适配器不会自动补充最新项目知识。

## 概览

团队可能希望代码助手遵循自己的测试命名约定。LoRA 可以训练小型适配器来调整这一行为，而不更新基础模型的所有权重。

## 核心定义

低秩适配（LoRA）在固定基础权重的同时，为部分模型层添加可训练的低秩更新。

## 背景与发展

全量微调会更新许多模型参数。LoRA 等参数高效微调方法减少训练和存储更新所需的参数量。

## 工作机制（How It Works）

LoRA 用两个较小矩阵的乘积表示权重更新。训练时调整这两个矩阵；适配器可以单独保存，也可以按框架支持的方式合并。

## 在软件测试与开发中的应用

可以调整基础模型，让它按团队偏好生成测试格式或使用领域术语。投入训练前，应先与提示词和检索方案对比。

## 优势与局限

与完整模型更新相比，适配器可能更小、更容易训练和分发。效果仍取决于基础模型、样本和训练设置。

## 与相近术语对比

LoRA 是微调方法；量化降低数值精度；QLoRA 把低精度基础模型与 LoRA 训练结合起来。

## 实施建议（Best Practices）

使用有代表性的数据，评测集与训练集分开，检查基础模型许可，并测试适配器与服务框架的兼容性。

## 常见误区（Pitfalls）

不要把 LoRA 当作知识库，也不要指望适配器能修复基础模型本身的能力缺陷。

## FAQ

### LoRA 和量化是一回事吗？

不是。LoRA 训练适配参数；量化改变模型数值的表示精度。

## 相关资源

### 相关词条

- [模型量化](/zh-cn/AIWiki/model-quantization/)
- [指令微调](/zh-cn/AIWiki/instruction-tuning/)
- [小语言模型](/zh-cn/AIWiki/small-language-models-slms/)

### 参考资料

- [LoRA 论文](https://arxiv.org/abs/2106.09685)
