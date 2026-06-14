import sharp from "sharp";

const SRC = "/var/www/html/obarito-site/brand/app-icon.svg";
const svg = await import("node:fs").then((fs) => fs.readFileSync(SRC));

// 64-unit viewBox -> render at high density so the upscale is crisp, not blurry.
const sizes = [1024, 512];
for (const size of sizes) {
  const density = Math.round(72 * (size / 64));
  const out = `/var/www/html/obarito-site/brand/app-icon-${size}.png`;
  await sharp(svg, { density })
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(out);
  console.log(`wrote ${out}`);
}
