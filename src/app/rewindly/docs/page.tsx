import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RewindlyHeader from "@/components/RewindlyHeader";
import RewindlyFooter from "@/components/RewindlyFooter";
import { APPSTORE_URL, SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rewindly Documentation - How to use the app",
  description:
    "Learn how to use Rewindly: automatic product snapshots, version timelines, comparing changes, one-click restore/undo, point-in-time bulk rollback, EU/UK Omnibus price compliance, and alerts.",
};

type TocItem = { id: string; label: string };

const toc: TocItem[] = [
  { id: "overview", label: "What Rewindly does" },
  { id: "install", label: "Getting started" },
  { id: "dashboard", label: "Your dashboard" },
  { id: "timeline", label: "Product history" },
  { id: "compare", label: "Comparing versions" },
  { id: "restore", label: "Restore & undo" },
  { id: "compliance", label: "Price compliance" },
  { id: "alerts", label: "Alerts & notifications" },
  { id: "plans", label: "Plans & billing" },
  { id: "faq", label: "FAQ & troubleshooting" },
];

/** Small inline badge for Pro-gated features. */
function ProTag() {
  return (
    <span className="ml-2 inline-flex items-center rounded-[6px] bg-[#EFF4FF] px-2 py-[2px] align-middle font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#2563EB]">
      Pro
    </span>
  );
}

