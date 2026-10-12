---
title: "知识蒸馏（Knowledge Distillation）"
titleEn: "Knowledge Distillation"
titleZh: "知识蒸馏"
slug: "knowledge-distillation"
lang: "zh-cn"
summary: "知识蒸馏训练一个学生模型模仿教师模型的输出或中间表示，以迁移部分能力或缩小部署体量。"
topic: "ai-foundations"
aliases:
  - "模型蒸馏"
tags:
  - "模型压缩"
  - "模型训练"
related:
  - "small-language-models-slms"
  - "model-quantization"
  - "synthetic-training-data"
lastReviewedAt: "2026-10-12"
---

# 知识蒸馏（Knowledge Distillation）

## 科普速读

- **它是什么：** 蒸馏用教师模型提供的信号训练学生模型。
- **适合什么场景：** 为较窄任务或部署限制制作更小模型。
- **主要边界：** 学生可能继承错误，也不保证和教师表现相同。

## 概览

团队可以让较强模型为代码问题生成候选解释，再审阅这些样本，用于训练更小的专用模型。

## 核心定义

知识蒸馏通过训练把教师模型提供的学习信号迁移给学生模型。

## 背景与发展

蒸馏是早于现代大语言模型的训练技术。现在它也被用于探索资源需求更低、更专用的模型。

## 工作机制（How It Works）

教师可以提供输出概率、答案或中间表示。训练过程使用这些信号调整学生模型；具体方法随任务和模型而异。

## 在软件测试与开发中的应用

可以把通用模型蒸馏成较小的内部助手，完成稳定且定义明确的任务。测试应使用新样本、边界案例和目标语言。

## 优势与局限

较小的学生模型可能降低推理成本，或适用于资源受限环境。效果取决于训练数据和模型容量，也可能复制教师的错误或偏见。

## 与相近术语对比

蒸馏会训练学生模型；量化降低数值精度；剪枝移除部分参数或连接。这些方法可以组合使用。

## 实施建议（Best Practices）

明确目标任务，审阅教师输出，保留独立测试集，并与原模型比较质量、延迟和成本。

## 常见误区（Pitfalls）

模型体积更小，不代表能力完全相同。也不要只用教师生成的样本评估学生模型。

## FAQ

### 蒸馏和量化是一回事吗？

不是。蒸馏训练学生模型；量化用较低数值精度表示模型参数。

## 相关资源

### 相关词条

- [小语言模型](/zh-cn/AIWiki/small-language-models-slms/)
- [模型量化](/zh-cn/AIWiki/model-quantization/)
- [合成训练数据](/zh-cn/AIWiki/synthetic-training-data/)

### 参考资料

- [Distilling the Knowledge in a Neural Network](https://arxiv.org/abs/1503.02531)
