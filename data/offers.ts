export type Badge = "TOP-ANGEBOT" | "EMPFEHLUNG" | "ÖKO-TARIF" | "TOP-ZINSEN";

export type Offer = {
  id: string;
  brand: string;
  title: string;
  price: string;
  oldPrice?: string;
  unit: string;
  features: string[];
  badge?: Badge;
  ctaHref: string;
};

export const offers: Offer[] = [
  {
    id: "vf-1000",
    brand: "Vodafone",
    title: "Red Internet 1000 Cable",
    price: "29,99€",
    oldPrice: "59,99€",
    unit: "/Monat",
    features: [
      "1000 Mbit/s Download",
      "50 Mbit/s Upload",
      "Telefon-Flat",
      "6 Monate kostenlos"
    ],
    badge: "TOP-ANGEBOT",
    ctaHref: "#"
  },
  {
    id: "1und1-250",
    brand: "1&1",
    title: "DSL 250 Komplett-Paket",
    price: "19,99€",
    oldPrice: "39,99€",
    unit: "/Monat",
    features: [
      "250 Mbit/s Download",
      "Telefon-Flat",
      "WLAN-Router inklusive",
      "Keine Grundgebühr"
    ],
    badge: "EMPFEHLUNG",
    ctaHref: "#"
  },
  {
    id: "smava",
    brand: "Smava",
    title: "Sofortkredit Premium",
    price: "2,9%",
    oldPrice: "4,9%",
    unit: " eff. Jahreszins",
    features: [
      "Bis 120.000€",
      "Sofortige Zusage",
      "Flexible Laufzeit",
      "Kostenlose Sondertilgung"
    ],
    badge: "TOP-ZINSEN",
    ctaHref: "#"
  },
  {
    id: "eon-kombi",
    brand: "E.ON",
    title: "Strom & Gas Kombi",
    price: "24,99€",
    oldPrice: "34,99€",
    unit: "/Monat Grundpreis",
    features: [
      "100% Ökostrom",
      "Klimaneutrales Gas",
      "12 Monate Preisgarantie",
      "150€ Bonus"
    ],
    badge: "ÖKO-TARIF",
    ctaHref: "#"
  }
];
