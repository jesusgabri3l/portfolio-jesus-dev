import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Solo "/": manda al idioma preferido. Inglés solo si el navegador lo pide primero; si no, español (x-default).
export function proxy(request: NextRequest) {
  const accepted = (request.headers.get("accept-language") ?? "").toLowerCase();
  const prefersEnglish = /^\s*en\b/.test(accepted);
  const url = request.nextUrl.clone();
  url.pathname = prefersEnglish ? "/en" : "/es";
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = { matcher: "/" };
