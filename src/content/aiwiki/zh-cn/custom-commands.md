---
title: "自定义命令"
titleEn: "Custom Commands"
slug: "custom-commands"
lang: "zh-cn"
summary: "由用户定义的命令入口，用于封装提示、工具与流程约定。"
topic: "ai-vibe-coding"
aliases:
  - "Custom Commands"
  - "自定义命令"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "slash-commands"
  - "hooks"
  - "function-calling"
  - "rule-types"
lastReviewedAt: "2026-10-12"
---
# 自定义命令（Custom Commands）

## 科普速读

- **它是什么：** 自定义命令是可重复使用的命名指令或操作入口。
- **适合什么场景：** 复用代码评审、测试或文档流程。
- **主要边界：** 命令格式和可执行操作取决于宿主产品。

## 概览

团队可以创建一个名为 `/review-test` 的命令，让助手按简短清单检查测试改动。评审者仍需检查结果。

## 核心定义

自定义命令封装一条可复用指令。有些产品还支持参数、模板或工具调用。命令本身不会授予权限，也不能保证模型每次都遵守指令。

## 背景与发展

命令系统用于快速启动常见操作。AI 工具也可以用命令提供任务指令或启动工作流。不同产品的命名、文件格式、参数和执行方式各不相同。

## 工作机制（How It Works）

1. 用户定义命令名称和指令。
2. 宿主在支持的位置或设置中注册该命令。
3. 用户调用命令，常见方式是输入斜杠命令。
4. 宿主将指令和支持的参数交给模型或对应操作。
5. 用户检查输出和产生的改动。

## 在软件测试与开发中的应用

可以用命令请求一次聚焦的测试评审、复现指定失败案例，或根据选定改动起草发布说明。每个命令的范围应便于评审。

## 优势与局限

命令能简化重复任务的启动，并提高流程一致性。命令也可能过时、隐藏假设，或在产品更新后改变行为。工具访问权和安全控制仍需单独管理。

## 与相近术语对比

自定义命令是用于启动指令或操作的可复用入口。斜杠命令是一种调用方式。钩子会在宿主事件触发时运行。技能通常包含更完整的任务指导和资源。

## 实施建议（Best Practices）

说明预期输入和输出，列明命令可使用的文件或工具，并加入检查步骤。宿主更新后重新测试；条件允许时将指令纳入版本管理。

## 常见误区（Pitfalls）

不要把命令名称当成权限边界。不要让宽泛命令修改无关内容。定期确认命令仍符合团队工作流。

## FAQ

### 每个自定义命令都是斜杠命令吗？

不是。有些产品使用斜杠命令，另一些产品提供不同的调用界面。请查看宿主产品文档。

## 相关资源

### 相关词条

- [slash-commands](https://inaodeng.com/zh-cn/AIWiki/slash-commands/)
- [hooks](https://inaodeng.com/zh-cn/AIWiki/hooks/)
- [function-calling](https://inaodeng.com/zh-cn/AIWiki/function-calling/)
- [rule-types](https://inaodeng.com/zh-cn/AIWiki/rule-types/)

### 外部参考

- [Claude Code Overview](https://code.claude.com/docs/en/overview)
- [Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/overview)
