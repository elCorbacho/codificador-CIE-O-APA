<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack

- Next.js **16.2.4** (App Router) + React **19** + TypeScript (**strict**)
- Tailwind CSS **4** (`app/globals.css` uses `@import "tailwindcss"` + `@theme` tokens)
- shadcn/ui in `components/ui/` (see `components.json`, style: `new-york`)
- Tests: **Vitest** (jsdom) — config in `vitest.config.ts`
- Zod (validation) + Zustand (state)
- Path alias: `@/*` → project root (`tsconfig.json`)

## Commands

```bash
npm run dev      # dev server
npm run build   # CI expects static export to ./out (see Deploy)
npm run lint
npm run typecheck
npm test         # vitest run
npm run test:watch
```

Quality gate order: `lint → typecheck → test → build`.

## Architecture

- Entrypoints: `app/layout.tsx` (fonts + `next-themes`), `app/page.tsx`.
- Domain: `lib/cieo/` (normalize/search/filters) + types in `types/cieo.ts`.
- Data source of truth: `data/*.json` extracted from `codificador_CIE-O.html`.
- Validation: `lib/validations/cieo.schema.ts`.
- State: `store/` (Zustand).
- Components: `components/{layout,cieo,ui}/`.

## Key conventions

- Fonts are wired in `app/layout.tsx`: `DM_Serif_Display` (headings), `IBM_Plex_Mono` (code), `DM_Sans` (body).
- Data regeneration: `npx tsx scripts/extraer-datos.ts` rewrites `data/*.json` from `codificador_CIE-O.html`.
- Agent tooling: `.atl/` exists (skill registry) and is gitignored.

## Deploy

GitHub Pages via `.github/workflows/deploy.yml`: it uploads `./out`.
That means `next.config.ts` MUST have `output: "export"` enabled (and `basePath` set if deploying under a repo subpath).
