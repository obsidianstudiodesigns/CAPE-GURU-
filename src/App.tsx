/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutAndCoverage } from './components/AboutAndCoverage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingContactBar } from './components/FloatingContactBar';
import { appliancesVectorPattern } from './assets/images';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingServiceId, setSelectedBookingServiceId] = useState<string | undefined>();

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedBookingServiceId(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white font-sans pb-16 sm:pb-0">
      {/* Top Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Page 1: Hero with photographic wallpaper and key info */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Other Pages: Vector art white wallpaper of aircons, appliances, etc. */}
        <div 
          className="relative bg-white"
          style={{
            backgroundImage: `url(${appliancesVectorPattern})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '460px 460px',
          }}
        >
          {/* Subtle semi-transparent wash so vector drawings are clearly visible while keeping text crisp */}
          <div className="absolute inset-0 bg-white/40 pointer-events-none" />

          <div className="relative z-10">
            {/* Streamlined Services Section with quick tabs (Aircon, DStv, Appliances, Fibre/WiFi, All) */}
            <ServicesSection onOpenBooking={handleOpenBooking} />

            {/* About Guru Satellite Systems & Value Pillars */}
            <AboutAndCoverage onOpenBooking={() => handleOpenBooking()} />

            {/* Direct Contact Info & Callback Request Form */}
            <ContactSection onOpenBooking={() => handleOpenBooking()} />
          </div>
        </div>
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Mobile Sticky Quick Contact & Desktop Floating WhatsApp */}
      <FloatingContactBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={selectedBookingServiceId}
      />
    </div>
  );
}
