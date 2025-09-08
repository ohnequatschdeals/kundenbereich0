"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline/20 bg-background/75 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-gradient font-extrabold tracking-tight text-xl sm:text-2xl">
            OhneQuatschDeals
          </span>
          <span className="text-brandMuted font-semibold text-sm">.de</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-brand">Home</Link>
          <Link href="/angebote" className="hover:text-brand">Angebote</Link>
          <Link href="/berater" className="hover:text-brand">Berater</Link>
          <Link href="/warum-wir" className="hover:text-brand">Warum wir?</Link>
          <Link href="/login" className="hover:text-brand">Login</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/kontakt" className="btn-pill btn-outline hidden sm:inline-block">
            Kontakt
          </Link>
          <Link href="/berater" className="btn-pill btn-gradient glow">
            Jetzt beraten lassen
          </Link>
        </div>
      </div>
    </header>
  );
}
