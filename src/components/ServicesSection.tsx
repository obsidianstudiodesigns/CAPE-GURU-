import React, { useState, useEffect } from 'react';
import { airconImg, dstvImg, applianceImg } from '../assets/images';
import { COMPANY_INFO } from '../data/servicesData';
import { 
  Wind, 
  Tv, 
  Wrench, 
  Wifi, 
  Building2, 
  Radio, 
  Home, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Check, 
  CheckCircle2,
  Maximize2
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

type TabType = 'aircon' | 'dstv' | 'appliances' | 'network' | 'all';

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<TabType>('aircon');

  // Handle hash navigation from navbar
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#aircon') setActiveTab('aircon');
      else if (hash === '#dstv') setActiveTab('dstv');
      else if (hash === '#appliances') setActiveTab('appliances');
      else if (hash === '#services') setActiveTab('all');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const whatsappLink = (serviceName: string) =>
    `https://wa.me/${COMPANY_INFO.phoneIntlRaw}?text=${encodeURIComponent(
      `Hello Cape Guru, I would like to book a technician for: ${serviceName}`
    )}`;

  return (
    <section id="services" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Select a service category below to view details, prices, and fast booking options.
          </p>
        </div>

        {/* Clean Service Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab('aircon')}
            id="tab-aircon-btn"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              activeTab === 'aircon'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Wind className="w-4 h-4" />
            <span>Aircon Service</span>
          </button>

          <button
            onClick={() => setActiveTab('dstv')}
            id="tab-dstv-btn"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              activeTab === 'dstv'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Tv className="w-4 h-4" />
            <span>DStv & TV Mounting</span>
          </button>

          <button
            onClick={() => setActiveTab('appliances')}
            id="tab-appliances-btn"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              activeTab === 'appliances'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Appliance Repairs</span>
          </button>

          <button
            onClick={() => setActiveTab('network')}
            id="tab-network-btn"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              activeTab === 'network'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Wifi className="w-4 h-4" />
            <span>Fibre & WiFi</span>
          </button>

          <button
            onClick={() => setActiveTab('all')}
            id="tab-all-btn"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>All 8 Services</span>
          </button>
        </div>

        {/* Tab 1: Aircon Services */}
        {activeTab === 'aircon' && (
          <div id="aircon" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Climate & Air Conditioning
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    Aircon Installation, Servicing & Gas Regas
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Giving you a cool breeze all year round. Our certified refrigeration technicians service 
                    and install split units, multi-splits, and commercial inverters for homes and businesses across Cape Town.
                  </p>
                </div>

                {/* 4 Core Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Aircon Installation</div>
                    <div className="text-xs text-slate-500 mt-1">
                      New split-unit mounting, bracket fixing, and concealed pipe trunking.
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Aircon Repairs</div>
                    <div className="text-xs text-slate-500 mt-1">
                      Compressor fault diagnostics, PCB circuit board repairs, and fan motors.
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Chemical Servicing</div>
                    <div className="text-xs text-slate-500 mt-1">
                      Deep coil antibacterial wash, filter overhaul, and drain line flush.
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Gas Pressure & Regas</div>
                    <div className="text-xs text-slate-500 mt-1">
                      Vacuum testing and precision regas with R410A and R32 refrigerant.
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => onOpenBooking('aircon-service')}
                    className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Aircon Service</span>
                  </button>

                  <a
                    href={whatsappLink('Aircon Service / Regas')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Technician</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-300 flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>082 203 8548</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src={airconImg}
                    alt="Aircon Service Cape Town"
                    className="w-full h-64 sm:h-72 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">Expert Service You Can Trust</span>
                    <span>Cape Town & Suburbs</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: DStv & TV Mounting */}
        {activeTab === 'dstv' && (
          <div id="dstv" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Guru Satellite Systems
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    DStv, Openview & TV Wall Mounting
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Professional service for a clearer, better viewing experience. Fast, neat, and reliable satellite 
                    dish alignment, signal recovery, and flush TV wall mounting with completely hidden cables.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">DStv & Openview Setup</div>
                    <div className="text-xs text-slate-500 mt-1">
                      Explora Ultra, HD decoders, and free-to-air Openview installations.
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Signal Repairs & Dish Alignment</div>
                    <div className="text-xs text-slate-500 mt-1">
                      Fixing E48-32 "No Signal", faulty smart LNBs, and storm-damaged brackets.
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">TV Wall Mounting</div>
                    <div className="text-xs text-slate-500 mt-1">
                      Mounting 43" to 85"+ screens with flush or swivel brackets & concealed cabling.
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Decoder & Extra View</div>
                    <div className="text-xs text-slate-500 mt-1">
                      Multi-room heartbeat cabling, remote blasters, and soundbar setup.
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => onOpenBooking('dstv-openview')}
                    className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book DStv Technician</span>
                  </button>

                  <a
                    href={whatsappLink('DStv / Openview / TV Mounting')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Today</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-300 flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>082 203 8548</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src={dstvImg}
                    alt="DStv and TV Mounting Cape Town"
                    className="w-full h-64 sm:h-72 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">Fast · Neat · Reliable</span>
                    <span>Same-day call-outs</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Appliance Repairs */}
        {activeTab === 'appliances' && (
          <div id="appliances" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                    <span>Appliances Guru</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-bold">1 Year Guarantee</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    Mobile Appliance Repairs — We Come To You
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    No heavy lifting or transport needed. Our mobile repair vans visit your home across Cape Town. 
                    All major repairs include our signature 1 Year Guarantee on replacement parts and labor.
                  </p>
                </div>

                {/* 5 appliances grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Washing Machines</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Bearings, pumps, belts & electronic boards</div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Fridges & Freezers</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Compressor checks, gas leaks & thermostats</div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Electric & Gas Stoves</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Solid plates, safety valves & switches</div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Built-in Ovens</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Bake elements, fan motors & door hinges</div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Dishwashers</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Pumps, spray arms & drainage blockages</div>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col justify-center text-center">
                    <div className="font-bold text-emerald-800 text-sm">1 Year Guarantee</div>
                    <div className="text-[10px] text-emerald-600">On all major repairs</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => onOpenBooking('mobile-appliance-repairs')}
                    className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appliance Van</span>
                  </button>

                  <a
                    href={whatsappLink('Appliance Repair (Fridge/Washing Machine/Stove/Oven)')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Van Dispatch</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-300 flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>082 203 8548</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src={applianceImg}
                    alt="Appliances Guru Repairs Cape Town"
                    className="w-full h-64 sm:h-72 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">Bosch, Samsung, LG, Defy, Smeg & more</span>
                    <span className="text-emerald-600 font-bold">1 Year Guarantee</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 4: Fibre, WiFi & Morclick */}
        {activeTab === 'network' && (
          <div id="networking" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Connectivity & Internet
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Fibre Cabling, WiFi Mesh & Morclick Satellite
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  Eliminate dead zones and poor signals. We provide precision optical fibre splicing, 
                  whole-home tri-band mesh systems, and Morclick satellite broadband for rural or off-grid locations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 text-base mb-1">Fibre Services</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Internal fibre line extensions, ONT optical node relocations, patch lead replacement, and precision mechanical splicing.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 text-base mb-1">WiFi & Networking</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-speed Cat6 ethernet runs, UniFi / TP-Link Deco mesh systems, PoE access point installation, and zero buffer streaming.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 text-base mb-1">Morclick Satellite Internet</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Authorized dish mounting and receiver alignment for Morclick high-throughput satellite broadband on plots, farms, and estates.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('wifi-networking')}
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Network Technician</span>
                </button>

                <a
                  href={whatsappLink('WiFi / Fibre / Morclick')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: All 8 Services Full Grid */}
        {activeTab === 'all' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Residential */}
            <div className="p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors">
              <div className="font-bold text-slate-900 text-base">Residential Services</div>
              <p className="text-xs text-slate-600 mt-1.5">
                Complete technical support for homes and apartments including power backup links, smart home sensors, and TV setups.
              </p>
              <button
                onClick={() => onOpenBooking('residential-services')}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Book Service →
              </button>
            </div>

            {/* 2. Morclick */}
            <div className="p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors">
              <div className="font-bold text-slate-900 text-base">Morclick Satellite</div>
              <p className="text-xs text-slate-600 mt-1.5">
                Reliable satellite internet installation for rural properties, farms, and locations without fibre coverage.
              </p>
              <button
                onClick={() => onOpenBooking('morclick-satellite')}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Book Service →
              </button>
            </div>

            {/* 3. Communal & Commercial */}
            <div className="p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors">
              <div className="font-bold text-slate-900 text-base">Communal & Commercial</div>
              <p className="text-xs text-slate-600 mt-1.5">
                SMATV centralized satellite distribution for apartment blocks, hotels, commercial HVAC, and office AV networks.
              </p>
              <button
                onClick={() => onOpenBooking('communal-commercial')}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Book Service →
              </button>
            </div>

            {/* 4. Fibre Services */}
            <div className="p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors">
              <div className="font-bold text-slate-900 text-base">Fibre Services</div>
              <p className="text-xs text-slate-600 mt-1.5">
                Internal fibre cabling, ONT box relocation, optical patch cord fixes, and splice repairs.
              </p>
              <button
                onClick={() => onOpenBooking('fibre-services')}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Book Service →
              </button>
            </div>

            {/* 5. Audio Visual */}
            <div className="p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors">
              <div className="font-bold text-slate-900 text-base">Audio Visual Services</div>
              <p className="text-xs text-slate-600 mt-1.5">
                Architectural TV wall mounting, concealed in-wall conduit runs, soundbars, and multi-room audio distribution.
              </p>
              <button
                onClick={() => onOpenBooking('audio-visual')}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Book Service →
              </button>
            </div>

            {/* 6. WiFi and Networking */}
            <div className="p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors">
              <div className="font-bold text-slate-900 text-base">WiFi and Networking</div>
              <p className="text-xs text-slate-600 mt-1.5">
                Whole-home mesh WiFi, Cat6 ethernet cabling, commercial access points, and signal troubleshooting.
              </p>
              <button
                onClick={() => onOpenBooking('wifi-networking')}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Book Service →
              </button>
            </div>

            {/* 7. DSTV Installations */}
            <div className="p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors">
              <div className="font-bold text-slate-900 text-base">DSTV Installations</div>
              <p className="text-xs text-slate-600 mt-1.5">
                New satellite dish installations, Explora Ultra setups, Extra View, and emergency signal recovery (E48-32).
              </p>
              <button
                onClick={() => onOpenBooking('dstv-openview')}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Book Service →
              </button>
            </div>

            {/* 8. Aircon Service */}
            <div className="p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl transition-colors">
              <div className="font-bold text-slate-900 text-base">Aircon Service</div>
              <p className="text-xs text-slate-600 mt-1.5">
                Split-unit installations, PCB repairs, chemical deep cleaning, antibacterial wash, and gas regassing.
              </p>
              <button
                onClick={() => onOpenBooking('aircon-service')}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Book Service →
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
