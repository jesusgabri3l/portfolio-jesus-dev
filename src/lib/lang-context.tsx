"use client";

import { createContext, useContext, useMemo } from "react";
import type { Bilingual } from "./content";
import type { Lang } from "./site";

type LangContextValue = {
  lang: Lang;
  t: (value: Bilingual) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const value = useMemo<LangContextValue>(
    () => ({ lang, t: (value: Bilingual) => value[lang] }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
