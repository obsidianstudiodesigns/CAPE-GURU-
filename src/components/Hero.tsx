import React from 'react';
import { landingDesktop, landingMobile } from '../assets/images';
import { COMPANY_INFO } from '../data/servicesData';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Calendar, 
  Flame, 
  Tv, 
  Wrench, 
  Wifi, 
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const whatsappLink = `https://wa.me/${COMPANY_INFO.phoneIntlRaw}?text=${encodeURIComponent(
    'Hello Cape Guru, I would like to book a technician for my property in Cape Town.'
  )}`;

  return (
    <section id="hero" className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Clear, Straightforward Information */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Simple Location Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold mb-4">
              <span>Western Cape · Cape Town & Surrounds</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Aircon, DStv & Appliance Repairs Across Cape Town
            </h1>

            {/* Business Lineage & Summary */}
            <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed max-w-xl">
              Guru Satellite Systems and Cape Guru provide experienced, customer-orientated technical teams. 
              We come directly to your home or business with fast, neat, and reliable on-site service.
            </p>

            {/* Clean Trust Pillars (No AI Buzzwords) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 w-full max-w-xl">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">1 Year Guarantee</div>
                  <div className="text-slate-500">On major repairs</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Same-Day Dispatch</div>
                  <div className="text-slate-500">We come to you</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Certified Team</div>
                  <div className="text-slate-500">Experienced pros</div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6">
              <button
                onClick={() => onOpenBooking()}
                id="hero-book-now-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Technician</span>
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 082 203 8548</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                id="hero-phone-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call 082 203 8548</span>
              </a>
            </div>

            <div className="text-xs text-slate-500">
              Need urgent help? Call <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-blue-600 font-bold hover:underline">082 203 8548</a> or send a WhatsApp message anytime.
            </div>

          </div>

          {/* Right Column: Visual Frame with Requested Landing Wallpaper */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              
              {/* Responsive Wallpaper image (mobile vs desktop) */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full">
                {/* Mobile version */}
                <img
                  src={landingMobile}
                  alt="Cape Guru On-Site Technical Services"
                  className="block sm:hidden w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                {/* Desktop version */}
                <img
                  src={landingDesktop}
                  alt="Cape Guru On-Site Technical Services"
                  className="hidden sm:block w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Clean Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Fast & Clean Workmanship
                  </div>
                  <div className="text-base sm:text-lg font-bold">
                    Cape Town's Leading Satellite, Climate & Appliance Experts
                  </div>
                </div>
              </div>

              {/* Quick Service Links Bar */}
              <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-700">
                <a href="#aircon" className="hover:text-blue-600 py-1 flex items-center justify-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-blue-600" />
                  <span>Aircon</span>
                </a>
                <a href="#dstv" className="hover:text-blue-600 py-1 flex items-center justify-center gap-1">
                  <Tv className="w-3.5 h-3.5 text-blue-600" />
                  <span>DStv</span>
                </a>
                <a href="#appliances" className="hover:text-blue-600 py-1 flex items-center justify-center gap-1">
                  <Wrench className="w-3.5 h-3.5 text-blue-600" />
                  <span>Appliances</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
