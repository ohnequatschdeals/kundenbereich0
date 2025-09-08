export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oqd: {
          dark: "#0E0F1A",
          purple: "#7E3FFF",
          pink: "#FF3F87",
          cyan: "#00FFC8",
          gradient1: "rgb(233,73,190)",
          gradient2: "rgb(0,255,200)",
        },
      },
      backgroundImage: {
        "oqd-gradient": "linear-gradient(90deg, #FF3F87 0%, #7E3FFF 50%, #00FFC8 100%)",
      },
    },
  },
  plugins: [],
}
