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
lastReviewedAt: "2026-03-02"
---

# 大语言模型（LLMs）（Large Language Models (LLMs)）

> 一句话定义：在海量文本上训练的基础模型，可执行生成、推理和工具协作任务。

## 科普速读

- 解决问题：理解模型类别差异，避免误选。
- 适用场景：用于成本、速度、质量平衡决策。
- 使用边界：不应只看榜单分数做选型。

## 概览

`大语言模型（LLMs）` 的价值不在于概念本身，而在于它能解决真实工程问题：稳定性、可解释性和可协作性。科普视角下，理解它等于理解 AI 研发流程里的一个关键环节。

## 核心定义

### 标准定义

在海量文本上训练的基础模型，可执行生成、推理和工具协作任务。

### 通俗解释

把它理解为“AI 工程中的一个基础控制点”：它帮助团队减少随机性、提升复用性，并把经验沉淀成可执行的方法。

## 背景与发展

### 起源

- 提出背景：AI 辅助开发从“补全”演进到“智能体协作”。
- 关注重点：如何在效率、质量与可控性之间取得平衡。

### 演进

- 早期：以单轮提示和代码补全为主。
- 中期：增加上下文、检索、规则与工具调用。
- 近期实践：进入智能体编排与质量门禁并行阶段。

## 工作机制（How It Works）

1. 输入：需求、上下文、约束条件。
2. 处理：模型推理 + 工具调用 + 规则约束。
3. 输出：代码、测试、文档或修复建议。
4. 反馈闭环：人工评审 + 自动测试 + 迭代修正。

## 在软件测试与开发中的应用

是 AI 编码助手、测试生成系统和智能体框架的核心引擎。

## 优势与局限

### 优势

- 规模效应带来能力涌现
- 通用自然语言交互接口
- 可适配编码与测试任务

### 局限与风险

- 在高风险场景中仍需人工把关（HITL）。
- 上下文不足时可能出现不准确输出。
- 若缺少测试门禁，错误可能被快速放大。

## 与相近术语对比

| 维度 | 大语言模型（LLMs） | 小语言模型（SLMs） | GPT（生成式预训练 Transformer） |
| :--- | :--- | :--- | :--- |
| 核心目标 | 强调 `大语言模型（LLMs）` 的核心实践与边界 | 更偏向 `小语言模型（SLMs）` 的能力范畴 | 更偏向 `GPT（生成式预训练 Transformer）` 的能力范畴 |
| 使用阶段 | 从需求到回归均可使用 | 在 `小语言模型（SLMs）` 主导场景更常见 | 在 `GPT（生成式预训练 Transformer）` 主导场景更常见 |
| 自动化程度 | 中到高（取决于工具链） | 中（依赖具体系统） | 中（依赖具体系统） |
| 人工参与度 | 中（建议关键节点人工审批） | 中到高（视风险而定） | 中到高（视风险而定） |

## 实施建议（Best Practices）

- 从低风险模块开始试点，逐步扩大覆盖范围。
- 明确质量门禁：代码评审、测试通过、回滚策略。
- 建立提示词与规则资产库，持续复用和迭代。

## 常见误区（Pitfalls）

- 将模型输出直接视为最终正确结果。
- 不做上下文治理，导致提示污染与结果漂移。
- 缺乏可观测性，难以定位问题根因。

## FAQ

### Q1: 新手需要马上掌握这个术语吗？

A: 建议先理解核心目的，再结合实际项目逐步使用。

### Q2: 如何判断是否真的用对了？

A: 看三件事：交付更稳、返工更少、团队协作更顺畅。

## 相关资源

### 相关词条

- [small-language-models-slms](https://inaodeng.com/zh-cn/AIWiki/small-language-models-slms/)
- [gpt](https://inaodeng.com/zh-cn/AIWiki/gpt/)
- [claude](https://inaodeng.com/zh-cn/AIWiki/claude/)

### 术语元数据

- 别名：LLM
- 标签：AI Vibe Coding、Wiki

## 参考来源

- [Google: Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [Stanford Foundation Models report](https://crfm.stanford.edu/report.html)
