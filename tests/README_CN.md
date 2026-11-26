# 测试说明

本目录是 [inaodeng.com](https://inaodeng.com) 的独立测试工程，包含 Vitest 单元测试和 TesterArmy E2E 测试。

## 目录结构

```text
tests/
  unit/                      # Vitest 和 fast-check 单元测试
  e2e/specs/                  # TesterArmy 浏览器验收测试
  e2e/support/                # 路由常量和无障碍辅助函数
  scripts/visual-sampling.mjs # 可选的页面截图与布局抽样工具
  e2e.config.ts               # TesterArmy 运行配置
  vitest.config.ts
  package.json
```

## 环境与运行

站点要求 Node.js `>=22.12.0`；测试工程要求 Node.js `^22.22.3 || >=24.8.0`。

```bash
cd tests
npm ci
npx @e2e-dev/web install chromium --with-deps

# 运行单元测试和 E2E 测试
npm test

# 仅运行单元测试
npm run test:unit

# 构建最新站点，然后在预览服务上运行 E2E
npm run test:e2e

# 对已有构建运行 E2E（CI 在构建步骤后使用）
npm run test:e2e:run

# 显式构建后测试的别名
npm run test:e2e:build

# CI 和仓库指南使用的命令别名
npm run test:e2e:all
```

设置 `E2E_BASE_URL` 可将测试指向其他站点；为兼容旧流程也支持 `PLAYWRIGHT_BASE_URL`。

旧 Playwright Test E2E 测试和运行配置已在行为复核后退役。`playwright` 包仅为可选截图抽样工具保留；运行 `npm run visual:sampling` 前，需用 `npx playwright install chromium` 安装其 Chromium 浏览器。这个工具不属于 E2E 套件，也不作为 CI 门禁。

## 单元测试

单元测试使用 [Vitest](https://vitest.dev/) 和 [fast-check](https://fast-check.dev/)。新增或修改行为逻辑时，应让逻辑可在模块边界测试，并覆盖所有新增或修改的逻辑分支，目标为该部分分支覆盖率 100%；不以未改动代码计算本次覆盖率。

在 `tests/unit/` 下创建 `*.test.ts` 文件，从 `vitest` 导入 `describe`、`it`、`expect`。适合范围输入的性质可用 `fc.assert(fc.property(...))` 验证。

```ts
import { describe, expect, it } from "vitest";
import fc from "fast-check";
import { myUtil } from "../../src/utils/myUtil";

describe("myUtil", () => {
  it("返回正数", () => {
    fc.assert(fc.property(fc.nat(), (value) => {
      expect(myUtil(value)).toBeGreaterThan(0);
    }));
  });
});
```

## E2E 测试

E2E 使用 [TesterArmy e2e](https://github.com/tester-army/e2e)，通过确定性定位器和断言验证页面行为，不需要模型服务或 API key。浏览器为该框架安装的 Chromium。

在 `tests/e2e/specs/` 下创建 `*.e2e.ts` 文件。从 `@e2e-dev/web` 导入 `test`，从 `e2e` 导入 `expect`；用 `app.open('/path')` 打开路由，优先使用 `screen` 做语义定位，CSS 选择器使用 `browser.locator()`。

```ts
import { test } from "@e2e-dev/web";
import { expect } from "e2e";

test("中文博客首页可以打开", async ({ app, screen }) => {
  await app.open("/zh-cn/blog/");
  await expect(screen.getByRole("heading", { name: "博客" })).toBeVisible();
});
```

### 覆盖策略

- 核心 E2E 覆盖验收范围内的全部行为，包括中英文链路和要求的响应式断点。
- 非核心 E2E 至少覆盖一个 happy path 和一个反向/负向用例。
- 按行为和逻辑分支评估覆盖，不要求与旧测试数量一致。只锁定短暂样式或重复 DOM 细节的冗余断言不再逐条保留。
- clipboard shim 可以验证页面复制反馈和复制内容，但不能证明操作系统剪贴板权限或真实设备行为。

原有 46 个 E2E 测试领域已迁入 `tests/e2e/specs/`。可设置 `E2E_TELEMETRY_DISABLED=1` 关闭框架遥测；CI 已默认关闭。

## CI

E2E 工作流会运行单元测试、构建站点、安装 TesterArmy Chromium，再以两个 worker 和一次重试运行唯一的 E2E 套件；不再安装或调用 Playwright Test。
