/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      theme1: {
        mainColor: "hsl(221, 14%, 31%)",
        numbers: "hsl(0, 0%, 100%)",
        field: "hsl(224, 36%, 15%)",
        fieldButtons: "		hsl(223, 31%, 20%)",
        button: "	hsl(30, 25%, 89%)",
        resetdel: "rgb(100, 113, 152)",
        gleich: "	rgb(208, 63, 47)",
      },
      theme2: {
        button: "",
      },
      theme3: {
        button: "",
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
    },
    extend: {},
  },
  plugins: [],
};
