type Props = {
  intensity?: 'soft' | 'strong';
  variant?: 'violet' | 'electric' | 'mono';
};

// Pure-black aware: a single, well-contained accent at the top of a hero section.
// No multi-color washes; the rest of the page stays black.
export function AuroraBackground({ intensity = 'soft', variant = 'violet' }: Props) {
  if (variant === 'mono') {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.35] mask-fade-b" />
      </div>
    );
  }

  const color = variant === 'electric' ? '#3D5AFE' : '#A855F7';
  const opacity = intensity === 'strong' ? 0.85 : 0.5;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-64 left-1/2 h-[820px] w-[1100px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background: `radial-gradient(closest-side, ${color}, transparent 70%)`,
          opacity,
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-[0.35] mask-fade-b" />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}E6, transparent)`,
        }}
      />
    </div>
  );
}