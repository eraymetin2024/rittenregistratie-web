/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        merk: { DEFAULT: '#2F6BFF', dark: '#1E4FD6', light: '#5B8BFF' },
        violet: { DEFAULT: '#6C4DFF', dark: '#5536E0' },
        teal: '#0EA5A5',
        oranje: '#FF8A3D',
        goud: '#F5B400',
        groen: '#16A34A',
        ink: '#0B1020',
        zacht: '#64748B',
        mist: '#F4F6FB',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { content: '1160px' },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15,16,32,0.18)',
        glow: '0 16px 50px -10px rgba(47,107,255,0.45)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};
