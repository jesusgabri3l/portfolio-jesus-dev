import type { NextConfig } from "next";

// English slugs for routes whose folder is in Spanish (keep in sync with localizedSlugs in src/lib/site.ts).
const englishSlugs = [
  { es: "/cotiza", en: "/quote" },
  { es: "/proyectos", en: "/projects" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return englishSlugs.map(({ es, en }) => ({ source: `/en${es}`, destination: `/en${en}`, permanent: true }));
  },
  async rewrites() {
    return englishSlugs.map(({ es, en }) => ({ source: `/en${en}`, destination: `/en${es}` }));
  },
};

export default nextConfig;
