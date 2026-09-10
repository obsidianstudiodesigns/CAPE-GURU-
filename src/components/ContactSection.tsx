import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/servicesData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Send,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [suburb, setSuburb] = useState('');
  const [service, setService] = useState('Aircon Service');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*CAPE GURU SERVICE REQUEST*\n` +
      `• *Name:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Suburb:* ${suburb}\n` +
      `• *Service:* ${service}\n` +
      `• *Details:* ${message || 'Please call back with quotation.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneIntlRaw}?text=${text}`, '_blank');
    setSent(true);
  };

  const whatsappDirect = `https://wa.me/${COMPANY_INFO.phoneIntlRaw}?text=${encodeURIComponent(
    'Hello Cape Guru, I would like to enquire about your services.'
  )}`;

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Contact Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Get In Touch With Our Team
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Whether you need urgent aircon repair, DStv signal tuning, or appliance fixing, 
                our technicians are available Monday through Saturday.
              </p>
            </div>

            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Phone & WhatsApp</div>
                  <a 
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <div className="text-xs text-slate-500">
                    International: {COMPANY_INFO.phoneIntl}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Email</div>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Operating Area</div>
                  <div className="text-sm font-bold text-slate-900">
                    {COMPANY_INFO.location}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Hours</div>
                  <div className="text-sm font-bold text-slate-900">
                    {COMPANY_INFO.workingHours}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (082 203 8548)</span>
            </a>
          </div>

          {/* Right: Clean, Basic Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Request a Callback or Quotation
              </h3>
              <p className="text-xs text-slate-600 mb-5">
                Fill in your details below and we will contact you right away.
              </p>

              {sent ? (
                <div className="p-6 bg-white rounded-xl border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-base font-bold text-slate-900">Thank You!</div>
                  <p className="text-xs text-slate-600">
                    Your request has been forwarded to our technical team via WhatsApp. We will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="082 203 8548"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Suburb / Area *
                      </label>
                      <input
                        type="text"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}
                        placeholder="e.g. Camps Bay / Durbanville"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service Needed *
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                      >
                        <option value="Aircon Installation or Repair">Aircon Installation / Repair</option>
                        <option value="DStv or Openview Setup">DStv & Openview Setup</option>
                        <option value="TV Wall Mounting">TV Wall Mounting</option>
                        <option value="Appliance Repair (Fridge/Washing Machine/Stove)">Appliance Repair (Fridge, Washing Machine, Stove)</option>
                        <option value="Fibre or WiFi Mesh">Fibre / WiFi Mesh</option>
                        <option value="Morclick Satellite Internet">Morclick Satellite Internet</option>
                        <option value="Communal or Commercial Tech">Communal / Commercial Tech</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Short Description / Appliance Model
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Fridge not cooling, or DStv no signal after wind..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Dispatch</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
