import type { DocsNavSection } from "@/data/docsNav";

/**
 * 测试百科：从 slug（文件名）得到英文标题，用于排序
 * 例如 acceptance-test-driven-development -> Acceptance Test Driven Development
 */
export function slugToTitleEn(slug: string): string {
  return slug
    .split(/[-_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * 从标题字符串中只取中文展示部分（去掉 ｜ 或括号后的英文）
 * 例如 "验收测试 ｜ Acceptance Testing" → "验收测试"，"A/B 测试 (A/B Testing)" → "A/B 测试"
 */
export function getTitleZh(titleOrCombined: string): string {
  if (!titleOrCombined || typeof titleOrCombined !== "string") return "";
  const s = titleOrCombined.replace(/^#\s+/, "").trim();
  const byBar = s.split("｜")[0]?.trim();
  if (byBar && byBar !== s) return byBar;
  const byParen = s.split("(")[0]?.trim();
  if (byParen && byParen !== s) return byParen;
  return s || "";
}

/**
 * 从词条正文首行（# 中文名 ｜ English 或 # 中文名 (English)）提取中文名称
 */
export function getTitleZhFromBody(body: string | undefined): string {
  if (!body || typeof body !== "string") return "";
  const firstLine = body.split("\n")[0] ?? "";
  const match = firstLine.match(/^#\s+(.+)$/);
  return match ? getTitleZh(match[1].trim()) : "";
}

/** 取英文标题首字母（A-Z），非字母归为 # */
function firstLetterEn(slug: string): string {
  const first = slugToTitleEn(slug).charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : "#";
}

/** 从 wiki 条目 id 得到 URL slug（content.config 中 generateId 使用前缀 wiki--） */
export function wikiIdToSlug(id: string): string {
  return id.startsWith("wiki--") ? id.slice(6) : id.replace(/\.md$/, "");
}

/** 根据 wiki 词条列表生成侧栏（按英文首字母分组、组内按英文排序，展示中文名称），用于 Docs 布局 */
export function buildWikiSidebar(
  entries: { id: string; body?: string; data?: { title?: string } }[]
): DocsNavSection[] {
  const slugFromId = wikiIdToSlug;
  const sorted = [...entries].sort((a, b) => {
    const slugA = slugFromId(a.id);
    const slugB = slugFromId(b.id);
    return slugToTitleEn(slugA).localeCompare(slugToTitleEn(slugB), "en");
  });
  const overview: DocsNavSection = {
    items: [{ label: "概述", href: "" }],
  };
  const byLetter = new Map<string, { label: string; href: string }[]>();
  for (const e of sorted) {
    const slug = slugFromId(e.id);
    const letter = firstLetterEn(slug);
    const list = byLetter.get(letter) ?? [];
    const labelZh =
      getTitleZhFromBody(e.body) || getTitleZh(e.data?.title ?? "") || slugToTitleEn(slug);
    list.push({
      label: labelZh,
      href: slug,
    });
    byLetter.set(letter, list);
  }
  const letterOrder = [...byLetter.keys()].sort((a, b) => (a === "#" ? 1 : b === "#" ? -1 : a.localeCompare(b)));
  const letterSections: DocsNavSection[] = letterOrder.map((title) => ({
    title,
    items: byLetter.get(title)!,
  }));
  return [overview, ...letterSections];
}
