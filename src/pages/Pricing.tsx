import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';
import { VividCard } from '../components/VividCard';

const addons = [
  {
    name: 'Inbox',
    price: '€20',
    icon: 'inbox' as const,
    variant: 'rose' as const,
    desc: 'Unify WhatsApp, Instagram, Email, Messenger, SMS and Telegram into one shared inbox. Assign threads, track tickets, never miss a customer.',
    features: [
      'Six channels in one inbox',
      'Team assignment & ticket tracking',
      'Channel-aware auto-replies',
      'Multi-agent collision detection',
    ],
  },
  {
    name: 'White-label',
    price: '€10',
    icon: 'palette' as const,
    variant: 'amber' as const,
    desc: 'Run NullSpace under your own brand. Custom domain, your logo, your colors — and we vanish quietly from every touchpoint.',
    features: [
      'Custom branded portal',
      'Custom domain (book.yourbrand.com)',
      'Removal of all NullSpace branding',
      'Branded transactional emails',
    ],
  },
];

const comparisons: { feature: string; free: boolean | string; premium: boolean | string }[] = [
  { feature: 'Clients on your roster', free: 'Up to 25', premium: 'Unlimited' },
  { feature: 'Calendar & recurring scheduling', free: true, premium: true },
  { feature: 'Stripe payments & invoicing', free: true, premium: true },
  { feature: 'Subscription plans & products', free: true, premium: true },
  { feature: 'Multi-language platform', free: true, premium: true },
  { feature: 'Member self-service portal', free: true, premium: true },
  { feature: 'Priority support', free: false, premium: true },
  { feature: 'Inbox add-on (€20/mo)', free: false, premium: 'Optional' },
  { feature: 'White-label add-on (€10/mo)', free: false, premium: 'Optional' },
];

const faqs = [
  {
    q: 'Is the free plan really free forever?',
    a: 'Yes. Up to 25 clients, no credit card and no trial timer. You only pay when you outgrow the free tier and choose to upgrade.',
  },
  {
    q: 'Are there any setup or transaction fees?',
    a: 'No setup fees from NullSpace. Payment processing is handled by Stripe at their standard rates — we don\'t add a markup on top.',
  },
  {
    q: 'Can I change plans or cancel any time?',
    a: 'Absolutely. Upgrade, downgrade or cancel from your dashboard whenever you want. No retention calls, no contracts.',
  },
  {
    q: 'Do add-ons require Premium?',
    a: 'Yes — Inbox and White-label add-ons are available on Premium. They can be enabled or disabled at any time.',
  },
];

