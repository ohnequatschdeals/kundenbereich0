/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        base:  "#121521",
        base2: "#141722",
        text:  "#E9ECF1",
        mute:  "#A7AFC2",
        aqua:  "#00F5D4",
        pink:  "#FF4D94"
      },
      boxShadow: {
        "soft-glow": "0 0 0 0.5px rgba(255,255,255,0.06), 0 8px 30px rgba(0,0,0,0.35)",
        "ring-aqua": "0 0 25px rgba(0,245,212,0.35)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(60rem 40rem at 20% 0%, rgba(0,245,212,0.08), transparent 60%), radial-gradient(50rem 30rem at 80% 10%, rgba(255,77,148,0.08), transparent 60%)"
      }
    }
  },
  plugins: []
}
