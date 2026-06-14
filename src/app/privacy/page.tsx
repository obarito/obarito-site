import type { Metadata } from "next";
import LegalLayout, { type TocItem } from "@/components/LegalLayout";
import { PRIVACY_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Obarito and its apps collect, use, and protect data. Rewindly accesses only product data - never Shopify customer information.",
};

const toc: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "collect", label: "Data we collect" },
  { id: "use", label: "How we use it" },
  { id: "sharing", label: "Sharing & processors" },
  { id: "retention", label: "Retention & deletion" },
  { id: "shopify", label: "Shopify data & webhooks" },
  { id: "rights", label: "Your rights" },
  { id: "security", label: "Security" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How Obarito and its apps collect, use, and protect data. This policy is shared across all Obarito apps; where an app differs, its App Store listing says so."
      toc={toc}
      active="privacy"
      lastUpdated="14 June 2026"
      effectiveDate="14 June 2026"
    >
      <h2 id="overview">1 · Overview</h2>
      <p>
        This Privacy Policy explains how <strong>Obarito</strong> (&quot;we&quot;,
        &quot;us&quot;) handles information when you visit obarito.com or install
        one of our Shopify apps. Our apps are built to collect as little as
        possible and to keep your store&apos;s data under your control.
      </p>
      <p>
        <strong>Rewindly</strong>, our first app, is a catalog change watchdog. It
        requests only the <strong>read_products</strong> and{" "}
        <strong>write_products</strong> Shopify scopes. It does{" "}
        <strong>not</strong> request, access, or store any Shopify{" "}
        <strong>customer</strong> personal information, order data, or payment
        details.
      </p>

      <h2 id="collect">2 · Data we collect</h2>
      <p>To operate the app, we process:</p>
      <ul>
        <li>
          <strong>Store &amp; account data</strong> - your{" "}
          <strong>.myshopify.com</strong> domain, basic shop details Shopify
          provides at install, and an <strong>offline access token</strong> we use
          to call the Shopify Admin API on your behalf.
        </li>
        <li>
          <strong>Product snapshots</strong> - when a product changes, Rewindly
          stores a snapshot of that product (title, description, price, variants,
          inventory, status, and similar fields) so it can show history and
          restore earlier versions.
        </li>
        <li>
          <strong>App configuration</strong> - the alert rules and notification
          settings you create, including any email address or Slack destination
          you choose to send alerts to.
        </li>
        <li>
          <strong>Usage &amp; diagnostics</strong> - log data and error reports
          used to keep the service reliable.
        </li>
        <li>
          <strong>Communications</strong> - messages you send us for support.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> collect Shopify customer names, emails,
        addresses, orders, or payment information.
      </p>

      <h2 id="use">3 · How we use it</h2>
      <ul>
        <li>To record product changes, surface suspicious edits, and restore versions.</li>
        <li>To deliver the alerts and notifications you configure.</li>
        <li>To operate, secure, maintain, and improve the app.</li>
        <li>To provide support and respond to your requests.</li>
      </ul>
      <p>
        We do <strong>not</strong> sell personal data and we do not use your store
        data for advertising.
      </p>

      <h2 id="sharing">4 · Sharing &amp; sub-processors</h2>
      <p>
        We do not sell or rent your data. We share it only with the service
        providers needed to run the app, each bound by a data-processing
        agreement, and with destinations you choose (for example, your own Slack
        workspace or email address when you enable notifications):
      </p>
      <ul>
        <li>
          <strong>Infrastructure providers</strong> - the cloud hosting, database,
          email, and notification services we use to run the app, each bound by a
          data-processing agreement.
        </li>
        <li>
          <strong>Shopify</strong> - the platform your store and our API access
          run on, under Shopify&apos;s own terms.
        </li>
      </ul>
      <p>We may also disclose data where required by law.</p>

      <h2 id="retention">5 · Data retention &amp; deletion</h2>
      <ul>
        <li>
          Product snapshots are retained for your plan&apos;s history window -{" "}
          <strong>30 days on Free</strong> and <strong>1 year on Pro</strong> -
          after which older snapshots are pruned automatically.
        </li>
        <li>
          When you uninstall, your access token is revoked. Shopify then sends a{" "}
          <strong>shop/redact</strong> request <strong>48 hours later</strong>, and
          we erase all of that store&apos;s data - every snapshot, alert, alert
          rule, and notification setting.
        </li>
        <li>
          You can ask us to delete your data sooner using the contact below.
        </li>
      </ul>

      <h2 id="shopify">6 · Shopify data &amp; mandatory webhooks</h2>
      <p>
        Because Rewindly does not access Shopify{" "}
        <strong>protected customer data</strong>, Shopify&apos;s Protected
        Customer Data requirements do not apply to it. We still follow
        data-minimization, encrypt data in transit and at rest, and limit
        retention as described above.
      </p>
      <p>We implement Shopify&apos;s three mandatory compliance webhooks:</p>
      <ul>
        <li>
          <strong>customers/data_request</strong> - we hold no customer personal
          data, so there is none to compile; we acknowledge and log the request.
        </li>
        <li>
          <strong>customers/redact</strong> - we store no customer personal data,
          so there is nothing to erase.
        </li>
        <li>
          <strong>shop/redact</strong> - we permanently delete all of the
          store&apos;s data, as described in Retention above.
        </li>
      </ul>

      <h2 id="rights">7 · Your rights (GDPR / CCPA)</h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        export, or delete your personal data, and to object to or restrict certain
        processing. To exercise any right, contact us using the details below; the
        fastest route to deletion is to uninstall the app, which triggers the
        erasure flow above.
      </p>

      <h2 id="security">8 · Security</h2>
      <p>
        We protect data with encryption in transit and at rest, store your access
        token securely, and apply least-privilege access controls with regular
        review. No method of transmission is perfectly secure, but we work to
        protect your information and to notify you of material incidents as
        required by law.
      </p>

      <h2 id="contact">9 · Contact</h2>
      <p>
        Questions or requests about this policy or your data:{" "}
        <strong>
          <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
        </strong>
        . The data controller is <strong>Obarito</strong>. We aim to respond
        within a reasonable period.
      </p>
    </LegalLayout>
  );
}
