import { describe, expect, it } from "vitest";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";
import markdownPresentationRemark, { normalizeWikiHeadings } from "../../src/utils/markdownPresentationRemark.mjs";
import { assignStableHeadingIds, getMarkdownTitleMetadata } from "../../src/utils/markdownTitleMetadata.mjs";

function headingMarkup(code: string) {
  return [...code.matchAll(/<h([1-6])\b[^>]*\bid="([^"]+)"[^>]*>(.*?)<\/h\1>/g)].map((match) => ({
    depth: Number(match[1]),
    id: match[2],
    html: match[3],
  }));
}

describe("Markdown page title migration", () => {
  it("uses the visible source H1 text and slug rather than metadata titles", () => {
    expect(getMarkdownTitleMetadata(
      "# Source **title** with `code` and [link](/target)\n\n## Details",
    )).toEqual({ text: "Source title with code and link", id: "source-title-with-code-and-link" });
  });

  it("preserves legacy heading IDs when headings contain raw inline HTML", async () => {
    const source = "# API <span>v2</span> Guide\n\n## API v2 Guide";
    const legacy = await createMarkdownProcessor({
      rehypePlugins: [rehypeSlug],
      syntaxHighlight: false,
      smartypants: false,
    });
    const current = await createMarkdownProcessor({
      remarkPlugins: [markdownPresentationRemark],
      rehypePlugins: [rehypeSlug],
      syntaxHighlight: false,
      smartypants: false,
    });

    const legacyMarkup = headingMarkup((await legacy.render(source)).code);
    const migrated = await current.render(source, {
      fileURL: new URL("file:///repo/src/content/aiwiki/en/example.md"),
    });

    expect(legacyMarkup.map(({ id }) => id)).toEqual(["api-v2-guide", "api-v2-guide-1"]);
    expect(getMarkdownTitleMetadata(source)).toEqual({ text: "API v2 Guide", id: legacyMarkup[0].id });
    expect(migrated.metadata.frontmatter.__detailPageTitle).toEqual({ text: "API v2 Guide", id: legacyMarkup[0].id });
    expect(headingMarkup(migrated.code).map(({ id }) => id)).toEqual(legacyMarkup.slice(1).map(({ id }) => id));
  });

  it("preserves every existing Wiki heading ID after moving the first H1 into the template", async () => {
    const source = [
      "# Repeat",
      "## Repeat",
      '<h2 id="custom-heading">Custom heading</h2>',
      "",
      "# Extra H1",
      "## Repeat",
      "### Repeat",
      "",
    ].join("\n");

    const legacy = await createMarkdownProcessor({
      remarkPlugins: [() => normalizeWikiHeadings],
      rehypePlugins: [rehypeSlug],
      syntaxHighlight: false,
      smartypants: false,
    });
    const current = await createMarkdownProcessor({
      remarkPlugins: [markdownPresentationRemark],
      rehypePlugins: [rehypeSlug],
      syntaxHighlight: false,
      smartypants: false,
    });

    const legacyMarkup = headingMarkup((await legacy.render(source)).code);
    const migratedResult = await current.render(source, {
      fileURL: new URL("file:///repo/src/content/wiki/example.md"),
    });
    const migratedMarkup = headingMarkup(migratedResult.code);

    expect(legacyMarkup[0]).toEqual({ depth: 1, id: "repeat", html: "Repeat" });
    expect(migratedMarkup).toEqual(legacyMarkup.slice(1));
    expect(migratedMarkup.map(({ id }) => id)).toEqual(["repeat-1", "custom-heading", "extra-h1", "repeat-2", "repeat-3"]);
    expect(migratedResult.metadata.frontmatter.__detailPageTitle).toEqual({ text: "Repeat", id: "repeat" });
  });

  it("returns no migrated title when a source H1 is missing", () => {
    expect(getMarkdownTitleMetadata("## Only a section\n\nBody text")).toBeNull();
  });

  it("keeps explicit heading IDs without consuming a generated slug", () => {
    const parser = unified().use(remarkParse);
    const tree = parser.parse("# Repeat\n\n## Repeat\n\n## Custom\n\n## Repeat");
    const customHeading = tree.children.find((node) => node.type === "heading" && node.children[0]?.value === "Custom");
    customHeading.data = { hProperties: { id: "custom-id" } };

    assignStableHeadingIds(tree);

    expect(tree.children.filter((node) => node.type === "heading").map((node) => node.data.hProperties.id))
      .toEqual(["repeat", "repeat-1", "custom-id", "repeat-2"]);
  });
});
