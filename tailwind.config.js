/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      theme1: {
        mainColor: "hsl(221, 14%, 31%)",
        pureWhite: "rgba(255, 255, 255, 1)",
        field: "rgba(24, 31, 51, 1)",
        fieldButtons: " rgba(36, 45, 68, 1)",
        digit: "rgba(67, 74, 89, 1)",
        button: "rgba(234, 227, 220, 1)",
        resetdel: "rgba(100, 113, 152, 1)",
        gleich: "rgba(208, 63, 47, 1)",
        digitHover: "rgb(255, 255, 254)",
        resetdelHover: "rgba(162, 178, 225, 1)",
        gleichHover: "rgba(249, 107, 91, 1)",
      },
      theme2: {
        mainColor: "rgba(230, 230, 230, 1)",
        pureBlack: "rgba(54, 54, 44, 1)",
        pureWhite: "rgba(255, 255, 255, 1)",
        field: "rgba(238, 238, 238, 1)",
        fieldButtons: "rgba(210, 205, 205, 1)",
        button: "rgba(229, 228, 225, 1)",
        resetdel: "rgba(55, 129, 135, 1)",
        gleich: "rgba(200, 84, 2, 1)",
        digitHover: "rgba(255, 255, 255, 1)",
        resetdelHover: "rgba(98, 181, 188, 1)",
        gleichHover: "rgba(255, 138, 56, 1)",
      },
      theme3: {
        mainColor: "rgba(23, 6, 42, 1)",
        yellow: "rgba(255, 229, 61, 1)",
        pureBlack: "rgba(26, 35, 39, 1)",
        pureWhite: "rgba(255, 255, 255, 1)",
        field: "rgba(30, 9, 54, 1)",
        fieldButtons: "rgba(30, 9, 54, 1)",
        button: "rgba(51, 28, 77, 1)",
        resetdel: "rgba(86, 7, 124, 1)",
        gleich: "rgba(0, 222, 208, 1)",
        digitHover: "rgba(108, 52, 172, 1)",
        resetdelHover: "rgba(134, 49, 175, 1)",
        gleichHover: " rgba(147, 255, 248, 1)",
      },
    },
    fontSize: {
      h1: [
        "56px",
        {
          fontWeight: "700",
          lineHeight: "51.52px",
          letterSpacing: "-0.93px",
        },
      ],
      h2: [
        "40px",
        {
          fontWeight: "700",
          lineHeight: "36.38px",
          letterSpacing: "-0.67px",
        },
      ],
      reset: [
        "28px",
        {
          fontWeight: "700",
          lineHeight: "25.76px",
          letterSpacing: "-0.47px",
        },
      ],
      calc: [
        "32px",
        {
          fontWeight: "700",
          lineHeight: "29.44px",
          letterSpacing: "-0.53px",
        },
      ],
      theme: [
        "12px",
        {
          fontWeight: "700",
          lineHeight: "11.04px",
          letterSpacing: "1px",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