export function Pricing() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-bg opacity-[0.35] mask-fade-b" />
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            }}
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
              <span className="h-1.5 w-1.5 rounded-full bg-[#22F58F]" /> Pricing
            </motion.span>
            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-8 text-display-xl font-bold tracking-tight text-balance gradient-text"
            >
              Simple pricing.
              <br /> No surprises.
            </motion.h1>
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 text-lg leading-relaxed text-ink-muted text-balance md:text-xl"
            >
              Start free with everything you need. Upgrade only when your roster
              outgrows the free tier — never because we changed the rules.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PLAN CARDS — both vivid */}
      <section className="container-wide py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-[#D6FF3D] p-10 text-black md:p-12">
              <div aria-hidden className="absolute inset-0 grid-bg opacity-10 mask-fade-b" />
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-wider">Free</p>
                <p className="mt-1 text-sm opacity-80">Everything you need to start.</p>
                <p className="mt-8 text-7xl font-bold tracking-tight md:text-8xl">€0</p>
                <p className="mt-2 text-sm opacity-75">forever · up to 25 clients</p>
                <ul className="mt-10 space-y-3.5 text-base">
                  {[
                    'Automated payments & invoicing (Stripe)',
                    'Full calendar with recurring scheduling',
                    'Subscriptions & products',
                    'Multi-language platform (35+)',
                    'All settings & customisation',
                    'Member self-service portal',
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-[#D6FF3D]">
                        <Icon name="check" size={12} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.01]"
                >
                  Get started <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-[#A855F7] p-10 text-white md:p-12">
              <div aria-hidden className="absolute inset-0 grid-bg opacity-10 mask-fade-b" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold uppercase tracking-wider">Premium</p>
                  <span className="rounded-full bg-black/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    Most popular
                  </span>
                </div>
                <p className="mt-1 text-sm opacity-80">For businesses ready to scale.</p>
                <p className="mt-8 text-7xl font-bold tracking-tight md:text-8xl">
                  €45<span className="text-2xl font-normal opacity-75">/mo</span>
                </p>
                <p className="mt-2 text-sm opacity-75">unlimited clients · full automation</p>
                <ul className="mt-10 space-y-3.5 text-base">
                  {[
                    'Everything in Free',
                    'Unlimited clients & subscriptions',
                    'No restrictions for your customers',
                    'Access to all add-ons',
                    'Priority human support',
                    'Onboarding session with a real human',
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#A855F7]">
                        <Icon name="check" size={12} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.01]"
                >
                  Start free trial <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ADD-ONS */}
      <Section>
        <SectionHeader
          eyebrow="Add-ons"
          title="Two optional power-ups."
          description="Stack them on top of Premium when your team needs more. Toggle on or off whenever — pay only for the month you use."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {addons.map((a) => (
            <VividCard
              key={a.name}
              variant={a.variant}
              size="lg"
              eyebrow={`${a.price} / month`}
              title={a.name}
              body={a.desc}
              className="min-h-[360px]"
            >
              <ul className="mt-6 grid grid-cols-1 gap-y-2.5 text-sm sm:grid-cols-2">
                {a.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Icon name="check" size={13} className="mt-1 shrink-0 opacity-80" />
                    <span className="opacity-90">{f}</span>
                  </li>
                ))}
              </ul>
            </VividCard>
          ))}
        </div>
      </Section>

      {/* COMPARISON */}
      <Section>
        <SectionHeader eyebrow="Compare" title="Free vs. Premium, at a glance." />
        <Reveal className="mt-14">
          <div className="card overflow-hidden">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-ink-subtle">
              <div className="p-5">Feature</div>
              <div className="p-5 text-center">Free</div>
              <div className="p-5 text-center text-white">Premium</div>
            </div>
            {comparisons.map((c, i) => (
              <div
                key={c.feature}
                className={`grid grid-cols-[1.4fr_1fr_1fr] ${
                  i !== comparisons.length - 1 ? 'border-b border-white/8' : ''
                }`}
              >
                <div className="p-5 text-base text-white">{c.feature}</div>
                <div className="p-5 text-center text-base">
                  {typeof c.free === 'boolean' ? (
                    c.free ? (
                      <Icon name="check" size={17} className="mx-auto text-[#22F58F]" />
                    ) : (
                      <span className="text-ink-dim">—</span>
                    )
                  ) : (
                    <span className="text-ink-muted">{c.free}</span>
                  )}
                </div>
                <div className="p-5 text-center text-base">
                  {typeof c.premium === 'boolean' ? (
                    c.premium ? (
                      <Icon name="check" size={17} className="mx-auto text-[#A855F7]" />
                    ) : (
                      <span className="text-ink-dim">—</span>
                    )
                  ) : (
                    <span className="text-white">{c.premium}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* PRICING FAQ */}
      <Section>
        <SectionHeader eyebrow="FAQ" title="Pricing questions, answered." />
        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={`card overflow-hidden transition-colors ${isOpen ? 'border-white/25' : ''}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-white">{f.q}</span>
                    <Icon name={isOpen ? 'minus' : 'plus'} size={16} className="shrink-0 text-ink-muted" />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-6 pb-6 text-base leading-relaxed text-ink-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-[#3D5AFE] p-14 text-center text-white md:p-24">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-15 mask-fade-b" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-7xl">
                Ready to upgrade?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base opacity-85 md:text-lg">
                Free up to 25 clients. Unlimited everything for €45 a month. Cancel any time.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Start for free <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}