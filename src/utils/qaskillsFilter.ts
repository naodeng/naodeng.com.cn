export type QASkillCategory = "type" | "workflow" | "plus";

export type QASkillFilterInput = {
  slug: string;
  title: string;
  chineseName: string;
  category: QASkillCategory;
  intro: string;
  hasEvals: boolean;
};

export type QASkillFilterOptions = {
  query: string;
  category: "all" | QASkillCategory;
  evalsOnly: boolean;
};

export function filterQASkills<T extends QASkillFilterInput>(
  skills: T[],
  options: QASkillFilterOptions
): T[] {
  const q = options.query.trim().toLowerCase();
  return skills.filter((skill) => {
    if (options.category !== "all" && skill.category !== options.category) return false;
    if (options.evalsOnly && !skill.hasEvals) return false;
    if (!q) return true;
    const haystack = [skill.slug, skill.title, skill.chineseName, skill.intro]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

/** 查询非空、选择了分类或勾选了 eval 筛选任一成立即视为搜索态。 */
export function isQASkillSearchActive(state: QASkillFilterOptions): boolean {
  return state.query.trim().length > 0 || state.category !== "all" || state.evalsOnly;
}

/**
 * 只有当数据中同时存在"含评测用例"与"不含"两种 skill 时，
 * eval 筛选才有区分度，才值得渲染筛选 chip。
 */
export function shouldShowEvalsFilter(
  skills: ReadonlyArray<{ hasEvals: boolean }>
): boolean {
  if (skills.length === 0) return false;
  return skills.some((s) => s.hasEvals) && skills.some((s) => !s.hasEvals);
}
