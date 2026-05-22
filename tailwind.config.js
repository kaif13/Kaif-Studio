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
        dark: "#080A0F",
        light: "#F7F8F4",
        gray: "#6D706A",
        brand: "#B8892E",
      },
    },
  },
  plugins: [],
};
