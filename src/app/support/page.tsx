import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ObaritoHeader from "@/components/ObaritoHeader";
import ObaritoFooter from "@/components/ObaritoFooter";
import SupportForm from "@/components/SupportForm";
import { SUPPORT_EMAIL } from "@/lib/config";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Support",
  description:
    "Get help with Deckle and Obarito apps. Send a support request with your Shopify store details and attachments.",
  path: "/support",
});

const faqSchema = faqJsonLd([
  {
    question: "What does Deckle theme support include?",
    answer:
      "Support covers theme settings, sections, templates, presets and bugs in Deckle's own code. It does not include custom code, third-party apps or Shopify account setup.",
  },
  {
    question: "How quickly does Obarito reply?",
    answer: "Obarito replies within one business day, Monday to Friday, Bangladesh time.",
  },
  {
    question: "Should I edit my live Shopify theme?",
    answer:
      "No. Duplicate the theme first, make code changes on the copy and publish it only after checking it.",
  },
]);

export default function SupportPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ObaritoHeader active="support" />

      <section className="mx-auto max-w-[1000px] px-5 pt-[clamp(48px,6vw,76px)] text-center sm:px-8">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#2563EB]">
          Support
        </div>
        <h1 className="m-0 mb-[18px] text-[clamp(34px,5vw,50px)] font-semibold tracking-[-0.035em]">
          Tell us what is happening.
        </h1>
        <p className="mx-auto m-0 max-w-[620px] text-[19px] leading-[1.6] text-[#5C6B82]">
          Send the details below and we will reply within one business day, Monday to Friday,
          Bangladesh time.
        </p>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 pb-2 pt-11 sm:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col justify-between rounded-[20px] bg-[#0B0F17] p-8 text-white sm:p-10">
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#6A7E9A]">
                Email
              </div>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-[clamp(23px,3.4vw,32px)] font-semibold tracking-[-0.025em] text-white"
              >
                {SUPPORT_EMAIL}
              </a>
              <p className="m-0 mt-4 max-w-[400px] text-[15px] leading-[1.6] text-[#94A3B8]">
                You can use the form below or email us directly. Include your myshopify.com
                address so we can identify the store.
              </p>
            </div>
            <div className="mt-8 flex gap-7 border-t border-[#1C2230] pt-6">
              <div>
                <div className="text-[20px] font-semibold">1 business day</div>
                <div className="mt-0.5 text-[13px] text-[#6A7E9A]">Reply time</div>
              </div>
              <div>
                <div className="text-[20px] font-semibold">Mon to Fri</div>
                <div className="mt-0.5 text-[13px] text-[#6A7E9A]">Bangladesh time</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/deckle/docs" className="rounded-[16px] border border-[#E2E8F0] bg-[#F7F8FA] p-6">
              <div className="text-[16px] font-semibold text-[#0B0F17]">Deckle documentation</div>
              <div className="mt-1 text-[13.5px] leading-[1.5] text-[#5C6B82]">
                Setup, print options, templates and troubleshooting
              </div>
            </Link>
            <Link href="/attesta/docs" className="rounded-[16px] border border-[#E2E8F0] bg-[#F7F8FA] p-6">
              <div className="text-[16px] font-semibold text-[#0B0F17]">Attesta documentation</div>
              <div className="mt-1 text-[13.5px] leading-[1.5] text-[#5C6B82]">
                E-invoicing, VAT and DATEV
              </div>
            </Link>
            <Link href="/rewindly/docs" className="rounded-[16px] border border-[#E2E8F0] bg-[#F7F8FA] p-6">
              <div className="text-[16px] font-semibold text-[#0B0F17]">Rewindly documentation</div>
              <div className="mt-1 text-[13.5px] leading-[1.5] text-[#5C6B82]">
                Setup, snapshots and restore
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#EEF1F5] bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1000px] px-5 py-[clamp(52px,7vw,80px)] sm:px-8">
          <div className="mb-8">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2563EB]">
              Contact form
            </div>
            <h2 className="m-0 mb-2 text-[clamp(26px,3.4vw,34px)] font-semibold tracking-[-0.03em]">
              Send a support request
            </h2>
            <p className="m-0 max-w-[660px] text-[15.5px] leading-[1.65] text-[#5C6B82]">
              Tell us what you expected, what happened and where. We will email you a copy of
              the request automatically.
            </p>
          </div>
          <SupportForm />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 px-5 py-[clamp(52px,7vw,80px)] sm:px-8 md:grid-cols-[220px_1fr] md:gap-[58px]">
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2563EB]">Deckle</div>
          <h2 className="m-0 text-[clamp(25px,3vw,31px)] font-semibold tracking-[-0.03em]">
            Support policy
          </h2>
        </div>
        <div className="legal-body">
          <p>
            Deckle support is free for every store that bought the theme from the Shopify Theme
            Store.
          </p>
          <h2>What we help with</h2>
          <ul>
            <li>Setting up Deckle settings, sections, templates and presets.</li>
            <li>Questions about how a built-in feature works.</li>
            <li>Bugs in the theme&apos;s own code, fixed through a theme update.</li>
          </ul>
          <h2>What support does not cover</h2>
          <ul>
            <li>Code changed by you or another developer.</li>
            <li>Custom features, new sections or design work beyond the theme settings.</li>
            <li>Third-party apps and their code.</li>
            <li>Payments, shipping, domains, taxes and other store setup outside the theme.</li>
          </ul>
          <p>
            Duplicate the theme before editing code so you always have an untouched copy. For
            custom work, hire a qualified developer through the{" "}
            <a href="https://www.shopify.com/partners/directory">Shopify Partner Directory</a>.
          </p>
          <p>
            Before writing, check the <Link href="/deckle/docs">Deckle documentation</Link> and
            confirm that your store is using the latest theme version.
          </p>
        </div>
      </section>

      <ObaritoFooter active="support" />
    </>
  );
}
