# Apple Design 探索改版 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 `explore-apple-design` 分支用 Apple DESIGN.md 语言重做全局 token、Header/Footer 与首页（Hero + utility card 网格），内容页只继承 token。

**Architecture:** Token 先行：先把 `src/styles/base.css` 换成浅色主导的 Apple token（Action Blue 交互、橙仅品牌点缀、强制浅色），再改 Header/Footer 视觉，最后把 `src/pages/[lang]/index.astro` 收敛为 Hero + 探索卡片格 + 最新文章。不重排 Article/Docs/Wiki 阅读版式。

**Tech Stack:** Astro、CSS custom properties、现有 i18n/`src/consts.ts`、Vitest（token 断言）、可选 Playwright（首页结构）

**Spec:** `docs/superpowers/specs/2026-07-31-apple-design-exploration-design.md`

---

## File map

| File | Responsibility |
| --- | --- |
| `src/styles/base.css` | 全局 token、正文字号、链接色、去掉点阵/装饰渐变、强制浅色 |
| `src/styles/layout.css` | 主区留白微调（如顶栏高度变化后的 margin） |
| `src/components/Header.astro` | 黑顶栏 44px、白字导航、橙点品牌、搜索/语言 utility；IA 不变 |
| `src/components/Footer.astro` | 羊皮纸页脚、多列链接视觉；链接集合不变 |
| `src/consts.ts` | 首页 Hero / Explore 区双语文案常量 |
| `src/pages/[lang]/index.astro` | 首页结构替换为 Hero + 卡片 + 最新文章 |
| `tests/unit/appleDesignTokens.test.ts` | 断言 `base.css` 含关键 token 与禁止项 |
| `tests/e2e/specs/apple-home.spec.ts` | 断言中/英首页关键结构节点可见 |

---

### Task 1: Token 契约测试（红）

**Files:**
- Create: `tests/unit/appleDesignTokens.test.ts`
- Modify later: `src/styles/base.css`

- [x] **Step 1: 写失败的 token 契约测试**

```ts
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Vitest cwd 为 tests/（与现有 unit 测试一致）
const baseCss = readFileSync(
  resolve(process.cwd(), "../src/styles/base.css"),
  "utf8",
);

describe("apple design tokens in base.css", () => {
  it("uses Action Blue as theme / interactive color", () => {
    expect(baseCss).toMatch(/--color-theme:\s*#0066cc/i);
  });

  it("keeps brand orange only as a dedicated mark token", () => {
    expect(baseCss).toMatch(/--color-brand-mark:\s*#ef4d1a/i);
  });

  it("defines parchment canvas", () => {
    expect(baseCss).toMatch(/--color-base:\s*#f5f5f7/i);
  });

  it("does not use prefers-color-scheme dark for canvas tokens", () => {
    expect(baseCss).not.toMatch(
      /prefers-color-scheme:\s*dark[\s\S]{0,200}--color-base:/,
    );
  });

  it("removes dotted page background", () => {
    expect(baseCss).not.toMatch(/background-size:\s*16px\s+16px/);
  });
});
```

- [x] **Step 2: 跑测试确认失败**

Run：

```bash
cd tests && npm run test:unit -- appleDesignTokens
```

Expected: FAIL（当前 `--color-theme` 仍是 `#ef4d1a`，且仍有 dark media / 点阵底）

- [x] **Step 3: Commit（仅测试）**

```bash
git add tests/unit/appleDesignTokens.test.ts
git commit -m "$(cat <<'EOF'
test: add apple design token contract for base.css

EOF
)"
```

---

### Task 2: 落地 Apple tokens（绿）

**Files:**
- Modify: `src/styles/base.css`
- Modify: `src/styles/layout.css`（仅当顶栏高度变化需要）

- [x] **Step 1: 替换 `:root` 色板与强制浅色**

在 `src/styles/base.css` 中：

1. 删除（或不再使用）`@media (prefers-color-scheme: dark)` / `light` 两套画布切换。
2. 在单一 `:root` 中设置（保留现有派生变量名，避免全站大面积改 class）：

