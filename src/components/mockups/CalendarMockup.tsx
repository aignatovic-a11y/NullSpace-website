import { motion } from 'framer-motion';
import { Icon } from '../Icon';

type Event = {
  day: number;
  start: number;
  duration: number;
  title: string;
  time: string;
  place: string;
  color: 'orange' | 'lime' | 'electric' | 'amber' | 'rose' | 'cyan';
};

const events: Event[] = [
  { day: 0, start: 15.3, duration: 1, title: 'Piano Workshop', time: '15:20 — 16:20', place: 'Vilnius, Cathedral Sq.', color: 'orange' },
  { day: 1, start: 17, duration: 1.16, title: 'Photography Tutorial', time: '17:00 — 18:10', place: '75001 Paris, France', color: 'rose' },
  { day: 1, start: 20, duration: 1.5, title: 'Pilates', time: '20:00 — 21:30', place: 'Amsterdam Sportcentrum', color: 'lime' },
  { day: 2, start: 18.6, duration: 3.6, title: 'Drawing Lesson', time: '18:40 — 22:10', place: 'Via della Dataria', color: 'amber' },
  { day: 3, start: 16.16, duration: 1, title: 'Tech Lecture', time: '16:10 — 17:10', place: 'Tyršova 1841/8, Praha', color: 'electric' },
  { day: 3, start: 18.5, duration: 1, title: 'Tech Lecture', time: '18:30 — 19:30', place: 'Tyršova 1841/8, Praha', color: 'electric' },
  { day: 4, start: 21.66, duration: 1, title: 'Piano Workshop', time: '21:40 — 22:40', place: 'Vilnius, Cathedral Sq.', color: 'orange' },
  { day: 5, start: 16.16, duration: 1.66, title: 'Pilates', time: '16:10 — 17:50', place: 'Amsterdam Sportcentrum', color: 'lime' },
  { day: 6, start: 17, duration: 1.5, title: 'Yoga Flow', time: '17:00 — 18:30', place: 'Studio NLP', color: 'cyan' },
];

const days = [
  { label: 'Mon', num: 10 },
  { label: 'Tue', num: 11 },
  { label: 'Wed', num: 12 },
  { label: 'Thu', num: 13 },
  { label: 'Fri', num: 14 },
  { label: 'Sat', num: 15 },
  { label: 'Sun', num: 16 },
];

const hours = [15, 16, 17, 18, 19, 20, 21, 22];

const colorMap: Record<
  Event['color'],
  { bg: string; bar: string; text: string; sub: string }
> = {
  orange: {
    bg: 'bg-[#FF5A1F]',
    bar: 'bg-black/30',
    text: 'text-black',
    sub: 'text-black/70',
  },
  lime: {
    bg: 'bg-[#D6FF3D]',
    bar: 'bg-black/30',
    text: 'text-black',
    sub: 'text-black/70',
  },
  electric: {
    bg: 'bg-[#3D5AFE]',
    bar: 'bg-white/30',
    text: 'text-white',
    sub: 'text-white/75',
  },
  amber: {
    bg: 'bg-[#FFB319]',
    bar: 'bg-black/30',
    text: 'text-black',
    sub: 'text-black/70',
  },
  rose: {
    bg: 'bg-[#FF3D7F]',
    bar: 'bg-white/30',
    text: 'text-white',
    sub: 'text-white/80',
  },
  cyan: {
    bg: 'bg-[#00E5FF]',
    bar: 'bg-black/30',
    text: 'text-black',
    sub: 'text-black/70',
  },
};

const ROW_H = 52;

