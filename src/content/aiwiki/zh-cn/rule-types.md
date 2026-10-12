---
title: "规则类型"
titleEn: "Rule Types"
slug: "rule-types"
lang: "zh-cn"
summary: "按作用范围与触发策略划分规则类型，例如常驻、条件触发与手动应用。"
topic: "ai-vibe-coding"
aliases:
  - "Rule Types"
  - "规则类型"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "rules-and-memories"
  - "permission-policies-allowed-command-list"
  - "privacy-mode"
  - "custom-commands"
lastReviewedAt: "2026-10-12"
---
# 规则类型（Rule Types）

## 科普速读

- **它是什么：** 规则类型按作用范围或触发方式对指令分类。
- **适合什么场景：** 整理 AI 编码工具使用的项目指令。
- **主要边界：** 规则类别和行为因产品而异。

## 概览

一个仓库可能需要始终适用的规则、只针对某个目录的规则，以及由用户按需调用的检查清单。产品可能只支持其中一些形式，也可能都不支持。

## 核心定义

规则类型是描述指令如何保存、适用或触发的分类方式。常见区分包括始终生效、路径限定和手动调用。这是一种实用分类，不是统一标准。

## 背景与发展

AI 工具增加项目指令后，用户需要按任务和文件组织规则。不同产品采用自己的格式、优先级和加载方式。

## 工作机制（How It Works）

1. 选择指令的适用范围或触发方式。
2. 按产品支持的格式保存指令。
3. 适用范围或触发条件匹配时，宿主加载规则。
4. 模型将规则作为上下文接收。
5. 用户检查规则是否按预期生效。

## 在软件测试与开发中的应用

可以把通用仓库约定放在广泛适用的规则中；产品支持时，再把框架细节放在相关目录。发布评审清单可以由用户按需调用。

## 优势与局限

分类可以让指令更容易查找和维护。规则范围重叠时可能互相冲突；宿主也可能不会加载用户以为会读取的文件。

## 与相近术语对比

规则是一条指令。规则类型描述适用范围或触发方式。记忆保存以后可能再次使用的信息。权限策略控制可执行操作，而不是回答指导。

## 实施建议（Best Practices）

为指令选择足够小的作用范围。避免重复规则。记录优先级和触发行为，并用实际任务测试各类规则。

## 常见误区（Pitfalls）

不要假设不同工具中的类别名称含义相同。不要用写作规则代替安全控制。项目约定变化后，应删除或更新旧指令。

## FAQ

### AI 规则类型有统一标准吗？

没有。产品自行定义格式和行为。始终生效、范围限定和手动调用是便于说明的分类方式。

## 相关资源

### 相关词条

- [rules-and-memories](https://inaodeng.com/zh-cn/AIWiki/rules-and-memories/)
- [permission-policies-allowed-command-list](https://inaodeng.com/zh-cn/AIWiki/permission-policies-allowed-command-list/)
- [privacy-mode](https://inaodeng.com/zh-cn/AIWiki/privacy-mode/)
- [custom-commands](https://inaodeng.com/zh-cn/AIWiki/custom-commands/)

### 外部参考

- [Cursor Docs](https://cursor.com/cn/docs)
- [Cursor Rules Docs](https://docs.cursor.com/context/rules)
- [Qoder Docs](https://docs.qoder.com/)
