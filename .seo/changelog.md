# Changelog SEO

## 2026-11-02 · fase 2 · i18n
- **Páginas:** /en, /es, /{en,es}/privacy (nuevas)
- **Tipo:** i18n
- **Cambio:** rutas por idioma prerenderizadas (`app/[lang]`), `<html lang>` desde el servidor, hreflang + x-default, canonical por idioma, sitemap con alternates, `proxy.ts` redirige `/` por Accept-Language, el selector de idioma es un enlace.
- **Búsquedas objetivo:** ver `keywords.md`
- **Acciones del informe resueltas:** —

## 2026-11-02 · fase 2 · metadata/schema
- **Páginas:** /en, /es
- **Tipo:** metadata, schema
- **Cambio:** title (51 car.) y description (<=160) por idioma, OG localizado, JSON-LD Person + WebSite + ProfessionalService, tagline del hero con "freelance".
- **Acciones resueltas:** `title`, `description`, JSON-LD

## 2026-11-02 · fase 2 · analytics/consent
- **Páginas:** todas
- **Tipo:** analytics
- **Cambio:** GA4 con Consent Mode v2 (denied por defecto), banner propio, GPC, enlace "Preferencias de cookies", página de privacidad, web-vitals -> gtag solo con consentimiento. Se quita @vercel/analytics.
- **Acciones resueltas:** errores de consola (404 de /_vercel/insights, por confirmar)

## 2026-11-02 · fase 2 · a11y
- **Páginas:** /en, /es
- **Tipo:** a11y
- **Cambio:** `<main>`, skip link, landmarks, nombre accesible del logo sin `aria-label`, contraste (opacidades de texto), foco que trae la sección a la vista (orden de Tab), JG decorativo `aria-hidden`.
- **Acciones resueltas:** contraste, label-content-name-mismatch, main, landmarks, orden de Tab

## 2026-11-02 · fase 2 · perf
- **Páginas:** /en, /es
- **Tipo:** perf
- **Cambio:** layout responsive por CSS (sin esperar a JS: primer pintado correcto en móvil), Manrope sin peso 800, sin script de Vercel Analytics.
- **Acciones resueltas:** LCP móvil 2.7 s (por medir con site-audit)

## 2026-11-02 · fase 2 · contenido y ajustes
- **Páginas:** /, /en, /es
- **Tipo:** contenido, i18n, metadata
- **Cambio:** español por defecto (`/` -> /es salvo navegador en inglés, x-default /es); hero con nombre corto ("Jesús Gabriel", sin tilde en inglés); nombre por idioma en metadata y schema (`alternateName`); description ES con "Barranquilla" (búsqueda local, ver `serp-notes.md`); sin "6+ años" en el tagline; se quitan las ilustraciones de Contacto y Educación.
- **Búsquedas objetivo:** desarrollador web freelance Barranquilla / Colombia

## 2026-11-02 · fase 2 · medición del después (site-audit local)
- **Resultado:** perf móvil 95 → 100 (LCP 2.7 s → 1.1 s, TBT 126 → 84 ms), axe 4 → 0, acciones 10 → 5. Informe: `reports/2026-11-02-fase2.md`.
- **Ajustes durante la medición:** GA4 pasa a Consent Mode básico (gtag.js no se descarga hasta aceptar; antes salían pings sin cookies), enlace de idioma subrayado (link-in-text-block).
- **Pendiente (fase 3):** orden de Tab en /privacy, contraste y tamaño de targets (Lighthouse), og:image en /privacy, "/" fuera del sitemap (falso positivo: es redirección).
