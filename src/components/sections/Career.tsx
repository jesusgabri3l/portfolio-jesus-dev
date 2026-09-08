import { career, type Bilingual } from "@/lib/content";
import { useLang } from "@/lib/lang-context";

export function Career() {
  const { t } = useLang();

  return (
    <section className="flex h-full w-screen flex-none items-center bg-ink px-[clamp(24px,6vw,90px)] py-[90px] text-cream">
      <div className="flex w-full flex-col gap-[18px]">
        <div>
          <div className="mb-3 font-mono text-[clamp(10px,1.2vw,12px)] uppercase tracking-[0.18em] opacity-55">
            {career.eyebrowNum} — {t(career.eyebrow)}
          </div>
          <h2 className="font-display text-[clamp(26px,3.8vw,52px)] leading-[0.95] tracking-[-0.02em]">
            {t(career.title)}
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-x-px bg-cream/22">
          {career.roles.map((r, i) => (
            <div
              key={r.role}
              className={`border-t-2 border-cream bg-ink py-[18px] px-5 ${
                i === 0 ? "pl-0" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.08em] opacity-65">
                <span
                  className={`size-2.5 flex-none rounded-full ${
                    r.current ? "bg-cream" : "border-2 border-cream"
                  }`}
                />
                {r.dateStart} —{" "}
                {typeof r.dateEnd === "string" ? r.dateEnd : t(r.dateEnd as Bilingual)}
              </div>
              <h3 className="mt-2.5 mb-1 font-display text-[clamp(16px,1.6vw,21px)] leading-[1.1]">
                {r.role}
              </h3>
              <div className="mb-2 text-[13px] opacity-70">{r.company}</div>
              <p className="text-[13px] leading-[1.5]">{t(r.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
