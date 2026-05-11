import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Route, Plane, Calendar, ArrowRight, Check } from 'lucide-react'

const iconMap = { MapPin, Route, Plane, Calendar }

export default function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)
  const Icon = iconMap[service.icon] || MapPin

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl shadow-md overflow-hidden group cursor-default
                 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-200/50 hover:border-amber-300"
    >
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-300/50 to-transparent group-hover:via-amber-500 transition-colors duration-300" />

      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300 ${
            hovered ? 'bg-amber-500 shadow-lg shadow-amber-300/50' : 'bg-amber-50 border border-amber-200'
          }`}>
            <Icon size={24} className={hovered ? 'text-white' : 'text-amber-600'} strokeWidth={2} />
          </div>
          <motion.div
            animate={{ x: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={18} className="text-amber-500 mt-4" />
          </motion.div>
        </div>

        <p className="font-heading font-semibold text-[10px] tracking-[0.3em] text-amber-600 uppercase mb-1">
          {service.subtitle}
        </p>
        <h3 className="font-display text-3xl text-steel-900 leading-none tracking-wide mb-3">
          {service.title}
        </h3>
        <p className="font-body text-sm text-steel-500 leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className="space-y-2 mb-6">
          {service.features.map(f => (
            <li key={f} className="flex items-center gap-2">
              <Check size={12} className="text-amber-500 flex-shrink-0" strokeWidth={3} />
              <span className="font-heading text-xs tracking-wider text-steel-600 uppercase">{f}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-steel-100 flex items-center justify-end">
          <motion.a
            href="tel:7996999197"
            className="font-heading font-bold text-xs tracking-widest text-amber-600 uppercase hover:text-amber-500 transition-colors flex items-center gap-1"
            whileHover={{ x: 3 }}
          >
            Book <ArrowRight size={12} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
