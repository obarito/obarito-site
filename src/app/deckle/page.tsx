import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DeckleMark from "@/components/DeckleMark";
import JsonLd from "@/components/JsonLd";
import ObaritoHeader from "@/components/ObaritoHeader";
import ObaritoFooter from "@/components/ObaritoFooter";
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
    url: `${SITE_URL}/deckle`,
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
      <ObaritoHeader />

      <main className="bg-[#F8F4ED] text-[#241F1B]">
        <section className="overflow-hidden border-b border-[#DED5C8]">
          <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-[clamp(56px,8vw,96px)] sm:px-8 md:pb-14">
            <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14">
              <div className="pb-2">
                <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#945129]">
                  <DeckleMark className="h-7 w-7 text-[#C67139]" />
                  Shopify theme · 3 presets
                </div>
                <h1 className="m-0 max-w-[620px] font-serif text-[clamp(43px,6.4vw,76px)] font-semibold leading-[0.98] tracking-[-0.045em]">
                  Storefronts for art, decor and leather goods.
                </h1>
                <p className="m-0 mt-7 max-w-[560px] text-[clamp(17px,1.8vw,20px)] leading-[1.65] text-[#62574E]">
                  Deckle gives art prints, home decor and leather goods separate storefronts in one Shopify theme. Its print tools handle size, frame, finish and room scale without hiding the details needed to buy.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/deckle/docs" className="rounded-[8px] bg-[#241F1B] px-5 py-3 text-[14px] font-medium text-white">
                    Read the documentation
                  </Link>
                  <Link href="/support" className="rounded-[8px] border border-[#BEB2A4] bg-white/50 px-5 py-3 text-[14px] font-medium text-[#241F1B]">
                    Ask about Deckle
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#E9C8AD] blur-3xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[16px] border border-[#D8CDBF] bg-white p-2 shadow-[0_28px_70px_rgba(63,46,33,0.16)] sm:p-3">
                  <div className="overflow-hidden rounded-[10px] border border-[#E9E2D9]">
                    <Image
                      src="/deckle/deckle-home.png"
                      alt="Deckle preset home page showing a framed museum print and a mixed-orientation collection"
                      width={1000}
                      height={1248}
                      priority
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#DED5C8] bg-[#28231F] text-[#F8F4ED]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
            {[
              ["$360", "One price"],
              ["3", "Storefront presets"],
              ["44", "Sections"],
              ["1.0.0", "First release"],
            ].map(([value, label]) => (
              <div key={label} className="border-[#4C433B] px-3 py-6 first:pl-0 odd:border-r md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                <div className="font-serif text-[29px] leading-none">{value}</div>
                <div className="mt-2 text-[12px] text-[#BEB3A8]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-[clamp(64px,8vw,104px)] sm:px-8">
          <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B542D]">The presets</div>
            <div>
              <h2 className="m-0 font-serif text-[clamp(36px,5vw,58px)] font-semibold leading-[1.02] tracking-[-0.04em]">
                Three storefronts, each built for its catalog.
              </h2>
              <p className="m-0 mt-4 max-w-[650px] text-[16px] leading-[1.65] text-[#675C53]">
                Each preset changes the catalog structure, product page and shopping flow to suit what the merchant sells.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {presets.map((preset) => (
              <article key={preset.name} className="overflow-hidden rounded-[14px] border border-[#DCCFC0] bg-[#FFFCF8]">
                <div className="aspect-[4/3] overflow-hidden border-b border-[#E4D9CC] bg-[#EEE7DE]">
                  <Image
                    src={preset.image}
                    alt={`${preset.name} preset home page`}
                    width={1000}
                    height={1248}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="m-0 font-serif text-[30px] font-semibold tracking-[-0.035em]">{preset.name}</h3>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: preset.color }} />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#9B542D]">{preset.category}</div>
                  <p className="m-0 mt-3 text-[14px] leading-[1.65] text-[#675C53]">{preset.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#DED5C8] bg-[#EFE6DA]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-[clamp(64px,8vw,104px)] sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
            <div className="overflow-hidden rounded-[14px] border border-[#D6C6B6] bg-[#F8F4ED] p-2 shadow-[0_18px_50px_rgba(70,52,38,0.12)]">
              <div className="max-h-[760px] overflow-hidden rounded-[9px] border border-[#E3D8CB] bg-white">
                <Image
                  src="/deckle/product.png"
                  alt="Deckle print product page with size, finish and frame controls"
                  width={1024}
                  height={2048}
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B542D]">The print page</div>
              <h2 className="m-0 font-serif text-[clamp(36px,5vw,58px)] font-semibold leading-[1.03] tracking-[-0.04em]">Configure the print without losing sight of it.</h2>
              <p className="m-0 mt-5 text-[16px] leading-[1.7] text-[#675C53]">
                Size, finish and frame share one product page. The preview changes with the selected variant and keeps the sheet at a believable scale.
              </p>
              <div className="mt-8 divide-y divide-[#CFC0B0] border-y border-[#CFC0B0]">
                {[
                  ["Size", "Up to ten mapped sizes, shown visually instead of hidden in a dropdown."],
                  ["Finish", "Paper names and surface notes sit beside each option."],
                  ["Frame", "Frame color, face width and mount width update the preview."],
                  ["Edition", "Run size, sold count, close date and provenance have their own fields."],
                ].map(([title, body]) => (
                  <div key={title} className="grid grid-cols-[86px_1fr] gap-4 py-4">
                    <div className="font-medium text-[#2E2722]">{title}</div>
                    <div className="text-[14px] leading-[1.6] text-[#675C53]">{body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-[clamp(64px,8vw,104px)] sm:px-8">
          <div className="mb-10 max-w-[740px]">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B542D]">Beyond the product page</div>
            <h2 className="m-0 font-serif text-[clamp(36px,5vw,58px)] font-semibold leading-[1.03] tracking-[-0.04em]">Browse mixed formats. Build the set on the wall.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-[14px] border border-[#DCCFC0] bg-[#FFFCF8]">
              <div className="aspect-[5/4] overflow-hidden border-b border-[#E4D9CC]">
                <Image src="/deckle/collection.png" alt="Deckle collection page with portrait, square and landscape prints" width={1024} height={2048} className="h-full w-full object-cover object-top" />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="m-0 font-serif text-[29px] font-semibold tracking-[-0.03em]">Orientation-aware collections</h3>
                <p className="m-0 mt-3 text-[14.5px] leading-[1.65] text-[#675C53]">Portrait, landscape and square work keeps its own proportions across collection cards, search results and cart lines.</p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[14px] border border-[#DCCFC0] bg-[#FFFCF8]">
              <div className="aspect-[5/4] overflow-hidden border-b border-[#E4D9CC]">
                <Image src="/deckle/wall-builder.png" alt="Deckle gallery wall builder with four selected framed prints" width={1024} height={2048} className="h-full w-full object-cover object-top" />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="m-0 font-serif text-[29px] font-semibold tracking-[-0.03em]">Gallery wall builder</h3>
                <p className="m-0 mt-3 text-[14.5px] leading-[1.65] text-[#675C53]">A shopper can choose two to five prints, compare arrangements, apply one frame and add the set to the cart.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-[#28231F] text-[#F8F4ED]">
          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-8 px-5 py-[clamp(64px,8vw,96px)] text-center sm:px-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D68A55]">Deckle 1.0.0 · $360</div>
            <h2 className="m-0 font-serif text-[clamp(37px,5vw,60px)] font-semibold leading-[1.02] tracking-[-0.04em]">Read the setup guide before the Theme Store release.</h2>
            <p className="mx-auto m-0 max-w-[620px] text-[16px] leading-[1.65] text-[#C8BDB3]">The guide covers all three presets, print mappings, templates, optional product fields, apps and payment features.</p>
            <div>
              <Link href="/deckle/docs" className="inline-flex rounded-[8px] bg-[#C67139] px-6 py-3 text-[14px] font-medium text-white">Open the Deckle documentation</Link>
            </div>
          </div>
        </section>
      </main>

      <ObaritoFooter />
    </>
  );
}
