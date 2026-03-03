# Structured Data Check Report

## Template Mapping Check

- Base layout: WebSite + Person + BreadcrumbList
- Blog detail: BlogPosting
- Wiki detail: DefinedTerm
- AIWiki detail: DefinedTerm

## Risks Found

1. 当前自动检查主要覆盖“存在”，缺少字段语义正确性校验。
2. 建议在 E2E 增加 JSON-LD 字段断言（@type、url、name、description）。
3. 建议新增 schema 静态脚本，对关键模板页做 JSON parse + required field 校验。
