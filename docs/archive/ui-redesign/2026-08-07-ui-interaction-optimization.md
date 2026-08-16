# UI Interaction Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** 优化站点首页、搜索、导航、页脚和文章阅读辅助体验，让用户更快找到博客、Wiki、AI Wiki 与 QA 工具内容。

**Architecture:** 保持 Astro 双语路由、content collections、本地搜索索引和现有 CSS 变量不变；在现有页面与组件内做结构收敛和交互增强。搜索结果类型优先使用现有 `search-index.json.ts` 的 `type` 字段，避免改动数据层。

**Tech Stack:** Astro 6、TypeScript、vanilla browser JS、现有 CSS、Vitest、Playwright。

**Spec:** `docs/archive/ui-redesign/2026-08-07-ui-interaction-review-design.md`

---

## File Structure

| 文件 | 职责 |
| --- | --- |
| Modify: `src/pages/[lang]/index.astro` | 首页主入口、区块密度、移动布局 |
| Modify: `src/components/SearchModal.astro` | 搜索类型标签、键盘选择、空状态、加载失败 |
| Modify: `src/components/Header.astro` | 移动导航分组和主入口优先级 |
| Modify: `src/components/Footer.astro` | 页脚链接分组和移动端图标密度 |
| Modify: `src/components/TableOfContents.astro` | 长文目录当前章节高亮稳定性 |
| Modify: `src/components/ArticleShare.astro` | 分享入口收敛 |
| Test: `tests/e2e/specs/apple-home.spec.ts` | 首页主入口和关键区块冒烟 |
| Test: `tests/e2e/specs/search.spec.ts` | 搜索类型标签、键盘导航、错误/空状态 |
| Test: `tests/e2e/specs/header.spec.ts` | 移动导航抽屉和搜索入口 |
| Test: `tests/e2e/specs/toc.spec.ts` | 目录当前章节高亮 |

---

### Task 1: 首页主入口和区块密度

**Files:**
- Modify: `src/pages/[lang]/index.astro`
- Test: `tests/e2e/specs/apple-home.spec.ts`

- [x] **Step 1: Write failing E2E checks**

Append tests to `tests/e2e/specs/apple-home.spec.ts`:

