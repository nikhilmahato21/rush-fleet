import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { siteContent } from '../data/siteContent'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-amber-50 via-white to-sky-50 overflow-hidden" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-600 uppercase mb-3">
            What We Offer
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="font-display text-6xl md:text-7xl text-steel-900 leading-none tracking-wide mb-4">
            OUR<br /><span className="text-amber-500">SERVICES</span>
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="w-16 h-1 bg-amber-500 rounded-full origin-left" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 text-center">
          <p className="font-body text-steel-500 mb-4">Need help choosing a car or package? Just call us.</p>
          <a href={`tel:${siteContent.brand.phone}`}
            className="inline-flex items-center gap-2 bg-amber-500 text-white font-heading font-bold tracking-widest uppercase px-8 py-4 text-sm rounded-2xl
                       shadow-lg shadow-amber-400/40 transition-all duration-200 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-xl">
            Call {siteContent.brand.phone}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
