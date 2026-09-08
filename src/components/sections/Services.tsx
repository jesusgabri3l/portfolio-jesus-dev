import { services } from "@/lib/content";
import { useLang } from "@/lib/lang-context";

export function Services() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="flex min-h-screen w-full flex-none items-center bg-cream px-[clamp(24px,6vw,90px)] py-[90px] text-ink md:h-full md:w-screen"
    >
      <div className="w-full">
        <div className="mb-3 font-mono text-[clamp(10px,1.2vw,12px)] uppercase tracking-[0.18em] opacity-55">
          {services.eyebrowNum} — {t(services.eyebrow)}
        </div>
        <h2 className="mb-6 font-display text-[clamp(26px,3.8vw,52px)] leading-[0.95] tracking-[-0.02em]">
          {t(services.title)}
        </h2>
        <div className="grid grid-cols-2 gap-x-px bg-ink/20 md:grid-cols-4">
          {services.items.map((item, i) => (
            <div
              key={item.num}
              className={`border-t-2 border-ink bg-cream p-[18px] ${
                i === 0 ? "pl-0" : i === services.items.length - 1 ? "md:pr-0" : ""
              }`}
            >
              <div className="mb-2.5 font-mono text-[11px] opacity-50">{item.num}</div>
              <h3 className="mb-2 font-display text-[clamp(16px,1.6vw,20px)] leading-[1.1]">
                {t(item.title)}
              </h3>
              <p className="text-[13px] leading-[1.5] opacity-85">{t(item.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
