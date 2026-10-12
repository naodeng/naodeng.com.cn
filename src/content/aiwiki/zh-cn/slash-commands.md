---
title: "斜杠命令"
titleEn: "Slash Commands"
slug: "slash-commands"
lang: "zh-cn"
summary: "在会话或 IDE 中通过命令快捷触发预定义动作。"
topic: "ai-vibe-coding"
aliases:
  - "Slash Commands"
  - "斜杠命令"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "custom-commands"
  - "hooks"
  - "function-calling"
  - "conversation-state"
lastReviewedAt: "2026-10-12"
---
# 斜杠命令（Slash Commands）

## 科普速读

- **它是什么：** 斜杠命令是以斜杠开头、用于启动指令或操作的快捷入口。
- **适合什么场景：** 在聊天或开发界面中调用重复任务。
- **主要边界：** 可用命令和执行效果取决于宿主产品。

## 概览

用户可以输入 `/review` 启动代码评审提示词。某个产品可能会展开对应指令，另一个产品可能运行工具，也可能不支持这种命令。

## 核心定义

斜杠命令是一种界面模式：用户输入斜杠开头的名称，以调用命令、提示词或操作。它不是统一的 AI 标准。

## 背景与发展

聊天和开发工具会用斜杠命令快速启动操作。AI 产品也可以把它映射到提示词、工作流或工具。语法和行为各不相同。

## 工作机制（How It Works）

1. 用户输入受支持的斜杠名称。
2. 宿主将名称匹配到已配置的命令或操作。
3. 宿主执行操作，或提供关联指令。
4. 用户检查输出和产生的影响。

## 在软件测试与开发中的应用

斜杠命令可以启动聚焦的测试评审、总结代码差异或生成发布说明。应明确它需要的输入和预期输出。

## 优势与局限

命令可以让常见任务更容易启动。命令可能不可用，也可能在产品更新后改变，或实际触发比名称所示更广泛的操作。

## 与相近术语对比

斜杠命令描述用户如何启动操作。自定义命令是可复用的命令定义。钩子会在宿主事件发生后运行。技能会为任务打包指令和资源。

## 实施建议（Best Practices）

查看支持命令列表和产品文档。说明预期输入。检查操作修改的文件或系统。不要在命令参数中暴露敏感数据。

## 常见误区（Pitfalls）

不要假设所有产品都支持某个斜杠命令。调用命令不等于批准高影响操作。应确认命令实际会执行什么。

## FAQ

### 斜杠命令一定会调用工具吗？

不一定。它可能展开成指令、启动操作，也可能不受宿主支持。

## 相关资源

### 相关词条

- [custom-commands](https://inaodeng.com/zh-cn/AIWiki/custom-commands/)
- [hooks](https://inaodeng.com/zh-cn/AIWiki/hooks/)
- [function-calling](https://inaodeng.com/zh-cn/AIWiki/function-calling/)
- [conversation-state](https://inaodeng.com/zh-cn/AIWiki/conversation-state/)

### 外部参考

- [Claude Code Overview](https://code.claude.com/docs/en/overview)
- [Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/overview)
