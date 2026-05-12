import { motion } from 'framer-motion';
import { Icon } from '../Icon';

const rows = [
  { name: 'Pilates — Monthly', amount: '€45.00', status: 'Paid', tone: 'emerald', when: 'Nov 12' },
  { name: 'Drawing Lesson', amount: '€28.00', status: 'Paid', tone: 'emerald', when: 'Nov 11' },
  { name: 'Piano Workshop', amount: '€60.00', status: 'Scheduled', tone: 'violet', when: 'Nov 14' },
  { name: 'Tech Lecture', amount: '€18.00', status: 'Retrying', tone: 'amber', when: 'Nov 09' },
];

const toneMap: Record<string, string> = {
  emerald: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
  violet: 'bg-violet-500/15 text-violet-300 border-violet-400/30',
  amber: 'bg-amber-500/15 text-amber-300 border-amber-400/30',
};

export function PaymentsMockup() {
  return (
    <div className="card ring-soft w-full overflow-hidden">
      <div className="flex items-center justify-between border-b border-surface-border bg-surface-raised px-4 py-3">
        <div className="flex items-center gap-2">
          <Icon name="card" size={16} className="text-brand-emerald" />
          <span className="text-sm font-medium text-white">Revenue · this month</span>
        </div>
        <span className="text-xs text-ink-subtle">Powered by Stripe</span>
      </div>

      <div className="grid grid-cols-3 gap-px bg-surface-border">
        {[
          { label: 'Collected', value: '€12,480', delta: '+18.4%', tone: 'text-emerald-300' },
          { label: 'Recurring', value: '€8,210', delta: '+6.1%', tone: 'text-violet-300' },
          { label: 'Outstanding', value: '€340', delta: '−12%', tone: 'text-amber-300' },
        ].map((s) => (
          <div key={s.label} className="bg-surface-card p-4">
            <p className="text-[10px] uppercase tracking-wider text-ink-subtle">{s.label}</p>
            <p className="mt-1 text-xl font-semibold text-white">{s.value}</p>
            <p className={`text-[11px] ${s.tone}`}>{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="relative h-24 border-y border-surface-border bg-surface-card p-4">
        <svg viewBox="0 0 320 80" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rev-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            d="M0,55 L25,52 L50,48 L75,50 L100,42 L125,38 L150,40 L175,30 L200,28 L225,20 L250,22 L275,14 L300,12 L320,8"
            fill="none"
            stroke="#34D399"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            d="M0,55 L25,52 L50,48 L75,50 L100,42 L125,38 L150,40 L175,30 L200,28 L225,20 L250,22 L275,14 L300,12 L320,8 L320,80 L0,80 Z"
            fill="url(#rev-area)"
          />
        </svg>
      </div>

      <div>
        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="flex items-center justify-between border-b border-surface-border px-4 py-2.5 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-surface-raised text-ink-muted">
                <Icon name="card" size={13} />
              </span>
              <div>
                <p className="text-xs font-medium text-white">{r.name}</p>
                <p className="text-[10px] text-ink-subtle">{r.when}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-white">{r.amount}</span>
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] ${toneMap[r.tone]}`}
              >
                {r.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}