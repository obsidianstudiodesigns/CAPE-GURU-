import React from 'react';
import { COMPANY_INFO, SERVICE_AREAS } from '../data/servicesData';
import { ShieldCheck, Users, Clock, MapPin, CheckCircle, Phone } from 'lucide-react';

interface AboutAndCoverageProps {
  onOpenBooking: () => void;
}

export const AboutAndCoverage: React.FC<AboutAndCoverageProps> = ({ onOpenBooking }) => {
  return (
    <section id="why-us" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: About Us & Trust */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              About Cape Guru
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Experienced, Customer-Orientated Technical Teams
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Guru Satellite Systems and Cape Guru have built a reputation for high standards of workmanship, 
              neat cable management, and honest customer service throughout Cape Town.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">1 Year Guarantee on Major Repairs</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Every major appliance replacement part and technical installation is protected for a full 12 months.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Customer-Focused Technicians</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Friendly, courteous, and respectful of your home. We clean up all work areas upon completion.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Fast On-Site Response</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Our mobile vans are stocked with components to fix issues on the spot without unnecessary delays.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Areas Covered */}
          <div id="areas" className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Service Areas
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Where We Work in the Western Cape
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our mobile service vans operate throughout greater Cape Town and surrounding regions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {SERVICE_AREAS.map((area, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-700"
                >
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between gap-4 mt-4">
              <div>
                <div className="text-xs font-bold text-blue-900">Need to check van availability?</div>
                <div className="text-xs text-blue-700">Call us directly to check when we can visit your area.</div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg whitespace-nowrap transition-colors"
              >
                082 203 8548
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
