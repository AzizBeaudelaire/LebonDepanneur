export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Vehicle {
  type: 'car' | 'motorcycle' | 'truck';
  brand?: string;
  model?: string;
  year?: number;
}

export interface EmergencyRequest {
  id: string;
  name: string;
  phone: string;
  location: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  vehicle: Vehicle;
  problem: string;
  timestamp: Date;
}

export interface TowTruck {
  id: string;
  status: 'available' | 'busy' | 'maintenance';
  location: {
    latitude: number;
    longitude: number;
  };
  type: 'light' | 'medium' | 'heavy';
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
}