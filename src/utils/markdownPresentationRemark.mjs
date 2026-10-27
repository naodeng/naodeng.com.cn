import {
  assignStableHeadingIds,
  markdownTextFromNode,
  normalizeWikiHeadings,
} from "./markdownTitleMetadata.mjs";

function normalized(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ");
}

function sourcePath(file) {
  return [file?.path, ...(Array.isArray(file?.history) ? file.history : [])]
    .filter(Boolean)
    .map(String)
    .join(" ")
    .replaceAll("\\", "/");
}

function hasSourcePath(path, sourceDirectory) {
  return new RegExp(`(?:^|/)src/${sourceDirectory}/`).test(path);
}

function frontmatterTitle(file) {
  const data = file?.data ?? {};
  return data.astro?.frontmatter?.title ?? data.frontmatter?.title;
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

function removeTitleHeading(tree, file, force = false) {
  const children = Array.isArray(tree.children) ? tree.children : [];
  const index = children.findIndex((node) => node?.type === "heading" && node.depth === 1);
  if (index < 0) return;

  const expectedTitle = frontmatterTitle(file);
  const headingText = normalized(markdownTextFromNode(children[index]));
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

    const isWiki = hasSourcePath(path, "content/wiki");
    const isAiWiki = hasSourcePath(path, "content/aiwiki");

    if (isWiki) {
      removeGeneratedToc(tree);
      normalizeWikiHeadings(tree);
    }

    if (isWiki || isAiWiki) {
      const titleMetadata = assignStableHeadingIds(tree);
      if (file?.data?.astro) {
        file.data.astro.frontmatter = {
          ...(file.data.astro.frontmatter ?? {}),
          __detailPageTitle: titleMetadata,
        };
      }
      removeTitleHeading(tree, file, true);
    }

    if (hasSourcePath(path, "blog")) {
      removeTitleHeading(tree, file, true);
    }

    if (
      hasSourcePath(path, "content/prompts") ||
      hasSourcePath(path, "content/workflows") ||
      hasSourcePath(path, "content/guild")
    ) {
      removeTitleHeading(tree, file);
    }
  };
}

export { normalizeWikiHeadings, removeGeneratedToc, removeTitleHeading };
