/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryBlue": "#4353AA",
        "customBlack": "#34364A",
        "bgColor": "#E5E9F2",
        "bgInput": "#d1d1d1",
      }
    },
  },
  plugins: [],
}

