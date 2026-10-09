import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DeckleGlyph } from "@/components/DeckleMark";
import DeckleHeader from "@/components/DeckleHeader";
import DeckleFooter from "@/components/DeckleFooter";
import JsonLd from "@/components/JsonLd";
import { DECKLE_THEME_STORE_URL } from "@/lib/config";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Deckle Shopify theme",
  description:
    "A $360 Shopify theme for art prints, home decor and leather goods, with three presets and a built-in print configurator.",
  path: "/deckle",
});

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Deckle Shopify theme",
  description:
    "A Shopify theme for art prints, home decor and leather goods with uncropped artwork, print configuration and three presets.",
  url: `${SITE_URL}/deckle`,
  brand: { "@type": "Brand", name: "Obarito" },
  offers: {
    "@type": "Offer",
    price: "360",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    url: DECKLE_THEME_STORE_URL || `${SITE_URL}/deckle`,
  },
};

const presets = [
  {
    name: "Deckle",
    category: "Art and print shops",
    description: "Editions, artists and provenance on warm paper tones.",
    image: "/deckle/deckle-home.png",
    color: "#C67139",
  },
  {
    name: "Wash",
    category: "Home decor",
    description: "Room-led shopping for wall art, textiles, lighting and decor.",
    image: "/deckle/wash-home.png",
    color: "#2F6662",
  },
  {
    name: "Riso",
    category: "Leather goods",
    description: "Large photography, material details and made-to-order products.",
    image: "/deckle/riso-home.png",
    color: "#8A4427",
  },
] as const;

