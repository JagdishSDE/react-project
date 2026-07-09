/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
bgDark: "#0A0E17",      // Navbar
  bgDark2: "#1A2233",     // Page background
  cardBg: "#2B3648",      // Cards

      },
    },
  },
  plugins: [],
}