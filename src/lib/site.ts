export const SITE_URL = "https://jesusgabriel.dev";
export const GA_MEASUREMENT_ID = "G-0G5WS1QN6S";
export const CONTENT_UPDATED_AT = "2026-11-02";

export const locales = ["en", "es"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "es";

export const hasLocale = (value: string): value is Lang =>
  (locales as readonly string[]).includes(value);

export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es");

export const pathFor = (lang: Lang, path = "") => `/${lang}${path}`;

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

export const localeTag: Record<Lang, string> = { en: "en_US", es: "es_CO" };

export const languageAlternates = (path = "") => ({
  en: pathFor("en", path),
  es: pathFor("es", path),
  "x-default": pathFor(defaultLang, path),
});

// En inglés el nombre va sin tilde.
export const personName: Record<Lang, string> = {
  es: "Jesús Gabriel Ahumada",
  en: "Jesus Gabriel Ahumada",
};
