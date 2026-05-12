import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';
import { CalendarMockup } from '../components/mockups/CalendarMockup';
import { InboxMockup } from '../components/mockups/InboxMockup';
import { PaymentsMockup } from '../components/mockups/PaymentsMockup';
import { GlobeMockup } from '../components/mockups/GlobeMockup';
import { ProductsMockup } from '../components/mockups/ProductsMockup';
import { SettingsMockup } from '../components/mockups/SettingsMockup';
import { VividCard } from '../components/VividCard';
import { motion, useReducedMotion } from 'framer-motion';

type Block = {
  eyebrow: string;
  icon: Parameters<typeof Icon>[0]['name'];
  title: string;
  body: string;
  bullets: string[];
  mockup?: 'calendar' | 'inbox' | 'payments' | 'globe' | 'products' | 'settings';
};

const blocks: Block[] = [
  {
    eyebrow: 'Internationalization',
    icon: 'globe',
    title: 'A business in every language, every currency.',
    body: 'Accept 135+ currencies and 100+ local payment methods while running the platform itself in 35+ languages. Localised pricing keeps every market feeling native; localised support keeps every customer feeling at home.',
    bullets: [
      '35+ interface languages, fully translated',
      '135+ currencies accepted at checkout',
      '100+ regional payment methods (iDEAL, SEPA, PIX, UPI…)',
      'Per-market pricing rules with one click',
    ],
    mockup: 'globe',
  },
  {
    eyebrow: 'Payments & Stripe',
    icon: 'card',
    title: 'Automated payments. Zero awkward reminders.',
    body: 'NullSpace runs on Stripe under the hood. Set up recurring subscriptions, one-time bookings or tiered plans, watch live revenue update in real time, and let smart retries handle the cards that fail at 2am.',
    bullets: [
      'Recurring invoices and subscriptions on autopilot',
      'Subscription plans with multiple pricing tiers',
      'Live revenue dashboard with per-customer history',
      'Smart retries — never chase a payment again',
    ],
    mockup: 'payments',
  },
  {
    eyebrow: 'Scheduling',
    icon: 'calendar',
    title: 'A calendar that actually respects your time.',
    body: 'Daily, weekly, monthly and yearly views. Recurring rules for every cadence you can think of. Drag to reschedule, click to add — and never accidentally double-book a teacher, a coach or a room again.',
    bullets: [
      'Recurring events with any cadence',
      'Daily, weekly, monthly and yearly views',
      'Drag-and-drop rescheduling, instantly synced',
      'Double-booking prevention across teams and rooms',
    ],
    mockup: 'calendar',
  },
  {
    eyebrow: 'Omnichannel inbox',
    icon: 'inbox',
    title: 'Six channels, one shared inbox.',
    body: 'WhatsApp, Instagram, Email, Messenger, SMS and Telegram unified into a single thread. Assign teammates, track support tickets, and let conversations follow the customer — not the channel they happened to start in.',
    bullets: [
      'WhatsApp · Instagram · Email · Messenger · SMS · Telegram',
      'Team assignment & ticket tagging',
      'Auto-confirmation when bookings and payments succeed',
      'Channel switching mid-conversation, with full history',
    ],
    mockup: 'inbox',
  },
  {
    eyebrow: 'Subscriptions & products',
    icon: 'sparkles',
    title: 'Subscription plans that fit how you sell.',
    body: 'Monthly memberships, term-based packages, single-class drop-ins or hybrid bundles — build the plan the way your business runs. Customers self-serve from a branded portal: upgrade, pause, cancel without ever messaging you.',
    bullets: [
      'Multiple pricing tiers per plan (Basic, Premium, Elite…)',
      'Per-location pricing for multi-site operations',
      'Trial periods, discount codes and gift memberships',
      'Customer portal to upgrade, pause, or cancel anytime',
    ],
    mockup: 'products',
  },
  {
    eyebrow: 'Customisation & settings',
    icon: 'shield',
    title: 'Tuned to fit, without a developer.',
    body: 'Forty-plus settings grouped into nine clear categories. Configure roles, permissions, branding, notification rules, DNS, support widgets and external accounts from one panel — no code, no integration overhead.',
    bullets: [
      'Granular role and permission management',
      'Pricing-table builder for your marketing site',
      'External account connections (WhatsApp, IG, Messenger)',
      'Branded company details and tax rates',
    ],
    mockup: 'settings',
  },
];

const extraBlocks: Block[] = [
  {
    eyebrow: 'White-labeling',
    icon: 'palette',
    title: 'Your brand, front and centre.',
    body: 'Customise the platform with your own logo, palette and custom domain. Your customers see your name on the booking page, the invoice and the receipt — NullSpace stays quietly out of the picture.',
    bullets: [
      'Custom logo, colors and typography',
      'Custom domain hosting (book.yourbrand.com)',
      'Branded customer self-service portal',
      'NullSpace branding fully removed',
    ],
  },
  {
    eyebrow: 'Mobile',
    icon: 'phone',
    title: 'Manage everything from your phone.',
    body: 'A native-feeling mobile experience for bookings, payments and conversations. Move someone\'s class while you\'re on the tram, send a receipt while you\'re in line for coffee — the office is wherever you are.',
    bullets: [
      'Bookings, payments and chats — on the go',
      'Push notifications when something needs you',
      'Full parity with the desktop dashboard',
      'Works offline, syncs the moment you reconnect',
    ],
  },
];

