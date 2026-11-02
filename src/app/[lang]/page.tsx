import { notFound } from "next/navigation";
import { HorizontalScroller } from "@/components/HorizontalScroller";
import { hasLocale } from "@/lib/site";
import { buildHomeStructuredData } from "@/lib/structured-data";

export default async function HomeView({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildHomeStructuredData(lang)).replace(/</g, "\\u003c"),
        }}
      />
      <HorizontalScroller />
    </>
  );
}
