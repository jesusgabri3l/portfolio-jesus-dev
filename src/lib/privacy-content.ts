import type { Lang } from "./site";

type Section = { heading: string; paragraphs: string[] };

export const privacyContent: Record<Lang, { title: string; updated: string; back: string; sections: Section[] }> = {
  en: {
    title: "Privacy & cookies",
    updated: "Last updated: November 2, 2026",
    back: "Back to home",
    sections: [
      {
        heading: "Who is responsible",
        paragraphs: [
          "Jesus Gabriel Ahumada Sarmiento, freelance developer based in Barranquilla, Colombia, is responsible for the personal data processed on jesusgabriel.dev. Contact: contact@jesusgabriel.dev.",
        ],
      },
      {
        heading: "What data I collect and why",
        paragraphs: [
          "Only if you accept analytics cookies, Google Analytics 4 collects: pages visited, approximate location, device and browser, how you arrived at the site, and loading-speed metrics (Core Web Vitals). The purpose is to understand how the site is used and improve it. Your IP address is not stored in Google Analytics 4.",
          "If you email me, I use your message and email address only to reply to you.",
        ],
      },
      {
        heading: "Legal basis and your choice",
        paragraphs: [
          "Analytics runs only with your consent. It is off by default, declining carries the same weight as accepting, and a Global Privacy Control signal from your browser is treated as declining. You can change your choice at any time with the “Cookie preferences” link in the footer. I do not use advertising cookies.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "_ga and _ga_* (Google Analytics, up to 2 years): distinguish visitors anonymously. They are set only after you accept. Your choice is stored in your browser (local storage), not in a cookie.",
        ],
      },
      {
        heading: "Third parties and transfers",
        paragraphs: [
          "Analytics data is processed by Google LLC, which may store it in the United States. The site is hosted on Vercel Inc.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: ["Analytics data is kept for up to 14 months. Emails are kept as long as the conversation lasts."],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under Colombian Law 1581 of 2012 (and, if you are in the EU, the GDPR) you can know, update, rectify or delete your data, and revoke your consent. Write to contact@jesusgabriel.dev. You can also file a complaint with the Superintendencia de Industria y Comercio (SIC).",
        ],
      },
    ],
  },
  es: {
    title: "Privacidad y cookies",
    updated: "Última actualización: 2 de noviembre de 2026",
    back: "Volver al inicio",
    sections: [
      {
        heading: "Responsable del tratamiento",
        paragraphs: [
          "Jesús Gabriel Ahumada Sarmiento, desarrollador freelance en Barranquilla, Colombia, es responsable de los datos personales tratados en jesusgabriel.dev. Contacto: contact@jesusgabriel.dev.",
        ],
      },
      {
        heading: "Qué datos recolecto y para qué",
        paragraphs: [
          "Solo si aceptas las cookies de analítica, Google Analytics 4 recoge: páginas visitadas, ubicación aproximada, dispositivo y navegador, cómo llegaste al sitio y métricas de velocidad de carga (Core Web Vitals). La finalidad es entender cómo se usa el sitio y mejorarlo. Google Analytics 4 no almacena tu dirección IP.",
          "Si me escribes por correo, uso tu mensaje y tu correo únicamente para responderte.",
        ],
      },
      {
        heading: "Base legal y tu decisión",
        paragraphs: [
          "La analítica funciona solo con tu consentimiento. Está apagada por defecto, rechazar pesa igual que aceptar y una señal Global Privacy Control de tu navegador se trata como rechazo. Puedes cambiar tu decisión cuando quieras con el enlace “Preferencias de cookies” del pie de página. No uso cookies de publicidad.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "_ga y _ga_* (Google Analytics, hasta 2 años): distinguen visitantes de forma anónima. Se crean solo después de que aceptas. Tu decisión se guarda en tu navegador (almacenamiento local), no en una cookie.",
        ],
      },
      {
        heading: "Terceros y transferencias",
        paragraphs: [
          "Los datos de analítica los procesa Google LLC, que puede almacenarlos en Estados Unidos. El sitio está alojado en Vercel Inc.",
        ],
      },
      {
        heading: "Conservación",
        paragraphs: [
          "Los datos de analítica se conservan hasta 14 meses. Los correos, mientras dure la conversación.",
        ],
      },
      {
        heading: "Tus derechos",
        paragraphs: [
          "Según la Ley 1581 de 2012 (y, si estás en la UE, el RGPD) puedes conocer, actualizar, rectificar o suprimir tus datos y revocar tu autorización. Escribe a contact@jesusgabriel.dev. También puedes presentar una queja ante la Superintendencia de Industria y Comercio (SIC).",
        ],
      },
    ],
  },
};
