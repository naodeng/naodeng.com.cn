import { describe, expect, it } from "vitest";
import { isPublishedBlogPost } from "../../src/utils/blogPublication";

const now = new Date("2026-08-31T12:00:00.000Z");

describe("isPublishedBlogPost", () => {
  it("includes a non-draft post dated at or before the current time", () => {
    expect(
      isPublishedBlogPost({ data: { date: new Date("2026-08-31T12:00:00.000Z") } }, now),
    ).toBe(true);
  });

  it("includes a post scheduled later on the current Shanghai calendar day", () => {
    expect(
      isPublishedBlogPost(
        { data: { date: new Date("2026-08-31T09:00:00.000Z") } },
        new Date("2026-08-31T01:00:00.000Z"),
      ),
    ).toBe(true);
  });

  it("excludes draft posts", () => {
    expect(
      isPublishedBlogPost(
        { data: { date: new Date("2026-08-30T12:00:00.000Z"), draft: true } },
        now,
      ),
    ).toBe(false);
  });

  it("excludes posts with a future date", () => {
    expect(
      isPublishedBlogPost({ data: { date: new Date("2026-09-01T00:00:00.000Z") } }, now),
    ).toBe(false);
  });
});
