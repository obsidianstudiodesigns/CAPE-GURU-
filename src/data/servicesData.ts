import { ServiceItem, Testimonial, FAQItem } from '../types';
import { airconImg, dstvImg, applianceImg, landingDesktop } from '../assets/images';

export const COMPANY_INFO = {
  name: 'CAPE GURU',
  legalName: 'Guru Satellite Systems & Tech Solutions',
  subheading: 'Technical Precision · Climate · Satellite · Connected Homes',
  location: 'Western Cape · Cape Town, South Africa',
  phoneDisplay: '082 203 8548',
  phoneIntl: '+27 82 203 8548',
  phoneRaw: '0822038548',
  phoneIntlRaw: '27822038548',
  email: 'Capegurutech@gmail.com',
  website: 'Capeguru.co.za',
  workingHours: 'Monday – Saturday: 08:00 – 18:00 | Emergency Support Available',
  guaranteeText: '1 Year Guarantee on all major appliance repairs & professional workmanship',
  tagline: 'Guru Satellite Systems has a highly customer orientated and experienced technical team.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'aircon-service',
    title: 'Aircon Service & Climate Control',
    category: 'climate',
    badge: 'Popular · All Year Comfort',
    tagline: 'Giving you cool breeze all year round...',
    shortDescription: 'Certified air conditioning installations, preventative maintenance, fault diagnostics, and high-efficiency inverter servicing.',
    fullDescription: 'From high-efficiency inverter split units for Cape Town luxury residences to robust commercial climate setups, Cape Guru provides certified installation, deep antibacterial chemical coil cleaning, refrigerant regassing, and precision fault repairs.',
    features: [
      'New Split-Unit & Multi-Split Inverter Installations',
      'Preventative Maintenance & Deep Chemical Coil Cleaning',
      'Gas Pressure Testing, Leak Detection & Eco-friendly Regas (R410A / R32)',
      'Compressor, PCB, Fan Motor & Thermostat Repairs',
      'Quiet, high energy-efficiency ratings for residential & executive suites'
    ],
    keyHighlights: [
      { label: 'Coverage', value: 'Residential & Commercial' },
      { label: 'Turnaround', value: 'Same / Next Day Service' },
      { label: 'Warranty', value: 'Installation & Workmanship Assured' },
    ],
    image: airconImg,
    flyerSource: 'Flyer 2 & Flyer 4',
    popular: true,
  },
  {
    id: 'dstv-openview',
    title: 'DStv & Openview Installations',
    category: 'satellite',
    badge: 'Fast · Neat · Reliable',
    tagline: 'Professional service for a clearer, better viewing experience',
    shortDescription: 'Flawless satellite dish installations, signal realignment, Explora setups, LNB upgrades, and multi-room viewing.',
    fullDescription: 'Guru Satellite Systems brings master-level satellite precision. Whether fixing pesky E48-32 signal loss during Cape coastal winds, installing multi-switch communal feeds, or setting up triple-view Explora decoders with neat hidden cabling, our technicians ensure pristine HD/4K clarity.',
    features: [
      'DStv HD & Explora Ultra Decoder Setup & Activation',
      'Openview HD Free-to-Air Dish Installation',
      'Precision Satellite Dish Alignment (Spectrum Meter Calibrated)',
      'Signal Repairs, Cable Replacement & Smart LNB Upgrades',
      'Extra View (Triple View) Configuration & Heartbeat Cabling'
    ],
    keyHighlights: [
      { label: 'Signal Quality', value: '100% Spectrum Calibrated' },
      { label: 'Cabling', value: 'Concealed & Weather-Resistant' },
      { label: 'Support', value: 'Emergency Signal Recovery' },
    ],
    image: dstvImg,
    flyerSource: 'Flyer 3',
    popular: true,
  },
  {
    id: 'mobile-appliance-repairs',
    title: 'Mobile Appliance Repairs',
    category: 'appliances',
    badge: '1 Year Guarantee · On-Site',
    tagline: 'We Come To You · Appliances Guru Specialist Team',
    shortDescription: 'Prompt on-site diagnostics and repairs for washing machines, fridges, stoves, ovens, and dishwashers backed by a 1-year guarantee.',
    fullDescription: 'Avoid the stress of hauling heavy appliances. Our fully equipped mobile vans visit your home or business in Cape Town. We service all major European and local brands using OEM-grade components, backed by an industry-leading 1 Year Guarantee.',
    features: [
      'Washing Machine drum, pump, bearing & electronics repair',
      'Fridge & Freezer compressor, defrost & thermostat repairs',
      'Electric & Gas Stoves, Hobs & Range Cooker elements',
      'Built-in Ovens, grill heating elements & digital timer repairs',
      'Dishwasher drainage, spray arm & leak resolutions'
    ],
    keyHighlights: [
      { label: 'Guarantee', value: '1 Year Full Guarantee' },
      { label: 'Convenience', value: 'We Come To You Directly' },
      { label: 'Service', value: 'Fast · Reliable · On-Site' },
    ],
    image: applianceImg,
    flyerSource: 'Flyer 1 (Appliances Guru)',
    popular: true,
  },
  {
    id: 'audio-visual-tv-mounting',
    title: 'Audio Visual & TV Wall Mounting',
    category: 'av',
    badge: 'High-End Aesthetic',
    tagline: 'Cinema-Grade Clean Aesthetics & Immersive Sound',
    shortDescription: 'Sleek architectural TV wall mounting with completely concealed cabling, soundbars, Sonos integration, and surround sound.',
    fullDescription: 'Transform your entertainment space. We mount large format 55” to 98” OLED, QLED, and Frame TVs flush against drywall, brick, or bespoke acoustic wall panelling. Cable concealment and acoustic calibration ensure clean visual elegance.',
    features: [
      'Ultra-Slim Flush & Articulated Swivel Wall Mounting',
      'In-Wall & Conduit Trunking for 100% Invisible Cabling',
      'Soundbar, Subwoofer & 5.1/7.1 Home Theatre Integration',
      'Bespoke TV Backlight & LED Ambience Integration',
      'Media Console Integration & HDMI 2.1 4K/120Hz Routing'
    ],
    keyHighlights: [
      { label: 'Cleanliness', value: 'Zero Visible Clutter' },
      { label: 'Mount Rating', value: 'Heavy Duty Certified' },
      { label: 'Finish', value: 'Luxury Architectural Grade' },
    ],
    image: dstvImg,
    flyerSource: 'Flyer 3',
  },
  {
    id: 'wifi-networking',
    title: 'WiFi & Smart Networking',
    category: 'network',
    badge: 'Zero Dead-Zones',
    tagline: 'Seamless Roaming Gigabit Connectivity Across Your Estate',
    shortDescription: 'Whole-property Mesh WiFi, PoE access points, Cat6/Cat7 structured cabling, and enterprise router configurations.',
    fullDescription: 'Modern homes require bulletproof connectivity for remote work, streaming, and smart home automation. We eliminate WiFi blackspots in thick concrete and multi-storey Western Cape properties using high-performance UniFi, TP-Link Omada, and enterprise mesh access points.',
    features: [
      'Tri-Band WiFi 6 & WiFi 7 Mesh Network Deployments',
      'Indoor & Outdoor Weatherproof High-Gain Access Points',
      'Cat6 / Cat6A Shielded Structured Data Cabling',
      'Network Switch, Patch Panel & Server Cabinet Organising',
      'Smart Home IoT Isolation & Guest Network Security'
    ],
    keyHighlights: [
      { label: 'Speed', value: 'Gigabit Wire-Speed' },
      { label: 'Roaming', value: 'Seamless Fast Roaming' },
      { label: 'Latency', value: 'Ultra-Low Ping Optimized' },
    ],
    image: landingDesktop,
  },
  {
    id: 'fibre-services',
    title: 'Fibre Services & Splicing',
    category: 'network',
    badge: 'Next-Gen Speed',
    tagline: 'High-Speed Optical Infrastructure for Residential & Commercial',
    shortDescription: 'Optical fibre routing, clean trenching, optical termination, OTDR testing, and ONT modem relocation.',
    fullDescription: 'Professional fibre solutions ensuring your connection operates at full capacity. We handle fibre line extensions, internal conduit routing, fusion splicing, and neat termination boxes to position your router exactly where you need it.',
    features: [
      'Fibre Line Extensions & ONT Relocation',
      'Precision Optical Fibre Fusion Splicing',
      'Underground Conduit & Internal Trunking Pathways',
      'Single-Mode & Multi-Mode Commercial Fibre Trunks',
      'Speed Verification & Optical Signal dBm Testing'
    ],
    keyHighlights: [
      { label: 'Precision', value: 'Core-Alignment Fusion' },
      { label: 'Durability', value: 'Armoured & UV-Treated Cable' },
      { label: 'Compliance', value: 'Industry Standard dBm' },
    ],
    image: landingDesktop,
  },
  {
    id: 'morclick-satellite',
    title: 'Morclick Satellite Internet',
    category: 'network',
    badge: 'Remote & Farm Solution',
    tagline: 'High-Speed Internet Everywhere—Even Off The Grid',
    shortDescription: 'Authorised Morclick satellite broadband installations for farms, remote properties, and areas without terrestrial fibre.',
    fullDescription: 'Never let location limit your connectivity. Cape Guru installs Morclick high-throughput satellite broadband dishes and modems across the Western Cape winelands, rural plots, coastal retreats, and commercial off-grid sites.',
    features: [
      'Official Morclick Dish Assembly & Elevation Alignment',
      'Transceiver Mounting & Coaxial Feed to Indoor Terminal',
      'Integrated Router Setup with VoIP and Backup Options',
      'Ideal for Off-Grid, Solar-Powered & Wineland Locations',
      'Reliable Emergency & Business Continuity Internet'
    ],
    keyHighlights: [
      { label: 'Reach', value: '100% Western Cape Coverage' },
      { label: 'Power', value: 'Solar / Inverter Friendly' },
      { label: 'Speed', value: 'High-Throughput Ka-Band' },
    ],
    image: dstvImg,
  },
  {
    id: 'communal-commercial',
    title: 'Communal & Commercial Services',
    category: 'commercial',
    badge: 'Enterprise Grade',
    tagline: 'Multi-Unit SMATV, Fibre Distribution & Commercial Climate',
    shortDescription: 'Comprehensive technical infrastructure for residential estates, hotels, apartment blocks, and corporate offices.',
    fullDescription: 'Tailored contracting for Body Corporates, Property Managers, and Commercial Developers. We design, install, and service SMATV master dish networks, communal fibre backbones, centralized AV systems, and commercial HVAC maintenance agreements.',
    features: [
      'Multi-Dwelling SMATV Satellite Distribution Systems',
      'Estate Fibre & Backbone Network Infrastructure',
      'Commercial Air Conditioning Maintenance Service Level Agreements (SLAs)',
      'Office Boardroom AV, Video Conferencing & Display Walls',
      'Scheduled Preventative Maintenance & Dedicated Support'
    ],
    keyHighlights: [
      { label: 'Scale', value: 'Multi-Unit & Estate Ready' },
      { label: 'SLA', value: 'Custom Maintenance Contracts' },
      { label: 'Compliance', value: 'Fully Insured Technicians' },
    ],
    image: landingDesktop,
  },
  {
    id: 'residential-services',
    title: 'Residential Technical Solutions',
    category: 'residential',
    badge: 'Full Home Tech',
    tagline: 'Complete Smart Home Entertainment & Climate Care',
    shortDescription: 'One-stop technical concierge for home climate, appliances, TV, entertainment, and lightning/surge protection.',
    fullDescription: 'Cape Guru brings together every facet of modern domestic tech under one roof. Our customer-orientated, experienced technicians treat your home with utmost care, cleanliness, and craftsmanship.',
    features: [
      'Surge & Lightning Protection for Sensitive Electronics',
      'Neat Cable Tidying & Media Station Overhauls',
      'Inverter / Battery Backup Power Connections for WiFi & Decoders',
      'Comprehensive Home Technical Audits & Recommendations',
      'Friendly, Courteous, Clean-as-we-go Service Guarantee'
    ],
    keyHighlights: [
      { label: 'Trust', value: 'Vetted & Highly Rated' },
      { label: 'Neatness', value: 'Clean As We Go Guarantee' },
      { label: 'Consultation', value: 'Expert Friendly Advice' },
    ],
    image: airconImg,
  }
];

