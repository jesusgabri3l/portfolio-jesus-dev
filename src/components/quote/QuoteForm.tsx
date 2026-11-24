"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { quoteContent } from "@/lib/quote-content";
import type { Lang } from "@/lib/site";
import { MAX_LONG, MAX_SHORT } from "@/server/quote";

type Status = "idle" | "sending" | "sent" | "error";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

interface TurnstileApi {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id?: string) => void;
}
const turnstile = () => (window as unknown as { turnstile?: TurnstileApi }).turnstile;

function loadTurnstile(): Promise<void> {
  if (turnstile()) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = TURNSTILE_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Turnstile did not load"));
    document.head.appendChild(script);
  });
}

const fieldClass = "w-full border-2 border-ink bg-transparent px-3 py-2.5 text-base";
const labelClass = "mb-1.5 block font-mono text-xs uppercase tracking-[0.1em]";

export function QuoteForm({ lang }: { lang: Lang }) {
  const { labels, placeholders, submit, sending, success, errors } = quoteContent[lang];
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const token = useRef("");
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!SITE_KEY || !widget.current) return;
    let cancelled = false;
    loadTurnstile()
      .then(() => {
        if (cancelled || !widget.current) return;
        widgetId.current = turnstile()?.render(widget.current, {
          sitekey: SITE_KEY,
          appearance: "interaction-only",
          size: "flexible",
          callback: (value: string) => (token.current = value),
          "expired-callback": () => (token.current = ""),
          "error-callback": () => (token.current = ""),
        });
      })
      .catch(() => {
        // The submit will say what is missing.
      });
    return () => {
      cancelled = true;
      if (widgetId.current) turnstile()?.remove(widgetId.current);
    };
  }, []);

  const sendQuote = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    if (SITE_KEY && !token.current) {
      setStatus("error");
      setMessage(errors.confirmHuman);
      return;
    }
    setStatus("sending");
    setMessage("");
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...fields, lang, token: token.current }),
      });
      if (!response.ok) {
        const { error } = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(error ?? String(response.status));
      }
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error && error.message === "captcha" ? errors.captcha : errors.generic);
      token.current = "";
      turnstile()?.reset(widgetId.current);
    }
  };

  if (status === "sent") {
    return (
      <div role="status">
        <h2 className="mb-2 font-display text-xl">{success.title}</h2>
        <p className="text-base leading-[1.6]">{success.text}</p>
      </div>
    );
  }

  return (
    <form onSubmit={sendQuote} className="flex flex-col gap-5">
      <div>
        <label htmlFor="quote-name" className={labelClass}>{labels.name}</label>
        <input id="quote-name" name="name" required maxLength={MAX_SHORT} autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="quote-business" className={labelClass}>{labels.business}</label>
        <input id="quote-business" name="business" required maxLength={MAX_SHORT} autoComplete="organization" placeholder={placeholders.business} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="quote-need" className={labelClass}>{labels.need}</label>
        <textarea id="quote-need" name="need" required rows={4} maxLength={MAX_LONG} placeholder={placeholders.need} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="quote-contact" className={labelClass}>{labels.contact}</label>
        <input id="quote-contact" name="contact" required maxLength={MAX_SHORT} placeholder={placeholders.contact} className={fieldClass} />
      </div>
      {/* Honeypot: hidden from people and screen readers, bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div ref={widget} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-fit items-center border-2 border-ink bg-ink px-4 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-cream transition-opacity hover:opacity-80 disabled:opacity-60"
      >
        {status === "sending" ? sending : submit}
      </button>
      <p role="alert" className="min-h-[1.5em] font-mono text-xs">
        {status === "error" ? message : ""}
      </p>
    </form>
  );
}
