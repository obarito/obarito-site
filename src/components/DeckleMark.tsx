import type { SVGProps } from "react";

type DeckleMarkProps = SVGProps<SVGSVGElement>;

const deckleGlyphPath = "M25 20 L47 20C47.7 20.1 49.6 20.3 51 20.4C52.3 20.6 53.6 20.7 54.9 21.1C56.2 21.5 57.3 22.1 58.6 22.7C59.8 23.2 60.9 23.8 62.2 24.4C63.4 24.9 64.9 25.2 66.1 26C67.2 26.7 68.3 27.7 69.1 28.8C70 29.9 70.6 31.2 71.1 32.5C71.7 33.8 72.1 35.1 72.4 36.4C72.7 37.7 72.6 39.1 72.9 40.4C73.1 41.7 73.5 42.9 73.9 44.1C74.2 45.4 74.7 46.7 74.7 48C74.7 49.3 74.2 50.6 73.9 51.9C73.5 53.1 73.1 54.3 72.9 55.6C72.6 56.9 72.7 58.3 72.4 59.6C72.1 60.9 71.7 62.2 71.1 63.5C70.6 64.8 70 66.1 69.1 67.2C68.3 68.3 67.2 69.3 66.1 70C64.9 70.8 63.4 71.1 62.2 71.6C60.9 72.2 59.8 72.8 58.6 73.3C57.3 73.9 56.2 74.5 54.9 74.9C53.6 75.3 52.3 75.4 51 75.6C49.6 75.7 47.7 75.9 47 76H25Z";

export function DeckleGlyph({ className, ...props }: DeckleMarkProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...props}>
      <path fill="currentColor" d={deckleGlyphPath} />
    </svg>
  );
}

export default function DeckleMark({ className, ...props }: DeckleMarkProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        fill="currentColor"
        d={`M0 0 H100 V100 H0 Z ${deckleGlyphPath}`}
      />
    </svg>
  );
}
