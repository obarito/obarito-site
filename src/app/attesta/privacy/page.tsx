import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { type TocItem } from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy - Attesta",
  description:
    "How Attesta handles store, seller and buyer data when it issues German e-invoices, including the ten-year GoBD retention that limits erasure.",
};

const toc: TocItem[] = [
  { id: "roles", label: "Who controls what" },
  { id: "collect", label: "Data we process" },
  { id: "buyers", label: "Buyer data" },
  { id: "use", label: "How we use it" },
  { id: "shopify", label: "Shopify scopes & webhooks" },
  { id: "sharing", label: "Sub-processors" },
  { id: "retention", label: "Retention & erasure" },
  { id: "rights", label: "Your rights" },
  { id: "security", label: "Security" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function AttestaPrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro={`This Privacy Policy explains how Attesta ("the App"), operated by Obarito ("we", "us"), handles data when you install and use the App on your Shopify store. Attesta writes invoices, so unlike our other apps it does process personal data about your buyers. This policy sets out exactly which data, why, and how long we keep it.`}
      toc={toc}
      active="privacy"
      brand="attesta"
      lastUpdated="26 August 2026"
      effectiveDate="26 August 2026"
    >
      <h2 id="roles">Who controls what</h2>
      <p>
        Two relationships run in parallel, and which one applies decides who
        answers a question about the data.
      </p>
      <ul>
        <li>
          For data about <strong>you and your shop</strong>, such as your
          account, your seller details and your billing, Obarito is the{" "}
          <strong>controller</strong>.
        </li>
        <li>
          For the personal data of <strong>your buyers</strong> that the App
          processes in order to write invoices, <strong>you</strong> are the
          controller and Obarito is your <strong>processor</strong>. We act on
          your instructions, which you give by configuring the App and by making
          sales through it.
        </li>
      </ul>
      <p>
        If one of your buyers contacts us directly about their data, we will
        point them to you, because the decision about their data is yours to
        make.
      </p>

      <h2 id="collect">Data we process</h2>
      <ul>
        <li>
          <strong>Store and account data</strong> - your{" "}
          <strong>.myshopify.com</strong> domain, the shop details Shopify
          provides at install, and the access token Shopify issues to the App.
        </li>
        <li>
          <strong>Your seller identity</strong> - the details you enter in
          onboarding and Settings: legal name and address, USt-IdNr. and
          Steuernummer, Kleinunternehmer status, IBAN, BIC and payment terms,
          your logo, your invoice email text, and, if you use the accounting
          features, your tax adviser&apos;s email address and your DATEV Berater
          and Mandant numbers. These print on the invoice or drive the export,
          which is why the App asks for them.
        </li>
        <li>
          <strong>Order data</strong> - for each paid order, the line items,
          amounts, currency, tax rates and the buyer&apos;s details needed on the
          invoice.
        </li>
        <li>
          <strong>Issued documents</strong> - for every invoice and credit note:
          its number, the order it came from, the buyer name and VAT ID,
          currency, net, tax and gross totals, the tax treatment applied, the EN
          16931 XML, the archived PDF, and the SHA-256 hashes that chain one
          document to the next.
        </li>
        <li>
          <strong>VAT-ID checks</strong> - the result of each VIES consultation,
          kept with the invoice as evidence for the tax treatment.
        </li>
        <li>
          <strong>Operational logs</strong> - technical records of what the App
          did, used to run it and to investigate faults.
        </li>
      </ul>

      <h2 id="buyers">Buyer data</h2>
      <p>
        A German invoice has to name the person it is addressed to, so an
        invoicing app cannot avoid buyer personal data the way a catalog app
        can. To produce the document, Attesta processes the buyer&apos;s{" "}
        <strong>name</strong> and any <strong>company name</strong>, the{" "}
        <strong>invoice address</strong>, the <strong>email address</strong> the
        invoice is sent to, the <strong>EU VAT ID</strong> where a business
        buyer provides one, and the <strong>contents and amounts</strong> of the
        order. These are the fields EN 16931 and §14 UStG require the invoice to
        carry.
      </p>
      <p>
        Attesta never receives card numbers, bank credentials or any other
        payment instrument. Payment is handled by Shopify and its payment
        providers, and the App only learns that an order was paid and for how
        much.
      </p>
      <p>
        Access to buyer data is granted by Shopify under its Protected Customer
        Data terms, and we use it only for the purposes set out below.
      </p>

      <h2 id="use">How we use it</h2>
      <ul>
        <li>
          Determine the correct tax treatment for each order, such as standard
          VAT, Reverse-Charge, intra-Community supply, export or §19.
        </li>
        <li>
          Number, render, validate and archive the invoice or credit note.
        </li>
        <li>Email the document to the buyer on your behalf.</li>
        <li>
          Verify a business buyer&apos;s VAT ID and keep the result as evidence.
        </li>
        <li>
          Produce the exports you ask for: the GoBD ZIP, the
          Verfahrensdokumentation, the DATEV booking batch.
        </li>
        <li>Show you your own ledger inside the App, and answer support requests.</li>
        <li>Bill you for the plan you chose, through Shopify.</li>
      </ul>
      <p>
        We do not sell data, we do not share it for advertising, and we do not
        use the contents of your invoices to train machine-learning models.
      </p>

      <h2 id="shopify">Shopify scopes and webhooks</h2>
      <p>
        Attesta requests three read scopes and no write scope:{" "}
        <strong>read_orders</strong>, which drives invoicing;{" "}
        <strong>read_customers</strong>, which backs VAT-ID capture from a
        business buyer&apos;s account; and <strong>read_products</strong>, which
        fills in the line-item detail. The App does not modify your catalog,
        your orders or your customers.
      </p>
      <p>
        It subscribes to order webhooks so that a paid order, a refund or an
        edit reaches the invoicing pipeline. It also registers the three privacy
        webhooks Shopify requires:
      </p>
      <ul>
        <li>
          <strong>customers/data_request</strong> - we compile the invoice
          records we hold for the named orders and make them available to you,
          so you can answer the buyer. We do not contact the buyer ourselves.
        </li>
        <li>
          <strong>customers/redact</strong> - see{" "}
          <a href="#retention">Retention and erasure</a>, because an issued
          invoice cannot simply be deleted.
        </li>
        <li>
          <strong>shop/redact</strong> - Shopify sends this roughly 48 hours
          after you uninstall, and we then erase the data we hold for your shop.
        </li>
      </ul>

      <h2 id="sharing">Sub-processors</h2>
      <p>We pass data to others only where running the App requires it:</p>
      <ul>
        <li>
          <strong>Shopify</strong> - the platform the App runs on, the source of
          the order data, and the processor of your subscription payments.
        </li>
        <li>
          <strong>Our hosting provider</strong> - runs the application and the
          database that holds your ledger and archived documents.
        </li>
        <li>
          <strong>Our email provider</strong> - delivers the invoice emails sent
          on your behalf, and our own notices to you.
        </li>
        <li>
          <strong>The European Commission</strong> - when a business buyer gives
          a VAT ID, that number and its country code are sent to the
          Commission&apos;s VIES service to be checked, together with your own
          VAT number as the requesting party, which is what makes VIES return
          the consultation identifier we store as proof. Nothing else about the
          order is sent.
        </li>
      </ul>
      <p>
        A current list of our sub-processors, with the entity and the country
        each operates in, is available on request from{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2 id="retention">Retention and erasure</h2>
      <p>
        An issued invoice is not ordinary app data. German law requires it to be
        kept, complete and unaltered, for <strong>ten years</strong> (GoBD, §14b
        UStG). GDPR Art. 17(3)(b) is explicit that the right to erasure does not
        apply where processing is necessary to meet a legal retention
        obligation. That produces three different outcomes, and it is worth
        knowing which is which.
      </p>
      <ul>
        <li>
          <strong>A buyer asks to be erased, and an invoice was issued.</strong>{" "}
          We <strong>retain</strong> the invoice and record the request. Erasing
          it would put you in breach of your own retention duty, so
          retain-and-log is the correct answer rather than a convenient one.
        </li>
        <li>
          <strong>A buyer asks to be erased, and no invoice was issued.</strong>{" "}
          Nothing is owed to the record-keeping rules here, so the stored order
          payload for that failed attempt is erased. The entry itself remains,
          without the payload, so you can still see that the order never
          produced an invoice.
        </li>
        <li>
          <strong>You uninstall.</strong> On <code>shop/redact</code> we erase
          what we hold for your shop as your processor: your seller profile, the
          invoice ledger, the archived PDFs, the VIES evidence and your logo.
          Your ten-year duty does not end with the uninstall, it stays with you
          as the controller, so <strong>export your GoBD ZIP before you
          leave</strong>.
        </li>
      </ul>
      <p>
        Operational logs are kept only as long as they are useful for running
        and debugging the service.
      </p>

      <h2 id="rights">Your rights</h2>
      <p>
        Where we are the controller, you have the rights the GDPR gives you:
        access, rectification, erasure, restriction of processing, portability
        and objection, and you may complain to your supervisory authority. Write
        to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we will
        answer within the statutory period.
      </p>
      <p>
        Where <em>you</em> are the controller and we process buyer data for you,
        you can exercise the same rights on your buyers&apos; behalf through the
        App: the ledger and the exports give you everything we hold, subject to
        the retention limit above.
      </p>

      <h2 id="security">Security</h2>
      <p>
        Data moves over HTTPS and is stored on access-controlled infrastructure.
        Archived invoices are kept outside the public web root and are served
        only to the shop that owns them, through links that are scoped and
        time-limited. Each document&apos;s hash is chained to the one before it,
        so a change to an archived invoice is detectable rather than silent. No
        system is perfectly secure, and we do not claim otherwise, but we take
        reasonable measures to protect what we hold.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        We may update this policy. Material changes will be reflected in the
        &quot;Last updated&quot; date above, and where the change affects how
        buyer data is processed we will tell you before it takes effect.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Privacy questions, and anything else about using the App, go to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Day to day
        usage is covered in the <Link href="/attesta/docs">guide</Link>, and our{" "}
        <Link href="/attesta/terms">Terms of Service</Link> cover the rest of
        the relationship.
      </p>
    </LegalLayout>
  );
}
