import type { MetadataRoute } from "next";
import { CONTENT_UPDATED_AT, absoluteUrl, languageAlternates, locales, pathFor } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/privacy", "/cotiza", "/proyectos"];

  return paths.flatMap((path) => {
    const alternates = {
      languages: Object.fromEntries(
        Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, absoluteUrl(href)]),
      ),
    };
    return locales.map((lang) => ({
      url: absoluteUrl(pathFor(lang, path)),
      lastModified: CONTENT_UPDATED_AT,
      alternates,
    }));
  });
}
