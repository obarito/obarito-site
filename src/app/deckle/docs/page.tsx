import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DeckleHeader from "@/components/DeckleHeader";
import DeckleFooter from "@/components/DeckleFooter";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Deckle theme documentation",
  description:
    "Setup and use Deckle for Shopify, including presets, print sizes, frames, finishes, templates, optional product fields and troubleshooting.",
  path: "/deckle/docs",
});

const toc = [
  ["start", "Getting started"],
  ["presets", "The three presets"],
  ["settings", "Theme settings"],
  ["prints", "Print options"],
  ["templates", "Templates"],
  ["sections", "Sections"],
  ["fields", "Optional fields"],
  ["cart", "Cart and payments"],
  ["apps", "Apps"],
  ["faq", "Frequently asked questions"],
] as const;

const faq = [
  ["Do I need metafields before I start?", "No. Every page works without them. Optional fields add detail when you want it."],
  ["Why does my print preview show the wrong size or no frame?", "Check that the option names and values in Theme settings match the product options exactly, including capitalization and spaces."],
  ["How do I turn animation off?", "Open Theme settings, choose Motion and set the level to Off."],
  ["Why is pickup availability missing?", "Local pickup must be active for a location, and that location must have a street address."],
  ["Can I use a section from another preset?", "Yes. Every Deckle section is available in all three presets."],
] as const;

