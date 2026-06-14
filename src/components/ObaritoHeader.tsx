import Link from "next/link";
import ObaritoMark from "./ObaritoMark";

type ObaritoHeaderProps = {
  /** Highlights the matching nav link as the current page. */
  active?: "apps" | "about" | "support";
};

/**
 * Shared Obarito-brand header used on the home + legal/support pages.
 * Sticky, translucent, with the orbital mark + lowercase wordmark.
 */
export default function ObaritoHeader({ active }: ObaritoHeaderProps) {
  const linkBase = "text-[14.5px] font-medium";
  const linkColor = (key: ObaritoHeaderProps["active"]) =>
    active === key ? "text-[#0B0F17] font-semibold" : "text-[#475569]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#EEF1F5] bg-[rgba(255,255,255,0.82)] backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-[17px] sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <ObaritoMark className="h-[26px] w-[26px] text-[#334155]" />
          <span className="text-[19px] font-medium tracking-[-0.035em] text-[#334155]">
            obarito
          </span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-[30px]">
          <Link href="/#apps" className={`${linkBase} ${linkColor("apps")} hidden sm:inline`}>
            Apps
          </Link>
          <Link href="/#studio" className={`${linkBase} ${linkColor("about")} hidden sm:inline`}>
            About
          </Link>
          <Link href="/support" className={`${linkBase} ${linkColor("support")}`}>
            Support
          </Link>
          <Link
            href="/rewindly"
            className="rounded-[9px] bg-[#0B0F17] px-4 py-[9px] text-[14px] font-medium text-white"
          >
            View Rewindly
          </Link>
        </nav>
      </div>
    </header>
  );
}
