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
| `/attesta`  | Attesta app landing (keeps Attesta's own green brand, signed "An Obarito app") |
| `/attesta/docs` | Attesta user guide (onboarding, invoices, tax treatment, exports, plans) |
| `/attesta/privacy` | Attesta privacy policy (buyer PII, GoBD retention vs erasure) |
| `/attesta/terms` | Attesta terms of service |
| `/privacy`  | Privacy policy (shared across apps) - **DRAFT scaffolding**             |
| `/terms`    | Terms of service - **DRAFT scaffolding**                                |
| `/support`  | Support policy and contact form                                         |
| `/deckle/docs` | Deckle theme setup, templates, print options and troubleshooting     |

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
  install CTA points here: `https://apps.shopify.com/rewindly-product-watchdog`.
- `ATTESTA_APPSTORE_URL` - the same thing for Attesta. Every install CTA on
  `/attesta` points here: `https://apps.shopify.com/attesta-e-rechnung-zugferd`.
- `DECKLE_THEME_STORE_URL` - reads `NEXT_PUBLIC_DECKLE_THEME_STORE_URL`. Add the
  public Theme Store listing after Shopify approves Deckle. The header, hero,
  closing CTA, and product schema update from this one value.
- `SUPPORT_EMAIL` - the only inbox that exists. Support, privacy and data
  requests all point here, including from the legal pages. There is no
  `privacy@`; give it its own constant again only once the mailbox is real.
- `LEGAL_EMAIL` - inbox for legal/terms questions, used by `/terms`.

### Analytics & heatmaps

Traffic analytics (GA4) and heatmaps/session replay (Microsoft Clarity) are wired
in `src/components/Analytics.tsx` and mounted globally from the root layout. Both
are **opt-in via env vars** - when unset, nothing loads and no third-party
requests fire, so local dev and preview deploys stay clean. Copy `.env.example`
and set the two ids in the Vercel project (Production scope):

- `NEXT_PUBLIC_GA_ID` - GA4 measurement id (`G-XXXXXXX`); auto-sends a pageview on
  every route change and feeds Google Ads conversions.
- `NEXT_PUBLIC_CLARITY_ID` - Microsoft Clarity project id; heatmaps + replay.

Both autocapture the "Add to Shopify" outbound click (the one conversion on this
site), so the CTAs need no per-button code. Note: tracking stops at the App Store
jump - reconcile outbound clicks against installs in the Shopify Partner
dashboard. Add a Meta Pixel / other ad tag in `Analytics.tsx` behind its own
`NEXT_PUBLIC_*` flag when needed.

### Support form

The support form posts to `/api/support` and sends the request plus an automatic
reply through Resend. Add these variables to the Vercel project:

- `RESEND_API_KEY`: a Resend API key allowed to send from the verified domain
- `SUPPORT_FORM_FROM`: the sender, normally `Obarito Support <support@obarito.com>`

The form accepts one JPG, PNG, WebP, GIF, PDF or MP4 attachment up to 3 MB.

### Speed Insights

`@vercel/speed-insights` reports real-user Core Web Vitals per route. It is
mounted straight from the root layout rather than from `Analytics.tsx`, because
it takes no id and no env var: in production it loads
`/_vercel/speed-insights/script.js` from our own origin, which only the Vercel
edge serves. Enable Speed Insights on the Vercel project and the numbers appear;
there is nothing to configure in the repo.

The layout renders it only when `NODE_ENV` is `production`. In dev the package
would instead pull a debug script from `va.vercel-scripts.com`, and the rule
above is that a local run fires no third-party requests.

## Brand notes

- **Obarito** (home, legal, support): orbital "O" mark, blue accent `#2563EB`,
  ink `#0B0F17`, Geist type. Calm, precise, engineering-led.
- **Rewindly** (`/rewindly` only): keeps its own brand - navy `#1a3353`,
  amber `#E9A23A`, stacked-layers mark. Obarito appears only as the
  "An Obarito app" footer signature.
- **Attesta** (`/attesta/*`): keeps its own brand - green `#0F4B3C`,
  mint `#34D399`, the clip-A mark. Same "An Obarito app" footer signature.
  `LegalLayout` takes `brand="attesta"`, which swaps in the Attesta chrome and
  puts the page in `.attesta-scope` for the green link colour.

Reusable building blocks live in `src/components/`:
`ObaritoHeader`, `ObaritoFooter`, `LegalLayout`, `ObaritoMark`, `RewindlyMark`,
`AttestaMark` (which also exports `AttestaGlyph` for placing the mark inside an
SVG that already exists, the way the home-page orbit does).
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

## Docs page figures

`/rewindly/docs` and `/attesta/docs` both carry captioned screenshots from
`public/<app>/docs/`.

The Attesta set is cut from that app's App Store artwork rather than captured from
a browser, because the app only renders inside the Shopify admin. The listing
images pair a headline with an app surface; the crop keeps the surface and drops
the headline. `_dev/brand/gen/crop_docs.sh` in the Attesta repo holds the rects
and writes straight into `public/attesta/docs/`, so re-run it after changing any
listing image:

```bash
/var/www/html/attesta/_dev/brand/gen/crop_docs.sh
```

They are between 700 and 1400 pixels wide, so they are close to 1x on a retina
screen where the Rewindly captures are 2x. Replace them with real captures once
the app is installable on a demo store.

## Deploy

Push to a Git repo and import into Vercel - no extra configuration needed. The
site is fully static/SSG.
