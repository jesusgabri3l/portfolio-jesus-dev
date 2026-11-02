import type { MetadataRoute } from "next";
import { CONTENT_UPDATED_AT, SITE_URL, absoluteUrl, languageAlternates, locales } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/privacy"];

  return paths.flatMap((path) => {
    const alternates = {
      languages: Object.fromEntries(
        Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, absoluteUrl(href)]),
      ),
    };
    return locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: CONTENT_UPDATED_AT,
      alternates,
    }));
  });
}
