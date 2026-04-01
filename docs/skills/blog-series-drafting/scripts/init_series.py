#!/usr/bin/env python3
"""Initialize a bilingual 6-article testing blog series scaffold.

Usage example:
  python3 scripts/init_series.py \
    --root /Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn \
    --slug page-agent-testing \
    --series-title "Page Agent 在软件测试中的应用" \
    --status "草稿"
"""

from __future__ import annotations

import argparse
from pathlib import Path

FILES = [
    ("00", "introduction", "介绍", "Introduction"),
    ("01", "getting-started", "入门", "Getting Started"),
    ("02", "from-0-to-1", "从 0 到 1", "From 0 to 1"),
    ("03", "advanced", "进阶", "Advanced"),
    ("04", "in-ci-cd", "CI/CD", "In CI/CD"),
    ("05", "more-use-cases", "更多用法", "More Use Cases"),
]


def article_template_zh(series_title: str, status: str, topic: str, prev_file: str | None, next_file: str | None) -> str:
    nav_lines = []
    if prev_file:
        nav_lines.append(f"- 上一篇：`{prev_file}`")
    if next_file:
        nav_lines.append(f"- 下一篇：`{next_file}`")
    if not nav_lines:
        nav_lines.append("- 系列起点：`00-*.md`")

    nav = "\n".join(nav_lines)
    return f'''# {series_title}：{topic}

## 文章定位

- 系列：{series_title}
- 状态：{status}
- 主题：{topic}

## 导读

这篇聚焦「{topic}」阶段，说明核心目标、实践方法与落地边界。

## 一、没有该工具前，通常怎么做

（补充现状与痛点）

## 二、引入该工具后，发生了哪些变化

（补充能力变化、流程变化、协作变化）

## 三、好的实践

（补充可复制的方法与步骤）

## 四、可能存在的问题

（补充风险、边界、适用条件）

## 五、总结

（补充结论与下一步建议）

## 系列导航

{nav}

## 参考资料

- 官方文档链接 1
- 官方文档链接 2
'''


def article_template_en(series_title: str, status: str, topic: str, prev_file: str | None, next_file: str | None) -> str:
    nav_lines = []
    if prev_file:
        nav_lines.append(f"- Previous: `{prev_file}`")
    if next_file:
        nav_lines.append(f"- Next: `{next_file}`")
    if not nav_lines:
        nav_lines.append("- Series start: `00-*.md`")

    nav = "\n".join(nav_lines)
    return f'''# {series_title}: {topic}

## Article Positioning

- Series: {series_title}
- Status: {status}
- Topic: {topic}

## Overview

This article focuses on the "{topic}" stage, explaining the goal, practical approach, and implementation boundaries.

## One. What teams usually do before this tool

(Add the current workflow and pain points)

## Two. What changes after introducing this tool

(Add capability changes, process changes, and collaboration changes)

## Three. Good practices

(Add repeatable methods and practical steps)

## Four. Possible problems

(Add risks, boundaries, and fit conditions)

## Five. Summary

(Add the conclusion and next-step suggestions)

## Series Navigation

{nav}

## References

- Official documentation link 1
- Official documentation link 2
'''


def readme_template(series_title: str, slug: str) -> str:
    return f'''# {series_title} Series

这个目录用于存放 `{series_title}` 系列草稿与发布版文案。

## 目录说明

- 系列 slug：`{slug}`
- 语言目录：`zh-cn/` 与 `en/`
- 每种语言建议结构：00~05 六篇

## 规划主题

- 00 介绍
- 01 入门
- 02 从 0 到 1
- 03 进阶
- 04 CI/CD
- 05 更多用法
'''


def main() -> None:
    parser = argparse.ArgumentParser(description="Initialize bilingual 6-part testing blog series scaffold")
    parser.add_argument("--root", required=True, help="Project root path")
    parser.add_argument("--slug", required=True, help="Series folder slug under docs/temporary/blog")
    parser.add_argument("--series-title", required=True, help="Series title in Chinese")
    parser.add_argument("--series-title-en", help="Series title in English; defaults to --series-title")
    parser.add_argument("--status", default="草稿", help="Article status, e.g. 草稿/发布版")
    parser.add_argument("--force", action="store_true", help="Overwrite existing files")
    args = parser.parse_args()

    en_series_title = args.series_title_en or args.series_title

    base = Path(args.root) / "docs" / "temporary" / "blog" / args.slug
    zh_base = base / "zh-cn"
    en_base = base / "en"
    zh_base.mkdir(parents=True, exist_ok=True)
    en_base.mkdir(parents=True, exist_ok=True)

    file_names = [f"{num}-{args.slug.replace('-testing', '').replace(' ', '-')}-{suffix}.md" for num, suffix, _, _ in FILES]

    for idx, (num, suffix, zh_topic, en_topic) in enumerate(FILES):
        name = file_names[idx]
        prev_file = file_names[idx - 1] if idx > 0 else None
        next_file = file_names[idx + 1] if idx < len(FILES) - 1 else None
        zh_path = zh_base / name
        en_path = en_base / name
        if not zh_path.exists() or args.force:
            zh_path.write_text(article_template_zh(args.series_title, args.status, zh_topic, prev_file, next_file), encoding="utf-8")
        if not en_path.exists() or args.force:
            en_path.write_text(article_template_en(en_series_title, args.status, en_topic, prev_file, next_file), encoding="utf-8")

    readme = base / "README.md"
    if not readme.exists() or args.force:
        readme.write_text(readme_template(args.series_title, args.slug), encoding="utf-8")

    print(f"Initialized series scaffold at: {base}")


if __name__ == "__main__":
    main()
