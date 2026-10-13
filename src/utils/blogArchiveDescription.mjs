const localizedSeriesNames = {
  "测试理论指南": {
    en: "Software Testing Theory Guide",
    "zh-cn": "测试理论指南",
  },
};

/** Keep archive URLs based on the source name while localizing visible series text. */
export function getBlogSeriesDisplayName(name, lang) {
  return localizedSeriesNames[name]?.[lang] ?? name;
}

/**
 * @param {{
 *   kind: "tag" | "series",
 *   name: string,
 *   totalItems: number,
 *   currentPage: number,
 *   totalPages: number,
 *   lang: string,
 * }} options
 */
export function buildBlogArchiveDescription({ kind, name, totalItems, currentPage, totalPages, lang }) {
  const pageContext = currentPage > 1
    ? lang === "zh-cn" ? `第 ${currentPage}/${totalPages} 页：` : `Page ${currentPage} of ${totalPages}: `
    : "";
  const postLabel = totalItems === 1 ? "post" : "posts";

  if (lang === "zh-cn") {
    return kind === "tag"
      ? `${pageContext}浏览“${name}”标签下的 ${totalItems} 篇文章，涵盖软件测试、AI 测试、工具教程与工程实践。`
      : `${pageContext}阅读“${name}”系列的 ${totalItems} 篇文章，了解软件测试与 AI 测试方法、工具和项目实践。`;
  }

  return kind === "tag"
    ? `${pageContext}Browse ${totalItems} ${postLabel} tagged “${name}” on software testing and AI testing, including tutorials, tools, and project practices.`
    : `${pageContext}Read ${totalItems} ${postLabel} in the “${name}” series, covering software testing and AI testing methods, tools, and project practices.`;
}
