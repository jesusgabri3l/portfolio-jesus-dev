import Image from "next/image";
import { contact } from "@/lib/content";
import { useLang } from "@/lib/lang-context";

export function Contact() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-none items-center overflow-hidden bg-cream px-[clamp(24px,6vw,90px)] py-[90px] pb-[280px] text-ink md:h-full md:w-screen md:pb-[90px]"
    >
      <Image
        src="/images/pose-contact.png"
        alt=""
        width={227}
        height={467}
        className="absolute bottom-0 left-6 block w-[clamp(80px,8vw,120px)] h-auto opacity-90"
      />
      <div className="relative flex w-full items-center gap-[clamp(24px,5vw,70px)]">
        <div className="min-w-0 flex-1">
          <div className="mb-3.5 font-mono text-[clamp(10px,1.2vw,12px)] uppercase tracking-[0.18em] opacity-55">
            {contact.eyebrowNum} — {t(contact.eyebrow)}
          </div>
          <h2 className="mb-6.5 font-display text-[clamp(40px,7vw,96px)] leading-[0.85] tracking-[-0.03em]">
            {t(contact.title)}
          </h2>
          <div className="flex max-w-[460px] flex-col gap-3.5">
            {contact.links.map((link) => (
              <a
                key={link.value}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="flex items-baseline justify-between border-b border-ink/25 pb-2.5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-55">
                  {t(link.label)}
                </span>
                <span className="font-display text-base">{link.value}</span>
              </a>
            ))}
          </div>
          <div className="mt-6 font-mono text-[11px] tracking-[0.08em] opacity-50">
            {contact.location} · {t(contact.availability)}
          </div>
        </div>
      </div>
    </section>
  );
}
