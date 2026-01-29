# 项目内容梳理与可删除项说明

## 已删除（本次执行）

| 路径 | 说明 |
|------|------|
| `configTaxo.yml` | 旧配置片段（taxonomies/privacy），未被 config.yml 引用，已合并或废弃 |
| `config.toml.bk` | 旧项目备份（naodeng.tech、Anatole 主题），与当前站点无关 |
| `layouts/partials/custom/footer.html` | 与 `layouts/_partials/custom/footer.html` 重复；Hugo 0.146+ 使用 `_partials`，实际生效的是后者 |

---

## 建议处理（可选）

### 1. 主题 PaperMod 未使用

- **位置**：`themes/PaperMod/`
- **说明**：当前 `config.yml` 使用 `theme: hextra`，PaperMod 为历史遗留子模块，可移除以减小仓库体积。
- **操作**（若确定不再使用）：
  ```bash
  git submodule deinit themes/PaperMod
  git rm themes/PaperMod
  git commit -m "chore: remove unused PaperMod theme submodule"
  ```

### 2. 构建产物与缓存

- **`public/`**：Hugo 构建输出，建议在项目根目录 `.gitignore` 中加入 `public/`（若尚未加入）。
- **`resources/_gen/`**：Hugo 资源生成缓存，建议在根目录 `.gitignore` 中加入 `resources/_gen/`，避免提交到仓库。

### 3. 静态文件命名

- **`static/baidu_verify_codeva-JOQnuNq77o.html.html`**：扩展名重复（`.html.html`）。若为百度站长验证文件，通常应为 `.html`；可重命名为 `baidu_verify_codeva-JOQnuNq77o.html` 并确认验证仍有效。

---

## 保留说明（不建议删）

| 路径 | 说明 |
|------|------|
| `layouts/partials/`（navbar-title.html、head-end.html） | 当前站点自定义；部分 Hugo 版本或主题仍从 `partials` 加载，保留以免导航/头部失效 |
| `static/c4c085c9a15ce7307e6d767b54e218a4.txt` | 疑似第三方验证或占位文件，未确认用途前建议保留 |
| `content/blog/`、`content/about/` 等 | 站点正文与关于页，需保留 |

---

*文档生成于项目梳理时，后续若有结构变更可据此更新。*
