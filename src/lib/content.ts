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
  name: ["JESÚS GABRIEL", "AHUMADA"],
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
    es: "Más de 6 años en el ecosistema JavaScript, construyendo interfaces y servicios para banca, e-commerce y herramientas internas de uso global. Trabajo de punta a punta: Vue y React en el frontend, Node y Express en el backend, TypeScript en todo el camino, y nube para sostenerlo.",
    en: "6+ years in the JavaScript ecosystem, building interfaces and services for banking, e-commerce and internal tools used worldwide. End to end: Vue and React on the frontend, Node and Express on the backend, TypeScript all the way through, and cloud to keep it running.",
  } satisfies Bilingual,
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
      title: { es: "Desarrollo Frontend", en: "Frontend Development" } satisfies Bilingual,
      desc: {
        es: "Interfaces en Vue o React, del prototipo a producción, con componentes reutilizables y buen rendimiento.",
        en: "Interfaces in Vue or React, from prototype to production, with reusable components and solid performance.",
      } satisfies Bilingual,
    },
    {
      num: "02",
      title: { es: "APIs y Backend", en: "APIs and Backend" } satisfies Bilingual,
      desc: {
        es: "Servicios REST con Node y Express, integraciones y lógica de negocio pensada para escalar.",
        en: "REST services with Node and Express, integrations and business logic built to scale.",
      } satisfies Bilingual,
    },
    {
      num: "03",
      title: { es: "Sistemas de diseño", en: "Design Systems" } satisfies Bilingual,
      desc: {
        es: "Bibliotecas de componentes consistentes que varios equipos pueden compartir y mantener.",
        en: "Consistent component libraries multiple teams can share and maintain.",
      } satisfies Bilingual,
    },
    {
      num: "04",
      title: { es: "Migraciones y mantenimiento", en: "Migrations and maintenance" } satisfies Bilingual,
      desc: {
        es: "Actualización de versiones, refactor de código base y arreglo de deuda técnica, sin frenar el producto.",
        en: "Version upgrades, codebase refactors and paying down tech debt without stopping the product.",
      } satisfies Bilingual,
    },
  ],
};

export const career = {
  eyebrowNum: "03",
  eyebrow: { es: "Trayectoria", en: "Career" } satisfies Bilingual,
  title: {
    es: "CARRERA PROFESIONAL",
    en: "SIX YEARS, FOUR TEAMS",
  } satisfies Bilingual,
  roles: [
    {
      current: true,
      dateStart: "2024",
      dateEnd: { es: "HOY", en: "NOW" } satisfies Bilingual,
      role: "Sr. Frontend Developer",
      company: "Ginko Financial Solutions",
      desc: {
        es: "Banca empresarial para cuatro entidades desde un único código base, con Vue 3 y Composition API.",
        en: "Corporate banking for four institutions from a single codebase, with Vue 3 and the Composition API.",
      } satisfies Bilingual,
    },
    {
      current: false,
      dateStart: "2022",
      dateEnd: "2024",
      role: "Staff Engineer",
      company: "Altimetrik · GoDaddy",
      desc: {
        es: "Biblioteca de componentes React de la home de GoDaddy y varias actualizaciones clave.",
        en: "React component library behind GoDaddy's homepage, plus several key upgrades.",
      } satisfies Bilingual,
    },
    {
      current: false,
      dateStart: "2021",
      dateEnd: "2022",
      role: "Sr. Developer",
      company: "Teleperformance",
      desc: {
        es: "UI y servicios REST para apps usadas a nivel mundial. Helpdesk embebible y seguimiento de agentes.",
        en: "UI and REST services for apps used worldwide. Embeddable helpdesk and agent tracking.",
      } satisfies Bilingual,
    },
    {
      current: false,
      dateStart: "2020",
      dateEnd: "2021",
      role: "Frontend Jr.",
      company: "Develop App",
      desc: {
        es: "Interfaces a partir de diseños previos, servicios REST y piezas de UI reutilizables.",
        en: "Interfaces from existing designs, REST services and reusable UI pieces.",
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
    { slug: "aws", label: "Certified Cloud Practitioner" },
    { slug: "javascript", label: "Certified JavaScript Developer" },
    { slug: "jest", label: "JavaScript Unit Testing" },
    { slug: "react", label: "React (Basic)" },
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
      value: "jesus15202009@gmail.com",
      href: "mailto:jesus15202009@gmail.com",
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
