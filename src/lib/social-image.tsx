import { ImageResponse } from "next/og";

type SocialImageOptions = {
  brand: string;
  eyebrow: string;
  headline: string;
  description: string;
  background: string;
  accent: string;
  muted: string;
};

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

export function createSocialImage({
  brand,
  eyebrow,
  headline,
  description,
  background,
  accent,
  muted,
}: SocialImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 78px",
          background,
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `4px solid ${accent}`,
              borderRadius: 22,
              color: accent,
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            O
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>{brand}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              color: accent,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              maxWidth: 930,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            {headline}
          </div>
          <div style={{ maxWidth: 900, color: muted, fontSize: 27, lineHeight: 1.4 }}>
            {description}
          </div>
        </div>
        <div style={{ color: muted, fontSize: 21 }}>obarito.com</div>
      </div>
    ),
    socialImageSize,
  );
}
