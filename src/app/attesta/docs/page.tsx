import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AttestaHeader from "@/components/AttestaHeader";
import AttestaFooter from "@/components/AttestaFooter";
import { ATTESTA_APPSTORE_URL, SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Attesta Documentation - How to use the app",
  description:
    "How to use Attesta: onboarding, the compliance dashboard, your invoice ledger, per-order tax treatment, USt-IdNr. capture and VIES, Stornorechnungen, the invoice template designer, DATEV and GoBD exports, plans and billing.",
};

type TocItem = { id: string; label: string };

const toc: TocItem[] = [
  { id: "overview", label: "What Attesta does" },
  { id: "start", label: "Getting started" },
  { id: "dashboard", label: "Your dashboard" },
  { id: "invoices", label: "Your invoices" },
  { id: "tax", label: "Tax treatment" },
  { id: "vatid", label: "VAT IDs and VIES" },
  { id: "storno", label: "Refunds and corrections" },
  { id: "template", label: "Your invoice design" },
  { id: "settings", label: "Settings" },
  { id: "exports", label: "Archive and exports" },
  { id: "plans", label: "Plans and billing" },
  { id: "faq", label: "FAQ and troubleshooting" },
];

/** Inline badge marking a feature that needs the Accounting plan. */
function PlanTag({ children }: { children: string }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-[6px] bg-[#E8F5EE] px-2 py-[2px] align-middle font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0F6B4A]">
      {children}
    </span>
  );
}

/**
 * A captioned figure, framed to match the app's card style. The images are cropped out of
 * the App Store artwork by `_dev/brand/gen/crop_docs.sh` in the Attesta repo, so their
 * intrinsic sizes differ and each one passes its own.
 */
