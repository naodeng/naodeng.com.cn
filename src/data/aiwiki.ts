import type { DocsNavSection } from "@/data/docsNav";
import type { Lang } from "@/i18n";

export interface AiWikiEntryLike {
  id: string;
  body?: string;
  data?: {
    title?: string;
    titleEn?: string;
    titleZh?: string;
    lang?: "en" | "zh-cn";
  };
}

export function slugToTitleEn(slug: string): string {
  return slug
    .split(/[-_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function aiwikiIdToSlug(id: string): string {
  return id.split("/").pop()?.replace(/\.md$/, "") ?? id;
}

export function aiwikiIdToLang(id: string): Lang {
  return id.startsWith("zh-cn/") ? "zh-cn" : "en";
}

function firstLetterEn(slug: string): string {
  const first = slugToTitleEn(slug).charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : "#";
}

function getTitleFromBody(body?: string): string {
  if (!body) return "";
  const firstLine = body.split("\n")[0] ?? "";
  const match = firstLine.match(/^#\s+(.+)$/);
  return match ? match[1].trim() : "";
}

export function getAiWikiDisplayTitle(entry: AiWikiEntryLike, locale: Lang): string {
  const bodyTitle = getTitleFromBody(entry.body);

  if (locale === "zh-cn") {
    return (
      entry.data?.titleZh ||
      entry.data?.title ||
      (bodyTitle.includes("（") ? bodyTitle.split("（")[0].trim() : bodyTitle) ||
      slugToTitleEn(aiwikiIdToSlug(entry.id))
    );
  }

  return (
    entry.data?.titleEn ||
    entry.data?.title ||
    (bodyTitle.includes("(") ? bodyTitle.split("(")[0].trim() : bodyTitle) ||
    slugToTitleEn(aiwikiIdToSlug(entry.id))
  );
}

export function buildAiWikiSidebar(entries: AiWikiEntryLike[], locale: Lang): DocsNavSection[] {
  const localeEntries = entries
    .filter((e) => (e.data?.lang ? e.data.lang === locale : aiwikiIdToLang(e.id) === locale))
    .sort((a, b) => {
      const slugA = aiwikiIdToSlug(a.id);
      const slugB = aiwikiIdToSlug(b.id);
      return slugToTitleEn(slugA).localeCompare(slugToTitleEn(slugB), "en");
    });

  const overviewLabel = locale === "zh-cn" ? "概述" : "Overview";
  const overview: DocsNavSection = { items: [{ label: overviewLabel, href: "" }] };

  const byLetter = new Map<string, { label: string; href: string }[]>();

  for (const entry of localeEntries) {
    const slug = aiwikiIdToSlug(entry.id);
    const letter = firstLetterEn(slug);
    const group = byLetter.get(letter) ?? [];
    group.push({ label: getAiWikiDisplayTitle(entry, locale), href: slug });
    byLetter.set(letter, group);
  }

  const letterOrder = [...byLetter.keys()].sort((a, b) => (a === "#" ? 1 : b === "#" ? -1 : a.localeCompare(b)));
  const sections: DocsNavSection[] = letterOrder.map((title) => ({
    title,
    items: byLetter.get(title) ?? [],
  }));

  return [overview, ...sections];
}
