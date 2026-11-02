import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton";
import { privacyContent } from "@/lib/privacy-content";
import { seoCopy } from "@/lib/seo-copy";
import { hasLocale, languageAlternates, pathFor } from "@/lib/site";

type PrivacyParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PrivacyParams): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { privacyTitle, privacyDescription } = seoCopy[lang];

  return {
    title: privacyTitle,
    description: privacyDescription,
    alternates: { canonical: pathFor(lang, "/privacy"), languages: languageAlternates("/privacy") },
    openGraph: { url: pathFor(lang, "/privacy"), title: privacyTitle, description: privacyDescription },
    twitter: { title: privacyTitle, description: privacyDescription },
  };
}

export default async function PrivacyView({ params }: PrivacyParams) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const content = privacyContent[lang];

  return (
    <>
      <header className="border-b-2 border-ink px-[clamp(24px,6vw,90px)] py-4">
        <Link href={pathFor(lang)} className="font-mono text-xs uppercase tracking-[0.1em] underline underline-offset-4">
          ← {content.back}
        </Link>
      </header>
      <main id="main" className="mx-auto max-w-[760px] px-[clamp(24px,6vw,48px)] py-12">
        <h1 className="mb-2 font-display text-[clamp(28px,5vw,48px)] leading-[0.95] tracking-[-0.02em]">
          {content.title}
        </h1>
        <p className="mb-10 font-mono text-xs uppercase tracking-[0.1em]">{content.updated}</p>
        {content.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="mb-2 font-display text-xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-3 text-base leading-[1.6]">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </main>
      <footer className="border-t-2 border-ink px-[clamp(24px,6vw,90px)] py-4 font-mono text-xs uppercase tracking-[0.1em]">
        <CookiePreferencesButton />
      </footer>
    </>
  );
}
