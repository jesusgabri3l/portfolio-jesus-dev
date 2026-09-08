import Image from "next/image";
import { education } from "@/lib/content";
import { useLang } from "@/lib/lang-context";
import { stackIcons } from "@/components/stack-icons";

export function Education() {
  const { t } = useLang();

  return (
    <section className="relative flex h-full w-screen flex-none items-center overflow-hidden bg-cream px-[clamp(24px,6vw,90px)] py-[90px] text-ink">
      <Image
        src="/images/pose-education.png"
        alt=""
        width={198}
        height={463}
        className="absolute bottom-0 left-6 block w-[clamp(80px,8vw,120px)] h-auto opacity-90"
      />
      <div className="flex w-full items-center gap-[clamp(24px,4vw,60px)]">
        <div className="min-w-0 flex-1">
          <div className="mb-2.5 font-mono text-[clamp(10px,1.2vw,12px)] uppercase tracking-[0.18em] opacity-60">
            {education.eyebrowNum} — {t(education.eyebrow)}
          </div>
          <h2 className="mb-5 font-display text-[clamp(24px,3.4vw,44px)] leading-[0.95] tracking-[-0.02em]">
            {t(education.title)}
          </h2>
          <div className="grid grid-cols-2 gap-[clamp(18px,3vw,40px)]">
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
                    <div
                      key={c.label}
                      className="flex items-center gap-2.5 border border-ink/30 px-3 py-2.5"
                    >
                      {Icon ? (
                        <Icon size={18} className="flex-none" />
                      ) : (
                        <span className="flex-none font-display text-[11px]">
                          {c.slug.toUpperCase()}
                        </span>
                      )}
                      <span className="text-[12.5px] leading-[1.3]">{c.label}</span>
                    </div>
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
