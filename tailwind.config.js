/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--surface-1) / <alpha-value>)",
        surface: "rgb(var(--surface-2) / <alpha-value>)",
        outline: "rgb(var(--outline) / <alpha-value>)",
        brand: "rgb(var(--brand-500) / <alpha-value>)",
        brandMuted: "rgb(var(--brand-400) / <alpha-value>)",
        text: "rgb(var(--text-1) / <alpha-value>)",
        textDim: "rgb(var(--text-2) / <alpha-value>)"
      },
      boxShadow: { glow: "0 0 24px rgba(var(--brand-500), var(--glow-opacity))" },
      borderRadius: { xl2: "1rem", xl3: "1.25rem" }
    }
  },
  plugins: []
};
