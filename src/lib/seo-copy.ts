import type { Lang } from "./site";

export const seoCopy: Record<
  Lang,
  { title: string; description: string; privacyTitle: string; privacyDescription: string }
> = {
  en: {
    title: "Jesus Gabriel Ahumada | Freelance Frontend Developer",
    description:
      "Senior frontend engineer for hire. Fast, accessible web apps and interactive landing pages with React, Vue 3 and Node.js. Remote, based in Colombia.",
    privacyTitle: "Privacy & cookies | Jesus Gabriel Ahumada",
    privacyDescription:
      "How jesusgabriel.dev handles personal data and cookies: Google Analytics with your consent, your rights under Colombian Law 1581 and how to contact me.",
  },
  es: {
    title: "Jesús Gabriel Ahumada | Desarrollador Web Freelance",
    description:
      "Desarrollador web freelance en Barranquilla, Colombia. Aplicaciones web rápidas y accesibles y landing pages interactivas con React, Vue 3 y Node.js.",
    privacyTitle: "Privacidad y cookies | Jesús Gabriel Ahumada",
    privacyDescription:
      "Cómo jesusgabriel.dev trata los datos personales y las cookies: Google Analytics solo con tu consentimiento, tus derechos según la Ley 1581 y cómo contactarme.",
  },
};

export const uiCopy: Record<
  Lang,
  {
    skipLink: string;
    cookiePreferences: string;
    privacy: string;
    homeNav: string;
    languageNav: string;
    mainNav: string;
    switchTo: string;
  }
> = {
  en: {
    skipLink: "Skip to content",
    cookiePreferences: "Cookie preferences",
    privacy: "Privacy & cookies",
    homeNav: "Home",
    languageNav: "Language",
    mainNav: "Main",
    switchTo: "Español",
  },
  es: {
    skipLink: "Saltar al contenido",
    cookiePreferences: "Preferencias de cookies",
    privacy: "Privacidad y cookies",
    homeNav: "Inicio",
    languageNav: "Idioma",
    mainNav: "Principal",
    switchTo: "English",
  },
};