const faqSchema = faqJsonLd(faq.map(([question, answer]) => ({ question, answer })));

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-[12px] border border-[#E2E8F0]">
      <table className="w-full min-w-[620px] border-collapse text-left text-[14px] leading-[1.55]">
        <thead className="bg-[#F7F8FA] text-[#0B0F17]">
          <tr>{headers.map((header) => <th key={header} className="border-b border-[#E2E8F0] px-4 py-3 font-semibold">{header}</th>)}</tr>
        </thead>
        <tbody className="text-[#3A4654]">
          {rows.map((row) => (
            <tr key={row.join("|")} className="border-b border-[#EEF1F5] last:border-0">
              {row.map((cell, index) => <td key={`${index}-${cell}`} className="px-4 py-3 align-top">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DeckleDocsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Obarito", path: "/" }, { name: "Deckle documentation", path: "/deckle/docs" }]), faqSchema]} />
      <DeckleHeader />

      <section className="mx-auto max-w-[1000px] px-5 pt-[clamp(44px,6vw,72px)] sm:px-8">
        <Breadcrumbs items={[{ name: "Obarito", path: "/" }, { name: "Deckle documentation" }]} />
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#2563EB]">Deckle 1.0.0</div>
        <h1 className="m-0 mb-[18px] text-[clamp(34px,5vw,48px)] font-semibold tracking-[-0.035em]">Deckle theme documentation</h1>
        <p className="m-0 mb-[26px] max-w-[700px] text-[18px] leading-[1.6] text-[#5A6B80]">
          Set up a print shop, home decor catalog or leather goods store with Deckle&apos;s three presets and shared section library.
        </p>
        <div className="rounded-[12px] border border-[#BFDBFE] bg-[#EFF6FF] p-5 text-[14.5px] leading-[1.65] text-[#1E3A5F]">
          <strong>Before editing code:</strong> duplicate the theme under Online Store, Themes. Make changes on the copy and publish it only after checking it. Theme updates cannot merge code you changed yourself.
        </div>
        <div className="mt-[26px] border-b border-[#E6EDEA] pb-2 font-mono text-[12px] text-[#64746E]">LAST UPDATED · 9 OCTOBER 2026</div>
      </section>

      <section className="mx-auto grid max-w-[1000px] grid-cols-1 items-start gap-10 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-[200px_1fr] md:gap-[56px]">
        <nav className="toc top-[90px] hidden md:sticky md:block" aria-label="On this page">
          <div className="mb-[14px] font-mono text-[10px] uppercase tracking-[0.14em] text-[#64746E]">On this page</div>
          <div className="flex flex-col gap-2.5">
            {toc.map(([id, label]) => <a key={id} href={`#${id}`} className="text-[13.5px] text-[#5A6B80]">{label}</a>)}
          </div>
        </nav>

        <div className="legal-body">
          <h2 id="start">Getting started</h2>
          <ol className="mb-4 list-decimal pl-[22px]">
            <li>Install Deckle from the Shopify Theme Store and choose the preset closest to your shop.</li>
            <li>Open Online Store, Themes, then Customize.</li>
            <li>Set your logo and favicon under Theme settings, Branding.</li>
            <li>Choose fonts and colors under Typography and Colors.</li>
            <li>Choose your menus in the Header and Footer sections.</li>
            <li>If you sell prints, complete the Print options settings described below.</li>
            <li>Replace the home page sample content with your collections, products and images.</li>
          </ol>
          <p>Deckle works without custom metafields. Optional fields add richer product and collection information, and every feature has a fallback when those fields are empty.</p>

          <h2 id="presets">The three presets</h2>
          <Table headers={["Preset", "Made for", "Character"]} rows={[
            ["Deckle", "Art and print shops", "Warm paper and ink, editions, artists and restrained motion"],
            ["Wash", "Home decor with a strong wall art department", "Soft tints, sage controls and terracotta prices"],
            ["Riso", "Leather goods and bags", "Large photography, workshop details and square corners"],
          ]} />
          <p>A preset is a starting point, not a separate theme. Changing the theme style later changes colors and fonts but does not replace sections you already placed. Sections from any preset can be used with the other two.</p>

          <h2 id="settings">Theme settings</h2>
          <Table headers={["Group", "Controls"]} rows={[
            ["Branding", "Logo, logo width and favicon"],
            ["Typography", "Heading and body fonts, type scale, line heights, labels, buttons and the word used for a product"],
            ["Layout", "Page width, margins, spacing and section rhythm"],
            ["Colors", "Color schemes, page background, prices and sale prices"],
            ["Style", "Corners, borders, buttons, cards, filters, search, gift cards and cart presentation"],
            ["Motion", "Off, subtle or full motion and the preset motion character"],
            ["Print options", "Size, frame and finish mappings used by the live print preview"],
            ["Quick view", "Layout, stock threshold, dispatch note and room photo"],
            ["Cart", "Free shipping threshold, notes, gift wrapping and dispatch wording"],
            ["Social media", "Facebook, Instagram, YouTube, TikTok, X and other profile links"],
          ]} />
          <p>Type sizes follow one scale built from the base size and scale ratio. Shoppers who enable reduced motion on their device receive the static version regardless of the theme setting.</p>

          <h2 id="prints">Print sizes, frames and finishes</h2>
          <p>Print settings let the product page, quick view, cart and gallery wall draw a print at its relative size with the selected frame and finish.</p>
          <ul>
            <li><strong>Print options:</strong> enter the product option names for size, frame and finish exactly as they appear on your products.</li>
            <li><strong>Print sizes:</strong> map up to 10 option values to their longest edge in centimeters and an optional hanging note.</li>
            <li><strong>Frames:</strong> map up to 10 option values to face width, mount width, color and material. Use a face width of zero for unframed prints.</li>
            <li><strong>Finishes:</strong> map up to six option values to a preview treatment, description and paper name.</li>
          </ul>
          <p>A value without a mapping can still be purchased. If you do not sell prints, leave these settings empty and use the general product template.</p>

          <h2 id="templates">Templates</h2>
          <p>Assign a template from the Theme template field on the product, collection or page in Shopify admin.</p>
          <Table headers={["Template", "Use"]} rows={[
            ["product", "Art prints with scaled previews, frames and finishes"],
            ["product.general", "Decor, bags, accessories and other products"],
            ["product.limited", "Limited editions with a close date and numbered run"],
            ["product.made-to-order", "Products made after purchase with a lead time"],
            ["product.gift-card", "Gift cards with recipient details and send date"],
            ["collection", "Default filtered collection"],
            ["collection.dense", "Tighter grid for large catalogs"],
            ["collection.editorial", "A collection story with content between products"],
            ["page.about, page.artists, page.contact, page.faq", "About, artists, contact and FAQ pages"],
            ["page.trade, page.wall", "Trade quick order and gallery wall builder"],
            ["blog, article, search, 404, password", "Journal, search and utility pages"],
          ]} />
          <p>For limited editions, add a JSON product metafield named <code>deckle.edition</code> with the run size, close date and per-size sold counts. Without it, the product behaves as a standard edition.</p>

          <h2 id="sections">Sections</h2>
          <p>Use Add section in the theme editor. The library includes hero slideshows, editorial stories, featured collections and products, room scenes, gallery walls, shop the room, before and after, artists, testimonials, customer photos, trust rows, marquees, journal posts and recently viewed products.</p>
          <p>Product sections include the print and general product layouts, Complete the look, Make it a pair, What fits, product recommendations and pickup availability. Collection pages include headers, subcollection navigation, sets, filtered grids and editorial layouts.</p>
          <p>The header supports nested menus, a desktop mega menu, a phone drawer and predictive search. The signup popup starts its delay only after the shopper interacts with the page. Deckle&apos;s cookie consent section is optional and hidden by default, so use Shopify&apos;s own customer privacy banner unless you deliberately enable the theme section.</p>

          <h2 id="fields">Optional product and collection fields</h2>
          <Table headers={["Field", "Owner", "Adds"]} rows={[
            ["deckle.artist", "Product", "Artist name, with vendor as the fallback"],
            ["deckle.full_title, deckle.work_date", "Product", "Full artwork title and date"],
            ["deckle.aspect_ratio", "Product", "Sheet ratio for orientation-aware previews"],
            ["deckle.sheet_width, deckle.sheet_height", "Product", "Real print dimensions"],
            ["deckle.museum_short, deckle.museum_object", "Product", "Museum and object reference"],
            ["deckle.licence", "Product", "Image license line"],
            ["deckle.edition", "Product JSON", "Limited edition run data"],
            ["custom.pairs_with", "Product reference", "Paired product in Complete the look"],
            ["custom.card_note, custom.card_detail", "Product", "Extra card, search and cart details"],
            ["custom.size_detail", "Variant", "Size details in cart lines"],
            ["custom.menu_color, custom.menu_detail", "Collection", "Color chip and detail in menus"],
          ]} />
          <p>Artist pages can use a <code>deckle_artist</code> metaobject. Without it, artist links fall back to the vendor product list. Ratings come from a reviews app through Shopify&apos;s standard rating fields.</p>

          <h2 id="cart">Cart, checkout and payments</h2>
          <p>The cart drawer and cart page share the same settings. They show line discounts, subscription names, unit prices, tax wording and product options. Discount codes are entered at checkout.</p>
          <p>Shop Pay Installments and accelerated checkout buttons appear after Shopify Payments and Shop Pay are enabled. Pickup availability appears when local pickup is enabled for a location with a street address.</p>

          <h2 id="apps">Apps</h2>
          <p>Deckle does not bundle a review or wishlist app. Install the app you prefer and add its app block to the product page. Product sections accept app blocks, and Custom Liquid can host snippets supplied by an app.</p>

          <h2 id="faq">Frequently asked questions</h2>
          {faq.map(([question, answer]) => (
            <div key={question} className="mb-6">
              <h3 className="m-0 mb-2 text-[17px] font-semibold text-[#0B0F17]">{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
          <h3 className="m-0 mb-2 text-[17px] font-semibold text-[#0B0F17]">Will an update preserve my changes?</h3>
          <p>Theme editor settings and content carry over. Direct code edits do not, which is why you should duplicate the theme before editing it.</p>
          <h3 className="m-0 mb-2 text-[17px] font-semibold text-[#0B0F17]">Which languages are included?</h3>
          <p>English. You can translate every storefront string under Online Store, Themes, Edit default theme content, or with a translation app.</p>

          <h2>Getting help</h2>
          <p>Read the <Link href="/support">support policy and send a request</Link>. Support covers Deckle features and settings. For custom code or design changes, hire a Shopify Partner.</p>
        </div>
      </section>

      <DeckleFooter />
    </>
  );
}
