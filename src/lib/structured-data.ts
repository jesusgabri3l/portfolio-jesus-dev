import { contact, services } from "./content";
import { seoCopy } from "./seo-copy";
import { SITE_URL, personName, otherLang, type Lang } from "./site";

export function buildHomeStructuredData(lang: Lang) {
  const personId = `${SITE_URL}/#person`;
  const siteId = `${SITE_URL}/#website`;
  const serviceId = `${SITE_URL}/#service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: personName[lang],
        alternateName: personName[otherLang(lang)],
        jobTitle: "Senior Frontend Engineer",
        url: SITE_URL,
        image: `${SITE_URL}/images/avatar.png`,
        email: contact.links[0].value,
        address: { "@type": "PostalAddress", addressLocality: "Barranquilla", addressCountry: "CO" },
        knowsAbout: ["JavaScript", "TypeScript", "React", "Vue.js", "Node.js", "AWS", "Web accessibility", "Web performance"],
        knowsLanguage: ["es", "en"],
        sameAs: contact.links.filter((link) => link.external).map((link) => link.href),
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE_URL,
        name: personName[lang],
        inLanguage: ["en", "es"],
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: seoCopy[lang].title.split(" | ")[1],
        url: `${SITE_URL}/${lang}`,
        description: seoCopy[lang].description,
        provider: { "@id": personId },
        areaServed: ["Colombia", "Remote (worldwide)"],
        availableLanguage: ["Spanish", "English"],
        knowsAbout: services.items.map((item) => item.title[lang]),
      },
    ],
  };
}
