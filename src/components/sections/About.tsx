import { about } from "@/lib/content";
import { useLang } from "@/lib/lang-context";
import { stackIcons } from "@/components/stack-icons";

export function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-none items-center overflow-hidden bg-ink px-[clamp(24px,6vw,90px)] py-[90px] text-cream md:h-full md:w-screen"
    >
      <div className="w-full max-w-[900px]">
        <div className="mb-3 font-mono text-[clamp(10px,1.2vw,12px)] uppercase tracking-[0.18em] opacity-60">
          {about.eyebrowNum} — {t(about.eyebrow)}
        </div>
        <h2 className="mb-[18px] font-display text-[clamp(28px,4vw,54px)] leading-[0.95] tracking-[-0.02em]">
          {about.title}
        </h2>
        <p className="mb-[26px] max-w-[720px] text-[clamp(15px,1.5vw,19px)] leading-[1.55] text-pretty">
          {t(about.paragraph)}
        </p>
        <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.16em] opacity-55">
          {about.stackLabel}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {about.stack.map((item) => {
            const Icon = stackIcons[item.slug];
            return (
              <div
                key={item.slug}
                className="flex items-center gap-2.5 border border-cream/40 px-3.5 py-2.5"
              >
                {Icon ? (
                  <Icon size={20} className="block" aria-hidden="true" />
                ) : (
                  <span className="font-display text-[11px] tracking-[-0.02em]">
                    {item.label}
                  </span>
                )}
                {Icon && <span className="font-mono text-xs">{item.label}</span>}
              </div>
            );
          })}
        </div>
        <a
          href={t(about.cvHref)}
          download
          className="mt-6 inline-flex items-center gap-2 border-2 border-cream bg-cream px-4 py-2.5 font-mono text-xs uppercase tracking-[0.1em] no-underline transition-opacity hover:no-underline hover:opacity-80"
          style={{ color: "var(--color-ink)" }}
        >
          {t(about.cvLabel)}
        </a>
      </div>
    </section>
  );
}