```css
:root {
  --color-theme: #0066cc;
  --color-theme-focus: #0071e3;
  --color-theme-on-dark: #2997ff;
  --color-brand-mark: #ef4d1a;
  --color-accent: #0066cc;
  --color-base: #f5f5f7;
  --color-canvas: #ffffff;
  --color-main: #1d1d1f;
  --color-surface: #ffffff;
  --color-border: #e0e0e0;
  --color-caution: #a80a00;

  --color-warn: #f59e0b;
  --color-text-primary: var(--color-main);
  --color-text-secondary: #333333;
  --color-text-tertiary: #7a7a7a;
  --color-surface-muted: #f5f5f7;
  --color-surface-elevated: #ffffff;
  --color-border-strong: rgba(0, 0, 0, 0.08);
  --color-theme-soft: color-mix(in srgb, var(--color-theme) 10%, transparent);
  --color-theme-soft-hover: color-mix(in srgb, var(--color-theme) 16%, transparent);

  --glow-theme: transparent;
  --gradient-hero: none;

  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
  --shadow-product: rgba(0, 0, 0, 0.22) 3px 5px 30px 0;

  --text-xs: 0.75rem;   /* 12px */
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1.0625rem; /* 17px */
  --text-lg: 1.3125rem; /* 21px */
  --text-xl: 2.5rem;    /* 40px display */

  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Inter", "Noto Sans", sans-serif;

  --radius-sm: 8px;
  --radius-md: 11px;
  --radius-lg: 18px;
  --radius-xl: 9999px;

  /* 其余 spacing / density 可保留现有 --sp-*，section 可增： */
  --spacing-section: 80px;

  color: var(--color-main);
  background-color: var(--color-base);
  accent-color: var(--color-theme);
  background-image: none;
  line-height: 1.47;
  font-weight: 400;
  font-size: var(--text-base);
  font-family: var(--font-sans);
}
```

3. 更新 `p a` / focus outline 继续用 `var(--color-theme)`（现已为蓝）。
4. `.cta-button`：改为 pill（`border-radius: 9999px`），去掉 `box-shadow`，active 用 `transform: scale(0.95)`，hover 不要 `translateY` + 阴影。
5. `.ui-card`：`border: 1px solid var(--color-border)`，`box-shadow: none`，`border-radius: var(--radius-lg)`。

- [x] **Step 2: 重跑 token 测试**

```bash
cd tests && npm run test:unit -- appleDesignTokens
```

Expected: PASS

- [x] **Step 3: Commit**

```bash
git add src/styles/base.css src/styles/layout.css
git commit -m "$(cat <<'EOF'
feat: adopt apple light tokens in base.css

EOF
)"
```

---

### Task 3: Header 黑顶栏

**Files:**
- Modify: `src/components/Header.astro`（markup 微调 + `<style>` 重写视觉）

- [x] **Step 1: 品牌点缀 markup**

在品牌标题旁加入橙点（不改 IA）。示例：

```astro
<a href={getRelativeLocaleUrl(locale, "/")} class="site-brand-link">
  <span class="brand-mark" aria-hidden="true"></span>
  <!-- 保留现有 logo / cobrand / title 结构，可缩小 logo 或不显示 slogan 于顶栏 -->
  ...
</a>
```

```css
.brand-mark {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-brand-mark);
  margin-inline-end: 8px;
  vertical-align: middle;
}
```

- [x] **Step 2: 顶栏视觉对齐 Apple global-nav**

在 `Header.astro` 的 `<style>` 中将 `.l-header` 改为：

```css
.l-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 44px;
  background: #000;
  color: #fff;
  border: none;
}
.l-header::after {
  display: none; /* 去掉旧装饰线/渐变 */
}
.header-shell {
  max-inline-size: 1400px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  margin-inline: auto;
}
.site-nav > ul > li > a,
.nav-group-trigger {
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.12px;
  min-height: 44px;
}
.site-nav > ul > li > a.active,
.nav-group-trigger.active {
  color: #fff;
  opacity: 1;
}
.btn-icon,
.nav-tool {
  color: #fff;
}
```

