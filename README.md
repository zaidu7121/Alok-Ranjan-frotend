
# Alok Ranjan — Intellectual Property Law

A frontend-only Next.js App Router website with typed content models, JSON seed data, an API adapter, responsive layouts and a validated contact form.

## Run locally

```bash
unzip alok-ranjan-law-website.zip
cd alok-ranjan-law-website
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000.

## Build and deploy

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

Deploy to Vercel or any Node.js host that supports Next.js. Set `NEXT_PUBLIC_SITE_URL` to the canonical site URL. Keep `NEXT_PUBLIC_API_BASE_URL` empty to use local JSON data. Set it to the backend origin when the API is ready.

## Content and assets

Edit `data/site-settings.json` for identity and contact values. Update seed data in `data/`. Replace SVG placeholders in `public/images/` with licensed local assets while preserving file names or updating the corresponding JSON image paths. Put the final profile PDF at `public/profile/alok-ranjan-profile.pdf` or change `profilePdf`.

## Accessibility

Includes a skip link, keyboard-accessible navigation, visible focus states, semantic headings, labelled form controls, carousel keyboard support and reduced-motion handling.
