import Link from "next/link";
import AttestaMark from "./AttestaMark";
import { ATTESTA_APPSTORE_URL } from "@/lib/config";

/**
 * The Attesta app header (sticky, white, Attesta mark + wordmark). Shared across
 * every /attesta page so they all carry the app's own header rather than the main
 * Obarito header. Features/How/Pricing point back to the landing-page anchors so
 * they work from any sub-page.
 */
export default function AttestaHeader() {
  const navLink = "hidden text-[14.5px] font-medium text-[#4A5D57] sm:inline";

  return (
    <header className="sticky top-0 z-50 border-b border-[#E6EDEA] bg-[rgba(255,255,255,0.85)] backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-[15px] sm:px-8">
        <Link href="/attesta" className="flex items-center gap-[11px]">
          <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#0F4B3C] text-white">
            <AttestaMark className="h-[19px] w-[19px]" />
          </div>
          <span className="text-[20px] font-semibold tracking-[-0.025em] text-[#0F4B3C]">
            Attesta
          </span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7">
          <Link href="/attesta#features" className={navLink}>
            Features
          </Link>
          <Link href="/attesta#how" className={navLink}>
            How it works
          </Link>
          <Link href="/attesta#pricing" className={navLink}>
            Pricing
          </Link>
          <Link href="/attesta/docs" className={navLink}>
            Docs
          </Link>
          <Link href="/support" className={navLink}>
            Support
          </Link>
          <a
            href={ATTESTA_APPSTORE_URL}
            className="rounded-[10px] bg-[#0F4B3C] px-[17px] py-2.5 text-[14px] font-semibold text-white"
          >
            Add to Shopify
          </a>
        </nav>
      </div>
    </header>
  );
}
