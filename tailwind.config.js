/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        man: ["Manrope", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
