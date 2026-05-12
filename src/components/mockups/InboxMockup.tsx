import { motion } from 'framer-motion';
import { Icon } from '../Icon';

type Thread = {
  name: string;
  preview: string;
  time: string;
  channel: 'whatsapp' | 'instagram' | 'mail' | 'sms';
  unread?: boolean;
  active?: boolean;
};

const threads: Thread[] = [
  { name: 'Sofia Martens', preview: 'Hey! Could I reschedule Tuesday\'s …', time: '2m', channel: 'whatsapp', active: true, unread: true },
  { name: 'Liam O\'Brien', preview: 'Just paid the invoice — thanks!', time: '14m', channel: 'mail' },
  { name: '@dance.studio.amst', preview: 'New booking from the link in bio …', time: '38m', channel: 'instagram', unread: true },
  { name: 'Marco Bianchi', preview: 'Confirming class at 18:30 tonight.', time: '1h', channel: 'sms' },
  { name: 'Hugo Janssen', preview: 'My card was declined, can you re-…', time: '3h', channel: 'mail' },
  { name: 'Aaliyah K.', preview: 'Sent payment receipt 👍', time: '5h', channel: 'whatsapp' },
];

const channelStyle: Record<Thread['channel'], { color: string; bg: string; label: string }> = {
  whatsapp: { color: 'text-emerald-300', bg: 'bg-emerald-500/15', label: 'WhatsApp' },
  instagram: { color: 'text-rose-300', bg: 'bg-rose-500/15', label: 'Instagram' },
  mail: { color: 'text-violet-300', bg: 'bg-violet-500/15', label: 'Email' },
  sms: { color: 'text-cyan-300', bg: 'bg-cyan-500/15', label: 'SMS' },
};

export function InboxMockup() {
  return (
    <div className="card ring-soft relative w-full overflow-hidden">
      <div className="flex items-center justify-between border-b border-surface-border bg-surface-raised px-4 py-3">
        <div className="flex items-center gap-2">
          <Icon name="inbox" size={16} className="text-brand-violet" />
          <span className="text-sm font-medium text-white">Unified inbox</span>
          <span className="rounded-full bg-brand-violet/20 px-2 py-0.5 text-[10px] font-medium text-brand-violet">
            12 unread
          </span>
        </div>
        <div className="flex gap-1.5">
          {Object.entries(channelStyle).map(([k, v]) => (
            <span key={k} className={`flex h-6 w-6 items-center justify-center rounded-md ${v.bg}`}>
              <Icon name={k as any} size={12} className={v.color} />
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1.3fr]">
        <div className="border-surface-border sm:border-r">
          {threads.map((t, i) => {
            const c = channelStyle[t.channel];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.35 }}
                className={`flex cursor-pointer items-start gap-3 border-b border-surface-border px-4 py-3 transition-colors ${
                  t.active ? 'bg-surface-raised' : 'hover:bg-surface-raised/60'
                }`}
              >
                <div
                  className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${c.bg} text-xs font-medium ${c.color}`}
                >
                  {t.name
                    .split(' ')
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join('')}
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-surface-card ${c.bg}`}
                  >
                    <Icon name={t.channel as any} size={9} className={c.color} />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium text-white">{t.name}</p>
                    <span className="shrink-0 text-[10px] text-ink-subtle">{t.time}</span>
                  </div>
                  <p className="truncate text-xs text-ink-muted">{t.preview}</p>
                </div>
                {t.unread && (
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-violet" />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="hidden flex-col sm:flex">
          <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-medium text-emerald-300">
                SM
              </div>
              <div>
                <p className="text-sm font-medium text-white">Sofia Martens</p>
                <p className="inline-flex items-center gap-1 text-[10px] text-emerald-300">
                  <Icon name="whatsapp" size={9} /> WhatsApp · open
                </p>
              </div>
            </div>
            <span className="chip">
              <Icon name="users" size={11} /> Assigned: Mariska
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-3 p-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-[80%] self-start rounded-2xl rounded-tl-md bg-surface-raised px-3 py-2 text-xs text-white"
            >
              Hey! Could I reschedule Tuesday's class to Thursday at the same time?
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-[80%] self-end rounded-2xl rounded-tr-md bg-brand-violet px-3 py-2 text-xs text-white shadow-lg shadow-brand-violet/30"
            >
              Of course Sofia — just moved you to Thu 18:30. Calendar updated ✨
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="inline-flex max-w-[80%] items-center gap-2 self-end rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-200"
            >
              <Icon name="check" size={12} /> Auto-confirmation sent · invoice rebilled
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}