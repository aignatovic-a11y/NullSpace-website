import { Marquee } from '../Marquee';
import { Icon } from '../Icon';
import { SectionHeader } from '../Section';

const integrations: { name: string; icon: Parameters<typeof Icon>[0]['name']; color: string }[] = [
  { name: 'Stripe', icon: 'card', color: '#635BFF' },
  { name: 'WhatsApp', icon: 'whatsapp', color: '#25D366' },
  { name: 'Instagram', icon: 'instagram', color: '#FF3D7F' },
  { name: 'Messenger', icon: 'inbox', color: '#0084FF' },
  { name: 'Gmail', icon: 'mail', color: '#EA4335' },
  { name: 'SMS', icon: 'sms', color: '#00E5FF' },
  { name: 'Telegram', icon: 'inbox', color: '#3D5AFE' },
  { name: 'iDEAL', icon: 'card', color: '#CC0066' },
  { name: 'SEPA', icon: 'card', color: '#0072CE' },
  { name: 'PayPal', icon: 'card', color: '#FFB319' },
];

export function IntegrationsMarquee() {
  return (
    <section className="container-page py-20 md:py-28">
      <SectionHeader
        eyebrow="Integrations"
        title="Plays nicely with the tools you already use."
        description="Six messaging channels, dozens of regional payment methods, and Stripe under the hood — connected out of the box."
      />
      <div className="mt-16">
        <Marquee
          speed={45}
          items={integrations.map((i) => (
            <div
              key={i.name}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/8 bg-black px-6 py-4"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: i.color }}
              >
                <Icon name={i.icon} size={16} />
              </span>
              <span className="text-base font-semibold text-white">{i.name}</span>
            </div>
          ))}
        />
      </div>
      <div className="mt-6">
        <Marquee
          speed={55}
          items={[...integrations].reverse().map((i) => (
            <div
              key={`r-${i.name}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/8 bg-black px-6 py-4"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: i.color }}
              >
                <Icon name={i.icon} size={16} />
              </span>
              <span className="text-base font-semibold text-white">{i.name}</span>
            </div>
          ))}
        />
      </div>
    </section>
  );
}