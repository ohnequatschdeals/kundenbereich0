export default function Hero() {
  return (
    <section className="hero-surface relative py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-gradient text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
          Digital. Persönlich.<br/> Ohne Quatsch.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[#A7AFC2]">
          Ehrliche Beratung für Internet, Mobilfunk, Strom, Gas & Kredite – ohne versteckte Kosten.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#angebote" className="rounded-full px-6 py-3 font-semibold shadow-soft-glow bg-gradient-to-r from-aqua to-pink text-[#0a0c11] hover:shadow-ring-aqua transition">
            Angebote entdecken
          </a>
          <a href="/berater" className="rounded-full px-6 py-3 font-semibold border border-white/10 text-text hover:border-white/20 hover:bg-white/5 transition">
            Berater finden
          </a>
        </div>
      </div>
    </section>
  );
}
