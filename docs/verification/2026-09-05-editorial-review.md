# Astro Editorial 复审验收记录

日期：2026-09-05

## 修复范围

- QA Skills 详情正文限制为 768px，避免桌面端阅读列过宽。
- Footer 语言标记、公众号弹窗改为中性实心表面，移除渐变和背景模糊。
- 首页、博客分页、项目、系列、标签、资源卡片的 hover 位移统一为 2px。
- DESIGN.md、`.impeccable/design.json` 与长期文档入口同步 Astro Editorial 双主题；旧 Zenix / Diffuse Glass 文档明确为历史记录。

## 验证命令

- `npm test`：148 tests passed。
- `npm run build`：Astro check/build 成功，2560 pages built。
- `npm run seo:check`：brokenLinks 0、relatedUnknown 0、orphanWiki 0、orphanAIWiki 0。
- `git diff --check`：通过。
- `PLAYWRIGHT_BASE_URL=http://127.0.0.1:4322 npx playwright test e2e/specs/editorial-review.spec.ts e2e/specs/footer.spec.ts e2e/specs/responsive.spec.ts e2e/specs/theme.spec.ts --reporter=line --workers=2`：34 passed；新增复审断言首轮发现 Footer 仅存在首页，已修正测试路径后纳入后续运行。

## 范围保证

本次修复只改变 UI 样式、设计文档与回归测试；未修改路由、内容链接、博客链接、部署配置或 SEO 数据。
