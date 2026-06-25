import type { Metadata } from "next";
import LegalLayout, { type TocItem } from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service - Rewindly",
  description: "The terms governing use of the Rewindly app.",
};

const toc: TocItem[] = [
  { id: "service", label: "The service" },
  { id: "billing", label: "Plans & billing" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "restore", label: "Restore & data accuracy" },
  { id: "warranties", label: "Disclaimer of warranties" },
  { id: "liability", label: "Limitation of liability" },
  { id: "termination", label: "Termination" },
  { id: "changes", label: "Changes to these Terms" },
  { id: "contact", label: "Contact" },
];

export default function RewindlyTermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro={`These Terms of Service ("Terms") govern your use of Rewindly ("the App"), operated by Obarito ("we", "us"). By installing or using the App you agree to these Terms.`}
      toc={toc}
      active="terms"
      brand="rewindly"
      lastUpdated="15 June 2026"
      effectiveDate="15 June 2026"
    >
      <h2 id="service">The service</h2>
      <p>
        Rewindly records snapshots of your Shopify products, notifies you of
        changes, lets you restore previous versions, and provides price-history
        information. Features available depend on your selected plan.
      </p>

      <h2 id="billing">Plans &amp; billing</h2>
      <ul>
        <li>
          Rewindly offers a Free plan and a Pro plan at $29 per month, including a
          14-day free trial.
        </li>
        <li>
          All billing is handled securely through Shopify&apos;s billing system;
          we do not process or store payment details.
        </li>
        <li>
          You can cancel at any time by downgrading or uninstalling the App.
          Charges already billed are non-refundable except where required by law.
        </li>
        <li>
          Pricing shown in the App and on our listing is authoritative; we will
          give notice of any pricing changes.
        </li>
      </ul>

      <h2 id="acceptable-use">Acceptable use</h2>
      <p>
        You agree not to misuse the App, attempt to disrupt its operation, access
        it by unauthorized means, or use it in violation of Shopify&apos;s terms
        or applicable law.
      </p>

      <h2 id="restore">Restore &amp; data accuracy</h2>
      <p>
        The restore/undo feature writes a previous product snapshot back to your
        store using Shopify&apos;s API on a best-effort basis. You are responsible
        for reviewing restored data. We are not liable for changes you apply
        through the App.
      </p>

      <h2 id="warranties">Disclaimer of warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot;,
        without warranties of any kind, whether express or implied. We do not
        warrant that the App will be uninterrupted, error-free, or that it will
        capture every change.
      </p>

      <h2 id="liability">Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Obarito shall not be liable for
        any indirect, incidental, or consequential damages, or for any loss of
        data, profits, or revenue arising from your use of (or inability to use)
        the App. Our total liability shall not exceed the amount you paid for the
        App in the preceding three months.
      </p>

      <h2 id="termination">Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We may suspend
        or terminate access if these Terms are violated.
      </p>

      <h2 id="changes">Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use after changes
        constitutes acceptance of the revised Terms.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
