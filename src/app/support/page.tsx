import type { Metadata } from "next";
import Link from "next/link";
import ObaritoHeader from "@/components/ObaritoHeader";
import ObaritoFooter from "@/components/ObaritoFooter";
import { PRIVACY_EMAIL, SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with any Obarito app. Real people, real answers - most questions answered the same business day.",
};

export default function SupportPage() {
  return (
    <>
      <ObaritoHeader active="support" />

      {/* HERO */}
      <section className="mx-auto max-w-[1000px] px-5 pt-[clamp(48px,6vw,76px)] text-center sm:px-8">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#2563EB]">
          Support
        </div>
        <h1 className="m-0 mb-[18px] text-[clamp(34px,5vw,50px)] font-semibold tracking-[-0.035em]">
          We&apos;re here to help.
        </h1>
        <p className="mx-auto m-0 max-w-[560px] text-[19px] leading-[1.6] text-[#64748B]">
          Real people, real answers. Reach out about any Obarito app and we&apos;ll
          get you sorted - most questions are answered the same business day.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="mx-auto max-w-[1000px] px-5 pb-2 pt-11 sm:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.3fr_1fr]">
          {/* Email card */}
          <div className="flex flex-col justify-between rounded-[20px] bg-[#0B0F17] p-10 text-white">
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
                Email us
              </div>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-[clamp(24px,3.4vw,32px)] font-semibold tracking-[-0.025em] text-white"
              >
                {SUPPORT_EMAIL}
              </a>
              <p className="m-0 mt-4 max-w-[380px] text-[15px] leading-[1.6] text-[#94A3B8]">
                Tell us your store URL, which app you&apos;re using, and what&apos;s
                happening. Screenshots help.
              </p>
            </div>
            <div className="mt-8 flex gap-7 border-t border-[#1C2230] pt-6">
              <div>
                <div className="text-[20px] font-semibold">&lt; 1 day</div>
                <div className="mt-0.5 text-[13px] text-[#64748B]">
                  Typical first reply
                </div>
              </div>
              <div>
                <div className="text-[20px] font-semibold">Mon–Fri</div>
                <div className="mt-0.5 text-[13px] text-[#64748B]">Support hours</div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <Link
              href="/rewindly"
              className="flex items-center gap-4 rounded-[16px] border border-[#E2E8F0] bg-[#F7F8FA] p-6"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[11px] bg-[#1a3353]">
                <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" aria-hidden="true">
                  <rect x="6" y="6" width="12" height="2.8" rx="1.4" fill="#fff" opacity="0.5" />
                  <rect x="6" y="10.6" width="12" height="2.8" rx="1.4" fill="#fff" opacity="0.78" />
                  <rect x="6" y="15.2" width="12" height="2.8" rx="1.4" fill="#fff" />
                </svg>
              </div>
              <div>
                <div className="text-[16px] font-semibold text-[#0B0F17]">
                  Rewindly help
                </div>
                <div className="mt-0.5 text-[13.5px] text-[#64748B]">
                  Setup, snapshots &amp; undo
                </div>
              </div>
            </Link>
            <a
              href={`mailto:${PRIVACY_EMAIL}`}
              className="flex items-center gap-4 rounded-[16px] border border-[#E2E8F0] bg-[#F7F8FA] p-6"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[11px] bg-[#EFF4FF] text-[18px] font-bold text-[#2563EB]">
                @
              </div>
              <div>
                <div className="text-[16px] font-semibold text-[#0B0F17]">
                  Data &amp; privacy requests
                </div>
                <div className="mt-0.5 text-[13.5px] text-[#64748B]">{PRIVACY_EMAIL}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* HOW TO GET HELP */}
      <section className="mx-auto max-w-[1000px] px-5 py-[clamp(48px,6vw,72px)] sm:px-8">
        <h2 className="m-0 mb-2 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.03em]">
          How to get help fast
        </h2>
        <p className="m-0 mb-8 text-[16px] text-[#64748B]">
          A little context up front means we can fix things in one reply instead of
          three.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {[
            { n: "1", h: "Tell us the basics", p: "Your store URL, the app and plan you're on, and when the issue started." },
            { n: "2", h: "Show us what you see", p: "A screenshot or short screen recording is worth a thousand words." },
            { n: "3", h: "We take it from there", p: "We'll reply with a fix or next steps, usually within one business day." },
          ].map((card) => (
            <div key={card.n} className="rounded-[16px] border border-[#E2E8F0] p-7">
              <div className="mb-[18px] flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-[#0B0F17] text-[15px] font-semibold text-white">
                {card.n}
              </div>
              <div className="mb-[7px] text-[17px] font-semibold">{card.h}</div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-[#64748B]">{card.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-[#EEF1F5] bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1000px] px-5 py-[clamp(48px,6vw,72px)] sm:px-8">
          <h2 className="m-0 mb-7 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.03em]">
            Common questions
          </h2>
          <div className="flex flex-col gap-3.5">
            <div className="rounded-[14px] border border-[#E2E8F0] bg-white px-[26px] py-[22px]">
              <div className="mb-1.5 text-[16px] font-semibold">
                Is there a Shopify-specific way to reach you?
              </div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-[#64748B]">
                Yes - email is best for now. Include your{" "}
                <strong className="text-[#334155]">.myshopify.com</strong> URL so we
                can find your install quickly.
              </p>
            </div>
            <div className="rounded-[14px] border border-[#E2E8F0] bg-white px-[26px] py-[22px]">
              <div className="mb-1.5 text-[16px] font-semibold">
                How do I request data deletion?
              </div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-[#64748B]">
                Uninstalling triggers Shopify&apos;s redaction webhooks. For a manual
                request, email{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-[#2563EB]">
                  {PRIVACY_EMAIL}
                </a>{" "}
                and see the{" "}
                <Link href="/privacy" className="text-[#2563EB]">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="rounded-[14px] border border-[#E2E8F0] bg-white px-[26px] py-[22px]">
              <div className="mb-1.5 text-[16px] font-semibold">
                Do you offer onboarding help?
              </div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-[#64748B]">
                For larger stores, yes. Mention your setup and we&apos;ll walk you
                through it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ObaritoFooter active="support" />
    </>
  );
}
