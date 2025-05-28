// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        backdropBlur: {
          xs: '2px',
        },
        borderOpacity: {
          20: '0.2',
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        lobster: ["var(--font-lobster)", "cursive"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        'btn-bg': 'var(--btn-bg)',
        'btn-text': 'var(--btn-text)',
        'btn-hover': 'var(--btn-hover)',
         primary: '#3b82f6',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
  ],
};