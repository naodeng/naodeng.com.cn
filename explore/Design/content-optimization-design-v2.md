# Content Optimization Design v2

## 内容模型
1. 词条模板
- 定义
- 为什么重要
- 常见问题（FAQ）
- 实践建议
- 相关术语（5 个）

2. 文章模板
- TL;DR
- 问题背景
- 方案与示例
- 风险与边界
- 结论与下一步

## 编辑流水线
- Step 1: 结构检查（Markdown lint + TOC）
- Step 2: 术语检查（词表/缩写/不翻译项）
- Step 3: 链接检查（站内/站外）
- Step 4: 事实检查（关键术语）
- Step 5: 发布前精修（可读性与一致性）

## 工具与自动化
- `wiki:clean` / `wiki:toc:refresh` / `wiki:style:check`。
- 发布前自动输出问题报告到 `explore/Temporary/issue`。