保留现有 `details` 子菜单逻辑；子菜单面板可用深色/近黑背景 + 白字，避免浅色弹出破坏黑顶栏。  
`@media (width < 834px)`：保持现有折叠行为，确保汉堡/搜索仍可用（若当前断点是其他值，统一到 834px 或保留现有断点但保证窄屏可点）。

- [x] **Step 3: 本地目视检查**

```bash
npm run dev
```

打开 `/zh-cn/` 与 `/en/`：顶栏应为黑底白字，品牌旁有橙点，搜索与语言仍可用。

- [x] **Step 4: Commit**

```bash
git add src/components/Header.astro
git commit -m "$(cat <<'EOF'
feat: restyle header as apple-like black global nav

EOF
)"
```

---

### Task 4: Footer 羊皮纸

**Files:**
- Modify: `src/components/Footer.astro`

- [x] **Step 1: 更新 footer 样式**

在 `Footer.astro` 的 `<style>` 中对齐：

```css
.l-footer {
  background: #f5f5f7;
  color: #333333;
  padding-block: 64px;
  margin-block-start: 0;
}
.footer-nav a,
.social-links a {
  color: #333333;
  font-size: 14px;
  line-height: 2.2;
}
.footer-nav a:hover,
.footer-nav a:focus-visible {
  color: var(--color-theme);
}
```

不删链接、社交、版权节点；只改视觉与间距。

- [x] **Step 2: 目视 `/zh-cn/` 页脚**

确认羊皮纸底、链接可读、无重阴影。

- [x] **Step 3: Commit**

```bash
git add src/components/Footer.astro
git commit -m "$(cat <<'EOF'
feat: restyle footer as apple parchment utility footer

EOF
)"
```

---

### Task 5: 首页文案常量

**Files:**
- Modify: `src/consts.ts`

- [x] **Step 1: 新增首页 Explore / CTA 常量**

在 `src/consts.ts` 中追加（可放在现有 `HOME_*` 附近）：

```ts
export const HOME_HERO_TITLE: Multilingual = {
  en: "Make complex knowledge clear",
  "zh-cn": "把复杂知识讲清楚",
};

export const HOME_HERO_SUBTITLE: Multilingual = {
  en: "Testing wiki, essays, prompts, and workflows — a readable knowledge base.",
  "zh-cn": "测试百科、实践文章、提示词与工作流——一个可读、可引用的知识库。",
};

export const HOME_CTA_START: Multilingual = {
  en: "Start reading",
  "zh-cn": "开始阅读",
};

export const HOME_CTA_WIKI: Multilingual = {
  en: "Browse wiki",
  "zh-cn": "浏览百科",
};

export const HOME_EXPLORE_TITLE: Multilingual = {
  en: "Explore",
  "zh-cn": "探索内容",
};

export const HOME_EXPLORE_SUBTITLE: Multilingual = {
  en: "Enter by topic instead of one overloaded page.",
  "zh-cn": "按主题进入，而不是一次塞满整页列表",
};
```

Hero 主 CTA 链到博客列表（`/blog`）；次 CTA：中文链 `/wiki`，英文链 AI Wiki 或既有 wiki 策略（与 Header 外链规则一致：英文 QA Wiki 若仍外链 ray.run，则次 CTA 用 `/AIWiki`）。

- [x] **Step 2: Commit**

```bash
git add src/consts.ts
git commit -m "$(cat <<'EOF'
feat: add homepage hero and explore i18n copy

EOF
)"
```

---

### Task 6: 首页结构（Hero + 卡片 + 最新文章）

**Files:**
- Modify: `src/pages/[lang]/index.astro`
- Create（可选，若样式过长）: 不强制拆文件；样式可留在同文件 `<style>`，与现有首页模式一致

