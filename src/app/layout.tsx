import type { Metadata, Viewport } from "next";
import { Archivo_Black, Manrope, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://jesusgabriel.dev";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const TITLE = "Jesús Gabriel Ahumada — Fullstack JavaScript Software Engineer";
const DESCRIPTION =
  "Software Engineer with 6+ years in the JavaScript/TypeScript ecosystem — Vue 3, React, Node.js and AWS, building products for banking, e-commerce and internal tools used worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Jesús Gabriel Ahumada",
    "Software Engineer",
    "Fullstack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue 3",
    "Node.js",
    "AWS",
  ],
  authors: [{ name: "Jesús Gabriel Ahumada", url: SITE_URL }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Jesús Gabriel Ahumada",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F1E8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
