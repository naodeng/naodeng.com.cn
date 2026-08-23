# Diffuse Glass Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将全站从已废止的 ASCII Glass 方向迁移为克制弥散玻璃主题，并完整支持 Light/Dark、双语、内容阅读和响应式布局。

**Architecture:** `src/styles/base.css` 提供画布、双色雾和 Strong/Medium/Weak 三级玻璃语义 token；`Base.astro` 负责全局弥散画布和主题状态；各布局与组件只消费对应级别的 token。现有路由、内容数据、Material Icons 和交互结构保持不变，ASCII 相关变量、命名、测试和文档契约全部删除。

**Tech Stack:** Astro、CSS custom properties、原生 `backdrop-filter` 与实色回退、Vitest、Playwright；不新增 UI 框架、图片资源或运行时依赖。

**Spec:** `docs/superpowers/specs/2026-08-23-diffuse-glass-theme-design.md`

## Global Constraints

- 全站不再使用 ASCII 字符、字符纹理、终端模拟或代码图形作为视觉元素。
- 保留现有中英文路由、文案、Material Icons 和链接行为。
- 使用 Strong、Medium、Weak 三级玻璃，不把所有区域做成相同透明度和圆角。
- 长文正文、代码块、表格和引用区域以可读性为优先。
- Light/Dark 均使用低饱和静态色雾，不添加持续动画。
- 移动端降低模糊半径和阴影强度，并禁止横向溢出。
- 无 `backdrop-filter` 时必须使用高不透明度实色回退。
- 不新增 UI 框架、图片、Canvas、WebGL 或运行时视觉依赖。
- 保留用户原有 `docs/temporary/seo/seo-baseline-report-v1.json` 未提交改动。

---

### Task 1: 建立弥散画布与三级玻璃 Token

**Files:**
- Modify: `src/styles/base.css`
- Modify: `src/layouts/Base.astro`
- Modify: `tests/unit/zenixDesignTokens.test.ts`

**Interfaces:**
- Produces: `--color-glass-strong`、`--color-glass-medium`、`--color-glass-weak`、`--color-glass-solid`、`--color-glass-border`、`--color-glass-highlight`、`--shadow-glass-sm|md|lg`、`--color-mist-primary|secondary`。
- Preserves: `data-theme="light|dark"`、`data-theme-preference="system|light|dark"` 与 `window.setThemePreference(preference)`。

- [ ] **Step 1: 将 token 单元测试改为弥散玻璃契约**

```ts
it("defines three diffuse-glass levels for light and dark themes", () => {
  for (const token of [
    "--color-glass-strong",
    "--color-glass-medium",
    "--color-glass-weak",
    "--color-glass-highlight",
    "--color-mist-primary",
    "--color-mist-secondary",
    "--shadow-glass-sm",
    "--shadow-glass-md",
    "--shadow-glass-lg",
  ]) expect(baseCss).toContain(token);
  expect(baseCss).not.toMatch(/--color-ascii/i);
});
```

- [ ] **Step 2: 运行测试并确认因缺少新 token、仍存在 ASCII token 而失败**

Run: `npm test -- --run unit/zenixDesignTokens.test.ts`

Expected: FAIL，错误指出 `--color-glass-strong` 不存在或 `--color-ascii` 仍存在。

- [ ] **Step 3: 在 `base.css` 实现 Light/Dark 三级玻璃与色雾 token**

