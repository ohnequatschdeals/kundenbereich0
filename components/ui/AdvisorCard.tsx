export function AdvisorCard({ name, city, status="ONLINE", rating=4, img="/assets/berater.png" }: {
  name:string; city:string; status?: "ONLINE"|"OFFLINE"; rating?:number; img?:string;
}) {
  return (
    <div className="panel p-6 text-center">
      <img src={img} alt={name} className="mx-auto h-20 w-20 object-cover rounded-full border border-outline/30" />
      <h3 className="font-semibold mt-4">{name}</h3>
      <p className="muted text-sm">{city}</p>
      <span className="text-xs px-3 py-1 rounded-full mt-2 inline-block bg-surface/70 border border-outline/30">{status}</span>
      <div className="mt-2 text-sm">{"★".repeat(rating)}{"☆".repeat(5-rating)}</div>
      <a href="/berater" className="btn-pill btn-outline mt-4 inline-block">Kontakt</a>
    </div>
  );
}
