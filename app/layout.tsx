import "./globals.css";
import Header from "@/components/layout/Header";
import type { ReactNode } from "react";

export const metadata = {
  title: "OhneQuatschDeals",
  description: "Ehrliche Beratung – Ohne Quatsch."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-base text-text">
        <Header />
        {children}
      </body>
    </html>
  );
}
