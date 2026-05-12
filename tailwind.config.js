/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#FFFFFF',
          muted: '#BFC5D1',
          subtle: '#8A92A1',
          dim: '#5B626E',
        },
        surface: {
          DEFAULT: '#000000',
          raised: '#070708',
          card: '#0A0A0C',
          border: '#1B1D24',
          borderStrong: '#3A3D48',
        },
        brand: {
          violet: '#A855F7',
          indigo: '#7C3AED',
          electric: '#3D5AFE',
          royal: '#1E40FF',
          cyan: '#00E5FF',
          emerald: '#22F58F',
          lime: '#D6FF3D',
          amber: '#FFB319',
          orange: '#FF5A1F',
          rose: '#FF3D7F',
          pink: '#FF66CC',
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        display: [
          '"Inter"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 8.5vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.05em' }],
        'display-xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.08', letterSpacing: '-0.045em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
      },
      maxWidth: {
        page: '1600px',
        prose: '70ch',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};