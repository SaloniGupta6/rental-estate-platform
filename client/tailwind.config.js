/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        cream: "#FDFDFD",
        darkbg: "#1A1A1A",
      },
      fontFamily: {
        title: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      }
    },
  },
  plugins: [],
}