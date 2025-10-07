# BPAC — Block Print Atelier Collective (Next.js App Router)

Minimal, luxury-lean Next.js app for the BPAC landing site with an Investors page.

## Tech
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

## Getting Started

```bash
npm i
npm run dev
# open http://localhost:3000
```

## Structure
- `app/page.tsx` — homepage (Hero, Collections, Provenance, Atelier, Journal, Investment, Patrons, Contact)
- `app/investors/page.tsx` — investors page with market bars, FAQ, CTAs
- `components/Navbar.tsx` and `components/Footer.tsx`
- `globals.css` — Tailwind base styles
- `public/og.jpg` — Open Graph placeholder

## Customize
- Replace placeholders with your images and copy.
- Update email and social links in `page.tsx`.
- Swap the Calendly link if needed.

## Deploy
- Vercel: import the repo, set the framework to Next.js, deploy.
- Node server: `npm run build && npm start`.

## Notes
- All content is static and can be extended with a CMS later.
- Add Recharts or a CMS if you need dynamic charts or posts.
