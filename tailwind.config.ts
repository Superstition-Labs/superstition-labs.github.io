import typography from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        'accent-warm': 'rgb(var(--c-accent-warm) / <alpha-value>)',
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        'bg-elev': 'rgb(var(--c-bg-elev) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)',
        'fg-dim': 'rgb(var(--c-fg-dim) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
      },
      fontFamily: {
        body: 'var(--font-body)',
        display: 'var(--font-display)',
        mono: 'var(--font-mono)',
      },
      animation: {
        flicker: 'flicker 4s linear infinite',
        'pulse-soft': 'pulse-soft 3.2s ease-in-out infinite',
        scan: 'scan 5s linear infinite',
        twinkle: 'twinkle 3.5s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.55' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-110%)' },
          '100%': { transform: 'translateY(110%)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.95' },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
