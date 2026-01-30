import { appendForwardSlash, joinPaths } from '@astrojs/internal-helpers/path';
import { A as AstroError, M as MissingLocale } from './astro/server_D4o_drMZ.mjs';
import 'piccolore';
import 'clsx';

const DEFAULT_LOCALE_SETTING = "en";
const LOCALES_SETTING = {
  en: {
    label: "English",
    lang: "en-US"
  },
  "zh-cn": {
    label: "简体中文",
    lang: "zh-CN"
  }
};

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function getLocaleRelativeUrl({
  locale,
  base,
  locales: _locales,
  trailingSlash,
  format,
  path,
  prependWith,
  normalizeLocale = true,
  strategy = "pathname-prefix-other-locales",
  defaultLocale
}) {
  const codeToUse = peekCodePathToUse(_locales, locale);
  if (!codeToUse) {
    throw new AstroError({
      ...MissingLocale,
      message: MissingLocale.message(locale)
    });
  }
  const pathsToJoin = [base, prependWith];
  const normalizedLocale = normalizeLocale ? normalizeTheLocale(codeToUse) : codeToUse;
  if (strategy === "pathname-prefix-always" || strategy === "pathname-prefix-always-no-redirect" || strategy === "domains-prefix-always" || strategy === "domains-prefix-always-no-redirect") {
    pathsToJoin.push(normalizedLocale);
  } else if (locale !== defaultLocale) {
    pathsToJoin.push(normalizedLocale);
  }
  pathsToJoin.push(path);
  let relativePath;
  if (shouldAppendForwardSlash(trailingSlash, format)) {
    relativePath = appendForwardSlash(joinPaths(...pathsToJoin));
  } else {
    relativePath = joinPaths(...pathsToJoin);
  }
  if (relativePath === "") {
    return "/";
  }
  return relativePath;
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function peekCodePathToUse(locales, locale) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  return void 0;
}

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      {
        {
          strategy = "pathname-prefix-always-no-redirect";
        }
      }
    } else {
      {
        {
          strategy = "domains-prefix-always-no-redirect";
        }
      }
    }
  }
  return strategy;
}

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["en", "zh-cn"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const LOCALES = LOCALES_SETTING;
const DEFAULT_LOCALE = DEFAULT_LOCALE_SETTING;
function useTranslations(lang) {
  return function t(multilingual) {
    if (typeof multilingual === "string") {
      return multilingual;
    }
    return multilingual[lang] || multilingual[DEFAULT_LOCALE] || "";
  };
}
function getLocalePaths(url) {
  return Object.keys(LOCALES).map((lang) => ({
    lang,
    path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, ""))
  }));
}
const localeParams = Object.keys(LOCALES).map((lang) => ({
  params: { lang }
}));

export { DEFAULT_LOCALE as D, LOCALES as L, getLocalePaths as a, getRelativeLocaleUrl as g, localeParams as l, useTranslations as u };
