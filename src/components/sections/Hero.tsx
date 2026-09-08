import Image from "next/image";
import { hero } from "@/lib/content";
import { useLang } from "@/lib/lang-context";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative flex h-full w-screen flex-none items-center overflow-hidden bg-cream px-[clamp(24px,6vw,90px)] py-[90px]">
      <div
        className="pointer-events-none absolute top-[6%] right-[-2vw] select-none font-display text-[clamp(120px,26vw,340px)] leading-[0.8] text-transparent"
        style={{ WebkitTextStroke: "2px rgba(13,13,13,.13)" }}
      >
        JG
      </div>
      <div className="relative flex w-full items-center gap-[clamp(24px,5vw,70px)]">
        <div className="min-w-0 flex-1">
          <h1 className="mb-[18px] font-display text-[clamp(38px,6.6vw,100px)] leading-[0.9] tracking-[-0.03em]">
            {hero.name[0]}
            <br />
            {hero.name[1]}
          </h1>
          <div className="font-mono text-[clamp(11px,1.35vw,15px)] uppercase tracking-[0.1em]">
            {t(hero.role)}
          </div>
        </div>
        <Image
          src="/images/pose-hero.png"
          alt="Jesús Gabriel"
          width={260}
          height={448}
          className="block w-[clamp(90px,11vw,160px)] flex-none h-auto"
        />
      </div>
    </section>
  );
}
