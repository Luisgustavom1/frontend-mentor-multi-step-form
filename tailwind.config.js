import theme from "./theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
};
