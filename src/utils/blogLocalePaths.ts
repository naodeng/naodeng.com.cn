type BlogEntry = { id: string; data: { tags?: string[]; series?: string[] } };
type Destination = { path: string; isEquivalent: boolean };

// These translations predate the shared bilingual filenames. Keep their URLs stable.
const historicalPairs = [
  ["gatling-tool-tutorial1", "gatling-tool-intro1"],
  ["gatling-tool-tutorial2", "gatling-tool-intro2"],
  ["gatling-tool-tutorial-advanced-usage", "gatling-tool-intro-advanced-usage"],
  ["gatling-tool-tutorial-ci-cd-integration", "gatling-tool-intro-ci-cd-integration"],
];

/** Resolve public blog destinations without guessing translations from tag or series names. */
export function createBlogLocaleResolver(posts: BlogEntry[], pageSize: number) {
  const articles = new Set(posts.map(post => post.id.toLowerCase()));
  const groups = new Map<string, number>();
  const totals = new Map<string, number>();
  for (const post of posts) {
    const lang = post.id.split("/")[0];
    totals.set(lang, (totals.get(lang) ?? 0) + 1);
    for (const [section, labels] of [["tags", post.data.tags], ["series", post.data.series]] as const) {
      for (const label of new Set(labels ?? [])) {
        const key = `${lang}/${section}/${label}`;
        groups.set(key, (groups.get(key) ?? 0) + 1);
      }
    }
  }

  return (pathname: string, targetLang: string): Destination | null => {
    const match = pathname.match(/^\/(en|zh-cn)\/(blog|tags|series)(?:\/(.*?))?\/?$/);
    if (!match) return null;
    const [, sourceLang, section, tail = ""] = match;
    const destination = `/${targetLang}/${section}/`;
    if (!tail) return { path: destination, isEquivalent: true };
    if (sourceLang === targetLang) return { path: pathname, isEquivalent: true };

    if (section === "blog") {
      const pagination = tail.match(/^page\/(\d+)$/);
      if (pagination) {
        const available = Number(pagination[1]) <= Math.ceil((totals.get(targetLang) ?? 0) / pageSize);
        return { path: available ? `${destination}${tail}/` : destination, isEquivalent: available };
      }
      let article = tail.toLowerCase();
      if (!articles.has(`${targetLang}/${article}`) && article.startsWith("performance-testing/")) {
        const sourceIndex = sourceLang === "en" ? 0 : 1;
        const pair = historicalPairs.find(pair => article === `performance-testing/${pair[sourceIndex]}`);
        if (pair) article = `performance-testing/${pair[1 - sourceIndex]}`;
      }
      const available = articles.has(`${targetLang}/${article}`);
      return { path: available ? `${destination}${article}/` : destination, isEquivalent: available };
    }

    const group = tail.match(/^(.*?)(?:\/page\/(\d+))?$/)!;
    const label = decodeURIComponent(group[1]);
    const count = groups.get(`${targetLang}/${section}/${label}`) ?? 0;
    if (!count) return { path: destination, isEquivalent: false };
    const available = Number(group[2] ?? 1) <= Math.ceil(count / pageSize);
    const base = `${destination}${encodeURIComponent(label)}/`;
    return {
      path: available && group[2] ? `${base}page/${group[2]}/` : base,
      isEquivalent: available,
    };
  };
}
