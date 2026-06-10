/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Outfit"', "sans-serif", '"Space Grotesk"'],
        body: ['"Plus Jakarta Sans"', '"Inter"', "sans-serif"],
      },
      colors: {
        dark: "#181817",
        light: "#F1EEE8",
        gray: "#68655F",
        beige: "#D8D1C5",
        brand: "#B18445",
        black: "#181817",
        white: "#F8F6F1",
      },
    },
  },
  plugins: [],
};
