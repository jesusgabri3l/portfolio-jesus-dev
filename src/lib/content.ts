export type Bilingual = { es: string; en: string };

export const nav: Bilingual[] = [
  { es: "Inicio", en: "Home" },
  { es: "Sobre mí", en: "About" },
  { es: "Servicios", en: "Services" },
  { es: "Trayectoria", en: "Career" },
  { es: "Educación", en: "Education" },
  { es: "Proyectos", en: "Projects" },
  { es: "Contacto", en: "Contact" },
];

export const hero = {
  name: ["JESUS GABRIEL", "AHUMADA"],
  role: {
    es: "Software Engineer | Fullstack Javascript Developer",
    en: "Software Engineer | Fullstack Javascript Developer",
  } satisfies Bilingual,
};

export const about = {
  eyebrowNum: "01",
  eyebrow: { es: "Sobre mí", en: "About" } satisfies Bilingual,
  title: "SOFTWARE ENGINEER",
  paragraph: {
    es: "Más de 6 años trabajando con JavaScript/TypeScript, con foco en frontend a escala. Vue 3 y React en la interfaz, Node y Express de soporte, y experiencia construyendo productos que necesitan crecer sin romperse. Cloud (AWS) y código mantenible como base de todo.",
    en: "6+ years in the JavaScript/TypeScript ecosystem, focused on frontend at scale. Vue 3 and React on the interface, Node and Express underneath, and experience building products that need to grow without breaking. Cloud (AWS) and maintainable code underpin it all.",
  } satisfies Bilingual,
  cvHref: {
    es: "/cv/jesus-gabriel-ahumada-cv-es.pdf",
    en: "/cv/jesus-gabriel-ahumada-cv-en.pdf",
  } satisfies Bilingual,
  cvLabel: { es: "Descargar CV", en: "Download CV" } satisfies Bilingual,
  stackLabel: "Stack",
  stack: [
    { slug: "vuedotjs", label: "Vue 3" },
    { slug: "react", label: "React" },
    { slug: "typescript", label: "TypeScript" },
    { slug: "nodedotjs", label: "Node.js" },
    { slug: "express", label: "Express" },
    { slug: "aws", label: "AWS" },
  ],
};

export const services = {
  eyebrowNum: "02",
  eyebrow: { es: "Servicios", en: "Services" } satisfies Bilingual,
  title: {
    es: "EN QUÉ TE PUEDO AYUDAR",
    en: "WHAT I CAN HELP WITH",
  } satisfies Bilingual,
  items: [
    {
      num: "01",
      title: { es: "Desarrollo de aplicaciones web", en: "Web application development" } satisfies Bilingual,
      desc: {
        es: "Tu producto de punta a punta: interfaz, backend y todo lo que hay en medio. Del primer prototipo a algo que tus usuarios usan todos los días.",
        en: "Your product end to end: interface, backend, and everything in between. From first prototype to something your users rely on daily.",
      } satisfies Bilingual,
    },
    {
      num: "02",
      title: { es: "Páginas web y landing pages", en: "Websites and landing pages" } satisfies Bilingual,
      desc: {
        es: "Sitios rápidos, responsivos y que se ven bien en cualquier dispositivo — para presentar tu negocio, lanzar un producto o captar clientes.",
        en: "Fast, responsive sites that look good on any device — to present your business, launch a product, or bring in customers.",
      } satisfies Bilingual,
    },
    {
      num: "03",
      title: { es: "Desarrollo de Sistemas de diseño", en: "Design System Development" } satisfies Bilingual,
      desc: {
        es: "Componentes reutilizables para tu marca, documentados en Storybook para que tu equipo los reutilice en toda la aplicación sin adivinar cómo funcionan.",
        en: "Reusable components for your brand, documented in Storybook so your team can reuse them across the entire application without guessing how they work.",
      } satisfies Bilingual,
    },
    {
      num: "04",
      title: { es: "Mantenimiento y actualización", en: "Maintenance & upgrades" } satisfies Bilingual,
      desc: {
        es: "Actualizo versiones, ordeno código base y arreglo deuda técnica sin frenar tu producto optimizando el tiempo a través del uso de IA en el proceso.",
        en: "I update versions, clean up code bases, and fix technical debt without stopping your product, optimizing turnaround time through the use of AI in my process.",
      } satisfies Bilingual,
    },
  ],
};

