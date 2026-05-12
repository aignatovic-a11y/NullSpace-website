import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';

type QA = { q: string; a: string };
type Group = {
  title: string;
  color: string;
  icon: Parameters<typeof Icon>[0]['name'];
  items: QA[];
};

const groups: Group[] = [
  {
    title: 'General',
    color: '#A855F7',
    icon: 'sparkles',
    items: [
      {
        q: 'What is NullSpace?',
        a: 'NullSpace is an all-in-one business management platform for small and medium-sized enterprises. It brings scheduling, automated billing, subscriptions, customer communication and white-label branding into a single dashboard — so the operational layer of your business can finally get out of your way.',
      },
      {
        q: 'Who is NullSpace for?',
        a: 'NullSpace is built for the operators behind studios, driving schools, music academies, workshops, online courses, coaching practices, certification programs and corporate training. If your business sells time, classes, sessions or memberships, NullSpace was built with you in mind.',
      },
      {
        q: 'How does NullSpace help my business?',
        a: 'By collapsing five or six tools into one. Your calendar, invoices, subscriptions, customer messages and team workflows live in the same place, talk to each other automatically, and free up the hours you used to spend stitching them together.',
      },
      {
        q: 'Can I use NullSpace on mobile devices?',
        a: 'Yes — NullSpace is mobile-first. You can manage bookings, payments and conversations from your phone, with full parity to the desktop dashboard.',
      },
    ],
  },
  {
    title: 'Pricing & subscription',
    color: '#22F58F',
    icon: 'card',
    items: [
      {
        q: 'How much does NullSpace cost?',
        a: 'Free up to 25 clients, with all core features included. Premium is €45/month for unlimited clients and full automation. Optional add-ons: Inbox (€20/mo) and White-label (€10/mo).',
      },
      {
        q: 'Do you offer a free trial?',
        a: 'Better than a trial — the Free plan is free forever, with no card required. You only upgrade when you outgrow it.',
      },
      {
        q: 'Are there any hidden fees?',
        a: 'No. NullSpace doesn\'t add setup fees, contract minimums or transaction markups. Payment processing is handled by Stripe at their standard rates.',
      },
      {
        q: 'Can I switch or upgrade my plan later?',
        a: 'Yes, any time, from your dashboard. Upgrades take effect immediately; downgrades take effect at the next billing cycle.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit and debit cards, plus local payment methods like iDEAL, SEPA, PayPal and more, powered by Stripe.',
      },
    ],
  },
  {
    title: 'Features & functionality',
    color: '#3D5AFE',
    icon: 'lightning',
    items: [
      {
        q: 'What core features does NullSpace offer?',
        a: 'Scheduling and recurring events, automated billing and subscriptions via Stripe, an omnichannel customer inbox (WhatsApp, Instagram, Email, Messenger, SMS, Telegram), a member self-service portal, white-labeling, multi-language and multi-currency support, and granular role and permission management.',
      },
      {
        q: 'Does NullSpace support multiple locations?',
        a: 'Yes. You can configure multiple locations, rooms and teams, with per-location settings, calendars and permissions.',
      },
      {
        q: 'Can I customize the platform with my branding?',
        a: 'Free and Premium plans let you customize your customer-facing portal with your logo and colors. The White-label add-on goes further: custom domain, branded transactional emails, and complete removal of all NullSpace branding.',
      },
      {
        q: 'Does NullSpace support multiple currencies and languages?',
        a: 'Yes — 135+ currencies, 100+ regional payment methods and 35+ interface languages, all available out of the box.',
      },
      {
        q: 'How does the automated billing system work?',
        a: 'You define plans, products or subscriptions; NullSpace handles invoicing, recurring charges, retries on failed payments and per-customer payment history. Everything runs on Stripe under the hood.',
      },
    ],
  },
  {
    title: 'Setup & onboarding',
    color: '#D6FF3D',
    icon: 'sparkles',
    items: [
      {
        q: 'How do I get started with NullSpace?',
        a: 'Sign up, configure your business details, import or add your clients, and start booking. The whole setup takes most teams under 30 minutes.',
      },
      {
        q: 'Is there an onboarding process?',
        a: 'Yes. The free plan walks you through setup in the product. Premium customers also get a personal onboarding session with a real human from our team.',
      },
      {
        q: 'How long does it take to set up NullSpace?',
        a: 'Most operators are live in under 30 minutes. Importing existing clients, setting up subscriptions and customizing branding usually takes a couple of hours on day one.',
      },
    ],
  },
  {
    title: 'Payments & billing',
    color: '#FF5A1F',
    icon: 'card',
    items: [
      {
        q: 'What payment methods can my customers use?',
        a: 'Credit and debit cards, PayPal, bank transfers, and a wide range of local payment methods (iDEAL, SEPA Direct Debit, PIX, UPI and more) — covering 100+ methods across 135+ currencies.',
      },
      {
        q: 'Does NullSpace support automatic invoicing?',
        a: 'Yes. Invoices are generated automatically whenever a booking, subscription or product is paid for, and sent to your customer in their language.',
      },
      {
        q: 'Can customers manage their own subscriptions?',
        a: 'Yes, through the customer self-service portal. They can upgrade, pause, cancel, update their payment method and download invoices without contacting you.',
      },
    ],
  },
  {
    title: 'Customer support',
    color: '#FF3D7F',
    icon: 'inbox',
    items: [
      {
        q: 'How can I contact customer support?',
        a: 'Live chat from inside the product, email at contact@nullspace.cloud, or scheduled phone support for Premium customers. We\'re a small team and we read every message.',
      },
      {
        q: 'Is support available in multiple languages?',
        a: 'Yes — our support team operates in English, Dutch and a handful of other European languages. Translated documentation covers 35+ languages.',
      },
    ],
  },
];

