import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const cols: { title: string; links: { label: string; to: string; external?: boolean }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/legal/privacy' },
      { label: 'General Terms', to: '/legal/terms' },
      { label: 'Special Terms', to: '/legal/special-terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-surface-border bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-violet/40 to-transparent"
      />
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo height={32} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              The all-in-one platform that handles scheduling, billing and client
              communication — so you can spend your day on the work that matters.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-ink-subtle">
              <span className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
                All systems operational
              </span>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) =>
                  l.external ? (
                    <li key={l.label}>
                      <a
                        href={l.to}
                        className="text-sm text-ink-muted transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-ink-muted transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li>
                <a
                  href="mailto:contact@nullspace.cloud"
                  className="transition-colors hover:text-white"
                >
                  contact@nullspace.cloud
                </a>
              </li>
              <li>De Hems 10, 7522 NL Enschede</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-surface-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-ink-subtle">
            © {new Date().getFullYear()} NullSpace. All rights reserved.
          </p>
          <p className="text-xs text-ink-subtle">
            Built for the operators who'd rather be building than billing.
          </p>
        </div>
      </div>
    </footer>
  );
}