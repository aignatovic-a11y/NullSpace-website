import type { ReactNode } from 'react';
import { Icon } from '../Icon';

type NavItem = {
  label: string;
  icon: Parameters<typeof Icon>[0]['name'];
  active?: boolean;
};

const top: NavItem[] = [
  { label: 'Home', icon: 'sparkles' },
  { label: 'Inbox', icon: 'inbox' },
];

const commerce: NavItem[] = [
  { label: 'Products', icon: 'card' },
  { label: 'Customers', icon: 'users' },
];

const scheduling: NavItem[] = [
  { label: 'Calendar', icon: 'calendar', active: true },
  { label: 'Templates', icon: 'palette' },
];

const settings: NavItem[] = [{ label: 'Settings', icon: 'shield' }];

type Props = {
  children: ReactNode;
};

export function AppShellMockup({ children }: Props) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
      {/* Top bar */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-black px-3 py-2 sm:px-4 sm:py-3">
        <div className="hidden items-center sm:flex">
          <img
            src="/brand/logo-lockup.png"
            alt="NullSpace"
            className="block"
            style={{ height: 18, width: 'auto' }}
          />
        </div>
        <div className="mx-2 hidden h-5 w-px bg-white/10 sm:block" />
        <div className="flex flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
          <Icon name="sparkles" size={13} className="text-ink-subtle" />
          <span className="truncate text-[11px] text-ink-subtle">Search everywhere…</span>
          <span className="ml-auto hidden rounded border border-white/10 px-1.5 py-0.5 text-[9px] text-ink-subtle sm:inline">
            /
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-ink-subtle">
          <button className="relative inline-flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/5">
            <Icon name="inbox" size={13} />
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#FF3D7F]" />
          </button>
          <button className="hidden h-7 w-7 items-center justify-center rounded-full hover:bg-white/5 sm:inline-flex">
            <Icon name="shield" size={13} />
          </button>
          <button className="hidden h-7 w-7 items-center justify-center rounded-full hover:bg-white/5 sm:inline-flex">
            <Icon name="sparkles" size={13} />
          </button>
        </div>
        <div className="ml-1 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1 pr-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#A855F7] to-[#00E5FF] text-[10px] font-bold text-white">
            AS
          </span>
          <div className="hidden leading-tight sm:block">
            <p className="text-[11px] font-semibold text-white">Alice Smith</p>
            <p className="text-[9px] text-ink-subtle">Admin</p>
          </div>
        </div>
      </div>

      {/* Body: sidebar + content */}
      <div className="grid grid-cols-[44px_1fr] sm:grid-cols-[168px_1fr]">
        {/* Sidebar */}
        <aside className="border-r border-white/10 bg-black p-2 sm:p-3">
          <nav className="space-y-0.5">
            {top.map((n) => (
              <NavRow key={n.label} item={n} />
            ))}
          </nav>
          <SidebarGroup title="Commerce" items={commerce} />
          <SidebarGroup title="Scheduling" items={scheduling} />
          <SidebarGroup title="Settings" items={settings} />
        </aside>

        {/* Content slot */}
        <div className="bg-black">{children}</div>
      </div>
    </div>
  );
}

function SidebarGroup({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div className="mt-4">
      <p className="hidden px-2 pb-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink-dim sm:block">
        {title}
      </p>
      <nav className="space-y-0.5">
        {items.map((n) => (
          <NavRow key={n.label} item={n} />
        ))}
      </nav>
    </div>
  );
}

function NavRow({ item }: { item: NavItem }) {
  return (
    <button
      className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[11px] font-medium transition-colors ${
        item.active
          ? 'bg-[#A855F7] text-white'
          : 'text-ink-muted hover:bg-white/5 hover:text-white'
      }`}
    >
      <Icon name={item.icon} size={13} className="shrink-0" />
      <span className="hidden truncate sm:inline">{item.label}</span>
    </button>
  );
}