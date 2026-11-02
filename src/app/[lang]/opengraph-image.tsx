import { ImageResponse } from "next/og";
import { hasLocale, defaultLang } from "@/lib/site";

export const alt = "Jesús Gabriel Ahumada — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const kicker = {
  en: "FREELANCE FRONTEND DEVELOPER",
  es: "DESARROLLADOR WEB FREELANCE",
};

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = hasLocale(rawLang) ? rawLang : defaultLang;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#F4F1E8",
          color: "#0D0D0D",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 4, opacity: 0.6, marginBottom: 24 }}>{kicker[lang]}</div>
        <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 0.95, display: "flex", flexDirection: "column" }}>
          <span>JESÚS GABRIEL</span>
          <span>AHUMADA</span>
        </div>
        <div style={{ fontSize: 26, marginTop: 32, opacity: 0.75 }}>
          Senior Frontend Engineer · Vue 3 · React · Node.js · AWS
        </div>
      </div>
    ),
    { ...size },
  );
}
