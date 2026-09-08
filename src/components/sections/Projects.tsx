import { projects } from "@/lib/content";
import { useLang } from "@/lib/lang-context";

export function Projects() {
  const { t } = useLang();
  const cards = Array.from({ length: projects.count }, (_, i) => i + 1);

  return (
    <section className="flex h-full w-screen flex-none items-center bg-ink px-[clamp(24px,5vw,80px)] py-[90px] text-cream">
      <div className="w-full">
        <div className="mb-2.5 font-mono text-[clamp(10px,1.2vw,12px)] uppercase tracking-[0.18em] opacity-55">
          {projects.eyebrowNum} — {t(projects.eyebrow)}
        </div>
        <h2 className="mb-5 font-display text-[clamp(24px,3.2vw,44px)] leading-[0.95] tracking-[-0.02em]">
          {t(projects.title)}
        </h2>
        <div className="grid grid-cols-5 gap-px bg-cream/22">
          {cards.map((n) => (
            <article
              key={n}
              className="flex min-h-[150px] flex-col gap-2 bg-ink p-4"
            >
              <div className="font-mono text-[10px] opacity-45">
                {String(n).padStart(2, "0")}
              </div>
              <h3 className="font-display text-base leading-[1.05] opacity-35">
                {projects.placeholderTitle}
              </h3>
              <p className="flex-1 font-mono text-[10.5px] leading-[1.5] opacity-40">
                {projects.placeholderDesc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
