import { Link } from 'react-router-dom';

type Props = {
  /** Vertical height of the logo in px. Width scales from the SVG aspect ratio. */
  height?: number;
  /** When false, renders just the wordmark (no logomark). */
  withMark?: boolean;
  asLink?: boolean;
  className?: string;
};

// Aspect ratios from the source SVGs (viewBox dims)
const LOCKUP_RATIO = 476 / 83; // ≈ 5.735
const WORDMARK_RATIO = 473 / 98; // ≈ 4.827

export function Logo({
  height = 28,
  withMark = true,
  asLink = true,
  className = '',
}: Props) {
  const src = withMark ? '/brand/logo-lockup.png' : '/brand/wordmark.png';
  const ratio = withMark ? LOCKUP_RATIO : WORDMARK_RATIO;
  const width = Math.round(height * ratio);

  const inner = (
    <img
      src={src}
      alt="NullSpace"
      width={width}
      height={height}
      draggable={false}
      className={`block h-auto select-none transition-transform duration-300 group-hover:scale-[1.02] ${className}`}
      style={{ height, width: 'auto' }}
    />
  );

  if (!asLink) return <span className="group inline-flex items-center">{inner}</span>;

  return (
    <Link to="/" aria-label="NullSpace home" className="group inline-flex items-center text-white">
      {inner}
    </Link>
  );
}