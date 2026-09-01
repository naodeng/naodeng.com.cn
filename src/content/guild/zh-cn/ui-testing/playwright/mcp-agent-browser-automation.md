---
title: "Playwright MCP：用 AI Agent 探索浏览器并沉淀测试"
description: "将 MCP 客户端连接到 Playwright，在受控浏览器会话中收集证据，并沉淀为可维护的 Playwright Test 用例。"
testType: ui-testing
framework: playwright
language: JavaScript/TypeScript
stage: advanced
difficulty: advanced
duration: 55
order: 4
officialDocs: https://playwright.dev/docs/getting-started-mcp
---

## 概念与目标

Playwright MCP 是一个基于 Model Context Protocol 的浏览器自动化服务器。它把 Playwright 的浏览器能力提供给兼容的 AI 客户端：Agent 可以导航、读取当前页面的结构化无障碍快照、依据快照中的元素引用点击或填写、截取截图，并收集控制台与网络证据。它不是让模型凭像素猜测页面，而是让模型基于结构化信息完成有限的浏览器交互。因此，它适合用来探索陌生流程、复现用户报告的 UI 问题，或在编写自动化用例前确认稳定的定位方式与真实交互结果。

本教程的目标不是让 Agent 自由浏览或代替测试工程师，而是完成一次可追溯、范围受控的调查，再把调查结果沉淀为仓库中可评审、可重复执行的 Playwright Test。Playwright MCP 不能替代 Playwright Test：MCP 擅长让 Agent 在真实浏览器会话中探索与诊断；Playwright Test 则提供已评审的源代码、web-first 断言、确定性的 Fixture、报告、Trace、重试和可复现的 CI 门禁。两者互补，但职责必须分开。

只使用本地测试应用、预发环境或已明确授权的目标。连接之前先写下可观测目标，例如：“使用一次性会员账号保存显示名称后，页面出现成功提示，并且只向获批准的 profile API 发出一次请求。”这个目标既限定 Agent 要做什么，也限定工程师要如何判断结果。一次探索成功只说明该会话中的观察成立，不能说明所有浏览器、所有权限组合和所有业务分支都正确。

### 什么时候应该使用 MCP

当还不知道稳定断言在哪里时，MCP 最有价值：缺少复现步骤的缺陷报告、刚上线的流程需要无障碍视角的走查、或需要先收集网络和控制台信息再决定定位器。若已有明确的回归用例，应直接运行对应的 Playwright Test 并查看 Trace；不需要为了“使用 AI”再启动一次 Agent。Agent 循环包含客户端、提示词、浏览器状态等额外变量，应当用来降低未知性，而不是取代普通测试执行。

## 实施步骤

### 1. 先限定目标、账号和允许动作

先写一段很短的调查说明：允许访问的 origin、功能路径、一次性账号、预期结果，以及 Agent 绝不能执行的动作。不要使用真实客户资料、生产管理员登录态、支付操作或长期复用的浏览器 Profile。若场景会修改数据，必须准备隔离数据并写清理方式。提示词要要求 Agent 在完成指定流程后立即停止；如出现偏差，只返回第一个偏差及其证据。

一份可执行的说明应包含可观察的答案：页面文字或 URL、关键请求的状态，以及需要带回的证据。例如要求它返回首个失败请求、相关控制台信息、无障碍快照和截图。不要写“测试整个网站”或“全部修好”这类任务；这会让操作边界和结果标准同时失去约束。

### 2. 为 MCP 客户端添加受限的 Playwright MCP 服务

Playwright 的标准配置通过 `npx` 启动 `@playwright/mcp`。浏览器默认以有头模式启动，便于工程师观察 Agent 正在做什么。下面的配置选择隔离 Profile，并只允许访问预发 origin。不同 MCP 客户端保存配置的位置不同，应按客户端文档放入对应设置；命令和核心参数保持一致。

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest",
        "--isolated",
        "--allowed-origins=https://staging.example.test"
      ]
    }
  }
}
```

`--isolated` 会为每次调查创建新的内存会话，避免 Cookie 和 localStorage 在不同调查之间遗留；这很重要，因为 Playwright MCP 默认会保留 Profile。无人值守的工作节点可增加 `--headless`，需要跨浏览器核对时可显式增加 `--browser=firefox` 或 `--browser=webkit`。升级 Playwright 后，应重新核对[官方 MCP 快速开始](https://playwright.dev/docs/getting-started-mcp)和[配置选项](https://playwright.dev/mcp/configuration/options)，不要把旧配置不加检查地复制到新环境。

### 3. 用可复现的提示词驱动调查

服务连接后，给 Agent 一个窄而明确的请求。它应先导航并读取无障碍快照，再依据实际页面元素交互，而不是臆造选择器或执行不可逆操作。每个预期状态都要在浏览器中验证，失败时也必须报告事实。下面是一次性预发账号的示例，它不是访问任意 URL 的授权。

```text
打开 https://staging.example.test/settings，并使用一次性会员账号。
只将显示名称改为 “Nao MCP”，且只保存一次。
验证用户可见的成功提示，并记录发往 /api/profile 的请求。
若任一观察与预期不同，立即停止，并返回第一个失败请求、相关控制台信息、
无障碍快照和截图。不要访问批准 origin 之外的页面，也不要执行其他操作。
```

MCP 可以查看网络请求、控制台信息，也可以设置 Mock Route；它们都属于诊断手段，而不是断言本身。Mock 响应可以帮助观察 UI 如何处理超时或校验失败，却不能证明真实集成正常。截图只能证明单次会话看到的画面，不能证明 Agent 在每一种状态都选对元素。保存结果时同时记录目标版本、账号标识、浏览器和 MCP 配置，才能让其他人复现与审查。

### 4. 将证据转成经过评审的 Playwright Test

当 Agent 找到稳定的 role、label、响应契约和预期文案后，把这些结论写进仓库的测试。只有当 Page Object 能让重复的业务动作更清楚时才引入它；断言保留在测试中，使预期行为一眼可见。下面的代码代表一次 MCP 调查后的人工沉淀，不应把 Agent 对话记录未经理解直接复制为测试。

```ts
import { expect, test, type Page } from '@playwright/test';

