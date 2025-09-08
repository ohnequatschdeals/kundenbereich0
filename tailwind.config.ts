import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        // ANA TEMA → antrasit + mor-miks + logo aksanı
        bg:        "#0E0F1A",     // antrasit zemin
        surface:   "rgba(255,255,255,0.06)",
        outline:   "rgba(255,255,255,0.18)",
        brand:     "#E949BE",     // pembe-mor aksan (logo ile uyum)
        brand2:    "#28D8E3",     // turkuaz aksan
        textmuted: "rgba(255,255,255,0.72)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      boxShadow: {
        glow: "0 0 30px rgba(233,73,190,.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
