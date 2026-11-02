"use client";

import { openCookiePreferences } from "@/lib/consent";
import { uiCopy } from "@/lib/seo-copy";
import { useLang } from "@/lib/lang-context";

export function CookiePreferencesButton({ className = "" }: { className?: string }) {
  const { lang } = useLang();

  return (
    <button type="button" onClick={openCookiePreferences} className={`cursor-pointer underline underline-offset-2 ${className}`}>
      {uiCopy[lang].cookiePreferences}
    </button>
  );
}
