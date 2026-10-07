import Link from "next/link";

type AttestaLanguageSwitcherProps = {
  locale: "de" | "en";
  alternatePath: string;
};

const optionClass =
  "flex h-[30px] min-w-8 items-center justify-center rounded-[7px] px-2 text-[12px] font-semibold leading-none";

export default function AttestaLanguageSwitcher({
  locale,
  alternatePath,
}: AttestaLanguageSwitcherProps) {
  const english = locale === "en";

  return (
    <div
      className="inline-flex h-10 items-center rounded-[10px] border border-[#E6EDEA] bg-[#F5F8F7] p-1"
      role="group"
      aria-label={english ? "Language" : "Sprache"}
    >
      {english ? (
        <Link
          href={alternatePath}
          hrefLang="de-DE"
          className={`${optionClass} text-[#4A5D57] transition-colors hover:bg-[#E8F5EE] hover:text-[#0F4B3C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8058]`}
          aria-label="Zur deutschen Version"
        >
          DE
        </Link>
      ) : (
        <span className={`${optionClass} bg-white text-[#0F4B3C]`} aria-current="page">
          DE
        </span>
      )}

      {english ? (
        <span className={`${optionClass} bg-white text-[#0F4B3C]`} aria-current="page">
          EN
        </span>
      ) : (
        <Link
          href={alternatePath}
          hrefLang="en"
          className={`${optionClass} text-[#4A5D57] transition-colors hover:bg-[#E8F5EE] hover:text-[#0F4B3C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8058]`}
          aria-label="Switch to English"
        >
          EN
        </Link>
      )}
    </div>
  );
}
