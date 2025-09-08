export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center
                        bg-gradient-to-br from-purpleDark via-background to-anthrazit px-4">
      <div className="container-page">
        <h1 className="text-gradient text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
          Digital. Persönlich.<br/>Ohne Quatsch.
        </h1>

        <p className="mt-6 text-lg md:text-xl muted max-w-3xl mx-auto">
          Ehrliche Beratung für Internet, Mobilfunk, Strom, Gas & Kredite – ohne versteckte Kosten.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="/angebote" className="btn-pill btn-gradient hover:scale-[1.03]">
            Angebote entdecken
          </a>
          <a
            href="/berater"
            className="btn-pill btn-outline hover:shadow-[0_0_22px_rgba(0,180,255,0.55)] hover:text-white/90"
          >
            Berater finden
          </a>
        </div>
      </div>
    </section>
  );
}
