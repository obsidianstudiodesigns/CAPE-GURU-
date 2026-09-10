import React, { useState, useEffect } from 'react';
import { CapeGuruLogo } from './CapeGuruLogo';
import { COMPANY_INFO } from '../data/servicesData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  MessageSquare, 
  Calendar, 
  ChevronDown,
  ShieldCheck,
  Mail
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${COMPANY_INFO.phoneIntlRaw}?text=${encodeURIComponent(
    'Hello Cape Guru, I would like to inquire about your services for my property in Cape Town.'
  )}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact Strip */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.location}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.email}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>1 Year Guarantee on Major Repairs</span>
            </span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="top-call-link"
              className="flex items-center gap-1.5 font-bold text-white hover:text-blue-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="top-whatsapp-link"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center" id="nav-brand-logo">
            <CapeGuruLogo size="md" textVariant="dark" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            <a
              href="#hero"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                id="services-dropdown-btn"
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </a>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-2 mt-1 z-50">
                  <a
                    href="#aircon"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
                  >
                    Aircon Installation & Service
                  </a>
                  <a
                    href="#dstv"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
                  >
                    DStv, Openview & TV Mounting
                  </a>
                  <a
                    href="#appliances"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
                  >
                    Appliance Repairs (Fridges, Washing Machines)
                  </a>
                  <a
                    href="#services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
                  >
                    Fibre & WiFi Networking
                  </a>
                  <a
                    href="#services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
                  >
                    Morclick Satellite Internet
                  </a>
                  <a
                    href="#services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium"
                  >
                    Communal & Commercial Tech
                  </a>
                </div>
              )}
            </div>

            <a
              href="#aircon"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              Aircon
            </a>

            <a
              href="#dstv"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              DStv & TV Mounting
            </a>

            <a
              href="#appliances"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              Appliance Repairs
            </a>

            <a
              href="#why-us"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-cta"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="nav-book-btn"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Technician</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 bg-white rounded-lg p-2 shadow-lg">
            <div className="flex flex-col gap-1">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
              >
                Home
              </a>
              <a
                href="#aircon"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
              >
                Aircon Installation & Repairs
              </a>
              <a
                href="#dstv"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
              >
                DStv, Openview & TV Mounting
              </a>
              <a
                href="#appliances"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
              >
                Appliance Repairs (1 Year Guarantee)
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
              >
                All Services (WiFi, Fibre, Commercial)
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
              >
                About Cape Guru
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
              >
                Contact & Areas Covered
              </a>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2 mt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request a Technician</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>082 203 8548</span>
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