export default function DecklePage() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <DeckleHeader />

      <main className="bg-[#F8F4ED] text-[#241F1B]">
        <section className="border-b border-[#DED5C8]">
          <div className="mx-auto max-w-[1120px] px-5 py-[clamp(56px,8vw,88px)] sm:px-8">
            <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-14">
              <div className="pb-2">
                <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#945129]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#C67139] text-white">
                    <DeckleGlyph className="h-6 w-6" />
                  </span>
                  Shopify theme · 3 presets
                </div>
                <h1 className="m-0 max-w-[620px] text-[clamp(40px,5.4vw,60px)] font-semibold leading-[1.05] tracking-[-0.04em]">
                  Storefronts for art, decor and leather goods.
                </h1>
                <p className="m-0 mt-6 max-w-[560px] text-[clamp(17px,1.8vw,19px)] leading-[1.65] text-[#62574E]">
                  Deckle gives art prints, home decor and leather goods separate storefronts in one Shopify theme. Its print tools handle size, frame, finish and room scale without hiding the details needed to buy.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {DECKLE_THEME_STORE_URL ? (
                    <a href={DECKLE_THEME_STORE_URL} className="rounded-[10px] bg-[#241F1B] px-5 py-3 text-[14px] font-medium text-white">
                      View on Theme Store
                    </a>
                  ) : (
                    <Link href="/deckle/docs" className="rounded-[10px] bg-[#241F1B] px-5 py-3 text-[14px] font-medium text-white">
                      Read the documentation
                    </Link>
                  )}
                  <Link href="/support" className="rounded-[10px] border border-[#BEB2A4] bg-white/50 px-5 py-3 text-[14px] font-medium text-[#241F1B]">
                    Ask about Deckle
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[420px] sm:min-h-[500px] md:min-h-0">
                <div className="absolute inset-0 overflow-hidden rounded-[18px] border border-[#D8CDBF] bg-white p-2.5 shadow-[0_18px_50px_rgba(63,46,33,0.12)] sm:p-3">
                  <div className="h-full overflow-hidden rounded-[11px] border border-[#E9E2D9] bg-white">
                    <Image
                      src="/deckle/deckle-home.png"
                      alt="Deckle preset home page showing a framed museum print and a mixed-orientation collection"
                      width={1000}
                      height={1248}
                      priority
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#DED5C8] bg-[#EFE6DA]">
          <div className="mx-auto grid max-w-[1120px] grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
            {[
              ["$360", "One-time price"],
              ["3", "Storefront presets"],
              ["44", "Theme sections"],
              ["1.0.0", "Current release"],
            ].map(([value, label]) => (
              <div key={label} className="border-[#D4C6B7] px-3 py-5 first:pl-0 odd:border-r md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                <div className="text-[24px] font-semibold leading-none tracking-[-0.03em] text-[#2E2722]">{value}</div>
                <div className="mt-2 text-[12px] text-[#75685D]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="presets" className="mx-auto max-w-[1120px] scroll-mt-[72px] px-5 py-[clamp(64px,8vw,96px)] sm:px-8">
          <div className="mb-10 max-w-[700px]">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B542D]">The presets</div>
            <h2 className="m-0 text-[clamp(30px,4vw,42px)] font-semibold leading-[1.1] tracking-[-0.035em]">
              Three storefronts, each built for its catalog.
            </h2>
            <p className="m-0 mt-4 max-w-[650px] text-[16px] leading-[1.65] text-[#675C53]">
              Each preset changes the catalog structure, product page and shopping flow to suit what the merchant sells.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {presets.map((preset) => (
              <article key={preset.name} className="overflow-hidden rounded-[16px] border border-[#DCCFC0] bg-[#FFFCF8]">
                <div className="aspect-[4/3] overflow-hidden border-b border-[#E4D9CC] bg-[#EEE7DE]">
                  <Image
                    src={preset.image}
                    alt={`${preset.name} preset home page`}
                    width={1000}
                    height={1248}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="border-t-[3px] p-6" style={{ borderTopColor: preset.color }}>
                  <h3 className="m-0 mb-4 text-[25px] font-semibold tracking-[-0.03em]">{preset.name}</h3>
                  <div className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#9B542D]">{preset.category}</div>
                  <p className="m-0 mt-3 text-[14px] leading-[1.65] text-[#675C53]">{preset.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="scroll-mt-[72px] border-y border-[#DED5C8] bg-[#EFE6DA]">
          <div className="mx-auto max-w-[1120px] px-5 py-[clamp(56px,7vw,84px)] sm:px-8">
            <div className="mb-10 max-w-[680px]">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B542D]">Included with Deckle</div>
              <h2 className="m-0 text-[clamp(30px,4vw,40px)] font-semibold leading-[1.1] tracking-[-0.035em]">Print options, mixed formats and sets in one theme.</h2>
              <p className="m-0 mt-4 text-[16px] leading-[1.65] text-[#675C53]">
                Deckle keeps the product details visible while shoppers choose a format or build a group.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["Print configuration", "Size, finish and frame options update the product preview."],
                ["Mixed-format collections", "Portrait, landscape and square products keep their proportions."],
                ["Gallery wall builder", "Shoppers can arrange two to five prints and add the set to the cart."],
                ["Limited editions", "Run size, sold count, close date and provenance have dedicated fields."],
                ["Made to order", "Product pages can replace stock messaging with a lead time for products made after purchase."],
                ["Trade ordering", "A separate template gives business buyers a faster way to order several products."],
              ].map(([title, body], index) => (
                <article key={title} className="rounded-[16px] border border-[#D8CBBB] bg-[#FFFCF8] p-6 sm:p-7">
                  <div className="mb-7 font-mono text-[11px] tracking-[0.12em] text-[#A16A47]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="m-0 text-[19px] font-semibold tracking-[-0.02em] text-[#2E2722]">{title}</h3>
                  <p className="m-0 mt-3 text-[14.5px] leading-[1.65] text-[#675C53]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-5 pb-[clamp(40px,5vw,56px)] pt-[clamp(56px,7vw,84px)] sm:px-8">
          <div className="max-w-[700px]">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B542D]">Across the storefront</div>
            <h2 className="m-0 text-[clamp(28px,3.8vw,38px)] font-semibold leading-[1.12] tracking-[-0.035em]">Navigation, discovery and checkout are included.</h2>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              ["Navigation and search", "Nested menus, a desktop mega menu, a phone drawer and predictive search."],
              ["Product discovery", "Filters, recommendations, recently viewed products and editorial collection layouts."],
              ["Cart and fulfillment", "Cart drawer, subscriptions, unit prices, accelerated checkout and pickup availability."],
              ["Content pages", "Templates for artists, about, contact, FAQ, trade, journals and articles."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-[14px] bg-[#EFE6DA] px-5 py-5 sm:px-6">
                <h3 className="m-0 text-[16px] font-semibold text-[#2E2722]">{title}</h3>
                <p className="m-0 mt-2 text-[14.5px] leading-[1.6] text-[#675C53]">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-5 pb-[clamp(56px,8vw,88px)] pt-0 sm:px-8">
          <div className="overflow-hidden rounded-[24px] bg-[#28231F] px-7 py-[clamp(42px,6vw,64px)] text-center text-[#F8F4ED] sm:px-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D68A55]">Deckle 1.0.0 · $360</div>
            <h2 className="mx-auto mb-0 mt-5 max-w-[660px] text-[clamp(30px,4.2vw,44px)] font-semibold leading-[1.08] tracking-[-0.04em]">
              {DECKLE_THEME_STORE_URL ? "View Deckle on the Shopify Theme Store." : "Deckle is being prepared for the Shopify Theme Store."}
            </h2>
            <p className="mx-auto mb-0 mt-4 max-w-[590px] text-[16px] leading-[1.65] text-[#C8BDB3]">
              {DECKLE_THEME_STORE_URL
                ? "Review the three presets, price and theme details on Shopify."
                : "The listing link will appear here after Shopify approves the theme. The merchant guide is available now."}
            </p>
            <div className="mt-8">
              {DECKLE_THEME_STORE_URL ? (
                <a href={DECKLE_THEME_STORE_URL} className="inline-flex justify-center rounded-[11px] bg-[#C67139] px-6 py-3.5 text-[14.5px] font-semibold text-white">View on Theme Store</a>
              ) : (
                <Link href="/deckle/docs" className="inline-flex justify-center rounded-[11px] bg-[#C67139] px-6 py-3.5 text-[14.5px] font-semibold text-white">Open the documentation</Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <DeckleFooter />
    </>
  );
}
