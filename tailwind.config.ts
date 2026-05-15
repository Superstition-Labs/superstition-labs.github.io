import typography from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        'accent-hot': 'rgb(var(--c-accent-hot) / <alpha-value>)',
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        'bg-deep': 'rgb(var(--c-bg-deep) / <alpha-value>)',
        'bg-elev': 'rgb(var(--c-bg-elev) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)',
        'fg-dim': 'rgb(var(--c-fg-dim) / <alpha-value>)',
        'fg-soft': 'rgb(var(--c-fg-soft) / <alpha-value>)',
        grid: 'rgb(var(--c-grid) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        signal: 'rgb(var(--c-signal) / <alpha-value>)',
        steel: 'rgb(var(--c-steel) / <alpha-value>)',
        warn: 'rgb(var(--c-warn) / <alpha-value>)',
      },
      fontFamily: {
        body: 'var(--font-body)',
        display: 'var(--font-display)',
        mono: 'var(--font-mono)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 3.2s ease-in-out infinite',
        scan: 'scan 6s linear infinite',
        'tick-blink': 'tick-blink 1.6s steps(2, end) infinite',
        twinkle: 'twinkle 3.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-110%)' },
          '100%': { transform: 'translateY(110%)' },
        },
        'tick-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
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
