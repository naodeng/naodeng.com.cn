# Core Web Vitals 媒体与导航修复规格

## 目标

降低博客详情页和博客列表页的首屏资源负担，并减少导航在字体、图标和样式加载后发生几何变化。

## 范围

- 文章详情、博客分页列表、标签页和系列页不再渲染封面占位，也不再因封面 CSS 请求 /default.jpg。
- 将报告中明确识别的 dsh-qa.png 正文图转换为站内版本化 WebP，保留原始比例和尺寸占位。
- 首个正文图使用明确的 eager/high-priority 策略；不把 loading="lazy" 作为所有正文图片的全局规则。
- 让 Astro 生成的 _astro 文件名不再包含会触发线上 URL 规范化的 @，并为带哈希和版本号的静态资源配置长期缓存。
- 为桌面导航设置稳定的初始高度和不依赖远程字体指标的字体栈，为 Material Icons 设置固定盒模型。

## 不在范围内

- 删除历史 MDX frontmatter 中的 cover 字段、封面源文件或封面生成脚本。
- 批量改造所有历史文章中的第三方截图；本次只处理 RUM 报告已定位的 dsh-qa.png。
- 把本地构建结果或一次性浏览器采样文件纳入提交。

## 验收标准

1. 详情页和分页列表页的 DOM 中没有 .cover-wrap、.post-cover 或 .post-cover-bg，浏览器网络日志没有 /default.jpg 请求。
2. 六篇双语 dsh-qa 文章使用 /images/dsh-qa-v1.webp，输出包含 width="1600"、height="979"、loading="eager"、fetchpriority="high" 和 decoding="async"。
3. 构建产物中的 _astro stylesheet URL 不含原始 @ 字符，public/_headers 为 _astro 和版本化图片配置 immutable 长缓存。
4. 桌面 #site-primary-nav 使用系统字体栈、具有固定最小高度；其图标具有固定宽高，移动端打开/关闭行为保持不变。
5. npm run build、受影响的单元测试、受影响的 Playwright 测试和 git diff --check 通过；真实 RUM 的 P75/P99 与 CLS 归因仍标记为部署后的待观察证据。
