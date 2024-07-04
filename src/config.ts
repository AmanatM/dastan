import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "ru", "ky"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/pathnames": {
    en: "/en",
    ru: "/ru",
    ky: "/ky",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";
