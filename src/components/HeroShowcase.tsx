import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Icon } from './Icon';
import { CalendarMockup } from './mockups/CalendarMockup';
import { InboxMockup } from './mockups/InboxMockup';
import { PaymentsMockup } from './mockups/PaymentsMockup';
import { GlobeMockup } from './mockups/GlobeMockup';
import { AppShellMockup } from './mockups/AppShellMockup';

type Tab = {
  id: 'calendar' | 'payments' | 'inbox' | 'global';
  label: string;
  icon: Parameters<typeof Icon>[0]['name'];
  hint: string;
};

const tabs: Tab[] = [
  { id: 'calendar', label: 'Calendar', icon: 'calendar', hint: 'Schedule classes & sessions' },
  { id: 'payments', label: 'Payments', icon: 'card', hint: 'Subscriptions on autopilot' },
  { id: 'inbox', label: 'Inbox', icon: 'inbox', hint: 'Six channels, one thread' },
  { id: 'global', label: 'Global', icon: 'globe', hint: '135+ currencies, 35+ languages' },
];

const CYCLE_MS = 6000;

export function HeroShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % tabs.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  const active = tabs[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tab bar */}
      <div className="mx-auto mb-6 flex max-w-3xl flex-wrap items-center justify-center gap-2">
        {tabs.map((t, i) => {
          const isActive = i === index;
          return (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              className={`group relative flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'border-white/20 bg-white/5 text-white'
                  : 'border-white/8 bg-transparent text-ink-muted hover:text-white'
              }`}
            >
              <Icon name={t.icon} size={14} />
              {t.label}
              {isActive && !paused && !reduce && (
                <motion.span
                  key={`progress-${index}`}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: CYCLE_MS / 1000, ease: 'linear' }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF5A1F] via-[#A855F7] to-[#00E5FF]"
                />
              )}
            </button>
          );
        })}
      </div>

      <p className="mb-5 text-center text-sm text-ink-subtle">{active.hint}</p>

      <div className="relative">
        {/* Soft contained accent behind active surface — color rotates with tab */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-20 -inset-y-10 -z-10 transition-colors duration-700"
          style={{
            background: `radial-gradient(ellipse 55% 55% at 50% 50%, ${
              active.id === 'calendar'
                ? 'rgba(168,85,247,0.25)'
                : active.id === 'payments'
                ? 'rgba(34,245,143,0.22)'
                : active.id === 'inbox'
                ? 'rgba(255,77,127,0.22)'
                : 'rgba(0,229,255,0.22)'
            }, transparent 70%)`,
          }}
        />

        {/* Browser-chrome style frame */}
        <div className="relative rounded-[28px] border border-white/15 bg-black p-2 shadow-[0_60px_180px_-40px_rgba(168,85,247,0.45)]">
          {/* Tiny window chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5A57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 hidden text-[10px] text-ink-subtle md:inline">
              app.nullspace.cloud / {active.label.toLowerCase()}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.99 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
            >
              {active.id === 'calendar' && (
                <AppShellMockup>
                  <CalendarMockup />
                </AppShellMockup>
              )}
              {active.id === 'inbox' && <InboxMockup />}
              {active.id === 'payments' && <PaymentsMockup />}
              {active.id === 'global' && <GlobeMockup />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating decoration badges */}
        <FloatingBadge
          color="#D6FF3D"
          text="€12,480 collected"
          top="8%"
          left="-3%"
          delay={0.5}
        />
        <FloatingBadge
          color="#FF5A1F"
          text="+18 new clients"
          top="60%"
          right="-2%"
          delay={0.9}
        />
        <FloatingBadge
          color="#00E5FF"
          text="3 channels live"
          bottom="-3%"
          left="38%"
          delay={1.2}
          variant="dark"
        />
      </div>
    </div>
  );
}

function FloatingBadge({
  color,
  text,
  top,
  bottom,
  left,
  right,
  delay,
  variant = 'light',
}: {
  color: string;
  text: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: number;
  variant?: 'light' | 'dark';
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 18, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="pointer-events-none absolute z-10 hidden md:block"
      style={{ top, bottom, left, right }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold shadow-2xl ${
          variant === 'dark' ? 'bg-black text-white ring-1 ring-white/15' : ''
        }`}
        style={
          variant === 'light'
            ? { backgroundColor: color, color: color === '#00E5FF' || color === '#D6FF3D' ? '#000' : '#fff' }
            : undefined
        }
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: variant === 'dark' ? color : '#000',
            opacity: variant === 'dark' ? 1 : 0.5,
          }}
        />
        {text}
      </motion.div>
    </motion.div>
  );
}