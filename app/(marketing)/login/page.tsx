export default function LoginPage() {
  return (
    <section className="panel max-w-md mx-auto">
      <h1 className="title">Login</h1>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded-xl2 bg-surface/70 border border-outline/40 p-3" placeholder="E-Mail" />
        <input type="password" className="w-full rounded-xl2 bg-surface/70 border border-outline/40 p-3" placeholder="Passwort" />
        <button className="w-full glow rounded-xl2 bg-brand/90 hover:bg-brand px-4 py-3 font-medium">Einloggen</button>
      </form>
      <p className="muted mt-4 text-sm">Noch kein Konto? <a className="underline" href="/registrieren">Registrieren</a></p>
    </section>
  );
}
