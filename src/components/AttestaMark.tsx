type AttestaMarkProps = {
  className?: string;
  /** The threaded sheet. Mint by default; pass a colour for light backgrounds. */
  barColor?: string;
};

/**
 * The Attesta mark: one continuous wire bent into an A, with a sheet threaded
 * through it the way paper sits in a clip - over the inner arm, under the outer
 * one. The wire is currentColor so the mark works on the brand green or on white;
 * the sheet keeps the mint accent.
 *
 * The viewBox crops the glyph out of its 232px master box, so no transform is
 * needed and the stroke weights stay in master units.
 */
const WIRE =
  "M73.3333 141.6L107.147 80.8002C108.025 79.2228 109.309 77.9087 110.865 76.9939C112.422 76.079 " +
  "114.195 75.5967 116 75.5967C117.805 75.5967 119.578 76.079 121.135 76.9939C122.691 77.9087 " +
  "123.975 79.2228 124.853 80.8002L158.667 141.6C159.518 143.131 160.059 144.814 160.259 146.553C160.46 " +
  "148.293 160.316 150.054 159.836 151.738C159.355 153.422 158.548 154.995 157.46 156.367C156.371 " +
  "157.739 155.024 158.883 153.493 159.734C151.963 160.585 150.28 161.126 148.541 161.326C146.801 " +
  "161.527 145.039 161.383 143.355 160.902C141.671 160.422 140.099 159.615 138.727 158.526C137.355 " +
  "157.438 136.211 156.091 135.36 154.56";

/** The full clip, including the inner arm that dives under the sheet. */
const CLIP = `${WIRE}L110.4 109.6`;
const SHEET = "M82.9333 124.533H149.067";

/** Glyph centre and height in the 232px master box, for placing it by hand. */
const GLYPH_CX = 116.96;
const GLYPH_CY = 118.57;
const GLYPH_H = 97.67;

type AttestaGlyphProps = {
  /** Centre of the glyph, in the coordinates of the SVG you are placing it in. */
  x: number;
  y: number;
  /** Rendered height in those same units. */
  size: number;
  color?: string;
  barColor?: string;
};

/**
 * The same glyph as a bare <g>, for dropping into an SVG that already exists
 * (the orbit diagram on the home page). Positioned by its centre so it lands on
 * a node without arithmetic at the call site.
 */
export function AttestaGlyph({
  x,
  y,
  size,
  color = "#fff",
  barColor = "#34D399",
}: AttestaGlyphProps) {
  const k = size / GLYPH_H;
  return (
    <g
      transform={`translate(${x} ${y}) scale(${k}) translate(${-GLYPH_CX} ${-GLYPH_CY})`}
    >
      <path
        d={CLIP}
        stroke={color}
        strokeWidth="11.73"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d={SHEET} stroke={barColor} strokeWidth="11.73" fill="none" />
      <path
        d={WIRE}
        stroke={color}
        strokeWidth="11.73"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  );
}

export default function AttestaMark({
  className,
  barColor = "#34D399",
}: AttestaMarkProps) {
  return (
    <svg viewBox="66 68 102 102" className={className} aria-hidden="true">
      <path
        d={CLIP}
        stroke="currentColor"
        strokeWidth="11.73"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d={SHEET} stroke={barColor} strokeWidth="11.73" fill="none" />
      <path
        d={WIRE}
        stroke="currentColor"
        strokeWidth="11.73"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
