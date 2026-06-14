type ObaritoMarkProps = {
  /** Ring color. Defaults to currentColor so it inherits text color. */
  className?: string;
  /** Color of the orbiting node. */
  nodeColor?: string;
};

/**
 * The Obarito mark: an "O" built as an orbital ring with a single orbiting node.
 * Ring uses currentColor; size + color are controlled via className on the svg.
 */
export default function ObaritoMark({
  className,
  nodeColor = "#2563EB",
}: ObaritoMarkProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <circle
        cx="48"
        cy="48"
        r="31"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
      />
      <circle cx="75.6" cy="20.4" r="4.8" fill={nodeColor} />
    </svg>
  );
}
