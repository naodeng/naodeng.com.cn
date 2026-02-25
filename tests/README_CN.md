# 测试说明

本目录包含 [inaodeng.com](https://inaodeng.com) 的所有测试，作为独立项目管理，包含两套测试：单元测试（Vitest）和端到端测试（Playwright）。

## 目录结构

```
tests/
  unit/                    # 单元测试 & 基于属性的测试（Vitest + fast-check）
    readingTime.test.ts    # 阅读时间计算
    progressBar.test.ts    # 进度条宽度计算
    scrollToTop.test.ts    # 回到顶部按钮可见性
    wikiFilter.test.ts     # Wiki 客户端搜索过滤
  e2e/
    specs/                 # Playwright E2E 测试用例
      code-block.spec.ts
      docs.spec.ts
      guild.spec.ts
      interaction.spec.ts
      layout.spec.ts
      links.spec.ts
      locale-switch.spec.ts
      navigation.spec.ts
      page-accessibility.spec.ts
      performance.spec.ts
      reading-progress.spec.ts
      responsive.spec.ts
      scroll-to-top.spec.ts
      search.spec.ts
      seo.spec.ts
      theme.spec.ts
      toc.spec.ts
      wiki-search.spec.ts
      wiki.spec.ts
    support/
      constants.ts         # 共享 URL 工具函数和 locale 常量
  package.json
  vitest.config.ts
  playwright.config.ts
```

## 安装依赖

```bash
cd tests
npm install
```

> Playwright 浏览器会自动安装。如需手动安装，运行 `npx playwright install chromium`。

## 运行测试

```bash
# 运行所有测试（单元 + E2E）
npm test

# 仅运行单元测试
npm run test:unit

# 单元测试监听模式
npm run test:unit:watch

# 仅运行 E2E 测试（需先构建站点）
npm run test:e2e

# E2E 测试交互式 UI 模式
npm run test:e2e:ui

# 查看上次 E2E 测试报告
npm run test:e2e:report
```

> E2E 测试会自动构建并预览站点，除非设置了 `PLAYWRIGHT_BASE_URL` 环境变量。

## 单元测试

单元测试使用 [Vitest](https://vitest.dev/) 和 [fast-check](https://fast-check.dev/) 进行基于属性的测试。测试 `src/utils/` 中的纯函数，无需浏览器或服务器。

### 编写单元测试

1. 在 `tests/unit/` 下创建 `*.test.ts` 文件
2. 从 `../../src/utils/your-util` 导入工具函数
3. 使用 `vitest` 的 `describe` / `it` / `expect`
4. 使用 `fast-check` 的 `fc.assert(fc.property(...))` 编写属性测试

```ts
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { myUtil } from '../../src/utils/myUtil';

describe('myUtil', () => {
  it('始终返回正数', () => {
    fc.assert(
      fc.property(fc.nat(), (n) => {
        expect(myUtil(n)).toBeGreaterThan(0);
      })
    );
  });
});
```

### 覆盖情况

| 文件 | 被测函数 | 验证的属性 |
|---|---|---|
| `readingTime.test.ts` | `readingTime(wordCount)` | 最少 1 分钟、单调不减、始终为正整数 |
| `progressBar.test.ts` | `progressBarWidth(scrollY, totalHeight)` | 值域 [0,100]、起始为 0、随 scrollY 单调不减 |
| `scrollToTop.test.ts` | `shouldShowScrollToTop(scrollY, threshold?)` | 0 时为 false、≤ 阈值时为 false、> 阈值时为 true、始终为布尔值 |
| `wikiFilter.test.ts` | `filterWikiEntries(entries, query)` | 空查询返回全部、结果是输入子集、长度 ≤ 输入长度、大小写不敏感 |

## E2E 测试

E2E 测试使用 [Playwright](https://playwright.dev/)，针对构建并预览后的站点运行，全部使用 Chromium 浏览器。

### 编写 E2E 测试

1. 在 `tests/e2e/specs/` 下创建 `*.spec.ts` 文件
2. 从 `../support/constants` 导入共享工具
3. 使用 `@playwright/test` 的 `test` 和 `expect`

```ts
import { test, expect } from '@playwright/test';

test('页面正常加载', async ({ page }) => {
  await page.goto('/zh-cn/blog/');
  await expect(page).toHaveTitle(/博客/);
});
```

### 覆盖情况

| 测试文件 | 测试内容 |
|---|---|
| `code-block.spec.ts` | 代码块渲染、复制按钮行为 |
| `docs.spec.ts` | 文档页加载、侧边栏导航 |
| `guild.spec.ts` | Guild 首页、框架卡片、筛选标签 |
| `interaction.spec.ts` | 标签点击、搜索弹窗、交互元素 |
| `layout.spec.ts` | 页头、页脚、整体页面结构 |
| `links.spec.ts` | 内部链接返回 200，无死链 |
| `locale-switch.spec.ts` | 语言切换器在 en / zh-cn 之间切换 |
| `navigation.spec.ts` | 导航链接、激活状态、移动端菜单 |
| `page-accessibility.spec.ts` | ARIA 角色、地标区域、键盘焦点 |
| `performance.spec.ts` | 图片懒加载、无阻塞渲染资源 |
| `reading-progress.spec.ts` | 进度条在滚动时出现并更新 |
| `responsive.spec.ts` | 布局在移动端 / 平板 / 桌面断点下自适应 |
| `scroll-to-top.spec.ts` | 滚动后按钮出现，点击回到顶部 |
| `search.spec.ts` | Algolia / 本地搜索弹窗打开并返回结果 |
| `seo.spec.ts` | Meta 标签、Open Graph、canonical URL、结构化数据 |
| `theme.spec.ts` | 亮色 / 暗色主题切换并持久化 |
| `toc.spec.ts` | 目录渲染、当前标题高亮 |
| `wiki-search.spec.ts` | Wiki 客户端过滤功能正常 |
| `wiki.spec.ts` | Wiki 首页和词条页正常加载 |

## 环境变量

E2E 测试支持以下环境变量：

| 变量 | 默认值 | 说明 |
|---|---|---|
| `PLAYWRIGHT_BASE_URL` | `http://localhost:4321` | 覆盖 E2E 测试的基础 URL |

## CI 环境

在 CI 环境（`CI=true`）下，E2E 测试：
- 使用 2 个 worker，失败重试 2 次
- 仅运行 `npm run preview`（不重新构建）
- 输出 GitHub Actions 注解 + HTML 报告
