import Link from "next/link";
import RewindlyMark from "./RewindlyMark";
import ObaritoMark from "./ObaritoMark";

/**
 * The Rewindly app footer (navy, with the "An Obarito app" signature). Shared
 * across every /rewindly page - the landing page and the docs/legal sub-pages -
 * so they all carry the app's own footer rather than the main Obarito footer.
 * Features/Pricing point back to the landing-page anchors so they work from any
 * sub-page.
 */
export default function RewindlyFooter() {
  return (
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
              <Link href="/rewindly#features" className="text-[14.5px] text-[#9FB1C8]">
                Features
              </Link>
              <Link href="/rewindly#pricing" className="text-[14.5px] text-[#9FB1C8]">
                Pricing
              </Link>
              <Link href="/rewindly/docs" className="text-[14.5px] text-[#9FB1C8]">
                Docs
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#465873]">
              Company
            </div>
            <div className="flex flex-col gap-[11px]">
              <Link href="/support" className="text-[14.5px] text-[#9FB1C8]">
                Support
              </Link>
              <Link href="/rewindly/privacy" className="text-[14.5px] text-[#9FB1C8]">
                Privacy
              </Link>
              <Link href="/rewindly/terms" className="text-[14.5px] text-[#9FB1C8]">
                Terms
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
  );
}
