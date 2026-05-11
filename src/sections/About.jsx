import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Car, Leaf, Award } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function About() {
  const { about, brand } = siteContent

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-sky-50 via-white to-amber-50 overflow-hidden" aria-label="About us">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — glass info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl p-10 rounded-3xl relative z-10">
              <p className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-600 uppercase mb-4">Our Fleet</p>
              <h3 className="font-display text-4xl text-steel-900 leading-none tracking-wide mb-2">{about.highlight}</h3>
              <p className="font-heading font-semibold text-sm tracking-widest text-amber-500 uppercase mb-8">{about.highlightSub}</p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Cars', value: '8 Cars' },
                  { label: 'Fuel', value: 'CNG+PTR' },
                  { label: 'Max Seats', value: '7 Seats' },
                  { label: 'Condition', value: 'AC · Clean' },
                ].map(spec => (
                  <div key={spec.label} className="bg-white/70 border border-white/90 rounded-2xl p-4 shadow-sm">
                    <div className="font-heading font-bold text-lg text-amber-500">{spec.value}</div>
                    <div className="font-heading text-[10px] tracking-widest text-steel-500 uppercase">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Since badge */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500 rounded-2xl z-20 flex items-center justify-center shadow-lg shadow-amber-300/50">
              <div className="text-center">
                <div className="font-display text-2xl text-white leading-none">{brand.established}</div>
                <div className="font-heading text-[9px] tracking-[0.2em] text-white/70 uppercase">Since</div>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-600 uppercase mb-3">Who We Are</p>
            <h2 className="font-display text-5xl md:text-6xl text-steel-900 leading-none tracking-wide mb-4">{about.headline}</h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-8" />

            <p className="font-body text-steel-600 leading-relaxed mb-8">{about.story}</p>

            <ul className="space-y-4 mb-10">
              {about.points.map((point, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-body text-sm text-steel-700 leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Location cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-amber-400/90 backdrop-blur-sm p-5 rounded-2xl shadow-md shadow-amber-300/30">
                <p className="font-heading font-semibold text-[10px] tracking-widest text-amber-950/60 uppercase mb-1">Parking</p>
                <p className="font-display text-3xl text-amber-950 leading-none tracking-wide">VIJAY</p>
                <p className="font-display text-3xl text-amber-950 leading-none tracking-wide">NAGAR</p>
              </div>
              <div className="bg-white/70 backdrop-blur-xl border border-white/80 p-5 rounded-2xl shadow-md">
                <p className="font-heading font-semibold text-[10px] tracking-widest text-amber-600 uppercase mb-1">Office</p>
                <p className="font-display text-3xl text-steel-800 leading-none tracking-wide">NAGAR</p>
                <p className="font-display text-3xl text-amber-500 leading-none tracking-wide">BHAVI</p>
              </div>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Car, label: '8 Cars', sub: 'Hatch·Sedan·MPV' },
                { icon: Leaf, label: 'CNG + PTR', sub: 'Eco Friendly' },
                { icon: Award, label: '5★ Service', sub: 'Top Rated' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Icon size={18} className="text-amber-600" strokeWidth={2} />
                  </div>
                  <div className="font-heading font-bold text-xs tracking-wider text-steel-900 uppercase">{label}</div>
                  <div className="font-body text-[10px] text-steel-400 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
