// 仅保留 en、zh-cn，与当前博客一致
// https://astro-i18n-starter.pages.dev/zh-cn/setup/

export const DEFAULT_LOCALE_SETTING: string = "en";

interface LocaleSetting {
  [key: string]: {
    label: string;
    lang?: string;
    dir?: "rtl" | "ltr";
  };
}

export const LOCALES_SETTING: LocaleSetting = {
  en: {
    label: "English",
    lang: "en-US",
  },
  "zh-cn": {
    label: "简体中文",
    lang: "zh-CN",
  },
};
