import React from 'react';
import { landingPageWallpaper } from '../assets/images';
import { COMPANY_INFO } from '../data/servicesData';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Calendar, 
  CheckCircle2,
  Clock
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const whatsappLink = `https://wa.me/${COMPANY_INFO.phoneIntlRaw}?text=${encodeURIComponent(
    'Hello Cape Guru, I would like to book a technician for my property in Cape Town.'
  )}`;

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200"
    >
      {/* 
        Full background wallpaper with high visibility:
        Uses 'Landing page.jpg' directly with light, subtle vignette for optimal photo exposure
      */}
      <div className="absolute inset-0 z-0">
        <img
          src={landingPageWallpaper}
          alt="Cape Guru Technical Services Cape Town"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Soft, natural light wash on left so dark text is razor-sharp while wallpaper remains fully visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/45 to-transparent lg:from-white/65 lg:via-white/25 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/20" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Transparent container leaves background wallpaper fully visible */}
        <div className="max-w-2xl bg-transparent border-0 shadow-none p-0">
          
          {/* Location Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 backdrop-blur-xs text-blue-700 border border-blue-200/90 text-xs font-semibold mb-4">
            <span>Western Cape · Cape Town & Surrounds</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Aircon, DStv & Appliance Repairs Across Cape Town
          </h1>

          {/* Business Lineage & Summary */}
          <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed font-normal">
            Guru Satellite Systems and Cape Guru provide experienced, customer-orientated technical teams. 
            We come directly to your home or business with fast, neat, and reliable on-site service.
          </p>

          {/* Clean Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 w-full">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">1 Year Guarantee</div>
                <div className="text-slate-500">On major repairs</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-xs">
              <Clock className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">Same-Day Dispatch</div>
                <div className="text-slate-500">We come to you</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">Certified Team</div>
                <div className="text-slate-500">Experienced pros</div>
              </div>
            </div>
          </div>

          {/* Direct Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-4">
            <button
              onClick={() => onOpenBooking()}
              id="hero-book-now-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Technician</span>
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: 082 203 8548</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="hero-phone-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>082 203 8548</span>
            </a>
          </div>

          <div className="text-xs text-slate-600">
            Need urgent help? Call <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-blue-600 font-bold hover:underline">082 203 8548</a> or chat on WhatsApp.
          </div>

        </div>
      </div>
    </section>
  );
};
