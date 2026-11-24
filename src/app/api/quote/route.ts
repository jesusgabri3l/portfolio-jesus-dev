import { appendRow } from "@/server/googleSheets";
import { MAX_BODY_BYTES, parseQuote, safeCell } from "@/server/quote";

const QUOTES_TAB = "Cotizaciones";

const reply = (status: number, body: Record<string, unknown> = {}) =>
  Response.json(body, { status, headers: { "cache-control": "no-store" } });

async function passesTurnstile(token: string, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) throw new Error("TURNSTILE_SECRET_KEY is not set");
  const form = new URLSearchParams({ secret, response: token });
  if (ip) form.set("remoteip", ip);
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form });
  if (!response.ok) return false;
  const { success } = (await response.json()) as { success?: boolean };
  return success === true;
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return reply(400);
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) return reply(400);

  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return reply(400);
  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return reply(400);
  }

  const parsed = parseQuote(body);
  if (!parsed.ok) return reply(400);
  if (parsed.bot) return reply(200); // honeypot: looks like success, nothing is stored

  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    if (!(await passesTurnstile(parsed.token, ip))) return reply(400, { error: "captcha" });

    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!email || !privateKey || !sheetId) throw new Error("Google Sheets variables are not set");

    const { lang, name, business, need, contact } = parsed.quote;
    const row = [new Date().toISOString(), lang, name, business, need, contact];
    await appendRow({ email, privateKey, sheetId }, QUOTES_TAB, row.map(safeCell));
    return reply(200);
  } catch (error) {
    console.error("quote failed", error);
    return reply(500);
  }
}
