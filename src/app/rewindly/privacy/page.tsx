import type { Metadata } from "next";
import LegalLayout, { type TocItem } from "@/components/LegalLayout";
import { SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy - Rewindly",
  description: "How Rewindly collects, uses, and protects data.",
};

const toc: TocItem[] = [
  { id: "collect", label: "Information we collect" },
  { id: "not-collect", label: "What we don't collect" },
  { id: "use", label: "How we use information" },
  { id: "third-party", label: "Third-party services" },
  { id: "retention", label: "Retention & deletion" },
  { id: "security", label: "Security" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function RewindlyPrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro={`This Privacy Policy explains how Rewindly ("the App"), operated by Obarito ("we", "us"), collects, uses, and protects information when you install and use the App on your Shopify store. By installing Rewindly you agree to this policy.`}
      toc={toc}
      active="privacy"
      brand="rewindly"
      lastUpdated="15 June 2026"
      effectiveDate="15 June 2026"
    >
      <h2 id="collect">Information we collect</h2>
      <p>
        Rewindly is designed to track changes to your <em>products</em>. We
        collect and store only what is needed to provide that service:
      </p>
      <ul>
        <li>
          <strong>Store information</strong> - your Shopify store domain and the
          access token Shopify issues to the App.
        </li>
        <li>
          <strong>Product data</strong> - snapshots of your products (such as
          title, description, price, status, tags, and variants) captured when
          they are created, updated, or deleted.
        </li>
        <li>
          <strong>Notification settings</strong> - the email address you choose
          for alerts, and, if you enable it, a Slack webhook URL and your alert
          rules.
        </li>
        <li>
          <strong>Store contact email</strong> - read from your Shopify account
          to pre-fill your notification settings.
        </li>
      </ul>

      <h2 id="not-collect">
        Information we do <u>not</u> collect
      </h2>
      <p>
        Rewindly does <strong>not</strong> request, access, or store any customer
        or buyer personal data - no names, addresses, emails, payment details, or
        order information of your customers. The App operates only on product
        data.
      </p>

      <h2 id="use">How we use information</h2>
      <ul>
        <li>To detect changes to your products and notify you of them.</li>
        <li>
          To maintain a version history so you can review and restore previous
          product states.
        </li>
        <li>
          To calculate price-history information for compliance features (e.g.
          the 30-day lowest price).
        </li>
        <li>
          To send you alert emails and, if configured, Slack notifications.
        </li>
      </ul>

      <h2 id="third-party">Third-party services</h2>
      <p>We share data only as needed to operate the App:</p>
      <ul>
        <li>
          <strong>Shopify</strong> - the platform the App runs on and reads
          product data from.
        </li>
        <li>
          <strong>Resend</strong> - used to deliver alert and notification
          emails.
        </li>
        <li>
          <strong>Slack</strong> - only if you choose to connect a Slack webhook;
          alert content is sent to the URL you provide.
        </li>
      </ul>
      <p>We do not sell your data or share it for advertising.</p>

      <h2 id="retention">Data retention &amp; deletion</h2>
      <ul>
        <li>
          On the Free plan, product history older than 30 days is automatically
          removed. On the Pro plan, history is retained until you delete it or
          uninstall.
        </li>
        <li>
          When you uninstall the App, we remove your store&apos;s stored data. In
          line with Shopify&apos;s requirements, store-data deletion requests
          received via Shopify&apos;s <code>shop/redact</code> webhook are
          processed (typically within 48 hours of uninstall).
        </li>
        <li>
          You may request deletion of your data at any time by contacting us.
        </li>
      </ul>

      <h2 id="security">Security</h2>
      <p>
        Data is transmitted over HTTPS and stored on access-controlled
        infrastructure. While no method of storage or transmission is perfectly
        secure, we take reasonable measures to protect your information.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be
        reflected by the &quot;Last updated&quot; date above.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Questions about this policy or your data? Email us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
