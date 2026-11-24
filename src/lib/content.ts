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

export const quoteCta = { es: "Cotiza tu proyecto", en: "Get a quote" } satisfies Bilingual;

export const hero = {
  name: { es: ["JESÚS", "GABRIEL"], en: ["JESUS", "GABRIEL"] },
  role: {
    es: "Senior Frontend Engineer | Fullstack JavaScript",
    en: "Senior Frontend Engineer | Fullstack JavaScript",
  } satisfies Bilingual,
  tagline: {
    es: "Desarrollador web freelance",
    en: "Freelance web developer",
  } satisfies Bilingual,
};

export const about = {
  eyebrowNum: "01",
  eyebrow: { es: "Sobre mí", en: "About" } satisfies Bilingual,
  title: "SENIOR FRONTEND ENGINEER",
  paragraph: {
    es: "Construyo aplicaciones web que funcionan en condiciones reales: rápidas, estables y fáciles de mantener. Trabajo el producto completo, desde la interfaz que ve el usuario hasta lo que se ejecuta detrás. Si tu producto está creciendo más rápido que su código, ese es el tipo de trabajo que me interesa.",
    en: "I build web products that hold up under real use: fast, stable, and easy to change. That means taking them end to end, from what the user touches to what runs behind it. If your product is growing faster than its codebase, that's the kind of work I like.",
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
      title: { es: "Desarrollo de aplicaciones web", en: "Web application development" } satisfies Bilingual,
      desc: {
        es: "Tu producto de punta a punta: interfaz, backend y todo lo que hay en medio. Del primer prototipo a algo que tus usuarios usan todos los días.",
        en: "Your product end to end: interface, backend, and everything in between. From first prototype to something your users rely on daily.",
      } satisfies Bilingual,
    },
    {
      num: "02",
      title: { es: "Experiencias web interactivas", en: "Interactive web experiences" } satisfies Bilingual,
      desc: {
        es: "Landing pages para lanzar un producto o una marca: scroll narrativo, video y 3D en tiempo real, rápidas y accesibles. Como Civitas y ZAFRA.",
        en: "Landing pages that launch a product or a brand: scroll-driven storytelling, video and real-time 3D, fast and accessible. Like Civitas and ZAFRA.",
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
        es: "Actualizo versiones, ordeno código base y arreglo deuda técnica sin frenar tu producto.",
        en: "I update versions, clean up code bases, and fix technical debt without stopping your product.",
      } satisfies Bilingual,
    },
  ],
  ctaLine: { es: "¿Necesitas algo así?", en: "Need something like this?" } satisfies Bilingual,
  ctaButton: { es: "Hablemos", en: "Let's talk" } satisfies Bilingual,
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
      role: "Senior Frontend Engineer",
      company: "Ginko Financial Solutions",
      desc: {
        es: "Lidero el rediseño de la banca en línea y la implementación de Single Sign-On en una plataforma multi-tenant: cuatro entidades, un solo código base, cada una con su propia identidad.",
        en: "Leading the online banking redesign and the Single Sign-On rollout on a multi-tenant platform: four institutions, one codebase, each with its own brand.",
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
        es: "Desarrollé herramientas internas para agentes y supervisores en varios países, reemplazando procesos manuales por tableros que la operación usaba a diario.",
        en: "Built internal tools for agents and supervisors across multiple countries, replacing manual processes with dashboards the operation used daily.",
      } satisfies Bilingual,
    },
    {
      current: false,
      dateStart: "2020",
      dateEnd: "2021",
      role: "Frontend Jr.",
      company: "Develop App",
      desc: {
        es: "Entregué proyectos web para clientes de retail, logística y servicios, trabajando en todo el stack en cada uno.",
        en: "Delivered web projects for clients in retail, logistics and services, working across the full stack on each one.",
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
    es: "PROYECTOS",
    en: "THINGS I'VE BUILT",
  } satisfies Bilingual,
  demoLabel: { es: "Demo", en: "Demo" } satisfies Bilingual,
  codeLabel: { es: "Código", en: "Code" } satisfies Bilingual,
  items: [
    {
      title: "Civitas",
      desc: {
        es: "Atlas interactivo de monumentos: giras un globo 3D, eliges un monumento y haces scroll por su historia mientras su maqueta se arma, se cae y cambia de forma frente a ti.",
        en: "Interactive atlas of monuments: spin a 3D globe, pick a landmark and scroll through its history while its scale model assembles, falls apart and changes shape in front of you.",
      } satisfies Bilingual,
      stack: ["Astro", "Vue", "Three.js", "GSAP", "WebGL"],
      demoHref: "https://visitcivitas.com",
      repos: [{ label: "civitas", href: "https://github.com/jesusgabri3l/civitas" }],
    },
    {
      title: "CEIBA",
      desc: {
        es: "Landing de café de especialidad contada como un recorrido de cámara: el scroll controla el video, del cafetal a la bolsa. Video por dispositivo (AV1/H.264), carga diferida y analítica de abandono por escena.",
        en: "Specialty coffee landing told as one camera flight: scrolling drives the video, from the coffee farm to the bag. Per-device video (AV1/H.264), lazy loading and per-scene drop-off analytics.",
      } satisfies Bilingual,
      stack: ["Astro", "JavaScript", "Tailwind CSS", "Video scrubbing", "Umami"],
      demoHref: "https://jesusgabri3l.github.io/ceiba/",
      repos: [{ label: "ceiba", href: "https://github.com/jesusgabri3l/ceiba" }],
    },
    {
      title: "ZAFRA",
      desc: {
        es: "Landing para una soda de panela ficticia que se siente pintada a mano: ilustración gouache, un solo timeline atado al scroll que lleva la botella por toda la página y un armador de six-pack que pide por WhatsApp.",
        en: "Landing for a fictional panela soda that feels hand-painted: gouache illustration, a single scroll-driven timeline that carries the bottle across the page, and a six-pack builder that orders via WhatsApp.",
      } satisfies Bilingual,
      stack: ["Astro", "TypeScript", "GSAP", "Lenis"],
      demoHref: "https://jesusgabri3l.github.io/zafra/",
      repos: [{ label: "zafra", href: "https://github.com/jesusgabri3l/zafra" }],
    },
    {
      title: "TROCHA",
      desc: {
        es: "Landing para una renta de cuatrimotos en Villa de Leyva: la página es un recorrido en primera persona por tres rutas destapadas, con un tiquete de reserva por ruta y reserva en un toque por WhatsApp.",
        en: "Landing for a quad bike rental in Villa de Leyva: the page is a first-person ride through three dirt routes, with a booking ticket per route and one-tap WhatsApp reservation.",
      } satisfies Bilingual,
      stack: ["Astro", "GSAP", "Lenis", "Scrollytelling"],
      demoHref: "https://trocha-demo.vercel.app/",
      repos: [{ label: "trocha", href: "https://github.com/jesusgabri3l/trocha" }],
    },
  ],
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
    {
      label: { es: "Instagram", en: "Instagram" } satisfies Bilingual,
      value: "@jesusgabri3l.dev",
      href: "https://www.instagram.com/jesusgabri3l.dev/",
      external: true,
    },
    {
      label: { es: "X", en: "X" } satisfies Bilingual,
      value: "@jesusgabri3ldev",
      href: "https://x.com/jesusgabri3ldev",
      external: true,
    },
  ],
  location: "Barranquilla, Colombia",
  availability: { es: "disponible para proyectos freelance · remoto", en: "open to freelance projects · remote" } satisfies Bilingual,
  cvHref: {
    es: "/cv/Espanol Resume  - Jesús Gabriel Ahumada Sarmiento.pdf",
    en: "/cv/Resume  - Jesus Gabriel Ahumada Sarmiento.pdf",
  } satisfies Bilingual,
  cvLabel: { es: "Descargar CV", en: "Download CV" } satisfies Bilingual,
};
