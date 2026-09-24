export interface PaginatedItems<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export function paginateItems<T>(items: readonly T[], requestedPage: number, itemsPerPage: number): PaginatedItems<T> {
  if (!Number.isInteger(itemsPerPage) || itemsPerPage < 1) {
    throw new Error("itemsPerPage must be a positive integer");
  }

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const currentPage = Math.min(Math.max(Number.isInteger(requestedPage) ? requestedPage : 1, 1), totalPages);
  const start = (currentPage - 1) * itemsPerPage;

  return {
    items: items.slice(start, start + itemsPerPage),
    currentPage,
    totalPages,
    totalItems,
  };
}
