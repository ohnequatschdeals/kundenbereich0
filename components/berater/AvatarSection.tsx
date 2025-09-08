import Image from "next/image";

export default function AvatarSection() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-oqd-dark py-20 overflow-hidden">
      {/* arka plan glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-oqd-purple/20 via-oqd-dark to-oqd-pink/10 blur-3xl" />

      {/* avatar */}
      <Image
        src="/assets/avatar1.png"
        alt="KI-Beraterin"
        width={400}
        height={600}
        className="relative z-10 drop-shadow-[0_10px_35px_rgba(0,0,0,.6)]"
        priority
      />

      {/* başlık */}
      <h2 className="relative z-10 mt-6 text-3xl md:text-4xl font-bold bg-oqd-gradient bg-clip-text text-transparent text-center">
        Deine persönliche KI-Beraterin
      </h2>

      {/* kısa açıklama */}
      <p className="relative z-10 mt-2 text-center text-white/75 max-w-xl">
        Maßgeschneiderte Angebote – ehrlich, transparent, ohne Quatsch.
      </p>
    </section>
  );
}
