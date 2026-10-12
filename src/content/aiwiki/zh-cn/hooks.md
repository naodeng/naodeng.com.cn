---
title: "钩子机制"
titleEn: "Hooks"
slug: "hooks"
lang: "zh-cn"
summary: "在智能体/工具生命周期事件前后注册回调，用于策略控制与自动化处理。"
topic: "ai-vibe-coding"
aliases:
  - "Hooks"
  - "钩子机制"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "hook-events"
  - "function-calling"
  - "custom-commands"
  - "permission-policies-allowed-command-list"
lastReviewedAt: "2026-10-12"
---
# 钩子机制（Hooks）

## 科普速读

- **它是什么：** 钩子是在宿主报告指定事件时运行的代码或回调。
- **适合什么场景：** 为受支持的工作流增加检查、日志或后续操作。
- **主要边界：** 钩子只覆盖宿主连接到它的事件路径。

## 概览

开发工具可以在受支持的 Shell 命令执行前运行钩子，用于检查或记录命令。若另一条操作路径不会调用该钩子，它就无法控制那条路径。

## 核心定义

钩子是响应宿主事件运行的扩展。宿主决定如何注册钩子、提供哪些数据，以及钩子结果如何影响工作流。

## 背景与发展

钩子可扩展编辑器、构建系统和其他应用中的指定生命周期节点。一些 AI 编码工具会在会话、提示词或工具调用前后提供钩子。具体行为取决于宿主产品。

## 工作机制（How It Works）

1. 宿主发出有文档说明的事件。
2. 已注册的钩子接收事件数据。
3. 钩子执行范围明确的任务，例如运行检查或写入日志。
4. 宿主按文档处理钩子的结果。
5. 团队检查失败情况，并确认哪些操作路径会触发钩子。

## 在软件测试与开发中的应用

文件变更后，钩子可以运行格式检查；命令执行前，钩子可以检查命令。没有经过钩子的操作应由单独的权限或控制措施管理。

## 优势与局限

钩子可以自动执行选定节点上的重复检查，也会增加需要维护的组件。错误处理不当可能阻塞工作，或让检查在未执行时被误认为通过。

## 与相近术语对比

钩子响应事件运行，钩子事件是触发节点。自定义命令由用户按需启动。函数调用则让应用处理模型发出的工具请求。

## 实施建议（Best Practices）

让每个钩子的职责保持明确。记录输入和失败时的行为。测试事件顺序、重复事件、超时和错误。权限应独立于钩子逻辑进行审核。

## 常见误区（Pitfalls）

不要把钩子当成完整的安全边界。不要忽略钩子失败；也不要依赖可能被其他路径绕过的钩子。

## FAQ

### 钩子能强制执行策略吗？

它可以检查经过受支持事件的操作。对于不经过钩子的路径，应使用宿主权限或其他控制措施。

## 相关资源

### 相关词条

- [hook-events](https://inaodeng.com/zh-cn/AIWiki/hook-events/)
- [function-calling](https://inaodeng.com/zh-cn/AIWiki/function-calling/)
- [custom-commands](https://inaodeng.com/zh-cn/AIWiki/custom-commands/)
- [permission-policies-allowed-command-list](https://inaodeng.com/zh-cn/AIWiki/permission-policies-allowed-command-list/)

### 外部参考

- [Claude Code Overview](https://code.claude.com/docs/en/overview)
- [Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/overview)
