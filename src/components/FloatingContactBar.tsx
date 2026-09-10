import React from 'react';
import { COMPANY_INFO } from '../data/servicesData';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface FloatingContactBarProps {
  onOpenBooking: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenBooking }) => {
  const whatsappLink = `https://wa.me/${COMPANY_INFO.phoneIntlRaw}?text=${encodeURIComponent(
    'Hello Cape Guru, I would like to book a service.'
  )}`;

  return (
    <>
      {/* Floating WhatsApp Bubble (Bottom Right on desktop) */}
      <aside aria-label="Quick contact links" className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2.5">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-bubble"
          aria-label="WhatsApp Cape Guru directly at 082 203 8548"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <MessageSquare className="w-5 h-5 fill-white/20" />
          <span>WhatsApp 082 203 8548</span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Floating Action Bar (sm:hidden) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-3 flex items-center justify-between gap-2 shadow-lg">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          id="mobile-bottom-call"
          className="flex-1 py-2.5 px-2 rounded-lg bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-300"
        >
          <Phone className="w-3.5 h-3.5 text-blue-600" />
          <span>Call</span>
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-whatsapp"
          className="flex-1 py-2.5 px-2 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          id="mobile-bottom-book"
          className="flex-1 py-2.5 px-2 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </>
  );
};
