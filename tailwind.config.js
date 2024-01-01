/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spiegel: ["Spiegel"],
        beaufort: ["BeaufortforLOL"],
      },
      cursor: {
        default: "url(./assets//images/cursor.webp), auto",
        pointer: "url(./assets/images/cursor_pointer.webp), pointer",
      },
      boxShadow: {
        btn: "0 0px 10px 1px #F0E6D2",
      },
      colors: {
        blue: {
          1: "#CDFAFA",
          2: "#0AC8B9",
          3: "#0397AB",
          4: "#005A82",
          5: "#0A323C",
          6: "#091428",
          7: "#0A1428",
        },
        gold: {
          1: "#F0E6D2",
          2: "#C8AA6E",
          3: "#C8AA6E",
          4: "#C89B3C",
          5: "#785A28",
          6: "#463714",
          7: "#32281E",
        },
        grey: {
          1: "#A09B8C",
          1.5: "#5B5A56",
          2: "#3C3C41",
          3: "#1E2328",
          cool: "#1E282D",
          "hextech-black": "#010A13",
        },
        error: "#92192e",
      },
    },
  },
  plugins: [],
};
