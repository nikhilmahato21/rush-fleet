import React from 'react'
import { Phone, MessageCircle, MapPin, Building } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function Footer() {
  const { brand, footer, contact } = siteContent
  const year = new Date().getFullYear()

  return (
    <footer className="bg-steel-950 border-t-4 border-amber-500" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500 flex items-center justify-center">
                <span className="font-display text-steel-950 text-2xl">R</span>
              </div>
              <div>
                <div className="font-display text-3xl text-white leading-none tracking-widest">{brand.name}</div>
                <div className="font-heading text-[9px] tracking-[0.35em] text-steel-500 uppercase">{brand.tagline}</div>
              </div>
            </div>
            <p className="font-body text-sm text-steel-400 leading-relaxed mb-6">{footer.tagline}</p>
            <div className="flex gap-3">
              <a href={`tel:${brand.phone}`} className="w-10 h-10 bg-steel-800 flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Call">
                <Phone size={16} className="text-white" strokeWidth={2} />
              </a>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-steel-800 flex items-center justify-center hover:bg-green-500 transition-colors" aria-label="WhatsApp">
                <MessageCircle size={16} className="text-white" strokeWidth={2} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xs tracking-[0.35em] text-amber-500 uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footer.links.map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={e => { e.preventDefault(); document.getElementById(link.href.replace('#',''))?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="font-heading font-semibold text-sm tracking-widest text-steel-400 uppercase hover:text-amber-400 transition-colors relative group">
                    <span className="absolute -left-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xs tracking-[0.35em] text-amber-500 uppercase mb-6">Contact & Location</h3>
            <div className="space-y-4">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-3 group">
                <Phone size={14} className="text-amber-500 flex-shrink-0" strokeWidth={2.5} />
                <span className="font-heading font-semibold text-sm tracking-wider text-steel-300 group-hover:text-amber-400 transition-colors">{contact.phone}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-amber-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <p className="font-heading font-semibold text-xs tracking-wider text-steel-500 uppercase mb-0.5">Parking</p>
                  <p className="font-heading font-bold text-sm text-steel-300">{contact.parking}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building size={14} className="text-amber-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <p className="font-heading font-semibold text-xs tracking-wider text-steel-500 uppercase mb-0.5">Office</p>
                  <p className="font-heading font-bold text-sm text-steel-300">{contact.address}</p>
                  <p className="font-heading text-xs text-steel-500 tracking-wider">{contact.area}</p>
                  <p className="font-heading text-xs text-steel-500 tracking-wider">{contact.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-[11px] tracking-widest text-steel-600 uppercase">
            © {year} {brand.name} Fleet Rentals. All rights reserved.
          </p>
          <p className="font-heading text-[11px] tracking-widest text-steel-700 uppercase">Nagarbhavi · Bangalore 560072</p>
        </div>
      </div>
    </footer>
  )
}
