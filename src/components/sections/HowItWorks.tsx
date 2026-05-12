import { motion } from 'framer-motion';
import { SectionHeader } from '../Section';
import { Icon } from '../Icon';
import { Reveal } from '../Reveal';

const steps = [
  {
    n: '01',
    icon: 'sparkles' as const,
    title: 'Set up your space.',
    body: 'Add your team, your locations and your services. Import existing clients in one click. No developer required — typical setup is under 30 minutes.',
    tone: 'bg-[#A855F7]',
    text: 'text-white',
  },
  {
    n: '02',
    icon: 'calendar' as const,
    title: 'Open the doors.',
    body: 'Publish your booking page on your own domain. Customers self-serve: book classes, pay subscriptions, manage their own membership.',
    tone: 'bg-[#3D5AFE]',
    text: 'text-white',
  },
  {
    n: '03',
    icon: 'lightning' as const,
    title: 'Let it run.',
    body: 'Invoices send themselves. Failed cards retry themselves. Customer chats land in one inbox. You show up and do the work that matters.',
    tone: 'bg-[#D6FF3D]',
    text: 'text-black',
  },
];

export function HowItWorks() {
  return (
    <section className="container-page py-20 md:py-32">
      <SectionHeader
        eyebrow="How it works"
        title="Three steps. About half an hour."
        description="From signup to running your operation on autopilot — without rewriting how your business works."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-black p-8 md:p-10">
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full ${s.tone} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${s.tone} ${s.text}`}>
                    <Icon name={s.icon} size={20} />
                  </span>
                  <span className="font-mono text-sm font-semibold text-ink-dim">{s.n}</span>
                </div>
                <h3 className="mt-8 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}