import { motion } from 'framer-motion';

type Continent = {
  ellipses: { cx: number; cy: number; rx: number; ry: number }[];
};

// Composite ellipses that roughly trace each continent.
// viewBox is 1000 x 500 (rough equirectangular).
const continents: Continent[] = [
  // North America
  {
    ellipses: [
      { cx: 200, cy: 100, rx: 130, ry: 50 }, // Canada
      { cx: 215, cy: 165, rx: 100, ry: 35 }, // US
      { cx: 255, cy: 215, rx: 30, ry: 22 }, // Mexico / Central America
    ],
  },
  // South America
  {
    ellipses: [
      { cx: 295, cy: 275, rx: 55, ry: 35 }, // North
      { cx: 320, cy: 345, rx: 50, ry: 60 }, // South cone
    ],
  },
  // Europe
  {
    ellipses: [
      { cx: 500, cy: 145, rx: 55, ry: 30 }, // Western
      { cx: 555, cy: 150, rx: 35, ry: 28 }, // Eastern
    ],
  },
  // Africa
  {
    ellipses: [
      { cx: 530, cy: 235, rx: 80, ry: 38 }, // North (Sahara)
      { cx: 545, cy: 295, rx: 60, ry: 45 }, // Central
      { cx: 552, cy: 360, rx: 35, ry: 28 }, // Southern
    ],
  },
  // Asia
  {
    ellipses: [
      { cx: 700, cy: 175, rx: 150, ry: 70 }, // Main
      { cx: 665, cy: 235, rx: 30, ry: 30 }, // India
      { cx: 770, cy: 255, rx: 40, ry: 30 }, // Southeast Asia
      { cx: 825, cy: 175, rx: 18, ry: 22 }, // Japan
    ],
  },
  // Australia / Oceania
  {
    ellipses: [
      { cx: 820, cy: 365, rx: 55, ry: 28 },
    ],
  },
];

// Generate dot grid filtered to continents.
const DOTS = (() => {
  const step = 14;
  const out: { x: number; y: number; o: number }[] = [];
  for (let x = 16; x < 1000; x += step) {
    for (let y = 30; y < 470; y += step) {
      for (const c of continents) {
        for (const e of c.ellipses) {
          const dx = (x - e.cx) / e.rx;
          const dy = (y - e.cy) / e.ry;
          const d2 = dx * dx + dy * dy;
          if (d2 < 1) {
            // edge dots dimmer for soft falloff
            out.push({ x, y, o: d2 > 0.7 ? 0.35 : 0.7 });
            break;
          }
        }
      }
    }
  }
  return out;
})();

type Pin = {
  x: number;
  y: number;
  flag: string;
  code: string;
  color: string;
  delay: number;
};

const pins: Pin[] = [
  { x: 220, y: 165, flag: '🇺🇸', code: 'USD', color: '#3D5AFE', delay: 0 },
  { x: 320, y: 330, flag: '🇧🇷', code: 'BRL', color: '#22F58F', delay: 0.4 },
  { x: 488, y: 132, flag: '🇬🇧', code: 'GBP', color: '#A855F7', delay: 0.8 },
  { x: 508, y: 140, flag: '🇳🇱', code: 'EUR', color: '#FFB319', delay: 1.2 },
  { x: 665, y: 232, flag: '🇮🇳', code: 'INR', color: '#FF3D7F', delay: 1.6 },
  { x: 825, y: 175, flag: '🇯🇵', code: 'JPY', color: '#00E5FF', delay: 2.0 },
];

const langs = ['Hello', 'Hola', 'Bonjour', 'こんにちは', 'Hallo', 'Olá', 'مرحبا', '你好'];

export function GlobeMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(168,85,247,0.18), transparent 70%)',
        }}
      />

      <div className="relative px-4 py-6 md:px-6 md:py-8">
        <svg
          viewBox="0 0 1000 500"
          className="block w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Latitude lines */}
          {[125, 250, 375].map((y) => (
            <line
              key={`lat-${y}`}
              x1="0"
              y1={y}
              x2="1000"
              y2={y}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
          ))}
          {/* Longitude lines */}
          {[200, 400, 500, 600, 800].map((x) => (
            <line
              key={`lng-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2="500"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
          ))}

          {/* Equator */}
          <line
            x1="0"
            y1="250"
            x2="1000"
            y2="250"
            stroke="rgba(168,85,247,0.18)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />

          {/* Continent dots */}
          <g>
            {DOTS.map((d, i) => (
              <circle
                key={i}
                cx={d.x}
                cy={d.y}
                r="1.6"
                fill="rgba(255,255,255,0.6)"
                opacity={d.o}
              />
            ))}
          </g>

          {/* Connection arcs between pins (subtle, decorative) */}
          <g stroke="rgba(168,85,247,0.45)" strokeWidth="1" fill="none">
            <motion.path
              d="M 220 165 Q 360 60 508 140"
              strokeDasharray="2 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
            <motion.path
              d="M 508 140 Q 600 180 825 175"
              strokeDasharray="2 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.9 }}
            />
            <motion.path
              d="M 220 165 Q 300 280 320 330"
              strokeDasharray="2 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
            />
            <motion.path
              d="M 508 140 Q 600 230 665 232"
              strokeDasharray="2 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.8 }}
            />
          </g>

          {/* Pins */}
          {pins.map((p, i) => (
            <g key={i} transform={`translate(${p.x},${p.y})`}>
              {/* Pulse ring */}
              <circle r="4" fill={p.color} opacity="0.5">
                <animate
                  attributeName="r"
                  values="4;18;4"
                  dur="2.6s"
                  begin={`${p.delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.55;0;0.55"
                  dur="2.6s"
                  begin={`${p.delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Solid dot */}
              <circle r="4" fill={p.color} stroke="black" strokeWidth="1.5" />
            </g>
          ))}

          {/* Pin labels */}
          {pins.map((p, i) => {
            // Choose label placement to avoid overlap
            const right = p.x > 500;
            const lx = right ? p.x + 12 : p.x - 12;
            const anchor = right ? 'start' : 'end';
            return (
              <motion.g
                key={`label-${i}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + p.delay * 0.3, duration: 0.5 }}
              >
                <rect
                  x={right ? lx : lx - 70}
                  y={p.y - 14}
                  width="70"
                  height="22"
                  rx="11"
                  fill="black"
                  stroke="rgba(255,255,255,0.15)"
                />
                <text
                  x={right ? lx + 8 : lx - 8}
                  y={p.y + 1}
                  textAnchor={anchor}
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  fontFamily="Inter, sans-serif"
                  dominantBaseline="middle"
                >
                  {p.flag} {p.code}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {/* Language strip */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
          {langs.map((l, i) => (
            <motion.span
              key={l}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.05 }}
              className="rounded-md border border-white/10 bg-black px-2.5 py-1 text-[11px] font-medium text-ink-muted"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom stat band */}
      <div className="flex items-center justify-between border-t border-white/10 px-6 py-3 text-[11px] text-ink-subtle">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22F58F] animate-pulse-glow" />
          135+ currencies · 100+ payment methods
        </span>
        <span>35+ languages</span>
      </div>
    </div>
  );
}