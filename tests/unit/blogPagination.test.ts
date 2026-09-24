import { describe, expect, it } from "vitest";
import { paginateItems } from "../../src/utils/blogPagination";

describe("paginateItems", () => {
  it("returns the requested page and preserves the total page count", () => {
    const result = paginateItems(Array.from({ length: 25 }, (_, index) => index + 1), 2, 12);

    expect(result).toEqual({
      items: Array.from({ length: 12 }, (_, index) => index + 13),
      currentPage: 2,
      totalPages: 3,
      totalItems: 25,
    });
  });

  it("clamps an out-of-range page to the last page", () => {
    const result = paginateItems(["a", "b", "c"], 99, 2);

    expect(result.currentPage).toBe(2);
    expect(result.items).toEqual(["c"]);
  });
});
