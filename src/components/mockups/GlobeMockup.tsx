import { motion } from 'framer-motion';

const tags = [
  { label: '🇳🇱 EUR', x: '12%', y: '28%' },
  { label: '🇬🇧 GBP', x: '6%', y: '60%' },
  { label: '🇺🇸 USD', x: '78%', y: '24%' },
  { label: '🇯🇵 JPY', x: '82%', y: '60%' },
  { label: '🇧🇷 BRL', x: '20%', y: '78%' },
  { label: '🇮🇳 INR', x: '64%', y: '76%' },
];

const langs = ['Hello', 'Hola', 'Bonjour', 'こんにちは', 'Hallo', 'Olá', 'مرحبا', '你好'];

export function GlobeMockup() {
  return (
    <div className="card ring-soft relative h-[360px] w-full overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 grid-bg opacity-50"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.25), transparent 60%)',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="relative h-64 w-64"
        >
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <defs>
              <radialGradient id="globe-fill" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#1C1D22" />
                <stop offset="100%" stopColor="#000000" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="92" fill="url(#globe-fill)" stroke="#2A2B33" />
            {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((y) => (
              <line
                key={y}
                x1="8"
                y1={y}
                x2="192"
                y2={y}
                stroke="#2A2B33"
                strokeWidth="0.5"
              />
            ))}
            {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((x) => (
              <path
                key={x}
                d={`M${x},8 Q100,100 ${x},192`}
                stroke="#2A2B33"
                strokeWidth="0.5"
                fill="none"
              />
            ))}
            <circle cx="60" cy="70" r="3" fill="#8B5CF6">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="140" cy="80" r="3" fill="#22D3EE">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="90" cy="130" r="3" fill="#34D399">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
        </motion.div>
      </div>

      {tags.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
          className="absolute"
          style={{ left: t.x, top: t.y }}
        >
          <span className="rounded-full border border-surface-borderStrong bg-surface-card/95 px-2 py-1 text-[11px] font-medium text-white backdrop-blur">
            {t.label}
          </span>
        </motion.div>
      ))}

      <div className="absolute bottom-3 left-3 right-3">
        <div className="flex flex-wrap gap-1.5">
          {langs.map((l, i) => (
            <motion.span
              key={l}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.05 }}
              className="rounded-md border border-surface-border bg-surface-card/90 px-2 py-0.5 text-[10px] text-ink-muted backdrop-blur"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}