import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';
import { VividCard } from '../components/VividCard';
import { AnimatedCounter } from '../components/AnimatedCounter';

const values = [
  {
    variant: 'electric' as const,
    icon: 'lightning' as const,
    title: 'Less, but better.',
    body: 'Most software grows by adding features. We grow by removing friction. Every screen is one we\'d be happy to use ourselves at 11pm.',
  },
  {
    variant: 'lime' as const,
    icon: 'shield' as const,
    title: 'Honest by default.',
    body: 'No hidden fees, no surprise add-ons in the bill, no contracts. The price you see is the price you pay — and you can leave whenever.',
  },
  {
    variant: 'rose' as const,
    icon: 'globe' as const,
    title: 'Local feels global.',
    body: 'Whether your customer is in Amsterdam, Vilnius or São Paulo, NullSpace should feel like it was built for them. That\'s why we ship in 35+ languages.',
  },
  {
    variant: 'amber' as const,
    icon: 'users' as const,
    title: 'For the operators.',
    body: 'We build for the people who actually run the studio, the school, the practice — not the consultants who advise them. Tools, not theatre.',
  },
];

const timeline = [
  {
    year: '2023',
    title: 'A frustrated coach with too many tabs',
    body: 'NullSpace started because no single tool could juggle scheduling, payments and customer chats for a small training business — so we built the one we needed.',
    color: '#A855F7',
  },
  {
    year: '2024',
    title: 'First studios go live',
    body: 'The first dozen SMEs replaced their tangle of tools with a single dashboard. Lessons stayed full, invoices got paid, and Sundays got quieter.',
    color: '#3D5AFE',
  },
  {
    year: '2025',
    title: 'Global from day one',
    body: 'We expanded to 35+ languages and 100+ payment methods so any SME in any market could use NullSpace as their primary operating layer.',
    color: '#D6FF3D',
  },
  {
    year: '2026',
    title: 'The omnichannel inbox',
    body: 'WhatsApp, Instagram, Email and four more channels collapsed into one shared inbox. Customer conversations finally caught up with everything else.',
    color: '#FF5A1F',
  },
];

const stats = [
  { v: 12, suffix: '', l: 'countries served' },
  { v: 8, suffix: '', l: 'industries trusted us' },
  { v: 35, suffix: '+', l: 'languages supported' },
  { v: 99.95, suffix: '%', l: 'uptime, last 12mo', decimals: 2 },
];

export function About() {
  const reduce = useReducedMotion();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-bg opacity-[0.35] mask-fade-b" />
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
          />
        </div>
        <div className="container-wide relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.span
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="chip"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" /> About
            </motion.span>
            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-8 text-display-xl font-bold tracking-tight text-balance gradient-text"
            >
              We build the software
              <br /> small businesses actually deserve.
            </motion.h1>
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 text-lg leading-relaxed text-ink-muted text-balance md:text-xl"
            >
              NullSpace is the operating layer for modern SMEs — a calm,
              all-in-one platform that handles the work behind the work, so the
              people who do the actual work can focus on it.
            </motion.p>
          </div>
        </div>
      </section>

      {/* MISSION — vivid statement card */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-[#A855F7] p-10 text-white md:p-12">
              <div aria-hidden className="absolute inset-0 grid-bg opacity-15 mask-fade-b" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em]">Mission</p>
                <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                  Replace the busywork with one quiet, beautiful system.
                </h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-2">
            <div className="space-y-5 rounded-3xl border border-white/10 bg-black p-10 text-base leading-relaxed text-ink-muted md:p-12 md:text-lg">
              <p>
                The people who run small businesses didn't sign up to chase invoices,
                shuffle calendars, or reply to the same six channels from six
                different apps. They signed up to teach, coach, train, build, create.
              </p>
              <p>
                NullSpace exists so the operational layer of a small business can
                disappear into the background — automated where it should be,
                obvious where it shouldn't, and never in the way of the thing that
                actually pays the bills.
              </p>
              <p className="text-white">Less admin. More of the work you love.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES — vivid bento */}
      <section className="container-wide py-16 md:py-24">
        <SectionHeader
          eyebrow="What we believe"
          title="Four principles. No mission statements."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <VividCard
              key={v.title}
              variant={v.variant}
              size="lg"
              eyebrow={v.title.split('.')[0]}
              title={v.title}
              body={v.body}
              className="min-h-[280px]"
            />
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <Section>
        <SectionHeader eyebrow="How we got here" title="A short story." />
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative space-y-12 border-l border-white/15 pl-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[44px] top-1.5 flex h-4 w-4 items-center justify-center"
                  >
                    <span
                      className="h-3 w-3 rounded-full ring-4 ring-black"
                      style={{ backgroundColor: t.color }}
                    />
                  </span>
                  <p
                    className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: t.color }}
                  >
                    {t.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* WHO WE BUILD FOR — stats with counters */}
      <section className="container-wide py-16 md:py-24">
        <SectionHeader
          eyebrow="Who we build for"
          title="Operators, not enterprises."
          description="Studios, schools, coaches, trainers, workshop hosts, certification programs and the small teams behind them. If you run something real, we built this for you."
        />
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-[#D6FF3D] p-10 text-black md:p-16">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-15 mask-fade-b" />
            <div className="relative grid gap-10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l}>
                  <p className="text-5xl font-bold tracking-tight md:text-6xl">
                    <AnimatedCounter value={s.v} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] opacity-75">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-[#FF5A1F] p-14 text-center text-black md:p-24">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-15 mask-fade-b" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-7xl">
                Want to see the inside?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base opacity-80 md:text-lg">
                We're a small team, and we read every message. Tell us about your
                business — we'll help you decide if NullSpace is right for it.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Talk to us <Icon name="arrow-right" size={14} />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 rounded-full border border-black/40 bg-transparent px-7 py-3.5 text-base font-medium text-black transition-colors hover:bg-black/10"
                >
                  Browse features
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}