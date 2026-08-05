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
