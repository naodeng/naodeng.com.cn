/**
 * Guild 数据处理工具函数
 */
import type { DocsNavSection } from "@/data/docsNav";
import { getGuildConfig, learningStages, difficultyLevels } from "@/config/guild.config";
import type { Lang } from "@/i18n";

import type { CollectionEntry } from "astro:content";

export type GuildEntry = CollectionEntry<"guild">;

/**
 * 从 guild 条目 id 得到 URL slug
 * id 格式: zh-cn/api-testing/postman/getting-started
 * 返回: api-testing/postman/getting-started (移除 locale 前缀)
 */
export function guildIdToSlug(id: string): string {
  // 移除 locale 前缀 (zh-cn/ 或 en/)
  const parts = id.split("/");
  if (parts.length > 1 && (parts[0] === "zh-cn" || parts[0] === "en")) {
    return parts.slice(1).join("/");
  }
  return id;
}

/**
 * 从 slug 解析出 testType, framework, articleSlug
 */
export function parseGuildSlug(slug: string): {
  testType: string;
  framework: string;
  articleSlug: string;
} | null {
  const parts = slug.split("/");
  if (parts.length < 3) return null;
  return {
    testType: parts[0],
    framework: parts[1],
    articleSlug: parts.slice(2).join("/"),
  };
}

/**
 * 根据 locale 和 testType/framework 过滤条目
 */
export function filterGuildEntries(
  entries: GuildEntry[],
  locale: Lang,
  testType?: string,
  framework?: string
): GuildEntry[] {
  return entries.filter((entry) => {
    // id 格式: zh-cn/api-testing/postman/getting-started
    // 或: en/api-testing/postman/getting-started
    const parts = entry.id.split("/");
    if (parts.length < 3) return false;
    
    const entryLocale = parts[0];
    if (entryLocale !== locale) return false;
    if (testType && entry.data.testType !== testType) return false;
    if (framework && entry.data.framework !== framework) return false;
    return true;
  });
}

/**
 * 构建 Guild 侧栏导航
 * 按 testType > framework > stage 分组
 */
export function buildGuildSidebar(
  entries: GuildEntry[],
  locale: Lang,
  currentTestType?: string,
  currentFramework?: string
): DocsNavSection[] {
  const config = getGuildConfig(locale);
  const stages = learningStages[locale as keyof typeof learningStages];
  
  // 找到当前测试类型和框架
  const testTypeConfig = config.testTypes.find((t) => t.id === currentTestType);
  if (!testTypeConfig) return [];
  
  const frameworkConfig = testTypeConfig.frameworks.find((f) => f.id === currentFramework);
  if (!frameworkConfig) return [];

  // 过滤当前框架的文章
  const frameworkEntries = filterGuildEntries(entries, locale, currentTestType, currentFramework);
  
  // 按 stage 分组
  const byStage = new Map<string, GuildEntry[]>();
  frameworkEntries.forEach((entry) => {
    const stage = entry.data.stage || "getting-started";
    const list = byStage.get(stage) || [];
    list.push(entry);
    byStage.set(stage, list);
  });

  // 按 order 排序每个 stage 的文章
  byStage.forEach((list) => {
    list.sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  });

  // 构建侧栏结构
  const sections: DocsNavSection[] = [];
  
  // 概述部分
  sections.push({
    items: [
      {
        label: locale === "zh-cn" ? "概述" : "Overview",
        href: `${currentTestType}/${currentFramework}`,
      },
    ],
  });

  // 按 stage 顺序添加
  const stageOrder = ["getting-started", "basic", "advanced", "ci-cd", "best-practices"];
  stageOrder.forEach((stageKey) => {
    const stageEntries = byStage.get(stageKey);
    if (!stageEntries || stageEntries.length === 0) return;

    sections.push({
      title: stages[stageKey as keyof typeof stages] || stageKey,
      items: stageEntries.map((entry) => {
        const slug = guildIdToSlug(entry.id);
        // 简化标题：提取冒号后面的部分，如果没有冒号则使用原标题
        let label = entry.data.title;
        const chineseColonIndex = label.indexOf('：');
        const englishColonIndex = label.indexOf(':');
        
        if (chineseColonIndex > 0) {
          label = label.substring(chineseColonIndex + 1).trim();
        } else if (englishColonIndex > 0) {
          label = label.substring(englishColonIndex + 1).trim();
        }
        
        return {
          label: label,
          href: slug,
        };
      }),
    });
  });

  return sections;
}

/**
 * 获取前一篇和后一篇文章
 */
export function getAdjacentArticles(
  entries: GuildEntry[],
  locale: Lang,
  testType: string,
  framework: string,
  currentSlug: string
): { prev?: GuildEntry; next?: GuildEntry } {
  const frameworkEntries = filterGuildEntries(entries, locale, testType, framework);
  
  // 按 stage 和 order 排序
  const stageOrder = ["getting-started", "basic", "advanced", "ci-cd", "best-practices"];
  const sorted = frameworkEntries.sort((a, b) => {
    const stageA = stageOrder.indexOf(a.data.stage) ?? 999;
    const stageB = stageOrder.indexOf(b.data.stage) ?? 999;
    if (stageA !== stageB) return stageA - stageB;
    return (a.data.order || 999) - (b.data.order || 999);
  });

  const currentIndex = sorted.findIndex((e) => guildIdToSlug(e.id) === currentSlug);
  if (currentIndex === -1) return {};

  return {
    prev: currentIndex > 0 ? sorted[currentIndex - 1] : undefined,
    next: currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : undefined,
  };
}

/**
 * 获取学习阶段显示名称
 */
export function getStageName(stage: string, locale: Lang): string {
  const stages = learningStages[locale as keyof typeof learningStages];
  return stages[stage as keyof typeof stages] || stage;
}

/**
 * 获取难度级别显示名称
 */
export function getDifficultyName(difficulty: string, locale: Lang): string {
  const levels = difficultyLevels[locale as keyof typeof difficultyLevels];
  return levels[difficulty as keyof typeof levels] || difficulty;
}
