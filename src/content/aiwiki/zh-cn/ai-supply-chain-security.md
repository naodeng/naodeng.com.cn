---
title: "AI 供应链安全"
titleEn: "AI Supply-Chain Security"
titleZh: "AI 供应链安全"
slug: "ai-supply-chain-security"
lang: "zh-cn"
summary: "AI 供应链安全覆盖模型权重、数据集、适配器、依赖和服务来源，降低被篡改或引入未知风险的可能。"
topic: "ai-safety-quality"
aliases:
  - "模型供应链安全"
  - "AI 资产安全"
tags:
  - "AI 安全"
  - "供应链"
related:
  - "training-data-poisoning"
  - "model-privacy-attacks"
  - "model-and-data-cards"
lastReviewedAt: "2026-10-12"
---

# AI 供应链安全

## 科普速读

- **它是什么：** AI 供应链安全追踪并保护构建和运行 AI 所需的组件。
- **适合什么场景：** 管理权重、数据集、适配器、依赖和服务的风险。
- **主要边界：** 哈希或签名本身不能证明组件安全。

## 概览

部署模型可能依赖权重、训练数据、适配器、分词器、推理库、插件和远端 API。任一部分发生变化，都可能改变模型行为或暴露数据。

## 核心定义

AI 供应链安全保护 AI 开发与部署使用的资产、软件、数据和服务，并追踪它们的来源与变更。

## 背景与发展

软件团队早已管理依赖项的来源和完整性。AI 还增加了模型权重、数据集、评测材料和转换步骤，这些内容也会改变系统行为。

## 工作机制（How It Works）

团队为每项资产记录来源、版本、校验和、许可、构建步骤和负责人。再固定依赖版本、验证文件、扫描已知问题，并隔离不可信组件。

## 在软件测试与开发中的应用

加载第三方模型或适配器前，先核对发布者、哈希、许可和转换历史。把它放在隔离环境中评估后，再用于开发工具。

## 优势与局限

来源记录有助于发现变更并调查事件。来源可信或哈希匹配，都不能证明数据合法或模型行为安全。

## 与相近术语对比

训练数据投毒会篡改或污染训练样本；供应链安全覆盖更完整的路径，包括数据、模型、工具、构建系统和部署服务。

## 实施建议（Best Practices）

建立 AI 资产清单，固定版本，核验来源，检查许可，并把评测条件与模型和数据文档一起保存。

## 常见误区（Pitfalls）

模型能正常加载，或来自热门仓库，都不代表它安全。量化权重和适配器也要记录转换过程。

## FAQ

### 检查模型哈希，就能确认它安全吗？

不能。哈希只能确认文件是否匹配已知值；还需复核来源、许可、依赖、构建过程和模型行为。

## 相关资源

### 相关词条

- [训练数据投毒](/zh-cn/AIWiki/training-data-poisoning/)
- [模型隐私攻击](/zh-cn/AIWiki/model-privacy-attacks/)
- [模型卡与数据卡](/zh-cn/AIWiki/model-and-data-cards/)

### 参考资料

- [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final)
