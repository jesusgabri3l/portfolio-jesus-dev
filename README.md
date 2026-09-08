# Jesús Gabriel Ahumada — Portfolio

Personal portfolio site built with Next.js (App Router), Tailwind CSS and Framer Motion. Single page, bilingual (ES/EN), horizontal-scroll experience on desktop that switches to a vertical stacked layout on mobile.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app` — root layout, metadata (SEO/OG/robots/sitemap), page entry
- `src/components` — `Header`, `HorizontalScroller` (desktop pin-scroll / mobile stack switch), `ProgressBar`
- `src/components/sections` — one component per section (Hero, About, Services, Career, Education, Projects, Contact)
- `src/lib/content.ts` — all copy (ES/EN) and section data
- `src/lib/lang-context.tsx` — language toggle context

## Editing content

All text lives in `src/lib/content.ts` as bilingual `{ es, en }` objects — no copy is hardcoded in components.

## Deploy

Deployed on [Vercel](https://vercel.com).
