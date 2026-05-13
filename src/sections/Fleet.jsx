import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Leaf, Zap, Phone, MessageCircle } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const categoryColors = {
  Hatchback: 'bg-blue-100 text-blue-700 border-blue-200',
  Sedan: 'bg-amber-100 text-amber-700 border-amber-200',
  Compact: 'bg-orange-100 text-orange-700 border-orange-200',
  MPV: 'bg-green-100 text-green-700 border-green-200',
  'Premium MPV': 'bg-purple-100 text-purple-700 border-purple-200',
}

function FleetCard({ car, index }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl shadow-md overflow-hidden group
                 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-200/50 hover:border-amber-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-amber-50 h-48">
        {!imgError ? (
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sky-100 to-amber-100">
            <span className="font-display text-3xl text-amber-600 tracking-widest text-center px-4 leading-tight">{car.name}</span>
            <span className="font-heading text-xs tracking-widest text-steel-500 uppercase">{car.category}</span>
          </div>
        )}
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent group-hover:via-amber-500 transition-colors duration-300" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`font-heading font-semibold text-[10px] tracking-widest uppercase px-2.5 py-1 border rounded-full backdrop-blur-sm ${categoryColors[car.category] || 'bg-white/70 text-steel-700 border-white/80'}`}>
            {car.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-heading font-semibold text-[10px] tracking-[0.3em] text-amber-600 uppercase mb-1">{car.subtitle}</p>
        <h3 className="font-display text-2xl text-steel-900 leading-none tracking-wide mb-3">{car.name}</h3>
        <p className="font-body text-sm text-steel-500 leading-relaxed mb-4">{car.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {car.features.map(f => (
            <span key={f} className="font-heading text-[10px] tracking-wider text-steel-600 uppercase bg-white/80 border border-steel-200 px-2.5 py-1 rounded-full">
              {f}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-steel-100">
          <div className="flex items-center gap-1.5">
            <Users size={13} className="text-amber-500" strokeWidth={2.5} />
            <span className="font-heading font-semibold text-xs tracking-wider text-steel-700 uppercase">{car.seats}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={13} className="text-green-500" strokeWidth={2.5} />
            <span className="font-heading font-semibold text-xs tracking-wider text-steel-700 uppercase">{car.fuel}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Fleet() {
  const { fleet, brand } = siteContent
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(fleet.map(c => c.category)))]
  const filtered = filter === 'All' ? fleet : fleet.filter(c => c.category === filter)

  return (
    <section id="fleet" className="py-24 bg-gradient-to-br from-white via-sky-50 to-amber-50 overflow-hidden" aria-label="Our fleet">
      {/* Blobs */}
      <div className="absolute right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-600 uppercase mb-3">
              Choose Your Ride
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="font-display text-6xl md:text-7xl text-steel-900 leading-none tracking-wide">
              OUR<br /><span className="text-amber-500">FLEET</span>
            </motion.h2>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-white/80 px-5 py-3 rounded-2xl shadow-md self-start md:self-auto">
            <Leaf size={18} className="text-green-600" />
            <div>
              <div className="font-display text-2xl text-green-700 leading-none">CNG + PETROL</div>
              <div className="font-heading text-[10px] tracking-[0.3em] text-green-600/70 uppercase">500+ & Still Expanding</div>
            </div>
          </motion.div>
        </div>

        {/* Filter tabs */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`font-heading font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
                filter === cat
                  ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-300/40'
                  : 'bg-white/60 backdrop-blur-sm text-steel-600 border-white/80 hover:border-amber-300 hover:text-amber-600'
              }`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((car, i) => (
              <FleetCard key={car.id} car={car} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`tel:${brand.phone}`}
            className="flex items-center gap-3 bg-amber-500 text-white font-heading font-bold tracking-widest uppercase px-10 py-5 text-sm rounded-2xl
                       shadow-lg shadow-amber-400/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/50 hover:bg-amber-400">
            <Phone size={18} strokeWidth={2.5} />
            Call to Book: {brand.phone}
          </a>
          <a href={`https://wa.me/${brand.whatsapp}?text=Hi, I want to book a car`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/70 backdrop-blur-sm text-green-700 font-heading font-bold tracking-widest uppercase px-10 py-5 text-sm rounded-2xl
                       border border-green-200 shadow-md transition-all duration-200 hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg hover:border-green-300">
            <MessageCircle size={18} strokeWidth={2.5} />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