const accentByMockup: Record<string, string> = {
  globe: '#00E5FF',
  payments: '#22F58F',
  calendar: '#3D5AFE',
  inbox: '#FF3D7F',
  products: '#FFB319',
  settings: '#A855F7',
};

export function Features() {
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
              <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" /> Features
            </motion.span>
            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-8 text-display-xl font-bold tracking-tight text-balance gradient-text"
            >
              The right features,
              <br /> right where you need them.
            </motion.h1>
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 text-lg leading-relaxed text-ink-muted text-balance md:text-xl"
            >
              Designed to do more, so you can do less. Eight pillars that quietly
              replace a dozen disconnected tools — without making you re-learn how
              your business already works.
            </motion.p>
          </div>
        </div>
      </section>

      {/* VIVID FEATURE BENTO */}
      <section className="container-wide py-20 md:py-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-7">
          <VividCard
            className="md:col-span-3 min-h-[300px]"
            size="md"
            variant="electric"
            eyebrow="Calendar"
            title="Recurring rules, drag to reschedule."
            body="Daily, weekly, monthly and yearly views. Never accidentally double-book a teacher again."
          />
          <VividCard
            className="md:col-span-3 min-h-[300px]"
            size="md"
            variant="orange"
            eyebrow="Payments"
            title="Stripe runs the money. We chase nothing."
            body="Subscriptions, one-time bookings, smart retries on failed cards. Live revenue, real time."
          />
          <VividCard
            className="md:col-span-2 min-h-[280px]"
            size="md"
            variant="rose"
            eyebrow="Inbox"
            title="Six channels."
            body="WhatsApp, IG, Email, Messenger, SMS, Telegram — one shared inbox."
          />
          <VividCard
            className="md:col-span-2 min-h-[280px]"
            size="md"
            variant="lime"
            eyebrow="135+"
            title="Currencies."
            body="Accept what your customers actually use, at the price they expect."
          />
          <VividCard
            className="md:col-span-2 min-h-[280px]"
            size="md"
            variant="cyan"
            eyebrow="35+"
            title="Languages."
            body="Fully translated, including support docs."
          />
          <VividCard
            className="md:col-span-2 min-h-[260px]"
            size="md"
            variant="violet"
            eyebrow="White-label"
            title="Your brand."
            body="Custom domain, custom palette. We vanish from every touchpoint."
          />
          <VividCard
            className="md:col-span-2 min-h-[260px]"
            size="md"
            variant="amber"
            eyebrow="Mobile"
            title="Run it on the go."
            body="Full parity with desktop, all from your phone."
          />
          <VividCard
            className="md:col-span-2 min-h-[260px]"
            size="md"
            variant="electric"
            eyebrow="Roles"
            title="Granular controls."
            body="Configure permissions per team, location and role."
          />
        </div>
      </section>

      {/* DEEP DIVES */}
      {blocks.map((b, i) => {
        const reversed = i % 2 === 1;
        const id = b.eyebrow.toLowerCase().replace(/[^a-z]/g, '-');
        const mockup =
          b.mockup === 'calendar' ? <CalendarMockup /> :
          b.mockup === 'inbox' ? <InboxMockup /> :
          b.mockup === 'payments' ? <PaymentsMockup /> :
          b.mockup === 'globe' ? <GlobeMockup /> :
          b.mockup === 'products' ? <ProductsMockup /> :
          b.mockup === 'settings' ? <SettingsMockup /> :
          null;
        const accent = accentByMockup[b.mockup ?? ''] ?? '#A855F7';

        return (
          <Section key={b.title} id={id}>
            <div className="grid items-center gap-20 lg:grid-cols-2">
              <Reveal className={reversed ? 'lg:order-2' : ''}>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black px-3.5 py-1.5 text-xs font-medium"
                  style={{ color: accent }}
                >
                  <Icon name={b.icon} size={11} />
                  {b.eyebrow}
                </span>
                <h2 className="mt-6 text-display-lg font-bold tracking-tight text-balance gradient-text">
                  {b.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                  {b.body}
                </p>
                <ul className="mt-8 space-y-4">
                  {b.bullets.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-base text-ink-muted">
                      <span
                        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${accent}26`, color: accent }}
                      >
                        <Icon name="check" size={13} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1} className={reversed ? 'lg:order-1' : ''}>
                {mockup}
              </Reveal>
            </div>
          </Section>
        );
      })}

      {/* EXTRA FEATURES VIVID GRID */}
      <section className="container-wide py-20 md:py-28">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6FF3D]" /> Built-in
          </span>
          <h2 className="mt-7 text-display-lg font-bold tracking-tight text-balance gradient-text">
            Two more things you'll never have to integrate.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {extraBlocks.map((b, i) => {
            const variants = ['violet', 'amber', 'rose', 'cyan'] as const;
            return (
              <VividCard
                key={b.title}
                size="lg"
                variant={variants[i]}
                eyebrow={b.eyebrow}
                title={b.title}
                body={b.body}
                className="min-h-[340px]"
              />
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-[#D6FF3D] p-14 text-center text-black md:p-24">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-15 mask-fade-b" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-7xl">
                Ready to see what less admin feels like?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base opacity-80 md:text-lg">
                Free up to 25 clients. Unlimited everything for €45 a month.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Start for free <Icon name="arrow-right" size={14} />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-black/40 bg-transparent px-7 py-3.5 text-base font-medium text-black transition-colors hover:bg-black/10"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}