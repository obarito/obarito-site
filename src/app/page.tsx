import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ObaritoHeader from "@/components/ObaritoHeader";
import ObaritoMark from "@/components/ObaritoMark";
import AttestaMark, { AttestaGlyph } from "@/components/AttestaMark";
import { DeckleGlyph } from "@/components/DeckleMark";
import { SITE_DESCRIPTION } from "@/lib/config";
import {
  createPageMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Obarito - A Shopify product studio",
  socialTitle: "Obarito - A Shopify product studio",
  description: SITE_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      <ObaritoHeader active="products" />

      <main>
        {/* ===== HERO ===== */}
        <section className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-5 pb-[clamp(48px,7vw,88px)] pt-[clamp(56px,9vw,104px)] sm:px-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-[26px] inline-flex items-center gap-2 rounded-full bg-[#EFF4FF] px-[11px] py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2563EB]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" /> A Shopify product studio
          </div>
          <h1 className="m-0 mb-[22px] text-[clamp(38px,5.4vw,60px)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Products for running and presenting a Shopify store.
          </h1>
          <p className="m-0 mb-[34px] max-w-[480px] text-[clamp(17px,2vw,19px)] leading-[1.6] text-[#475569]">
            Rewindly watches product changes. Attesta handles German e-invoicing.
            Deckle gives art, decor and leather goods their own storefront layouts.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="#products"
              className="rounded-[11px] bg-[#2563EB] px-[22px] py-[13px] text-[15px] font-medium text-white"
            >
              Explore the products
            </Link>
            <Link
              href="#studio"
              className="rounded-[11px] border border-[#D9DFE7] bg-white px-[22px] py-[13px] text-[15px] font-medium text-[#0B0F17]"
            >
              About the studio
            </Link>
          </div>
        </div>

        {/* Orbit diagram */}
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 240 240" className="h-auto w-[min(340px,90%)]" aria-hidden="true">
            <circle
              cx="120"
              cy="120"
              r="92"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              strokeDasharray="2 7"
              style={{ transformOrigin: "120px 120px", animation: "ob-spin 60s linear infinite" }}
            />
            <circle cx="120" cy="120" r="58" fill="none" stroke="#EEF1F5" strokeWidth="1.5" />
            {/* Every node sits ON the r=92 orbit, which is the whole idea of the
                diagram. Keep any new one at a distance of 92 from 120,120: pick the
                angle, then cx = 120 + 92·cos θ, cy = 120 + 92·sin θ. */}
            {/* deckle node */}
            <line x1="120" y1="120" x2="37.71" y2="161.14" stroke="#E2E8F0" strokeWidth="1.5" />
            <g transform="translate(22.71 146.14)">
              <circle cx="15" cy="15" r="15" fill="#C67139" />
              <DeckleGlyph x="5" y="5" width="20" height="20" color="#fff" />
            </g>
            {/* attesta node */}
            <line x1="120" y1="120" x2="202.29" y2="161.14" stroke="#E2E8F0" strokeWidth="1.5" />
            <g>
              <circle cx="202.29" cy="161.14" r="15" fill="#0F4B3C" />
              <AttestaGlyph x={202.29} y={161.14} size={16} />
            </g>
            {/* rewindly node */}
            <line x1="120" y1="120" x2="120" y2="28" stroke="#E2E8F0" strokeWidth="1.5" />
            <g>
              <circle cx="120" cy="28" r="15" fill="#1a3353" />
              <rect x="113.5" y="23" width="13" height="3.2" rx="1.6" fill="#fff" opacity="0.55" />
              <rect x="113.5" y="28" width="13" height="3.2" rx="1.6" fill="#fff" opacity="0.8" />
              <rect x="113.5" y="33" width="13" height="3.2" rx="1.6" fill="#fff" />
            </g>
            {/* core mark */}
            <circle cx="120" cy="120" r="24" fill="none" stroke="#334155" strokeWidth="5.5" />
            <circle cx="141.4" cy="98.6" r="4" fill="#2563EB" />
          </svg>
        </div>
        </section>

        {/* ===== APPS GRID ===== */}
        <section
          id="products"
          className="border-y border-[#EEF1F5] bg-[#F7F8FA] scroll-mt-[72px]"
        >
        <div className="mx-auto max-w-[1120px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8">
          <div className="mb-9">
            <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#2563EB]">
              The portfolio
            </div>
            <h2 className="m-0 mb-2.5 text-[clamp(28px,3.6vw,38px)] font-semibold tracking-[-0.03em]">
              Three products from one studio.
            </h2>
            <p className="m-0 max-w-[560px] text-[17px] leading-[1.6] text-[#5C6B82]">
              Rewindly and Attesta work behind the scenes. Deckle controls how the
              storefront looks and how customers shop it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {/* Rewindly card */}
            <Link
              href="/rewindly"
              prefetch={false}
              className="block rounded-[18px] border border-[#E2E8F0] bg-white px-8 py-[34px] transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]"
            >
              <div className="mb-[26px] flex items-center justify-between">
                <div className="flex items-center gap-[13px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[#1a3353]">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      <rect x="6" y="5.5" width="12" height="3.1" rx="1.5" fill="#fff" opacity="0.5" />
                      <rect x="6" y="10.4" width="12" height="3.1" rx="1.5" fill="#fff" opacity="0.78" />
                      <rect x="6" y="15.3" width="12" height="3.1" rx="1.5" fill="#fff" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[20px] font-semibold tracking-[-0.02em] text-[#0B0F17]">
                      Rewindly
                    </div>
                    <div className="mt-px text-[13px] text-[#5C6B82]">
                      Store change watchdog
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF3] px-[9px] py-[5px] font-mono text-[10px] uppercase tracking-[0.08em] text-[#15803D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" /> Live
                </span>
              </div>
              <p className="m-0 mb-6 text-[15.5px] leading-[1.6] text-[#334155]">
                Watches every product change in your catalog, flags suspicious
                edits, and lets you undo them in one click. Peace of mind for
                stores with more than one cook in the kitchen.
              </p>
              <span className="inline-flex items-center gap-[7px] text-[14.5px] font-medium text-[#2563EB]">
                View Rewindly <span className="text-[16px]">→</span>
              </span>
            </Link>

            {/* Attesta card */}
            <Link
              href="/attesta"
              prefetch={false}
              className="block rounded-[18px] border border-[#E2E8F0] bg-white px-8 py-[34px] transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]"
            >
              <div className="mb-[26px] flex items-center justify-between">
                <div className="flex items-center gap-[13px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[#0F4B3C] text-white">
                    <AttestaMark className="h-[26px] w-[26px]" />
                  </div>
                  <div>
                    <div className="text-[20px] font-semibold tracking-[-0.02em] text-[#0B0F17]">
                      Attesta
                    </div>
                    <div className="mt-px text-[13px] text-[#5C6B82]">
                      German e-invoicing
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-[9px] py-[5px] font-mono text-[10px] uppercase tracking-[0.08em] text-[#0E8058]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" /> New
                </span>
              </div>
              <p className="m-0 mb-6 text-[15.5px] leading-[1.6] text-[#334155]">
                Turns every paid order into a ZUGFeRD invoice with the EN 16931 XML
                inside it, picks the right tax treatment, and files it in a
                ten-year GoBD archive. E-Rechnung without the homework.
              </p>
              <span className="inline-flex items-center gap-[7px] text-[14.5px] font-medium text-[#2563EB]">
                View Attesta <span className="text-[16px]">→</span>
              </span>
            </Link>

            {/* Deckle card */}
            <Link href="/deckle" prefetch={false} className="block rounded-[18px] border border-[#E2E8F0] bg-white px-8 py-[34px] transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]">
              <div className="mb-[26px] flex items-center justify-between">
                <div className="flex items-center gap-[13px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[#C67139] text-white">
                    <DeckleGlyph className="h-[32px] w-[32px]" />
                  </div>
                  <div>
                    <div className="text-[20px] font-semibold tracking-[-0.02em] text-[#0B0F17]">Deckle</div>
                    <div className="mt-px text-[13px] text-[#5C6B82]">Shopify theme</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF7ED] px-[9px] py-[5px] font-mono text-[10px] uppercase tracking-[0.08em] text-[#9A3412]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C67139]" /> Theme
                </span>
              </div>
              <p className="m-0 mb-6 text-[15.5px] leading-[1.6] text-[#334155]">
                A $360 theme for art prints, home decor and leather goods,
                with uncropped artwork, live print configuration and three presets.
              </p>
              <span className="inline-flex items-center gap-[7px] text-[14.5px] font-medium text-[#2563EB]">
                View Deckle <span className="text-[16px]">→</span>
              </span>
            </Link>

            {/* More products card */}
            <div className="rounded-[18px] border border-dashed border-[#D7DEE8] bg-[#FAFBFC] px-8 py-[34px]">
              <div className="mb-[26px] flex h-12 w-12 items-center justify-center rounded-[13px] border border-dashed border-[#D7DEE8] text-[#B6C2D3]">
                <ObaritoMark className="h-6 w-6" nodeColor="#CBD5E1" />
              </div>
              <h3 className="m-0 mb-2.5 text-[20px] font-semibold tracking-[-0.02em] text-[#0B0F17]">
                More in orbit
              </h3>
              <p className="m-0 mb-6 max-w-[330px] text-[15.5px] leading-[1.6] text-[#5C6B82]">
                New Obarito products are in the works, each built to the same steady,
                well-engineered standard.
              </p>
              <Link
                href="/support"
                className="inline-flex rounded-[10px] border border-[#D9DFE7] bg-white px-[15px] py-[10px] text-[14px] font-medium text-[#475569] transition-colors hover:border-[#B8C2D0] hover:text-[#0B0F17]"
              >
                Get notified
              </Link>
            </div>
          </div>
        </div>
        </section>

        {/* ===== STUDIO STRIP ===== */}
        <section
          id="studio"
          className="mx-auto max-w-[1120px] px-5 py-[clamp(64px,8vw,104px)] scroll-mt-[72px] sm:px-8"
        >
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#2563EB]">
              The studio
            </div>
            <h2 className="m-0 text-[clamp(26px,3.2vw,34px)] font-semibold leading-[1.15] tracking-[-0.03em]">
              Steady hands on your store&apos;s data.
            </h2>
          </div>
          <div>
            <p className="m-0 mb-[18px] text-[clamp(17px,1.9vw,20px)] leading-[1.62] text-[#334155]">
              Obarito is a small, independent studio. We keep each product&apos;s scope
              tight and release it when the work is ready.
            </p>
            <p className="m-0 text-[clamp(17px,1.9vw,20px)] leading-[1.62] text-[#5C6B82]">
              Rewindly monitors product data, Attesta creates compliant invoices and
              Deckle supplies the storefront. Obarito is sibling to{" "}
              <span className="text-[#334155]">wpaxiom</span>, our WordPress studio.
            </p>
          </div>
        </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0B0F17] text-[#CBD5E1]">
        <div className="mx-auto max-w-[1120px] px-5 pb-[30px] pt-[60px] sm:px-8">
          <div className="grid grid-cols-2 gap-10 border-b border-[#1C2230] pb-11 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4 flex items-center gap-2.5">
                <ObaritoMark className="h-6 w-6 text-[#CBD5E1]" nodeColor="#3B82F6" />
                <span className="text-[18px] font-medium tracking-[-0.035em] text-[#F1F5F9]">
                  obarito
                </span>
              </div>
              <p className="m-0 max-w-[260px] text-[14px] leading-[1.6] text-[#6A7E9A]">
                Shopify apps and themes from a small independent studio.
              </p>
            </div>
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#6A7E9A]">
                Products
              </div>
              <div className="flex flex-col gap-[11px]">
                <Link href="/rewindly" className="text-[14.5px] text-[#CBD5E1]">
                  Rewindly
                </Link>
                <Link href="/rewindly/docs" className="text-[14.5px] text-[#CBD5E1]">
                  Rewindly docs
                </Link>
                <Link href="/attesta" className="text-[14.5px] text-[#CBD5E1]">
                  Attesta
                </Link>
                <Link href="/attesta/docs" className="text-[14.5px] text-[#CBD5E1]">
                  Attesta docs
                </Link>
                <Link href="/deckle" className="text-[14.5px] text-[#CBD5E1]">Deckle theme</Link>
                <Link href="/deckle/docs" className="text-[14.5px] text-[#CBD5E1]">Deckle docs</Link>
              </div>
            </div>
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#6A7E9A]">
                Company
              </div>
              <div className="flex flex-col gap-[11px]">
                <Link href="#studio" className="text-[14.5px] text-[#CBD5E1]">
                  About
                </Link>
                <Link href="/support" className="text-[14.5px] text-[#CBD5E1]">
                  Support
                </Link>
              </div>
            </div>
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#6A7E9A]">
                Legal
              </div>
              <div className="flex flex-col gap-[11px]">
                <Link href="/privacy" className="text-[14.5px] text-[#CBD5E1]">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[14.5px] text-[#CBD5E1]">
                  Terms
                </Link>
                <Link href="/support" className="text-[14.5px] text-[#CBD5E1]">
                  Support
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
            <span className="text-[13px] text-[#6A7E9A]">
              © 2026 Obarito. All rights reserved.
            </span>
            <span className="font-mono text-[11px] tracking-[0.06em] text-[#6A7E9A]">
              SIBLING TO WPAXIOM · WORDPRESS
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
