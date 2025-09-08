import "./globals.css";
import "../styles/design-tokens.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OhneQuatschDeals",
  description: "Ehrliche Beratung – Internet, Mobilfunk, Strom, Gas & Kredite.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
