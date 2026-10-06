import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "Rewindly, a watchdog for your Shopify catalog";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return createSocialImage({
    brand: "Rewindly",
    eyebrow: "Shopify catalog watchdog",
    headline: "Know the moment your catalog changes.",
    description: "Review suspicious edits and restore earlier product versions in one click.",
    background: "#142844",
    accent: "#E9A23A",
    muted: "#BBC9DD",
  });
}
