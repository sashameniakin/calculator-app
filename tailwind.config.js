/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
    },
    extend: {},
  },
  plugins: [],
};
