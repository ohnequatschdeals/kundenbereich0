"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-base/80 border-b border-white/5">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center font-extrabold text-gradient text-xl">
          OhneQuatschDeals<span className="text-pink">.de</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text">
          <Link href="/#angebote" className="hover:text-aqua transition">Angebote</Link>
          <Link href="/berater" className="hover:text-aqua transition">Berater</Link>
          <Link href="/#warum" className="hover:text-aqua transition">Warum OQD?</Link>
          <Link href="/#kontakt" className="hover:text-aqua transition">Kontakt</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:inline-block rounded-full px-5 py-2 text-sm font-semibold border border-white/10 hover:border-aqua/60 hover:text-aqua transition">
            Login
          </Link>
          <Link href="/register" className="rounded-full px-5 py-2 text-sm font-semibold shadow-soft-glow bg-gradient-to-r from-aqua to-pink text-[#0a0c11] hover:shadow-ring-aqua transition">
            Jetzt beraten lassen
          </Link>
        </div>
      </div>
    </header>
  );
}
