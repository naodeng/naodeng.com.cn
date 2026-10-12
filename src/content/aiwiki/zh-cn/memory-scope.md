---
title: "记忆作用域"
titleEn: "Memory Scope"
slug: "memory-scope"
lang: "zh-cn"
summary: "定义记忆生效范围：全局、项目、团队或会话级。"
topic: "ai-vibe-coding"
aliases:
  - "Memory Scope"
  - "记忆作用域"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "active-memory"
  - "automatic-memory"
  - "privacy-mode"
  - "rules-and-memories"
lastReviewedAt: "2026-10-12"
---
# 记忆作用域（Memory Scope）

## 科普速读

- **它是什么：** 记忆作用域规定已保存信息可以在哪些范围内使用。
- **适合什么场景：** 区分个人、项目或会话上下文。
- **主要边界：** 作用域标签本身不能保证访问控制或隐私。

## 概览

一条测试输出偏好可能只适用于某个仓库，不适用于另一个项目。记忆系统需要明确作用域，避免在错误项目中复用该偏好。

## 核心定义

记忆作用域是规定哪些用户、项目、会话或任务可以使用某条已保存信息的边界。具体支持哪些作用域，以及如何执行边界，由产品决定。

## 背景与发展

应用开始保存上下文后，系统需要确定何时以及在哪里检索这些信息。记忆增加后，这类规则变得更加重要。但作用域没有统一的层级结构。

## 工作机制（How It Works）

1. 系统按照作用域或所有权规则保存信息。
2. 后续请求标识当前用户、项目或会话。
3. 系统检索允许在当前上下文使用的信息。
4. 应用执行访问控制和保留规则。
5. 用户检查返回信息是否相关且仍然有效。

## 在软件测试与开发中的应用

编码助手可以保存某个仓库的约定，例如测试命令。除非存储和权限机制支持，否则团队不应把私人备注分享给其他仓库。

## 优势与局限

作用域可以减少无关信息复用，并帮助分隔上下文。错误标签、过宽的检索规则或薄弱的访问控制，都可能让信息在错误位置泄露或生效。作用域名称本身不提供安全保障。

## 与相近术语对比

记忆作用域规定保存的记忆在哪里适用。会话状态用于延续当前交互。规则提供指令。权限策略控制对操作或资源的访问。这些机制解决的问题不同。

## 实施建议（Best Practices）

记录可用作用域及其所有者。需要时分开管理个人、团队和项目数据。检查访问和删除行为，并允许用户查看与修正已保存信息。

## 常见误区（Pitfalls）

不要假设不同产品都支持相同的全局、项目和会话作用域。不要用作用域代替访问控制。

## FAQ

### 项目级记忆一定只会在一个仓库中使用吗？

只有产品实际执行了这条边界时才是如此。应检查检索行为和访问控制。

## 相关资源

### 相关词条

- [active-memory](https://inaodeng.com/zh-cn/AIWiki/active-memory/)
- [automatic-memory](https://inaodeng.com/zh-cn/AIWiki/automatic-memory/)
- [privacy-mode](https://inaodeng.com/zh-cn/AIWiki/privacy-mode/)
- [rules-and-memories](https://inaodeng.com/zh-cn/AIWiki/rules-and-memories/)

### 外部参考

- [Cursor: Project Scoped Rules](https://docs.cursor.com/context/rules)
- [How to manage AI memory hierarchy](https://docs.qoder.com/)
