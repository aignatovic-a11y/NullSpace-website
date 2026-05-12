import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  children?: ReactNode;
  className?: string;
  id?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: Omit<Props, 'children' | 'className' | 'id'>) {
  const reduce = useReducedMotion();
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {eyebrow && (
        <motion.span
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="chip"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`gradient-text max-w-3xl text-display-lg font-semibold text-balance ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`max-w-2xl text-base leading-relaxed text-ink-muted text-balance md:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export function Section({ id, className = '', children }: Props) {
  return (
    <section id={id} className={`container-page py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}