- [x] **Step 1: 写失败的 e2e（结构契约）**

Create `tests/e2e/specs/apple-home.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

test.describe("apple homepage exploration", () => {
  for (const lang of ["zh-cn", "en"] as const) {
    test(`${lang} home shows hero, explore grid, latest posts`, async ({
      page,
      baseURL,
    }) => {
      await page.goto(`${baseURL}/${lang}/`);
      await expect(page.locator(".home-apple-hero")).toBeVisible();
      await expect(page.locator(".home-explore-grid")).toBeVisible();
      await expect(page.locator(".home-latest-posts")).toBeVisible();
      await expect(page.locator(".home-explore-card")).toHaveCount(6);
    });
  }
});
```

- [x] **Step 2: 跑 e2e 确认失败**

```bash
cd tests && npx playwright test e2e/specs/apple-home.spec.ts
```

Expected: FAIL（找不到新 class）

- [x] **Step 3: 替换首页主体 markup**

保留 frontmatter 数据获取中「最新文章」逻辑（`latestPosts`）。可删除/不再渲染：

- `.home-hero-switcher` 整块
- 下方 prompts/wiki/guild 等大段 showcase（`prompts-showcase`、GuildShowcase 等）

在 Layout 默认 slot 内改为：

```astro
---
// import 新增：HOME_HERO_TITLE, HOME_HERO_SUBTITLE, HOME_CTA_START, HOME_CTA_WIKI,
// HOME_EXPLORE_TITLE, HOME_EXPLORE_SUBTITLE, HOME_LATEST_POSTS, HOME_VIEW_ALL
const exploreCards = [
  {
    key: "wiki",
    href: locale === "zh-cn" ? getRelativeLocaleUrl(locale, "/wiki") : getRelativeLocaleUrl(locale, "/AIWiki"),
    title: locale === "zh-cn" ? "QA Wiki" : "AI Wiki",
    desc: locale === "zh-cn" ? "系统化测试百科" : "AI testing knowledge",
  },
  {
    key: "aiwiki",
    href: getRelativeLocaleUrl(locale, "/AIWiki"),
    title: "AI Wiki",
    desc: locale === "zh-cn" ? "AI 测试与工程知识" : "AI testing & engineering",
  },
  {
    key: "guild",
    href: getRelativeLocaleUrl(locale, "/guild/"),
    title: "Guild",
    desc: locale === "zh-cn" ? "框架与实践指南" : "Guides and playbooks",
  },
  {
    key: "prompts",
    href: getRelativeLocaleUrl(locale, "/prompts/"),
    title: "Prompts",
    desc: locale === "zh-cn" ? "测试提示词合集" : "Testing prompts",
  },
  {
    key: "qaskills",
    href: getRelativeLocaleUrl(locale, "/qaskills/"),
    title: "QA Skills",
    desc: locale === "zh-cn" ? "可复用技能卡片" : "Reusable QA skills",
  },
  {
    key: "projects",
    href: getRelativeLocaleUrl(locale, "/projects/"),
    title: locale === "zh-cn" ? "Projects" : "Projects",
    desc: locale === "zh-cn" ? "开源与作品" : "Open source & work",
  },
];
// 中文首页：第一张用 QA Wiki；若与第二张 AI Wiki 重复 title 可接受，或中文第一张标题改为「测试百科」
---

<section class="home-apple-hero">
  <h1 class="home-apple-hero__title">{t(HOME_HERO_TITLE)}</h1>
  <p class="home-apple-hero__subtitle">{t(HOME_HERO_SUBTITLE)}</p>
  <div class="home-apple-hero__ctas">
    <a class="pill-cta pill-cta--primary" href={getRelativeLocaleUrl(locale, "/blog")}>{t(HOME_CTA_START)}</a>
    <a
      class="pill-cta pill-cta--ghost"
      href={locale === "zh-cn" ? getRelativeLocaleUrl(locale, "/wiki") : getRelativeLocaleUrl(locale, "/AIWiki")}
    >{t(HOME_CTA_WIKI)}</a>
  </div>
</section>

<section class="home-explore" aria-labelledby="home-explore-title">
  <h2 id="home-explore-title" class="home-explore__title">{t(HOME_EXPLORE_TITLE)}</h2>
  <p class="home-explore__subtitle">{t(HOME_EXPLORE_SUBTITLE)}</p>
  <ul class="home-explore-grid" role="list">
    {exploreCards.map((card) => (
      <li>
        <a class="home-explore-card" href={card.href}>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
          <span class="home-explore-card__more">{locale === "zh-cn" ? "了解更多" : "Learn more"}</span>
        </a>
      </li>
    ))}
  </ul>
</section>

<section class="home-latest-posts" aria-labelledby="home-latest-title">
  <h2 id="home-latest-title">{t(HOME_LATEST_POSTS)}</h2>
  <ul class="home-latest-list" role="list">
    {latestPosts.slice(0, 6).map((post) => {
      const slug = post.id.replace(`${locale}/`, "").replace(/\.mdx?$/, "");
      return (
        <li>
          <a href={getRelativeLocaleUrl(locale, `/blog/${slug}`)}>
            <span>{post.data.title}</span>
            <time datetime={post.data.date.toISOString()}>
              {post.data.date.toISOString().slice(0, 10)}
            </time>
          </a>
        </li>
      );
    })}
  </ul>
  <p class="home-latest-more">
    <a class="pill-cta pill-cta--ghost" href={getRelativeLocaleUrl(locale, "/blog")}>{t(HOME_VIEW_ALL)}</a>
  </p>
</section>
```

