import Link from "next/link";
import AttestaMark from "./AttestaMark";
import ObaritoMark from "./ObaritoMark";

/**
 * The Attesta app footer (deep green, with the "An Obarito app" signature).
 * Shared across every /attesta page so they all carry the app's own footer rather
 * than the main Obarito footer. Features/Pricing point back to the landing-page
 * anchors so they work from any sub-page.
 */
export default function AttestaFooter({ locale = "de" }: { locale?: "de" | "en" }) {
  const english = locale === "en";
  const basePath = english ? "/en/attesta" : "/attesta";
  return (
    <footer className="bg-[#08291F] text-[#9EBCB1]">
      <div className="mx-auto max-w-[1160px] px-5 pb-[30px] pt-[54px] sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-[#14402F] pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-[11px]">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#0F4B3C] text-white">
                <AttestaMark className="h-[18px] w-[18px]" />
              </div>
              <span className="text-[19px] font-semibold tracking-[-0.025em] text-white">
                Attesta
              </span>
            </div>
            <p className="m-0 max-w-[290px] text-[14px] leading-[1.6] text-[#6A9488]">
              {english
                ? "E-invoicing for Shopify. Every paid order becomes a ZUGFeRD invoice, archived for ten years and delivered by email."
                : "E-Rechnungen für Shopify. Aus jeder bezahlten Bestellung wird eine ZUGFeRD-Rechnung, die zehn Jahre archiviert und per E-Mail versendet wird."}
            </p>
          </div>
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#6A9488]">
              {english ? "Product" : "Produkt"}
            </div>
            <div className="flex flex-col gap-[11px]">
              <Link href={`${basePath}#features`} className="text-[14.5px] text-[#9EBCB1]">
                {english ? "Features" : "Funktionen"}
              </Link>
              <Link href={`${basePath}#how`} className="text-[14.5px] text-[#9EBCB1]">
                {english ? "How it works" : "So funktioniert es"}
              </Link>
              <Link href={`${basePath}#pricing`} className="text-[14.5px] text-[#9EBCB1]">
                {english ? "Pricing" : "Preise"}
              </Link>
              <Link href={`${basePath}/docs`} className="text-[14.5px] text-[#9EBCB1]">
                {english ? "Docs" : "Anleitung"}
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#6A9488]">
              {english ? "Company" : "Unternehmen"}
            </div>
            <div className="flex flex-col gap-[11px]">
              <Link href="/support" className="text-[14.5px] text-[#9EBCB1]">
                Support
              </Link>
              <Link href={`${basePath}/privacy`} className="text-[14.5px] text-[#9EBCB1]">
                {english ? "Privacy" : "Datenschutz"}
              </Link>
              <Link href={`${basePath}/terms`} className="text-[14.5px] text-[#9EBCB1]">
                {english ? "Terms" : "Nutzungsbedingungen"}
              </Link>
              <Link href={`${basePath}/dpa`} className="text-[14.5px] text-[#9EBCB1]">
                {english ? "DPA" : "AVV"}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-[22px]">
          <span className="text-[13px] text-[#6A9488]">© 2026 Attesta</span>
          <Link
            href="/"
            className="inline-flex items-center gap-[9px] rounded-full border border-[#14402F] bg-white/[0.04] px-3.5 py-2 text-[13px] text-[#9EBCB1]"
          >
            <ObaritoMark className="h-4 w-4 text-[#9EBCB1]" nodeColor="#34D399" />
            {english ? "An app by" : "Eine App von"}{" "}
            <span className="font-medium text-white">Obarito</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
