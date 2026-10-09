import Link from "next/link";
import { DeckleGlyph } from "./DeckleMark";
import ObaritoMark from "./ObaritoMark";

export default function DeckleFooter() {
  const footerLink = "text-[14.5px] text-[#C8BDB3]";

  return (
    <footer className="bg-[#28231F] text-[#C8BDB3]">
      <div className="mx-auto max-w-[1120px] px-5 pb-[30px] pt-[54px] sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-[#4C433B] pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-[11px]">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#C67139] text-white">
                <DeckleGlyph className="h-[22px] w-[22px]" />
              </div>
              <span className="text-[19px] font-semibold tracking-[-0.025em] text-white">
                Deckle
              </span>
            </div>
            <p className="m-0 max-w-[290px] text-[14px] leading-[1.6] text-[#94867B]">
              A Shopify theme for art prints, home decor and leather goods.
            </p>
          </div>

          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#94867B]">
              Product
            </div>
            <div className="flex flex-col gap-[11px]">
              <Link href="/deckle#presets" className={footerLink}>Presets</Link>
              <Link href="/deckle#features" className={footerLink}>Features</Link>
              <Link href="/deckle/docs" className={footerLink}>Docs</Link>
            </div>
          </div>

          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#94867B]">
              Company
            </div>
            <div className="flex flex-col gap-[11px]">
              <Link href="/support" className={footerLink}>Support</Link>
              <Link href="/privacy" className={footerLink}>Privacy</Link>
              <Link href="/terms" className={footerLink}>Terms</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-[22px]">
          <span className="text-[13px] text-[#94867B]">© 2026 Deckle</span>
          <Link
            href="/"
            className="inline-flex items-center gap-[9px] rounded-full border border-[#4C433B] bg-white/[0.04] px-3.5 py-2 text-[13px] text-[#C8BDB3]"
          >
            <ObaritoMark className="h-4 w-4 text-[#C8BDB3]" nodeColor="#C67139" />
            An <span className="font-medium text-white">Obarito</span> theme
          </Link>
        </div>
      </div>
    </footer>
  );
}