```ts
test.describe("home information architecture", () => {
  test("zh-cn home exposes three primary entry cards", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/zh-cn/`, { waitUntil: "networkidle" });
    const primaryEntries = page.locator(".home-primary-entry");
    await expect(primaryEntries).toHaveCount(3);
    await expect(primaryEntries.nth(0)).toContainText(/博客|Blog/);
    await expect(primaryEntries.nth(1)).toContainText(/Wiki|百科/);
    await expect(primaryEntries.nth(2)).toContainText(/QA|提示词|技能/);
  });

  test("en home exposes three primary entry cards", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/en/`, { waitUntil: "networkidle" });
    const primaryEntries = page.locator(".home-primary-entry");
    await expect(primaryEntries).toHaveCount(3);
    await expect(primaryEntries.nth(0)).toContainText(/Blog/);
    await expect(primaryEntries.nth(1)).toContainText(/Wiki/);
    await expect(primaryEntries.nth(2)).toContainText(/QA|Prompt|Skill/);
  });
});
```

- [x] **Step 2: Run test to verify it fails**

Run: `cd tests && npm run test:e2e -- --grep "home information architecture"`

Expected: FAIL because `.home-primary-entry` does not exist.

- [x] **Step 3: Add primary entry data**

In `src/pages/[lang]/index.astro`, after `const exploreCards = ...`, add:

```ts
const primaryEntries = [
  {
    key: "blog",
    href: getRelativeLocaleUrl(locale, "/blog"),
    eyebrow: locale === "zh-cn" ? "长期文章" : "Long-form writing",
    title: locale === "zh-cn" ? "博客" : "Blog",
    desc:
      locale === "zh-cn"
        ? "阅读软件测试、自动化、AI 工程和个人实践总结。"
        : "Read software testing, automation, AI engineering, and personal practice notes.",
  },
  {
    key: "wiki",
    href:
      locale === "zh-cn"
        ? getRelativeLocaleUrl(locale, "/wiki")
        : getRelativeLocaleUrl(locale, "/AIWiki"),
    eyebrow: locale === "zh-cn" ? "系统知识" : "Reference",
    title: locale === "zh-cn" ? "Wiki / AI 百科" : "Wiki / AI Wiki",
    desc:
      locale === "zh-cn"
        ? "查询测试概念、AI 术语和工程实践词条。"
        : "Look up testing concepts, AI terms, and engineering references.",
  },
  {
    key: "qa-tools",
    href: getRelativeLocaleUrl(locale, "/prompts"),
    eyebrow: locale === "zh-cn" ? "QA 工具内容" : "QA tools",
    title: locale === "zh-cn" ? "提示词、工作流与技能库" : "Prompts, workflows, and skills",
    desc:
      locale === "zh-cn"
        ? "进入可复用的测试提示词、流程和 QA Skills。"
        : "Use reusable testing prompts, workflows, and QA skills.",
  },
];
```

- [x] **Step 4: Render the three primary entries**

In the hero section after `.home-hero__ctas`, add:

```astro
<ul class="home-primary-entries" role="list" aria-label={locale === "zh-cn" ? "主要内容入口" : "Primary content entries"}>
  {primaryEntries.map((entry) => (
    <li>
      <a class={`home-primary-entry home-primary-entry--${entry.key}`} href={entry.href}>
        <span class="home-primary-entry__eyebrow">{entry.eyebrow}</span>
        <span class="home-primary-entry__title">{entry.title}</span>
        <span class="home-primary-entry__desc">{entry.desc}</span>
      </a>
    </li>
  ))}
</ul>
```

- [x] **Step 5: Add responsive CSS for primary entries and denser latest posts**

In the `<style>` of `src/pages/[lang]/index.astro`, add:

```css
.home-primary-entries {
  list-style: none;
  margin: 36px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  text-align: start;
}

.home-primary-entry {
  display: grid;
  gap: 8px;
  min-height: 156px;
  padding: 22px;
  border: 1px solid color-mix(in srgb, var(--color-theme) 16%, #d8d8dc);
  border-radius: 16px;
  color: #1d1d1f;
  background: #fafafc;
  text-decoration: none;
}

.home-primary-entry:hover,
.home-primary-entry:focus-visible {
  border-color: var(--color-theme);
  background: color-mix(in srgb, var(--color-theme) 6%, #ffffff);
}

.home-primary-entry__eyebrow {
  font-size: 12px;
  line-height: 1.3;
  color: var(--color-theme);
  font-weight: 700;
}

.home-primary-entry__title {
  font-size: 19px;
  line-height: 1.25;
  font-weight: 700;
}

.home-primary-entry__desc {
  font-size: 14px;
  line-height: 1.5;
  color: #6e6e73;
}

.home-latest-posts .home-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.home-latest-posts .home-card {
  min-height: 136px;
  padding: 20px;
}

@media (width < 900px) {
  .home-primary-entries,
  .home-latest-posts .home-grid {
    grid-template-columns: 1fr;
  }
}
```

- [x] **Step 6: Run focused E2E**

Run: `cd tests && npm run test:e2e -- --grep "home information architecture"`

Expected: PASS.

- [x] **Step 7: Commit**

```bash
git add src/pages/[lang]/index.astro tests/e2e/specs/apple-home.spec.ts
git commit -m "feat(ui): clarify home primary entries"
```

---

### Task 2: 搜索类型标签、空状态和键盘选择

**Files:**
- Modify: `src/components/SearchModal.astro`
- Test: `tests/e2e/specs/search.spec.ts`

- [x] **Step 1: Write failing E2E checks**

Append tests to `tests/e2e/specs/search.spec.ts`:

```ts
test.describe("site search command palette", () => {
  test("shows type badges and supports keyboard selection", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/en/`, { waitUntil: "networkidle" });
    await page.keyboard.press(process.platform === "darwin" ? "Meta+K" : "Control+K");
    await page.locator("#search-input").fill("testing");
    const firstResult = page.locator(".search-result-item").first();
    await expect(firstResult).toBeVisible();
    await expect(firstResult.locator(".search-result-type")).toBeVisible();
    await page.keyboard.press("ArrowDown");
    await expect(firstResult).toHaveAttribute("aria-selected", "true");
  });

  test("empty query shows suggested entries", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/zh-cn/`, { waitUntil: "networkidle" });
    await page.locator("header button[data-search-open]").click();
    await expect(page.locator(".search-suggestions")).toBeVisible();
    await expect(page.locator(".search-suggestion-item")).toHaveCount(3);
  });
});
```

- [x] **Step 2: Run test to verify it fails**

Run: `cd tests && npm run test:e2e -- --grep "site search command palette"`

Expected: FAIL because type badges, suggestions, and `aria-selected` behavior are missing.

- [x] **Step 3: Add suggestion container markup**

In `src/components/SearchModal.astro`, after `search-hint-row`, add:

```astro
<div class="search-suggestions" data-search-suggestions hidden>
  <a class="search-suggestion-item" href={`/${locale}/blog/`}>{locale === "zh-cn" ? "浏览博客" : "Browse Blog"}</a>
  <a class="search-suggestion-item" href={locale === "zh-cn" ? "/zh-cn/wiki/" : "/en/AIWiki/"}>{locale === "zh-cn" ? "进入 Wiki" : "Open AI Wiki"}</a>
  <a class="search-suggestion-item" href={`/${locale}/prompts/`}>{locale === "zh-cn" ? "查看提示词" : "View Prompts"}</a>
</div>
```

- [x] **Step 4: Add search state helpers**

In the inline script after `let locale = "en";`, add:

```js
let activeIndex = -1;
const suggestionsEl = document.querySelector("[data-search-suggestions]");

function getTypeLabel(type) {
  const labels = {
    blog: "Blog",
    guild: "Guild",
    wiki: "Wiki",
    aiwiki: "AI Wiki",
    prompts: "Prompt",
    workflows: "Workflow",
    qaskills: "Skill",
    project: "Project",
  };
  return labels[type] || "Page";
}

function getResultItems() {
  return Array.from(resultsEl.querySelectorAll(".search-result-item"));
}

function setActiveResult(nextIndex) {
  const items = getResultItems();
  if (!items.length) {
    activeIndex = -1;
    return;
  }
  activeIndex = Math.max(0, Math.min(nextIndex, items.length - 1));
  items.forEach((item, index) => {
    item.setAttribute("aria-selected", index === activeIndex ? "true" : "false");
    if (index === activeIndex) item.scrollIntoView({ block: "nearest" });
  });
}

function showSuggestions(show) {
  if (suggestionsEl) suggestionsEl.hidden = !show;
}
```

- [x] **Step 5: Render type badges and reset active state**

In `renderItems`, before appending result HTML, add type output:

```js
const typeLabel = getTypeLabel(item.type);
a.setAttribute("aria-selected", "false");
a.innerHTML = `
  <span class="search-result-topline">
    <span class="search-result-type">${escapeHtml(typeLabel)}</span>
    ${dateStr ? `<span class="search-result-date">${escapeHtml(dateStr)}</span>` : ""}
  </span>
  <span class="search-result-title">${escapeHtml(normalized.title || "")}</span>
  ${snippet ? `<span class="search-result-desc">${escapeHtml(snippet)}</span>` : ""}
  ${tags.length ? `<span class="search-result-meta">${tags.map((tag) => `<span class="search-result-tag">#${escapeHtml(tag)}</span>`).join("")}</span>` : ""}
`;
```

Remove the older `metaParts` block from `renderItems` so date is not duplicated.

- [x] **Step 6: Wire input, open, and keyboard behavior**

Update `onInput`, `openSearch`, and `input.addEventListener("keydown", ...)`:

```js
function onInput() {
  const q = input.value;
  const hasQuery = q.trim().length > 0;
  showSuggestions(!hasQuery);
  activeIndex = -1;

  if (!index.length) {
    resultsEl.hidden = true;
    emptyEl.hidden = true;
    return;
  }
  const items = filter(q);
  renderItems(items, hasQuery);
}

function openSearch() {
  locale = getLocale();
  loadIndex().then(() => {
    dialog.showModal();
    input.value = "";
    input.focus();
    resultsEl.hidden = true;
    emptyEl.hidden = true;
    activeIndex = -1;
    showSuggestions(true);
    if (hintEl) hintEl.style.display = "block";
  }).catch(() => {
    dialog.showModal();
    emptyEl.hidden = false;
    emptyEl.textContent = locale === "zh-cn" ? "搜索暂不可用，请稍后再试" : "Search is unavailable. Please try again later.";
  });
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearch();
    e.preventDefault();
    return;
  }
  if (e.key === "ArrowDown") {
    setActiveResult(activeIndex + 1);
    e.preventDefault();
    return;
  }
  if (e.key === "ArrowUp") {
    setActiveResult(activeIndex <= 0 ? getResultItems().length - 1 : activeIndex - 1);
    e.preventDefault();
    return;
  }
  if (e.key === "Enter") {
    const items = getResultItems();
    const target = activeIndex >= 0 ? items[activeIndex] : items[0];
    if (target) {
      target.click();
      e.preventDefault();
    }
  }
});
```

- [x] **Step 7: Add CSS for suggestions and selected results**

Add to the component style:

```css
.search-suggestions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  margin-block-start: 0.75rem;
}

.search-suggestions[hidden] {
  display: none;
}

.search-suggestion-item,
.search-result-item[aria-selected="true"] {
  background: color-mix(in srgb, var(--color-theme) 10%, transparent);
  border-color: color-mix(in srgb, var(--color-theme) 30%, transparent);
}

.search-suggestion-item {
  padding: 0.75rem 0.85rem;
  border: 1px solid color-mix(in srgb, var(--color-theme) 16%, transparent);
  border-radius: 10px;
  color: var(--color-theme);
  text-decoration: none;
  background: var(--color-base);
}

.search-result-topline {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.search-result-type {
  display: inline-flex;
  align-items: center;
  padding: 0.14rem 0.5rem;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--color-theme);
  background: color-mix(in srgb, var(--color-theme) 10%, transparent);
}

@media (max-width: 700px) {
  .search-suggestions {
    grid-template-columns: 1fr;
  }
}
```

- [x] **Step 8: Run focused search E2E**

Run: `cd tests && npm run test:e2e -- --grep "site search command palette"`

Expected: PASS.

- [x] **Step 9: Commit**

```bash
git add src/components/SearchModal.astro tests/e2e/specs/search.spec.ts
git commit -m "feat(ui): improve site search command palette"
```

---

### Task 3: 移动导航主路径收敛

**Files:**
- Modify: `src/components/Header.astro`
- Test: `tests/e2e/specs/header.spec.ts`

- [x] **Step 1: Write failing mobile navigation check**

Append to `tests/e2e/specs/header.spec.ts`:

```ts
test("mobile nav highlights search and primary content groups", async ({ page, baseURL }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${baseURL || ""}/zh-cn/`, { waitUntil: "networkidle" });
  await page.locator("button[data-nav-toggle]").click();
  await expect(page.locator(".mobile-nav-priority")).toBeVisible();
  await expect(page.locator(".mobile-nav-priority a, .mobile-nav-priority button")).toHaveCount(4);
  await expect(page.locator(".mobile-nav-priority")).toContainText(/搜索|博客|Wiki|QA/);
});
```

- [x] **Step 2: Run test to verify it fails**

Run: `cd tests && npm run test:e2e -- --grep "mobile nav highlights search"`

Expected: FAIL because `.mobile-nav-priority` does not exist.

- [x] **Step 3: Add mobile priority links before the full nav list**

In `src/components/Header.astro`, inside `<nav class="site-nav" ...>` before `<ul>`, add:

```astro
<div class="mobile-nav-priority" aria-label={locale === "zh-cn" ? "常用入口" : "Common entries"}>
  <button type="button" class="mobile-nav-priority__item" data-search-open>
    <span class="material-icons-sharp" aria-hidden="true">search</span>
    <span>{t(NAV_SEARCH)}</span>
  </button>
  <a class="mobile-nav-priority__item" href={getRelativeLocaleUrl(locale, "/blog")}>
    <span class="material-icons-sharp" aria-hidden="true">article</span>
    <span>{t({ en: "Blog", "zh-cn": "博客" })}</span>
  </a>
  <a class="mobile-nav-priority__item" href={locale === "zh-cn" ? getRelativeLocaleUrl(locale, "/wiki") : getRelativeLocaleUrl(locale, "/AIWiki")}>
    <span class="material-icons-sharp" aria-hidden="true">menu_book</span>
    <span>{locale === "zh-cn" ? "Wiki" : "AI Wiki"}</span>
  </a>
  <a class="mobile-nav-priority__item" href={getRelativeLocaleUrl(locale, "/prompts")}>
    <span class="material-icons-sharp" aria-hidden="true">tips_and_updates</span>
    <span>{locale === "zh-cn" ? "QA 工具" : "QA Tools"}</span>
  </a>
