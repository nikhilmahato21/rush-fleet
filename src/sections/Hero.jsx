import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, ChevronDown, Shield, Clock, Leaf } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { hero, brand, stats } = siteContent

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-amber-50"
      aria-label="Hero section"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left content ── */}
          <div>
            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/80 px-4 py-1.5 mb-4 rounded-full shadow-sm text-amber-600"
            >
              <MapPin size={13} strokeWidth={2.5} />
              <span className="font-heading font-semibold text-xs tracking-[0.25em] uppercase">{brand.location}</span>
            </motion.div>

            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm border border-green-200 px-4 py-2 mb-6 rounded-full"
            >
              <Leaf size={12} className="text-green-600" />
              <span className="font-heading font-semibold text-xs tracking-[0.25em] text-green-700 uppercase">{hero.badge}</span>
            </motion.div>

            <motion.p
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="font-heading font-semibold text-sm tracking-[0.4em] text-amber-600 uppercase mb-2"
            >
              {hero.subheadline}
            </motion.p>

            <motion.h1
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="font-display text-7xl sm:text-8xl lg:text-9xl leading-none tracking-wide mb-4"
            >
              <span className="text-steel-900">DRIVE </span>
              <span className="text-amber-500">THE</span>
              <br />
              <span className="text-steel-900">RUSH</span>
            </motion.h1>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="mb-6">
              <div className="font-display text-3xl sm:text-4xl text-amber-500 leading-none tracking-widest">8 CARS. ONE CALL.</div>
              <div className="font-heading font-semibold text-sm tracking-[0.3em] text-steel-400 uppercase mt-1">
                CNG + PETROL · ALL AC · ALL BANGALORE
              </div>
            </motion.div>

            <motion.p
              custom={4} variants={fadeUp} initial="hidden" animate="show"
              className="font-body text-steel-600 text-base leading-relaxed mb-8 max-w-md"
            >
              {hero.description}
            </motion.p>

            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap gap-4">
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-3 bg-amber-500 text-white font-heading font-bold tracking-widest uppercase px-8 py-4 text-sm rounded-2xl
                           shadow-lg shadow-amber-400/40
                           transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/50 hover:bg-amber-400
                           active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <Phone size={16} strokeWidth={2.5} />
                {hero.ctaPrimary}
              </a>

              <a
                href={`https://wa.me/${brand.whatsapp}?text=Hi, I want to book a car rental`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm text-steel-800 font-heading font-bold tracking-widest uppercase px-8 py-4 text-sm rounded-2xl
                           border border-white/90 shadow-md
                           transition-all duration-200 hover:-translate-y-1 hover:bg-green-50 hover:text-green-700 hover:border-green-200 hover:shadow-lg
                           active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              >
                <MessageCircle size={16} strokeWidth={2.5} />
                {hero.ctaSecondary}
              </a>

              <a
                href={`https://wa.me/${brand.whatsapp}?text=Hi, I am interested in joining Rush Fleet as a driver`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm text-amber-600 font-heading font-bold tracking-widest uppercase px-8 py-4 text-sm rounded-2xl
                           border border-amber-200 shadow-md
                           transition-all duration-200 hover:-translate-y-1 hover:bg-amber-50 hover:border-amber-300 hover:shadow-lg
                           active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              >
                <Shield size={16} strokeWidth={2.5} />
                {hero.ctaDriver}
              </a>
            </motion.div>

            <motion.div
              custom={6} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-steel-200/50"
            >
              {[
                { icon: Shield, text: 'Verified Driver' },
                { icon: Leaf, text: 'CNG + Petrol' },
                { icon: Clock, text: '24/7 Available' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} className="text-amber-500" strokeWidth={2.5} />
                  <span className="font-heading font-semibold text-xs tracking-widest text-steel-500 uppercase">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right panel — glass cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Book now glass card */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl p-8 rounded-3xl">
              <p className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-600 uppercase mb-2">Book Instantly</p>
              <a
                href={`tel:${brand.phone}`}
                className="block font-display text-5xl xl:text-6xl text-steel-900 hover:text-amber-500 transition-colors duration-200 leading-none tracking-wide"
              >
                {brand.phone}
              </a>
              <p className="font-heading text-xs tracking-widest text-steel-400 uppercase mt-2">Call or WhatsApp anytime</p>
            </div>

            {/* Location cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-400/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-amber-300/40">
                <p className="font-heading font-semibold text-[10px] tracking-[0.35em] text-amber-900/60 uppercase mb-1">Parking</p>
                <p className="font-display text-3xl text-amber-950 leading-none tracking-wide">VIJAY</p>
                <p className="font-display text-3xl text-amber-950 leading-none tracking-wide">NAGAR</p>
              </div>
              <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-lg p-6 rounded-2xl">
                <p className="font-heading font-semibold text-[10px] tracking-[0.35em] text-amber-600 uppercase mb-1">Office</p>
                <p className="font-display text-3xl text-steel-800 leading-none tracking-wide">NAGAR</p>
                <p className="font-display text-3xl text-amber-500 leading-none tracking-wide">BHAVI</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-md p-4 text-center rounded-2xl"
                >
                  <div className="font-display text-2xl text-amber-500 leading-none">{stat.value}</div>
                  <div className="font-heading text-[10px] tracking-widest text-steel-500 uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 focus:outline-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-label="Scroll to fleet"
      >
        <span className="font-heading text-[10px] tracking-[0.3em] text-steel-400 uppercase">Our Fleet</span>
        <ChevronDown size={18} className="text-amber-500" />
      </motion.button>
    </section>
  )
}
