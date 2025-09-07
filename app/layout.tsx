import "./globals.css";
import "../styles/design-tokens.css";
import { Header } from "@/components/ui/Header";

export const metadata = { title: "OhneQuatschDeals", description: "Einheitliches, sauberes UI – OQD" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main className="container-page py-8">{children}</main>
      </body>
    </html>
  );
}
