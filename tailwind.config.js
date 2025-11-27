/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      fontSize: {
        'responsive-hero': ['clamp(2.5rem, 8vw, 13.8rem)', { lineHeight: '1.1' }],
        'responsive-subtitle': ['clamp(1.25rem, 3vw, 4rem)', { lineHeight: '1.4' }],
        'responsive-section': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.2' }],
        'responsive-body': ['clamp(0.875rem, 1.5vw, 1rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
};
