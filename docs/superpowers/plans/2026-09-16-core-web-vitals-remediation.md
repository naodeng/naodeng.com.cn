# Core Web Vitals 媒体与导航修复实施计划

> For agentic workers: REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** 移除博客封面请求，优化已定位的正文截图，消除 _astro CSS 重定向，并稳定导航首屏几何尺寸。

**Architecture:** 保持 Astro 静态内容结构不变，只移除四类博客卡片/详情模板中的封面视图；已确认的 dsh-qa 截图改为站内版本化静态资源并在 MDX 节点上声明真实尺寸和首屏加载优先级。使用 Rollup 文件名清理避免 Cloudflare 对 @ 路径的 307 规范化，再用 _headers 为哈希或版本化资源提供长期缓存；导航通过系统字体栈与固定图标盒模型隔离远程字体加载带来的几何变化。

**Tech Stack:** Astro 6、MDX、Vite/Rollup、Cloudflare Pages _headers、Vitest、Playwright、Sharp。

**Spec:** docs/superpowers/specs/2026-09-16-core-web-vitals-remediation.md

## Global Constraints

- 使用 Node.js >=22.12.0 和 npm；不切换 pnpm/yarn。
- 只修改源码、内容源文件、静态资源和针对性测试；不直接编辑 dist/ 或 node_modules/。
- 保留历史 cover frontmatter、封面源文件和生成脚本；本次只移除前台封面渲染。
- 不把单次本地浏览器 LCP/CLS 结果表述为线上 RUM P75/P99 证明。
- 不自动提交或推送；交付前只报告当前工作区和验证结果。

---

### Task 1: 建立封面、正文图、资源 URL 和导航的回归测试

**Files:**
- Create: tests/e2e/specs/core-web-vitals-remediation.spec.ts
- Create: tests/unit/staticAssetHeaders.test.ts

**Interfaces:**
- Consumes: 现有本地 astro preview、博客详情和分页路由。
- Produces: 能在修复前失败、修复后验证真实 DOM/网络/静态头契约的测试。

- [x] Step 1: 写失败的 Playwright 测试

在 core-web-vitals-remediation.spec.ts 中覆盖：
- 文章详情没有 .cover-wrap/.cover-bg/.cover-overlay，且导航期间没有 /default.jpg 请求。
- /en/blog/page/2/ 没有 .post-cover/.post-cover-bg/.post-cover-overlay。
- dsh-qa 文章的 .article-content-image 使用 /images/dsh-qa-v1.webp，尺寸 1600x979，loading=eager，fetchpriority=high。
- 构建 stylesheet href 中的 /_astro/ URL 不含 @。
- 桌面 #site-primary-nav 的 computed min-height 为 80px、font-family 以 system-ui 开头、height 至少 80px；首个 Material Icons 尺寸为 21x21。

- [x] Step 2: 写失败的 _headers 单元测试

读取 public/_headers，断言包含：
~~~text
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable
~~~

- [x] Step 3: 运行测试确认失败原因来自当前封面、原始 CSS URL、资源头和导航契约，而不是测试入口错误

运行：
~~~bash
cd tests && npm run test:unit -- staticAssetHeaders.test.ts
cd tests && npm run test:e2e -- core-web-vitals-remediation.spec.ts
~~~

### Task 2: 移除博客前台封面渲染

**Files:**
- Modify: src/pages/[lang]/blog/[...id].astro
- Modify: src/pages/[lang]/blog/page/[page].astro
- Modify: src/pages/[lang]/tags/[tag].astro
- Modify: src/pages/[lang]/series/[series].astro

- [x] Step 1: 删除详情页的 cover-wrap DOM 及对应封面 CSS。
- [x] Step 2: 删除分页、标签、系列页的封面 DOM 及对应封面 CSS。
- [x] Step 3: 保留卡片的日期、标题、描述、标签、hover 和响应式布局，不改博客 URL 或 SEO 结构。
- [x] Step 4: 运行封面测试，确认 DOM 和网络断言变绿。

### Task 3: 转换 dsh-qa 正文截图并声明尺寸/优先级

**Files:**
- Create: public/images/dsh-qa-v1.webp
- Modify: 六篇双语 src/blog/*/AI-Testing/dsh-qa-*.mdx 文件

**Interfaces:**
- Consumes: 当前 dsh-qa.png，原始尺寸 3926x2403。
- Produces: /images/dsh-qa-v1.webp，1600x979，六篇双语文章共享同一份带版本号的站内资源。

- [x] Step 1: 使用仓库已有 Sharp 依赖生成 1600x979、质量 78 的 WebP；原始 PNG 和临时下载文件不写入仓库。
- [x] Step 2: 把六处 Markdown 图片替换为以下 HTML 结构，只保留各自 alt 文本：
~~~mdx
<img class="article-content-image" src="/images/dsh-qa-v1.webp" width="1600" height="979" loading="eager" fetchpriority="high" decoding="async" alt="..." />
~~~
- [x] Step 3: 运行正文图测试，确认真实 HTML 属性和站内 URL。

### Task 4: 修复 _astro 文件名重定向并配置缓存

**Files:**
- Modify: astro.config.mjs
- Modify: public/_headers

- [x] Step 1: 在 Astro 配置中加入 Rollup sanitizeFileName，按以下逻辑把 @ 替换为 -：
~~~js
vite: {
  build: {
    rollupOptions: {
      output: {
        sanitizeFileName: (fileName) => fileName.replace(/@/g, "-"),
      },
    },
  },
},
~~~
- [x] Step 2: 为 /_astro/* 和 /images/* 增加一年 immutable 缓存；为保留的 /default.jpg、/favicon.svg 和 /brand/* 使用 max-age=86400。
- [x] Step 3: 运行 npm run build，检查 dist HTML 中 /_astro/ stylesheet URL 不含 @。
- [x] Step 4: 运行 _headers 单元测试和 git diff --check。

### Task 5: 固定导航初始几何并隔离远程字体指标

**Files:**
- Modify: src/components/Header.astro

- [x] Step 1: 在最终生效的 header skin 中将 .l-header、.site-brand-heading 和 .site-nav 的字体栈置于系统字体之前，例如 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", "Noto Sans SC", sans-serif。
- [x] Step 2: 为桌面导航设置 min-height: var(--header-height)，在移动 media 规则中恢复 min-height: 0。
- [x] Step 3: 为 header 内 Material Icons 设置 inline-size/block-size/flex-basis: 21px 和 line-height: 1。
- [x] Step 4: 运行导航回归测试，确认桌面高度、系统字体、图标尺寸和移动开关行为全部通过。

### Task 6: 全量验证与证据边界

- [x] Step 1: 运行受影响单元测试：
~~~bash
cd tests && npm run test:unit -- staticAssetHeaders.test.ts
~~~
- [x] Step 2: 运行受影响 Playwright 测试：
~~~bash
cd tests && npm run test:e2e -- core-web-vitals-remediation.spec.ts performance.spec.ts header.spec.ts blog-editorial.spec.ts
~~~
- [x] Step 3: 运行 npm run build、git diff --check 和 git status --short --branch。
- [x] Step 4: 汇报本地 DOM/网络/构建证据，并明确说明线上 RUM 需要部署后重新观察。
