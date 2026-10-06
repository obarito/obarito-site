import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AttestaMark from "@/components/AttestaMark";
import AttestaHeader from "@/components/AttestaHeader";
import AttestaFooter from "@/components/AttestaFooter";
import { ATTESTA_APPSTORE_URL } from "@/lib/config";
import {
  attestaEnglishSoftwareJsonLd,
  createPageMetadata,
  faqJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Attesta - German e-invoicing for Shopify",
  description:
    "Create validated ZUGFeRD 2.2 and EN 16931 invoices from paid Shopify orders, with VIES checks, DATEV exports, and a tamper-evident archive.",
  path: "/en/attesta",
  locale: "en_US",
  languages: { "de-DE": "/attesta", en: "/en/attesta", "x-default": "/attesta" },
});

const MANDATE = [
  {
    label: "January 2027",
    title: "Issuing becomes mandatory",
    body: "German businesses above €800,000 prior-year turnover must issue structured e-invoices for B2B sales. Everyone else follows.",
  },
  {
    label: "The format",
    title: "A PDF on its own is not one",
    body: "The invoice needs structured data a machine can read. ZUGFeRD 2.2 carries the EN 16931 XML inside a PDF/A-3, so it stays readable to both.",
  },
  {
    label: "Retention",
    title: "Eight years is the general rule",
    body: "German tax law generally requires invoices to be retained for eight years. They must stay complete, readable and available; longer periods can apply in particular cases.",
  },
];

const FAQS = [
  {
    question: "Does every German business need to issue structured e-invoices from January 2027?",
    answer:
      "Not at the same time. For domestic B2B sales, businesses with more than €800,000 in prior-year turnover generally lose the transitional option for ordinary PDFs or paper from 1 January 2027. Businesses at or below that threshold can generally use the transition through the end of 2027. Exceptions and special cases still apply.",
  },
  {
    question: "Is an ordinary PDF invoice an e-invoice under the German rules?",
    answer:
      "No. An e-invoice must contain structured data that can be processed automatically. A compliant ZUGFeRD file combines that structured data with a human-readable PDF.",
  },
  {
    question: "Can Attesta continue my existing invoice number sequence?",
    answer:
      "Yes. Enter the last number already issued during onboarding and Attesta continues from it instead of starting a separate sequence.",
  },
  {
    question: "Does Attesta replace my tax adviser?",
    answer:
      "No. Attesta automates document creation, validation, delivery and archiving, but your business remains responsible for its tax treatment and should obtain professional advice for its circumstances.",
  },
];

const faqSchema = faqJsonLd(FAQS);

const FEATURES = [
  {
    title: "Automatic on payment",
    body: "An order is paid, and Attesta numbers the invoice, renders it, validates it against EN 16931, archives it and emails it. Nobody opens the order.",
  },
  {
    title: "The right tax treatment, per order",
    body: "Standard 19% or 7%, Reverse-Charge, intra-Community supply, export outside the EU, or Kleinunternehmer §19. Decided from the buyer, not from a setting you have to remember.",
  },
  {
    title: "USt-IdNr. capture and VIES",
    body: "Business buyers add their EU VAT ID in checkout, in the cart, or on their account. Attesta checks it against VIES and stores the consultation number with the invoice.",
  },
  {
    title: "Stornorechnungen from refunds",
    body: "Refund a paid order and Attesta issues an EN 16931 credit note that reverses the refunded amount, references the original invoice and takes the next number in the same sequence.",
  },
  {
    title: "Your brand on the invoice",
    body: "Pick a design, set your accent colour and logo, and watch a live preview. Blocks the law requires can be reordered and restyled, never removed.",
  },
  {
    title: "GoBD archive and DATEV",
    body: "Every document is hashed with SHA-256 and chained to the one before it. Export the ledger as a GoBD ZIP, or hand your accountant an EXTF booking batch.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Answer about five questions",
    body: "Your company and tax IDs, whether invoices issue automatically, and whether to continue an existing number series. Everything else Attesta reads from your shop.",
  },
  {
    n: "02",
    title: "Sell as you already do",
    body: "Attesta watches paid orders. Each one becomes a ZUGFeRD 2.2 PDF with the EN 16931 XML inside it, validated, archived in a tamper-evident chain and emailed to the buyer.",
  },
  {
    n: "03",
    title: "Hand your accountant the batch",
    body: "A DATEV EXTF Buchungsstapel with your SKR03 or SKR04 accounts, or the whole ledger as a GoBD ZIP with a manifest. No folder of PDFs.",
  },
];

