import React from 'react';
import { landingPageWallpaper, landingMobile } from '../assets/images';
import { COMPANY_INFO } from '../data/servicesData';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Calendar, 
  Flame, 
  Tv, 
  Wrench, 
  CheckCircle2,
  Clock,
  ChevronRight
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
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden border-b border-slate-200"
    >
      {/* 
        Landing page wallpaper as background for the first page:
        Uses 'Landing page.jpg' uploaded in assets/images
      */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 640px)" srcSet={landingMobile} />
          <img
            src={landingPageWallpaper}
            alt="Cape Guru Technical Services Cape Town"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </picture>

        {/* Clean Light Overlay for High Readability & White/Blue Theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/40 md:via-white/80 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 text-blue-800 text-xs font-semibold mb-4 shadow-xs">
              <span>Western Cape · Cape Town & Surrounds</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Aircon, DStv & Appliance Repairs Across Cape Town
            </h1>

            {/* Business Lineage & Summary */}
            <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed max-w-xl font-normal">
              Guru Satellite Systems and Cape Guru provide experienced, customer-orientated technical teams. 
              We come directly to your home or business with fast, neat, and reliable on-site service.
            </p>

            {/* Clean Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 w-full max-w-xl">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/95 border border-slate-200/90 shadow-sm backdrop-blur-xs">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">1 Year Guarantee</div>
                  <div className="text-slate-500">On major repairs</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/95 border border-slate-200/90 shadow-sm backdrop-blur-xs">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Same-Day Dispatch</div>
                  <div className="text-slate-500">We come to you</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/95 border border-slate-200/90 shadow-sm backdrop-blur-xs">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Certified Team</div>
                  <div className="text-slate-500">Experienced pros</div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-5">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>082 203 8548</span>
              </a>
            </div>

            <div className="text-xs text-slate-600">
              Need urgent help? Call <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-blue-600 font-bold hover:underline">082 203 8548</a> or chat on WhatsApp.
            </div>

          </div>

          {/* Right Quick Service Access Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-5 shadow-xl">
              <div className="border-b border-slate-100 pb-3 mb-3">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Quick Service Selection
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Select a category to jump or book:
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href="#aircon"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Flame className="w-4 h-4 rotate-180" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700">
                        Aircon Installation & Service
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Servicing, repairs & gas refills
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#dstv"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Tv className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700">
                        DStv, Openview & TV Mounting
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Signal repairs, dishes & wall brackets
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#appliances"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700">
                        Mobile Appliance Repairs
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Fridges, washing machines · 1 Yr Guarantee
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Direct on-site dispatch</span>
                <button
                  onClick={() => onOpenBooking()}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Book on-site visit →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
