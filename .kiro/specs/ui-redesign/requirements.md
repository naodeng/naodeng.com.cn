# Requirements Document

## Introduction

本文档定义 inaodeng.com（Nao's Blog）新版 UI 改进计划的需求。该网站是一个双语（英文 / 简体中文）软件测试技术博客，基于 Astro 5 SSG 构建，部署于 Cloudflare Workers。

改进目标：在**不改变内容结构、不推翻基础风格**的前提下，增强技术性与专业可信度、提升科技感与现代感（3–5 年不过时）、明显改善长文阅读体验与可访问性。约束：Header 和 Footer 不做变更。

视觉风格参考：[astro.build](https://astro.build) 多个页面（首页、博客列表页、博客文章页、Docs 页、Themes 页、Showcase 页）的设计语言。

---

## Glossary

- **Site**：整个 inaodeng.com 网站系统
- **Design_System**：统一的 CSS 设计令牌（CSS Custom Properties）集合，包含颜色、间距、字体、圆角、阴影等
- **Homepage**：`/[lang]/` 首页，包含 Intro、Projects、Guild、Wiki、Tags、Latest Posts 各区块
- **Article_Page**：博文详情页，包含正文、目录（TOC）、作者侧栏、评论区
- **TOC**：Table of Contents，文章目录组件（`TableOfContents.astro`）
- **Post_Card**：首页最新文章卡片组件
- **Code_Block**：文章内 `<pre><code>` 代码块
- **Inline_Code**：文章内行内 `` `code` `` 片段
- **Tag_Pill**：标签胶囊组件
- **Reading_Progress_Bar**：文章页顶部阅读进度条
- **Scroll_To_Top**：回到顶部按钮
- **Dark_Mode** / **Light_Mode**：系统级深色 / 浅色主题，通过 `prefers-color-scheme` 媒体查询响应
- **Lang**：语言标识，取值为 `en` 或 `zh-cn`
- **Reduced_Motion**：用户系统开启了 `prefers-reduced-motion: reduce` 偏好设置
- **Wiki_Homepage**：`/[lang]/wiki/` Wiki 首页，展示所有词条的字母分组卡片列表
- **Wiki_Entry_Page**：`/[lang]/wiki/[slug]` 单个词条详情页
- **Guild_Homepage**：`/[lang]/guild/` Guild 首页，展示框架卡片分组
- **Guild_Article_Page**：`/[lang]/guild/[slug]` Guild 文章详情页
- **Framework_Card**：Guild 首页中的框架卡片组件

---

## Requirements

### Requirement 1：统一设计令牌系统

**User Story:** As a developer, I want a unified design token system, so that all UI components share consistent visual variables and future changes require only token-level updates.

#### Acceptance Criteria

1. THE Design_System SHALL define CSS custom properties for at minimum: primary color (`--color-theme`), accent color (`--color-accent`), background (`--color-base`), foreground (`--color-main`), surface card background (`--color-surface`), border color (`--color-border`), semantic shadow levels (`--shadow-sm`, `--shadow-md`, `--shadow-lg`), glow color (`--glow-theme`), hero gradient (`--gradient-hero`), and sans-serif font stack (`--font-sans`).
2. THE Design_System SHALL define a typographic scale with at minimum five named sizes: `--text-xs` (0.75rem), `--text-sm` (0.875rem), `--text-base` (1rem), `--text-lg` (1.125rem), `--text-xl` (1.25rem).
3. THE Design_System SHALL define a spacing scale with named tokens: `--sp-xs` (8px), `--sp-s` (16px), `--sp-m` (32px), `--sp-l` (64px) — preserving existing `--sp-s/m/l` values for backward compatibility.
4. THE Design_System SHALL define border-radius tokens: `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (16px, primary card radius), `--radius-xl` (24px).
5. WHEN `prefers-color-scheme: dark` is active, THE Design_System SHALL apply dark-mode token values: `--color-base: #13151a`, `--color-surface: rgba(255, 255, 255, 0.06)`, `--color-border: rgba(255, 255, 255, 0.1)`, `--color-main: #e8e8e8`; WHEN `prefers-color-scheme: light` is active, THE Design_System SHALL apply light-mode token values: `--color-base: #faf9f6`, `--color-surface: rgba(0, 0, 0, 0.03)`, `--color-border: rgba(0, 0, 0, 0.1)`, `--color-main: #342c28`.
6. THE Design_System SHALL be defined in `src/styles/base.css` so all components inherit tokens without additional imports.
7. THE Design_System SHALL define `--glow-theme: color-mix(in srgb, var(--color-theme) 20%, transparent)` as the hover glow color derived from the primary theme color.
8. THE Design_System SHALL define `--gradient-hero: radial-gradient(ellipse at top, color-mix(in srgb, var(--color-theme) 12%, transparent), transparent 70%)` for use in Hero and section title decorative backgrounds.
9. THE Design_System SHALL define `--font-sans: 'Inter', system-ui, -apple-system, sans-serif` and apply it to the `body` element's `font-family`.

---

### Requirement 2：排版与信息层级优化

**User Story:** As a reader, I want clear typographic hierarchy, so that I can quickly scan article structure and distinguish headings, body text, and metadata.

#### Acceptance Criteria

1. THE Article_Page SHALL render `h2` headings at `font-size: 1.5rem` with a left border accent of `4px solid var(--color-theme)` and `padding-inline-start: var(--sp-s)`.
2. THE Article_Page SHALL render `h3` headings at `font-size: 1.25rem` with a bottom border of `1px solid var(--color-border)`.
3. THE Article_Page SHALL render body paragraph text at `font-size: 1rem` with `line-height: 1.8` and `font-weight: 400` to optimize long-form reading comfort.
4. THE Article_Page SHALL limit article body prose width to a maximum of `68ch` to maintain optimal reading line length.
5. THE Article_Page SHALL render article metadata (author, date, reading time) in a visually distinct meta bar below the article title, using `font-size: var(--text-sm)` and reduced opacity (`opacity: 0.65`).
6. THE Article_Page SHALL display an estimated reading time calculated as `ceil(wordCount / 200)` minutes alongside the article date in the meta bar.
7. WHEN an article has tags, THE Article_Page SHALL render Tag_Pill components below the meta bar, each linking to the corresponding tag archive page.

---

### Requirement 3：代码块与行内代码视觉增强

**User Story:** As a developer reader, I want well-styled code blocks, so that I can easily read, copy, and distinguish code from prose.

#### Acceptance Criteria

1. THE Code_Block SHALL display a header bar containing the detected language label (e.g., "TypeScript", "bash") left-aligned and a copy-to-clipboard button right-aligned.
2. WHEN the copy button is clicked, THE Code_Block SHALL copy the code content to the clipboard and change the button label to a confirmation state (e.g., "Copied!") for 2000ms, then revert.
3. THE Code_Block SHALL apply `border-radius: var(--radius-md)` and a `1px solid var(--color-border)` border.
4. THE Code_Block SHALL apply a subtle left-side accent line of `3px solid var(--color-theme)` to visually anchor the block.
5. THE Inline_Code SHALL render with `background: color-mix(in srgb, var(--color-theme) 10%, transparent)`, `color: var(--color-theme)`, `border-radius: var(--radius-sm)`, and `padding: 0.15em 0.4em`.
6. IF the clipboard API is unavailable, THEN THE Code_Block SHALL hide the copy button gracefully without throwing a JavaScript error.

---

### Requirement 4：文章页阅读进度条

**User Story:** As a reader, I want a reading progress indicator, so that I know how far through a long article I am.

#### Acceptance Criteria

1. THE Reading_Progress_Bar SHALL be rendered as a fixed horizontal bar at the top of the viewport on Article_Page only, with `height: 3px` and `background: var(--color-theme)`.
2. WHEN the user scrolls, THE Reading_Progress_Bar SHALL update its `width` as a percentage of `(scrollY / (documentHeight - viewportHeight)) * 100`.
3. WHEN `prefers-reduced-motion: reduce` is active, THE Reading_Progress_Bar SHALL update width without CSS transitions.
4. THE Reading_Progress_Bar SHALL have `z-index` higher than the page header to remain visible during scroll.
5. WHEN the user reaches the bottom of the article, THE Reading_Progress_Bar SHALL display at 100% width.

---

### Requirement 5：回到顶部按钮

**User Story:** As a reader, I want a scroll-to-top button, so that I can quickly return to the top of a long article without manual scrolling.

#### Acceptance Criteria

1. THE Scroll_To_Top button SHALL be rendered as a fixed circular button in the bottom-right corner of the viewport, with `width: 44px`, `height: 44px`, and `border-radius: 50%`.
2. WHEN the user has scrolled more than 400px from the top, THE Scroll_To_Top button SHALL become visible with a fade-in transition of `0.2s ease-out`.
3. WHEN the user has scrolled less than 400px from the top, THE Scroll_To_Top button SHALL be hidden.
4. WHEN the Scroll_To_Top button is clicked, THE Site SHALL scroll to the top of the page.
5. WHEN `prefers-reduced-motion: reduce` is active, THE Site SHALL jump to the top instantly without smooth scroll animation.
6. THE Scroll_To_Top button SHALL have an accessible `aria-label` in the current Lang (e.g., "回到顶部" / "Back to top").

---

### Requirement 6：首页 Post Card 视觉升级

**User Story:** As a visitor, I want visually appealing post cards on the homepage, so that I can quickly identify and navigate to articles of interest.

#### Acceptance Criteria

1. THE Post_Card SHALL display the article title, publication date, and at least one tag.
2. THE Post_Card SHALL apply a hover state that elevates the card with `transform: translateY(-4px)`, changes `border-color` to `var(--color-theme)`, and applies `box-shadow: 0 0 20px var(--glow-theme)`.
3. THE Post_Card SHALL render the cover image area with `aspect-ratio: 16 / 9` and `object-fit: cover`.
4. WHEN no cover image is available, THE Post_Card SHALL render a gradient placeholder using `var(--color-theme)` as the base color.
5. THE Post_Card SHALL display a reading time estimate in the card footer.
6. THE Post_Card transition duration SHALL be `0.25s` with `cubic-bezier(0.4, 0, 0.2, 1)` easing.
7. WHEN `prefers-reduced-motion: reduce` is active, THE Post_Card SHALL omit transform-based hover animations.
8. THE Post_Card SHALL apply `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, and `border-radius: var(--radius-lg)` to achieve a glassmorphism card style consistent with astro.build's card design.
9. THE Post_Card SHALL display a category/tag badge in the top-left corner of the cover image area, styled as a pill with `background: rgba(0,0,0,0.5)` backdrop and `color: #fff`, referencing astro.build themes page card overlay pattern.

---

### Requirement 7：目录（TOC）组件交互增强

**User Story:** As a reader, I want an interactive table of contents, so that I can navigate long articles efficiently and always know my current position.

#### Acceptance Criteria

1. THE TOC SHALL highlight the currently visible section's link with `color: var(--color-theme)` and `font-weight: 600`.
2. WHEN a new heading enters the viewport, THE TOC SHALL update the active link within 100ms using IntersectionObserver.
3. THE TOC SHALL display h2 and h3 headings, with h3 items indented by `0.75rem` relative to h2 items.
4. WHEN the TOC list overflows its container height, THE TOC SHALL scroll internally to keep the active link visible.
5. THE TOC SHALL be accessible via keyboard navigation, with each link focusable and activatable via Enter key.
6. WHEN the viewport width is less than 960px, THE TOC SHALL collapse into a `<details>` disclosure widget below the article title rather than a fixed sidebar.

---

### Requirement 8：科技感视觉增强（光晕装饰与微动效）

**User Story:** As a visitor, I want subtle tech-aesthetic visual details, so that the site feels modern and professional without being distracting.

#### Acceptance Criteria

1. THE Site SHALL render radial-gradient glow decorations (using `var(--gradient-hero)`) on key Hero sections and Homepage section title areas to create a tech-forward atmosphere, replacing any dot-grid background pattern.
2. THE Design_System SHALL define a `--transition-base: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)` token used consistently across interactive elements.
3. THE Homepage section titles SHALL render with a left accent bar of `3px solid var(--color-theme)` and `padding-inline-start: var(--sp-s)` for visual anchoring.
4. WHEN `prefers-reduced-motion: reduce` is active, THE Site SHALL disable all CSS `animation` and `transition` properties that are purely decorative.
5. THE Design_System SHALL NOT use animated gradients, particle effects, or canvas-based visual effects that increase CPU usage during idle.
6. WHEN a card (Post_Card, Framework_Card, or Wiki entry card) is hovered, THE Site SHALL apply `box-shadow: 0 0 20px var(--glow-theme)` to produce a subtle glow effect using the primary theme color.
7. THE Homepage SHALL render a full-width hero intro section with a radial-gradient background (`var(--gradient-hero)`), a large headline using gradient text (`linear-gradient(135deg, var(--color-theme), var(--color-accent))`), and a subtitle — referencing astro.build homepage hero pattern.

---

### Requirement 9：可访问性与易用性基线

**User Story:** As a user with accessibility needs, I want the site to meet baseline accessibility standards, so that I can use it effectively with assistive technologies.

#### Acceptance Criteria

1. THE Site SHALL maintain a minimum color contrast ratio of 4.5:1 between body text and background in both Light_Mode and Dark_Mode.
2. THE Site SHALL provide a visible focus indicator (`outline: 2px solid var(--color-theme); outline-offset: 2px`) on all interactive elements when navigated via keyboard.
3. THE Site SHALL include a skip-to-main-content link as the first focusable element in the DOM.
4. WHEN an image is decorative, THE Site SHALL set `aria-hidden="true"` on that image element.
5. WHEN an image conveys information, THE Site SHALL provide a non-empty `alt` attribute describing the image content.
6. THE Site SHALL use semantic HTML elements (`<article>`, `<aside>`, `<nav>`, `<section>`, `<time>`) in all page layouts.
7. THE Site SHALL support both `en` and `zh-cn` locales with correct `lang` attribute on the `<html>` element and locale-appropriate font stacks.

---

### Requirement 10：响应式布局优化

**User Story:** As a mobile reader, I want a comfortable reading experience on small screens, so that I can consume technical content on any device.

#### Acceptance Criteria

1. THE Article_Page SHALL use a single-column layout on viewports narrower than 960px, with the TOC rendered as a collapsible block below the article title.
2. THE Homepage SHALL reflow the post grid to a single column on viewports narrower than 480px.
3. THE Article_Page SHALL set `font-size: 1rem` and `line-height: 1.75` on viewports narrower than 480px to maintain readability.
4. THE Code_Block SHALL be horizontally scrollable on narrow viewports without breaking the page layout.
5. THE Site SHALL NOT use fixed pixel widths for any content container; all containers SHALL use `max-inline-size` with `padding-inline` for gutters.
6. WHEN the viewport width is between 480px and 960px (tablet range), THE Homepage post grid SHALL display two columns.

---

### Requirement 11：Astro 组件级改进

**User Story:** As a developer, I want well-structured Astro components for each UI improvement, so that changes are isolated, maintainable, and reusable across pages.

#### Acceptance Criteria

1. THE Reading_Progress_Bar SHALL be implemented as a standalone `ReadingProgressBar.astro` component and imported only in `Article.astro` layout.
2. THE Scroll_To_Top button SHALL be implemented as a standalone `ScrollToTop.astro` component and imported in `Base.astro` layout.
3. THE Code_Block copy button SHALL be implemented as a client-side `<script>` within the existing Article layout scope, using `document.querySelectorAll('pre')` to progressively enhance all code blocks.
4. THE Design_System tokens SHALL be defined exclusively in `src/styles/base.css` with no duplication in component `<style>` blocks.
5. WHEN a component accepts locale-aware text, THE component SHALL accept a `lang: Lang` prop and resolve strings via `useTranslations(lang)` from `src/i18n.ts`.
6. THE Site SHALL NOT introduce any new JavaScript framework dependencies (React, Vue, Svelte, etc.) for UI improvements; all enhancements SHALL use vanilla JS or Astro components.

---

### Requirement 12：Wiki 首页视觉与交互增强

**User Story:** As a Chinese-speaking reader, I want an enhanced Wiki homepage with better visual hierarchy and search experience, so that I can quickly locate terminology entries and understand the scope of the knowledge base.

#### Acceptance Criteria

1. THE Wiki_Homepage SHALL render each terminology entry as a card with `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: var(--radius-lg)`, and a hover state that applies `border-color: var(--color-theme)`, `transform: translateY(-2px)`, and `box-shadow: 0 0 20px var(--glow-theme)`.
2. THE Wiki_Homepage SHALL display a statistics banner showing the total entry count and total letter-group count, using `var(--color-theme)` as the accent color for numeric values.
3. THE Wiki_Homepage SHALL render the A–Z quick-jump navigation as pill buttons; WHEN a pill button is clicked, THE Wiki_Homepage SHALL smooth-scroll to the corresponding letter section.
4. WHEN a letter group contains zero entries, THE Wiki_Homepage SHALL hide that letter's pill button and section rather than rendering an empty group.
5. THE Wiki_Homepage SHALL support client-side filtering: WHEN the user types in the search input, THE Wiki_Homepage SHALL show only entries whose title or description contains the input string (case-insensitive), within 100ms of the last keystroke.
6. WHEN the search input is cleared, THE Wiki_Homepage SHALL restore the full entry list and re-display all letter sections.
7. THE Wiki_Homepage SHALL use `display: grid` with `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))` for the entry card grid within each letter group.
8. WHEN the viewport width is less than 480px, THE Wiki_Homepage SHALL reflow the entry grid to a single column.
9. WHEN `prefers-reduced-motion: reduce` is active, THE Wiki_Homepage SHALL omit card hover transform animations.
10. THE Wiki_Homepage SHALL render a hero section at the top with a radial-gradient background (`var(--gradient-hero)`), a large title, and the statistics banner — referencing astro.build docs page hero pattern.
11. THE Wiki_Homepage search input SHALL be styled with `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: var(--radius-md)`, and a focus state that changes `border-color` to `var(--color-theme)` — referencing astro.build themes page filter bar style.

---

### Requirement 13：Wiki 词条页阅读体验优化

**User Story:** As a reader studying a terminology entry, I want a well-structured entry page with related term suggestions, so that I can understand the term in context and explore connected concepts efficiently.

#### Acceptance Criteria

1. THE Wiki_Entry_Page SHALL render the term title in a visually distinct hero block with `font-size: var(--text-xl)`, a bottom border of `2px solid var(--color-theme)`, and `padding-block-end: var(--sp-s)`.
2. THE Wiki_Entry_Page SHALL display a "Related Terms" section below the main content WHEN the frontmatter includes a `related` field listing other entry slugs; each related term SHALL render as a linked pill using `var(--color-theme)` as the accent color.
3. THE Wiki_Entry_Page SHALL highlight the current entry in the sidebar with `color: var(--color-theme)` and `font-weight: 600`, and SHALL scroll the sidebar to keep the active entry visible on page load.
4. THE Wiki_Sidebar SHALL group entries by their starting letter with collapsible `<details>` elements; WHEN a group is collapsed, THE Wiki_Sidebar SHALL show only the letter heading.
5. WHEN the Wiki_Sidebar letter group containing the current entry is rendered, THE Wiki_Sidebar SHALL default that group's `<details>` to the open state.
6. THE Wiki_Entry_Page SHALL render a breadcrumb navigation of the form "Wiki › [Entry Title]" above the hero block, with each segment linking to its respective page.
7. THE Wiki_Entry_Page SHALL display Giscus comments below the main content, inheriting the current Lang and theme from the page context.
8. IF the `related` frontmatter field is absent or empty, THEN THE Wiki_Entry_Page SHALL omit the "Related Terms" section entirely without rendering an empty container.
9. THE Wiki_Entry_Page prose content SHALL follow the same typographic rules as Article_Page: `max-width: 68ch`, `line-height: 1.8`, h2/h3 heading styles with accent borders — referencing astro.build docs article page layout.

---

### Requirement 14：Guild 首页与框架卡片视觉升级

**User Story:** As a learner, I want a visually engaging Guild homepage with information-rich framework cards, so that I can quickly assess learning paths and choose the right framework to study.

#### Acceptance Criteria

1. THE Guild_Hero SHALL render the headline with a gradient text effect using `background: linear-gradient(135deg, var(--color-theme), var(--color-accent))` and `background-clip: text`, SHALL display aggregate statistics (total frameworks, total articles) as accent-colored numeric badges, and SHALL render a radial-gradient glow background decoration using `var(--gradient-hero)`.
2. THE Framework_Card SHALL display the framework icon, name, a one-line description, article count, estimated total learning duration (derived from article count × 8 minutes), and a difficulty badge.
3. THE Framework_Card difficulty badge SHALL use distinct `background` and `color` token combinations per level: Beginner uses `var(--color-theme)` at 15% opacity with `var(--color-theme)` text; Intermediate uses `var(--color-accent)` at 15% opacity; Advanced uses a warning-tone token `var(--color-warn, #f59e0b)` at 15% opacity.
4. THE Framework_Card SHALL apply `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, and `border-radius: var(--radius-lg)` to achieve a glassmorphism card style.
5. THE Framework_Card SHALL apply a hover state with `transform: translateY(-4px)`, `box-shadow: 0 0 20px var(--glow-theme)`, and `border-color: var(--color-theme)` transition of `0.25s cubic-bezier(0.4, 0, 0.2, 1)`.
6. THE Guild_Homepage SHALL group Framework_Cards under their parent Test_Type section heading, with the section heading styled with a left accent bar of `3px solid var(--color-theme)` and `padding-inline-start: var(--sp-s)`.
7. THE Guild_Homepage SHALL accept a `lang: Lang` prop and resolve all user-facing strings via `useTranslations(lang)`.
8. WHEN `prefers-reduced-motion: reduce` is active, THE Framework_Card SHALL omit transform-based hover animations.
9. WHEN the viewport width is less than 480px, THE Guild_Homepage framework grid SHALL reflow to a single column.
10. THE Guild_Homepage SHALL render a category filter bar below the hero section, allowing users to filter Framework_Cards by test type — referencing astro.build themes page category filter pattern. Filter pills SHALL use `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, and active state `background: var(--color-theme)`, `color: #fff`.

---

### Requirement 15：Guild 文章页学习体验增强

**User Story:** As a learner reading a Guild article, I want clear learning context and navigation, so that I can track my progress through a framework's learning path and move between articles without losing orientation.

#### Acceptance Criteria

1. THE Guild_Article_Page SHALL display a meta-info bar below the article title containing: test type, framework name, difficulty badge, estimated reading time (`ceil(wordCount / 200)` minutes), and article stage label — all using `font-size: var(--text-sm)` and `var(--color-border)` separator lines.
2. THE Guild_Article_Page SHALL render a previous/next article navigation block at the bottom of the content area; WHEN a previous article exists, THE navigation block SHALL display a left-pointing link with the previous article title; WHEN a next article exists, THE navigation block SHALL display a right-pointing link with the next article title.
3. THE Guild_Article_Page previous/next navigation links SHALL apply a hover state with `background: var(--color-surface)`, `border: 1px solid var(--color-theme)`, and `transform: translateX(±4px)` (left for previous, right for next).
4. THE Guild_Sidebar SHALL render the article list for the current framework grouped by stage; WHEN a stage group is rendered, THE Guild_Sidebar SHALL display the stage label as a non-interactive heading above its article links.
5. THE Guild_Sidebar SHALL highlight the current article with `color: var(--color-theme)`, `font-weight: 600`, and a `3px solid var(--color-theme)` left border indicator.
6. THE Guild_Sidebar SHALL scroll to keep the active article link visible within the sidebar container on page load.
7. THE Guild_Article_Page SHALL display a breadcrumb of the form "Guild › [Test Type] › [Framework] › [Article Title]" above the meta-info bar, with each segment linking to its respective page.
8. WHEN `prefers-reduced-motion: reduce` is active, THE Guild_Article_Page SHALL omit transform-based navigation hover animations.
9. THE Guild_Article_Page SHALL accept a `lang: Lang` prop and resolve all user-facing strings via `useTranslations(lang)`.
10. THE Guild_Article_Page prose content SHALL follow the same typographic rules as Article_Page: `max-width: 68ch`, `line-height: 1.8`, h2/h3 heading styles — referencing astro.build blog article page layout.