/**
 * Mirrors the app's own pricing screen (config/plans.php + lang/{locale}/pricing.php).
 * Three things here are deliberate and easy to "fix" wrongly:
 *   - Prices are USD. The Shopify Billing API call hardcodes currencyCode USD, so a page
 *     quoting EUR would promise one price and charge another.
 *   - `yearly` is the whole year's charge, taken in one go when the merchant approves it,
 *     not a spread-out monthly rate. The rule is ten months for twelve, so the year is
 *     always exactly ten times the monthly price and the saving is a flat 16.67% on every
 *     tier. Quoting a per-month equivalent here describes a charge Shopify never makes.
 *   - Peppol / B2G is not a tier. It is not built, and a "coming soon" plan reads to an
 *     App Store reviewer as advertising a feature the app does not have. It gets a tier
 *     when it ships.
 *
 * Nothing in this repo tests these numbers. The app's `plans` table is what the merchant is
 * actually charged, so a price change there has to be copied here by hand.
 */
const TIERS = [
  {
    name: "Free",
    price: "$0",
    yearly: null,
    tagline: "To get started",
    features: [
      "25 invoices / month, never blocked",
      "ZUGFeRD + XRechnung",
      "Manual or automatic",
      "Email delivery",
      "Numbering",
    ],
    popular: false,
  },
  {
    name: "Compliance",
    price: "$9",
    yearly: "or $90 / year, 2 months free",
    tagline: "The whole job, no limit",
    features: [
      "Unlimited invoices",
      "Stornorechnungen (credit notes) automatic",
      "USt-IdNr.-Erfassung + VIES",
      "Reverse-Charge automatic",
      "GoBD 10-Jahre-Archiv",
    ],
    popular: true,
  },
  {
    name: "Accounting",
    price: "$19",
    yearly: "or $190 / year, 2 months free",
    tagline: "The tax-accountant plan",
    features: [
      "Everything in Compliance",
      "DATEV-Paket (EXTF CSV + ZIP)",
      "Numbering migration",
      "Verfahrensdokumentation",
      "CSV export",
    ],
    popular: false,
  },
];

