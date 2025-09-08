import clsx from "clsx";
import type { Offer, Badge } from "@/data/offers";

const badgeStyles: Record<Badge, string> = {
  "TOP-ANGEBOT": "from-pink-500 to-fuchsia-500",
  "EMPFEHLUNG": "from-cyan-400 to-emerald-400",
  "ÖKO-TARIF": "from-lime-400 to-emerald-500",
  "TOP-ZINSEN": "from-violet-400 to-sky-400",
};

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="panel glow relative overflow-hidden transition hover:-translate-y-0.5">
      {/* soft glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-30"
        style={{ background: "linear-gradient(90deg,#ff3d8d33,#7e3fff33,#00b4ff33)" }}
      />
      {/* badge */}
      {offer.badge && (
        <span
          className={clsx(
            "absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r",
            badgeStyles[offer.badge]
          )}
        >
          {offer.badge}
        </span>
      )}

      <div className="space-y-2 mt-8">
        <div className="text-sm muted">{offer.brand}</div>
        <h3 className="text-xl font-semibold">{offer.title}</h3>

        <div className="mt-2 flex items-end gap-2">
          <span className="text-3xl font-bold">{offer.price}</span>
          <span className="muted">{offer.unit}</span>
          {offer.oldPrice && (
            <span className="muted line-through ml-auto">{offer.oldPrice}</span>
          )}
        </div>

        <ul className="mt-4 space-y-2">
          {offer.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" className="shrink-0 opacity-80">
                <path fill="currentColor" d="M9 16.2 4.8 12 3.4 13.4 9 19 21 7 19.6 5.6z"/>
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <a href={offer.ctaHref} className="btn-pill btn-gradient glow inline-flex items-center gap-2">
            Zum Angebot
            <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m14 17 5-5-5-5v3H5v4h9z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
