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
  ["rooms", "Room photos and sets"],
  ["trade", "Trade and gallery wall"],
  ["artists", "Artist pages"],
  ["filters", "Filters"],
  ["images", "Image sizes"],
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
            ["Print options", "The product option names used for size, frame and finish"],
            ["Print sizes", "Each size value's longest edge and hanging note"],
            ["Frames", "Each frame value's face width, mount, color and material"],
            ["Finishes", "Each finish value's preview, description and paper name"],
            ["Quick view", "Layout, stock threshold, dispatch note and room photo"],
            ["Cart", "Free shipping threshold, order note, gift wrapping product and when each line ships"],
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
            ["gift_card", "The gift card the recipient receives, with its code and QR code"],
            ["collection", "Default filtered collection"],
            ["collection.dense", "Tighter grid for large catalogs"],
            ["collection.editorial", "A collection story with content between products"],
            ["list-collections", "The index of all collections"],
            ["page", "Default page"],
            ["page.about, page.artists, page.contact, page.faq", "About, artists, contact and FAQ pages"],
            ["page.trade, page.wall", "Trade quick order and gallery wall builder"],
            ["metaobject/deckle_artist", "One page for each artist entry"],
            ["cart", "The cart page"],
            ["search, search.count", "Search results, and a version that leads with the number of results"],
            ["blog, article, 404, password", "Journal and utility pages"],
          ]} />
          <h3 id="limited" className="m-0 mb-2 mt-6 text-[17px] font-semibold text-[#0B0F17]">Limited editions</h3>
          <p>A product on the product.limited template sells each size as its own numbered run. To show real numbers, add a JSON product metafield named <code>deckle.edition</code> with these keys:</p>
          <ul>
            <li><code>run</code>: how many prints each size&apos;s run holds.</li>
            <li><code>closes</code>: the date the edition closes, such as <code>2026-12-31</code>.</li>
            <li><code>sizes</code>: an object keyed by size option value. Each size has a <code>sold</code> count and, once it sells out, a <code>sold_out_on</code> date.</li>
          </ul>
          <pre className="my-4 overflow-x-auto rounded-[12px] bg-[#F7F8FA] p-4 text-[13px] leading-[1.6]"><code>{`{
  "run": 50,
  "closes": "2026-12-31",
  "sizes": {
    "40 cm": { "sold": 12 },
    "70 cm": { "sold": 50, "sold_out_on": "2026-10-02" }
  }
}`}</code></pre>
          <p>Without the metafield, the product sells as a standard edition. The section&apos;s <strong>Preview with sample data</strong> setting fills the runs with sample numbers so you can see the layout before you add data. Set it to Off before your store goes live, or shoppers will see the sample counts.</p>

          <h2 id="sections">Sections</h2>
          <p>Use Add section in the theme editor. The library includes hero slideshows, editorial stories, featured collections and products, room scenes, gallery walls, shop the room, before and after, artists, testimonials, customer photos, trust rows, marquees, journal posts and recently viewed products.</p>
          <p>Product sections include the print and general product layouts, Complete the look, Make it a pair, What fits, product recommendations and pickup availability. Collection pages include headers, subcollection navigation, sets, filtered grids and editorial layouts.</p>
          <p>The header supports nested menus, a desktop mega menu, a phone drawer and predictive search. The signup popup starts its delay only after the shopper interacts with the page. Deckle&apos;s cookie consent section is optional and hidden by default, so use Shopify&apos;s own customer privacy banner unless you deliberately enable the theme section.</p>

          <h2 id="rooms">Room photos and sets</h2>
          <p>Several sections draw a print on a photograph or pin products to it. Each one uses percentages for position: across runs from 0 at the left edge to 100 at the right, and down from 0 at the top to 100 at the bottom.</p>
          <ul>
            <li><strong>Quick view room photo</strong> (Theme settings, Quick view): a wall the print hangs on, shown as the first picture in the gallery layout. Set <em>Wall shown</em> to how many centimeters of wall the photo covers from top to bottom; that sets the print&apos;s scale. <em>Hangs at, across</em> and <em>Hangs at, down</em> place the print, and the crop point keeps the right part of the photo in view.</li>
            <li><strong>Room scene:</strong> each scene is a photo with the edition already hanging in it. Pick the product, then place its marker, with separate positions for phones.</li>
            <li><strong>Shop the room:</strong> add a Piece block for each product in the photo and place its marker.</li>
            <li><strong>Complete the look sets:</strong> each set lists its prints in hanging order, one size per print in the same order (for example <code>50, 40, 40, 50</code>), and the frame option value the set is sold in.</li>
          </ul>

          <h2 id="trade">Trade order and gallery wall</h2>
          <p>The trade page (page.trade) lists every product in the chosen collection as a row with its options and a quantity, so a buyer can order many prints at once. Leave the collection empty to list the whole catalog. Options named under <em>Options kept at their first value</em>, such as Paper, are hidden and ordered at their first value. Add a Trade tier block for each discount level.</p>
          <p>The gallery wall page (page.wall) lets shoppers hang prints on an empty wall. Use a photo of a wall taken square on, set <em>Width of the wall in the photo</em> in centimeters so prints are drawn to scale, and set the center point of the set. Frame blocks limit which frames the wall offers; with none, it offers every framed option. Set break-in blocks add ready-made arrangements: Salon takes 4 prints, Row 3 and Pair 2.</p>
          <p><strong>Discounts are not applied by the theme.</strong> The set savings in Complete the look, Shop the room and the gallery wall, and the trade tiers, are only shown on the page. Create a matching automatic discount under Discounts in Shopify admin so the cart and checkout charge the same price.</p>

          <h2 id="artists">Artist pages</h2>
          <p>Artist pages use a metaobject definition with the type <code>deckle_artist</code>. Create it under Settings, Custom data, Metaobjects, turn on its web pages, and assign the metaobject/deckle_artist template. Only <code>name</code> is required. Without an entry, artist links fall back to the vendor&apos;s product list.</p>
          <Table headers={["Field key", "Type", "Shows"]} rows={[
            ["name", "Single line text", "The artist's name (required)"],
            ["vendor", "Single line text", "The vendor name on their products, if it differs from the name"],
            ["region, life_dates", "Single line text", "Region and dates under the name"],
            ["intro, bio", "Multi-line text", "Opening line and biography"],
            ["portrait, portrait_mobile", "File", "Portrait, with an optional phone crop"],
            ["medium, medium_note, medium_note_short", "Single line text", "The medium and a note about it"],
            ["works", "Collection", "The artist's editions; without it, every product whose vendor is the artist"],
            ["start_product, start_note, start_sheet", "Product, multi-line text, single line text", "The edition to start with, a note and its sheet size"],
            ["timeline_eyebrow, timeline_heading", "Single line text", "The timeline's heading"],
            ["related", "List of single line text", "Other makers to show at the foot of the page"],
          ]} />
          <p>The timeline places each edition by a four-digit year in its <code>deckle.work_date</code> field. The Artist of the month card in the header and on the artists page takes a name, which is matched against your product vendors.</p>

          <h2 id="filters">Filters</h2>
          <p>Collection and search pages show the filters your store offers. Shopify includes availability, price, product type and vendor. To filter by a product option or a metafield, such as orientation or color, add it with Shopify&apos;s Search &amp; Discovery app; the theme shows it without further setup.</p>

          <h2 id="images">Image sizes</h2>
          <Table headers={["Where", "Size"]} rows={[
            ["Hero slide", "2880 x 1200 or larger, left third kept quiet for the text; phone image 390 x 420"],
            ["Room scene", "2752 x 1280 or larger; phone crop 358 x 440"],
            ["Complete the look set", "1612 x 1248 or larger; phone crop 684 x 342"],
          ]} />
          <p>Every phone image is optional. Without one, the main image is cropped to fit.</p>

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
            ["custom.short_name", "Product", "Short name in the Complete the look heading and bundle title"],
            ["custom.card_note, custom.card_detail", "Product", "Extra card, search and cart details"],
            ["custom.size_detail", "Variant", "Size details in cart lines"],
            ["custom.menu_color, custom.menu_detail", "Collection", "Color chip and detail in menus"],
          ]} />
          <p>Artist pages use the <code>deckle_artist</code> metaobject described above. Ratings come from a reviews app through Shopify&apos;s standard rating fields.</p>

          <h2 id="cart">Cart, checkout and payments</h2>
          <p>The cart drawer and cart page share the same settings. They show line discounts, subscription names, unit prices, tax wording and product options. Discount codes are entered at checkout.</p>
          <p>To offer gift wrapping, create a product with a single variant priced at your wrapping fee and choose it under Theme settings, Cart, Gift wrapping product. Shoppers add or remove it with one tick. Products tagged <code>made-to-order</code> show when they ship, counted in working days from the Cart settings.</p>
          <p>Products with selling plans from a subscription or pre-order app show a purchase option picker with each plan&apos;s price. A one-time purchase is offered too, unless the product requires a plan.</p>
          <p>Shop Pay Installments, accelerated checkout buttons and the footer&apos;s Follow on Shop button appear after Shopify Payments and Shop Pay are enabled. Turn Follow on Shop on or off in the Footer section. Pickup availability appears when local pickup is enabled for a location with a street address.</p>

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
