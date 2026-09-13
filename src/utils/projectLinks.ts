import type { Lang } from "@/i18n";
import type { ProjectItem } from "@/data/projects";

export function isExternalProject(project: ProjectItem): boolean {
  return project.kind !== "internal";
}

export function getProjectHref(locale: Lang, project: ProjectItem): string {
  return isExternalProject(project) ? project.url : `/${locale}${project.url}`;
}
