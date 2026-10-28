# 测试说明

本目录包含 [inaodeng.com](https://inaodeng.com) 的所有测试，作为独立项目管理，包含单元测试（Vitest）和两套并行的 E2E 测试：原有 Playwright 测试，以及新引入的 [TesterArmy e2e](https://github.com/tester-army/e2e) 测试。

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
  e2e-next/
    specs/                 # 新框架用例（与 Playwright 并存）
  e2e.config.ts            # 新框架运行配置
  package.json
  vitest.config.ts
  playwright.config.ts
```

## 安装依赖

```bash
cd tests
npm install
```

> 如需安装浏览器，原有测试运行 `npx playwright install chromium`，新框架运行 `npx @e2e-dev/web install chromium`。

站点支持 Node.js `22.12.0+`；新框架要求 Node.js 22 分支不低于 `22.22.3`，或使用 `24.8+`。

## 运行测试

```bash
# 运行单元测试和新旧两套 E2E
npm test

# 仅运行单元测试
npm run test:unit

# 单元测试监听模式
npm run test:unit:watch

# 仅运行原有 Playwright 测试
npm run test:e2e

# 运行新框架测试（会先构建站点）
npm run test:e2e:next

# 运行新旧两套 E2E
npm run test:e2e:all

# E2E 测试交互式 UI 模式
npm run test:e2e:ui

# 查看上次 E2E 测试报告
npm run test:e2e:report
```

> Playwright 测试会自动构建并预览站点，除非设置了 `PLAYWRIGHT_BASE_URL`。新框架使用构建后的预览站点；`test:e2e:next` 会先构建，`test:e2e:next:run` 适合 CI 或已经构建好的站点。设置 `E2E_BASE_URL`（或 `PLAYWRIGHT_BASE_URL`）可改用外部站点。

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

原有 E2E 测试使用 [Playwright](https://playwright.dev/)；迁移中的新用例使用 [TesterArmy e2e](https://github.com/tester-army/e2e)。两套测试都使用 Chromium，在评估新框架期间会同时保留并运行。当前新用例使用确定性的 locator 和断言，不需要模型服务或 API key。

### 编写 E2E 测试

原有 Playwright 测试：

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

新框架测试放在 `tests/e2e-next/specs/`，文件名以 `*.e2e.ts` 结尾；从 `@e2e-dev/web` 导入 `test`，从 `e2e` 导入 `expect`，用 `app.open('/path')` 打开页面。语义定位优先用 `screen`，CSS 定位用 `browser.locator()`。在迁移稳定且覆盖完成复核前，不删除旧 Playwright 用例。

### 迁移约定

该框架仍处于 1.0 前开发阶段，因此依赖版本保持精确锁定，升级前先检查变更。只有在替代覆盖通过复核、新套件在 CI 连续多次稳定通过后，才考虑退役 Playwright 套件；仍依赖框架未支持 API 的行为先留在旧套件，直到有经过复核的替代用例。

目前新套件已为 46 个 Playwright spec 文件各准备一个对应文件，新旧两套测试都会继续运行。旧套件的对比度检查已启用减少动态效果，确保采样稳定后的文字，而不是入场动画首帧。同源链接状态扫描从旧套件的 28 个主页面、扩展页和博客详情页，扩展到新套件的 40 个路由页面，新增双语 Wiki 首页和每种语言各 5 篇代表词条。新套件还检查首页图片加载属性、目录点击后的目标位置、双语分享入口和作者资料链接。仍依赖 Playwright 专有浏览器上下文能力的两项行为是：真实触控设备上的代码复制按钮可见性（`isMobile` / `hasTouch`），以及系统剪贴板权限和写入（新套件使用确定性 clipboard shim）。在新框架具备经复核的等价能力前，旧套件继续保留这些检查。

框架会发送匿名命令、版本、操作系统和运行摘要遥测，不发送测试名称、应用数据或凭据。本地可设置 `E2E_TELEMETRY_DISABLED=1` 关闭；CI 已默认关闭。

### 覆盖情况

| 测试文件 | 测试内容 |
|---|---|
| `code-block.spec.ts` | 代码块渲染、复制按钮行为 |
| `docs.spec.ts` | 已移除的示例页返回 404；现有内容保留共享侧栏导航 |
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
| `E2E_BASE_URL` | 未设置 | 覆盖新框架测试的基础 URL |

## CI 环境

在 CI 环境（`CI=true`）下，E2E 测试：
- 使用 2 个 worker，失败重试 2 次
- 仅运行 `npm run preview`（不重新构建）
- 安装两套运行器需要的浏览器版本
- 同时运行 Playwright 和新框架测试；新框架使用 2 个 worker、失败重试 1 次
- 禁用新框架的 CI 遥测