```css
:root {
  --color-glass-strong: rgba(255, 255, 255, 0.82);
  --color-glass-medium: rgba(255, 255, 255, 0.68);
  --color-glass-weak: rgba(255, 255, 255, 0.9);
  --color-glass-solid: #ffffff;
  --color-glass-border: rgba(105, 112, 145, 0.2);
  --color-glass-highlight: rgba(255, 255, 255, 0.72);
  --color-mist-primary: rgba(119, 111, 255, 0.16);
  --color-mist-secondary: rgba(126, 224, 218, 0.12);
  --shadow-glass-sm: 0 8px 24px rgba(31, 38, 68, 0.08);
  --shadow-glass-md: 0 20px 54px rgba(31, 38, 68, 0.12);
  --shadow-glass-lg: 0 34px 90px rgba(31, 38, 68, 0.16);
}

:root[data-theme="dark"] {
  --color-glass-strong: rgba(18, 25, 44, 0.84);
  --color-glass-medium: rgba(18, 25, 44, 0.7);
  --color-glass-weak: rgba(18, 25, 44, 0.92);
  --color-glass-solid: #151d32;
  --color-glass-border: rgba(211, 216, 255, 0.18);
  --color-glass-highlight: rgba(255, 255, 255, 0.1);
  --color-mist-primary: rgba(103, 92, 255, 0.2);
  --color-mist-secondary: rgba(51, 176, 188, 0.12);
}
```

删除 `--color-ascii`、`--color-ascii-muted`，并将旧 `--color-glass`、`--shadow-glass` 引用临时映射到 Medium token，供后续任务逐组件迁移。

- [ ] **Step 4: 在 `Base.astro` 添加静态弥散画布**

在 `<body>` 起始位置添加只负责视觉的元素：

```astro
<div class="ambient-mist" aria-hidden="true">
  <span class="ambient-mist__primary"></span>
  <span class="ambient-mist__secondary"></span>
</div>
```

使用 `position: fixed`、`pointer-events: none`、`overflow: clip` 和负层级/明确 stacking context；色雾不添加动画。

- [ ] **Step 5: 运行 token 测试与构建**

Run: `npm test -- --run unit/zenixDesignTokens.test.ts`

Expected: 玻璃 token 测试 PASS。

Run: `npm run build`

Expected: 构建成功且不存在未定义 token 报错。

- [ ] **Step 6: 提交该任务文件**

```bash
git add src/styles/base.css src/layouts/Base.astro tests/unit/zenixDesignTokens.test.ts
git commit -m "feat: establish diffuse glass theme tokens"
```

---

### Task 2: 重构全局壳层与 Glass Hero

