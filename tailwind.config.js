/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#090909',
          850: '#0c0c0c',
          800: '#111111',
          700: '#171717',
          600: '#202020',
          500: '#2a2a2a',
          400: '#3a3a3a',
        },
        accent: {
          DEFAULT: '#6366f1',
          soft: '#818cf8',
          cyan: '#22d3ee',
        },
        // Semantic tokens driven by CSS variables
        bg: 'var(--bg)',
        'bg-elevated': 'var(--bg-elevated)',
        surface: 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        'surface-2': 'var(--surface-2)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        content: 'var(--text)',
        'content-strong': 'var(--text-strong)',
        'content-muted': 'var(--text-muted)',
        'content-faint': 'var(--text-faint)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'badge-sheen': {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(220%) skewX(-12deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1s ease forwards',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'badge-sheen': 'badge-sheen 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
