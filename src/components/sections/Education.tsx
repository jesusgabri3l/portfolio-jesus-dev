import Image from "next/image";
import { education } from "@/lib/content";
import { useLang } from "@/lib/lang-context";
import { stackIcons } from "@/components/stack-icons";

export function Education() {
  const { t } = useLang();

  return (
    <section
      id="education"
      className="relative flex min-h-screen w-full flex-none items-center overflow-hidden bg-cream px-[clamp(24px,6vw,90px)] py-[90px] pb-[280px] text-ink md:h-full md:w-screen md:pb-[90px]"
    >
      <Image
        src="/images/pose-education.png"
        alt=""
        width={198}
        height={463}
        className="absolute bottom-0 left-6 block w-[clamp(80px,8vw,120px)] h-auto opacity-90 md:h-[clamp(120px,26vh,280px)] md:w-auto"
      />
      <div className="flex w-full items-center gap-[clamp(24px,4vw,60px)]">
        <div className="min-w-0 flex-1">
          <div className="mb-2.5 font-mono text-[clamp(10px,1.2vw,12px)] uppercase tracking-[0.18em] opacity-60">
            {education.eyebrowNum} — {t(education.eyebrow)}
          </div>
          <h2 className="mb-5 font-display text-[clamp(24px,3.4vw,44px)] leading-[0.95] tracking-[-0.02em]">
            {t(education.title)}
          </h2>
          <div className="grid grid-cols-1 gap-[clamp(18px,3vw,40px)] sm:grid-cols-2">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] opacity-55">
                {t(education.degreesLabel)}
              </div>
              {education.degrees.map((d) => (
                <div key={d.school} className="border-t border-ink/30 py-3">
                  <div className="font-display text-[clamp(14px,1.4vw,18px)]">{t(d.title)}</div>
                  <div className="mt-1 text-[13px] opacity-70">{d.school}</div>
                </div>
              ))}
            </div>
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] opacity-55">
                {t(education.certificationsLabel)}
              </div>
              <div className="grid gap-2">
                {education.certifications.map((c) => {
                  const Icon = stackIcons[c.slug];
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 border border-ink/30 px-3 py-2.5 transition-colors hover:border-ink hover:bg-ink/5"
                    >
                      {Icon ? (
                        <Icon size={18} className="flex-none" aria-hidden="true" />
                      ) : (
                        <span className="flex-none font-display text-[11px]">
                          {c.slug.toUpperCase()}
                        </span>
                      )}
                      <span className="text-[12.5px] leading-[1.3] underline decoration-ink/40 underline-offset-2">
                        {c.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
