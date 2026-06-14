import type { Metadata } from "next";
import LegalLayout, { type TocItem } from "@/components/LegalLayout";
import { LEGAL_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of obarito.com and the apps Obarito publishes on the Shopify App Store.",
};

const toc: TocItem[] = [
  { id: "acceptance", label: "Acceptance" },
  { id: "service", label: "The service" },
  { id: "accounts", label: "Accounts & access" },
  { id: "billing", label: "Billing" },
  { id: "acceptable", label: "Acceptable use" },
  { id: "ip", label: "Intellectual property" },
  { id: "warranty", label: "Disclaimers" },
  { id: "liability", label: "Liability" },
  { id: "termination", label: "Termination" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro="The terms that govern your use of obarito.com and the apps Obarito publishes on the Shopify App Store."
      toc={toc}
      active="terms"
      lastUpdated="14 June 2026"
      effectiveDate="14 June 2026"
    >
      <h2 id="acceptance">1 · Acceptance of terms</h2>
      <p>
        By installing an Obarito app or using obarito.com, you agree to these Terms
        on behalf of yourself and any store you represent, and you confirm you have
        authority to do so. If you do not agree, do not use the service. These
        Terms are between you and <strong>Obarito</strong>.
      </p>

      <h2 id="service">2 · The service</h2>
      <p>
        Obarito provides software apps that integrate with Shopify stores.
        Features, limits, and availability may change as we improve the apps. We
        may add, modify, or discontinue functionality with reasonable notice where
        practical.
      </p>

      <h2 id="accounts">3 · Accounts &amp; access</h2>
      <p>
        Access is tied to your Shopify store and the permissions you grant at
        install. You are responsible for maintaining the security of your store and
        for activity that occurs through your account. Notify us promptly of any
        unauthorized use.
      </p>

      <h2 id="billing">4 · Plans, billing &amp; cancellation</h2>
      <ul>
        <li>
          Paid plans are billed through <strong>Shopify Billing</strong> according
          to the pricing shown on the app&apos;s listing.
        </li>
        <li>
          Charges recur each billing period until you cancel by uninstalling the
          app or downgrading. Uninstalling also stops future charges.
        </li>
        <li>
          Except where required by law, fees already charged are non-refundable for
          partial periods. Any free plan or trial is offered as described on the
          app&apos;s listing.
        </li>
      </ul>

      <h2 id="acceptable">5 · Acceptable use</h2>
      <p>
        You agree not to misuse the service - including reverse-engineering it,
        overloading our systems, attempting unauthorized access, or using it to
        violate Shopify&apos;s terms or applicable law.
      </p>

      <h2 id="ip">6 · Intellectual property</h2>
      <p>
        Obarito and its apps, including the Obarito and app marks, are owned by us
        and protected by law. We grant you a limited, non-exclusive,
        non-transferable right to use the apps while your subscription is active.
        Your store&apos;s data remains yours.
      </p>

      <h2 id="warranty">7 · Disclaimers</h2>
      <p>
        The service is provided <strong>&quot;as is&quot;</strong> without
        warranties of any kind. We do not guarantee that the service will be
        uninterrupted, error-free, or that it will recover every change in every
        circumstance. Rewindly is a safeguard, not a substitute for your own
        backups and review.
      </p>

      <h2 id="liability">8 · Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Obarito is not liable for indirect,
        incidental, or consequential damages, and our total liability is limited to
        the greater of the amount you paid for the app in the{" "}
        <strong>6</strong>-month period before the claim, or <strong>USD $50</strong>.
      </p>

      <h2 id="termination">9 · Termination</h2>
      <p>
        You may stop using the service at any time by uninstalling the app. We may
        suspend or terminate access for breach of these Terms or to comply with
        law. On termination, your data is handled as described in the{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2 id="contact">10 · Changes &amp; contact</h2>
      <p>
        We may update these Terms; material changes will be posted here with a
        revised date. Questions:{" "}
        <strong>
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </strong>
        . These Terms are governed by the laws of the jurisdiction in which
        Obarito operates, without regard to conflict-of-laws rules.
      </p>
    </LegalLayout>
  );
}
