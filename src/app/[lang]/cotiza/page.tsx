import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { quoteContent } from "@/lib/quote-content";
import { hasLocale, languageAlternates, pathFor } from "@/lib/site";

type QuoteParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: QuoteParams, parent: ResolvingMetadata): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { openGraph, twitter } = await parent;
  const { seoTitle, seoDescription } = quoteContent[lang];

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: { canonical: pathFor(lang, "/cotiza"), languages: languageAlternates("/cotiza") },
    openGraph: { url: pathFor(lang, "/cotiza"), title: seoTitle, description: seoDescription, images: openGraph?.images },
    twitter: { title: seoTitle, description: seoDescription, images: twitter?.images },
  };
}

export default async function QuoteView({ params }: QuoteParams) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const content = quoteContent[lang];

  return (
    <>
      <header className="border-b-2 border-ink px-[clamp(24px,6vw,90px)] py-4">
        <Link href={pathFor(lang)} className="font-mono text-xs uppercase tracking-[0.1em] underline underline-offset-4">
          ← {content.back}
        </Link>
      </header>
      <main id="main" className="mx-auto max-w-[760px] px-[clamp(24px,6vw,48px)] py-12">
        <h1 className="mb-3 font-display text-[clamp(28px,5vw,48px)] leading-[0.95] tracking-[-0.02em]">
          {content.title}
        </h1>
        <p className="mb-10 text-base leading-[1.6]">{content.intro}</p>
        <QuoteForm lang={lang} />
      </main>
      <footer className="border-t-2 border-ink px-[clamp(24px,6vw,90px)] py-4 font-mono text-xs uppercase tracking-[0.1em]">
        <CookiePreferencesButton />
      </footer>
    </>
  );
}
