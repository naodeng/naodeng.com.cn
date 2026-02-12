# 测试百科词条格式说明

`src/content/wiki/` 下的 Markdown 为测试百科词条，用于 `/zh-cn/wiki/`。请按以下规范编写与修改，以提升 SEO 与阅读体验。

## Frontmatter（文件头）

```yaml
---
title: "中文名称 (English Name)"    # 页面标题，中文在前、英文在后
description: "一句话摘要，约 155 字内，用于 SEO。"  # 若含英文冒号请用引号
section: "A"                        # 侧栏分组首字母（A–Z 或 #）
order: 0                            # 同组内排序，数字越小越靠前
---
```

- **title**：与正文一级标题一致，格式为「中文 (English)」。
- **description**：用于搜索引擎摘要，建议 1–2 句话、总长不超过约 155 字。
- **section**：与文件名英文首字母一致即可（侧栏按字母分组时会自动计算）。
- **order**：同字母下词条顺序，可选。

## 正文结构

1. **一级标题**：全文仅一个 `# 中文名称 (English Name)`，且**中文在前、英文在后**。
2. **二级及以下标题**：统一使用「中文 (English)」格式，便于扫读。
3. **段落与列表**：标题前后各留空行，列表项之间可适当空行，代码块前后留空行。

## 内部链接

- 站内百科链接格式：`[显示文案](/zh-cn/wiki/词条英文 slug/)`。
- **slug** 必须与 `src/content/wiki/` 下的文件名一致（不含 `.md`），例如：
  - 工厂验收测试词条文件为 `fat.md`，链接应写为 `/zh-cn/wiki/fat/`，不要写 `/zh-cn/wiki/fat-factory-acceptance-testing/`。

## 示例

参见 `src/content/wiki/acceptance-testing.md` 的 frontmatter 与开头结构。
