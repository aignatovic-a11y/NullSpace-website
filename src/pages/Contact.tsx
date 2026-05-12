import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';
import { InboxMockup } from '../components/mockups/InboxMockup';

const channels: {
  variant: 'violet' | 'lime' | 'rose' | 'amber';
  icon: Parameters<typeof Icon>[0]['name'];
  title: string;
  body: string;
  action: string;
  href: string;
}[] = [
  {
    variant: 'violet',
    icon: 'mail',
    title: 'Email',
    body: 'For anything that isn\'t time-sensitive. We reply within a business day.',
    action: 'contact@nullspace.cloud',
    href: 'mailto:contact@nullspace.cloud',
  },
  {
    variant: 'lime',
    icon: 'pin',
    title: 'Office',
    body: 'Drop by if you happen to be in the neighbourhood — coffee included.',
    action: 'De Hems 10, 7522 NL Enschede',
    href: 'https://maps.google.com/?q=De+Hems+10+Enschede',
  },
  {
    variant: 'rose',
    icon: 'clock',
    title: 'Hours',
    body: 'We\'re reachable across European business hours. Async outside of those.',
    action: 'Mon–Fri · 09:00–18:00 CET',
    href: '#',
  },
];

const channelBg: Record<string, string> = {
  violet: '#A855F7',
  lime: '#D6FF3D',
  rose: '#FF3D7F',
  amber: '#FFB319',
};

const channelText: Record<string, string> = {
  violet: '#FFFFFF',
  lime: '#000000',
  rose: '#FFFFFF',
  amber: '#000000',
};

const reasons = [
  'I want to start a free trial',
  'I need help with my existing account',
  'I\'m evaluating NullSpace for my business',
  'I\'m a journalist or partner',
  'Something else',
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
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
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF3D7F]" /> Contact
            </motion.span>
            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-8 text-display-xl font-bold tracking-tight text-balance gradient-text"
            >
              Talk to a real human.
            </motion.h1>
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 text-lg leading-relaxed text-ink-muted text-balance md:text-xl"
            >
              No chatbots, no ticket queues, no "let us route you to the right team."
              We're a small team and we answer every message ourselves.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CHANNEL CARDS — vivid */}
      <section className="container-wide py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((c, i) => {
            const bg = channelBg[c.variant];
            const text = channelText[c.variant];
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group relative block h-full overflow-hidden rounded-3xl p-8 transition-transform hover:-translate-y-1 md:p-10"
                  style={{ backgroundColor: bg, color: text }}
                >
                  <div aria-hidden className="absolute inset-0 grid-bg opacity-15 mask-fade-b" />
                  <div className="relative">
                    <span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: text === '#000000' ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.18)',
                      }}
                    >
                      <Icon name={c.icon} size={20} />
                    </span>
                    <h3 className="mt-6 text-3xl font-bold tracking-tight">{c.title}</h3>
                    <p className="mt-3 text-base leading-relaxed opacity-80">{c.body}</p>
                    <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      {c.action}
                      <Icon name="arrow-up-right" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FORM + INBOX PREVIEW */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-8 md:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Tell us about your business.
              </h2>
              <p className="mt-3 text-base text-ink-muted">
                The more we know, the better we can help. Fields with * are required.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 rounded-3xl bg-[#D6FF3D] p-8 text-black"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-[#D6FF3D]">
                    <Icon name="check" size={22} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight">
                    Got it — message on the way.
                  </h3>
                  <p className="mt-3 text-base opacity-80">
                    We'll be in touch within one business day. In the meantime,
                    feel free to browse the rest of the site.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-10 space-y-5"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Full name *" name="name" placeholder="Alex Janssen" />
                    <Field label="Email *" name="email" type="email" placeholder="alex@studio.com" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Business name" name="business" placeholder="Studio Amsterdam" />
                    <Field label="Country" name="country" placeholder="The Netherlands" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      What can we help with? *
                    </label>
                    <select
                      className="w-full appearance-none rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-base text-white outline-none transition-colors hover:border-white/25 focus:border-[#A855F7]"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Pick one…
                      </option>
                      {reasons.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Your message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you're running and where you're stuck…"
                      className="w-full resize-none rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-base text-white placeholder:text-ink-dim outline-none transition-colors hover:border-white/25 focus:border-[#A855F7]"
                    />
                  </div>
                  <button type="submit" className="btn-accent w-full justify-center !py-4 text-base">
                    Send message <Icon name="arrow-right" size={14} />
                  </button>
                  <p className="text-center text-[11px] text-ink-subtle">
                    We never share your data. Read our{' '}
                    <a href="/legal/privacy" className="underline-offset-2 hover:underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-subtle">
                  Live preview
                </p>
                <InboxMockup />
              </div>
              <div className="rounded-3xl border border-white/10 bg-black p-6">
                <Icon name="lightning" size={20} className="text-[#22F58F]" />
                <h3 className="mt-4 text-xl font-bold text-white">
                  Want to skip the form?
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  Email us at{' '}
                  <a
                    href="mailto:contact@nullspace.cloud"
                    className="text-white underline-offset-4 hover:underline"
                  >
                    contact@nullspace.cloud
                  </a>{' '}
                  — we'll reply within one business day, often sooner.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black p-6">
                <Icon name="users" size={20} className="text-[#00E5FF]" />
                <h3 className="mt-4 text-xl font-bold text-white">
                  Existing customer?
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  Sign in to your dashboard and use the live chat in the bottom
                  corner — we'll see your account context and help faster.
                </p>
                <a href="https://app.nullspace.cloud" className="btn-secondary mt-5 w-full justify-center">
                  Open dashboard <Icon name="arrow-up-right" size={12} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={label.includes('*')}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3.5 text-base text-white placeholder:text-ink-dim outline-none transition-colors hover:border-white/25 focus:border-[#A855F7]"
      />
    </div>
  );
}