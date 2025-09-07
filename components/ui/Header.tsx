import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-outline/20">
      <div className="container-page flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="h-6 glow" />
          <span className="font-semibold tracking-tight">ohnequatschdeals</span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/registrieren">Registrieren</Link>
          <Link href="/kunden/dashboard">Kunden</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/berater">Berater</Link>
        </nav>
      </div>
    </header>
  );
}
