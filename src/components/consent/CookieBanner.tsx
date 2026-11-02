"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  OPEN_PREFERENCES_EVENT,
  hasGlobalPrivacyControl,
  readStoredConsent,
  saveConsent,
  type ConsentChoice,
} from "@/lib/consent";
import { useLang } from "@/lib/lang-context";
import { pathFor } from "@/lib/site";
import type { Bilingual } from "@/lib/content";

const copy = {
  title: { es: "Cookies y analítica", en: "Cookies & analytics" } satisfies Bilingual,
  body: {
    es: "Uso Google Analytics para entender cómo se usa el sitio y medir su velocidad. Solo se activa si aceptas; si rechazas, no se guardan cookies de analítica.",
    en: "I use Google Analytics to understand how the site is used and to measure its speed. It only turns on if you accept; if you decline, no analytics cookies are stored.",
  } satisfies Bilingual,
  accept: { es: "Aceptar", en: "Accept" } satisfies Bilingual,
  reject: { es: "Rechazar", en: "Decline" } satisfies Bilingual,
  more: { es: "Política de privacidad", en: "Privacy policy" } satisfies Bilingual,
  region: { es: "Aviso de cookies", en: "Cookie notice" } satisfies Bilingual,
};

const buttonClass =
  "min-h-[44px] flex-1 cursor-pointer border-2 border-ink bg-cream px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-ink hover:bg-ink hover:text-cream";

export function CookieBanner() {
  const { lang, t } = useLang();
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLElement>(null);
  const focusOnOpenRef = useRef(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (!stored && hasGlobalPrivacyControl()) {
      saveConsent("denied");
      return;
    }
    if (!stored) setVisible(true);

    const reopen = () => {
      focusOnOpenRef.current = true;
      setVisible(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (!visible || !focusOnOpenRef.current) return;
    focusOnOpenRef.current = false;
    bannerRef.current?.focus({ preventScroll: true });
  }, [visible]);

  const decide = (choice: ConsentChoice) => {
    saveConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      ref={bannerRef}
      tabIndex={-1}
      aria-label={t(copy.region)}
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-[560px] border-2 border-ink bg-cream p-4 text-ink shadow-[4px_4px_0_0_var(--color-ink)] outline-none sm:inset-x-auto sm:right-4 sm:bottom-4 sm:mx-0"
    >
      <p className="mb-1 font-display text-sm">{t(copy.title)}</p>
      <p className="mb-3 text-[13px] leading-[1.5]">
        {t(copy.body)}{" "}
        <Link href={pathFor(lang, "/privacy")} className="underline underline-offset-2">
          {t(copy.more)}
        </Link>
      </p>
      <div className="flex gap-2">
        <button type="button" className={buttonClass} onClick={() => decide("denied")}>
          {t(copy.reject)}
        </button>
        <button type="button" className={buttonClass} onClick={() => decide("granted")}>
          {t(copy.accept)}
        </button>
      </div>
    </aside>
  );
}
