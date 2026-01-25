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
        // 1. Off-Black & Off-White (Easier on the eyes, premium feel)
        dark: "#050505",
        light: "#FAFAFA",

        // 2. The Professional Gray
        gray: "#737373",

        // 3. YOUR ACCENT COLOR (Electric Blue)
        // Use this ONLY for buttons and important links
        brand: "#2563EB",
      },
    },
  },
  plugins: [],
};
