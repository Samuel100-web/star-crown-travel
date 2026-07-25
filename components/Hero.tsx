import { ArrowRight, Phone, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full animate-slow-zoom bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/14697182/pexels-photo-14697182.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/55 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-transparent to-transparent" />
      </div>

      {/* Decorative gold orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 py-32 text-center sm:px-8">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gold bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-amber-200 backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          Premium Northern Pakistan Tours
        </div>

        <h1 className="animate-fade-up delay-100 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
          Experience the Majesty of the North
          <span className="mt-3 block text-gradient-gold">with Star Crown Travel</span>
        </h1>

        <p className="animate-fade-up delay-200 mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Curated journeys to Skardu, Hunza, Neelum Valley, Kaghan &amp; Naran.
          Group, Couple, and Corporate packages crafted for unforgettable,
          luxurious escapes.
        </p>

        <div className="animate-fade-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#packages"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-charcoal-950 shadow-gold transition-all hover:scale-[1.03] sm:w-auto"
          >
            Explore Packages
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-white/5 px-8 py-4 text-sm font-semibold text-amber-100 backdrop-blur-sm transition-all hover:bg-amber-400/10 hover:shadow-gold sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Contact Us
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in delay-500 mt-16 grid grid-cols-3 gap-4 border-t border-gold/30 pt-8">
          {[
            { value: '500+', label: 'Happy Travelers' },
            { value: '15+', label: 'Destinations' },
            { value: '8 yrs', label: 'Experience' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-2xl font-bold text-gradient-gold sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-400 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-amber-400/50 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-amber-400" />
        </div>
      </div>
    </section>
  );
}
