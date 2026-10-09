import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./locales";
import { getRelativeLocaleUrl } from "astro:i18n";
import { getCollection } from "astro:content";
import { BLOG_POSTS_PER_PAGE } from "./consts";
import { filterPublishedBlogPosts } from "./utils/blogPublication";
import { createBlogLocaleResolver } from "./utils/blogLocalePaths";

/**
 * User-defined locales list
 * @constant @readonly
 */
export const LOCALES = LOCALES_SETTING as Record<string, LocaleConfig>;
type LocaleConfig = {
  readonly label: string;
  readonly lang?: string;
  readonly dir?: "ltr" | "rtl";
};

/**
 * Type for the language code
 */
export type Lang = keyof typeof LOCALES;

/**
 * Default locale code
 * @constant @readonly
 */
export const DEFAULT_LOCALE = DEFAULT_LOCALE_SETTING as Lang;

/**
 * Type for the multilingual object
 */
export type Multilingual = { [key in Lang]?: string };

/**
 * Helper to get the translation function
 */
export function useTranslations(lang: Lang) {
  return function t(multilingual: Multilingual | string): string {
    if (typeof multilingual === "string") {
      return multilingual;
    }
    return multilingual[lang] || multilingual[DEFAULT_LOCALE] || "";
  };
}

/**
 * Helper to get corresponding path list for all locales
 */
let blogResolver: Promise<ReturnType<typeof createBlogLocaleResolver>> | undefined;
let guildArticles: Promise<Set<string>> | undefined;
export async function getLocalePaths(url: URL): Promise<LocalePath[]> {
  const needsBlogResolver = /^\/(en|zh-cn)\/(blog|tags|series)(?:\/|$)/.test(url.pathname);
  if (needsBlogResolver && (!blogResolver || import.meta.env.DEV)) {
    blogResolver = getCollection("blog").then(posts =>
      createBlogLocaleResolver(filterPublishedBlogPosts(posts), BLOG_POSTS_PER_PAGE));
  }
  const guildSlug = url.pathname.match(/^\/(?:en|zh-cn)\/guild\/([^/]+\/[^/]+\/[^/]+)\/?$/)?.[1];
  if (guildSlug && (!guildArticles || import.meta.env.DEV)) {
    guildArticles = getCollection("guild").then(entries => new Set(entries.map(entry => entry.id)));
  }
  const resolve = needsBlogResolver ? await blogResolver : undefined;
  const availableGuildArticles = guildSlug ? await guildArticles : undefined;
  return Object.keys(LOCALES).map((lang) => {
    let resolved = resolve?.(url.pathname, lang);
    if (guildSlug && !availableGuildArticles?.has(`${lang}/${guildSlug}`)) {
      resolved = { path: `/${lang}/guild/${guildSlug.split("/").slice(0, 2).join("/")}/`, isEquivalent: false };
    }
    return {
      lang: lang as Lang,
      path: resolved?.path ?? getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, "")),
      isEquivalent: resolved?.isEquivalent ?? true,
    };
  });
}
type LocalePath = { lang: Lang; path: string; isEquivalent: boolean };

/**
 * Helper to get locale params for Astro's getStaticPaths
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
  params: { lang },
}));
