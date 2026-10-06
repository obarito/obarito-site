import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "Attesta, German e-invoicing for Shopify";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return createSocialImage({
    brand: "Attesta",
    eyebrow: "German e-invoicing for Shopify",
    headline: "Every paid order becomes a structured e-invoice.",
    description: "ZUGFeRD 2.2, EN 16931, VIES, DATEV, and a tamper-evident GoBD archive.",
    background: "#0B3729",
    accent: "#34D399",
    muted: "#B4D3C8",
  });
}

