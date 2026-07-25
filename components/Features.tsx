import { Mountain, Sparkles, Package as PackageIcon, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Mountain,
    title: 'Northern Areas Trips',
    description:
      'Explore the breathtaking valleys of Skardu, Hunza, Neelum Valley, Kaghan & Naran with expert local guides.',
    items: ['Skardu', 'Hunza', 'Neelum Valley', 'Kaghan & Naran'],
  },
  {
    icon: Sparkles,
    title: 'Specials',
    description:
      'Tailored experiences for every occasion — from romantic honeymoons to seamless corporate getaways.',
    items: ['Customized Packages', 'Honeymoon Tours', 'Corporate Groups'],
  },
  {
    icon: PackageIcon,
    title: 'Packages',
    description:
      'Flexible options for every budget, from value-packed group tours to fully bespoke luxury itineraries.',
    items: ['Budget-Friendly', 'Premium Luxury', 'Tailor-made Itineraries'],
  },
];

export default function Features() {
  return (
    <section id="categories" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            What We Offer
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-5xl">
            Curated Categories for{' '}
            <span className="text-gradient-gold">Every Traveler</span>
          </h2>
          <p className="mt-5 text-base text-slate-400">
            Whether you seek adventure, romance, or a team retreat — we have a
            journey designed just for you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition-all duration-500 hover:border-amber-400/60 hover:shadow-gold"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/0 blur-3xl transition-all duration-500 group-hover:bg-amber-500/15" />

                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold-gradient shadow-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-7 w-7 text-charcoal-950" strokeWidth={2} />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-bold text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {cat.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#packages"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-amber-300 transition-colors hover:text-amber-200"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
