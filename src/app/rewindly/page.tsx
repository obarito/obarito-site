import type { Metadata } from "next";
import Link from "next/link";
import RewindlyMark from "@/components/RewindlyMark";
import ObaritoMark from "@/components/ObaritoMark";
import { APPSTORE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rewindly - A watchdog for your Shopify catalog",
  description:
    "Rewindly watches every product edit in your store, flags the suspicious ones, and lets you undo any change with a single click.",
};

export default function RewindlyPage() {
  return (
    <div className="rewindly-scope text-[#16202E]">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 border-b border-[#E9EDF2] bg-[rgba(255,255,255,0.85)] backdrop-blur-[12px]">
        <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-[15px] sm:px-8">
          <Link href="/rewindly" className="flex items-center gap-[11px]">
            <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#1a3353] text-white">
              <RewindlyMark className="h-[19px] w-[19px]" />
            </div>
            <span className="text-[20px] font-semibold tracking-[-0.025em] text-[#1a3353]">
              Rewindly
            </span>
          </Link>
          <nav className="flex items-center gap-5 sm:gap-7">
            <a href="#features" className="hidden text-[14.5px] font-medium text-[#48586B] sm:inline">
              Features
            </a>
            <a href="#how" className="hidden text-[14.5px] font-medium text-[#48586B] sm:inline">
              How it works
            </a>
            <a href="#pricing" className="hidden text-[14.5px] font-medium text-[#48586B] sm:inline">
              Pricing
            </a>
            <Link href="/support" className="hidden text-[14.5px] font-medium text-[#48586B] sm:inline">
              Support
            </Link>
            <a
              href={APPSTORE_URL}
              className="rounded-[10px] bg-[#1a3353] px-[17px] py-2.5 text-[14px] font-semibold text-white"
            >
              Add to Shopify
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#1a3353] text-white">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-14 px-5 pb-[clamp(60px,8vw,96px)] pt-[clamp(56px,8vw,92px)] sm:px-8 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.07] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#A9BBD4]">
              <RewindlyMark className="h-[13px] w-[13px] text-[#E9A23A]" /> Shopify
              store watchdog
            </div>
            <h1 className="m-0 mb-[22px] text-[clamp(38px,5.4vw,58px)] font-semibold leading-[1.04] tracking-[-0.035em]">
              Know the moment your catalog changes.
            </h1>
            <p className="m-0 mb-[34px] max-w-[480px] text-[clamp(17px,2vw,20px)] leading-[1.6] text-[#BBC9DD]">
              Rewindly watches every product edit in your store, flags the
              suspicious ones, and lets you undo any change with a single click.
              Your catalog, with a rewind button.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={APPSTORE_URL}
                className="inline-flex items-center gap-[9px] rounded-[12px] bg-white px-6 py-3.5 text-[15.5px] font-semibold text-[#142844]"
              >
                Add to Shopify <span className="text-[17px]">→</span>
              </a>
              <a
                href="#how"
                className="rounded-[12px] border border-white/[0.22] px-[22px] py-3.5 text-[15.5px] font-medium text-white"
              >
                See how it works
              </a>
            </div>
            <div className="mt-[30px] flex gap-6 text-[13.5px] text-[#8FA2BD]">
              <span>✓ &nbsp;Free plan available</span>
              <span>✓ &nbsp;Installs in 60 seconds</span>
            </div>
          </div>

          {/* Abstract change feed */}
          <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_30px_60px_rgba(7,18,38,0.4)]">
            <div className="flex items-center justify-between border-b border-[#EEF1F5] px-5 py-4">
              <div className="flex items-center gap-[9px]">
                <div className="flex h-6 w-6 items-center justify-center rounded-[7px] bg-[#1a3353] text-white">
                  <RewindlyMark className="h-[15px] w-[15px]" />
                </div>
                <span className="text-[14px] font-semibold text-[#16202E]">
                  Change feed
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#94A3B8]">LIVE</span>
            </div>
            <div className="flex flex-col gap-2 px-3.5 py-2.5">
              {/* row alert */}
              <div className="flex items-center gap-[13px] rounded-[12px] border border-[#F4DFB3] bg-[#FFF8EC] px-3.5 py-[13px]">
                <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px] bg-[#E9A23A] text-[15px] text-white">
                  !
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px] font-semibold text-[#16202E]">
                    Price changed · Aspen Hoodie
                  </div>
                  <div className="text-[12.5px] text-[#8A6D2F]">
                    <span className="text-[#B79A5E] line-through">$72.00</span> →
                    $9.00 · 2:14 PM
                  </div>
                </div>
                <span className="flex-none rounded-[8px] border border-[#E3E8EF] bg-white px-[11px] py-1.5 text-[12px] font-semibold text-[#1a3353]">
                  Undo
                </span>
              </div>
              {/* row normal */}
              <div className="flex items-center gap-[13px] rounded-[12px] border border-[#EDF1F5] bg-[#F7F9FB] px-3.5 py-[13px]">
                <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px] bg-[#E7EDF3] text-[14px] text-[#5A6B80]">
                  ✎
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px] font-semibold text-[#16202E]">
                    Description edited · Trail Mug
                  </div>
                  <div className="text-[12.5px] text-[#7A8A9C]">
                    128 characters changed · 11:42
                  </div>
                </div>
                <span className="flex-none text-[12px] text-[#94A3B8]">View</span>
              </div>
              {/* row restored */}
              <div className="flex items-center gap-[13px] rounded-[12px] border border-[#CBEAD8] bg-[#F0FAF4] px-3.5 py-[13px]">
                <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px] bg-[#28A06B] text-[14px] text-white">
                  ↺
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px] font-semibold text-[#16202E]">
                    Restored · Summit Jacket
                  </div>
                  <div className="text-[12.5px] text-[#3F8C63]">
                    Reverted to yesterday 4:10 PM
                  </div>
                </div>
                <span className="flex-none text-[12px] font-semibold text-[#28A06B]">
                  Done
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="mx-auto max-w-[1160px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8">
        <div className="mb-11 max-w-[680px]">
          <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#E9A23A]">
            The problem
          </div>
          <h2 className="m-0 mb-3.5 text-[clamp(28px,3.8vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]">
            Your catalog changes more than you think.
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-[#5A6B80]">
            Staff, apps, and bulk editors all touch your products - and Shopify
            keeps no real history. A wrong price or a hidden product can sit live
            for days before anyone notices.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {[
            { h: "No log", p: "Shopify doesn't tell you what changed, or when. Edits are silent." },
            { h: "No undo", p: "Restoring an old price or description means rebuilding it by hand from memory." },
            { h: "No warning", p: "A fat-fingered discount or a rogue app can quietly cost you real revenue." },
          ].map((card) => (
            <div key={card.h} className="rounded-[16px] border border-[#E9EDF2] p-7">
              <div className="text-[30px] font-semibold tracking-[-0.02em] text-[#1a3353]">
                {card.h}
              </div>
              <p className="m-0 mt-2.5 text-[14.5px] leading-[1.6] text-[#5A6B80]">
                {card.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section
        id="features"
        className="scroll-mt-[64px] border-y border-[#E9EDF2] bg-[#F4F6F9]"
      >
        <div className="mx-auto max-w-[1160px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8">
          <div className="mb-10 max-w-[640px]">
            <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#E9A23A]">
              What Rewindly does
            </div>
            <h2 className="m-0 text-[clamp(28px,3.8vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]">
              A watchdog that never blinks.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            <div className="rounded-[18px] border border-[#E9EDF2] bg-white p-[30px]">
              <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#EAF0F7] text-[#1a3353]">
                <RewindlyMark className="h-6 w-6" />
              </div>
              <div className="mb-2 text-[18px] font-semibold">Tracks every change</div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-[#5A6B80]">
                Prices, titles, descriptions, inventory, status - Rewindly records
                exactly what changed and when.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E9EDF2] bg-white p-[30px]">
              <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#FCF1DC] text-[22px] font-bold text-[#C5871F]">
                !
              </div>
              <div className="mb-2 text-[18px] font-semibold">Flags the suspicious</div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-[#5A6B80]">
                Big price drops, mass edits, and products going hidden get surfaced
                instantly - before they cost you.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E9EDF2] bg-white p-[30px]">
              <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#E5F4EC] text-[22px] text-[#28A06B]">
                ↺
              </div>
              <div className="mb-2 text-[18px] font-semibold">Undo in one click</div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-[#5A6B80]">
                Roll any product back to any earlier snapshot instantly. No
                rebuilding, no guesswork.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E9EDF2] bg-white p-[30px]">
              <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#EAF0F7] text-[20px] text-[#1a3353]">
                ◷
              </div>
              <div className="mb-2 text-[18px] font-semibold">Full snapshot history</div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-[#5A6B80]">
                Browse a complete timeline for any product and compare versions
                side by side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        id="how"
        className="mx-auto max-w-[1160px] scroll-mt-[64px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8"
      >
        <div className="mb-11 max-w-[640px]">
          <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#E9A23A]">
            How it works
          </div>
          <h2 className="m-0 text-[clamp(28px,3.8vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]">
            Live in a minute. Watching from then on.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {[
            { n: "1", bg: "#1a3353", h: "Install from Shopify", p: "One click from the App Store. Rewindly asks only for the product scopes it needs." },
            { n: "2", bg: "#1a3353", h: "It starts watching", p: "Every edit is captured as a snapshot. Suspicious changes trigger an alert in your feed." },
            { n: "3", bg: "#28A06B", h: "Rewind anything", p: "Spot a bad change? Restore the previous version in a single click - and breathe." },
          ].map((step) => (
            <div key={step.n}>
              <div className="mb-3.5 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] font-semibold text-white"
                  style={{ background: step.bg }}
                >
                  {step.n}
                </div>
                <div className="h-px flex-1 bg-[#E9EDF2]" />
              </div>
              <div className="mb-2 text-[18px] font-semibold">{step.h}</div>
              <p className="m-0 text-[14.5px] leading-[1.6] text-[#5A6B80]">{step.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section
        id="pricing"
        className="scroll-mt-[64px] border-y border-[#E9EDF2] bg-[#F4F6F9]"
      >
        <div className="mx-auto max-w-[1160px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8">
          <div className="mx-auto mb-11 max-w-[560px] text-center">
            <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#E9A23A]">
              Pricing
            </div>
            <h2 className="m-0 mb-2.5 text-[clamp(28px,3.8vw,40px)] font-semibold leading-[1.12] tracking-[-0.03em]">
              Start free. Upgrade when it pays for itself.
            </h2>
            <p className="m-0 text-[16px] text-[#5A6B80]">
              Billed through Shopify. Cancel anytime by uninstalling. Pro includes
              a 14-day free trial.
            </p>
          </div>
          <div className="mx-auto grid max-w-[780px] grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {/* Free */}
            <div className="rounded-[20px] border border-[#E9EDF2] bg-white p-[34px]">
              <div className="text-[18px] font-semibold text-[#1a3353]">Free</div>
              <div className="my-[14px] mb-1.5 flex items-baseline gap-1.5">
                <span className="text-[42px] font-semibold tracking-[-0.03em]">$0</span>
                <span className="text-[15px] text-[#94A3B8]">/ month</span>
              </div>
              <p className="m-0 mb-[22px] text-[14px] text-[#5A6B80]">
                For stores that want to know the moment something changes.
              </p>
              <a
                href={APPSTORE_URL}
                className="mb-6 block rounded-[11px] border border-[#C8D2DF] bg-white py-3 text-center text-[14.5px] font-semibold text-[#1a3353]"
              >
                Add to Shopify
              </a>
              <div className="flex flex-col gap-[11px]">
                {[
                  "Tracks every product change",
                  "Anomaly detection + email alerts",
                  "7 days of history",
                ].map((f) => (
                  <div key={f} className="text-[14px] text-[#3A4654]">
                    <span className="font-semibold text-[#28A06B]">✓</span>{" "}
                    &nbsp;{f}
                  </div>
                ))}
              </div>
            </div>
            {/* Pro */}
            <div className="relative rounded-[20px] border border-[#1a3353] bg-[#1a3353] p-[34px] text-white">
              <div className="absolute right-5 top-5 rounded-full bg-[#E9A23A] px-[9px] py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#142844]">
                Popular
              </div>
              <div className="text-[18px] font-semibold text-white">Pro</div>
              <div className="my-[14px] mb-1.5 flex items-baseline gap-1.5">
                <span className="text-[42px] font-semibold tracking-[-0.03em]">$29</span>
                <span className="text-[15px] text-[#A9BBD4]">/ month</span>
              </div>
              <p className="m-0 mb-[22px] text-[14px] text-[#BBC9DD]">
                For busy stores with staff, apps, and a lot to lose.
              </p>
              <a
                href={APPSTORE_URL}
                className="mb-6 block rounded-[11px] bg-white py-3 text-center text-[14.5px] font-semibold text-[#142844]"
              >
                Start Pro
              </a>
              <div className="flex flex-col gap-[11px]">
                {[
                  "Everything in Free",
                  "Unlimited history",
                  "One-click undo & restore",
                  "Version compare",
                  "Slack alerts + weekly digest",
                  "Omnibus 30-day price compliance",
                ].map((f) => (
                  <div key={f} className="text-[14px] text-[#DCE5F0]">
                    <span className="font-semibold text-[#E9A23A]">✓</span> &nbsp;
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-[1160px] px-5 py-[clamp(56px,8vw,96px)] sm:px-8">
        <div className="relative overflow-hidden rounded-[24px] bg-[#142844] px-10 py-[clamp(40px,6vw,72px)] text-center">
          <h2 className="m-0 mb-4 text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.03em] text-white">
            Give your catalog a rewind button.
          </h2>
          <p className="m-0 mx-auto mb-[30px] max-w-[480px] text-[18px] leading-[1.6] text-[#BBC9DD]">
            Install Rewindly free and never lose a product change again.
          </p>
          <a
            href={APPSTORE_URL}
            className="inline-flex items-center gap-[9px] rounded-[13px] bg-white px-7 py-[15px] text-[16px] font-semibold text-[#142844]"
          >
            Add to Shopify <span className="text-[18px]">→</span>
          </a>
        </div>
      </section>

      {/* ===== FOOTER (with Obarito signature) ===== */}
      <footer className="bg-[#0E1B30] text-[#9FB1C8]">
        <div className="mx-auto max-w-[1160px] px-5 pb-[30px] pt-[54px] sm:px-8">
          <div className="grid grid-cols-1 gap-10 border-b border-[#1B2C45] pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="mb-4 flex items-center gap-[11px]">
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#1a3353] text-white">
                  <RewindlyMark className="h-[18px] w-[18px]" />
                </div>
                <span className="text-[19px] font-semibold tracking-[-0.025em] text-white">
                  Rewindly
                </span>
              </div>
              <p className="m-0 max-w-[280px] text-[14px] leading-[1.6] text-[#647C99]">
                A watchdog for your Shopify catalog. Track every change, flag the
                suspicious, undo in one click.
              </p>
            </div>
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#465873]">
                Product
              </div>
              <div className="flex flex-col gap-[11px]">
                <a href="#features" className="text-[14.5px] text-[#9FB1C8]">
                  Features
                </a>
                <a href="#pricing" className="text-[14.5px] text-[#9FB1C8]">
                  Pricing
                </a>
                <Link href="/support" className="text-[14.5px] text-[#9FB1C8]">
                  Support
                </Link>
              </div>
            </div>
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#465873]">
                Legal
              </div>
              <div className="flex flex-col gap-[11px]">
                <Link href="/privacy" className="text-[14.5px] text-[#9FB1C8]">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[14.5px] text-[#9FB1C8]">
                  Terms
                </Link>
                <Link href="/support" className="text-[14.5px] text-[#9FB1C8]">
                  Support
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3.5 pt-[22px]">
            <span className="text-[13px] text-[#465873]">© 2026 Rewindly</span>
            <Link
              href="/"
              className="inline-flex items-center gap-[9px] rounded-full border border-[#1B2C45] bg-white/[0.04] px-3.5 py-2 text-[13px] text-[#9FB1C8]"
            >
              <ObaritoMark className="h-4 w-4 text-[#9FB1C8]" nodeColor="#3B82F6" />
              An <span className="font-medium text-white">Obarito</span> app
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
