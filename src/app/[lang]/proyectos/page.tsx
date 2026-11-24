import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton";
import { ProjectsHub } from "@/components/projects/ProjectsHub";
import { projects } from "@/lib/content";
import { hasLocale, languageAlternates, pathFor } from "@/lib/site";

type ProjectsParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: ProjectsParams, parent: ResolvingMetadata): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { openGraph, twitter } = await parent;
  const title = projects.page.seoTitle[lang];
  const description = projects.page.seoDescription[lang];

  return {
    title,
    description,
    alternates: { canonical: pathFor(lang, "/proyectos"), languages: languageAlternates("/proyectos") },
    openGraph: { url: pathFor(lang, "/proyectos"), title, description, images: openGraph?.images },
    twitter: { title, description, images: twitter?.images },
  };
}

export default async function ProjectsView({ params }: ProjectsParams) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <header className="border-b-2 border-ink px-[clamp(24px,6vw,90px)] py-4">
        <Link href={pathFor(lang)} className="font-mono text-xs uppercase tracking-[0.1em] underline underline-offset-4">
          ← {projects.page.back[lang]}
        </Link>
      </header>
      <main id="main" className="mx-auto max-w-[1200px] px-[clamp(24px,6vw,48px)] py-12">
        <h1 className="mb-3 font-display text-[clamp(28px,5vw,48px)] leading-[0.95] tracking-[-0.02em]">
          {projects.eyebrow[lang]}
        </h1>
        <p className="mb-8 text-base leading-[1.6]">{projects.page.intro[lang]}</p>
        <ProjectsHub />
      </main>
      <footer className="border-t-2 border-ink px-[clamp(24px,6vw,90px)] py-4 font-mono text-xs uppercase tracking-[0.1em]">
        <CookiePreferencesButton />
      </footer>
    </>
  );
}
