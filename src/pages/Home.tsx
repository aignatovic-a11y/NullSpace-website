import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';
import { HeroShowcase } from '../components/HeroShowcase';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { InboxMockup } from '../components/mockups/InboxMockup';
import { PaymentsMockup } from '../components/mockups/PaymentsMockup';
import { GlobeMockup } from '../components/mockups/GlobeMockup';
import { Marquee } from '../components/Marquee';
import { VividCard } from '../components/VividCard';
import { HowItWorks } from '../components/sections/HowItWorks';
import { IntegrationsMarquee } from '../components/sections/IntegrationsMarquee';
import { BeforeAfter } from '../components/sections/BeforeAfter';

const industries = [
  'Sports & athletics',
  'Driving schools',
  'Music lessons',
  'Online courses',
  'Coaching',
  'Workshops',
  'Culinary training',
  'Corporate development',
  'Professional certifications',
  'Business training',
];

const stats = [
  { v: 135, suffix: '+', l: 'currencies accepted' },
  { v: 100, suffix: '+', l: 'payment methods' },
  { v: 35, suffix: '', l: 'platform languages' },
  { v: 99.95, suffix: '%', l: 'uptime, last 12mo', decimals: 2 },
];

export function Home() {
  const reduce = useReducedMotion();
  return (
    <>
      {/* HERO — pure black, animation does the work */}
      <section className="relative overflow-hidden pt-36 md:pt-44">
        {/* Subtle moving grid only, no color halo */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-bg opacity-[0.35] mask-fade-b" />
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            }}
          />
        </div>

        <div className="container-wide relative">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.span
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="chip"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#22F58F] animate-pulse-glow" />
              New: Inbox add-on is live
              <Icon name="arrow-right" size={11} className="text-ink-muted" />
            </motion.span>

            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-8 text-display-2xl font-bold tracking-tight text-balance gradient-text"
            >
              Run your business,
              <br />
              not the busywork.
            </motion.h1>

            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted text-balance md:text-xl"
            >
              The all-in-one platform for modern SMEs — scheduling, automated
              billing, and client communication in one beautifully quiet interface.
            </motion.p>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <Link to="/contact" className="btn-accent">
                Start for free
                <Icon name="arrow-right" size={14} />
              </Link>
              <Link to="/features" className="btn-secondary">
                <Icon name="play" size={12} />
                See it in action
              </Link>
            </motion.div>

            <motion.p
              initial={reduce ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-xs text-ink-subtle"
            >
              Free up to 25 clients · No credit card · No hidden fees
            </motion.p>
          </div>

          {/* Cycling product showcase */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative mx-auto mt-24 max-w-6xl md:mt-32"
          >
            <HeroShowcase />
          </motion.div>

          {/* Stats row with animated counters */}
          <div className="mx-auto mt-32 grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 border-y border-white/10 py-14 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-5xl font-bold tracking-tight gradient-violet md:text-6xl">
                    <AnimatedCounter
                      value={s.v}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                    />
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-ink-subtle">
                    {s.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES MARQUEE */}
      <section className="mt-28">
        <p className="container-wide text-center text-xs uppercase tracking-[0.22em] text-ink-subtle">
          Built for the operators behind
        </p>
        <div className="mt-10">
          <Marquee
            speed={50}
            items={industries.map((i) => (
              <span
                key={i}
                className="text-2xl font-semibold text-ink-muted/80 md:text-4xl"
              >
                {i}
                <span className="ml-12 text-white/15">✦</span>
              </span>
            ))}
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* VIVID FEATURE BENTO — bigger, more breathing */}
      <section className="container-wide py-24 md:py-32">
        <SectionHeader
          eyebrow="Everything you need"
          title="The right features, right where you need them."
          description="Designed to do more, so you can do less."
        />
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-7">
          <VividCard
            className="md:col-span-4 min-h-[320px]"
            size="lg"
            variant="electric"
            eyebrow="Calendar"
            title={<>A schedule that respects your time.</>}
            body="Daily, weekly, monthly and yearly views. Recurring rules for every cadence. Drag to reschedule, click to add — and never accidentally double-book a teacher again."
          />
          <VividCard
            className="md:col-span-2 min-h-[320px]"
            size="md"
            variant="lime"
            eyebrow="135+"
            title={<>Currencies, on day one.</>}
            body="Accept the money your customers actually use."
          />
          <VividCard
            className="md:col-span-2 min-h-[320px]"
            size="md"
            variant="violet"
            eyebrow="35+"
            title={<>Languages, fully translated.</>}
            body="Sell locally, in the language people grew up speaking."
          />
          <VividCard
            className="md:col-span-4 min-h-[320px]"
            size="lg"
            variant="orange"
            eyebrow="Payments"
            title={<>Stripe runs the money. We chase nothing.</>}
            body="Subscriptions, one-time bookings, smart retries on failed cards. Live revenue numbers update in real time, every minute, every day."
          />
          <VividCard
            className="md:col-span-3 min-h-[280px]"
            size="md"
            variant="rose"
            eyebrow="Inbox"
            title={<>Six channels. One thread.</>}
            body="WhatsApp, Instagram, Email, Messenger, SMS, Telegram — collapsed into one shared inbox."
          />
          <VividCard
            className="md:col-span-3 min-h-[280px]"
            size="md"
            variant="amber"
            eyebrow="White-label"
            title={<>Your brand, front and centre.</>}
            body="Custom domain, custom colors, no NullSpace branding anywhere your customers see."
          />
        </div>

        <Reveal className="mt-14 flex justify-center" delay={0.2}>
          <Link to="/features" className="btn-secondary">
            Explore every feature
            <Icon name="arrow-up-right" size={14} />
          </Link>
        </Reveal>
      </section>

      {/* BEFORE & AFTER */}
      <BeforeAfter />

      {/* SHOWCASE — PAYMENTS (mockup, much more room) */}
      <Section>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <Reveal>
            <span className="chip">
              <Icon name="card" size={11} className="text-[#22F58F]" /> Payments
            </span>
            <h2 className="mt-6 text-display-lg font-bold tracking-tight text-balance gradient-text">
              Subscriptions, invoices and dunning — fully on autopilot.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Stripe handles every transaction; NullSpace handles every customer.
              Set up plans with multiple tiers, watch live revenue update in real
              time, and let failed payments retry themselves so you never have to
              send another awkward reminder.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Recurring subscriptions with usage-based add-ons',
                'Localised pricing per market — automatically',
                'Instant per-customer payment history',
                'Smart retries when a card declines',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-base text-ink-muted">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22F58F]/15 text-[#22F58F]">
                    <Icon name="check" size={13} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <PaymentsMockup />
          </Reveal>
        </div>
      </Section>

      {/* SHOWCASE — INBOX */}
      <Section>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <InboxMockup />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="chip">
              <Icon name="inbox" size={11} className="text-[#FF3D7F]" /> Inbox
            </span>
            <h2 className="mt-6 text-display-lg font-bold tracking-tight text-balance gradient-text">
              Every channel. One conversation.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              WhatsApp, Instagram, Email, Messenger, SMS and Telegram unified into a
              single inbox your whole team can work from. Assign threads, track
              tickets, and reply from anywhere — without juggling six apps and four
              passwords.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Six channels, one shared inbox',
                'Team assignment and ticket tagging',
                'Auto-confirmation on bookings & payments',
                'Open conversations follow the customer, not the channel',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-base text-ink-muted">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF3D7F]/15 text-[#FF3D7F]">
                    <Icon name="check" size={13} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* SHOWCASE — GLOBAL */}
      <Section>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <Reveal>
            <span className="chip">
              <Icon name="globe" size={11} className="text-[#00E5FF]" /> Global by default
            </span>
            <h2 className="mt-6 text-display-lg font-bold tracking-tight text-balance gradient-text">
              Local for your customers. Global for you.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Accept 135+ currencies and 100+ local payment methods, and let your
              customers use the platform in their own language — out of the box.
              Run one business, in every market that finds you.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                '35+ interface languages, fully translated',
                'Region-specific payment methods (iDEAL, SEPA, PIX, UPI…)',
                'Currency conversion and localised pricing per plan',
                'No regional plugins, no per-country contracts',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-base text-ink-muted">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00E5FF]/15 text-[#00E5FF]">
                    <Icon name="check" size={13} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <GlobeMockup />
          </Reveal>
        </div>
      </Section>

      {/* INTEGRATIONS */}
      <IntegrationsMarquee />

      {/* PRICING TEASER */}
      <Section>
        <SectionHeader
          eyebrow="Pricing"
          title="Simple pricing. No surprises."
          description="Start free with everything you need to get going. Upgrade only when your roster outgrows the free tier — never because we changed the rules."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card relative h-full p-10 md:p-12">
              <p className="text-sm font-medium text-ink-muted">Free</p>
              <p className="mt-4 text-7xl font-bold tracking-tight text-white">€0</p>
              <p className="mt-2 text-sm text-ink-subtle">forever · up to 25 clients</p>
              <ul className="mt-10 space-y-4 text-base text-ink-muted">
                {[
                  'Full calendar & recurring scheduling',
                  'Stripe payments & invoicing',
                  'Subscriptions and products',
                  'Multi-language support',
                  'All settings & customisation',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <Icon name="check" size={16} className="text-[#22F58F]" /> {p}
                  </li>
                ))}
              </ul>
              <Link to="/pricing" className="btn-secondary mt-12 w-full justify-center">
                Get started
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-[#A855F7] p-10 text-white md:p-12">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">Premium</p>
                <span className="rounded-full bg-black/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  Most popular
                </span>
              </div>
              <p className="mt-4 text-7xl font-bold tracking-tight">
                €45
                <span className="text-base font-normal opacity-75">/mo</span>
              </p>
              <p className="mt-2 text-sm opacity-80">unlimited clients · full automation</p>
              <ul className="mt-10 space-y-4 text-base">
                {[
                  'Everything in Free',
                  'Unlimited clients & subscriptions',
                  'Add-on ready: Inbox · White-label',
                  'Priority human support',
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
                to="/pricing"
                className="mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Start free trial <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* QUOTE BAND */}
      <Section>
        <Reveal>
          <div className="card relative overflow-hidden p-12 md:p-24">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-50 mask-fade-b" />
            <div className="relative max-w-4xl">
              <span className="text-7xl text-[#A855F7]">"</span>
              <p className="mt-2 text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
                We replaced five tools with NullSpace and got our Sundays back.
                Scheduling, payments and customer chats run themselves now — we
                just show up and teach.
              </p>
              <div className="mt-10 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#A855F7] to-[#00E5FF]" />
                <div>
                  <p className="text-base font-medium text-white">Mariska de Wit</p>
                  <p className="text-sm text-ink-subtle">
                    Founder · Amsterdam Movement Studio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-[#A855F7] p-14 text-center text-white md:p-28">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 grid-bg opacity-15 mask-fade-b"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-4xl text-balance text-5xl font-bold tracking-tight md:text-8xl">
                Less admin. More of the work you love.
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-base opacity-85 md:text-lg">
                Spin up your space in under five minutes. No card, no contract — just
                everything you need to run the business you built.
              </p>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Start for free <Icon name="arrow-right" size={14} />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 rounded-full border border-black/30 bg-transparent px-7 py-3.5 text-base font-medium text-black transition-colors hover:bg-black/10"
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