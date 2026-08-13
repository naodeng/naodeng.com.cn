# 网站广告位清单（参考文档）

> 维护约定：新增、移动、删除广告位后，同步更新本文档与 `tests/e2e/specs/ad-low-intrusion.spec.ts`。
> 最近一次全面调整见 `docs/tasks/ads-optimization-tasks-v1.md`（2026-08-13，分支 `ads-entry-optimization`）。

## 一、全局基础设施

| 项目 | 说明 |
| --- | --- |
| 广告网络 | Google AdSense，client `ca-pub-7249159446737834` |
| 脚本加载 | `src/layouts/Base.astro` head 中，仅 `import.meta.env.PROD` 时加载 `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`；本地 dev 不渲染任何广告位 |
| 填充检测 | 所有广告位根节点带 `data-ad-collapse` 并默认 `hidden`；`Base.astro` 底部的脚本在广告填充后展开（`data-ad-status="filled"` 或出现 iframe），未填充保持隐藏、零占位（防止空白框与 CLS） |
| 声明文件 | `public/ads.txt`：`google.com, pub-7249159446737834, DIRECT, f08c47fec0942fa0` |
| 隐私政策 | `src/pages/[lang]/privacy.astro` 已包含 AdSense 第三方广告说明（中英各一条） |
| 广告位编号 | 两个 AdSense slot 全站复用：`5247439587`（in-article fluid）、`9931752640`（auto 响应式）。AdSense 允许同一 slot 在多个页面/位置使用 |

## 二、广告组件规格

| 组件 | 文件 | AdSense 格式 / slot | 宽度 | 高度 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `GoogleAd` | `src/components/GoogleAd.astro` | in-article fluid / 5247439587 | 所在容器 100% | 流体（随容器宽度自适应，约 100–250px 量级） | 上下间距 2rem；用于各内容页尾部 |
| `GoogleAdThin` | `src/components/GoogleAdThin.astro` | in-article fluid / 5247439587 | 所在容器 100% | 最高 90px（超出裁切） | 上下间距 1rem；仅首页使用 |
| `SidebarAd` | `src/components/SidebarAd.astro` | auto 响应式 / 9931752640 | 所在侧栏列宽 | 自适应 | 用于博客文章侧栏、docs/wiki/AIWiki 与 prompts 的 TOC 侧栏 |
| `FooterAd` | `src/components/FooterAd.astro` | auto 响应式 / 9931752640 | 居中，最大 `min(1120px, 100% - 48px)` | 自适应 | 全站常驻页脚位，所有页面 1 处 |

## 三、按页面明细

页面数量合计：**GoogleAd 17 处、GoogleAdThin 1 处、SidebarAd 4 处、FooterAd 每页 1 处**（全站统一）。

