---
title: "Agent 工具沙箱"
titleEn: "Agent Sandboxing"
titleZh: "Agent 工具沙箱"
slug: "agent-sandboxing"
lang: "zh-cn"
summary: "Agent 沙箱在隔离环境中限制文件、网络和资源访问，降低生成代码或工具调用造成的影响范围。"
topic: "ai-agents"
aliases:
  - "智能体沙箱"
  - "工具沙箱"
tags:
  - "Agent 安全"
  - "隔离执行"
related:
  - "permission-policies-allowed-command-list"
  - "agent-authorization"
  - "prompt-injection"
lastReviewedAt: "2026-10-12"
---

# Agent 工具沙箱

## 科普速读

- **它是什么：** 沙箱限制 Agent 运行代码或工具时可以访问的环境。
- **适合什么场景：** 控制开发任务中的文件、网络和资源访问。
- **主要边界：** 隔离能降低影响，但不能消除所有安全风险。

## 概览

代码助手可能要安装依赖并运行测试。沙箱可以让它在临时目录中工作，而不开放整台机器。

## 核心定义

Agent 沙箱把代码或工具放进隔离环境，并控制其文件、网络和计算资源访问。

## 背景与发展

沙箱是已有的软件安全技术。Agent 系统用它限制生成代码或工具调用的影响，因为这些操作可能出错、不安全，或受到恶意输入影响。

## 工作机制（How It Works）

宿主环境在执行前设置文件权限、网络规则、资源上限和凭据访问方式。临时容器或虚拟机可在任务结束后销毁，同时由宿主控制允许的操作。

## 在软件测试与开发中的应用

在受限网络的临时工作区运行生成代码和测试。测试时检查路径穿越、密钥泄露、资源耗尽和环境清理。

## 优势与局限

隔离可以缩小错误命令或恶意依赖造成的影响。隔离层配置错误、存在漏洞，或凭据范围过宽时，数据和系统仍可能暴露。

## 与相近术语对比

命令白名单规定哪些命令可以运行；沙箱限制这些命令能访问什么；授权决定谁可以请求执行操作。

## 实施建议（Best Practices）

默认关闭网络，只挂载任务所需文件，不传入生产密钥，设置资源上限，并在任务结束后销毁临时环境。

## 常见误区（Pitfalls）

提示模型“不要读取 .env”不是操作系统控制。不要用这条指令替代真正的隔离措施。

## FAQ

### 有了沙箱，还需要授权吗？

需要。沙箱限制执行环境；身份和授权控制谁能执行每项操作。

## 相关资源

### 相关词条

- [权限策略与允许命令列表](/zh-cn/AIWiki/permission-policies-allowed-command-list/)
- [Agent 授权](/zh-cn/AIWiki/agent-authorization/)
- [提示注入](/zh-cn/AIWiki/prompt-injection/)

### 参考资料

- [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
- [MCP Security Best Practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices)
