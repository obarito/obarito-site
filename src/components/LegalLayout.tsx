import type { ReactNode } from "react";
import ObaritoHeader from "./ObaritoHeader";
import ObaritoFooter from "./ObaritoFooter";
import RewindlyHeader from "./RewindlyHeader";
import RewindlyFooter from "./RewindlyFooter";

export type TocItem = { id: string; label: string };

type LegalLayoutProps = {
  title: string;
  intro: string;
  toc: TocItem[];
  active: "privacy" | "terms";
  /** Human-readable effective/last-updated dates shown under the title. */
  lastUpdated: string;
  effectiveDate: string;
  /** Optional callout shown above the dates (e.g. a pre-launch review note). */
  notice?: ReactNode;
  /**
   * Which header + footer chrome to render. App-specific legal pages (e.g.
   * /rewindly/*) pass "rewindly" so they carry the Rewindly app header and
   * footer; the company legal pages default to the main Obarito chrome.
   */
  brand?: "obarito" | "rewindly";
  children: ReactNode;
};

/**
 * Shared chrome for the legal pages (privacy / terms): Obarito header, a title
 * block with an optional notice, a sticky table of contents, and the footer.
 * The page body is passed as children inside the `.legal-body` typography scope.
 */
export default function LegalLayout({
  title,
  intro,
  toc,
  active,
  lastUpdated,
  effectiveDate,
  notice,
  brand = "obarito",
  children,
}: LegalLayoutProps) {
  return (
    <>
      {brand === "rewindly" ? <RewindlyHeader /> : <ObaritoHeader />}

      {/* Title block */}
      <section className="mx-auto max-w-[1000px] px-5 pt-[clamp(44px,6vw,72px)] sm:px-8">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#2563EB]">
          Legal
        </div>
        <h1 className="m-0 mb-[18px] text-[clamp(34px,5vw,48px)] font-semibold tracking-[-0.035em]">
          {title}
        </h1>
        <p className="m-0 mb-[26px] max-w-[620px] text-[18px] leading-[1.6] text-[#64748B]">
          {intro}
        </p>
        {notice && (
          <div className="flex max-w-[680px] items-start gap-3 rounded-[12px] border border-[#F3D690] bg-[#FEF6E7] px-[18px] py-[15px]">
            <span className="mt-px flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#E6A817] text-[13px] font-bold text-white">
              !
            </span>
            <div className="text-[14px] leading-[1.55] text-[#92660A]">
              {notice}
            </div>
          </div>
        )}
        <div className="mt-[22px] border-b border-[#EEF1F5] pb-2 font-mono text-[12px] text-[#94A3B8]">
          LAST UPDATED · {lastUpdated} &nbsp;·&nbsp; EFFECTIVE · {effectiveDate}
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
        <div className="legal-body">{children}</div>
      </section>

      {brand === "rewindly" ? (
        <RewindlyFooter />
      ) : (
        <ObaritoFooter active={active} />
      )}
    </>
  );
}