注意：博客 URL 生成必须复用该文件现有 slug/path 写法（不要自创路径）；以上 `slug` 逻辑若与现有不一致，以文件内已有 `postUrl` 计算为准。

广告组件（`GoogleAd` / `TrackingEvents`）：保留在 Layout 或页底，不要插进 Hero 第一屏中央。

- [x] **Step 4: 首页样式**

在同文件 `<style>` 中（可删旧 switcher/showcase 大段 CSS）加入：

```css
.home-apple-hero {
  background: #fff;
  text-align: center;
  padding: 80px 24px 56px;
}
.home-apple-hero__title {
  margin: 0;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -0.4px;
  line-height: 1.08;
  color: #1d1d1f;
}
.home-apple-hero__subtitle {
  margin: 14px auto 0;
  max-width: 28em;
  font-size: 21px;
  line-height: 1.3;
  color: #1d1d1f;
}
.home-apple-hero__ctas {
  margin-top: 22px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.pill-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding: 11px 22px;
  font-size: 17px;
  text-decoration: none;
  min-height: 44px;
}
.pill-cta--primary {
  background: var(--color-theme);
  color: #fff;
}
.pill-cta--ghost {
  color: var(--color-theme);
  border: 1px solid var(--color-theme);
  background: transparent;
}
.pill-cta:active {
  transform: scale(0.95);
}
.home-explore {
  background: #f5f5f7;
  padding: 48px 24px 56px;
  text-align: center;
}
.home-explore-grid {
  list-style: none;
  margin: 28px auto 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  max-width: 900px;
  text-align: start;
}
.home-explore-card {
  display: block;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 18px;
  padding: 24px;
  min-height: 140px;
  text-decoration: none;
  color: inherit;
  box-shadow: none;
}
.home-explore-card h3 {
  margin: 0 0 6px;
  font-size: 17px;
  font-weight: 600;
}
.home-explore-card p {
  margin: 0 0 14px;
  font-size: 14px;
  color: #7a7a7a;
}
.home-explore-card__more {
  color: var(--color-theme);
  font-size: 14px;
}
.home-latest-posts {
  background: #fff;
  padding: 48px 24px 56px;
  max-width: 720px;
  margin-inline: auto;
}
.home-latest-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.home-latest-list a {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid #f0f0f0;
  text-decoration: none;
  color: #1d1d1f;
  font-size: 17px;
}
.home-latest-list time {
  color: #7a7a7a;
  font-size: 14px;
  white-space: nowrap;
}
@media (width < 720px) {
  .home-apple-hero__title { font-size: 34px; }
  .home-explore-grid { grid-template-columns: 1fr; }
}
```

