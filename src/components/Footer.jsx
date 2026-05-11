import React from 'react'
import { Phone, MessageCircle, MapPin, Building } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function Footer() {
  const { brand, footer, contact } = siteContent
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-sky-50 via-white to-amber-50 border-t border-steel-200" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="Rush Fleet" className="h-14 w-auto" />
            </div>
            <p className="font-body text-sm text-steel-500 leading-relaxed mb-6">{footer.tagline}</p>
            <div className="flex gap-3">
              <a href={`tel:${brand.phone}`}
                className="w-10 h-10 bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl flex items-center justify-center shadow-sm
                           hover:bg-amber-500 hover:border-amber-500 hover:shadow-md transition-all duration-200"
                aria-label="Call">
                <Phone size={16} className="text-steel-600 group-hover:text-white" strokeWidth={2} />
              </a>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl flex items-center justify-center shadow-sm
                           hover:bg-green-500 hover:border-green-500 hover:shadow-md transition-all duration-200"
                aria-label="WhatsApp">
                <MessageCircle size={16} className="text-steel-600" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-bold text-xs tracking-[0.35em] text-amber-600 uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footer.links.map(link => (
                <li key={link.label}>
                  <a href={link.href}
                    onClick={e => { e.preventDefault(); document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="font-heading font-semibold text-sm tracking-widest text-steel-500 uppercase hover:text-amber-600 transition-colors relative group">
                    <span className="absolute -left-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-xs tracking-[0.35em] text-amber-600 uppercase mb-6">Contact & Location</h3>
            <div className="space-y-4">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-3 group">
                <Phone size={14} className="text-amber-500 flex-shrink-0" strokeWidth={2.5} />
                <span className="font-heading font-semibold text-sm tracking-wider text-steel-600 group-hover:text-amber-600 transition-colors">{contact.phone}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-amber-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <p className="font-heading font-semibold text-xs tracking-wider text-steel-400 uppercase mb-0.5">Parking</p>
                  <p className="font-heading font-bold text-sm text-steel-700">{contact.parking}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building size={14} className="text-amber-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <p className="font-heading font-semibold text-xs tracking-wider text-steel-400 uppercase mb-0.5">Office</p>
                  <p className="font-heading font-bold text-sm text-steel-700">{contact.address}</p>
                  <p className="font-heading text-xs text-steel-400 tracking-wider">{contact.area}</p>
                  <p className="font-heading text-xs text-steel-400 tracking-wider">{contact.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-steel-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-[11px] tracking-widest text-steel-400 uppercase">
            © {year} {brand.name} Fleet Rentals. All rights reserved.
          </p>
          <p className="font-heading text-[11px] tracking-widest text-steel-400 uppercase">Nagarbhavi · Bangalore 560072</p>
        </div>
      </div>
    </footer>
  )
}
