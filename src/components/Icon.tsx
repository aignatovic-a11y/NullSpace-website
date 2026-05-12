import type { ReactElement, SVGProps } from 'react';

type IconName =
  | 'calendar'
  | 'inbox'
  | 'globe'
  | 'card'
  | 'sparkles'
  | 'palette'
  | 'phone'
  | 'shield'
  | 'check'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'plus'
  | 'minus'
  | 'lightning'
  | 'users'
  | 'clock'
  | 'mail'
  | 'pin'
  | 'whatsapp'
  | 'instagram'
  | 'sms'
  | 'star'
  | 'play';

const paths: Record<IconName, ReactElement> = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M8 3v4M16 3v4" />
    </>
  ),
  inbox: (
    <>
      <path d="M22 13l-3-9H5L2 13" />
      <path d="M2 13h6l1.5 3h5L16 13h6v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M6.5 15h3M13.5 15h4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
      <path d="M19 15l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18c1.7 0 2.5-1.2 2.5-2.4 0-1-.6-1.6-.6-2.6 0-.9.8-1.7 1.7-1.7H17a4 4 0 0 0 4-4 9 9 0 0 0-9-7.3z" />
      <circle cx="7.5" cy="11" r="1.2" />
      <circle cx="10.5" cy="7.5" r="1.2" />
      <circle cx="15" cy="7.5" r="1.2" />
      <circle cx="17.5" cy="11" r="1.2" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8.5-8 9.5-4.6-1-8-5-8-9.5V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-up-right': <path d="M7 17L17 7M8 7h9v9" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  lightning: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 13.5c2.5 0 4.5 2 4.5 4.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 7l9 7 9-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s-7-7.2-7-12a7 7 0 0 1 14 0c0 4.8-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5l1.4-4.6A8 8 0 1 1 8.1 19l-4.6 1.5z" />
      <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5l1.5-1.5-2-1-1 .5c-1 0-2.5-1.5-2.5-2.5l.5-1-1-2-1.5 1.5c0 .3 .5 .5 .5 .5z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  sms: (
    <>
      <path d="M21 12c0 4.4-4 8-9 8a10 10 0 0 1-3.5-.6L3 21l1.7-4.6A7.8 7.8 0 0 1 3 12c0-4.4 4-8 9-8s9 3.6 9 8z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </>
  ),
  star: (
    <path d="M12 3l2.8 6 6.2.6-4.7 4.2 1.4 6-5.7-3.3-5.7 3.3 1.4-6L3 9.6l6.2-.6L12 3z" />
  ),
  play: <path d="M8 5l12 7-12 7V5z" />,
};

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 20, className = '', ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}