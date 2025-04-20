export interface Location {
  city: string;
  state: string;
  country: string;
}

export interface Restaurant {
  id: string;
  name: string;
  location: Location;
  rating: number;
  image: string;
  cuisine?: string[];
  priceLevel?: number;
  address?: string;
  openNow?: boolean;
  phoneNumber?: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  price: number;
  category: string;
  organizer: string;
  capacity: number;
  registeredCount: number;
}

export interface Booking {
  id: number;
  restaurantName: string;
  date: string;
  time: string;
  guests: number;
  status: string;
} 
