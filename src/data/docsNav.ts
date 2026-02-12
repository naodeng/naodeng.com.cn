/**
 * 文档侧栏导航配置，可作为模版复用于多个文档集合。
 * 参考：https://docs.astro.build/en/getting-started/
 */
import type { Lang } from "@/i18n";

export interface DocsNavItem {
  /** 显示文案（可多语言 key，由调用方根据 locale 解析） */
  label: string;
  /** 链接路径（相对当前 locale 的 docs 根，如 "" 或 "getting-started"） */
  href?: string;
  /** 子项 */
  children?: DocsNavItem[];
}

/** 当前文档集的侧栏结构（label 为最终展示文案，已按 locale 区分） */
export interface DocsNavSection {
  title?: string;
  items: { label: string; href: string }[];
}

const GETTING_STARTED_NAV: Record<Lang, DocsNavSection[]> = {
  en: [
    {
      title: "Start",
      items: [
        { label: "Overview", href: "" },
        { label: "Why Astro?", href: "why-astro" },
        { label: "Installation", href: "installation" },
        { label: "Project structure", href: "project-structure" },
      ],
    },
    {
      title: "Guides",
      items: [
        { label: "Configuration", href: "configuration" },
        { label: "Routing", href: "routing" },
      ],
    },
  ],
  "zh-cn": [
    {
      title: "入门",
      items: [
        { label: "概述", href: "" },
        { label: "为什么选择 Astro？", href: "why-astro" },
        { label: "安装", href: "installation" },
        { label: "项目结构", href: "project-structure" },
      ],
    },
    {
      title: "指南",
      items: [
        { label: "配置", href: "configuration" },
        { label: "路由", href: "routing" },
      ],
    },
  ],
};

/**
 * 获取「入门 / Getting started」文档的侧栏导航（静态配置）。
 * 后续可扩展 getXxxDocsNav(locale) 用于其他文档集。
 */
export function getDocsNav(locale: Lang): DocsNavSection[] {
  return GETTING_STARTED_NAV[locale] ?? GETTING_STARTED_NAV.en;
}

/** 从 content collection 条目 id 得到 URL slug（无扩展名，index 转为 ""） */
export function docIdToSlug(id: string, lang: Lang): string {
  const prefix = `${lang}/`;
  if (!id.startsWith(prefix)) return "";
  const rest = id.slice(prefix.length).replace(/\.(md|mdx)$/, "");
  return rest === "index" ? "" : rest;
}

/** 由 docs collection 按 lang 分组、排序后生成侧栏结构（用于 Markdown 文档） */
export function buildDocsNavFromCollection(
  entries: { id: string; data: { title: string; section?: string; order?: number } }[],
  lang: Lang
): DocsNavSection[] {
  const prefix = `${lang}/`;
  const list = entries
    .filter((e) => e.id.startsWith(prefix))
    .map((e) => ({
      title: e.data.title,
      href: docIdToSlug(e.id, lang),
      section: e.data.section ?? "",
      order: e.data.order ?? 999,
    }))
    .sort((a, b) => {
      if (a.section !== b.section) return (a.section || "").localeCompare(b.section || "");
      return a.order - b.order;
    });
  const sections: DocsNavSection[] = [];
  let currentSection = "";
  let items: { label: string; href: string }[] = [];
  for (const item of list) {
    if (item.section !== currentSection) {
      if (items.length) sections.push({ title: currentSection, items });
      currentSection = item.section;
      items = [];
    }
    items.push({ label: item.title, href: item.href });
  }
  if (items.length) sections.push({ title: currentSection, items });
  return sections;
}
