import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Leaf, Zap, ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react'
import { siteContent } from '../data/siteContent'

// Real car image URLs sourced from Maruti/Hyundai/Tata/Kia official or press images
const carImages = {
  1: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/45691/exterior-right-front-three-quarter-2.jpeg?q=80',  // Eresso
  2: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/23321/wagonr-exterior-right-front-three-quarter-3.jpeg?q=80', // WagonR
  3: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/44686/aura-exterior-right-front-three-quarter-27.jpeg?q=80', // Hyundai Aura
  4: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/44686/aura-exterior-right-front-three-quarter-5.jpeg?q=80',  // Hyundai Grand i10 (Prime SD placeholder)
  5: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/tiago-nrg-exterior-right-front-three-quarter.jpeg?q=80', // Tata Xpress
  6: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/154303/dzire-exterior-right-front-three-quarter.jpeg?q=80', // Dzire
  7: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-right-front-three-quarter-3.jpeg?q=80', // Ertiga
  8: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/192177/carens-exterior-right-front-three-quarter-2.jpeg?q=80', // Kia Carens
}

const categoryColors = {
  Hatchback: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Sedan: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  Compact: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  MPV: 'bg-green-500/20 text-green-300 border-green-500/30',
  'Premium MPV': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
}

function FleetCard({ car, index }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-steel-200 overflow-hidden group
                 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-steel-900/10 hover:border-amber-400"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-steel-100 group-hover:bg-amber-500 transition-colors duration-300" />

      {/* Image */}
      <div className="relative overflow-hidden bg-steel-100 h-48">
        {!imgError ? (
          <img
            src={carImages[car.id]}
            alt={car.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-steel-950 gap-2">
            <span className="font-display text-3xl text-amber-400 tracking-widest text-center px-4 leading-tight">{car.name}</span>
            <span className="font-heading text-xs tracking-widest text-steel-400 uppercase">{car.category}</span>
          </div>
        )}
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`font-heading font-semibold text-[10px] tracking-widest uppercase px-2 py-1 border ${categoryColors[car.category] || 'bg-steel-800/80 text-white border-steel-600'} backdrop-blur-sm`}>
            {car.category}
          </span>
        </div>
        {/* Fuel badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-600/90 backdrop-blur-sm px-2 py-1">
          <Leaf size={10} className="text-white" />
          <span className="font-heading font-semibold text-[10px] tracking-wider text-white uppercase">CNG + Petrol</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-heading font-semibold text-[10px] tracking-[0.3em] text-amber-600 uppercase mb-1">{car.subtitle}</p>
        <h3 className="font-display text-2xl text-steel-950 leading-none tracking-wide mb-3">{car.name}</h3>
        <p className="font-body text-sm text-steel-500 leading-relaxed mb-4">{car.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {car.features.map(f => (
            <span key={f} className="font-heading text-[10px] tracking-wider text-steel-600 uppercase bg-steel-50 border border-steel-200 px-2 py-1">
              {f}
            </span>
          ))}
        </div>

        {/* Seat + Fuel row */}
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
    <section id="fleet" className="py-24 bg-steel-950 overflow-hidden" aria-label="Our fleet">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-500 uppercase mb-3">
              Choose Your Ride
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="font-display text-6xl md:text-7xl text-white leading-none tracking-wide">
              OUR<br /><span className="text-amber-400">FLEET</span>
            </motion.h2>
          </div>
          {/* CNG badge */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 px-5 py-3 self-start md:self-auto">
            <Leaf size={18} className="text-green-400" />
            <div>
              <div className="font-display text-2xl text-green-400 leading-none">CNG + PETROL</div>
              <div className="font-heading text-[10px] tracking-[0.3em] text-green-400/60 uppercase">All 8 Cars</div>
            </div>
          </motion.div>
        </div>

        {/* Filter tabs */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`font-heading font-bold text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                filter === cat
                  ? 'bg-amber-500 text-steel-950 border-amber-500'
                  : 'bg-transparent text-steel-400 border-steel-700 hover:border-amber-500/50 hover:text-amber-400'
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
            className="flex items-center gap-3 bg-amber-500 text-steel-950 font-heading font-bold tracking-widest uppercase px-10 py-5 text-sm
                       transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-amber-500/40 hover:bg-amber-400">
            <Phone size={18} strokeWidth={2.5} />
            Call to Book: {brand.phone}
          </a>
          <a href={`https://wa.me/${brand.whatsapp}?text=Hi, I want to book a car`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white font-heading font-bold tracking-widest uppercase px-10 py-5 text-sm
                       transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-green-500/30 hover:bg-green-400">
            <MessageCircle size={18} strokeWidth={2.5} />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
