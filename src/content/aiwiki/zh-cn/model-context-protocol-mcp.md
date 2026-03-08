---
title: "模型上下文协议（MCP）"
titleEn: "MCP (Model Context Protocol)"
slug: "model-context-protocol-mcp"
lang: "zh-cn"
summary: "一种开放协议，用于以标准化方式连接 AI 模型与外部工具、数据源。"
topic: "ai-vibe-coding"
aliases:
  - "Model Context Protocol"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "ai-agent"
  - "skill"
  - "rules-cursorrules"
lastReviewedAt: "2026-03-02"
---

# 模型上下文协议（MCP）（MCP (Model Context Protocol)）

> 一句话定义：一种由 Anthropic 发布的开放协议，被誉为 AI 界的“USB 接口”，旨在标准化 AI 模型与外部数据源、工具之间的连接。

## 科普速读

- 解决问题：建立 AI 执行能力与治理边界。
- 适用场景：用于工具调用、规则控制和多步任务执行。
- 使用边界：没有权限和审计机制时风险较高。

## 概览

`模型上下文协议（MCP）` 的价值不在于概念本身，而在于它能解决真实工程问题：稳定性、可解释性和可协作性。科普视角下，理解它等于理解 AI 研发流程里的一个关键环节。

## 核心定义

### 标准定义

MCP 是一种基于 JSON-RPC 的架构协议，它定义了 AI 客户端（如 IDE、聊天界面）如何发现并与远程或本地服务（MCP Server）进行交互。它涵盖了三大核心能力：**Resources（静态数据读取）**、**Tools（动态指令执行）** 和 **Prompts（预设模板）**。

### 通俗解释

把它理解为“AI 工程中的一个基础控制点”：它帮助团队减少随机性、提升复用性，并把经验沉淀成可执行的方法。

## 背景与发展

### 起源

- **提出背景**：AI 智能体（Agent）的爆发式增长需要一个统一的互操作标准。2024 年底由 Anthropic 正式开源，迅速获得社区响应。
- **提出背景**：AI 模型的知识往往局限在训练数据内。为了完成真实世界的工程任务，它迫切需要触达私有数据和实时工具。
- **发起者**：Anthropic 公司（2024 年底发布）。

### 演进

- **前 MCP 时代**：每个工具的开发者需要为不同的模型（GPT, Claude, Gemini）编写不同的接口。
- **MCP 时代**：**一次编写，到处运行**。开发者只需开发一个 MCP Server，即可被所有主流模型客户端集成。

## 工作机制（How It Works）

1.  **MCP 客户端 (Host)**：如 Claude Desktop 或 IDE，负责管理会话并整合用户意图。
2.  **MCP 服务器 (Server)**：一个轻量级的后端执行程序，负责暴露 **资源 (Resources)**、**工具 (Tools)** 和 **提示模板 (Prompts)**。
3.  **通信通道**：通常基于标准输入输出 (stdio) 或 HTTP/SSE（服务器发送事件）。
4.  **资源发现**：当客户端启动时，它会自动询问服务器：“你能提供哪些超能力？”服务器列出清单（如：`/search-files`, `/read-db`），AI 根据清单按需调用。

## 在软件测试与开发中的应用

-   **本地工程环境连接**：通过 MCP，AI 可以直接读取你本地的 Git 提交历史，或者实时查询你本地运行的服务日志。
-   **自定义评测工具集**：QA 工程师可以编写一个 MCP Server，将内部专有的测试平台接口封装进去，让 AI 直接触发自动化流水线。
-   **文档即时同步**：将 Confluence 或 Notion 通过 MCP 连接到 AI 助手，在写代码时实时参考最新的业务背景。

## 优势与局限

### 优势

-   **生态统一**：极大地降低了开发者工具与 AI 模型集成的成本。
-   **安全性**：MCP Server 运行在本地或受控环境，开发者可以精确控制哪些数据、哪些命令允许 AI 触碰。
-   **实时性**：AI 获取的是最新的数据，而非训练时期的过时知识。

### 局限与风险

-   **协议早期阶段**：目前的工具生态（MCP Servers）还在快速成长期，部分高级功能尚不完善。
-   **延迟抖动**：频繁跨进程或跨网络地调用 MCP 接口可能会增加 AI 的响应时间。
-   **配置复杂度**：普通用户可能觉得配置多个本地 MCP Server 有一定技术门槛。

## 与相近术语对比

| 维度 | MCP Protocol | API Calling | LSP (Language Server) |
| :--- | :--- | :--- | :--- |
| **主要目标** | **AI 模型的万能接口** | 基础的程序通信 | 专为代码补全/诊断设计 |
| **可观测性** | 强（由 Host 统一展示） | 弱（隐藏在代码中） | 强 |
| **架构** | C/S 架构，自描述 | 请求/响应 | C/S 架构 |

## 实施建议（Best Practices）

-   **保持工具原子性**：一个 MCP Tool 只做一件事（如：读取单个文件），让 AI 自行组合这些工具。
-   **提供详细的自描述 (Docstrings)**：由于 AI 是通过描述来决定调用哪个工具的，所以 Server 的函数描述必须像写好的 Prompt 一样精准。
-   **使用社区生态**：优先去 `mcp-get` 或官方仓库寻找已有的 Server（如 GitHub, PostgreSQL, Linear），避免重复造轮子。

## 常见误区（Pitfalls）

-   **把敏感信息硬编码**：在编写 MCP Server 时，应使用环境变量管理 Key，而不是直接写在代码里。
-   **错误处理过于简陋**：如果 MCP Server 报错，应返回清晰的文本错误信息，而不是直接崩溃，这样 AI 才能尝试根据报错进行“自我修正”。

## FAQ

### Q1: 新手需要马上掌握这个术语吗？

A: 建议先理解核心目的，再结合实际项目逐步使用。

### Q2: 如何判断是否真的用对了？

A: 看三件事：交付更稳、返工更少、团队协作更顺畅。

## 相关资源

### 相关词条

- [ai-agent](https://inaodeng.com/zh-cn/AIWiki/ai-agent/)
- [skill](https://inaodeng.com/zh-cn/AIWiki/skill/)
- [function-calling](https://inaodeng.com/zh-cn/AIWiki/function-calling/)

### 外部参考

- [MCP Official Introduction](https://modelcontextprotocol.io/)
- [Anthropic: Introducing MCP](https://www.anthropic.com/news/model-context-protocol)