export const career = {
  eyebrowNum: "03",
  eyebrow: { es: "Trayectoria", en: "Career" } satisfies Bilingual,
  title: {
    es: "CARRERA PROFESIONAL",
    en: "CAREER",
  } satisfies Bilingual,
  roles: [
    {
      current: true,
      dateStart: "2024",
      dateEnd: { es: "HOY", en: "NOW" } satisfies Bilingual,
      role: "Sr. Frontend Developer",
      company: "Ginko Financial Solutions",
      desc: {
        es: "Lidero el rediseño BOCC 360 y la iniciativa de SSO para Banco de Occidente, sobre una plataforma que sirve a cuatro entidades desde un único código base. +95% de cumplimiento de entregas por sprint.",
        en: "Leading the BOCC 360 redesign and the SSO initiative for Banco de Occidente, on a platform serving four institutions from a single codebase. 95%+ sprint delivery compliance.",
      } satisfies Bilingual,
    },
    {
      current: false,
      dateStart: "2022",
      dateEnd: "2024",
      role: "Staff Engineer",
      company: "Altimetrik · GoDaddy",
      desc: {
        es: "Desarrollé la biblioteca de componentes React detrás de la home de GoDaddy.com y ejecuté la migración a React 18.",
        en: "Developed the React component library behind GoDaddy.com's homepage and carried out the React 18 migration.",
      } satisfies Bilingual,
    },
    {
      current: false,
      dateStart: "2021",
      dateEnd: "2022",
      role: "Sr. Developer",
      company: "Teleperformance",
      desc: {
        es: "Construí herramientas internas usadas por agentes y supervisores en varios países, haciendo la operación diaria más simple y visible.",
        en: "Built internal tools used by agents and supervisors across multiple countries, making day-to-day operations simpler and more visible.",
      } satisfies Bilingual,
    },
    {
      current: false,
      dateStart: "2020",
      dateEnd: "2021",
      role: "Frontend Jr.",
      company: "Develop App",
      desc: {
        es: "Pasé por proyectos para clientes de industrias muy distintas, tocando desde UI hasta integraciones backend en cada uno.",
        en: "Worked on projects for clients across very different industries, touching everything from UI to backend integrations in each one.",
      } satisfies Bilingual,
    },
  ],
};

export const education = {
  eyebrowNum: "04",
  eyebrow: { es: "Educación", en: "Education" } satisfies Bilingual,
  title: {
    es: "FORMACIÓN Y CERTIFICACIONES",
    en: "DEGREES AND CERTIFICATIONS",
  } satisfies Bilingual,
  degreesLabel: { es: "Carrera profesional", en: "Degrees" } satisfies Bilingual,
  degrees: [
    {
      title: {
        es: "Especialista en Ingeniería de Software",
        en: "Software Engineering Specialist",
      } satisfies Bilingual,
      school: "Universidad del Norte · 2023",
    },
    {
      title: {
        es: "Ingeniero de Sistemas",
        en: "Systems Engineer",
      } satisfies Bilingual,
      school: "Universidad de la Costa CUC · 2016 — 2021",
    },
  ],
  certificationsLabel: { es: "Certificaciones", en: "Certifications" } satisfies Bilingual,
  certifications: [
    {
      slug: "aws",
      label: "Certified Cloud Practitioner",
      href: "https://www.credly.com/badges/6045d8d2-c442-4e21-a6b4-d7ad1b0a11a0/public_url",
    },
    {
      slug: "javascript",
      label: "Certified JavaScript Developer",
      href: "https://verify.w3schools.com/5YKCAWXY5",
    },
  ],
};

export const projects = {
  eyebrowNum: "05",
  eyebrow: { es: "Proyectos", en: "Projects" } satisfies Bilingual,
  title: {
    es: "LO QUE HAGO CUANDO NADIE ME LO PIDE",
    en: "WHAT I BUILD WHEN NOBODY ASKS",
  } satisfies Bilingual,
  placeholderTitle: "Nombre del proyecto",
  placeholderDesc: "Qué hace, en una frase.",
  count: 10,
};

export const contact = {
  eyebrowNum: "06",
  eyebrow: { es: "Contacto", en: "Contact" } satisfies Bilingual,
  title: { es: "HABLEMOS", en: "LET'S TALK" } satisfies Bilingual,
  links: [
    {
      label: { es: "Email", en: "Email" } satisfies Bilingual,
      value: "contact@jesusgabriel.dev",
      href: "mailto:contact@jesusgabriel.dev",
      external: false,
    },
    {
      label: { es: "LinkedIn", en: "LinkedIn" } satisfies Bilingual,
      value: "/in/jesus-ahumada",
      href: "https://www.linkedin.com/in/jesus-ahumada",
      external: true,
    },
    {
      label: { es: "GitHub", en: "GitHub" } satisfies Bilingual,
      value: "/jesusgabri3l",
      href: "https://github.com/jesusgabri3l",
      external: true,
    },
  ],
  location: "Barranquilla, Colombia",
  availability: { es: "disponible remoto", en: "available remote" } satisfies Bilingual,
};
