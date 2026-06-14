type RewindlyMarkProps = {
  className?: string;
};

/**
 * The Rewindly mark: three stacked layers (a stack of catalog versions),
 * rendered in currentColor so it can sit on navy or light chips.
 */
export default function RewindlyMark({ className }: RewindlyMarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="5.5" y="5" width="13" height="3.2" rx="1.6" fill="currentColor" opacity="0.45" />
      <rect x="5.5" y="10.4" width="13" height="3.2" rx="1.6" fill="currentColor" opacity="0.72" />
      <rect x="5.5" y="15.8" width="13" height="3.2" rx="1.6" fill="currentColor" />
    </svg>
  );
}
