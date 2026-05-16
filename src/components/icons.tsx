import type { SVGProps } from 'react';

type I = SVGProps<SVGSVGElement>;
const base = (p: I) => ({
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...p,
});

export const ArrowRight = (p: I) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);
export const ArrowLeft = (p: I) => (
  <svg {...base(p)}>
    <path d="M19 12H5M11 19l-7-7 7-7" />
  </svg>
);
export const HomeIcon = (p: I) => (
  <svg {...base(p)}>
    <path d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5" />
  </svg>
);
export const Flask = (p: I) => (
  <svg {...base(p)}>
    <path d="M9 3h6M10 3v6l-5 9.5A2 2 0 0 0 6.8 21h10.4a2 2 0 0 0 1.8-3.5L14 9V3" />
    <path d="M7.5 15h9" />
  </svg>
);
export const Info = (p: I) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);
export const Mail = (p: I) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const Phone = (p: I) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
export const Pin = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const Cart = (p: I) => (
  <svg {...base(p)}>
    <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L22 8H6" />
    <circle cx="10" cy="20.5" r="1.4" />
    <circle cx="18" cy="20.5" r="1.4" />
  </svg>
);
export const Heart = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 20s-7-4.4-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 19 10c0 5.6-7 10-7 10Z" />
  </svg>
);
export const Search = (p: I) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.6-3.6" />
  </svg>
);
export const Plus = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const Minus = (p: I) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
  </svg>
);
export const Close = (p: I) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const Chevron = (p: I) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const Star = (p: I) => (
  <svg {...base({ fill: 'currentColor', stroke: 'none', ...p })}>
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 21.3 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
  </svg>
);
export const Shield = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v6c0 5 3.4 8 7 9 3.6-1 7-4 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const Snowflake = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" />
    <path d="M9 4l3 2 3-2M9 20l3-2 3 2" />
  </svg>
);
export const Truck = (p: I) => (
  <svg {...base(p)}>
    <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);
export const Lock = (p: I) => (
  <svg {...base(p)}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);
export const Check = (p: I) => (
  <svg {...base(p)}>
    <path d="m5 12 5 5L20 6" />
  </svg>
);
export const Share = (p: I) => (
  <svg {...base(p)}>
    <circle cx="6" cy="12" r="2.4" />
    <circle cx="18" cy="6" r="2.4" />
    <circle cx="18" cy="18" r="2.4" />
    <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
  </svg>
);
export const Sparkle = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    <path d="M6.5 6.5 9 9M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />
  </svg>
);
export const Scale = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 4v16M7 7h10M5 7l-2.5 6h5L5 7ZM19 7l-2.5 6h5L19 7ZM8 20h8" />
  </svg>
);
export const Whatsapp = (p: I) => (
  <svg {...base({ fill: 'currentColor', stroke: 'none', ...p })}>
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-5.6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.5 4c2.7 1 2.7.7 3.2.7a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3Z" />
  </svg>
);
export const Instagram = (p: I) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
);
export const Facebook = (p: I) => (
  <svg {...base(p)}>
    <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v8h3v-8h2.2l.8-3H14V8.5c0-.3.2-.5.5-.5Z" />
  </svg>
);
export const User = (p: I) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M5 20c1.2-3.4 4-5 7-5s5.8 1.6 7 5" />
  </svg>
);
