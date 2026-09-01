---
title: "Playwright CI：浏览器、分片与测试产物"
description: "在 CI 中确定性地运行 Playwright，并发布报告、Trace 与失败截图。"
testType: ui-testing
framework: playwright
language: JavaScript/TypeScript
stage: ci-cd
difficulty: advanced
duration: 40
order: 4
officialDocs: https://playwright.dev/docs/ci
---

## 概念与目标

Playwright Test：集成测试运行器、Web-first 断言、隔离浏览器上下文、并行执行和丰富诊断能力的端到端框架。它用一套 API 支持 Chromium、Firefox 与 WebKit，适合既要快速本地反馈又要保留 CI 证据的现代 Web 流程。 本文把这些能力落到“可复现且带报告的 Chromium CI 门禁”这个可执行任务上。把受控且确定性的场景迁入 CI。流水线应明确版本、浏览器或 Java 运行时、目标 URL、数据和产物。CI 是回归信号，不是制造生产负载或把真实凭据提交进仓库的许可；更大规模的测试应放在独立且已授权的性能环境。请从已授权、可恢复的目标开始，例如本地测试应用或预发布环境；在运行前记录目标版本、测试数据来源和结果负责人。这样可以避免把“工具运行成功”误读成“允许发布”。

通过标准必须可观察：响应符合约定、用户可见状态出现，或受控负载运行满足预先商定的目标。开始编写前，先用一句话写清目标，例如：“在支持的浏览器和测试账号下，保存资料后必须出现确认提示。”它比“脚本没有报错”更可靠，因为它直接指向真实用户或服务消费者需要的结果。

### 先定义信号，再选择实现方式

选择一个主信号和一个诊断信号。主信号是决定成败的状态码、用户提示、分位延迟或事务结果；诊断信号是解释失败的报告、trace、截图、JTL、浏览器日志或服务指标。环境变量和测试数据不应写死在源码中。这样同一篇教程既能在本地复现，也能迁入 CI，而不必提交凭据或误把生产系统当作测试目标。

## 实施步骤

### 1. 准备受控环境

创建干净工作区，确认运行时可用，并显式指定目标地址。如果目标不可访问，或账号正在被其他并行运行使用，就先停止并解决前置问题。下面命令只用于安装和连通性检查，不构成压测或回归通过证据；遇到环境问题时，应把输出与本次改动一起保存。

```bash
npm init playwright@latest
npx playwright install --with-deps
npx playwright test --project=chromium
```

### 2. 实现最小的工具专属场景

围绕一个可观察结果构造场景，并用业务语言命名操作。下面的 Playwright Test 示例刻意保持很小，便于定位问题。只有能说明新地址、选择器或接口参数为何稳定之后，才替换占位内容。把断言放在其验证的操作附近，评审者才能分辨失败来自初始化、交互、响应还是验证本身。

```ts
import { test, expect } from '@playwright/test';

test('a member saves profile details', async ({ page }) => {
  await page.goto('/settings');
  await page.getByLabel('Display name').fill('Nao');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('status')).toHaveText('Saved');
  await expect(page).toHaveURL(/settings/);
});
```

### 3. 让行为可重复

把场景保存为有名字的文件，把数据放进独立 fixture 或 CSV，并通过环境变量传入目标。本阶段应使用工具原生的等待、事务、拦截、报告或配置能力来处理 ci-cd-integration 关注点，不能用通用 sleep 或隐藏的全局默认值敷衍。以下配置和命令聚焦于“可复现且带报告的 Chromium CI 门禁”，也适合作为提交前的最小冒烟检查。

```ts
// playwright.config.ts: make target and evidence explicit
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'https://staging.example.test',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  reporter: [['html', { open: 'never' }]],
});

// Run the focused ci-cd-integration scenario.
// npx playwright test tests/ci_cd_integration.spec.ts --project=chromium
```

## 运行与验证

只对已授权目标运行，并从最小安全范围开始。一次本地绿色结果只表示该配置下的场景契约通过；它不能证明容量、无障碍、安全性或所有浏览器与设备都正确。保存执行命令、目标提交版本、运行时间窗、测试数据标识和输出目录，使其他工程师可以独立复现。

```bash
export BASE_URL=https://staging.example.test
mkdir -p artifacts
npx playwright test --project=chromium --reporter=html
```

### 把结果当作证据阅读

终端应报告选定的 project 和通过的测试。打开 HTML 报告检查步骤和附件；如发生重试，应先查看 trace，再调整选择器或超时。Trace 同时记录操作、DOM 快照、截图和网络活动，可区分应用缺陷与等待或 fixture 缺陷。 将实际结果与写下的阈值比较，而不是仅与上一次绿色构建比较。目标变慢或不可用时，应标记本次运行为“不确定”并保留证据，不能反复重试到偶然变绿。性能测试还要关联施压机和服务端指标；UI 测试则要先用 trace 或截图复现失败状态，再修改定位器、fixture 或超时。

## 常见问题与边界

不要在角色或标签已经表达意图时使用冗长 CSS 链，不要硬编码第三方实时数据，也不要用 `page.waitForTimeout` 做同步。page.route 适合隔离依赖，但不能替代契约或真实集成检查。认证 storage state 应保持私密，上传产物前必须排除。 教程中的示例也有范围边界：它演示一种技术，不代表可以测试任意公共服务。涉及负载或可能造成数据变更的操作时，应使用限速、匿名化数据和约定的维护窗口。分享截图、报告和 CI 产物前，必须移除 token、cookie、个人信息和内部 URL。

### 推荐排障顺序

失败时按以下顺序检查：目标是否可达；选择的运行时和版本；fixture 或数据是否有效；第一个失败的请求或用户动作；最后再读诊断产物。这个顺序能避免测试框架的表面症状掩盖真实应用回归。一次只修改一个假设，然后重新运行聚焦命令。无法借助保留证据复现的失败仍应视为风险，不能简单标为“偶发”。

## CI/CD 实践

CI 任务应受控且可复现：锁定依赖，安装需要的浏览器或 Java/Python 运行时，只注入受保护变量，运行聚焦门禁，并在失败时也上传诊断产物。下面示例不在 YAML 中写真实密钥；应在 CI 提供商的密钥管理中配置。除非环境负责人明确批准成本和影响范围，否则不要把长时间压测或破坏性流程放进每次提交的门禁。

```yaml
name: Playwright Test regression
on: [pull_request]
jobs:
  verify:
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - uses: actions/checkout@v4
      - name: Install runtime
        run: |
          npm ci
          npx playwright install --with-deps chromium
      - name: Run bounded test
        env:
          BASE_URL: ${{ secrets.STAGING_BASE_URL }}
        run: |
          npx playwright test --project=chromium
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-evidence
          path: artifacts/
```

在将绿色任务当作发布信号前先检查产物。CI 应快速回答一个狭窄问题；定时任务或候选发布任务可以再增加浏览器矩阵、更长持续时间和受控的数据刷新。团队需要明确两者区别，避免把冒烟门禁误认为完整系统验证。
