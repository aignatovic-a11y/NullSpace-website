import type { ReactNode } from 'react';

type Props = {
  items: ReactNode[];
  speed?: number;
};

export function Marquee({ items, speed = 40 }: Props) {
  const list = [...items, ...items];
  return (
    <div className="group relative w-full overflow-hidden mask-fade-r [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
      <div
        className="flex w-max gap-10 animate-[scroll_var(--d)_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ ['--d' as any]: `${speed}s` }}
      >
        {list.map((node, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {node}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}