/** A captioned screenshot, framed to match the site's card style. */
function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-7">
      <div className="overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-[#F7F8FA]">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, 744px"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-2.5 text-[13px] leading-[1.55] text-[#94A3B8]">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function RewindlyDocsPage() {
  return (
    <>
      <RewindlyHeader />

      {/* Title block */}
      <section className="mx-auto max-w-[1000px] px-5 pt-[clamp(44px,6vw,72px)] sm:px-8">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#2563EB]">
          Rewindly · Guide
        </div>
        <h1 className="m-0 mb-[18px] text-[clamp(34px,5vw,48px)] font-semibold tracking-[-0.035em]">
          How to use Rewindly
        </h1>
        <p className="m-0 mb-[26px] max-w-[640px] text-[18px] leading-[1.6] text-[#64748B]">
          Rewindly quietly records every change to your products and lets you
          review, compare, and undo them. There is nothing to configure to start -
          this guide walks through each part of the app.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={APPSTORE_URL}
            className="rounded-[9px] bg-[#0B0F17] px-[18px] py-[10px] text-[14px] font-medium text-white"
          >
            Install Rewindly
          </a>
          <Link
            href="/support"
            className="rounded-[9px] border border-[#E2E8F0] px-[18px] py-[10px] text-[14px] font-medium text-[#334155]"
          >
            Contact support
          </Link>
        </div>
        <div className="mt-[26px] border-b border-[#EEF1F5] pb-2 font-mono text-[12px] text-[#94A3B8]">
          LAST UPDATED · 7 July 2026
        </div>
      </section>

      {/* Body: sticky TOC + content */}
      <section className="mx-auto grid max-w-[1000px] grid-cols-1 items-start gap-10 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-[200px_1fr] md:gap-[56px]">
        <nav className="toc top-[90px] hidden md:sticky md:block">
          <div className="mb-[14px] font-mono text-[10px] uppercase tracking-[0.14em] text-[#94A3B8]">
            On this page
          </div>
          <div className="flex flex-col gap-2.5">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[13.5px] text-[#64748B]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="legal-body">
          <h2 id="overview">What Rewindly does</h2>
          <p>
            Rewindly is a <strong>catalog change watchdog</strong> for your Shopify
            store. Every time a product is created, updated, or deleted, Rewindly
            saves a full <strong>snapshot</strong> of that product - its title,
            description, price, variants, inventory, status, and more. Those
            snapshots build a complete <strong>version history</strong> for each
            product, so you can see exactly what changed, when, and roll back to any
            earlier version in one click.
          </p>
          <p>
            It is built for the moments things go wrong: a bulk edit that overwrote
            the wrong field, an app that mangled your prices overnight, a product
            deleted by mistake, or an unexpected price change you need to explain.
          </p>

          <h2 id="install">Getting started</h2>
          <p>
            There is no setup. Once you install Rewindly from the Shopify App Store,
            it begins tracking automatically:
          </p>
          <ul>
            <li>
              Rewindly captures a <strong>baseline snapshot</strong> of your existing
              products at install, so you have something to compare against right
              away.
            </li>
            <li>
              From then on, any change a merchant, staff member, or app makes to a
              product is recorded as a new version.
            </li>
            <li>
              Rewindly only requests the <strong>read_products</strong> and{" "}
              <strong>write_products</strong> permissions. It never accesses customer,
              order, or payment data.
            </li>
          </ul>
          <p>
            On a brand-new store with no changes yet, the dashboard shows an empty
            state. It fills in the moment your first product change happens.
          </p>

          <h2 id="dashboard">Your dashboard</h2>
          <p>
            The dashboard is your at-a-glance overview, opened from the{" "}
            <strong>Dashboard</strong> link in the app sidebar. It shows:
          </p>
          <ul>
            <li>
              <strong>Stat cards</strong> - products tracked, versions stored, changes
              today, and when the last change happened, each with a short trend.
            </li>
            <li>
              <strong>Activity chart</strong> - a 7-day bar chart of how many changes
              happened each day, so spikes are easy to spot.
            </li>
            <li>
              <strong>Recent activity</strong> - the latest changes across all
              products. Click any row to jump straight to that product&apos;s history.
            </li>
          </ul>
          <Figure
            src="/rewindly/docs/dashboard.png"
            alt="Rewindly dashboard showing stat cards, a 7-day activity chart, and a critical alert banner"
            caption="The dashboard: products tracked, versions stored, changes today, and a 7-day activity chart."
          />

          <h2 id="timeline">Product history</h2>
          <p>
            The <strong>Products</strong> page lists every product Rewindly is
            tracking, with its version count and when it last changed. Open a product
            to see its <strong>timeline</strong> - every saved version in order, newest
            first, each stamped with the time it was captured.
          </p>
          <p>
            Click any version in the timeline to open the{" "}
            <strong>snapshot viewer</strong>, which shows the full state of the
            product as it was at that moment.
          </p>
          <Figure
            src="/rewindly/docs/products.png"
            alt="Rewindly products list with each product's version count and last-change time"
            caption="The Products page lists everything Rewindly tracks, with version counts and when each last changed."
          />

          <h2 id="compare">Comparing versions</h2>
          <p>
            From a product&apos;s timeline you can compare any two versions to see
            exactly what changed.
            <ProTag />
          </p>
          <p>
            Rewindly highlights the differences field by field - title, price,
            status, tags, description, variants, and SEO fields - so you do not have
            to hunt for what moved. This is the fastest way to answer &quot;what
            actually changed here?&quot; after an unexpected edit.
          </p>
          <Figure
            src="/rewindly/docs/compare.png"
            alt="Rewindly comparing two product versions with a field-by-field diff, and the price-history compliance card above it"
            caption="Pick any two versions for a field-by-field diff. The price-history & compliance card sits at the top of the same page."
          />

          <h2 id="restore">Restore &amp; undo</h2>
          <p>
            Found a version you want back? Open it in the snapshot viewer and click{" "}
            <strong>Restore</strong>.
            <ProTag />
          </p>
          <ul>
            <li>
              Rewindly writes that earlier snapshot back to your live product through
              the Shopify Admin API.
            </li>
            <li>
              The restore itself is recorded as a <strong>new version</strong>, tagged
              as a restore, so nothing is ever lost - you can always undo the undo.
            </li>
            <li>
              Restore brings back the product&apos;s saved fields. It is the quickest
              way to recover from a bad bulk edit or an app that overwrote your data.
            </li>
            <li>
              When a whole batch of products went wrong at once - a bad CSV import or
              a feed app overwriting the catalog - use{" "}
              <strong>point-in-time bulk rollback</strong> from the Products page to
              restore every product to how it looked at a chosen moment, in a single
              run.
              <ProTag />
            </li>
          </ul>
          <Figure
            src="/rewindly/docs/restore.png"
            alt="Rewindly snapshot viewer showing a saved product version with a Restore this version button"
            caption="The snapshot viewer shows the full saved state of a version. Click Restore this version to roll back."
          />

          <h2 id="compliance">Price compliance (EU / UK Omnibus)</h2>
          <p>
            If you sell into the EU or UK, the <strong>Omnibus Directive</strong>
            requires that when you advertise a price reduction you also show the{" "}
            <strong>lowest price from the previous 30 days</strong>. Because Rewindly
            already records every price change, it can show this for you.
            <ProTag />
          </p>
          <ul>
            <li>
              For each product, Rewindly surfaces the <strong>30-day lowest price</strong>{" "}
              from its own history - no spreadsheets, no manual tracking.
            </li>
            <li>
              Use it to confirm your sale prices are advertised correctly and to keep
              a defensible record if you are ever asked to justify a &quot;was&quot;
              price.
            </li>
          </ul>
          <p>
            You can see this inside the app on the{" "}
            <strong>price-history &amp; compliance</strong> card at the top of each
            product page - shown in the screenshot under{" "}
            <a href="#compare">Comparing versions</a> above. Rewindly also ships an{" "}
            <strong>Omnibus price notice</strong> theme app block you can add to your
            product pages, so the lowest 30-day price is displayed to shoppers right
            on the storefront - which is what the Directive actually requires.
          </p>

          <h2 id="alerts">Alerts &amp; notifications</h2>
          <p>
            Rewindly can tell you when something noteworthy happens to your catalog
            instead of you having to check. In <strong>Settings</strong> you can:
          </p>
          <ul>
            <li>Choose which kinds of changes are worth an alert.</li>
            <li>
              Send alerts to an <strong>email address</strong> or to a{" "}
              <strong>Slack</strong> channel.
              <ProTag />
            </li>
          </ul>
          <Figure
            src="/rewindly/docs/alerts.png"
            alt="Rewindly alerts feed flagging a suspicious 90% price drop with an Undo change button"
            caption="The alerts feed flags suspicious changes - like an accidental 90% price drop - with one-click undo."
          />
          <Figure
            src="/rewindly/docs/settings.png"
            alt="Rewindly settings page with Slack and email notification channels and alert trigger rules"
            caption="In Settings, choose your notification channels (email / Slack) and tune which changes trigger an alert."
          />
          <p>
            This turns Rewindly from a record you look up after the fact into an early
            warning when a price, status, or product changes unexpectedly.
          </p>

          <h2 id="plans">Plans &amp; billing</h2>
          <p>Rewindly has three plans:</p>
          <ul>
            <li>
              <strong>Free</strong> - up to <strong>100 products</strong>, the last{" "}
              <strong>30 days</strong> of history, in-app alerts,{" "}
              <strong>30 email alerts</strong> a month, and{" "}
              <strong>5 one-click restores</strong> a month.
            </li>
            <li>
              <strong>Starter - $7.99/month</strong> - up to{" "}
              <strong>1,000 products</strong>, <strong>90 days</strong> of history,{" "}
              <strong>unlimited restores</strong>, unlimited email alerts, and
              field-by-field version compare.
            </li>
            <li>
              <strong>Pro - $19/month</strong> - <strong>unlimited</strong> products
              and history, <strong>point-in-time bulk rollback</strong>, Slack
              alerts, and the EU/UK Omnibus 30-day price notice for your storefront.
            </li>
          </ul>
          <p>
            Paid plans include a <strong>14-day free trial</strong>, and annual
            billing saves you about two months. You can change plans or cancel any
            time from within the app - no reinstall needed. Billing is handled
            securely by Shopify and appears on your normal Shopify invoice. If you
            cancel, you keep access until the end of the current billing period, and
            your snapshots are always kept when you switch plans.
          </p>

          <h2 id="faq">FAQ &amp; troubleshooting</h2>
          <p>
            <strong>I just installed - why is my dashboard empty?</strong> Rewindly
            captures a baseline at install, then records changes as they happen. Edit a
            product and the dashboard will populate within moments.
          </p>
          <p>
            <strong>Does Rewindly track changes from before I installed it?</strong> No
            - history starts at install. Snapshots are captured going forward as
            products change.
          </p>
          <p>
            <strong>Will it slow down my store?</strong> No. Rewindly works in the
            background through Shopify webhooks and never touches your storefront.
          </p>
          <p>
            <strong>What happens to my data if I uninstall?</strong> Your access is
            revoked immediately, and Shopify then asks us to erase the store&apos;s
            data, which we do in full. See the{" "}
            <Link href="/privacy">Privacy Policy</Link> for details.
          </p>
          <div className="mt-9 rounded-[12px] border border-[#E2E8F0] bg-[#F7F8FA] px-[22px] py-[18px] text-[15px] leading-[1.65] text-[#3a4654]">
            <strong>Still stuck?</strong> Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your{" "}
            <strong>.myshopify.com</strong> URL and a screenshot - most questions
            are answered the same business day.
          </div>
        </div>
      </section>

      <RewindlyFooter />
    </>
  );
}
