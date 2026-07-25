import { Clock, MapPin, ArrowRight, Star } from 'lucide-react';
import { type Package } from '@/lib/packages';

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-card transition-all duration-500 hover:border-amber-400/50 hover:shadow-gold">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${pkg.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

        {/* Tag */}
        <span className="absolute left-4 top-4 rounded-full bg-gold-gradient px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-charcoal-950 shadow-gold">
          {pkg.tag}
        </span>

        {/* Price */}
        <div className="absolute bottom-4 right-4 rounded-lg glass border border-gold/30 px-3 py-1.5 text-right">
          <div className="text-[0.6rem] uppercase tracking-wider text-slate-400">
            From
          </div>
          <div className="font-serif text-sm font-bold text-gradient-gold">
            {pkg.price}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <MapPin className="h-3.5 w-3.5 text-amber-400" />
          {pkg.location}
        </div>

        <h3 className="mt-3 font-serif text-xl font-bold text-white transition-colors group-hover:text-amber-200">
          {pkg.title}
        </h3>

        <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-amber-400" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            4.9
          </span>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {pkg.highlights.map((h) => (
            <li
              key={h}
              className="rounded-full border border-gold/20 bg-white/[0.03] px-3 py-1 text-[0.7rem] text-slate-300"
            >
              {h}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-6 flex items-center justify-between rounded-full border border-gold/30 bg-white/[0.03] px-5 py-3 text-sm font-medium text-amber-100 transition-all hover:bg-amber-400/10 hover:shadow-gold"
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
