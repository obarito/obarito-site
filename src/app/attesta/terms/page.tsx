import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { type TocItem } from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service - Attesta",
  description:
    "The terms governing use of the Attesta app: what the software does, what stays your responsibility as the invoice issuer, plans and billing, and liability.",
};

const toc: TocItem[] = [
  { id: "service", label: "The service" },
  { id: "no-advice", label: "Not tax advice" },
  { id: "your-details", label: "Your details" },
  { id: "numbering", label: "Numbering" },
  { id: "billing", label: "Plans & billing" },
  { id: "data", label: "Your data & retention" },
  { id: "availability", label: "Availability" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "warranties", label: "Disclaimer of warranties" },
  { id: "liability", label: "Limitation of liability" },
  { id: "termination", label: "Termination" },
  { id: "changes", label: "Changes to these Terms" },
  { id: "contact", label: "Contact" },
];

export default function AttestaTermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro={`These Terms of Service ("Terms") govern your use of Attesta ("the App"), operated by Obarito ("we", "us"). By installing or using the App you agree to these Terms, on behalf of yourself and the store you represent.`}
      toc={toc}
      active="terms"
      brand="attesta"
      lastUpdated="28 August 2026"
      effectiveDate="26 August 2026"
    >
      <h2 id="service">The service</h2>
      <p>
        Attesta reads your paid Shopify orders and produces an invoice for each
        one: it applies a tax treatment, assigns a number, renders a ZUGFeRD 2.2
        PDF/A-3 with the EN 16931 XML embedded, or XRechnung for a public-sector
        buyer, archives it and emails it to the buyer. It also produces credit
        notes from refunds and order edits, and exports for your accountant. The
        App supports sellers invoicing under German rules; other markets are not
        covered today. Which features you get depends on your plan, and the App
        may change as we improve it.
      </p>

      <h2 id="no-advice">Not tax or legal advice</h2>
      <p>
        Attesta is software, not a Steuerberater. It automates document
        production against EN 16931 and the German invoicing rules as we
        understand them, but nothing it produces or displays is tax or legal
        advice, and using it does not by itself make you compliant.
      </p>
      <p>
        The tax treatment the App applies to an order is derived from the data
        Shopify gives it, chiefly the buyer&apos;s country, their VAT ID and the
        settings you entered. If that data is incomplete or wrong, the treatment
        can be wrong with it. You remain the issuer of every invoice, and
        responsible for whether it is correct for your business. Have your tax
        adviser confirm your setup before you rely on it, and check the first
        invoices the App issues.
      </p>

      <h2 id="your-details">Your details</h2>
      <p>
        Your legal name and address, USt-IdNr., Steuernummer, Kleinunternehmer
        status, bank details and payment terms are entered by you and printed on
        documents that go to your buyers and cannot be recalled once sent.
        Check them before you switch on automatic issuing. We do not verify that
        the details you enter are yours or that they are correct.
      </p>

      <h2 id="numbering">Numbering</h2>
      <p>
        Attesta keeps your invoice numbers gap-free within the App, continuing
        from the last number you told it about. If you also issue invoices into
        the same series outside the App, the sequence can end up with gaps or
        duplicates, and putting that right is your responsibility.
      </p>

      <h2 id="billing">Plans and billing</h2>
      <ul>
        <li>
          Attesta offers a <strong>Free</strong> plan,{" "}
          <strong>Compliance</strong> at $9 per month and{" "}
          <strong>Accounting</strong> at $19 per month. Annual billing is around
          20% cheaper. Prices exclude VAT.
        </li>
        <li>
          Billing runs through Shopify&apos;s billing system and appears on your
          Shopify invoice, in US dollars. We do not process or store your
          payment details.
        </li>
        <li>
          The Free plan carries a monthly invoice allowance. Going past it
          prompts you to upgrade, but it never stops the App from issuing an
          invoice, because a legally required document is not something to
          withhold over a plan limit.
        </li>
        <li>
          You can change plan or cancel at any time from inside the App.
          Cancelling returns you to Free, where invoicing keeps working.
          Amounts already billed are not refundable except where the law
          requires it.
        </li>
        <li>
          The prices shown in the App and on our App Store listing are the
          authoritative ones, and we will give notice before changing them.
        </li>
      </ul>

      <h2 id="data">Your data and retention</h2>
      <p>
        The archive the App keeps is there for your convenience. The statutory
        duty to retain your invoices for ten years is yours, not ours. Export
        your ledger with the GoBD export whenever you need your own copy, and in
        particular before you uninstall, because we erase your data when Shopify
        tells us you have gone. What we hold and how long is set out in the{" "}
        <Link href="/attesta/privacy">Privacy Policy</Link>, which forms part of
        these Terms.
      </p>
      <p>
        Because the App writes invoices, it processes personal data about your
        buyers on your behalf. You are the controller of that data and we are
        your processor. The terms of that processing are set out in the{" "}
        <Link href="/attesta/dpa">Data Processing Agreement</Link>, which also
        forms part of these Terms and takes effect when you install the App.
        Nothing separate needs signing.
      </p>

      <h2 id="availability">Availability</h2>
      <p>
        Invoices are produced by a background worker, normally within a minute
        of the order being paid. We do not offer a service level guarantee, and
        delivery of the webhooks the App depends on is Shopify&apos;s to make,
        not ours. We may take the service down for maintenance.
      </p>

      <h2 id="acceptable-use">Acceptable use</h2>
      <p>
        You agree not to misuse the App, attempt to disrupt its operation,
        access it by unauthorized means, or use it to issue documents that
        misrepresent a transaction or in any other way that breaks
        Shopify&apos;s terms or the law.
      </p>

      <h2 id="warranties">Disclaimer of warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot;,
        without warranties of any kind, express or implied. We do not warrant
        that it will be uninterrupted or error-free, that every order will
        produce an invoice, or that a given document will be accepted by any
        particular authority, buyer or accounting system.
      </p>

      <h2 id="liability">Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Obarito shall not be liable for
        any indirect, incidental or consequential damages, nor for lost profits,
        lost revenue, tax penalties, fines or loss of data arising from your use
        of, or inability to use, the App. Our total liability shall not exceed
        the amount you paid for the App in the preceding three months. Nothing
        in these Terms limits liability that cannot be limited by law.
      </p>

      <h2 id="termination">Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We may
        suspend or terminate access if these Terms are violated. Export your
        data first: see <a href="#data">Your data and retention</a>.
      </p>

      <h2 id="changes">Changes to these Terms</h2>
      <p>
        We may update these Terms. Continued use after a change means you accept
        the revised Terms, and the &quot;Last updated&quot; date above tells you
        when they last moved.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. How the App
        works day to day is covered in the{" "}
        <Link href="/attesta/docs">guide</Link>.
      </p>
    </LegalLayout>
  );
}
