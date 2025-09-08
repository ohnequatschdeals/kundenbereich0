/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0e0f1a",
        anthrazit: "#1f1f2d",
        purpleDark: "#1a0e23",
        outline: "rgb(42 44 53)",
        textColor: "rgb(235 239 245)",
        textDim: "rgb(160 168 180)",
        brand: "#00b4ff",
      },
      borderRadius: { xl2: "1rem" },
    },
  },
  plugins: [],
};
