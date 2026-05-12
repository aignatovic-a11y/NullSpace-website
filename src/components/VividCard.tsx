import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Variant =
  | 'orange'
  | 'electric'
  | 'violet'
  | 'lime'
  | 'rose'
  | 'cyan'
  | 'amber';

const variantStyles: Record<Variant, { bg: string; text: string; accent: string; ring: string }> = {
  orange: {
    bg: 'bg-[#FF5A1F]',
    text: 'text-black',
    accent: 'bg-black text-[#FF5A1F]',
    ring: 'ring-1 ring-black/10',
  },
  electric: {
    bg: 'bg-[#3D5AFE]',
    text: 'text-white',
    accent: 'bg-white text-[#3D5AFE]',
    ring: 'ring-1 ring-white/10',
  },
  violet: {
    bg: 'bg-[#A855F7]',
    text: 'text-white',
    accent: 'bg-white text-[#A855F7]',
    ring: 'ring-1 ring-white/10',
  },
  lime: {
    bg: 'bg-[#D6FF3D]',
    text: 'text-black',
    accent: 'bg-black text-[#D6FF3D]',
    ring: 'ring-1 ring-black/10',
  },
  rose: {
    bg: 'bg-[#FF3D7F]',
    text: 'text-white',
    accent: 'bg-white text-[#FF3D7F]',
    ring: 'ring-1 ring-white/10',
  },
  cyan: {
    bg: 'bg-[#00E5FF]',
    text: 'text-black',
    accent: 'bg-black text-[#00E5FF]',
    ring: 'ring-1 ring-black/10',
  },
  amber: {
    bg: 'bg-[#FFB319]',
    text: 'text-black',
    accent: 'bg-black text-[#FFB319]',
    ring: 'ring-1 ring-black/10',
  },
};

type Props = {
  variant: Variant;
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  className?: string;
};

export function VividCard({
  variant,
  eyebrow,
  title,
  body,
  footer,
  size = 'md',
  children,
  className = '',
}: Props) {
  const v = variantStyles[variant];
  const pad =
    size === 'lg' ? 'p-10 md:p-14' : size === 'sm' ? 'p-6 md:p-7' : 'p-8 md:p-10';
  const titleSize =
    size === 'lg' ? 'text-4xl md:text-6xl' : size === 'sm' ? 'text-2xl md:text-3xl' : 'text-3xl md:text-5xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative overflow-hidden rounded-3xl ${v.bg} ${v.text} ${v.ring} ${pad} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${v.accent}`}
        >
          {eyebrow}
        </span>
      )}
      <h3
        className={`mt-4 font-bold leading-[1.05] tracking-tight ${titleSize}`}
      >
        {title}
      </h3>
      {body && <p className="mt-4 max-w-prose text-base leading-relaxed opacity-85 md:text-lg">{body}</p>}
      {children}
      {footer && <div className="mt-6">{footer}</div>}
    </motion.div>
  );
}