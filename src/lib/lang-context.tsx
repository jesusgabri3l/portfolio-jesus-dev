"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Bilingual } from "./content";

type Lang = "es" | "en";

type LangContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: (value: Bilingual) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      toggleLang: () => setLang((l) => (l === "es" ? "en" : "es")),
      t: (value: Bilingual) => value[lang],
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