中文首页 6 张卡避免两张都叫「AI Wiki」：zh-cn 第一张 title 用「测试百科」或「QA Wiki」，第二张「AI Wiki」。

- [x] **Step 5: 重跑 e2e**

```bash
cd tests && npx playwright test e2e/specs/apple-home.spec.ts
```

Expected: PASS（需预览服务或配置里的 webServer；沿用现有 e2e 启动方式）

- [x] **Step 6: Commit**

```bash
git add src/pages/[lang]/index.astro src/consts.ts tests/e2e/specs/apple-home.spec.ts
git commit -m "$(cat <<'EOF'
feat: rebuild homepage as apple hero and explore grid

EOF
)"
```

---

### Task 7: 内容页继承扫尾 + 构建验证

**Files:**
- Modify only if blocked: 个别组件里写死的橙色/深色背景（搜索时用 `rg "#ef4d1a|prefers-color-scheme: dark|gradient-hero"`）
- Do not: 重排 Article/Docs/Wiki 布局

- [x] **Step 1: 搜索残留硬编码**

```bash
rg -n "#ef4d1a|gradient-hero|background-size:\\s*16px" src/components src/layouts src/styles src/pages
```

对阻塞可读性的硬编码（例如按钮仍强制橙底且对比失败）做最小替换为 `var(--color-theme)` 或 `var(--color-brand-mark)`（仅品牌）。不要批量「美化」内容页。

- [x] **Step 2: 构建**

```bash
npm run build
```

Expected: 成功退出（exit 0）

- [x] **Step 3: 手动抽样清单**

- `/zh-cn/`、`/en/`：Hero、6 卡、最新文章、黑顶栏、羊皮纸页脚  
- 一篇博客、一页中文 Wiki：可打开、链接为蓝、无明显遮挡  
- 窄屏：顶栏可导航、卡片单列、CTA ≥44px

- [x] **Step 4: 跑相关自动化**

```bash
cd tests && npm run test:unit -- appleDesignTokens
cd tests && npx playwright test e2e/specs/apple-home.spec.ts e2e/specs/layout.spec.ts
```

Expected: PASS（`layout.spec.ts` 仅断言 `header` 可见，应仍绿）

- [x] **Step 5: Commit 扫尾（若有文件变更）**

```bash
git add -u
git commit -m "$(cat <<'EOF'
fix: mop up blocking hard-coded theme leftovers for apple exploration

EOF
)"
```

---

## Spec coverage checklist

| Spec 项 | Task |
| --- | --- |
| Token 色板 / 强制浅色 / 去点阵 | 1–2 |
| 橙仅品牌点缀 | 2–3 |
| Header 黑顶栏 | 3 |
| Footer 羊皮纸 | 4 |
| Hero + utility card + 最新文章 | 5–6 |
| 内容页只继承 | 7（明确不重排） |
| build + 中英 + 窄屏验证 | 7 |
| 不改部署/域名 | 全计划未触碰 |

## Self-review notes

- 无 TBD 步骤；博客 URL 明确要求复用现有 slug 逻辑  
- Vitest cwd 锁定为 `tests/`，token 测试读 `../src/styles/base.css`  
- 首页中文 Explore 第一张避免与 AI Wiki 文案撞车  
- Commit 步骤按 skill 写入；若用户要求暂不提交，执行时可跳过 commit step，但须在汇报中说明

---

**Plan complete and saved to `docs/superpowers/plans/2026-07-31-apple-design-exploration.md`. Two execution options:**

**1. Subagent-Driven (recommended)** — 每个 Task 派一个新子 agent，Task 间做审查，迭代快  

**2. Inline Execution** — 本会话按 executing-plans 逐项执行，带检查点  

**Which approach?**