export const SERVICE_AREAS = [
  'Atlantic Seaboard (Camps Bay, Clifton, Bantry Bay, Sea Point)',
  'City Bowl & Waterfront (V&A, Gardens, Tamboerskloof, Oranjezicht)',
  'Southern Suburbs (Constantia, Bishopscourt, Rondebosch, Claremont, Newlands)',
  'Northern Suburbs (Durbanville, Bellville, Welgemoed, Panorama)',
  'West Coast (Bloubergstrand, Big Bay, Table View, Milnerton)',
  'Helderberg & Winelands (Somerset West, Strand, Stellenbosch, Paarl, Franschhoek)',
  'Hout Bay & False Bay (Noordhoek, Simon’s Town, Fish Hoek, Muizenberg)'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Francois Van Der Merwe',
    suburb: 'Constantia, Cape Town',
    service: 'Aircon Installation & DSTV Setup',
    rating: 5,
    date: 'Recent Client',
    text: 'Outstanding technical competence. Cape Guru installed two inverter aircons in our bedrooms and realigned our DStv dish after winter storms. Everything is exceptionally neat, zero loose wires, and they left the house spotless.',
    verified: true
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    suburb: 'Camps Bay, Cape Town',
    service: 'Appliance Repair & TV Wall Mounting',
    rating: 5,
    date: 'Recent Client',
    text: 'Appliances Guru saved our double-door Bosch fridge on a Saturday morning when the cooling stopped! The technician had the replacement sensor in his mobile van. Backed by a 1-year guarantee. Absolute lifesavers.',
    verified: true
  },
  {
    id: '3',
    name: 'David Goldberg',
    suburb: 'Sea Point, Cape Town',
    service: 'WiFi Mesh & Fibre Relocation',
    rating: 5,
    date: 'Recent Client',
    text: 'We had persistent dead zones due to thick concrete walls. The Cape Guru team cabled high-speed UniFi access points and relocated our fibre ONT neatly. Now getting 500Mbps everywhere including the balcony pool area.',
    verified: true
  },
  {
    id: '4',
    name: 'Thabo Mokoena',
    suburb: 'Century City, Cape Town',
    service: 'DStv Explora & 75" TV Wall Mounting',
    rating: 5,
    date: 'Recent Client',
    text: 'Guru Satellite Systems lives up to its name. Clean, level mounting, concealed power and HDMI cables in the wall cavity, and calibrated satellite signal. Best technician team in the Western Cape.',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How quickly can a Cape Guru technician come out to my property?',
    answer: 'We prioritize same-day and next-day emergency dispatch throughout Cape Town and the greater Western Cape. For urgent aircon breakdowns or fridge failure, call or WhatsApp us on 082 203 8548 for rapid response.'
  },
  {
    question: 'What is covered under the 1 Year Guarantee?',
    answer: 'Our 1 Year Guarantee on major appliance repairs covers both the replacement parts fitted and our technical workmanship. If the same diagnosed issue recurs during this period, our technician returns and resolves it at zero additional cost.'
  },
  {
    question: 'Do you supply new air conditioning units or only repair existing ones?',
    answer: 'We do both! We supply top energy-efficient inverter brands (including Midea, Samsung, Daikin, Alliance) with factory warranties, as well as providing full diagnostics, regassing, chemical servicing, and repairs on all existing brands.'
  },
  {
    question: 'Can you fix DStv signal loss errors (such as E48-32)?',
    answer: 'Yes, this is one of our most common callouts. Signal errors in Cape Town are often caused by dish misalignment from high winds, damaged coax cables, or degraded LNBs. Our technicians use digital spectrum analysers to lock in peak signal quality.'
  },
  {
    question: 'Which areas in the Western Cape do you service?',
    answer: 'We service the entire Cape Peninsula and Western Cape metropole: Atlantic Seaboard, City Bowl, Southern Suburbs, Northern Suburbs, West Coast, Helderberg, Stellenbosch, Paarl, and surrounding rural wineland estates.'
  }
];
