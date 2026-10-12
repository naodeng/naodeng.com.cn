---
title: "权限策略 / 命令白名单"
titleEn: "Permission Policies / Allowed Command List"
slug: "permission-policies-allowed-command-list"
lang: "zh-cn"
summary: "用于控制智能体可执行工具和命令范围的策略机制。"
topic: "ai-vibe-coding"
aliases:
  - "Permission Policies / Allowed Command List"
  - "权限策略 / 命令白名单"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "privacy-mode"
  - "rule-types"
  - "function-calling"
  - "hooks"
lastReviewedAt: "2026-10-12"
---
# 权限策略与命令允许列表（Permission Policies and Allowed Command Lists）

## 科普速读

- **它是什么：** 权限策略规定用户或工具可以访问哪些操作或资源。
- **适合什么场景：** 限制 AI 编码助手能读取、运行或修改的内容。
- **主要边界：** 命令列表的效果取决于匹配和执行规则。

## 概览

团队可以允许运行测试命令，同时禁止删除文件的命令。系统还需要定义如何解析参数、Shell 运算符和脚本。

## 核心定义

权限策略是一组规则，用于允许、拒绝操作或要求批准。命令允许列表会在指定条件下列出可执行命令。不同产品采用的执行方式各不相同。

## 背景与发展

AI 工具开始访问文件、Shell 和外部服务后，权限控制变得重要。只列出命令名称，可能无法覆盖命令或脚本产生的全部影响。

## 工作机制（How It Works）

1. 定义要保护的资源和操作。
2. 编写允许、拒绝或审批规则。
3. 将请求的操作与规则匹配。
4. 允许、拒绝或请求批准。
5. 记录并测试决策路径。

## 在软件测试与开发中的应用

可以允许只读的测试发现操作，同时要求写文件或修改远程系统前先获批准。还要测试组合命令、脚本、路径和环境变量。

## 优势与局限

权限策略可以减少误操作或未授权操作。规则可能过宽或过窄。命令也可能调用其他程序，或产生名称本身无法体现的副作用。

## 与相近术语对比

允许列表描述被允许的项目。权限策略还会规定拒绝和审批行为。沙箱从执行环境层限制操作。钩子只能检查经过受支持事件的操作。

## 实施建议（Best Practices）

遵循最小权限原则，并使用范围明确的规则。测试 Shell 展开、命令串联和脚本行为。为不确定操作保留审批流程，并定期评审策略改动。

## 常见误区（Pitfalls）

不要认为允许某条命令就代表它的所有影响都安全。不了解宿主的匹配方式时，不要只依赖文本模式。环境级隔离应单独管理。

## FAQ

### 命令允许列表能单独构成完整安全边界吗？

不能。安全性取决于匹配方式、执行控制、命令行为和其他防护措施。

## 相关资源

### 相关词条

- [privacy-mode](https://inaodeng.com/zh-cn/AIWiki/privacy-mode/)
- [rule-types](https://inaodeng.com/zh-cn/AIWiki/rule-types/)
- [function-calling](https://inaodeng.com/zh-cn/AIWiki/function-calling/)
- [hooks](https://inaodeng.com/zh-cn/AIWiki/hooks/)

### 外部参考

- [Cursor Docs](https://cursor.com/cn/docs)
- [Cursor Rules Docs](https://docs.cursor.com/context/rules)
- [Qoder Docs](https://docs.qoder.com/)
