import GithubSlugger from "github-slugger";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkSmartypants from "remark-smartypants";
import { unified } from "unified";

const markdownParser = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkSmartypants);

function normalized(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ");
}

function decodeHtmlEntities(value) {
  return value.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (entity, code) => {
    if (code[0] === "#") {
      const hex = code[1]?.toLowerCase() === "x";
      const point = Number.parseInt(code.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isFinite(point) ? String.fromCodePoint(point) : entity;
    }
    return ({ amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: "\u00a0" })[code.toLowerCase()] ?? entity;
  });
}

/** Text content used by rehype-slug for a Markdown heading. */
export function markdownTextFromNode(node) {
  if (!node || typeof node !== "object") return "";
  if (node.type === "text" || node.type === "inlineCode") return node.value ?? "";
  if (node.type === "html") return decodeHtmlEntities(String(node.value ?? "").replace(/<[^>]*>/g, ""));
  if (node.type === "image" || node.type === "break") return "";
  return Array.isArray(node.children) ? node.children.map(markdownTextFromNode).join("") : "";
}

/** Preserve the current Wiki rule: the first H1 stays the page title; later H1s become H2s. */
export function normalizeWikiHeadings(tree) {
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

/**
 * Assign old rehype-slug IDs to Markdown headings before a title is removed.
 * Existing hProperties IDs are kept and, like rehype-slug, do not consume a slug.
 * @returns {{ text: string; id: string } | null}
 */
export function assignStableHeadingIds(tree) {
  const slugger = new GithubSlugger();
  const titleHeading = (Array.isArray(tree?.children) ? tree.children : []).find(
    (node) => node?.type === "heading" && node.depth === 1,
  );
  /** @type {{ text: string; id: string } | null} */
  let title = null;

  const visit = (node) => {
    if (!node || typeof node !== "object") return;
    if (node.type === "heading") {
      const text = normalized(markdownTextFromNode(node));
      const hProperties = node.data?.hProperties ?? {};
      let id = hProperties.id;
      if (!id) {
        id = slugger.slug(markdownTextFromNode(node));
        node.data = {
          ...(node.data ?? {}),
          hProperties: { ...hProperties, id },
        };
      }
      if (node === titleHeading) title = { text, id: String(id) };
    }
    if (Array.isArray(node.children)) node.children.forEach(visit);
  };

  visit(tree);
  return /** @type {{ text: string; id: string } | null} */ (title);
}

/**
 * Extract the visible source H1 and its legacy GitHub-style anchor.
 * @returns {{ text: string; id: string } | null}
 */
export function getMarkdownTitleMetadata(body, { normalizeWiki = false } = {}) {
  const tree = markdownParser.parse(String(body ?? ""));
  const processedTree = markdownParser.runSync(tree);
  if (normalizeWiki) normalizeWikiHeadings(processedTree);
  return assignStableHeadingIds(processedTree);
}
