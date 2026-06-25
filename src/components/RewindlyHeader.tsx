import Link from "next/link";
import RewindlyMark from "./RewindlyMark";
import { APPSTORE_URL } from "@/lib/config";

/**
 * The Rewindly app header (sticky, white, Rewindly mark + wordmark). Shared
 * across every /rewindly page - the landing page and the docs/legal sub-pages -
 * so they all carry the app's own header rather than the main Obarito header.
 * Features/How/Pricing point back to the landing-page anchors so they work from
 * any sub-page.
 */
export default function RewindlyHeader() {
  const navLink =
    "hidden text-[14.5px] font-medium text-[#48586B] sm:inline";

  return (
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
          <Link href="/rewindly#features" className={navLink}>
            Features
          </Link>
          <Link href="/rewindly#how" className={navLink}>
            How it works
          </Link>
          <Link href="/rewindly#pricing" className={navLink}>
            Pricing
          </Link>
          <Link href="/support" className={navLink}>
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
  );
}
