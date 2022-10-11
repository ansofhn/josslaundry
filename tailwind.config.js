/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        textColor: "#565656",
        maroon: "#8C0F24",
        amber: "#FFC400",
        softblue: "#C8E8E8",
        green: "#1A555C",
        darkgreen: "#0B2528",
        nileblue: "#1A555C",
        heroend: "#43757a",
        middle: "#3c6f75", 
        yellowButton: "#FFC400"
      },

    },
  },
  plugins: [],
};