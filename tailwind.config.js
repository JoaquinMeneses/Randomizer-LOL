/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spiegel: ["Spiegel"],
        beaufort: ["BeaufortforLOL"],
      },
      colors: {
        primary: "#ECE2CF",
        secondary: "#000306",
        black_hextech: "#010A13",
        title: "#C89B3C",
        text: "#A09B8C",
        subtext: "#F0E6D2",
        border: "#C89B3C",
      },
    },
  },
  plugins: [],
};
