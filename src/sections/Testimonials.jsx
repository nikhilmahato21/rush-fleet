import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { siteContent } from '../data/siteContent'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-amber-500 fill-amber-500" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-white via-amber-50 to-sky-50 overflow-hidden" aria-label="Customer reviews">
      {/* Blob */}
      <div className="absolute left-0 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-600 uppercase mb-3">
              What Customers Say
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="font-display text-6xl md:text-7xl text-steel-900 leading-none tracking-wide">
              REAL<br /><span className="text-amber-500">REVIEWS</span>
            </motion.h2>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-white/80 shadow-md px-6 py-4 rounded-2xl self-start md:self-auto">
            <div className="text-center">
              <div className="font-display text-4xl text-amber-500">5.0</div>
              <StarRating count={5} />
              <div className="font-heading text-[10px] tracking-widest text-steel-500 uppercase mt-1">Average Rating</div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-md rounded-2xl p-6
                         hover:border-amber-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-200/40
                         transition-all duration-300 group relative">
              <Quote size={28} className="text-amber-300/40 absolute top-4 right-4 group-hover:text-amber-400/60 transition-colors" />
              <StarRating count={t.rating} />
              <p className="font-body text-sm text-steel-600 leading-relaxed my-4 italic">"{t.text}"</p>
              <div className="pt-4 border-t border-steel-100">
                <div className="font-heading font-bold text-sm tracking-wider text-steel-900 uppercase">{t.name}</div>
                <div className="font-heading text-[10px] tracking-widest text-steel-400 uppercase">{t.location}</div>
                <div className="mt-2 inline-block bg-amber-100 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  <span className="font-heading text-[10px] tracking-widest text-amber-700 uppercase">{t.trip}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
