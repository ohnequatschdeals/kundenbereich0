export function OfferCard({ provider, title, price, oldPrice, features=[], badge }: {
  provider:string; title:string; price:string; oldPrice?:string; features?:string[]; badge?:string;
}) {
  return (
    <div className="panel p-6">
      {badge && <span className="text-xs px-3 py-1 rounded-full bg-surface/70 border border-outline/30">{badge}</span>}
      <div className="mt-6">
        <div className="muted text-sm">{provider}</div>
        <h3 className="font-semibold mt-1">{title}</h3>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {oldPrice && <span className="muted line-through">{oldPrice}</span>}
        </div>
        <ul className="mt-4 space-y-1 text-sm">
          {features.map((f,i)=><li key={i}>✔ {f}</li>)}
        </ul>
        <a href="#" className="btn-pill btn-gradient mt-6 inline-block">Zum Angebot</a>
      </div>
    </div>
  );
}
