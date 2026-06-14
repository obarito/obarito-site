# obarito.com

The publisher/company site for **Obarito** - a small studio that ships focused,
dependable Shopify apps. Built with **Next.js (App Router) + TypeScript +
Tailwind CSS v4**, deployable on Vercel.

This is a standalone repo, separate from the Laravel apps it markets.

## Routes

| Route       | Purpose                                                                 |
| ----------- | ----------------------------------------------------------------------- |
| `/`         | Company home - what Obarito is + the app portfolio grid                 |
| `/rewindly` | Rewindly app landing (keeps Rewindly's own navy brand, signed "An Obarito app") |
| `/privacy`  | Privacy policy (shared across apps) - **DRAFT scaffolding**             |
| `/terms`    | Terms of service - **DRAFT scaffolding**                                |
| `/support`  | Support / contact                                                       |

> Shopify App Store submission requires `/rewindly`, `/privacy`, and `/support`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Configuration

All site-wide constants live in **`src/lib/config.ts`**:

- `APPSTORE_URL` - Rewindly's Shopify App Store listing. Every "Add to Shopify" /
  install CTA points here. Placeholder is `https://apps.shopify.com/rewindly`
  until the real listing is live.
- `SUPPORT_EMAIL` / `PRIVACY_EMAIL` / `LEGAL_EMAIL` - contact addresses surfaced
  on `/support` and the legal pages.

## Brand notes

- **Obarito** (home, legal, support): orbital "O" mark, blue accent `#2563EB`,
  ink `#0B0F17`, Geist type. Calm, precise, engineering-led.
- **Rewindly** (`/rewindly` only): keeps its own brand - navy `#1a3353`,
  amber `#E9A23A`, stacked-layers mark. Obarito appears only as the
  "An Obarito app" footer signature.

Reusable building blocks live in `src/components/`:
`ObaritoHeader`, `ObaritoFooter`, `LegalLayout`, `ObaritoMark`, `RewindlyMark`.
A future app's landing can be added as `src/app/<app>/page.tsx` following the
`/rewindly` structure.

## Before launch

- `/privacy` and `/terms` are written accurate to Rewindly (product-only data,
  no customer PII, plan-based retention, Shopify compliance webhooks). Fill the
  remaining **`[bracketed]`** business facts and have both reviewed by counsel:
  - Legal-entity name + registered address (privacy controller; terms party)
  - Named sub-processors (hosting/database, email/Slack delivery, error monitoring)
  - Governing law + dispute venue, and the liability-cap period (terms)
- Set the real `APPSTORE_URL` once the Shopify listing is live.
- Confirm support/privacy/legal email inboxes are monitored.
- Favicon is set from the Obarito mark (`src/app/icon.svg`). Add an OG share
  image if desired (currently text-only Open Graph metadata).

## Deploy

Push to a Git repo and import into Vercel - no extra configuration needed. The
site is fully static/SSG.
