type BlogPostLike = {
  data: {
    date: Date;
    draft?: boolean;
  };
};

const publicationDateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function publicationDateKey(date: Date): string {
  const parts = publicationDateFormatter.formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  return `${value("year")}-${value("month")}-${value("day")}`;
}

/** Returns whether a blog post is eligible for public output on the current Shanghai calendar day. */
export function isPublishedBlogPost(post: BlogPostLike, now = new Date()): boolean {
  return post.data.draft !== true && publicationDateKey(post.data.date) <= publicationDateKey(now);
}

export function filterPublishedBlogPosts<T extends BlogPostLike>(
  posts: T[],
  now = new Date(),
): T[] {
  return posts.filter((post) => isPublishedBlogPost(post, now));
}
