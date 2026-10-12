---
title: "提示注入（Prompt Injection）"
titleEn: "Prompt Injection"
titleZh: "提示注入"
slug: "prompt-injection"
lang: "zh-cn"
summary: "提示注入把恶意指令藏在用户输入或检索内容中，试图改变模型行为或诱导工具越权。"
topic: "ai-safety-quality"
aliases:
  - "提示词注入"
tags:
  - "LLM 安全"
  - "Agent 安全"
related:
  - "jailbreak-attack"
  - "agent-sandboxing"
  - "excessive-agency"
lastReviewedAt: "2026-10-12"
---

# 提示注入（Prompt Injection）

## 科普速读

- **它是什么：** 提示注入把恶意指令藏在模型会读取的内容中。
- **适合什么场景：** 测试会处理用户输入或外部资料的系统。
- **主要边界：** 只靠提示词规则无法强制建立安全边界。

## 概览

代码审查 Agent 可能读到一份恶意 README，按其要求上传环境变量。风险取决于模型如何处理这些文字，以及它能调用什么工具。

## 核心定义

提示注入把操纵性指令放入模型输入或外部内容，试图改变任务、规则或工具行为。

## 背景与发展

语言模型开始读取不可信内容并调用工具后，提示注入成为安全问题。攻击可以来自用户消息，也可以藏在检索页面、邮件、文件或代码里。

## 工作机制（How It Works）

系统把文本放入模型上下文。模型可能无法区分可信指令与不可信资料，继而遵循恶意文本。

## 在软件测试与开发中的应用

用对抗性文档、注释和缺陷描述测试代码 Agent 与检索 Agent，检查它们是否泄露密钥或执行超出请求的操作。

## 优势与局限

提示注入测试能暴露模型和工具工作流中的风险。检测过滤器和拒答行为可以减少部分问题，但不能保证完全防住攻击。

## 与相近术语对比

提示注入关注恶意指令如何进入上下文；越狱关注如何诱导模型绕过安全行为。一次攻击可能同时包含两者。

## 实施建议（Best Practices）

把检索文本视为不可信内容，隔离密钥，限制工具权限，逐项校验操作，并对高影响动作要求复核。

## 常见误区（Pitfalls）

不要只依赖系统提示词防护。宿主系统必须强制执行权限限制，并控制敏感数据访问。

## FAQ

### 检索到的文档中也会有提示注入吗？

会。网页、文件、消息和其他外部内容都可能包含模型误认为指令的文字。

## 相关资源

### 相关词条

- [越狱攻击](/zh-cn/AIWiki/jailbreak-attack/)
- [Agent 工具沙箱](/zh-cn/AIWiki/agent-sandboxing/)
- [过度代理权限](/zh-cn/AIWiki/excessive-agency/)

### 参考资料

- [OWASP Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final)