**Files:**
- Rename: `src/components/home/HomeAsciiHero.astro` → `src/components/home/HomeGlassHero.astro`
- Modify: `src/pages/[lang]/index.astro`
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/components/SearchModal.astro`
- Modify: `tests/e2e/specs/home.spec.ts`
- Modify: `tests/e2e/specs/header.spec.ts`

**Interfaces:**
- Consumes: Task 1 的三级玻璃 token 和主题 API。
- Produces: `<HomeGlassHero locale={locale} />`；全局 Strong/Medium Glass 壳层。

- [ ] **Step 1: 写 Hero 与全局壳层的失败 E2E 契约**

```ts
test("home uses glass hero without ASCII theme artifacts", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/zh-cn/`);
  await expect(page.locator(".glass-hero")).toHaveCount(1);
  await expect(page.locator('[class*="ascii"]')).toHaveCount(0);
  await expect(page.locator(".glass-hero__panel")).toHaveCSS("backdrop-filter", /blur/);
});
```

Header 测试读取计算样式，断言其背景不是完全透明，并包含 blur；Footer 与 SearchModal 分别断言 Medium/Strong Glass 根类存在。

- [ ] **Step 2: 运行 E2E 并确认旧组件命名导致失败**

Run: `cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 npm run test:e2e -- --grep "glass hero|glass shell"`

Expected: FAIL，`.glass-hero` 不存在或仍找到 `ascii-hero`。

- [ ] **Step 3: 重命名 Hero 并清理全部 ASCII 命名**

新组件根结构：

```astro
<section class="glass-hero home-hero" aria-labelledby="glass-hero-title">
  <div class="glass-hero__panel">
    <p class="glass-hero__eyebrow">QUALITY / SYSTEMS / PRACTICE</p>
    <h1 id="glass-hero-title">...</h1>
    <p class="glass-hero__summary">...</p>
    <div class="glass-hero__actions home-hero__ctas">...</div>
  </div>
</section>
```

Hero 使用 Medium Glass：`background: var(--color-glass-medium)`、`backdrop-filter: blur(18px) saturate(118%)`、`box-shadow: var(--shadow-glass-lg)`，无字符图层、等宽字符装饰或终端文案。

- [ ] **Step 4: 将 Header、SearchModal 和 Footer 接入玻璃层级**

- Header / SearchModal / 移动导航：Strong Glass，`blur(20px)`。
- Hero / Footer：Medium Glass，`blur(14px–18px)`。
- 使用 `@supports not (backdrop-filter: blur(1px))` 回退到 `--color-glass-solid`。
- 保留现有导航、主题按钮、语言切换、搜索和 Footer 链接 DOM。

- [ ] **Step 5: 运行目标 E2E、首页回归和构建**

Run: `cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 npm run test:e2e -- e2e/specs/home.spec.ts e2e/specs/header.spec.ts`

Expected: 所有测试 PASS。

Run: `npm run build`

Expected: 构建成功，首页导入指向 `HomeGlassHero.astro`。

- [ ] **Step 6: 提交该任务文件**

```bash
git add src/components/home/HomeGlassHero.astro src/components/home/HomeAsciiHero.astro src/pages/'[lang]'/index.astro src/components/Header.astro src/components/Footer.astro src/components/SearchModal.astro tests/e2e/specs/home.spec.ts tests/e2e/specs/header.spec.ts
git commit -m "feat: rebuild global shell around diffuse glass"
```

---

### Task 3: 将首页卡片接入 Medium/Weak Glass

**Files:**
- Modify: `src/components/home/HomeTaskNavigator.astro`
- Modify: `src/components/home/HomeCapabilityGuide.astro`
- Modify: `src/components/home/HomeExploreHub.astro`
- Modify: `src/pages/[lang]/index.astro`
- Modify: `tests/e2e/specs/home.spec.ts`
- Modify: `tests/e2e/specs/responsive.spec.ts`

**Interfaces:**
- Consumes: Task 1 的 Medium/Weak Glass token。
- Preserves: 6 个任务入口、3 个能力入口、中英文探索卡数量、Material Icons 与现有链接。

- [ ] **Step 1: 添加首页卡片层级和图标保留测试**

```ts
test("home cards use glass levels and preserve Material Icons", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/zh-cn/`);
  await expect(page.locator("[data-home-task]")).toHaveCount(6);
  await expect(page.locator("[data-home-capability]")).toHaveCount(3);
  await expect(page.locator("[data-home-task] .material-icons-sharp")).toHaveCount(6);
  await expect(page.locator("[data-home-capability] .material-icons-sharp")).toHaveCount(3);
  await expect(page.locator(".home-card--glass-medium").first()).toBeVisible();
  await expect(page.locator(".home-card--glass-weak").first()).toBeVisible();
});
```

- [ ] **Step 2: 运行测试并确认缺少玻璃层级类而失败**

Run: `cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 npm run test:e2e -- --grep "glass levels"`

Expected: FAIL，`.home-card--glass-medium` 或 `.home-card--glass-weak` 不存在。

- [ ] **Step 3: 分配首页卡片层级**

- 任务卡与能力卡：Medium Glass。
- 探索卡、文章卡和示例步骤：Weak Glass。
- hover 仅增加 `translateY(-3px)`、边框对比度和 `--shadow-glass-md`。
- 不添加字符、伪标签或彩色 glow。

- [ ] **Step 4: 添加移动端性能覆盖**

在 `max-width: 700px` 下将 Medium blur 降为 `10px`、阴影改为 `--shadow-glass-sm`；保持任务卡单列、能力卡单列和无横向溢出。

- [ ] **Step 5: 运行首页与响应式 E2E**

Run: `cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 npm run test:e2e -- e2e/specs/home.spec.ts e2e/specs/responsive.spec.ts`

Expected: 首页结构、图标数量、桌面两列、移动单列和无溢出检查全部 PASS。

- [ ] **Step 6: 提交该任务文件**

```bash
git add src/components/home/HomeTaskNavigator.astro src/components/home/HomeCapabilityGuide.astro src/components/home/HomeExploreHub.astro src/pages/'[lang]'/index.astro tests/e2e/specs/home.spec.ts tests/e2e/specs/responsive.spec.ts
git commit -m "feat: apply glass hierarchy to homepage cards"
```

---

### Task 4: 覆盖内容布局、侧栏与目录

**Files:**
- Modify: `src/layouts/Docs.astro`
- Modify: `src/components/DocsSidebar.astro`
- Modify: `src/components/TableOfContents.astro`
- Modify: `src/styles/layout.css`
- Modify: `tests/e2e/specs/docs.spec.ts`
- Modify: `tests/e2e/specs/wiki.spec.ts`
- Modify: `tests/e2e/specs/qaskills.spec.ts`
- Modify: `tests/e2e/specs/prompts.spec.ts`
- Modify: `tests/e2e/specs/guild.spec.ts`

**Interfaces:**
- Consumes: Task 1 的 Medium/Weak Glass token。
- Produces: `.glass-content`、`.glass-sidebar`、`.glass-toc` 三个布局契约；不修改内容 schema 或路由。

- [ ] **Step 1: 为主要内容路由写失败的玻璃容器测试**

```ts
for (const path of [
  "/zh-cn/docs/",
  "/zh-cn/wiki/",
  "/zh-cn/qaskills/",
  "/zh-cn/prompts/",
  "/zh-cn/guild/",
]) {
  test(`${path} uses readable glass content`, async ({ page, baseURL }) => {
    await page.goto(`${baseURL}${path}`);
    await expect(page.locator(".glass-content").first()).toBeVisible();
    const opacity = await page.locator(".glass-content").first().evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(opacity).not.toBe("rgba(0, 0, 0, 0)");
  });
}
```

- [ ] **Step 2: 运行内容路由测试并确认 `.glass-content` 缺失**

Run: `cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 npm run test:e2e -- e2e/specs/docs.spec.ts e2e/specs/wiki.spec.ts`

Expected: FAIL，主要内容容器尚未使用玻璃契约类。

- [ ] **Step 3: 将正文、侧栏和目录分配到 Weak/Medium Glass**

- `.glass-content`: Weak Glass，`blur(6px)`，高不透明度。
- `.glass-sidebar`: Medium Glass，`blur(12px)`。
- `.glass-toc`: Medium Glass，`blur(12px)`。
- 代码块、表格、引用和输入框使用 `--color-glass-solid` 或当前语义 surface，禁止多层背景穿透。

- [ ] **Step 4: 添加不支持 blur 的回退和移动端规则**

```css
@supports not (backdrop-filter: blur(1px)) {
  .glass-content,
  .glass-sidebar,
  .glass-toc { background: var(--color-glass-solid); }
}

