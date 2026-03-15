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
lastReviewedAt: "2026-03-02"
---

# ACP（Agent Client Protocol）（Agent Client Protocol）

> 一句话定义：一种标准化的通信协议，用于在 AI 智能体（Agent）运行时与 IDE 或其他客户端工具之间进行状态同步、能力协作与命令下发。

## 科普速读

- 解决问题：给 AI 立规矩，保证安全、合规和一致性。
- 适用场景：用于企业落地、团队协作和权限控制。
- 使用边界：不适合只追求速度、忽视治理的流程。

## 概览

`ACP（Agent Client Protocol）` 常被误解为“高级功能”，但它本质上是为了解决工程交付中的基础问题：结果不稳定、流程不可复用、问题难以追踪。从科普视角看，它的价值在于把 AI 从“会回答”推进到“可落地”。

## 核心定义

### 标准定义

ACP 是一种基于 JSON-RPC 或类似结构的异步通信模型。它定义了一套标准的 Schema，使得不同的智能体后端（Runtimes）可以无缝集成到各种开发者客户端中。核心议题包括：能力协商（Capability Negotiation）、流式状态同步（Streaming State Sync）以及确定性的资源锁定。

### 通俗解释

如果把 AI 工作流比作流水线，`ACP（Agent Client Protocol）` 就是其中负责“减少出错、提高可复用性”的关键工位。它不是为了炫技，而是为了让团队在真实项目里更稳地交付结果。

## 背景与发展

### 起源

- **提出背景**：早期的 AI 插件是“点对点”硬编码的，换一个编辑器就得重写一套逻辑，且无法支持复杂的长时（Long-running）智能体任务。
- **关注重点**：如何实现 Agent 的“跨平台运行”以及在高并发操作下的数据一致性。

### 演进

- **1.0 阶段（命令分发）**：AI 发送一段文本，人手动复制并执行。
- **2.0 阶段（API 钩子）**：IDE 提供简单的 API 给插件使用。
- **3.0 阶段（ACP 时代）**：Agent 成为独立实体，通过标准化的协议反向控制客户端功能，实现了真正的“人机接管（Handoff）”。

## 工作机制（How It Works）

1. **握手与能力协商**：Agent 与客户端建立连接时，先沟通“我会做什么”以及“你能提供什么工具”。
2. **请求-响应循环 (Request-Response)**：Agent 下发 `fs.read` 指令，客户端返回文件 Base64 或文本。
3. **事件驱动流 (Event Stream)**：客户端将用户正在编辑的行为（如光标移动）作为事件流推送给 Agent。
4. **权限守门 (Gatekeeping)**：ACP 协议层集成权限校验，确保 Agent 的每一个高危动作都符合安全策略。

## 在软件测试与开发中的应用

- **多 Agent 协同工作流**：一个负责写代码的 Agent 和一个负责跑测试的 Agent 共享同一个 ACP 通道。
- **远程调试与热插拔**：开发者可以在云端运行 Agent，通过 ACP 连接到本地的 IDE 界面。
- **自动化评测收集**：测试 Agent 通过协议层自动捕捉 IDE 中的异常报错并回传分析。

## 优势与局限

### 优势

- **解耦性能**：Agent 后端和 UI 前端可以独立升级，互不影响。
- **多端一致性**：同样的智能体逻辑，接入 VS Code、Cursor 或 Web 版 IDE 时体验一致。
- **可审计性**：所有通信包均可记录、回放，方便进行 Bug 溯源。

### 局限与风险

- **通信延迟**：如果协议解析过慢，在高频交互场景下会导致“手感”卡顿。
- **安全边界挑战**：协议如果被滥用，Agent 可能会在用户不知情的情况下操作敏感文件。
- **版本不匹配**：当客户端更新了协议但 Agent 尚未适配时，可能导致部分核心功能失效。

## 与相近术语对比

| 维度 | ACP (Agent Client Protocol) | MCP (Model Context Protocol) | LSP (Language Server Protocol) |
| :--- | :--- | :--- | :--- |
| **关注点** | **动作与运行时协作** | **上下文与资源接入** | 静态语法与类型分析 |
| **通信方** | Agent <-> IDE | Model <-> External Data | Editor <-> Tooling |
| **典型动作** | 执行命令、管理状态 | 读取文档、查询 DB | 跳转定义、自动补全 |

## 实施建议（Best Practices）

- **定义粒度适中的 Schema**：既要覆盖足够的工具能力，又要避免协议层过于臃肿。
- **启用心跳检查 (Heartbeat)**：对于长时任务，必须确保 ACP 连接的稳定性，否则 Agent 会“失控”。
- **分层权限管理**：在协议层实现针对特定命令的“自动通过”与“必须点击确认”。

## 常见误区（Pitfalls）

- **混淆 ACP 与普通 API**：API 是被动调用的，而 ACP 通常支持 Agent 主动发起的“双向通信”。
- **忽略错误处理**：当 Agent 下发了一个客户端不支持的命令时，如果没有优雅的回滚逻辑，会导致整个 Vibe 崩塌。

## FAQ

### Q1: 新手是否需要马上使用它？

A: 取决于任务复杂度。简单任务可先不用；一旦涉及团队协作、自动化或上线风险，就建议尽早引入。

### Q2: 如何避免“用了很多机制但效果一般”？

A: 先设清晰目标与指标，再逐步引入机制；每次只调整一个变量，避免同时改太多。

## 相关资源

### 相关词词条

- [cross-surface-operation](https://inaodeng.com/zh-cn/AIWiki/cross-surface-operation/)
- [remote-control](https://inaodeng.com/zh-cn/AIWiki/remote-control/)
- [permission-policies-allowed-command-list](https://inaodeng.com/zh-cn/AIWiki/permission-policies-allowed-command-list/)
- [subagents](https://inaodeng.com/zh-cn/AIWiki/subagents/)

### 外部参考

- [Cursor Protocol Overview](https://cursor.com/cn/docs)
- [Agentic Interoperability Standards](https://docs.qoder.com/)
