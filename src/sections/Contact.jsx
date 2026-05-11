import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, Send, Check, Building } from 'lucide-react'
import { siteContent } from '../data/siteContent'

function FloatingInput({ label, id, type = 'text', value, onChange, error, required, as: Tag = 'input', rows }) {
  const [focused, setFocused] = useState(false)
  const isUp = focused || value

  const classes = `w-full bg-steel-50 border-2 px-4 pt-6 pb-2 font-body text-sm text-steel-900
                   transition-colors duration-200 focus:outline-none resize-none
                   ${error ? 'border-red-400 focus:border-red-500' : isUp ? 'border-amber-500' : 'border-steel-200 focus:border-amber-500'}`

  return (
    <div className="relative">
      <Tag id={id} type={type} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        required={required} rows={rows} className={classes}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <label htmlFor={id}
        className={`absolute left-4 pointer-events-none font-heading font-semibold tracking-wider uppercase transition-all duration-200
          ${isUp ? 'top-2 text-[9px] ' + (error ? 'text-red-500' : 'text-amber-600') : 'top-4 text-xs text-steel-400'}`}>
        {label}{required && ' *'}
      </label>
      {error && <p id={`${id}-error`} className="text-[10px] text-red-500 font-heading tracking-wider uppercase mt-1">{error}</p>}
    </div>
  )
}

export default function Contact({ onToast }) {
  const { contact, brand } = siteContent
  const [form, setForm] = useState({ name: '', phone: '', carChoice: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[0-9]{10}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit number'
    if (!form.message.trim()) e.message = 'Please describe your trip'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    const lines = [
      'Hi, I want to enquire about a booking.',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
    ]

    if (form.carChoice.trim()) lines.push(`Preferred Car: ${form.carChoice.trim()}`)
    lines.push(`Trip Details: ${form.message.trim()}`)

    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    onToast('Opening WhatsApp with your enquiry.', 'success')
    setForm({ name: '', phone: '', carChoice: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-white" aria-label="Contact us">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label mb-3">
            Get In Touch
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title mb-4">
            BOOK YOUR<br /><span className="text-stroke">RIDE NOW</span>
          </motion.h2>
          <div className="divider-amber" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {/* Phone BIG */}
            <div className="bg-steel-950 p-8 mb-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 diagonal-stripe opacity-30" />
              <p className="font-heading font-semibold text-xs tracking-[0.35em] text-amber-500 uppercase mb-2">Call or WhatsApp</p>
              <a href={`tel:${contact.phone}`} className="block font-display text-6xl text-white hover:text-amber-400 transition-colors duration-200 leading-none tracking-wide">
                {contact.phone}
              </a>
            </div>

            {/* Location cards */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-amber-500 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-steel-950" strokeWidth={2.5} />
                  <p className="font-heading font-semibold text-[10px] tracking-widest text-steel-950/60 uppercase">Parking</p>
                </div>
                <p className="font-display text-4xl text-steel-950 leading-none tracking-wide">VIJAY</p>
                <p className="font-display text-4xl text-steel-950 leading-none tracking-wide">NAGAR</p>
                <p className="font-heading text-[10px] tracking-widest text-steel-950/60 uppercase mt-2">Bangalore</p>
              </div>
              <div className="bg-steel-950 p-6 border border-steel-800">
                <div className="flex items-center gap-2 mb-2">
                  <Building size={14} className="text-amber-500" strokeWidth={2.5} />
                  <p className="font-heading font-semibold text-[10px] tracking-widest text-amber-500/60 uppercase">Office</p>
                </div>
                <p className="font-display text-3xl text-white leading-none tracking-wide">NAGAR</p>
                <p className="font-display text-3xl text-amber-400 leading-none tracking-wide">BHAVI</p>
                <p className="font-heading text-[10px] tracking-widest text-steel-500 uppercase mt-2">2nd Stage</p>
              </div>
            </div>

            {/* Full address */}
            <div className="border border-steel-200 p-5 mb-4">
              <p className="font-heading font-semibold text-[10px] tracking-widest text-amber-600 uppercase mb-2">Full Address</p>
              <p className="font-body text-sm text-steel-700 leading-relaxed">
                No 11, 20th Cross, Malgala<br />
                Nagarbhavi 2nd Stage<br />
                <strong>Bangalore — 560072</strong>
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 border border-steel-200 mb-4">
              <Clock size={16} className="text-amber-500 flex-shrink-0" strokeWidth={2} />
              <div>
                <div className="font-heading font-semibold text-[10px] tracking-widest text-steel-400 uppercase">Hours</div>
                <div className="font-heading font-bold text-sm text-steel-900">{contact.hours}</div>
              </div>
            </div>

            <a href={`https://wa.me/${brand.whatsapp}?text=Hi, I want to book a car rental`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 text-white font-heading font-bold tracking-widest uppercase py-5 text-sm
                         transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-green-500/30 hover:bg-green-400">
              <MessageCircle size={20} strokeWidth={2.5} />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="bg-steel-50 border border-steel-200 p-8">
              <h3 className="font-display text-3xl text-steel-950 tracking-wide mb-2">REQUEST A BOOKING</h3>
              <p className="font-body text-xs text-steel-500 mb-6">Fill in the form and continue your enquiry on WhatsApp.</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4">
                  <div className="w-16 h-16 bg-green-500 flex items-center justify-center">
                    <Check size={32} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="font-display text-3xl text-steel-950 tracking-wide text-center">WHATSAPP OPENED!</p>
                  <p className="font-body text-sm text-steel-500 text-center">Send the prefilled message to complete your enquiry.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Booking enquiry form">
                  <FloatingInput id="name" label="Your Name" value={form.name} required onChange={e => setForm({ ...form, name: e.target.value })} error={errors.name} />
                  <FloatingInput id="phone" label="Phone Number" type="tel" value={form.phone} required onChange={e => setForm({ ...form, phone: e.target.value })} error={errors.phone} />
                  <FloatingInput id="carChoice" label="Preferred Car (optional)" value={form.carChoice} onChange={e => setForm({ ...form, carChoice: e.target.value })} />
                  <FloatingInput id="message" label="Trip Details" as="textarea" rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} error={errors.message} />

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-steel-950 text-white font-heading font-bold tracking-widest uppercase py-5 text-sm
                               transition-all duration-200 hover:-translate-y-0.5 hover:bg-steel-800 hover:shadow-xl
                               focus:outline-none focus:ring-2 focus:ring-steel-950 focus:ring-offset-2">
                    <><Send size={16} strokeWidth={2.5} />Send Enquiry on WhatsApp</>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
