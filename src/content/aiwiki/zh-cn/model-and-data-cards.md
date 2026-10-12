---
title: "模型卡与数据卡（Model and Data Cards）"
titleEn: "Model and Data Cards"
titleZh: "模型卡与数据卡"
slug: "model-and-data-cards"
lang: "zh-cn"
summary: "模型卡和数据卡用结构化文档记录模型用途、评测、限制及数据集来源与组成，帮助判断是否适用。"
topic: "ai-safety-quality"
aliases:
  - "Model Card"
  - "Data Card"
tags:
  - "AI 治理"
  - "文档"
related:
  - "model-privacy-attacks"
  - "ai-supply-chain-security"
  - "agent-evals"
lastReviewedAt: "2026-10-12"
---

# 模型卡与数据卡（Model and Data Cards）

## 科普速读

- **它是什么：** 模型卡和数据卡记录模型或数据集的情况及评估信息。
- **适合什么场景：** 审查用途、评测条件、来源和局限。
- **主要边界：** 文档说明不能代替独立验证。

## 概览

选择代码模型前，团队可能需要了解它测试过哪些语言、面向什么用途以及有哪些已知限制。

## 核心定义

模型卡描述模型的预期用途、评测条件和限制；数据卡描述数据集的来源、收集方式和组成。

## 背景与发展

模型卡和数据卡是一种文档实践，便于了解 AI 的开发与评测情况。模板各不相同，因此卡片应注明具体模型或数据集版本。

## 工作机制（How It Works）

作者用结构化文档记录适用范围、方法、数据来源、评测条件、风险和已知缺口。审阅者根据这些信息判断资源是否适合任务。

## 在软件测试与开发中的应用

可以在供应商审查、模型选型、数据集审批和测试计划中使用模型卡与数据卡，查找不支持的语言或缺失的评测案例。

## 优势与局限

完整的卡片能让假设和信息缺口更清楚。它仍依赖作者报告的准确性和完整性。

## 与相近术语对比

模型卡介绍模型，数据卡介绍数据集；基准测试汇报选定任务的结果，但未必说明预期用途或数据来源。

## 实施建议（Best Practices）

卡片版本要和模型或数据集同步，写清评测条件，注明缺失信息，并在资源变化后更新。

## 常见误区（Pitfalls）

不要把卡片当作认证或第三方审计。风险信息缺失表示“未知”，不表示“没有风险”。

## FAQ

### 模型卡能证明模型安全吗？

不能。它记录模型报告的用途、评测和限制；团队仍要自行验证。

## 相关资源

### 相关词条

- [模型隐私攻击](/zh-cn/AIWiki/model-privacy-attacks/)
- [AI 供应链安全](/zh-cn/AIWiki/ai-supply-chain-security/)
- [AI Agent 评测](/zh-cn/AIWiki/agent-evals/)

### 参考资料

- [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993)
- [Data Cards: Purposeful and Transparent Dataset Documentation](https://arxiv.org/abs/2204.01075)