| # | 页面 | 路由 | 广告位 | 数量 | 位置 | 尺寸依据 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 全站所有页面 | 任意 | FooterAd | 1 | 正文 `<main>` 与页脚之间 | 宽 ≤1120px 居中，高自适应 |
| 2 | 首页 | `/(en\|zh-cn)/` | GoogleAdThin | 1 | 「探索内容」与「提示词」区块之间 | 全视口宽，高 ≤90px |
| 3 | 博客列表 | `/(en\|zh-cn)/blog/` | GoogleAd | 1 | 分页组件之后（页尾） | 主区容器（≤1400px）全宽 |
| 4 | 博客文章 | `/(en\|zh-cn)/blog/[...id]/` | GoogleAd | 1 | 正文尾部（相关术语之后、分享按钮之前） | 主栏约 900px（≥960px 视口） |
| 5 | 博客文章 | 同上 | SidebarAd | 1 | 右侧栏（作者卡片与目录下方） | 侧栏列 300px，≥960px 视口显示 |
| 6 | 文档页 | `/(en\|zh-cn)/docs/[...slug]/` | GoogleAd | 1 | 正文 `<article>` 之后 | 内容栏（220px 侧栏 + 1fr 网格） |
| 7 | 文档/Wiki/AI Wiki 词条页（带目录） | 同上及 wiki/AIWiki slug | SidebarAd | 1 | 右侧 TOC 栏目录下方 | TOC 列 200px，≥1100px 视口显示，<1100px 整列隐藏 |
| 8 | 测试百科索引 | `/(zh-cn)/wiki/` | GoogleAd | 1 | 词条列表之后（页尾） | 内容栏全宽（≤1400px 网格内） |
| 9 | 测试百科词条 | `/(zh-cn)/wiki/[...slug]/` | GoogleAd | 1 | 正文之后（相关词条之前） | 内容栏全宽 |
| 10 | AI Wiki 索引 | `/(en\|zh-cn)/AIWiki/` | GoogleAd | 1 | 词条列表之后（页尾） | 内容栏全宽 |
| 11 | AI Wiki 词条 | `/(en\|zh-cn)/AIWiki/[...slug]/` | GoogleAd | 1 | 正文之后（相关词条之前） | 内容栏全宽 |
| 12 | Guild 总览 | `/(en\|zh-cn)/guild/` | GoogleAd | 1 | 学习路径区块之后（页尾） | 主区容器（≤1400px）全宽 |
| 13 | Guild 测试类型页 | `/(en\|zh-cn)/guild/[testType]/` | GoogleAd | 1 | 框架网格之后（页尾） | 主区容器（≤1400px）全宽 |
| 14 | Guild 文章 | `/(en\|zh-cn)/guild/[...slug]/` | GoogleAd | 1 | 正文之后（上一篇/下一篇之前） | 正文容器全宽 |
| 15 | Prompts 索引 | `/(en\|zh-cn)/prompts/` | GoogleAd | 1 | 工作流程区块之后（页尾） | 页容器（≤1400px）全宽 |
| 16 | Prompts 类型页 | `/(en\|zh-cn)/prompts/[testingType]/` | GoogleAd | 1 | 提示词卡片之后（分享按钮之前） | 内容栏（220px 侧栏 + 1fr 网格） |
| 17 | Prompts 类型页 | 同上 | SidebarAd | 1 | 右侧 TOC 栏目录下方 | TOC 列 200px，≥1100px 视口显示 |
| 18 | Prompts 工作流页 | `/(en\|zh-cn)/prompts/workflows/[workflowType]/` | GoogleAd | 1 | 正文之后（分享按钮之前） | 内容栏 |
| 19 | Prompts 工作流页 | 同上 | SidebarAd | 1 | 右侧 TOC 栏目录下方 | TOC 列 200px，≥1100px 视口显示 |
| 20 | QA Skills 索引 | `/(en\|zh-cn)/qaskills/` | GoogleAd | 1 | 最后一个分类区块之后（页尾） | 页容器 1180px 全宽，固定高 250px |
| 21 | QA Skills 详情 | `/(en\|zh-cn)/qaskills/[skillSlug]/` | GoogleAd | 1 | 分享按钮之后、评论区之前 | 主栏全宽，固定高 250px |
| 22 | Series 索引 / 详情 | `/(en\|zh-cn)/series/([series])?/` | GoogleAd | 各 1 | 列表/文章区块之后（页尾） | 主区容器（≤1400px）全宽 |
| 23 | Tags 索引 / 详情 | `/(en\|zh-cn)/tags/([tag])?/` | GoogleAd | 各 1 | 列表/文章区块之后（页尾） | 主区容器（≤1400px）全宽 |

### 特殊说明

- **qaskills 固定高度**：`/qaskills` 两页的广告位包在 `.ad-slot-250` 中，通过页面样式把 `.adsbygoogle` 强制为 250px 高（`height: 250px !important`），防止广告填充引起的布局跳动；`Base.astro` 中的全局规则在未填充时把整个槽位折叠为零占位。
- **侧栏广告的显示断点**：博客文章侧栏 ≥960px 视口；docs/wiki/AIWiki 与 prompts 的 TOC 侧栏 ≥1100px 视口，更窄时随侧栏整列隐藏。
- **移动端**：所有流内广告随容器变为单列全宽；qaskills 的 250px 固定高度在移动端保持不变。

## 四、其他信息

- **新增广告位的约定**（与现有实现保持一致）：
  1. 复用现有组件与两个 slot，不要新建 AdSense 单元编号；
  2. 根节点带 `data-ad-collapse`、`hidden`、`aria-hidden="true"`，并仅在 `!import.meta.env.DEV` 下渲染；
  3. 位置放在内容尾部或侧栏，不放在正文前、标题正下方或内容区块之间；
  4. 每页流内广告 ≤1 处（侧栏、页脚常驻位不计入）；
  5. 同步更新本文档与 `tests/e2e/specs/ad-low-intrusion.spec.ts` 的选择器/断言。
- **测试覆盖**：`tests/e2e/specs/ad-low-intrusion.spec.ts` 断言：列表页首屏广告密度每屏 ≤1（390×844 与 1440×900 两个视口）、详情页广告不插入 H1 与首段之间、详情页 CLS ≤0.1、页脚常驻位在主要页面存在。`tests/e2e/specs/performance.spec.ts` 会把广告域名请求排除在性能断言之外。
- **相关文档**：
  - 优化记录：`docs/tasks/ads-optimization-tasks-v1.md`
  - 组件实现：`src/components/{GoogleAd,GoogleAdThin,SidebarAd,FooterAd}.astro`
  - 加载与展开脚本：`src/layouts/Base.astro`
