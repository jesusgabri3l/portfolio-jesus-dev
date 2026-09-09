import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  sectionBg?: "dark" | "light";
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  href,
  onClick,
  download,
  sectionBg = "dark",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] no-underline transition-opacity hover:no-underline hover:opacity-80";

  const primary =
    sectionBg === "dark"
      ? "border-2 border-cream bg-cream px-4 py-2.5"
      : "border-2 border-ink bg-ink px-4 py-2.5 text-cream";

  const secondary =
    sectionBg === "dark"
      ? "border border-cream/40 px-3.5 py-2 text-cream/70 hover:text-cream hover:border-cream"
      : "border border-ink/40 px-3.5 py-2 text-ink/70 hover:text-ink hover:border-ink";

  const classes = `${base} ${variant === "primary" ? primary : secondary} ${className}`;
  const style =
    variant === "primary" && sectionBg === "dark" ? { color: "var(--color-ink)" } : undefined;

  if (href) {
    return (
      <a href={href} download={download} onClick={onClick} className={classes} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}
