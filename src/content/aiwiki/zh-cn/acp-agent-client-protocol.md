---
title: "ACP（Agent Client Protocol）"
titleEn: "ACP (Agent Client Protocol)"
slug: "acp-agent-client-protocol"
lang: "zh-cn"
summary: "用于智能体运行时与客户端工具互操作的协议。"
topic: "ai-vibe-coding"
aliases:
  - "ACP (Agent Client Protocol)"
  - "ACP（Agent Client Protocol）"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "cross-surface-operation"
  - "remote-control"
  - "permission-policies-allowed-command-list"
  - "subagents"
lastReviewedAt: "2026-10-12"
---
# Agent Client Protocol（ACP）

## 科普速读

- **它是什么：** ACP 规定编码 Agent 与代码编辑器或客户端如何交换请求和事件。
- **适合什么场景：** 通过共享协议连接兼容的编辑器和 Agent。
- **主要边界：** 协议不定义所有产品功能，也不会授予工具权限。

## 概览

编辑器可以通过 ACP 启动 Agent 会话、发送编码请求，并接收进度或结果。编辑器和 Agent 仍需分别决定支持哪些工具与能力。

## 核心定义

Agent Client Protocol（ACP，Agent 客户端协议）用于编码 Agent 与 Agent 客户端（例如代码编辑器）之间的通信。协议消息采用 JSON-RPC 2.0，并定义初始化、会话管理、提示请求和更新等操作。

## 背景与发展

ACP 用于连接编码 Agent 与多个兼容客户端。它是一项有版本文档的公开协议。不同客户端和 Agent 的支持范围可能不同。

## 工作机制（How It Works）

1. 客户端和 Agent 初始化，并交换支持的能力。
2. 客户端创建或选择会话。
3. 客户端发送提示词或会话操作。
4. Agent 返回响应，也可能发送进度更新或请求客户端提供信息。
5. 客户端展示结果，并按自身规则处理权限和界面交互。

具体方法和行为取决于协议版本及实现。

## 在软件测试与开发中的应用

编辑器可以连接兼容 ACP 的编码 Agent，而不必使用某个供应商专属的聊天界面。团队可以测试连接初始化、会话延续、工具批准、取消和错误处理。

## 优势与局限

共享协议可以减少针对单个客户端编写的集成代码，但不保证不同实现支持相同的可选能力。协议也不负责定义 Agent 的质量、安全性或授权策略。

## 与相近术语对比

ACP 连接编码 Agent 和客户端。MCP 连接 AI 应用与外部工具和数据源。A2A 支持 Agent 之间通信。这些协议解决的连接问题不同。

## 实施建议（Best Practices）

确认协议版本和能力协商结果。测试支持与不支持的方法。用户批准和操作系统权限应由客户端或执行环境控制。

## 常见误区（Pitfalls）

不要认为 ACP 连接本身就授予文件或 Shell 访问权。不要假设所有客户端都支持全部方法。应确认实现如何处理错误、取消和用户批准。

## FAQ

### ACP 会决定 Agent 可以执行哪些操作吗？

不会。ACP 规定通信方式。客户端、Agent 和执行环境分别管理自己的权限。

## 相关资源

### 相关词条

- [跨界面操作](/zh-cn/AIWiki/cross-surface-operation/)
- [远程控制](/zh-cn/AIWiki/remote-control/)
- [权限策略](/zh-cn/AIWiki/permission-policies-allowed-command-list/)
- [子 Agent](/zh-cn/AIWiki/subagents/)

### 外部参考

- [Agent Client Protocol：协议概览](https://github.com/agentclientprotocol/agent-client-protocol/blob/main/docs/protocol/v1/overview.mdx)
