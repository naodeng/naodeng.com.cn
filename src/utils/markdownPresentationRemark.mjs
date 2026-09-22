function normalized(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ");
}

function sourcePath(file) {
  return String(file?.path ?? file?.history?.[0] ?? "").replaceAll("\\", "/");
}

function frontmatterTitle(file) {
  const data = file?.data ?? {};
  return data.astro?.frontmatter?.title ?? data.frontmatter?.title;
}

function textFromNode(node) {
  if (!node) return "";
  if (node.type === "text" || node.type === "inlineCode") return node.value ?? "";
  return Array.isArray(node.children) ? node.children.map(textFromNode).join("") : "";
}

function isHtmlMarker(node, marker) {
  return node?.type === "html" && String(node.value ?? "").includes(marker);
}

function removeGeneratedToc(tree) {
  const children = Array.isArray(tree.children) ? tree.children : [];
  const start = children.findIndex((node) => isHtmlMarker(node, "TOC START"));
  if (start < 0) return;

  const end = children.findIndex((node, index) => index > start && isHtmlMarker(node, "TOC END"));
  if (end < 0) return;
  children.splice(start, end - start + 1);
}

function normalizeWikiHeadings(tree) {
  let hasTitle = false;
  const visit = (node) => {
    if (!node || typeof node !== "object") return;
    if (node.type === "heading" && node.depth === 1) {
      if (!hasTitle) {
        hasTitle = true;
      } else {
        node.depth = 2;
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(visit);
  };

  visit(tree);
}

function removeTitleHeading(tree, file, force = false) {
  const children = Array.isArray(tree.children) ? tree.children : [];
  const index = children.findIndex((node) => node?.type === "heading" && node.depth === 1);
  if (index < 0) return;

  const expectedTitle = frontmatterTitle(file);
  const headingText = normalized(textFromNode(children[index]));
  if (!force && expectedTitle && headingText !== normalized(expectedTitle)) return;
  children.splice(index, 1);
}

/**
 * Keep source-only presentation artifacts out of the published HTML.
 * Wiki files already have a generated sidebar TOC, while prompt and blog
 * templates render the canonical page title themselves.
 */
export default function markdownPresentationRemark() {
  return (tree, file) => {
    const path = sourcePath(file);

    if (path.includes("/src/content/wiki/")) {
      removeGeneratedToc(tree);
      normalizeWikiHeadings(tree);
    }

    if (path.includes("/src/blog/")) {
      removeTitleHeading(tree, file, true);
    }

    if (
      path.includes("/src/content/prompts/") ||
      path.includes("/src/content/workflows/") ||
      path.includes("/src/content/guild/")
    ) {
      removeTitleHeading(tree, file);
    }
  };
}

export { normalizeWikiHeadings, removeGeneratedToc, removeTitleHeading };