@media (max-width: 834px) {
  .glass-content { backdrop-filter: blur(3px); }
  .glass-sidebar,
  .glass-toc { backdrop-filter: blur(8px); }
}
```

- [ ] **Step 5: 运行内容页、键盘与响应式回归**

Run: `cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 npm run test:e2e -- e2e/specs/docs.spec.ts e2e/specs/wiki.spec.ts e2e/specs/qaskills.spec.ts e2e/specs/prompts.spec.ts e2e/specs/guild.spec.ts e2e/specs/page-accessibility.spec.ts`

Expected: 所有目标路由可访问，侧栏/目录/正文可见，键盘焦点与移动布局正常。

- [ ] **Step 6: 提交该任务文件**

```bash
git add src/layouts/Docs.astro src/components/DocsSidebar.astro src/components/TableOfContents.astro src/styles/layout.css tests/e2e/specs/docs.spec.ts tests/e2e/specs/wiki.spec.ts tests/e2e/specs/qaskills.spec.ts tests/e2e/specs/prompts.spec.ts tests/e2e/specs/guild.spec.ts
git commit -m "feat: extend glass theme to content layouts"
```

---

### Task 5: 清理旧 ASCII 契约并完成全站验证

**Files:**
- Modify: `DESIGN.md`
- Delete: `docs/superpowers/specs/2026-08-23-ascii-glass-theme-design.md`
- Delete: `docs/superpowers/plans/2026-08-23-ascii-glass-theme.md`
- Modify: `tests/e2e/specs/theme.spec.ts`
- Modify: `tests/e2e/specs/accessibility-contrast.spec.ts`
- Modify: `tests/unit/zenixDesignTokens.test.ts`

**Interfaces:**
- Consumes: Tasks 1–4 的最终玻璃 token 和组件类名。
- Produces: 仅保留 Diffuse Glass 设计契约；主题相关源码与文档中不存在 ASCII 残留。

- [ ] **Step 1: 更新 `DESIGN.md` 为 Diffuse Glass North Star**

替换文件头部描述、North Star、颜色、背景、卡片、内容页面和主题章节；删除 ASCII Visual Language、字符密度、字符纹理与终端混搭内容。保留现有内容架构、字体阶梯、响应式和可访问性约束。

- [ ] **Step 2: 删除已废止的 ASCII spec 与 plan**

删除：

```text
docs/superpowers/specs/2026-08-23-ascii-glass-theme-design.md
docs/superpowers/plans/2026-08-23-ascii-glass-theme.md
```

保留本计划和 `2026-08-23-diffuse-glass-theme-design.md`。

- [ ] **Step 3: 添加源码和设计契约清理检查**

将单元测试扩展为读取主题源码及设计文件，断言：

```ts
expect(themeSources).not.toMatch(/ascii/i);
expect(themeSources).not.toMatch(/字符主视觉|字符纹理|终端模拟/);
```

检查范围只包括 `DESIGN.md`、Diffuse Glass spec、`src/styles/base.css`、`src/components/home/` 和首页入口，避免误匹配 Wiki 正文中正常出现的“终端”技术术语。

- [ ] **Step 4: 覆盖 Light/Dark 二态与首次系统偏好**

恢复并更新 `theme.spec.ts`：

- 首次无手动偏好时解析系统主题。
- 用户点击后在 Light/Dark 间切换并更新 `aria-label`。
- 刷新后保留用户选择。
- Header、Hero、Footer 和 `.glass-content` 在两种主题下均非透明且文字可见。

- [ ] **Step 5: 运行完整相关验证**

Run: `npm test`

Expected: 107 项既有单元测试及新增契约全部 PASS。

Run: `npm run build`

Expected: 1107 个页面或当前内容数量对应的全部页面构建成功。

Run: `cd tests && PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 npm run test:e2e -- e2e/specs/home.spec.ts e2e/specs/header.spec.ts e2e/specs/theme.spec.ts e2e/specs/responsive.spec.ts e2e/specs/accessibility-contrast.spec.ts e2e/specs/page-accessibility.spec.ts`

Expected: 全部目标 E2E PASS。

Run: `git diff --check`

Expected: 无空白错误。

- [ ] **Step 6: 真实浏览器视觉检查**

在 `/zh-cn/`、`/en/` 和至少一个内容详情页检查：

- Light 与 Dark。
- 桌面 1440×900 与移动 390×844。
- Header、Hero、卡片、Footer、正文、侧栏、目录和搜索。
- 无横向溢出、背景穿透、低对比文字、玻璃层叠浑浊或异常 blur。

- [ ] **Step 7: 查看最终工作区并提交任务文件**

Run: `git status --short --branch`

确认 `docs/temporary/seo/seo-baseline-report-v1.json` 仍为用户原有改动，且未加入提交。

```bash
git add DESIGN.md docs/superpowers/specs/2026-08-23-diffuse-glass-theme-design.md docs/superpowers/plans/2026-08-23-diffuse-glass-theme.md tests/e2e/specs/theme.spec.ts tests/e2e/specs/accessibility-contrast.spec.ts tests/unit/zenixDesignTokens.test.ts
git commit -m "docs: finalize diffuse glass design system"
```
