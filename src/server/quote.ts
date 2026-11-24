/** Validation of a quote request. Pure: shared by the endpoint and the form limits. */
export interface Quote {
  lang: "es" | "en";
  name: string;
  business: string;
  need: string;
  contact: string;
}

// Larger than Civitas (4096): the Turnstile token alone can weigh ~2 KB.
export const MAX_BODY_BYTES = 8192;
export const MAX_SHORT = 200;
export const MAX_LONG = 1000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s().-]{7,20}$/;

const CONTROL_CHARS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;
const clean = (value: unknown) => (typeof value === "string" ? value.replace(CONTROL_CHARS, "").trim() : null);

export type Parsed = { ok: true; quote: Quote; token: string; bot: boolean } | { ok: false };

export function parseQuote(body: unknown): Parsed {
  if (typeof body !== "object" || body === null || Array.isArray(body)) return { ok: false };
  const raw = body as Record<string, unknown>;
  const lang = clean(raw.lang);
  const name = clean(raw.name);
  const business = clean(raw.business);
  const need = clean(raw.need);
  const contact = clean(raw.contact);
  const token = clean(raw.token ?? "");
  const website = clean(raw.website ?? "");
  if (token === null || website === null) return { ok: false };
  if (lang !== "es" && lang !== "en") return { ok: false };
  if (name === null || business === null || need === null || contact === null) return { ok: false };
  const quote: Quote = { lang, name, business, need, contact };
  const bot = website !== "";
  if (bot) return { ok: true, bot, token, quote };
  if (!name || !business || !need || !contact) return { ok: false };
  if ([name, business, contact].some((value) => value.length > MAX_SHORT)) return { ok: false };
  if (need.length > MAX_LONG) return { ok: false };
  if (!EMAIL.test(contact) && !PHONE.test(contact)) return { ok: false };
  if (!token || token.length > 2048) return { ok: false };
  return { ok: true, bot, token, quote };
}

/** A cell that starts with = + - @ would be read as a formula by Sheets: a leading ' neutralizes it. */
export const safeCell = (value: string) => (/^[=+\-@]/.test(value) ? `'${value}` : value);
