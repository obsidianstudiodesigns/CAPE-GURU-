import React from 'react';
import { COMPANY_INFO } from '../data/servicesData';
import { ShieldCheck, Users, Clock, Phone, Calendar } from 'lucide-react';

interface AboutAndCoverageProps {
  onOpenBooking: () => void;
}

export const AboutAndCoverage: React.FC<AboutAndCoverageProps> = ({ onOpenBooking }) => {
  return (
    <section id="why-us" className="py-12 sm:py-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            About Cape Guru
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Experienced, Customer-Orientated Technical Teams
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Guru Satellite Systems and Cape Guru have built a reputation for high standards of workmanship, 
            neat cable management, and honest customer service throughout Cape Town and surrounds.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col justify-between p-5 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">1 Year Guarantee on Major Repairs</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Every major appliance replacement part and technical installation is backed with our 12-month peace-of-mind guarantee.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Customer-Focused Technicians</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Friendly, courteous, and respectful of your property. We test all installations thoroughly and clean up before leaving.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Fast On-Site Response</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Our mobile workshop vans are stocked with replacement components to diagnose and resolve faults on the spot.
              </p>
            </div>
          </div>
        </div>

        {/* Action strip */}
        <div className="mt-8 p-4 sm:p-5 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <div className="text-sm font-bold text-slate-900">Need a quote or quick diagnostic visit?</div>
            <div className="text-xs text-slate-500">Contact our technical dispatch directly for prompt assistance.</div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Visit</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>082 203 8548</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
