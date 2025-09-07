export default function LandingPage() {
  return (
    <section className="panel text-center py-20">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        <span className="text-gradient">Digital. Persönlich.<br/>Ohne Quatsch.</span>
      </h1>
      <p className="muted mt-6 max-w-2xl mx-auto">
        Ehrliche Beratung für Internet, Mobilfunk, Strom, Gas & Kredite – ohne versteckte Kosten.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="/registrieren" className="btn-pill btn-gradient">Angebote entdecken →</a>
        <a href="/berater" className="btn-pill btn-outline">Berater finden</a>
      </div>
    </section>
  );
}
