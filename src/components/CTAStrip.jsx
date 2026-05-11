import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function CTAStrip() {
  const { brand } = siteContent
  return (
    <section className="relative overflow-hidden py-20" aria-label="Book now">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400" />
      {/* Soft blob overlays */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-heading font-semibold text-xs tracking-[0.35em] text-white/70 uppercase mb-2">
              Ready to Roll?
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="font-display text-5xl md:text-6xl text-white leading-none tracking-wide">
              BOOK YOUR RIDE <span className="text-white/80">TODAY</span>
            </motion.h2>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${brand.phone}`}
              className="flex items-center justify-center gap-3 bg-white text-amber-600 font-heading font-bold tracking-widest uppercase px-10 py-5 text-sm rounded-2xl
                         shadow-xl shadow-amber-700/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:bg-amber-50
                         focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500">
              <Phone size={18} strokeWidth={2.5} />
              <span className="text-xl font-display tracking-widest">{brand.phone}</span>
            </a>
            <a href={`https://wa.me/${brand.whatsapp}?text=Hi, I want to book a car`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm text-white font-heading font-bold tracking-widest uppercase px-10 py-5 text-sm rounded-2xl
                         border border-white/40 shadow-md transition-all duration-200 hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500">
              <MessageCircle size={18} strokeWidth={2.5} />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
