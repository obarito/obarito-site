import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { type TocItem } from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Data Processing Agreement - Attesta",
  description:
    "The Art. 28 GDPR terms on which Obarito processes your buyers' personal data when Attesta issues invoices on your behalf.",
  path: "/en/attesta/dpa",
  locale: "en_US",
  languages: {
    "de-DE": "/attesta/dpa",
    en: "/en/attesta/dpa",
    "x-default": "/attesta/dpa",
  },
});

const toc: TocItem[] = [
  { id: "parties", label: "Parties and scope" },
  { id: "subject", label: "Subject and duration" },
  { id: "nature", label: "Nature and purpose" },
  { id: "categories", label: "Data and data subjects" },
  { id: "instructions", label: "Your instructions" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "security", label: "Security measures" },
  { id: "retention", label: "Retention and deletion" },
  { id: "subprocessors", label: "Sub-processors" },
  { id: "assistance", label: "Assistance we give you" },
  { id: "breach", label: "Breach notification" },
  { id: "audit", label: "Audit" },
  { id: "termination", label: "On termination" },
  { id: "contact", label: "Contact" },
];

export default function AttestaDpaPage() {
  return (
    <LegalLayout
      path="/en/attesta/dpa"
      title="Data Processing Agreement"
      intro={`Attesta writes invoices, so it processes personal data about your buyers on your behalf. This agreement sets out the terms of that processing under Art. 28 GDPR. It takes effect when you install the App and runs for as long as the installation does. You do not need to sign anything separately.`}
      toc={toc}
      active="privacy"
      brand="attesta"
      language="en"
      lastUpdated="28 August 2026"
      effectiveDate="28 August 2026"
    >
      <h2 id="parties">Parties and scope</h2>
      <p>
        You, the merchant who installed Attesta, are the{" "}
        <strong>controller</strong> of your buyers&apos; personal data. Obarito,
        which operates Attesta, is your <strong>processor</strong> for that
        data.
      </p>
      <p>
        This agreement covers only that relationship. Data about you and your
        shop, meaning your account, your seller details and your billing, is
        handled by Obarito as controller and is covered by the{" "}
        <Link href="/en/attesta/privacy">Privacy Policy</Link> instead. Where this
        agreement and the{" "}
        <Link href="/en/attesta/terms">Terms of Service</Link> disagree about
        personal data, this agreement wins.
      </p>

      <h2 id="subject">Subject and duration</h2>
      <p>
        We generate German e-invoices from your paid Shopify orders, validate
        them against EN 16931, archive them, and deliver them to your buyers
        where you have switched that on. Processing runs for the term of your
        installation, and for archived invoices, for the statutory retention
        period described below.
      </p>

      <h2 id="nature">Nature and purpose</h2>
      <p>
        Processing is automated and serves one purpose: producing, validating,
        archiving, exporting and delivering invoices that satisfy §14 UStG, the
        GoBD and EN 16931. We do not use your buyers&apos; data for anything
        else. We do not sell or share it, do not use it for marketing, do not
        build profiles from it, do not enrich it against outside sources, and do
        not use it to train machine learning models.
      </p>

      <h2 id="categories">Data and data subjects</h2>
      <p>
        The data subjects are your customers, and where a business buys from
        you, the people representing that business. The categories we process
        are the buyer&apos;s name or company name, their billing address, their
        email address, their VAT identification number where they give one, and
        the contents of their order. The full inventory, and the reason each
        field is needed, is in the{" "}
        <Link href="/en/attesta/privacy">Privacy Policy</Link>.
      </p>
      <p>
        We request the minimum that the job needs. Phone numbers are not
        requested and we have no use for them.
      </p>

      <h2 id="instructions">Your instructions</h2>
      <p>
        We process your buyers&apos; data only on your documented instructions.
        The App&apos;s settings and this agreement are those instructions. If an
        instruction looks to us like it would infringe data protection law, we
        will tell you, and we may decline to carry it out.
      </p>
      <p>
        Where an erasure request arrives for a buyer whose invoice has already
        been issued, we retain the invoice under Art. 17(3)(b) GDPR where you
        instruct us to do so because a legal obligation still applies. What can
        be erased is erased, and the request is recorded.
      </p>

      <h2 id="confidentiality">Confidentiality</h2>
      <p>
        Everyone we authorise to handle personal data is bound to
        confidentiality in writing, and that obligation outlives their
        involvement. Attesta has no admin panel and no support login, so
        reaching your data at all requires deliberate server access rather than
        a screen someone can wander into.
      </p>

      <h2 id="security">Security measures</h2>
      <p>Under Art. 32 GDPR we apply at least the following:</p>
      <ul>
        <li>
          TLS on all traffic, to browsers and to the Shopify API alike.
        </li>
        <li>
          AES-256 encryption at rest of buyer personal data, the invoice XML,
          the stored invoice view, order payloads held against failed attempts,
          VIES trader details, and your Shopify access token.
        </li>
        <li>Encryption at rest of the archived invoice PDFs.</li>
        <li>
          Strict separation between merchants: every database query is scoped to
          the shop making it.
        </li>
        <li>Authentication of every request by Shopify session token.</li>
        <li>
          No administrative interface through which our staff can browse
          merchant or buyer data.
        </li>
        <li>
          An access log recording reads of buyer data through the App, kept for
          one year.
        </li>
        <li>
          Production kept separate from development and test, with no production
          data copied into either.
        </li>
        <li>Encrypted, off-server backups of the invoice archive.</li>
        <li>
          A documented incident response procedure and a documented data loss
          prevention strategy.
        </li>
      </ul>

      <h2 id="retention">Retention and deletion</h2>
      <p>
        While the App remains installed, its standard archive retains issued
        invoices for ten years as part of the service you instruct us to provide.
        This ten-year configuration is not a statement that every invoice has a
        ten-year statutory period: the general period under §14b UStG is eight
        years, and longer periods can apply in particular cases. You remain
        responsible as controller for determining the applicable period and
        lawful basis. The order payload held behind a failed invoice attempt is
        erased once the attempt succeeds, on a buyer erasure request, or on your
        instruction.
      </p>
      <p>
        When you uninstall, we erase everything we hold for your shop as your
        processor once Shopify&apos;s <code>shop/redact</code> request reaches us,
        about 48 hours later. Any retention duty that still applies remains with
        you as controller, so <strong>export your GoBD ZIP before you leave</strong>.
        You can export it from the App at any time while the installation lasts.
      </p>

      <h2 id="subprocessors">Sub-processors</h2>
      <p>
        You give general authorisation for the sub-processors listed in the{" "}
        <Link href="/en/attesta/privacy">Privacy Policy</Link>: Shopify, our
        hosting provider, our email provider, and the European Commission&apos;s
        VIES service. We will announce any intended addition or replacement
        before it takes effect, and you may object.
      </p>
      <p>
        Invoice generation itself happens on our own server. The PDF renderer
        and the ZUGFeRD writer are libraries running locally, so no invoice
        content is sent anywhere to be processed. No AI or language model
        provider receives your buyers&apos; data.
      </p>

      <h2 id="assistance">Assistance we give you</h2>
      <p>
        We help you answer requests from your buyers, mainly through
        Shopify&apos;s privacy webhooks, all three of which Attesta implements. A
        data request returns the invoice records we hold for the named orders so
        you can answer the buyer, since the answer is yours to give.
      </p>
      <p>
        We also help with data protection impact assessments and with
        notifications to supervisory authorities, so far as the information is
        ours to give.
      </p>

      <h2 id="breach">Breach notification</h2>
      <p>
        If we become aware of a breach affecting your data, we will tell you
        without undue delay and at the latest within <strong>48 hours</strong>.
        Your own 72-hour clock under Art. 33 GDPR starts when you are told, so
        telling you late would cost you time you need.
      </p>
      <p>
        The notice will say what happened, which categories of data and roughly
        how many records are affected as far as we know, what the likely
        consequences are, and what we have done about it. Where we cannot yet
        tell, we will say that rather than guess.
      </p>

      <h2 id="audit">Audit</h2>
      <p>
        We will give you the information needed to show compliance with Art. 28
        GDPR, and allow an audit by you or an auditor you appoint, on reasonable
        notice and without disrupting the service.
      </p>

      <h2 id="termination">On termination</h2>
      <p>
        When the installation ends, we delete your data as described under
        Retention and deletion. Export your archive first: once the erasure runs,
        it is gone from our side, and the retention duty remains yours.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Questions about this agreement, or a request for the current
        sub-processor list with each entity and country, go to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
