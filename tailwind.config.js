/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      wordSpacing: {
        wide: '0.5rem',
        wider: '1rem',
        widest: '1.5rem',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.word-spacing-wide': { wordSpacing: '0.5rem' },
        '.word-spacing-wider': { wordSpacing: '1rem' },
        '.word-spacing-widest': { wordSpacing: '1.5rem' },
      });
    }
  ],
}
