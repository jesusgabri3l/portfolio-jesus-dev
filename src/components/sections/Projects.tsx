import { projects } from "@/lib/content";
import { useLang } from "@/lib/lang-context";

export function Projects() {
  const { t } = useLang();

  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-none items-center overflow-y-auto bg-ink px-[clamp(24px,5vw,80px)] py-[clamp(20px,4vh,90px)] text-cream md:h-full md:w-screen"
    >
      <div className="w-full">
        <div className="mb-2 font-mono text-[clamp(10px,1.2vw,12px)] uppercase tracking-[0.18em] opacity-55">
          {projects.eyebrowNum} — {t(projects.eyebrow)}
        </div>
        <h2 className="mb-3 font-display text-[clamp(22px,3vh,44px)] leading-[0.95] tracking-[-0.02em]">
          {t(projects.title)}
        </h2>
        <div className="grid grid-cols-1 gap-px bg-cream/22 sm:grid-cols-2">
          {projects.items.map((p, i) => (
            <article
              key={p.title}
              className="flex min-h-[clamp(150px,24vh,220px)] flex-col gap-1.5 bg-ink p-3"
            >
              <div className="font-mono text-[10px] opacity-45">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-base leading-[1.05]">{p.title}</h3>
              <p className="flex-1 font-mono text-[10.5px] leading-[1.4] opacity-70">
                {t(p.desc)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-cream/30 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.05em] opacity-70"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10.5px]">
                <a
                  href={p.demoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-cream/40 underline-offset-2 hover:decoration-cream"
                >
                  {t(projects.demoLabel)} ↗
                </a>
                {p.repos.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-cream/40 underline-offset-2 hover:decoration-cream"
                  >
                    {t(projects.codeLabel)}
                    {p.repos.length > 1 ? ` (${r.label})` : ""} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
