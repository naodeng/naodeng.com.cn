import type { QASkillCategory } from "@/utils/qaskillsFilter";

export type RelatedSkillInput = {
  slug: string;
  category: QASkillCategory;
  subgroup: string;
};

export function getRelatedQASkills<T extends RelatedSkillInput>(
  skills: T[],
  currentSlug: string,
  limit = 5
): T[] {
  const current = skills.find((s) => s.slug === currentSlug);
  if (!current) return [];
  const others = skills.filter((s) => s.slug !== currentSlug);
  const sameSub = others.filter((s) => current.subgroup && s.subgroup === current.subgroup);
  const sameCat = others.filter((s) => s.category === current.category && !sameSub.includes(s));
  const rest = others.filter((s) => !sameSub.includes(s) && !sameCat.includes(s));
  return [...sameSub, ...sameCat, ...rest].slice(0, limit);
}
