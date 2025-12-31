import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(0 0% 20%)',
        background: 'hsl(0 0% 7%)',
        foreground: 'hsl(0 0% 95%)',
        card: {
          DEFAULT: 'hsl(0 0% 95%)',
          foreground: 'hsl(0 0% 10%)',
        },
        primary: {
          DEFAULT: 'hsl(0 0% 95%)',
          foreground: 'hsl(0 0% 7%)',
        },
        accent: {
          DEFAULT: 'hsl(340 75% 55%)',
          foreground: 'hsl(0 0% 100%)',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