function Figure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="my-7">
      <div className="overflow-hidden rounded-[12px] border border-[#E6EDEA] bg-[#F5F8F7]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 744px"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-2.5 text-[13px] leading-[1.55] text-[#7C8F88]">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function AttestaDocsPage() {
  return (
    <div className="attesta-scope">
      <AttestaHeader />

      {/* Title block */}
      <section className="mx-auto max-w-[1000px] px-5 pt-[clamp(44px,6vw,72px)] sm:px-8">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0F8A5F]">
          Attesta · Guide
        </div>
        <h1 className="m-0 mb-[18px] text-[clamp(34px,5vw,48px)] font-semibold tracking-[-0.035em] text-[#16202E]">
          How to use Attesta
        </h1>
        <p className="m-0 mb-[26px] max-w-[640px] text-[18px] leading-[1.6] text-[#5A6B80]">
          Attesta answers about five questions when you install it, then writes
          the invoice for every paid order on its own. This guide walks through
          each screen and explains what the app decides for you.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={ATTESTA_APPSTORE_URL}
            className="rounded-[9px] bg-[#0F4B3C] px-[18px] py-[10px] text-[14px] font-medium text-white"
          >
            Install Attesta
          </a>
          <Link
            href="/support"
            className="rounded-[9px] border border-[#D9E4E0] px-[18px] py-[10px] text-[14px] font-medium text-[#33463F]"
          >
            Contact support
          </Link>
        </div>
        <div className="mt-[26px] border-b border-[#E6EDEA] pb-2 font-mono text-[12px] text-[#7C8F88]">
          LAST UPDATED · 26 August 2026
        </div>
      </section>

      {/* Body: sticky TOC + content */}
      <section className="mx-auto grid max-w-[1000px] grid-cols-1 items-start gap-10 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-[200px_1fr] md:gap-[56px]">
        <nav className="toc top-[90px] hidden md:sticky md:block">
          <div className="mb-[14px] font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C8F88]">
            On this page
          </div>
          <div className="flex flex-col gap-2.5">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[13.5px] text-[#5A6B80]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="legal-body">
          <h2 id="overview">What Attesta does</h2>
          <p>
            Attesta watches your paid Shopify orders. When one is paid it picks
            the German tax treatment that fits the buyer, takes the next number
            in your sequence, renders your branded invoice, embeds the machine
            readable XML inside it, files the result in a ten-year archive and
            emails it. You do not open the order.
          </p>
          <p>
            What it produces is a <strong>ZUGFeRD 2.2</strong> invoice: a PDF/A-3
            a person can read, with the <strong>EN 16931</strong> CII XML
            attached inside the same file. The XML is the part that counts
            legally, and it is the part a plain PDF has never had. For
            public-sector buyers with a Leitweg-ID, Attesta emits{" "}
            <strong>XRechnung 3.0</strong> instead.
          </p>
          <p>
            The app is built for Germany. Other EU markets are designed but not
            active yet, so a shop selling from outside Germany is not covered
            today.
          </p>

          <h2 id="start">Getting started</h2>
          <p>
            Installing from the App Store opens a short wizard. It runs once and
            asks about five questions, then the app is working.
          </p>
          <ul>
            <li>
              <strong>Company and tax.</strong> Your legal name and address,
              USt-IdNr. and Steuernummer, and whether you invoice as a
              Kleinunternehmer under §19 UStG. These print on every invoice, so
              give the registered details rather than the trading name.
            </li>
            <li>
              <strong>Invoice rules.</strong> Whether invoices issue
              automatically when an order is paid or wait for you, how numbering
              runs, and whether to collect EU VAT IDs from business buyers. If
              you already have a number series, tell Attesta the last number you
              used and it continues from there rather than restarting at 1.
            </li>
            <li>
              <strong>Finish.</strong> Everything else comes from your shop:
              currency, buyer addresses, line items, tax rates.
            </li>
          </ul>
          <p>
            The wizard is deliberately short. Attesta asks about five questions
            because the rest is either in your shop already or fixed by the law.
          </p>

          <h2 id="dashboard">Your dashboard</h2>
          <p>
            Home answers one question: is this shop compliant right now. The
            status card at the top says either that everything is compliant or
            that something needs attention, and lists the four checks behind
            that answer, which are ZUGFeRD and XRechnung generation, gap-free
            numbering, VAT logic and Reverse-Charge, and the ten-year GoBD
            archive.
          </p>
          <p>
            Below it sits a countdown to January 2027, counters for invoices
            this month, Stornorechnungen and orders waiting on you, a setup
            checklist for the things worth finishing (logo, IBAN and payment
            details, DATEV), and the documents issued most recently. Every
            number comes from your real data.
          </p>
          <p>
            On the free plan the page also shows how many invoices you have
            issued this month against the free allowance.
          </p>
          <Figure
            src="/attesta/docs/dashboard.png"
            alt="Attesta dashboard with a compliance status card, the January 2027 countdown, monthly counters, a setup checklist and recent activity"
            width={890}
            height={690}
            caption="Home: the compliance card and its four checks, the countdown to January 2027, the month's counters, what is left to set up, and the last documents issued."
          />

          <h2 id="invoices">Your invoices</h2>
          <p>
            <strong>Rechnungen</strong> lists every document Attesta has issued,
            newest first: the number and whether it is a Rechnung or a
            Stornorechnung, the order behind it, the buyer, the tax treatment
            that was applied, its status, and the PDF and XML. You can filter by
            type and search. The list reads from a flat ledger, so it opens at
            once however many invoices sit behind it, and{" "}
            <strong>Export</strong> pulls the whole ledger down as a GoBD ZIP.
          </p>
          <Figure
            src="/attesta/docs/invoices.png"
            alt="The Attesta invoices list, each row showing the document number and type, order, buyer, tax treatment, status and PDF and XML links"
            width={1404}
            height={538}
            caption="Every document Attesta has issued, with the tax treatment it applied shown on the row and the PDF and XML beside it."
          />
          <p>Opening a document shows the legal record in a readable form:</p>
          <ul>
            <li>
              A preview of the invoice as it was rendered, with the{" "}
              <strong>XML</strong> on its own tab next to it.
            </li>
            <li>
              An <strong>audit trail</strong> of created, validated and
              archived, carrying the GoBD hash for that document.
            </li>
            <li>
              <strong>Delivery and routing</strong>, which names the format that
              went out: ZUGFeRD 2.2, EN 16931, PDF/A-3.
            </li>
            <li>
              <strong>VIES proof</strong>, the stored VAT-ID check, when the
              buyer gave one.
            </li>
          </ul>
          <p>
            <strong>Download</strong> saves the real file, the same bytes that
            were archived, not a fresh render. There is no Create button on this
            page, because every document comes from a paid order.
          </p>
          <Figure
            src="/attesta/docs/invoice-detail.png"
            alt="An Attesta invoice detail screen: the rendered invoice with an XML tab, and a sidebar with the audit trail, delivery format and VIES proof"
            width={966}
            height={826}
            caption="One document: the rendered invoice with the XML on its own tab, and the audit trail, the format that went out and the stored VIES check alongside it."
          />
          <p>
            When an order cannot be invoiced, Attesta records the problem rather
            than failing quietly. The open count shows on Home and the list
            lives under <strong>Probleme</strong>, where you can fix the cause
            and retry the order.
          </p>

          <h2 id="tax">Tax treatment</h2>
          <p>
            Attesta decides the treatment per order, from the buyer, not from a
            setting you have to remember to change:
          </p>
          <ul>
            <li>
              <strong>Standard</strong> German VAT at 19% or 7% on a domestic
              sale.
            </li>
            <li>
              <strong>Reverse-Charge (§13b UStG)</strong> for a business buyer
              in another EU country with a valid VAT ID. The invoice goes out at
              0% and carries the reverse-charge notice.
            </li>
            <li>
              <strong>Intra-Community supply</strong> at 0%, on goods moving to
              a VAT-registered business elsewhere in the EU, with the VAT ID as
              proof.
            </li>
            <li>
              <strong>Export (§6 UStG)</strong>, no VAT, for goods leaving the
              EU.
            </li>
            <li>
              <strong>Kleinunternehmer (§19 UStG)</strong>, if you set that in
              onboarding. No VAT is shown and the §19 notice takes its place.
            </li>
          </ul>
          <p>
            The treatment chooses both the legal notice printed on the invoice
            and the tax codes written into the XML, and it is shown on every row
            of the invoice list so you can see what was applied without opening
            the document.
          </p>

          <h2 id="vatid">VAT IDs and VIES</h2>
          <p>
            Reverse-Charge only holds up if the buyer&apos;s VAT ID is real, so
            Attesta collects it before the order is paid. There are three places
            a business buyer can enter it: a block in{" "}
            <strong>checkout</strong>, a block in the <strong>cart</strong>, and
            their <strong>customer account</strong> profile.
          </p>
          <p>
            The ID is checked against <strong>VIES</strong>, the EU
            commission&apos;s VAT number service. Attesta stores the
            consultation it got back and shows it on the invoice detail page, so
            if the treatment is ever questioned you have the check on file with
            the document rather than a claim that you did it.
          </p>
          <Figure
            src="/attesta/docs/vat-id.png"
            alt="A checkout business-details form with a validated EU VAT ID field, and a callout confirming the VIES check was stored with the invoice"
            width={710}
            height={620}
            caption="A business buyer enters their USt-IdNr. before paying. Attesta checks it against VIES and keeps the consultation with the invoice."
          />

          <h2 id="storno">Refunds and corrections</h2>
          <p>
            A German invoice is never edited after it is issued. It is reversed
            by a credit note, a <strong>Stornorechnung</strong>, and Attesta
            writes those for you.
          </p>
          <ul>
            <li>
              <strong>Refund a paid order</strong> and Attesta issues an EN
              16931 credit note that reverses the refunded amount, references
              the original invoice and takes the next number in the same
              sequence.
            </li>
            <li>
              <strong>Edit a paid order</strong> and Attesta compares the
              edited order against the invoice on file. If the amounts or the
              VAT changed, it cancels the old invoice in full and issues a
              corrected one in the same locked step. Both go to the buyer, the
              cancellation first.
            </li>
            <li>
              Edits that change no money, such as tags, notes, fulfilment or a
              corrected address, produce no new document.
            </li>
            <li>
              An order edited down to nothing invoiceable is cancelled without a
              replacement.
            </li>
          </ul>
          <Figure
            src="/attesta/docs/storno.png"
            alt="A refund turning an invoice into a credit note: the original number and amount beside the Stornorechnung and its negative amount, with the reference and document type 381"
            width={780}
            height={520}
            caption="A refund produces a credit note that reverses the amount, references the original invoice and takes the next number in the same sequence."
          />

          <h2 id="template">Your invoice design</h2>
          <p>
            The <strong>Rechnungsvorlage</strong> screen is where the invoice
            gets your brand instead of ours. It has three regions.
          </p>
          <ul>
            <li>
              On the left, the blocks that make up the invoice. Drag to reorder
              recipient, line items, totals, payment details, notes and footer.
              The blocks the law requires are locked, so reordering cannot
              accidentally cost you the legal validity of the document.
            </li>
            <li>
              In the middle, a live preview of your own invoice. A switcher
              renders it under each tax case, including a credit note, so you
              can see how a Reverse-Charge or §19 invoice will look before one
              exists. Clicking a region of the preview selects that block.
            </li>
            <li>
              On the right, the Block, Brand and Template tabs: which line-item
              columns appear, your logo, accent colour and font, and the base
              layout.
            </li>
          </ul>
          <p>
            Nothing here can change a number. The design controls presentation
            only, and every layout in the catalog renders all the mandatory EN
            16931 fields.
          </p>
          <Figure
            src="/attesta/docs/template.png"
            alt="The Attesta template designer: a list of invoice blocks with the required ones tagged, next to a live preview of the invoice in the merchant's own accent colour"
            width={750}
            height={570}
            caption="Blocks on the left, your own invoice previewed live on the right, and the blocks the law requires locked where they are."
          />

          <h2 id="settings">Settings</h2>
          <p>Five cards, each opening its own editor.</p>
          <ul>
            <li>
              <strong>Company and tax</strong>. Your legal identity, tax IDs and
              the Kleinunternehmer toggle. The same details the wizard asked
              for, editable afterwards.
            </li>
            <li>
              <strong>Invoice rules</strong>. Automatic or manual issuing, the
              numbering series including continuing an existing one, and B2B
              VAT-ID capture.
            </li>
            <li>
              <strong>Delivery</strong>. The subject and message of the invoice
              email and its reply-to address, plus your payment block: IBAN,
              BIC, payment terms and the net term in days, which becomes the due
              date on the invoice.
            </li>
            <li>
              <strong>Accounting</strong>. Your tax accountant&apos;s email,
              your DATEV Berater and Mandant numbers, and whether the export
              books against SKR03 or SKR04. Any of the eight accounts it uses
              can be overridden if your accountant runs a custom chart.
            </li>
            <li>
              <strong>Advanced</strong>. Your default Leitweg-ID for
              public-sector buyers, whether B2G invoices go out as XRechnung,
              and your GoBD archive information and data export.
            </li>
          </ul>
          <p>
            At the bottom is a country section that reflects where you sell.
            For Germany it says that no transmission network is required,
            because a German invoice reaches the buyer by email.
          </p>

          <h2 id="exports">Archive and exports</h2>
          <p>
            Every document Attesta issues is stored with its XML and a SHA-256
            hash that chains to the document before it, along with a snapshot of
            the template it was rendered with. That is what makes the archive
            tamper-evident, and what a Betriebsprüfer is looking for when GoBD
            asks you to keep the record complete for ten years.
          </p>
          <p>Three exports come out of it:</p>
          <ul>
            <li>
              <strong>GoBD ZIP</strong>, from the invoice list or the Advanced
              card. It holds the XML and PDF of every document plus a manifest
              carrying the hash chain, which is also what you hand over for a
              GDPR data request.
            </li>
            <li>
              <strong>Verfahrensdokumentation</strong>, the procedural
              documentation GoBD expects, generated as a German PDF pre-filled
              with your details and how the pipeline works. A few merchant-only
              passages are left as visible placeholders for you to complete.
            </li>
            <li>
              <strong>DATEV Buchungsstapel</strong>, an EXTF booking batch for a
              date range, with one row per VAT-rate group so a mixed-rate
              invoice splits correctly, mapped to your SKR03 or SKR04 accounts.
              A range has to sit inside one fiscal year, and your Berater and
              Mandant numbers have to be filled in, because DATEV refuses the
              import without them. Rows are not marked as final, so your
              accountant reviews the batch before posting it.
              <PlanTag>Accounting</PlanTag>
            </li>
          </ul>
          <p>
            The GoBD ZIP is available on every plan, including Free, because
            getting your own records out is not something to charge for. The
            DATEV batch needs the Accounting plan.
          </p>
          <Figure
            src="/attesta/docs/archive.png"
            alt="Three archived documents in a chain, each showing its own SHA-256 hash and the hash of the previous document, above an export as GoBD ZIP action"
            width={780}
            height={560}
            caption="Each document carries its own SHA-256 hash and the hash of the one before it, which is what makes the archive tamper-evident."
          />
          <Figure
            src="/attesta/docs/datev.png"
            alt="The DATEV export with a date range, an SKR03 chart of accounts and a preview of the EXTF booking rows"
            width={780}
            height={560}
            caption="The DATEV export: a date range, your chart of accounts, and the EXTF booking rows your accountant imports."
          />

          <h2 id="plans">Plans and billing</h2>
          <p>
            Everything the law requires is in every paid plan. Plans differ by
            volume and by accounting workflow, never by whether your invoices
            are legally valid.
          </p>
          <ul>
            <li>
              <strong>Free, $0</strong> - ZUGFeRD and XRechnung, manual or
              automatic issuing, email delivery and numbering. There is a soft
              allowance of 25 invoices a month: past it Attesta suggests
              upgrading, but it keeps issuing. Compliance is never switched off.
              Invoices on the free plan carry a small &quot;Erstellt mit
              Attesta&quot; line on the visual, never in the XML, because the
              XML is the legal record.
            </li>
            <li>
              <strong>Compliance, $9/month</strong> ($7 a month billed yearly) -
              unlimited invoices, automatic Stornorechnungen,
              USt-IdNr.-Erfassung with VIES, automatic Reverse-Charge and the
              GoBD ten-year archive.
            </li>
            <li>
              <strong>Accounting, $19/month</strong> ($15 a month billed yearly)
              - everything in Compliance plus the DATEV package, numbering
              migration, Verfahrensdokumentation and CSV or API export.
            </li>
          </ul>
          <p>
            Billing runs through Shopify and appears on your normal Shopify
            invoice, in USD. Annual billing saves about 20%. You can change
            plans or cancel from inside the app at any time, and if you cancel
            you land back on Free, where invoicing keeps working: the free tier
            still issues legally valid e-invoices.
          </p>

          <h2 id="faq">FAQ and troubleshooting</h2>
          <p>
            <strong>Is a PDF invoice not enough?</strong> Not under the German
            mandate. From January 2027 a B2B invoice has to carry structured
            data a machine can read. ZUGFeRD solves it by putting that data
            inside the PDF, so the same file works for your buyer and for their
            software.
          </p>
          <p>
            <strong>I already have an invoice number series. Will it
            restart?</strong> No. In onboarding, or later under invoice rules,
            enter the last number you issued and Attesta continues the sequence
            from there. Numbering stays gap-free across the whole ledger.
          </p>
          <p>
            <strong>My shop is not in Germany.</strong> Attesta is Germany-first
            today. Other markets change the tax-ID fields, the currency, the
            invoice format and how the invoice is transmitted, and each one has
            to be built before it is offered. They are on the roadmap, not in
            the app.
          </p>
          <p>
            <strong>Will it slow my storefront down?</strong> No. Attesta works
            behind Shopify webhooks and touches nothing a shopper loads. An
            invoice normally appears within a minute of the order being paid.
          </p>
          <p>
            <strong>My buyer never got the invoice email.</strong> Check the
            reply-to address and message under Delivery in Settings, then open
            the document: if it is archived, the file exists and you can send it
            yourself with Download while you sort the address out.
          </p>
          <p>
            <strong>What happens to my data if I uninstall?</strong> Access is
            revoked at once and Shopify then asks us to erase the shop&apos;s
            data. Export the GoBD ZIP first: German retention rules are your
            obligation, and they run for ten years whether or not the app is
            still installed. See the{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
          <div className="mt-9 rounded-[12px] border border-[#E6EDEA] bg-[#F5F8F7] px-[22px] py-[18px] text-[15px] leading-[1.65] text-[#3a4654]">
            <strong>Still stuck?</strong> Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your{" "}
            <strong>.myshopify.com</strong> URL and the invoice number, and we
            will pick it up the same business day.
          </div>
        </div>
      </section>

      <AttestaFooter />
    </div>
  );
}
