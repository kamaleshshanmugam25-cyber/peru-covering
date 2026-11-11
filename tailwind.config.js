/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#450A18',
          deep: '#450A18',
          dark: '#2B0710',
          wine: '#2B0710',
          light: '#5C0F22',
          surface: '#380612',
          overlay: 'rgba(43, 7, 16, 0.85)',
        },
        gold: {
          DEFAULT: '#D4AF37',
          metallic: '#D4AF37',
          champagne: '#E8D6A5',
          light: '#F4E8C1',
          dark: '#AA820A',
          bronze: '#996515',
          muted: '#C5A059',
        },
        ivory: {
          DEFAULT: '#FFFDF7',
          pure: '#FFFDF7',
          soft: '#FAF9F6',
          warm: '#F7F4EB',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '"Lato"', 'system-ui', 'sans-serif'],
        body: ['"Lato"', '"Montserrat"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 4px 20px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 10px 30px rgba(212, 175, 55, 0.35)',
        'burgundy-lg': '0 10px 40px rgba(43, 7, 16, 0.5)',
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.3), 0 0 1px 1px rgba(212, 175, 55, 0.2)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4E8C1 50%, #AA820A 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFFDF7 50%, #D4AF37 100%)',
        'burgundy-gradient': 'linear-gradient(180deg, #2B0710 0%, #450A18 50%, #2B0710 100%)',
        'radial-burgundy': 'radial-gradient(ellipse at center, #5C0F22 0%, #2B0710 70%, #1A030A 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
