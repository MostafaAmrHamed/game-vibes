/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald"],
      },
      colors: {
        background: "#DADADA",
        primary: {
          1: "#F2F2F2",
          2: "#1F2126",
          3: "#000080",
        },
      },
    },
  },
  plugins: [],
};
