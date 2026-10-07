import Link from "next/link";
import AttestaMark from "./AttestaMark";
import AttestaLanguageSwitcher from "./AttestaLanguageSwitcher";
import { ATTESTA_APPSTORE_URL } from "@/lib/config";

/**
 * The Attesta app header (sticky, white, Attesta mark + wordmark). Shared across
 * every /attesta page so they all carry the app's own header rather than the main
 * Obarito header. Features/How/Pricing point back to the landing-page anchors so
 * they work from any sub-page.
 */
type AttestaHeaderProps = {
  locale?: "de" | "en";
  alternatePath?: string;
};

export default function AttestaHeader({
  locale = "de",
  alternatePath = "/en/attesta",
}: AttestaHeaderProps) {
  const english = locale === "en";
  const basePath = english ? "/en/attesta" : "/attesta";
  const navLink = "text-[14.5px] font-medium text-[#4A5D57]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#E6EDEA] bg-[rgba(255,255,255,0.85)] backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-[15px] sm:px-8">
        <Link href={basePath} className="flex items-center gap-[11px]">
          <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#0F4B3C] text-white">
            <AttestaMark className="h-[19px] w-[19px]" />
          </div>
          <span className="hidden text-[20px] font-semibold tracking-[-0.025em] text-[#0F4B3C] sm:inline">
            Attesta
          </span>
        </Link>
        <nav className="flex items-center">
          <div className="hidden items-center gap-7 lg:flex">
            <Link href={`${basePath}#features`} className={navLink}>
              {english ? "Features" : "Funktionen"}
            </Link>
            <Link href={`${basePath}#how`} className={navLink}>
              {english ? "How it works" : "So funktioniert es"}
            </Link>
            <Link href={`${basePath}#pricing`} className={navLink}>
              {english ? "Pricing" : "Preise"}
            </Link>
            <Link href={`${basePath}/docs`} className={navLink}>
              {english ? "Docs" : "Anleitung"}
            </Link>
            <Link href="/support" className={navLink}>
              Support
            </Link>
          </div>

          <div className="ml-4 flex items-center gap-3 sm:ml-8 sm:gap-4">
            <AttestaLanguageSwitcher locale={locale} alternatePath={alternatePath} />
            <a
              href={ATTESTA_APPSTORE_URL}
              className="rounded-[10px] bg-[#0F4B3C] px-[17px] py-2.5 text-[14px] font-semibold text-white"
            >
              <span className="sm:hidden">{english ? "Install" : "Installieren"}</span>
              <span className="hidden sm:inline">
                {english ? "Add to Shopify" : "Bei Shopify installieren"}
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
