import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "Obarito, a Shopify app studio";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return createSocialImage({
    brand: "obarito",
    eyebrow: "Shopify app studio",
    headline: "Tools that protect and improve Shopify stores.",
    description: "Focused, dependable apps built by a small independent studio.",
    background: "#0B0F17",
    accent: "#3B82F6",
    muted: "#A8B5C7",
  });
}
