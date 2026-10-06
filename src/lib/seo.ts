import type { Metadata } from "next";
import {
  APPSTORE_URL,
  ATTESTA_APPSTORE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/lib/config";

export const SITE_URL = "https://obarito.com";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  socialTitle?: string;
  absoluteTitle?: boolean;
  locale?: string;
  languages?: Record<string, string>;
};

function socialImageFor(path: string) {
  if (path.startsWith("/en/attesta")) return "/en/attesta/opengraph-image";
  if (path.startsWith("/attesta")) return "/attesta/opengraph-image";
  if (path.startsWith("/rewindly")) return "/rewindly/opengraph-image";
  return "/opengraph-image";
}

export function createPageMetadata({
  title,
  description,
  path,
  socialTitle,
  absoluteTitle = false,
  locale,
  languages,
}: PageMetadataOptions): Metadata {
  const image = socialImageFor(path);
  const fullSocialTitle = socialTitle ?? `${title} · ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path, languages },
    openGraph: {
      title: fullSocialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale,
      images: [{ url: image, width: 1200, height: 630, alt: fullSocialTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullSocialTitle,
      description,
      images: [image],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_DESCRIPTION,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const attestaSoftwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/attesta#software`,
  name: "Attesta",
  description:
    "E-Rechnungen für Shopify mit ZUGFeRD 2.2, EN 16931, VIES, DATEV und GoBD-Archiv.",
  url: `${SITE_URL}/attesta`,
  installUrl: ATTESTA_APPSTORE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Shopify",
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}/#organization` },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    url: ATTESTA_APPSTORE_URL,
  },
};

export const attestaEnglishSoftwareJsonLd = {
  ...attestaSoftwareJsonLd,
  "@id": `${SITE_URL}/en/attesta#software`,
  description:
    "E-invoicing for Shopify with ZUGFeRD 2.2, EN 16931, VIES, DATEV, and a GoBD archive.",
  url: `${SITE_URL}/en/attesta`,
  inLanguage: "en",
};

export const rewindlySoftwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/rewindly#software`,
  name: "Rewindly",
  description:
    "A Shopify catalog watchdog that records product changes, flags suspicious edits, and restores earlier versions.",
  url: `${SITE_URL}/rewindly`,
  installUrl: APPSTORE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Shopify",
  publisher: { "@id": `${SITE_URL}/#organization` },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    url: APPSTORE_URL,
  },
};

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
