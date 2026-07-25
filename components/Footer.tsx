import { Crown, Phone, Mail, Facebook, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-charcoal-950/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient shadow-gold">
                <Crown className="h-5 w-5 text-charcoal-950" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold text-gradient-gold">
                  Star Crown
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                  Travel
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Premium travel experiences across Northern Pakistan. We craft
              unforgettable journeys to Skardu, Hunza, Neelum Valley, Kaghan &amp;
              Naran — for groups, couples, and corporate teams.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Mail, label: 'Email' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-white/[0.03] text-amber-200 transition-all hover:bg-amber-400/10 hover:shadow-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Categories', href: '#categories' },
                { label: 'Packages', href: '#packages' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 transition-colors hover:text-amber-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <div>
                  <div>Balawal Sultan</div>
                  <a
                    href="tel:+923486091116"
                    className="text-white transition-colors hover:text-amber-300"
                  >
                    0348-6091116
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <div>
                  <div>Ehsaan Sadiq</div>
                  <a
                    href="tel:+923466800110"
                    className="text-white transition-colors hover:text-amber-300"
                  >
                    0346-6800110
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span>Northern Pakistan &amp; Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/20 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Star Crown Travel. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with <span className="text-amber-400">&#9733;</span> for the
            travelers of the North
          </p>
        </div>
      </div>
    </footer>
  );
}
