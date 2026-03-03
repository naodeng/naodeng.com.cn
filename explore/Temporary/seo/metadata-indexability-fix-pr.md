# Metadata & Indexability Fix PR（执行记录）

## 已完成

1. 新增 SEO 静态检查脚本：`scripts/seo-static-check.mjs`
2. 新增命令：
   - `npm run seo:check`
   - `npm run seo:check:strict`
3. CI 接入：
   - `.github/workflows/e2e.yml`
   - `.github/workflows/deploy-cloudflare.yml`
   - `.github/workflows/gh-pages.yml`
4. sitemap 页面体量优化：
   - `src/pages/[lang]/sitemap.astro`
   - Wiki 列表与 Blog 列表仅展示前 200 条，超出时提示使用 XML sitemap
5. SEO E2E 升级：
   - `tests/e2e/specs/seo.spec.ts`
   - 增加 canonical 正确性、hreflang 完整性、JSON-LD 可解析性校验

## 待完成

1. 批量修复缺失 description 页面（当前 10 条）
2. 处理超长 description（当前 195 条）
3. 批量修复 broken links（当前 0 条，已完成）
4. 处理 duplicate title（当前 15 条）
5. 处理 orphan 词条（wiki 89 / aiwiki 0）
