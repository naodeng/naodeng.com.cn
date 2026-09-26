import type { CollectionEntry } from "astro:content";
import type { Lang } from "@/i18n";
import type { DocsNavSection } from "@/data/docsNav";

export type AiQaWeeklyEntry = CollectionEntry<"aiQaWeekly">;

export function sortAiQaWeeklyEntries(entries: AiQaWeeklyEntry[]): AiQaWeeklyEntry[] {
  return [...entries].sort((a, b) => {
    const periodDiff = b.data.periodStart.valueOf() - a.data.periodStart.valueOf();
    if (periodDiff !== 0) return periodDiff;
    return b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();
  });
}

export function formatWeeklyDate(value: Date, locale: Lang): string {
  return new Intl.DateTimeFormat(locale === "zh-cn" ? "zh-CN" : "en-US", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(value);
}

export function formatWeeklyPeriod(entry: AiQaWeeklyEntry, locale: Lang): string {
  const start = formatWeeklyDate(entry.data.periodStart, locale);
  const end = formatWeeklyDate(entry.data.periodEnd, locale);
  return locale === "zh-cn"
    ? `${start} 至 ${end}（${entry.data.timeZone}）`
    : `${start} to ${end} (${entry.data.timeZone})`;
}

export function formatWeeklyIssueLabel(entry: AiQaWeeklyEntry, locale: Lang): string {
  return locale === "zh-cn"
    ? `${entry.data.periodStart.getUTCFullYear()}年第 ${entry.data.weekNumber} 周`
    : `${entry.data.periodStart.getUTCFullYear()} Week ${entry.data.weekNumber}`;
}

export function buildAiQaWeeklySidebar(
  entries: AiQaWeeklyEntry[],
  locale: Lang,
): DocsNavSection[] {
  const sorted = sortAiQaWeeklyEntries(entries);
  return [
    {
      title: locale === "zh-cn" ? "按周期浏览" : "Browse by period",
      items: sorted.map((entry) => ({
        label: formatWeeklyIssueLabel(entry, locale),
        href: entry.data.slug,
      })),
    },
  ];
}

export function isoDate(value: Date): string {
  return value.toISOString().slice(0, 10);
}
