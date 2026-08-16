# Canacona Hardware & Paints — Vercel-ready website

A multipage Next.js catalogue website designed for a local hardware/paint store.

## Pages
- `/`
- `/products`
- `/products/[slug]`
- `/categories`
- `/categories/[slug]`
- `/brands/opus`
- `/about`
- `/contact`

## Before launch
1. Replace the placeholder business name.
2. Replace phone number and WhatsApp number.
3. Replace the Google Maps placeholder with the client's exact embed.
4. Replace the sample catalogue in `lib/catalog.js` with real products.
5. Add real product/store photography under `public/` if desired.
6. Update business metadata in `app/layout.js`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

Push this folder to GitHub and import the repository into Vercel. Vercel will detect Next.js automatically.

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```
