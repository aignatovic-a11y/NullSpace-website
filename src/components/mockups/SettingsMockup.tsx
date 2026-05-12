import { motion } from 'framer-motion';
import { Icon } from '../Icon';

type Card = {
  title: string;
  desc: string;
  icon: Parameters<typeof Icon>[0]['name'];
  color: string;
};

const general: Card[] = [
  { title: 'Access', desc: 'Invite and manage team members.', icon: 'users', color: '#A855F7' },
  { title: 'Notifications', desc: 'Manage how alerts get delivered.', icon: 'inbox', color: '#3D5AFE' },
  { title: 'Pricing table', desc: 'Showcase membership options on your site.', icon: 'card', color: '#22F58F' },
  { title: 'Emailing', desc: 'Configure email domains and signatures.', icon: 'mail', color: '#FF3D7F' },
  { title: 'Support widget', desc: 'Customise welcome message and buttons.', icon: 'sparkles', color: '#00E5FF' },
  { title: 'External accounts', desc: 'Connect WhatsApp, Instagram, Messenger.', icon: 'globe', color: '#D6FF3D' },
];

const business: Card[] = [
  { title: 'Company details', desc: 'Tax rates and legal identity.', icon: 'shield', color: '#FFB319' },
  { title: 'Branding', desc: 'Set brand colors and assets.', icon: 'palette', color: '#A855F7' },
  { title: 'Store locations', desc: 'Manage locations and addresses.', icon: 'pin', color: '#FF5A1F' },
];

function CardGrid({ items }: { items: Card[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.05 + i * 0.04 }}
          className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-black p-4 transition-colors hover:border-white/20"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${c.color}1F`, color: c.color }}
          >
            <Icon name={c.icon} size={15} />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">{c.title}</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-ink-muted">{c.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function SettingsMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <Icon name="shield" size={16} className="text-[#A855F7]" />
          <h3 className="text-2xl font-bold tracking-tight text-white">Settings</h3>
        </div>
        <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-ink-muted sm:inline">
          No code required
        </span>
      </div>

      <div className="px-6 py-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-subtle">
          General settings
        </p>
        <div className="mt-3">
          <CardGrid items={general} />
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-ink-subtle">
          Business settings
        </p>
        <div className="mt-3">
          <CardGrid items={business} />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-6 py-3 text-[11px] text-ink-subtle">
        <span>9 categories · 40+ individual settings</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22F58F]" />
          Changes save automatically
        </span>
      </div>
    </div>
  );
}