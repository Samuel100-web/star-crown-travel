import { packages } from '@/lib/packages';
import PackageCard from './PackageCard';

export default function PackageGrid() {
  return (
    <section id="packages" className="relative py-24 sm:py-32">
      {/* Subtle backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Featured Tours
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-5xl">
            Explore Our{' '}
            <span className="text-gradient-gold">Signature Packages</span>
          </h2>
          <p className="mt-5 text-base text-slate-400">
            Handcrafted itineraries across the most stunning landscapes of
            Northern Pakistan. Prices are starting points — every journey can be
            tailored to you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