export default function AttestaPage() {
  return (
    <div lang="en" className="attesta-scope text-[#16202E]">
      <JsonLd data={[attestaEnglishSoftwareJsonLd, faqSchema]} />
      {/* ===== HEADER ===== */}
      <AttestaHeader locale="en" alternatePath="/attesta" />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#0F4B3C] text-white">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-14 px-5 pb-[clamp(60px,8vw,96px)] pt-[clamp(56px,8vw,92px)] sm:px-8 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.07] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#A9CFC1]">
              <AttestaMark className="h-[13px] w-[13px] text-white" /> German
              e-invoicing
            </div>
            <h1 className="m-0 mb-[22px] text-[clamp(38px,5.4vw,58px)] font-semibold leading-[1.04] tracking-[-0.035em]">
              Every paid order becomes a legal e-invoice.
            </h1>
            <p className="m-0 mb-[34px] max-w-[490px] text-[clamp(17px,2vw,20px)] leading-[1.6] text-[#B4D3C8]">
              Attesta turns each paid Shopify order into a ZUGFeRD 2.2 invoice with
              the EN 16931 XML inside it, files it in a ten-year GoBD archive and
              emails it. You never open the order.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={ATTESTA_APPSTORE_URL}
                className="inline-flex items-center gap-[9px] rounded-[12px] bg-white px-6 py-3.5 text-[15.5px] font-semibold text-[#0B3729]"
              >
                Add to Shopify <span className="text-[17px]">→</span>
              </a>
              <a
                href="#how"
                className="rounded-[12px] border border-white/[0.22] px-[22px] py-3.5 text-[15.5px] font-medium text-white"
              >
                See how it works
              </a>
            </div>
            <div className="mt-[30px] flex flex-wrap gap-6 text-[13.5px] text-[#94B8AB]">
              <span>✓ &nbsp;Free plan available</span>
              <span>✓ &nbsp;Germany first, EU to follow</span>
            </div>
          </div>

          {/* The issue pipeline, as the merchant sees it happen */}
          <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_30px_60px_rgba(4,26,19,0.42)]">
            <div className="flex items-center justify-between border-b border-[#EEF1F5] px-5 py-4">
              <div className="flex items-center gap-[9px]">
                <span className="h-[9px] w-[9px] rounded-full bg-[#34D399]" />
                <span className="text-[14px] font-semibold text-[#16202E]">
                  Invoice issued
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#5C6B82]">
                ORDER #1041
              </span>
            </div>
            <div className="flex flex-col gap-2 px-3.5 py-2.5">
              <div className="flex items-center gap-[13px] rounded-[12px] border border-[#EDF1F5] bg-[#F7F9FB] px-3.5 py-[13px]">
                <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px] bg-[#E7EDF3] text-[14px] text-[#5A6B80]">
                  €
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px] font-semibold text-[#16202E]">
                    Order paid
                  </div>
                  <div className="text-[12.5px] text-[#637385]">
                    Delacroix SARL · France
                  </div>
                </div>
                <span className="flex-none text-[12px] text-[#5C6B82]">14:02</span>
              </div>

              <div className="flex items-center gap-[13px] rounded-[12px] border border-[#CBEAD8] bg-[#F0FAF4] px-3.5 py-[13px]">
                <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px] bg-[#0F4B3C] text-[13px] font-semibold text-white">
                  %
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px] font-semibold text-[#16202E]">
                    Reverse-Charge applied
                  </div>
                  <div className="text-[12.5px] text-[#387D59]">
                    FR40312345678 valid in VIES · 0 % VAT
                  </div>
                </div>
                <span className="flex-none rounded-[8px] border border-[#CBEAD8] bg-white px-[11px] py-1.5 text-[12px] font-semibold text-[#0F4B3C]">
                  Auto
                </span>
              </div>

              <div className="flex items-center gap-[13px] rounded-[12px] border border-[#EDF1F5] bg-[#F7F9FB] px-3.5 py-[13px]">
                <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px] bg-[#E7EDF3] text-[13px] text-[#5A6B80]">
                  ⤓
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px] font-semibold text-[#16202E]">
                    RE-2026-0147 archived
                  </div>
                  <div className="text-[12.5px] text-[#637385]">
                    ZUGFeRD 2.2 · EN 16931 · PDF/A-3
                  </div>
                </div>
                <span className="flex-none text-[12px] text-[#5C6B82]">
                  Emailed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE MANDATE ===== */}
      <section className="mx-auto max-w-[1160px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8">
        <div className="mb-11 max-w-[680px]">
          <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#0E8058]">
            The mandate
          </div>
          <h2 className="m-0 mb-3.5 text-[clamp(28px,3.8vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]">
            E-Rechnung is not a nice-to-have any more.
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-[#5A6B80]">
            Germany is moving B2B invoicing to a structured format on a fixed
            timetable. Getting it right means the format, the tax treatment and the
            archive, on every single order.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {MANDATE.map((m) => (
            <div
              key={m.title}
              className="rounded-[16px] border border-[#E6EDEA] bg-[#F7FAF9] px-7 py-[30px]"
            >
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#0E8058]">
                {m.label}
              </div>
              <div className="mb-2.5 text-[19px] font-semibold tracking-[-0.02em] text-[#16202E]">
                {m.title}
              </div>
              <p className="m-0 text-[15px] leading-[1.62] text-[#5A6B80]">
                {m.body}
              </p>
            </div>
          ))}
        </div>
        <p className="m-0 mt-6 max-w-[860px] text-[13.5px] leading-[1.65] text-[#64746E]">
          Sources reviewed 7 October 2026: the German Federal Ministry of
          Finance&apos;s{" "}
          <a
            href="https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.htm"
            className="underline underline-offset-2"
          >
            e-invoice FAQ
          </a>{" "}
          and the transitional rules in{" "}
          <a
            href="https://www.gesetze-im-internet.de/ustg_1980/__27.html"
            className="underline underline-offset-2"
          >
            § 27 UStG
          </a>
          . This is general information, not tax or legal advice.
        </p>
      </section>

      {/* ===== FEATURES ===== */}
      <section
        id="features"
        className="scroll-mt-[72px] border-y border-[#E6EDEA] bg-[#F5F8F7]"
      >
        <div className="mx-auto max-w-[1160px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8">
          <div className="mb-11 max-w-[680px]">
            <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#0E8058]">
              What it does
            </div>
            <h2 className="m-0 mb-3.5 text-[clamp(28px,3.8vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]">
              The whole job, per order.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-[#5A6B80]">
              Attesta asks about five questions once, then handles the invoice from
              payment to archive without another decision from you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-[16px] border border-[#E6EDEA] bg-white px-7 py-[30px]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#0F4B3C] text-white">
                  <AttestaMark className="h-[22px] w-[22px]" />
                </div>
                <div className="mb-2.5 text-[18.5px] font-semibold tracking-[-0.02em] text-[#16202E]">
                  {f.title}
                </div>
                <p className="m-0 text-[15px] leading-[1.62] text-[#5A6B80]">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        id="how"
        className="mx-auto max-w-[1160px] scroll-mt-[72px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8"
      >
        <div className="mb-11 max-w-[680px]">
          <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#0E8058]">
            How it works
          </div>
          <h2 className="m-0 text-[clamp(28px,3.8vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]">
            Set it up once, then leave it alone.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {STEPS.map((s) => (
            <div key={s.n}>
              <div className="mb-4 font-mono text-[13px] font-medium tracking-[0.1em] text-[#1D845F]">
                {s.n}
              </div>
              <div className="mb-2.5 text-[20px] font-semibold tracking-[-0.02em] text-[#16202E]">
                {s.title}
              </div>
              <p className="m-0 text-[15.5px] leading-[1.62] text-[#5A6B80]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section
        id="pricing"
        className="scroll-mt-[72px] border-y border-[#E6EDEA] bg-[#F5F8F7]"
      >
        <div className="mx-auto max-w-[1160px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8">
          <div className="mb-11 max-w-[680px]">
            <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#0E8058]">
              Pricing
            </div>
            <h2 className="m-0 mb-3.5 text-[clamp(28px,3.8vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]">
              Everything the law requires is in every paid plan.
            </h2>
            <p className="m-0 text-[18px] leading-[1.6] text-[#5A6B80]">
              Compliance is not an upsell. Choose by volume and accounting
              workflow, never by legal certainty.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TIERS.map((t) => {
              const featured = t.popular;
              return (
                <div
                  key={t.name}
                  className={`relative flex h-full flex-col rounded-[20px] p-[30px] ${
                    featured
                      ? "border border-[#0F4B3C] bg-[#0F4B3C] text-white"
                      : "border border-[#E6EDEA] bg-white"
                  }`}
                >
                  {featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-[#34D399] px-[9px] py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#0B3729]">
                      Popular
                    </div>
                  )}
                  <div
                    className={`text-[18px] font-semibold ${
                      featured ? "text-white" : "text-[#0F4B3C]"
                    }`}
                  >
                    {t.name}
                  </div>
                  <div className="mb-1.5 mt-[14px] flex items-baseline gap-1.5">
                    <span className="text-[40px] font-semibold tracking-[-0.03em]">
                      {t.price}
                    </span>
                    <span
                      className={`text-[15px] ${
                        featured ? "text-[#A9CFC1]" : "text-[#5C6B82]"
                      }`}
                    >
                      / month
                    </span>
                  </div>
                  <div
                    className={`mb-[6px] text-[12.5px] ${
                      featured ? "text-[#94B8AB]" : "text-[#5C6B82]"
                    } ${t.yearly ? "" : "invisible"}`}
                    aria-hidden={t.yearly ? undefined : true}
                  >
                    {t.yearly ?? " "}
                  </div>
                  <p
                    className={`m-0 mb-[22px] mt-2 min-h-[45px] text-[14px] ${
                      featured ? "text-[#B4D3C8]" : "text-[#5A6B80]"
                    }`}
                  >
                    {t.tagline}
                  </p>

                  <a
                    href={ATTESTA_APPSTORE_URL}
                    className={`mb-6 block rounded-[11px] py-3 text-center text-[14.5px] font-semibold ${
                      featured
                        ? "bg-white text-[#0B3729]"
                        : "border border-[#C6D6CF] bg-white text-[#0F4B3C]"
                    }`}
                  >
                    {t.name === "Free" ? "Start free" : `Choose ${t.name}`}
                  </a>

                  <div className="flex flex-col gap-[11px]">
                    {t.features.map((f) => (
                      <div
                        key={f}
                        className={`text-[14px] ${
                          featured ? "text-[#DCEDE6]" : "text-[#3A4654]"
                        }`}
                      >
                        <span
                          className={`font-semibold ${
                            featured ? "text-[#34D399]" : "text-[#0E8058]"
                          }`}
                        >
                          ✓
                        </span>{" "}
                        &nbsp;{f}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="m-0 mt-8 text-[13.5px] text-[#64746E]">
            Prices exclude VAT. Billed through your Shopify invoice. Cancel any
            time.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-y border-[#E6EDEA] bg-[#F5F8F7]">
        <div className="mx-auto max-w-[920px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8">
          <div className="mb-10 max-w-[680px]">
            <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#0E8058]">
              Common questions
            </div>
            <h2 className="m-0 mb-3.5 text-[clamp(28px,3.8vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]">
              German e-invoicing, answered directly.
            </h2>
            <p className="m-0 text-[17px] leading-[1.6] text-[#5A6B80]">
              Short answers for planning purposes. Your adviser should confirm
              how the rules apply to your business.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((item) => (
              <details
                key={item.question}
                className="group rounded-[14px] border border-[#DCE7E2] bg-white px-5 py-4"
              >
                <summary className="cursor-pointer list-none pr-6 text-[16px] font-semibold leading-[1.45] text-[#16202E]">
                  {item.question}
                </summary>
                <p className="m-0 mt-3 max-w-[780px] text-[15px] leading-[1.65] text-[#5A6B80]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <p className="m-0 mt-6 text-[14px] text-[#64746E]">
            Need the operational details? Read the{" "}
            <a href="/en/attesta/docs" className="font-medium text-[#0E8058]">
              Attesta documentation
            </a>
            .
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-[1160px] px-5 py-[clamp(56px,8vw,96px)] sm:px-8">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0B3729] px-10 py-[clamp(40px,6vw,72px)] text-center">
          <h2 className="m-0 mb-4 text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.03em] text-white">
            German e-invoicing, handled per order.
          </h2>
          <p className="m-0 mx-auto mb-[30px] max-w-[500px] text-[18px] leading-[1.6] text-[#B4D3C8]">
            Install Attesta free and let every paid order leave a legally valid
            ZUGFeRD invoice behind it.
          </p>
          <a
            href={ATTESTA_APPSTORE_URL}
            className="inline-flex items-center gap-[9px] rounded-[13px] bg-white px-7 py-[15px] text-[16px] font-semibold text-[#0B3729]"
          >
            Add to Shopify <span className="text-[18px]">→</span>
          </a>
        </div>
      </section>

      {/* ===== FOOTER (with Obarito signature) ===== */}
      <AttestaFooter locale="en" />
    </div>
  );
}

