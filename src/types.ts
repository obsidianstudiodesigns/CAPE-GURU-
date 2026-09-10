export type ServiceCategory = 
  | 'all'
  | 'residential'
  | 'climate'
  | 'satellite'
  | 'appliances'
  | 'network'
  | 'av'
  | 'commercial';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  badge?: string;
  features: string[];
  keyHighlights: { label: string; value: string }[];
  image: string;
  flyerSource?: string;
  popular?: boolean;
}

export interface QuoteRequest {
  fullName: string;
  phoneNumber: string;
  email: string;
  suburb: string;
  serviceId: string;
  preferredDate: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  suburb: string;
  service: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
