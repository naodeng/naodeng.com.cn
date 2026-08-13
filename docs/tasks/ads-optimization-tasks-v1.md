# 广告入口梳理与优化 v1

- 分支：`ads-entry-optimization`
- 日期：2026-08-13
- 状态：已实施
- 长期参考：广告位完整清单见 `docs/standards/ads-inventory.md`（页面、数量、尺寸、维护约定）

## 背景与原则

梳理全站广告入口，并按三条原则优化：

1. **不影响网站内容展示**：广告填充后不得推挤正文、打断阅读流程
2. **弱广告化**：视觉上弱化（紧凑、无重色块、小间距）
3. **增加常驻广告位**：全站统一的页脚常驻位，所有页面生效

## 现状清单（优化前）

### 广告组件

| 组件 | 格式 / slot | 说明 |
| --- | --- | --- |
| `src/components/GoogleAd.astro` | in-article fluid / 5247439587 | 文章内广告，曾有 default / band 变体 |
| `src/components/GoogleAdThin.astro` | in-article fluid / 5247439587 | 紧凑版（max-height 90px） |
| `src/components/SidebarAd.astro` | auto 响应式 / 9931752640 | 侧栏广告 |
| `src/components/FooterAd.astro` | auto 响应式 / 9931752640 | 页脚常驻位（本次新增） |

### 基础设施

- `src/layouts/Base.astro`：PROD 加载 AdSense 脚本；`data-ad-collapse` 填充检测脚本（未填充保持隐藏、零占位）；`.ad-slot-250` 折叠规则
- `public/ads.txt`：publisher 声明 `google.com, pub-7249159446737834, DIRECT, f08c47fec0942fa0`
- 赞助入口（Header/Footer 导航、`/sponsor` 页的爱发电 / Buy Me A Coffee / Ko-fi）与 AdSense 无关，本次不动

### 优化前位置分布（约 27 处，17 个文件）

- 首页：band 灰色色带 1 处（视觉最重）
- 博客列表 / 文章页、docs、wiki / AIWiki 索引与词条、guild 总览 / 类型 / 文章、prompts 索引 / 类型 / 工作流、qaskills 索引 / 详情、series / tags 索引与详情
- 问题位置：docs 正文前 1 处；series/tags 标题正下方 4 处；guild 总览、类型页、prompts 索引、qaskills 两页的区块之间 5 处；wiki/AIWiki 索引字母导航后 2 处（Thin）

## 优化改动

1. **常驻位**：新增 `FooterAd.astro`，在 `Base.astro` 正文与页脚之间渲染，全站生效；复用 slot 9931752640 与 `data-ad-collapse` 机制，未填充自动隐藏
2. **首页弱化**：band 色带 → `GoogleAdThin`；`GoogleAd.astro` 移除 band 变体代码
3. **去中间化**（每页只留内容尾部 1 处流内广告）：
   - 移除：docs 正文前；series/tags 4 页标题正下方；guild 总览与类型页中间位；prompts 索引中间位；qaskills 索引与详情各 1 处中间位；wiki/AIWiki 索引的 GoogleAdThin
   - 保留：各页尾部广告、博客文章 / prompts 类型页 / 工作流页的侧栏广告、qaskills 尾部的 `.ad-slot-250` 固定高度位
4. **隐私政策**：`privacy.astro` 补充 Google AdSense 第三方广告说明（中英各一条）
5. **测试同步**：`tests/e2e/specs/ad-low-intrusion.spec.ts` 修正广告包装类选择器（`.ad-wrap/.home-ad-wrap` 已不存在，改为 `.ad-collapse, .ad-thin-wrap, .sidebar-ad, .footer-ad`），并新增页脚常驻位存在性断言

## 优化后分布

- 全站页脚常驻位 1 处（所有页面）
- 每页内容尾部流内广告 ≤ 1 处；侧栏广告（博客文章、docs/wiki/AIWiki TOC 栏、prompts 类型/工作流页）保留
- 首页 1 处紧凑细条

## 验证记录

- [x] `npm run build`（875 页，exit 0）
- [x] `npm test`（76/76）+ `cd tests && npm run test:unit`（76/76）
- [x] `cd tests && npx playwright test e2e/specs/ad-low-intrusion.spec.ts`（4/4，含页脚常驻位断言）
- [x] `cd tests && npx playwright test e2e/specs/responsive.spec.ts e2e/specs/navigation.spec.ts`（45/45）