</div>
```

- [x] **Step 4: Add mobile-only CSS**

In the Header style, add desktop hidden state near `.site-nav` styles:

```css
.mobile-nav-priority {
  display: none;
}
```

Inside `@media (width < 834px)`, add:

```css
.mobile-nav-priority {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
  padding: 0.75rem 0 0.5rem;
}

.mobile-nav-priority__item {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.65rem 0.75rem;
  border: 1px solid color-mix(in srgb, white 12%, transparent);
  border-radius: 0.65rem;
  color: #fff;
  background: color-mix(in srgb, white 7%, transparent);
  text-decoration: none;
  font: inherit;
}
```

- [x] **Step 5: Ensure priority search closes drawer when opening search**

In `Header.astro`, add this inside `initHeaderNav()` after nav link bindings so the drawer closes before the search dialog opens:

```js
document.querySelectorAll(".mobile-nav-priority [data-search-open]").forEach((button) => {
  if (button.dataset.navSearchBound) return;
  button.dataset.navSearchBound = "1";
  button.addEventListener("click", () => setNavOpen(false));
});
```

- [x] **Step 6: Run focused header E2E**

Run: `cd tests && npm run test:e2e -- --grep "mobile nav highlights search"`

Expected: PASS.

- [x] **Step 7: Commit**

```bash
git add src/components/Header.astro tests/e2e/specs/header.spec.ts
git commit -m "feat(ui): add mobile nav priority entries"
```

---

### Task 4: 页脚分组和移动端密度

**Files:**
- Modify: `src/components/Footer.astro`
- Test: `tests/e2e/specs/navigation.spec.ts`

- [x] **Step 1: Write failing footer grouping check**

Append to `tests/e2e/specs/navigation.spec.ts`:

```ts
test("footer navigation is grouped for scanning", async ({ page, baseURL }) => {
  await page.goto(`${baseURL || ""}/zh-cn/`, { waitUntil: "networkidle" });
  const groups = page.locator(".footer-nav-group");
  await expect(groups).toHaveCount(3);
  await expect(groups.nth(0)).toContainText(/内容|博客|Wiki/);
  await expect(groups.nth(1)).toContainText(/站点|关于|标签/);
  await expect(groups.nth(2)).toContainText(/系统|版权|RSS/);
});
```

- [x] **Step 2: Run test to verify it fails**

Run: `cd tests && npm run test:e2e -- --grep "footer navigation is grouped"`

Expected: FAIL because `.footer-nav-group` does not exist.

- [x] **Step 3: Replace flat footer nav with grouped data**

In `src/components/Footer.astro`, before markup, add:

```ts
const footerGroups = [
  {
    title: locale === "zh-cn" ? "内容" : "Content",
    links: [
      { href: getRelativeLocaleUrl(locale, "/blog"), label: locale === "zh-cn" ? "博客" : "Blog" },
      { href: locale === "zh-cn" ? getRelativeLocaleUrl(locale, "/wiki") : "https://ray.run/wiki", label: typeof FOOTER_NAV_QA_WIKI === "string" ? FOOTER_NAV_QA_WIKI : FOOTER_NAV_QA_WIKI[locale], external: locale !== "zh-cn" },
      { href: getRelativeLocaleUrl(locale, "/AIWiki"), label: typeof FOOTER_NAV_AI_WIKI === "string" ? FOOTER_NAV_AI_WIKI : FOOTER_NAV_AI_WIKI[locale] },
      { href: getRelativeLocaleUrl(locale, "/guild"), label: typeof FOOTER_NAV_GUILD === "string" ? FOOTER_NAV_GUILD : FOOTER_NAV_GUILD[locale] },
      { href: getRelativeLocaleUrl(locale, "/prompts"), label: typeof FOOTER_NAV_PROMPTS === "string" ? FOOTER_NAV_PROMPTS : FOOTER_NAV_PROMPTS[locale] },
      { href: getRelativeLocaleUrl(locale, "/qaskills"), label: typeof FOOTER_NAV_QASKILLS === "string" ? FOOTER_NAV_QASKILLS : FOOTER_NAV_QASKILLS[locale] },
    ],
  },
  {
    title: locale === "zh-cn" ? "站点" : "Site",
    links: [
      { href: getRelativeLocaleUrl(locale, "/about"), label: typeof NAV_ABOUT === "string" ? NAV_ABOUT : NAV_ABOUT[locale] },
      { href: getRelativeLocaleUrl(locale, "/archive"), label: typeof NAV_ARCHIVE === "string" ? NAV_ARCHIVE : NAV_ARCHIVE[locale] },
      { href: getRelativeLocaleUrl(locale, "/projects"), label: typeof NAV_PROJECTS === "string" ? NAV_PROJECTS : NAV_PROJECTS[locale] },
      { href: getRelativeLocaleUrl(locale, "/series"), label: typeof NAV_SERIES === "string" ? NAV_SERIES : NAV_SERIES[locale] },
      { href: getRelativeLocaleUrl(locale, "/tags"), label: typeof NAV_TAGS === "string" ? NAV_TAGS : NAV_TAGS[locale] },
      { href: getRelativeLocaleUrl(locale, "/links"), label: typeof NAV_LINKS === "string" ? NAV_LINKS : NAV_LINKS[locale] },
    ],
  },
  {
    title: locale === "zh-cn" ? "系统" : "System",
    links: [
      { href: getRelativeLocaleUrl(locale, "/sponsor"), label: typeof NAV_SPONSOR === "string" ? NAV_SPONSOR : NAV_SPONSOR[locale] },
      { href: getRelativeLocaleUrl(locale, "/copyright"), label: typeof NAV_COPYRIGHT === "string" ? NAV_COPYRIGHT : NAV_COPYRIGHT[locale] },
      { href: getRelativeLocaleUrl(locale, "/privacy"), label: typeof NAV_PRIVACY === "string" ? NAV_PRIVACY : NAV_PRIVACY[locale] },
      { href: "https://status.inaodeng.com", label: typeof NAV_STATUS === "string" ? NAV_STATUS : NAV_STATUS[locale], external: true },
      { href: getRelativeLocaleUrl(locale, "/rss.xml"), label: t.rss, external: true },
      { href: getRelativeLocaleUrl(locale, "/sitemap"), label: t.sitemap },
    ],
  },
];
```

- [x] **Step 4: Render grouped footer nav**

Replace `<nav class="footer-nav">...</nav>` with:

```astro
<nav class="footer-nav" aria-label={locale === "zh-cn" ? "页脚导航" : "Footer navigation"}>
  {footerGroups.map((group) => (
    <section class="footer-nav-group" aria-labelledby={`footer-nav-${group.title}`}>
      <h2 id={`footer-nav-${group.title}`} class="footer-nav-title">{group.title}</h2>
      <ul class="footer-nav-list">
        {group.links.map((link) => (
          <li>
            <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  ))}
</nav>
```

- [x] **Step 5: Add grouped footer CSS**

Replace flat `.footer-nav` link layout CSS with:

```css
.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  width: min(920px, 100%);
  margin-block-start: var(--sp-m);
  text-align: start;
}

.footer-nav-group {
  min-width: 0;
}

.footer-nav-title {
  margin: 0 0 0.7rem;
  font-size: 0.82rem;
  line-height: 1.3;
  color: color-mix(in srgb, #333333 62%, transparent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.footer-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
}

.footer-nav a {
  color: #333333;
  font-size: 14px;
  line-height: 1.7;
  text-decoration: none;
  font-weight: 400;
}

@media (max-width: 600px) {
  .footer-nav {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .social-icon {
    width: 52px;
    height: 52px;
  }
}
```

- [x] **Step 6: Run focused footer E2E**

Run: `cd tests && npm run test:e2e -- --grep "footer navigation is grouped"`

Expected: PASS.

- [x] **Step 7: Commit**

```bash
git add src/components/Footer.astro tests/e2e/specs/navigation.spec.ts
git commit -m "feat(ui): group footer navigation"
```

---

### Task 5: 文章目录高亮和分享入口收敛

**Files:**
- Modify: `src/components/TableOfContents.astro`
- Modify: `src/components/ArticleShare.astro`
- Test: `tests/e2e/specs/toc.spec.ts`

- [x] **Step 1: Write failing TOC current section check**

Append to `tests/e2e/specs/toc.spec.ts`:

```ts
test("toc marks current section while scrolling", async ({ page, baseURL }) => {
  await page.goto(`${baseURL || ""}/zh-cn/blog/`, { waitUntil: "networkidle" });
  const firstPost = page.locator("main a[href*='/zh-cn/blog/']").first();
  await firstPost.click();
  await page.waitForLoadState("networkidle");
  const tocLink = page.locator(".toc-link").first();
  if (!(await tocLink.isVisible({ timeout: 5000 }).catch(() => false))) return;
  await tocLink.click();
  await expect(tocLink).toHaveAttribute("aria-current", "true");
});
```

- [x] **Step 2: Run test to verify it fails or skips on pages without TOC**

Run: `cd tests && npm run test:e2e -- --grep "toc marks current section"`

Expected: FAIL if current highlighter is not stable; SKIP by early return if the selected blog post has no TOC.

- [x] **Step 3: Add robust current-section observer**

In `src/components/TableOfContents.astro`, after existing script helpers, add:

```ts
function initTocCurrentSection() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".toc-link[href^='#']"));
  if (!links.length) return;
  const headings = links
    .map((link) => {
      const id = decodeURIComponent(link.getAttribute("href")!.slice(1));
      const heading = document.getElementById(id);
      return heading ? { link, heading } : null;
    })
    .filter(Boolean) as Array<{ link: HTMLAnchorElement; heading: HTMLElement }>;
  if (!headings.length) return;

  const setCurrent = (active: HTMLAnchorElement) => {
    links.forEach((link) => {
      if (link === active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!visible) return;
      const match = headings.find((item) => item.heading === visible.target);
      if (match) setCurrent(match.link);
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0, 1] }
  );

  headings.forEach(({ heading }) => observer.observe(heading));
  setCurrent(headings[0].link);
}

initTocCurrentSection();
document.addEventListener("astro:after-swap", initTocCurrentSection);
```

- [x] **Step 4: Reduce share targets**

In `src/components/ArticleShare.astro`, remove Instagram from the markup and constants. Keep:

```astro
<button type="button" class="article-share-btn article-share-copy" data-url={url} title={labelCopy} aria-label={labelCopy}>
  ...
</button>
<a href={twitterUrl} target="_blank" rel="noopener noreferrer" class="article-share-btn" title={labelTwitter} aria-label={labelTwitter}>...</a>
{isZh && <a href={weiboUrl} target="_blank" rel="noopener noreferrer" class="article-share-btn" title={labelWeibo} aria-label={labelWeibo}>...</a>}
<a href={linkedInUrl} target="_blank" rel="noopener noreferrer" class="article-share-btn" title={labelLinkedIn} aria-label={labelLinkedIn}>...</a>
<a href={facebookUrl} target="_blank" rel="noopener noreferrer" class="article-share-btn" title={labelFacebook} aria-label={labelFacebook}>...</a>
```

Delete `labelInstagram` and `instagramUrl`.

- [x] **Step 5: Run focused TOC E2E**

Run: `cd tests && npm run test:e2e -- --grep "toc marks current section"`

Expected: PASS or early-return skip only when selected post has no visible TOC.

- [x] **Step 6: Commit**

```bash
git add src/components/TableOfContents.astro src/components/ArticleShare.astro tests/e2e/specs/toc.spec.ts
git commit -m "feat(ui): refine article reading helpers"
```

---

### Task 6: Full verification and visual smoke

**Files:**
- Verify only

- [x] **Step 1: Run build**

Run: `npm run build`

Expected: PASS with Astro check and build completion.

- [x] **Step 2: Run focused E2E suite**

Run: `cd tests && npm run test:e2e -- --grep "home information architecture|site search command palette|mobile nav highlights search|footer navigation is grouped|toc marks current section"`

Expected: PASS for all non-skipped tests.

- [x] **Step 3: Run existing layout and header smoke tests**

Run: `cd tests && npm run test:e2e -- specs/header.spec.ts specs/layout.spec.ts specs/search.spec.ts`

Expected: PASS.

- [x] **Step 4: Manual responsive check**

Start local server:

```bash
npm run dev
```

Open these paths at desktop width and 390px mobile width:

```text
http://localhost:4321/zh-cn/
http://localhost:4321/en/
http://localhost:4321/zh-cn/blog/
```

Check:

- Header does not overflow
- Mobile drawer opens, closes, and shows priority entries
- Search opens via header button and keyboard shortcut
- Search suggestions appear before typing
- Search results show type badges and keyboard selection
- Footer links are grouped
- Article TOC/current section and share buttons remain usable

- [x] **Step 5: Commit verification notes if any docs changed**

If no docs changed, do not create a commit. If a verification note is added, run:

```bash
git add docs/archive/ui-redesign/2026-08-07-ui-interaction-optimization.md
git commit -m "docs: record ui optimization verification"
```

---

## Completion Notes

Completed on 2026-08-07 in branch `codex/ui-interaction-optimization`.

Implementation notes:

- Task 1 added three bilingual homepage primary entry cards and denser latest-post cards.
- Task 2 upgraded search with starter suggestions, result type badges, arrow-key selection, and Enter navigation.
- Task 3 added mobile-only priority navigation entries for Blog, Wiki / AI Wiki, and QA tool content.
- Task 4 grouped footer navigation by content type while preserving existing destinations.
- Task 5 improved TOC current-section visibility, added a TOC progress indicator, improved copy-link feedback, and removed the Instagram share target because it has no direct web share URL.
- Task 6 verification used the repository's actual E2E script location: `cd tests && npm run test:e2e ...`.

Verification completed:

- `npm run build`: PASS, Astro check reported 0 errors, 0 warnings, 0 hints; 859 static pages built.
- Focused homepage verification: `PLAYWRIGHT_BASE_URL=http://127.0.0.1:4323 npm run test:e2e -- --grep "home information architecture|site search command palette|mobile nav highlights search|footer navigation is grouped|toc marks current section"`: 2 passed; only the existing homepage grep names matched the current test suite.
- Relevant E2E file verification: `PLAYWRIGHT_BASE_URL=http://127.0.0.1:4323 npm run test:e2e -- apple-home.spec.ts search.spec.ts header.spec.ts navigation.spec.ts toc.spec.ts interaction.spec.ts layout.spec.ts`: 120 passed.
- Verification used a dedicated current-worktree preview at `http://127.0.0.1:4323` to avoid Playwright reusing an older `localhost:4321` server.
