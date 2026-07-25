'use client';

import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-white/[0.04] to-transparent">
          <div className="grid lg:grid-cols-2">
            {/* Info side */}
            <div className="p-8 sm:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                Get In Touch
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
                Plan Your Next{' '}
                <span className="text-gradient-gold">Adventure</span>
              </h2>
              <p className="mt-5 text-base text-slate-400">
                Speak directly with our travel experts. We respond within 24
                hours and craft every itinerary around your group, budget, and
                dates.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-gradient shadow-gold">
                    <Phone className="h-5 w-5 text-charcoal-950" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400">
                      Balawal Sultan
                    </div>
                    <a
                      href="tel:+923486091116"
                      className="font-serif text-lg font-semibold text-white transition-colors hover:text-amber-300"
                    >
                      0348-6091116
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-gradient shadow-gold">
                    <Phone className="h-5 w-5 text-charcoal-950" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400">
                      Ehsaan Sadiq
                    </div>
                    <a
                      href="tel:+923466800110"
                      className="font-serif text-lg font-semibold text-white transition-colors hover:text-amber-300"
                    >
                      0346-6800110
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-gradient shadow-gold">
                    <MapPin className="h-5 w-5 text-charcoal-950" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400">
                      Service Area
                    </div>
                    <div className="font-serif text-lg font-semibold text-white">
                      Northern Pakistan &amp; Nationwide
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form side */}
            <div className="border-t border-gold/20 bg-charcoal-950/40 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gold/20 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="03XX-XXXXXXX"
                      className="w-full rounded-xl border border-gold/20 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gold/20 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Destination &amp; Dates
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us where you want to go and when..."
                    className="w-full resize-none rounded-xl border border-gold/20 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-semibold text-charcoal-950 shadow-gold transition-all hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" />
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
