import OfferCard from "@/components/ui/OfferCard";
import { offers } from "@/data/offers";

export default function Premium() {
  return (
    <section className="container-page py-14">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient">Premium-Angebote</h2>
        <p className="muted mt-2">Exklusive Deals mit den besten Konditionen – nur bei uns verfügbar.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {offers.map(o => <OfferCard key={o.id} offer={o} />)}
      </div>
    </section>
  );
}
