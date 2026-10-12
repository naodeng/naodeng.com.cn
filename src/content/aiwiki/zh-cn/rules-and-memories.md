---
title: "规则与记忆"
titleEn: "Rules and Memories"
slug: "rules-and-memories"
lang: "zh-cn"
summary: "将持久规则与记忆机制结合的治理模式，用于长期对齐模型行为。"
topic: "ai-vibe-coding"
aliases:
  - "Rules and Memories"
  - "规则与记忆"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "rule-types"
  - "active-memory"
  - "automatic-memory"
  - "memory-scope"
lastReviewedAt: "2026-10-12"
---
# 规则与记忆（Rules and Memories）

## 科普速读

- **它是什么：** 规则提供指令；记忆保存以后可能复用的信息。
- **适合什么场景：** 区分任务要求与系统可能再次使用的事实或偏好。
- **主要边界：** 加载、作用范围和持久性取决于产品。

## 概览

规则可以要求提出代码改动前运行指定测试。记忆可以保存这条测试命令或项目偏好。系统仍需正确检索和应用这些信息。

## 核心定义

规则是关于如何处理任务的指令。记忆是可能在后续交互中再次提供的已保存信息。不同产品创建、检索和更新两者的方式各不相同。

## 背景与发展

AI 应用增加指令和已保存上下文，以支持重复工作。团队需要区分当前有效要求与可能过时的已保存事实。

## 工作机制（How It Works）

1. 应用按产品定义的格式保存规则或记忆。
2. 条件匹配时，应用应用规则或检索记忆。
3. 模型在上下文中收到这些信息。
4. 模型在回答或执行操作时使用它们。
5. 用户检查指令冲突和过时信息。

## 在软件测试与开发中的应用

规则可以要求提交补丁前运行测试。记忆可以记录仓库的测试命令。如果命令发生变化，应更新记忆，并检查规则是否仍符合团队要求。

## 优势与局限

规则可以明确任务要求，记忆可以减少重复说明。两者都可能未被加载、已经过时或与新指令冲突。除非宿主另有执行机制，否则它们都不是权限控制。

## 与相近术语对比

规则指导行为。记忆保存可复用上下文。会话状态支持当前交互。权限策略决定某项操作能否执行。

## 实施建议（Best Practices）

把要求写进规则，把易变事实保存在可更新的位置。限制适用范围，删除旧信息。明确解决冲突，并在重要操作前检查当前上下文。

## 常见误区（Pitfalls）

不要把记忆当成当前要求。不要假设已保存的指令总会加载。不要用规则或记忆授予文件或工具访问权。

## FAQ

### 记忆可以取代规则吗？

不能可靠取代。记忆用于保存信息，规则用于提出指令。应按产品文档使用对应机制。

## 相关资源

### 相关词条

- [rule-types](https://inaodeng.com/zh-cn/AIWiki/rule-types/)
- [active-memory](https://inaodeng.com/zh-cn/AIWiki/active-memory/)
- [automatic-memory](https://inaodeng.com/zh-cn/AIWiki/automatic-memory/)
- [memory-scope](https://inaodeng.com/zh-cn/AIWiki/memory-scope/)

### 外部参考

- [Cursor Docs](https://cursor.com/cn/docs)
- [Cursor Rules Docs](https://docs.cursor.com/context/rules)
- [Qoder Docs](https://docs.qoder.com/)
