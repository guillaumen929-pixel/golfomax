/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#C1272D',
          dark: '#9E1F24',
          light: '#D94045',
        },
        bg: {
          primary: '#1C1C1E',
          surface: '#242424',
          elevated: '#2E2E2E',
          overlay: '#161618',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#999999',
          muted: '#555555',
        },
        border: {
          DEFAULT: '#2E2E2E',
          light: '#3A3A3A',
        }
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '0.05em' }],
        'display-lg': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1', letterSpacing: '0.04em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '0.04em' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      boxShadow: {
        'brand': '0 0 40px rgba(193, 39, 45, 0.3)',
        'brand-sm': '0 0 20px rgba(193, 39, 45, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