class AccountSettingsPage {
  constructor(private readonly page: Page) {}

  async saveDisplayName(name: string) {
    await this.page.getByLabel('Display name').fill(name);
    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}

test('会员可以保存显示名称', async ({ page }) => {
  await page.goto('/settings');
  const saveResponse = page.waitForResponse(
    (response) => response.url().endsWith('/api/profile') && response.request().method() === 'PATCH',
  );

  await new AccountSettingsPage(page).saveDisplayName('Nao MCP');

  await expect(page.getByRole('status')).toHaveText('Saved');
  await expect(await saveResponse).toBeOK();
});
```

这一步才是质量门槛。像评审任何源代码一样，评审定位器、测试账号、清理策略和断言。不要因为 Agent 生成的脚本曾经通过一次，就保留一个无法解释的测试。若证据表明是产品缺陷，应把快照、截图、请求详情和 Trace 附在缺陷报告中，待预期行为确认后再补回归用例。

## 运行与验证

先确认客户端能启动服务并打开批准的测试目标。对只读页面做一次无害走查，再执行会写数据的场景；在条件允许时观察有头浏览器，并确认无障碍快照确实对应目标页面。连接失败时，应先检查 MCP 客户端日志、Node.js 版本、浏览器下载状态和 allowed-origin 配置，再去改应用或测试代码。

需要修改数据时，使用新建的一次性账号，并执行可审计的清理步骤。记录客户端版本、Playwright MCP 配置、目标版本、浏览器、时间窗口和提示词，这能区分应用故障、陈旧浏览器状态与错误提示词。需要长期 CI 证据时，运行已提交的 Playwright Test，而不要把一次 MCP 对话当作发布门禁。

```bash
# 运行由调查沉淀出来、已评审的测试。
export BASE_URL=https://staging.example.test
npx playwright test tests/account-settings.spec.ts --project=chromium

# 失败后查看 Trace 证据。
npx playwright show-trace test-results/**/trace.zip
```

### 如何把结果当作证据阅读

一份有用的 MCP 结果必须说明任务、目标、执行动作和观察到的状态；一份有用的 Playwright Test 结果还要包含稳定断言，并在失败时保留 Trace。把网络方法、端点、状态码和可见结果逐项与事先写下的预期比较。若模型声称成功，但 Trace 显示发生重定向、重试、意外 origin 或使用了不同账号，应把结果标为“不确定”并继续调查。不能为了让结果看起来正确而修改预期。

## 常见问题与边界

最常见的问题是给 Agent 过宽权限，再把它的文字总结当成证明。应缩小 origin 白名单，只使用一次性凭据，不把密钥写进提示词、截图、storage state 文件或对话历史。除非环境负责人已经评审网络边界，否则不要把服务绑定到所有网卡。即使是本地 MCP 配置，它仍然具备浏览器自动化能力，也应该按最小权限原则管理。

不要随意启用不安全的直接代码执行能力。Playwright 将 `browser_run_code_unsafe` 标注为与远程代码执行等价，因此不能把它放进未经评审的客户端配置。优先使用普通浏览器工具与版本库中的测试代码。若一次性调查确实需要直接执行代码，应使用隔离环境、移除密钥、审查客户端连接，并只保留安全的诊断证据。

### 排查顺序

当 Agent 无法完成请求时，按这个顺序排查：先检查目标 URL 和允许的 origin；再确认浏览器 Profile 模式与测试账号；然后查看最新无障碍快照和第一个失败动作；最后对比控制台与网络证据。这个顺序可避免把缓存登录态或被拦截的 origin 误判为定位器问题。一次只修改一个条件，保持提示词聚焦，并尽量用普通 Playwright Test 复现最终结论。

## CI/CD 实践

除非团队专门设计了安全、可观测的 Agent 工作流，否则不要把 MCP 探索放入每次提交的标准门禁。可靠的 CI 产物，是从调查中沉淀出来且经过评审的测试。CI 中要固定依赖和浏览器，只注入受保护的预发变量，在失败时保留 Trace 与截图，并让单个 PR 测试范围保持足够小。更广的浏览器矩阵和长流程放在定时任务或候选发布环境中执行。

```yaml
name: Playwright regression
on: [pull_request]
jobs:
  verify-settings:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npx playwright test tests/account-settings.spec.ts --project=chromium
        env:
          BASE_URL: ${{ secrets.STAGING_BASE_URL }}
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-evidence
          path: test-results/
```

CI 应快速回答一个窄问题：已批准、版本化的测试是否仍满足其契约。MCP 的价值在此前的探索阶段，即工程师需要结构化的浏览器操作与证据时。明确这条交接线，才能让两种工具都更容易审计、维护和信任。
