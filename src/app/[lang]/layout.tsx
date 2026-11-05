import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Archivo_Black, Manrope, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { WebVitalsReporter } from "@/components/analytics/WebVitalsReporter";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { LangProvider } from "@/lib/lang-context";
import { seoCopy, uiCopy } from "@/lib/seo-copy";
import { SITE_URL, hasLocale, languageAlternates, localeTag, locales, otherLang, personName } from "@/lib/site";
import "../globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

type LayoutParams = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { title, description } = seoCopy[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    authors: [{ name: personName[lang], url: SITE_URL }],
    alternates: {
      canonical: `/${lang}`,
      languages: languageAlternates(),
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      title,
      description,
      siteName: personName[lang],
      locale: localeTag[lang],
      alternateLocale: localeTag[otherLang(lang)],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F1E8",
};

export default async function RootLayout({
  children,
  params,
}: LayoutParams & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${archivoBlack.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <LangProvider lang={lang}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:border-2 focus:border-ink focus:bg-cream focus:px-3 focus:py-2 focus:font-mono focus:text-xs"
          >
            {uiCopy[lang].skipLink}
          </a>
          {children}
          <CookieBanner />
        </LangProvider>
        <GoogleAnalytics />
        <WebVitalsReporter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
