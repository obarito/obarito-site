import Link from "next/link";
import ObaritoMark from "./ObaritoMark";

type ObaritoFooterProps = {
  /** Which legal/support link to highlight as current. */
  active?: "privacy" | "terms" | "support";
};

/**
 * Compact Obarito footer used on the legal + support pages: a single row of
 * brand + nav links over the studio sibling line.
 */
export default function ObaritoFooter({ active }: ObaritoFooterProps) {
  const link = (key: "apps" | "support" | "privacy" | "terms") =>
    active === key ? "text-[#F1F5F9]" : "text-[#CBD5E1]";

  return (
    <footer className="bg-[#0B0F17] text-[#CBD5E1]">
      <div className="mx-auto max-w-[1120px] px-5 pb-[30px] pt-[56px] sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[#1C2230] pb-7">
          <Link href="/" className="flex items-center gap-2.5">
            <ObaritoMark className="h-6 w-6 text-[#CBD5E1]" nodeColor="#3B82F6" />
            <span className="text-[18px] font-medium tracking-[-0.035em] text-[#F1F5F9]">
              obarito
            </span>
          </Link>
          <div className="flex flex-wrap gap-[26px]">
            <Link href="/#apps" className={`text-[14px] ${link("apps")}`}>
              Apps
            </Link>
            <Link href="/support" className={`text-[14px] ${link("support")}`}>
              Support
            </Link>
            <Link href="/privacy" className={`text-[14px] ${link("privacy")}`}>
              Privacy
            </Link>
            <Link href="/terms" className={`text-[14px] ${link("terms")}`}>
              Terms
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-[22px]">
          <span className="text-[13px] text-[#475569]">
            © 2026 Obarito. All rights reserved.
          </span>
          <span className="font-mono text-[11px] tracking-[0.06em] text-[#475569]">
            SIBLING TO WPAXIOM · WORDPRESS
          </span>
        </div>
      </div>
    </footer>
  );
}
