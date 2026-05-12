import { Reveal } from '../Reveal';
import { Icon } from '../Icon';
import { SectionHeader } from '../Section';

const before = [
  'Calendar app · scheduling',
  'Stripe dashboard · invoicing',
  'Notion · client list',
  'WhatsApp + IG + Email · chats',
  'Spreadsheet · subscriptions',
  'Eventbrite · bookings',
  'Google Forms · intake',
  'Mailchimp · reminders',
];

const after = [
  'NullSpace · scheduling, billing, chats, subscriptions and bookings — in one tab.',
];

export function BeforeAfter() {
  return (
    <section className="container-page py-20 md:py-28">
      <SectionHeader
        eyebrow="Before & after"
        title="One tab. One bill. One brain."
        description="Most SMEs run their operation across eight tools that don't talk to each other. NullSpace is the one that does."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-black p-8 md:p-10">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF3D7F]/15 text-[#FF3D7F]">
                <Icon name="minus" size={14} />
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#FF3D7F]">Before</p>
            </div>
            <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              Eight tabs and a sticky note.
            </h3>
            <ul className="mt-7 space-y-2.5">
              {before.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-ink-muted line-through decoration-[#FF3D7F]/60 decoration-2"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink-dim" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-full overflow-hidden rounded-3xl bg-[#D6FF3D] p-8 text-black md:p-10">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-10 mask-fade-b" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/15 text-black">
                  <Icon name="plus" size={14} />
                </span>
                <p className="text-sm font-bold uppercase tracking-wider">After</p>
              </div>
              <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                NullSpace.
              </h3>
              <ul className="mt-7 space-y-2.5">
                {after.map((b) => (
                  <li
                    key={b}
                    className="rounded-2xl bg-black px-5 py-4 text-base font-medium text-white"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { v: '−8', l: 'tools' },
                  { v: '+12h', l: 'per week' },
                  { v: '€0', l: 'integration cost' },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-black/10 px-4 py-3">
                    <p className="text-2xl font-bold">{s.v}</p>
                    <p className="text-xs uppercase tracking-wider opacity-70">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}