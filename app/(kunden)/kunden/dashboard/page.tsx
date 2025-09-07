export default function KundenDashboard() {
  return (
    <section className="panel">
      <h1 className="title">Kundenbereich</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="panel">Profil</div>
        <div className="panel">Dokumente</div>
        <div className="panel">Benachrichtigungen</div>
      </div>
    </section>
  );
}
