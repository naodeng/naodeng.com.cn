# Apple Design 探索改版 — 设计规格

**日期：** 2026-07-31  
**分支：** `explore-apple-design`（基于最新 `main`）  
**参考规范：** [VoltAgent awesome-design-md · Apple DESIGN.md](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/apple/DESIGN.md)  
**状态：** 已实现（2026-08-16，探索分支；非正式上线承诺）

## 1. 目标与成功标准

在探索分支上验证：个人双语内容站能否用 Apple 式视觉语言（浅色主导、单一 Action 蓝、全幅节奏、极简 elevation）表达，同时保留站点信息架构与品牌身份点缀。

**成功标准：**

- 首页一眼可读为「Hero + 工具卡片格」，而非旧点阵/橙主题皮肤
- Header / Footer 呈现黑顶栏 + 羊皮纸页脚
- 交互色统一为 Action Blue；橙色仅出现在品牌点缀
- 中英文首页与导航均可用；桌面与窄屏无明显错位
- `npm run build` 通过；关键内容页（博客、Wiki）可打开且可读

## 2. 已确认决策

| 项 | 选择 |
| --- | --- |
| 范围 | 全局壳（token + Header/Footer）+ 首页 |
| 强调色 | 蓝做交互（`#0066cc` / 暗底 `#2997ff`）；橙（`#ef4d1a`）只做品牌点缀 |
| 首页节奏 | Hero + Store 式 utility card 网格，另附精简「最新文章」 |
| 色彩模式 | 浅色主导；页面内可用近黑区块 / 黑顶栏；不做系统深色模式 |
| 落地方式 | Token 先行，再改壳层，再重做首页 |

## 3. 架构（改哪些层）

```text
src/styles/base.css (+ 相关全局样式)
  → 替换/映射 design tokens（色、字、圆角、间距、阴影规则）
src/components/Header.astro, Footer.astro
  → 视觉与密度对齐 Apple global-nav / footer；IA 不变
src/pages/[lang]/index.astro（及首页依赖组件）
  → 收敛为 Hero + 卡片格 + 最新文章
内容页（Article / Docs / Wiki 等）
  → 仅继承 token；不重排阅读版式与侧栏 IA
```

不改：部署配置、域名、内容文案批量重写、系统深色模式完整实现。

## 4. Token 体系

### 4.1 颜色

- **Canvas：** `#ffffff`、Parchment `#f5f5f7`、Pearl `#fafafc`
- **Dark tiles / nav：** `#272729`（及微差变体按需）、Nav `#000000`
- **Ink：** `#1d1d1f`；muted `#333333` / `#7a7a7a`；暗底正文 `#ffffff` / `#cccccc`
- **Action：** `#0066cc`；focus `#0071e3`；on-dark link `#2997ff`
- **Brand mark only：** `#ef4d1a`（logo 旁圆点或等价点缀，不做按钮/链接主色）
- **Hairline：** `#e0e0e0` / `rgba(0,0,0,0.08)`
- **禁止：** 装饰性渐变、点阵底作为默认页背景、第二套交互强调色

### 4.2 字体

- 栈：`system-ui, -apple-system, BlinkMacSystemFont, sans-serif`（非 Apple 平台可用 Inter 作 fallback）
- Display：约 40–56px / weight 600 / 负字距
- Body：17px / 400 / line-height ≈ 1.47
- Nav：12px / 400
- 字重阶梯以 300 / 400 / 600 为主，避免 500 作为默认强调

### 4.3 形状与 elevation

- Pill CTA：`border-radius: 9999px`
- Utility card：`18px` + 1px hairline
- 全幅区块：直角、贴边
- **唯一 soft shadow：** `rgba(0,0,0,0.22) 3px 5px 30px`，仅用于封面/插图 resting on surface；卡片与按钮不加装饰阴影
- 按钮按下：`transform: scale(0.95)`（按规范微交互）

### 4.4 深色模式策略

探索期强制使用浅色 Apple token：不再根据 `prefers-color-scheme: dark` 切换整站画布/正文色。深色仅作为页面内表面（黑顶栏、近黑 tile），不是系统 dark theme。

## 5. 壳层（Header / Footer）

### Header

- 高度 44px，背景纯黑，浅色字
- 保留现有导航分组与外链规则；仅改视觉密度与字号
- 品牌名旁保留橙色点缀
- 右侧：搜索 + 语言切换（深色 utility 样式）
- ≤834px：品牌 + 汉堡 + 搜索
- 可选：羊皮纸 sticky 次级条（首页可用）：左侧栏目语境，右侧蓝 pill 主 CTA

### Footer

- 背景 parchment；多列链接；宽松行高
- 保留现有链接集合、社交、版权/许可文案；只换样式

## 6. 首页结构

1. **Hero（白底）**  
   大标题 + 一句说明 + 两个蓝 pill（如「开始阅读」「浏览百科」）。文案走现有 i18n，不强行改品牌口号语义。

2. **探索内容（羊皮纸）**  
   Utility card 网格（目标约 6 入口）：QA Wiki、AI Wiki、Guild、Prompts、QA Skills、Projects。  
   卡片：白底、hairline、18px 圆角、标题 + 短说明 + Action Blue 文字链。

3. **最新文章（白底）**  
   精简列表 +「查看全部」。现有首页多段 showcase 收敛为入口，详细列表进各栏目页。

中英文结构一致。广告位/追踪若与布局冲突，优先保证 Hero/网格节奏，再局部安置，不破坏首屏构图。

## 7. 内容页继承

- **跟随：** 背景、正文字号/行高、链接蓝、按钮、去装饰阴影/渐变、壳层
- **不跟随重做：** Article/Docs/Wiki 阅读栏布局、目录与侧栏信息架构、内容 Markdown 结构

预期：内容页会有「半新旧」观感，属探索可接受范围。

## 8. 实现顺序

1. 落地 token（`base.css` 等），去掉点阵/装饰渐变默认背景  
2. Header / Footer 视觉对齐  
3. 首页重构为 Hero + 卡片格 + 最新文章  
4. 扫内容页继承问题，做最小修复（对比度、不可点、明显错位）  
5. 构建与抽样验证  

## 9. 验证计划

- `npm run build`
- 手动：`/zh-cn/`、`/en/` 首页；一篇博客；一页 Wiki（中文）
- 视口：桌面与窄屏（约 ≤640px）检查顶栏折叠、卡片换列、CTA
- 若导航选择器变更影响 e2e，再跑相关 Playwright；不为此放宽断言

## 10. 风险与非目标

| 风险 | 影响 | 缓解 |
| --- | --- | --- |
| 全局 token 冲击未重做页面 | 列表/文章短暂不协调 | 范围限定为壳+首页；内容页只修阻塞问题 |
| 缺摄影级封面 | Hero 偏「空」 | 用排版与留白撑构图；不强行堆假图 |
| SF Pro 在非 Apple 设备 | 字感略偏 | system-ui + 可选 Inter fallback + 收紧 display 字距 |
| 探索被误当正式上线 | 预期错位 | 仅在 `explore-apple-design` 推进；合并前需另审 |

**非目标：** 全站阅读页重设计、系统 dark mode、部署变更、内容批量改写、像素级复刻 apple.com。

## 11. 参考预览（本地）

设计讨论期静态稿（不入库要求，可忽略）：

- `.superpowers/brainstorm/shell-preview.html`
- `.superpowers/brainstorm/homepage-preview.html`
- `.superpowers/brainstorm/boundaries-preview.html`

---

**下一步：** 规格确认后，编写实现计划（writing-plans），再在 `explore-apple-design` 上动手改代码。
