import { HorizontalScroller } from "@/components/HorizontalScroller";
import { LangProvider } from "@/lib/lang-context";

export default function Home() {
  return (
    <LangProvider>
      <HorizontalScroller />
    </LangProvider>
  );
}
