import React, { useState } from 'react';
import { SERVICES, COMPANY_INFO } from '../data/servicesData';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  MessageSquare, 
  ShieldCheck 
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [suburb, setSuburb] = useState('');
  const [selectedService, setSelectedService] = useState(
    preselectedServiceId || 'aircon-service'
  );
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentServiceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedWhatsAppText = encodeURIComponent(
      `*CAPE GURU SERVICE BOOKING*\n\n` +
      `• *Client Name:* ${fullName || 'Client'}\n` +
      `• *Contact:* ${phoneNumber}\n` +
      `• *Email:* ${email || 'N/A'}\n` +
      `• *Suburb:* ${suburb}\n` +
      `• *Service:* ${currentServiceObj.title}\n` +
      `• *Notes:* ${notes || 'Standard booking request'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneIntlRaw}?text=${formattedWhatsAppText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white border border-slate-200 rounded-2xl max-w-lg w-full shadow-2xl z-10 text-slate-900 overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-600 text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold">
              Book a Technician
            </h3>
            <p className="text-xs text-blue-100 mt-0.5">
              Cape Town & Western Cape · Fast On-Site Service
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-blue-700/80 hover:bg-blue-800 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-bold text-slate-900">
                Inquiry Sent!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Your details have been passed to our dispatch team via WhatsApp. We will contact you shortly to confirm technician arrival.
              </p>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Service Required *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                  required
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Johan"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="082 203 8548"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>
              </div>

              {/* Email & Suburb */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Optional"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Suburb / Location *
                  </label>
                  <input
                    type="text"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    placeholder="e.g. Blouberg, Sea Point"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Problem Description / Model
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Fridge not cold, or DStv no signal..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-colors"
                >
                  Send Booking Request via WhatsApp
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>1 Year Guarantee on major appliance repairs</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
