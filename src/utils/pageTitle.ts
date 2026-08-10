export type PageTitleMode = "append-site" | "absolute";

export function buildPageTitle(
  title: string | undefined,
  siteTitle: string,
  mode: PageTitleMode = "append-site",
): string {
  if (!title) return siteTitle;
  return mode === "absolute" ? title : `${title} | ${siteTitle}`;
}
