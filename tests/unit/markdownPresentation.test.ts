import { describe, expect, it } from "vitest";
import markdownPresentationRemark from "../../src/utils/markdownPresentationRemark.mjs";

describe("markdown presentation helpers", () => {
  it("removes the generated TOC block while preserving surrounding content", () => {
    const tree = {
      type: "root",
      children: [
        { type: "heading", depth: 1, children: [{ type: "text", value: "Title" }] },
        { type: "html", value: "<!-- TOC START -->" },
        { type: "list", children: [] },
        { type: "html", value: "<!-- TOC END -->" },
        { type: "paragraph", children: [{ type: "text", value: "Intro" }] },
      ],
    };

    markdownPresentationRemark()(tree, { path: "/repo/src/content/wiki/example.md", data: {} });
    expect(tree.children.map((node) => node.type)).toEqual(["heading", "paragraph"]);
  });

  it("only removes an H1 that matches the rendered page title", () => {
    const matching = {
      type: "root",
      children: [{ type: "heading", depth: 1, children: [{ type: "text", value: "Prompt" }] }],
    };
    const different = {
      type: "root",
      children: [{ type: "heading", depth: 1, children: [{ type: "text", value: "Section" }] }],
    };

    const transform = markdownPresentationRemark();
    transform(matching, { path: "/repo/src/content/prompts/en/example.md", data: { frontmatter: { title: "Prompt" } } });
    transform(different, { path: "/repo/src/content/prompts/en/example.md", data: { frontmatter: { title: "Prompt" } } });
    expect(matching.children).toHaveLength(0);
    expect(different.children).toHaveLength(1);
  });

  it("removes a blog source H1 even when the editorial title differs", () => {
    const tree = {
      type: "root",
      children: [{ type: "heading", depth: 1, children: [{ type: "text", value: "Article section" }] }],
    };

    markdownPresentationRemark()(tree, { path: "/repo/src/blog/en/example.mdx", data: { frontmatter: { title: "SEO title" } } });
    expect(tree.children).toHaveLength(0);
  });

  it("demotes extra Wiki H1 headings to H2", () => {
    const tree = {
      type: "root",
      children: [
        { type: "heading", depth: 1, children: [{ type: "text", value: "Title" }] },
        { type: "heading", depth: 1, children: [{ type: "text", value: "Section" }] },
      ],
    };

    markdownPresentationRemark()(tree, { path: "/repo/src/content/wiki/example.md", data: {} });
    expect(tree.children.map((node) => node.depth)).toEqual([1, 2]);
  });

  it("demotes nested Wiki H1 headings from malformed source blocks", () => {
    const tree = {
      type: "root",
      children: [
        { type: "heading", depth: 1, children: [{ type: "text", value: "Title" }] },
        {
          type: "list",
          children: [
            {
              type: "listItem",
              children: [{ type: "heading", depth: 1, children: [{ type: "text", value: "Example" }] }],
            },
          ],
        },
      ],
    };

    markdownPresentationRemark()(tree, { path: "/repo/src/content/wiki/example.md", data: {} });
    expect(tree.children[1].children[0].children[0].depth).toBe(2);
  });
});