function Item({
  q,
  a,
  color,
  defaultOpen,
}: QA & { color: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div
      className="overflow-hidden rounded-2xl border bg-black transition-colors"
      style={{ borderColor: open ? `${color}66` : 'rgba(255,255,255,0.10)' }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-medium text-white md:text-lg">{q}</span>
        <span
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors"
          style={{ backgroundColor: open ? color : 'rgba(255,255,255,0.06)', color: open ? '#000' : '#FFF' }}
        >
          <Icon name={open ? 'minus' : 'plus'} size={14} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-6 pb-6 text-base leading-relaxed text-ink-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
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
              <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" /> FAQ
            </motion.span>
            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-8 text-display-xl font-bold tracking-tight text-balance gradient-text"
            >
              Questions, answered.
            </motion.h1>
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 text-lg leading-relaxed text-ink-muted text-balance md:text-xl"
            >
              Everything we get asked the most, sorted into neat little drawers.
              Can't find what you need?{' '}
              <Link to="/contact" className="text-white underline-offset-4 hover:underline">
                Ask us directly
              </Link>
              .
            </motion.p>
          </div>
        </div>
      </section>

      {/* QUICK JUMP LINKS — vivid pills */}
      <section className="container-wide pt-12 md:pt-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-ink-subtle">
            Jump to
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {groups.map((g) => (
              <a
                key={g.title}
                href={`#${g.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black px-4 py-2 text-sm font-medium text-white transition-all hover:border-transparent"
                style={{ ['--c' as any]: g.color }}
              >
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: g.color }}
                />
                {g.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {groups.map((g, gi) => {
        const id = g.title.toLowerCase().replace(/[^a-z]/g, '-');
        return (
          <Section key={g.title} id={id}>
            <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${g.color}1F`, color: g.color }}
                  >
                    <Icon name={g.icon} size={11} />
                    {g.title}
                  </span>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
                    {g.title}.
                  </h2>
                </div>
              </Reveal>
              <div className="space-y-3">
                {g.items.map((qa, i) => (
                  <Reveal key={qa.q} delay={i * 0.04}>
                    <Item {...qa} color={g.color} defaultOpen={gi === 0 && i === 0} />
                  </Reveal>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* FINAL CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-[#3D5AFE] p-14 text-center text-white md:p-24">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-15 mask-fade-b" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-7xl">
                Still wondering something?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base opacity-85 md:text-lg">
                Real humans answer real questions. We usually reply within a business day.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Contact us <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}