export function CalendarMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black ring-soft">
      <div className="flex items-center justify-between border-b border-white/10 bg-black px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-col items-center justify-center rounded-md bg-[#A855F7] text-white">
            <span className="text-[9px] font-bold leading-none">NOV</span>
            <span className="text-sm font-bold leading-tight">15</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">November 2025</p>
            <p className="text-[11px] text-ink-subtle">10 Nov — 16 Nov 2025</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-white/10 px-1 py-0.5 sm:flex">
            <button className="rounded-full p-1 text-ink-muted hover:bg-white/5">
              <Icon name="arrow-right" size={14} className="rotate-180" />
            </button>
            <span className="px-2 text-xs text-white">Today</span>
            <button className="rounded-full p-1 text-ink-muted hover:bg-white/5">
              <Icon name="arrow-right" size={14} />
            </button>
          </div>
          <span className="hidden rounded-full border border-white/10 px-3 py-1 text-xs text-white sm:inline">
            Week
          </span>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-[#A855F7] px-3 py-1.5 text-xs font-semibold text-white">
            <Icon name="plus" size={12} />
            New class
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[44px_repeat(7,minmax(0,1fr))] border-b border-white/10 text-[11px] text-ink-subtle">
        <div />
        {days.map((d, i) => (
          <div
            key={d.label}
            className={`flex items-center justify-center gap-1.5 border-l border-white/8 px-2 py-3 ${
              i === 5 ? 'text-white' : ''
            }`}
          >
            <span className="uppercase tracking-wider">{d.label}</span>
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold ${
                i === 5 ? 'bg-white text-black' : 'text-ink-muted'
              }`}
            >
              {d.num}
            </span>
          </div>
        ))}
      </div>

      <div className="relative grid grid-cols-[44px_repeat(7,minmax(0,1fr))]">
        <div>
          {hours.map((h) => (
            <div
              key={h}
              style={{ height: ROW_H }}
              className="flex items-start justify-end border-t border-white/8 pr-2 pt-1 text-[10px] text-ink-subtle"
            >
              {h.toString().padStart(2, '0')}:00
            </div>
          ))}
        </div>

        {days.map((_, dayIdx) => (
          <div key={dayIdx} className="relative border-l border-white/8">
            {hours.map((h) => (
              <div
                key={h}
                style={{ height: ROW_H }}
                className="border-t border-white/8"
              />
            ))}
            {events
              .filter((e) => e.day === dayIdx)
              .map((e, idx) => {
                const top = (e.start - 15) * ROW_H;
                const height = e.duration * ROW_H - 6;
                const c = colorMap[e.color];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + idx * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className={`absolute left-1 right-1 overflow-hidden rounded-lg ${c.bg} px-2.5 py-2`}
                    style={{ top, height }}
                  >
                    <div className={`mb-1 h-0.5 w-6 rounded-full ${c.bar}`} />
                    <p className={`truncate text-[12px] font-bold leading-tight ${c.text}`}>
                      {e.title}
                    </p>
                    <p className={`mt-0.5 truncate text-[10px] font-medium ${c.sub}`}>
                      {e.time}
                    </p>
                    {height > 80 && (
                      <p className={`mt-0.5 truncate text-[10px] ${c.sub}`}>
                        {e.place}
                      </p>
                    )}
                  </motion.div>
                );
              })}
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute right-3 top-2 z-10 w-60 rounded-2xl border border-white/15 bg-black p-3.5 shadow-2xl shadow-black/80"
        >
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded bg-[#D6FF3D]" />
            <p className="text-sm font-semibold text-white">Pilates</p>
          </div>
          <p className="mt-2 text-[11px] text-ink-muted">Saturday, 15 Nov 2025</p>
          <p className="text-[11px] text-ink-muted">16:10 — 17:50</p>
          <p className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#A855F7]/20 px-2 py-0.5 text-[10px] font-medium text-[#A855F7]">
            <Icon name="sparkles" size={10} /> Repeats every 4 days
          </p>
          <div className="mt-3 border-t border-white/10 pt-2.5">
            <div className="flex items-start gap-1.5 text-[11px] text-ink-muted">
              <Icon name="pin" size={12} className="mt-0.5 shrink-0 text-ink-subtle" />
              <div>
                <p className="font-semibold text-white">Amsterdam Sportcentrum</p>
                <p className="text-[10px] text-ink-subtle">Lizzy Ansinghstraat 88</p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button className="flex-1 rounded-md border border-[#FF3D7F]/40 bg-[#FF3D7F]/10 px-2 py-1.5 text-[10px] font-semibold text-[#FF3D7F]">
              Cancel
            </button>
            <button className="flex-1 rounded-md bg-white px-2 py-1.5 text-[10px] font-semibold text-black">
              See more
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}