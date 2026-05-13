/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These will be mapped to the CSS variables in index.css
        bg: {
          base: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
          subtle: 'var(--bg-subtle)',
          overlay: 'var(--bg-overlay)',
        },
        border: {
          default: 'var(--border-default)',
          strong: 'var(--border-strong)',
          glow: 'var(--border-glow)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          primaryDim: 'var(--accent-primary-dim)',
          primaryMuted: 'var(--accent-primary-muted)',
          primaryGlow: 'var(--accent-primary-glow)',
        },
        status: {
          complete: 'var(--status-complete)',
          completeBg: 'var(--status-complete-bg)',
          revision: 'var(--status-revision)',
          revisionBg: 'var(--status-revision-bg)',
          pending: 'var(--status-pending)',
          pendingBg: 'var(--status-pending-bg)',
          exam: 'var(--status-exam)',
          examBg: 'var(--status-exam-bg)',
          active: 'var(--status-active)',
          activeBg: 'var(--status-active-bg)',
          football: 'var(--status-football)',
          gym: 'var(--status-gym)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          accent: 'var(--text-accent)',
          inverse: 'var(--text-inverse)',
        }
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
        '10': 'var(--space-10)',
        '12': 'var(--space-12)',
        '16': 'var(--space-16)',
        '20': 'var(--space-20)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      transitionTimingFunction: {
        smooth: 'var(--ease-smooth)',
        bounce: 'var(--ease-bounce)',
        snappy: 'var(--ease-snappy)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
        page: 'var(--duration-page)',
      }
    },
  },
  plugins: [],
}
