import React from 'react';
import { CapeGuruLogo } from './CapeGuruLogo';
import { COMPANY_INFO } from '../data/servicesData';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappLink = `https://wa.me/${COMPANY_INFO.phoneIntlRaw}?text=${encodeURIComponent(
    'Hello Cape Guru, I would like to enquire about your services.'
  )}`;

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-5 space-y-3">
            <CapeGuruLogo size="md" textVariant="white" />
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm pt-2">
              Guru Satellite Systems and Cape Guru provide experienced technical teams for aircon servicing, 
              DStv installations, and on-site appliance repairs across Cape Town and the Western Cape.
            </p>

            <div className="text-emerald-400 font-semibold text-xs pt-1">
              ✓ 1 Year Guarantee on major appliance repairs
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              Services
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#aircon" className="hover:text-blue-400 transition-colors">Aircon Service & Installation</a></li>
              <li><a href="#dstv" className="hover:text-blue-400 transition-colors">DStv & Openview Installations</a></li>
              <li><a href="#dstv" className="hover:text-blue-400 transition-colors">TV Wall Mounting & Concealed Cabling</a></li>
              <li><a href="#appliances" className="hover:text-blue-400 transition-colors">Mobile Appliance Repairs</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Fibre & WiFi Networking</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Morclick Satellite Internet</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Us
            </div>
            <div className="space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-blue-400 font-semibold">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  WhatsApp 082 203 8548
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Western Cape, South Africa. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
