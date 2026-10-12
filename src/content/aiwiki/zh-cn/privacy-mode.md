---
title: "隐私模式"
titleEn: "Privacy Mode"
slug: "privacy-mode"
lang: "zh-cn"
summary: "限制数据保留、共享或外传路径的运行模式。"
topic: "ai-vibe-coding"
aliases:
  - "Privacy Mode"
  - "隐私模式"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "permission-policies-allowed-command-list"
  - "memory-scope"
  - "rules-and-memories"
  - "remote-control"
lastReviewedAt: "2026-10-12"
---
# 隐私模式（Privacy Mode）

## 科普速读

- **它是什么：** 隐私模式是会改变部分数据处理方式的产品设置。
- **适合什么场景：** 审查服务如何处理项目数据。
- **主要边界：** 仅凭名称无法判断数据保留、训练或访问规则。

## 概览

AI 编码工具可能提供隐私设置。团队把私有源代码发送给服务前，需要了解设置会改变什么，以及覆盖哪些数据路径。

## 核心定义

隐私模式是供应商定义的设置或运行模式，用于限制或改变选定的数据处理行为。它没有统一的技术定义。实际效果取决于产品、账户方案和当前条款。

## 背景与发展

用户开始把代码、文档等敏感信息发送到托管服务后，AI 服务逐渐增加了隐私控制项。产品采用的名称和控制方式各不相同，团队需要查阅当前文档和协议。

## 工作机制（How It Works）

产品设置可能改变以下一项或多项行为：

1. 是否保留提示词或输出。
2. 提交的数据是否用于改进模型。
3. 哪些员工或服务提供方可以访问数据。
4. 遥测、日志和连接工具如何处理数据。

隐私设置可能不覆盖所有集成或本地缓存。

## 在软件测试与开发中的应用

将私有仓库接入 AI 助手前，先检查具体设置和条款。用非敏感内容进行试用，检查已连接的服务，并确认团队策略允许相应的数据流动。

## 优势与局限

有明确文档说明的隐私设置可以提供有用控制，但不能替代访问控制、数据最小化、保留策略或合同审查。本地处理也不等于隐私得到保证。

## 与相近术语对比

隐私模式会改变选定的数据处理行为。权限策略控制可访问的操作或资源。记忆作用域规定已保存上下文适用的范围。这些控制针对不同风险。

## 实施建议（Best Practices）

阅读供应商当前文档和合同，记录设置覆盖的数据、服务和集成。关闭不必要的数据收集并限制访问。产品或账户方案变更后重新核对。

## 常见误区（Pitfalls）

不要假设隐私模式代表零保留或绝不用于训练。还应单独核对插件、遥测和第三方工具的条款。

## FAQ

### 隐私模式意味着服务提供商不会保存任何数据吗？

不一定。设置可能只覆盖部分数据或服务。应查阅产品当前的条款和文档。

## 相关资源

### 相关词条

- [权限策略与命令允许列表](/zh-cn/AIWiki/permission-policies-allowed-command-list/)
- [记忆作用域](/zh-cn/AIWiki/memory-scope/)
- [规则与记忆](/zh-cn/AIWiki/rules-and-memories/)

### 外部参考

- [Cursor：隐私与数据处理](https://cursor.com/docs/account/privacy)
- [Cursor：隐私与数据治理](https://cursor.com/docs/enterprise/privacy-and-data-governance)
