import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "Obarito, a Shopify product studio";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return createSocialImage({
    brand: "obarito",
    eyebrow: "Shopify product studio",
    headline: "Apps and themes made for better Shopify stores.",
    description: "Focused software and considered storefronts from a small independent studio.",
    background: "#0B0F17",
    accent: "#3B82F6",
    muted: "#A8B5C7",
  });
}
