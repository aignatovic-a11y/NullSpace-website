import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';

const nav = [
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/8 bg-black/55 backdrop-blur-2xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Logo height={28} withMark={false} />

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-base font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-ink-muted hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link to="/contact" className="btn-accent !px-5 !py-2.5 text-sm">
            Start for free
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-3.5 w-5 flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-white transition-transform ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-transform ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden"
          >
            <div className="border-t border-white/10 bg-black/85 backdrop-blur-2xl">
              <div className="container-wide flex flex-col gap-1 py-6">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3.5 text-lg font-medium ${
                        isActive
                          ? 'bg-white/5 text-white'
                          : 'text-ink-muted hover:bg-white/5 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-4 border-t border-white/10 pt-4">
                  <Link to="/contact" onClick={() => setOpen(false)} className="btn-accent w-full justify-center">
                    Start for free
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}