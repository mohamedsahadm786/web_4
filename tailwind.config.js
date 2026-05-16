/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-vivid': 'hsl(var(--primary-vivid) / <alpha-value>)',
        'accent-cool': 'hsl(var(--accent-cool) / <alpha-value>)',
        ink: 'hsl(var(--ink) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
        xl2: '1.75rem',
      },
      maxWidth: {
        shell: '1240px',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(28,24,20,.08), 0 8px 24px -12px rgba(28,24,20,.12)',
        lift: '0 12px 40px -12px rgba(28,24,20,.22)',
        glow: '0 0 0 1px hsl(var(--primary) / .25), 0 12px 40px -8px hsl(var(--primary) / .45)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-22px,0)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulseglow: {
          '0%,100%': { boxShadow: '0 0 0 0 hsl(var(--primary) / .45)' },
          '50%': { boxShadow: '0 0 0 14px hsl(var(--primary) / 0)' },
        },
        shine: {
          '0%': { transform: 'translateX(-130%) skewX(-20deg)' },
          '60%,100%': { transform: 'translateX(230%) skewX(-20deg)' },
        },
        aurora: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(6%,-8%,0) scale(1.15)' },
          '66%': { transform: 'translate3d(-7%,5%,0) scale(.92)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-speed,38s) linear infinite',
        'marquee-rev': 'marquee-rev var(--marquee-speed,38s) linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
        pulseglow: 'pulseglow 2.6s ease-in-out infinite',
        shine: 'shine 1.1s ease-out',
        aurora: 'aurora 22s ease-in-out infinite',
        'fade-up': 'fade-up .7s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
