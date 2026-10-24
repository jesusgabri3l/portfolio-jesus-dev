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
    es: "Senior Frontend Engineer | Fullstack JavaScript",
    en: "Senior Frontend Engineer | Fullstack JavaScript",
  } satisfies Bilingual,
  tagline: {
    es: "6+ años entregando productos web",
    en: "6+ years shipping web products",
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
        es: "Landing pages para lanzar un producto o una marca: scroll narrativo, video y 3D en tiempo real, rápidas y accesibles. Como CEIBA y VOLT.",
        en: "Landing pages that launch a product or a brand: scroll-driven storytelling, video and real-time 3D, fast and accessible. Like CEIBA and VOLT.",
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
      title: "VOLT",
      desc: {
        es: "Landing 3D interactiva para un teclado mecánico conceptual. Haz scroll para desarmarlo pieza por pieza, arrastra para rotarlo, escribe para presionar sus teclas y personaliza la carcasa, los keycaps y la retroiluminación en vivo.",
        en: "Interactive 3D landing page for a concept mechanical keyboard. Scroll to take it apart piece by piece, drag to rotate, type to press its keys, and customize case, keycaps and backlight live.",
      } satisfies Bilingual,
      stack: ["Astro", "3D", "Three.js", "WebGL", "Scrollytelling"],
      demoHref: "https://jesusgabri3l.github.io/volt/",
      repos: [{ label: "volt", href: "https://github.com/jesusgabri3l/volt" }],
      codeLabel: { es: "Cómo está hecho", en: "How it's built" } satisfies Bilingual,
    },
    {
      title: "Chat App",
      desc: {
        es: "Chat en tiempo real: frontend en React + Vite con Google Sign-In, backend en Express + Socket.IO sobre Firestore.",
        en: "Realtime chat: React + Vite frontend with Google Sign-In, Express + Socket.IO backend on Firestore.",
      } satisfies Bilingual,
      stack: ["React", "TypeScript", "Node.js", "Express", "Socket.IO", "Firestore"],
      demoHref: "https://jesusgabri3l.github.io/chat-app/",
      repos: [
        { label: "chat-app", href: "https://github.com/jesusgabri3l/chat-app" },
        { label: "chat-app-backend", href: "https://github.com/jesusgabri3l/chat-app-backend" },
      ],
    },
    {
      title: "Spotify Clon",
      desc: {
        es: "Cliente de la Spotify Web API con React, TypeScript y MobX — explora tu biblioteca, busca artistas y discografías, autenticado con OAuth PKCE.",
        en: "Spotify Web API client built with React, TypeScript and MobX — browse your library, search artists and discographies, authenticated via OAuth PKCE.",
      } satisfies Bilingual,
      stack: ["React", "TypeScript", "MobX", "OAuth PKCE"],
      demoHref: "https://spotify-clon-jade.vercel.app/",
      repos: [{ label: "spotify-clon", href: "https://github.com/jesusgabri3l/spotify-clon" }],
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
  ],
  location: "Barranquilla, Colombia",
  availability: { es: "disponible para proyectos freelance · remoto", en: "open to freelance projects · remote" } satisfies Bilingual,
  cvHref: {
    es: "/cv/jesus-gabriel-ahumada-cv-es.pdf",
    en: "/cv/jesus-gabriel-ahumada-cv-en.pdf",
  } satisfies Bilingual,
  cvLabel: { es: "Descargar CV", en: "Download CV" } satisfies Bilingual,
};
