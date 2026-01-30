import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./locales";
import { getRelativeLocaleUrl } from "astro:i18n";

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
export function getLocalePaths(url: URL): LocalePath[] {
  return Object.keys(LOCALES).map((lang) => ({
    lang: lang as Lang,
    path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, "")),
  }));
}
type LocalePath = { lang: Lang; path: string };

/**
 * Helper to get locale params for Astro's getStaticPaths
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
  params: { lang },
}));
