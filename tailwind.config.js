/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "1Almost-White": "hsl(0, 0%, 98%)",
        "2Medium-Gray": "hsl(0, 0%, 41%)",
        "3Almost-Black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
