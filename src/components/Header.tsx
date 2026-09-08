"use client";

import Image from "next/image";
import { nav } from "@/lib/content";
import { useLang } from "@/lib/lang-context";

export function Header({
  activeIndex,
  onNavClick,
}: {
  activeIndex: number;
  onNavClick: (index: number) => void;
}) {
  const { lang, toggleLang, t } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-3 border-b-2 border-ink bg-cream px-[clamp(14px,3vw,32px)] py-[11px]">
      <div className="flex min-w-0 items-center gap-2.5">
        <Image
          src="/images/avatar.png"
          alt="Jesús Gabriel"
          width={34}
          height={34}
          className="size-[34px] flex-none rounded-full border-2 border-ink bg-cream object-cover"
          style={{ objectPosition: "50% 22%" }}
        />
        <span className="whitespace-nowrap font-display text-[clamp(12px,1.5vw,15px)] tracking-[-0.01em]">
          JESÚS GABRIEL
        </span>
      </div>

      <nav className="flex items-center gap-[clamp(8px,1.6vw,22px)] font-mono text-[clamp(9px,1.15vw,11px)] uppercase tracking-[0.08em]">
        {nav.map((item, i) => (
          <button
            key={item.es}
            onClick={() => onNavClick(i)}
            className="border-b-2 px-0.5 py-1 transition-opacity"
            style={{
              borderBottomColor: i === activeIndex ? "var(--color-ink)" : "transparent",
              opacity: i === activeIndex ? 1 : 0.5,
            }}
          >
            {t(item)}
          </button>
        ))}
        <button
          onClick={toggleLang}
          className="ml-1 border-2 border-ink bg-ink px-2.5 py-[5px] uppercase tracking-[0.1em] text-cream"
        >
          <span className={lang === "es" ? "" : "opacity-50"}>ES</span>
          {" / "}
          <span className={lang === "en" ? "" : "opacity-50"}>EN</span>
        </button>
      </nav>
    </header>
  );
}
