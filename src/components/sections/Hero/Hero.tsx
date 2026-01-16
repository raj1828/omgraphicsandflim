export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-4xl text-[var(--color-cream)]">
          <p className="font-script text-3xl md:text-4xl text-[var(--color-gold)] mb-4">
            Your Dream Wedding Awaits
          </p>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide">
            Artistic Wedding Photography
          </h1>
        </div>
      </div>
    </section>
  );
}
