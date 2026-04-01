---
title: "Playwright 在软件测试中的应用：CI/CD"
description: "讲解 Playwright 接入 CI/CD 的关键设计：安装方式、并发策略、重试与追踪配置、报告与分片执行。"
date: 2026-03-31T00:00:00.000Z
author: "nao.deng"
tags: ["CI/CD", "测试工程", "Playwright"]
categories: ["测试工程", "效能工程"]
series: ["Playwright 软件测试应用"]
---

# Playwright 在软件测试中的应用：CI/CD

## 文章定位

- 系列：Playwright 在软件测试中的应用
- 状态：发布版
- 主题：CI/CD

## 导读

这篇聚焦 Playwright 如何接入交付链路。目标不是“测试能在 CI 里跑”，而是“测试结果能成为可信质量信号”。

## 一、为什么要接入 CI/CD

Playwright 官方已经把 CI 当成默认场景之一来设计。它不仅提供 GitHub Actions 示例，还明确写出了浏览器依赖安装、workers 设置、报告输出等实践建议。

对团队来说，接 CI/CD 的意义主要有三点：

- 提前发现问题。
- 保持执行环境一致。
- 沉淀稳定的失败证据。

## 二、接入方案设计

官方给出的 CI 三步很清楚：

- `npm ci`
- `npx playwright install --with-deps`
- 运行测试

除此之外，还有两个实务重点。

第一，workers。官方建议在 CI 环境里优先设为 `1`，换稳定性和可复现性。如果有强大的自托管环境，再逐步放开并行或使用 sharding。

第二，reporter。Playwright 原生支持 `html`、`json`、`junit` 等 reporter，足够接大多数团队的流水线与报告系统。

## 三、流水线中的关键实践

- 在 CI 中优先稳定，再谈速度。
- `retries` 和 `trace: 'on-first-retry'` 是一组很实用的默认配置。
- 用 HTML 报告给人看，用结构化 reporter 给系统消费。
- 如果测试量上来，再考虑 sharding，而不是先把单机并发拉满。

## 四、常见问题与治理

- 浏览器依赖缺失：按官方方式安装 `--with-deps`。
- 并发不稳：先把 `workers` 收敛到 1。
- 失败难定位：打开 trace 和 HTML report。
- 流水线太慢：优先做分层执行，再考虑分片。

## 五、总结

CI/CD 阶段最重要的不是“把测试塞进流水线”，而是把 Playwright 结果变成稳定、可复盘、可决策的反馈系统。先稳，再快，这条路通常更靠谱。

## 系列导航

- 上一篇：`03-playwright-advanced.md`
- 下一篇：`05-playwright-more-use-cases.md`

## 参考资料

- https://playwright.dev/docs/ci
- https://playwright.dev/docs/trace-viewer
- https://playwright.dev/docs/api/class-testconfig
