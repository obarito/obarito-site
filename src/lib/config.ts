/**
 * Site-wide constants. Update these in one place.
 *
 * APPSTORE_URL  - Rewindly's Shopify App Store listing; every "Add to Shopify" /
 *                 install CTA points here.
 * SUPPORT_EMAIL - the one inbox that exists. Support, privacy and data requests
 *                 all land here, so the legal pages point at it too. Give privacy
 *                 its own constant again only once a privacy@ mailbox is real.
 * LEGAL_EMAIL   - inbox for legal/terms questions.
 */
export const APPSTORE_URL = "https://apps.shopify.com/rewindly-product-watchdog";

/**
 * ATTESTA_APPSTORE_URL - the target for every install CTA on /attesta. It is an
 * in-page anchor while the listing is being prepared, so no button leads
 * anywhere dead. Swap in the apps.shopify.com URL once the listing is published
 * and every CTA on the page turns into a real install link; nothing else changes.
 */
export const ATTESTA_APPSTORE_URL = "#pricing";

export const SUPPORT_EMAIL = "support@obarito.com";
export const LEGAL_EMAIL = "legal@obarito.com";

export const SITE_NAME = "Obarito";
export const SITE_DESCRIPTION =
  "Obarito is a small studio building focused, dependable apps that protect and improve Shopify stores.";
