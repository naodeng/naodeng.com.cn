# docs

长期保存的项目文档目录。

## 目录地图

- `standards/`: 长期有效的规范（Wiki 格式、Zenix 设计语言、广告位清单）
- `architecture/`: 模板与架构约定（词条模板等）
- `skills/`: 站点维护技能（Claude Skill 格式，含 OpenAI agent 配置）
  - `blog-series-drafting/`: 博客系列双语草稿生成
  - `qa-wiki-term-research/`: QA Wiki 词条调研与合成
- `archive/`: 已完成的历史规划文档（需求 / 设计 / 任务 / 计划 / 规格），按主题归档，见 `archive/README.md`
- `temporary/`: 临时产物与脚本输出，见下表

## temporary/ 内容说明

| 目录 | 内容 | 维护方式 |
| --- | --- | --- |
| `temporary/blog/` | 9 个博客系列双语草稿（标「发布版」，尚未迁入 `src/blog/`） | 手工迁移后删除 |
| `temporary/qa-wiki/` | 41 个 Wiki 词条的合成页面 | 词条上站后可按需清理 |
| `temporary/qa-wiki-temp/` | 词条调研工作簿与抓取缓存（含 385KB 缓存文件） | 同上 |
| `temporary/issue/` | `scripts/wiki-aiwiki-integrity-check.mjs` 的检查报告输出 | 脚本自动生成，勿手工编辑 |
| `temporary/seo/` | `scripts/seo-static-check.mjs` 的基线报告与模板 | 脚本自动生成，勿手工编辑 |

## 约定

- 新的长期文档放入 `docs/` 对应目录；规范类进 `standards/`，模板类进 `architecture/`。
- 已完成的计划、规格、需求、设计、任务文档移入 `docs/archive/`，不再留在顶层目录。
- 文档内引用路径使用当前目录结构；归档移动时必须同步修正引用。
- 脚本输出一律写入 `temporary/`，不放入长期目录。
