import Link from "next/link";
import { DeckleGlyph } from "./DeckleMark";
import { DECKLE_THEME_STORE_URL } from "@/lib/config";

export default function DeckleHeader() {
  const navLink = "hidden text-[14.5px] font-medium text-[#62574E] sm:inline";

  return (
    <header className="sticky top-0 z-50 border-b border-[#DED5C8] bg-[rgba(248,244,237,0.88)] backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-[15px] sm:px-8">
        <Link href="/deckle" className="flex items-center gap-[11px]">
          <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#C67139] text-white">
            <DeckleGlyph className="h-6 w-6" />
          </div>
          <span className="text-[20px] font-semibold tracking-[-0.025em] text-[#2E2722]">
            Deckle
          </span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7">
          <Link href="/deckle#presets" className={navLink}>
            Presets
          </Link>
          <Link href="/deckle#features" className={navLink}>
            Features
          </Link>
          <Link href="/support" className={navLink}>
            Support
          </Link>
          {DECKLE_THEME_STORE_URL ? (
            <a
              href={DECKLE_THEME_STORE_URL}
              className="rounded-[10px] bg-[#2E2722] px-[17px] py-2.5 text-[14px] font-semibold text-white"
            >
              View theme
            </a>
          ) : (
            <Link
              href="/deckle/docs"
              className="rounded-[10px] bg-[#2E2722] px-[17px] py-2.5 text-[14px] font-semibold text-white"
            >
              Docs
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
