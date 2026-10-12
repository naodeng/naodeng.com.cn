---
title: "混合专家模型（MoE）"
titleEn: "Mixture of Experts"
titleZh: "混合专家模型"
slug: "mixture-of-experts"
lang: "zh-cn"
summary: "MoE 通过路由器为每个输入选择部分专家网络计算，可扩大模型容量并控制单次激活的计算量。"
topic: "ai-foundations"
aliases:
  - "MoE"
  - "混合专家"
tags:
  - "模型架构"
  - "LLM"
related:
  - "mistral-mixtral"
  - "model-quantization"
  - "small-language-models-slms"
lastReviewedAt: "2026-10-12"
---

# 混合专家模型（MoE）

## 科普速读

- **它是什么：** 混合专家模型把输入路由到部分神经网络子模块。
- **适合什么场景：** 增加模型容量，同时限制每个输入激活的计算量。
- **主要边界：** 总参数更多，不代表质量更好或成本更低。

## 概览

可以把它想成一个团队：每个问题只交给几位相关专家。混合专家模型通过学习到的路由机制，为输入选择神经网络子模块。

## 核心定义

混合专家（MoE）模型包含多个专家子网络，并使用路由机制选择哪些子网络处理当前输入。

## 背景与发展

MoE 研究探索如何增加模型容量，同时避免每个输入都激活全部参数。稀疏路由有助于控制计算量，但也会增加训练和服务复杂度。

## 工作机制（How It Works）

路由器为 token 或输入选择部分专家。选中的专家进行处理，模型再组合它们的输出。这些专家是训练形成的组件，不一定对应人能读懂的专长领域。

## 在软件测试与开发中的应用

MoE 模型可能用于代码助手或语言任务。团队应直接测试部署模型的能力，不要只根据架构名称推断它会不会写代码。

## 优势与局限

稀疏路由可以增加总容量，同时每次只用部分网络。路由可能造成负载不均；所有模型权重仍影响存储和分发。

## 与相近术语对比

MoE 是单个模型内部的架构；多 Agent 系统通过控制流程和工具协调独立 Agent；量化降低数值精度，是另一种设计选择。

## 实施建议（Best Practices）

针对实际工作负载测质量、吞吐、延迟、内存和服务成本，并检查路由与负载均衡效果。

## 常见误区（Pitfalls）

不要把总参数量等同于每个 token 实际使用的参数、模型能力或推理成本。这些指标含义不同。

## FAQ

### 混合专家模型是多 Agent 系统吗？

不是。专家是单个模型内部被选中的神经网络组件，不是独立 Agent。

## 相关资源

### 相关词条

- [Mistral 与 Mixtral](/zh-cn/AIWiki/mistral-mixtral/)
- [模型量化](/zh-cn/AIWiki/model-quantization/)
- [小语言模型](/zh-cn/AIWiki/small-language-models-slms/)

### 参考资料

- [Switch Transformers 论文](https://arxiv.org/abs/2101.03961)
