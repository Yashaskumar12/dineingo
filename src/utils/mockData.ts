import { Restaurant, Event, Booking } from '../types';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Spice Garden',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India'
    },
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    cuisine: ['Indian', 'North Indian'],
    priceLevel: 3,
    address: 'MG Road, Bangalore',
    openNow: true,
    phoneNumber: '+91-9876543210'
  },
  {
    id: '2',
    name: 'The Coastal Kitchen',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India'
    },
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
    cuisine: ['Seafood', 'Coastal'],
    priceLevel: 2,
    address: 'Indiranagar, Bangalore',
    openNow: true,
    phoneNumber: '+91-9876543211'
  },
  {
    id: '3',
    name: 'Biryani House',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India'
    },
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0',
    cuisine: ['Indian', 'Biryani'],
    priceLevel: 2,
    address: 'Koramangala, Bangalore',
    openNow: true,
    phoneNumber: '+91-9876543212'
  },
  {
    id: '4',
    name: 'Pizza Paradise',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India'
    },
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    cuisine: ['Italian', 'Pizza'],
    priceLevel: 2,
    address: 'Whitefield, Bangalore',
    openNow: true,
    phoneNumber: '+91-9876543213'
  },
  {
    id: '5',
    name: 'Sushi Master',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India'
    },
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    cuisine: ['Japanese', 'Sushi'],
    priceLevel: 4,
    address: 'UB City, Bangalore',
    openNow: true,
    phoneNumber: '+91-9876543214'
  },
  {
    id: '6',
    name: 'Burger Junction',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India'
    },
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    cuisine: ['American', 'Burgers'],
    priceLevel: 2,
    address: 'Marathahalli, Bangalore',
    openNow: true,
    phoneNumber: '+91-9876543215'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Wine Tasting Experience',
    description: 'Join us for an evening of wine tasting featuring selections from around the world',
    date: 'April 25, 2024',
    time: '7:00 PM',
    location: 'The Wine Cellar, Bangalore',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 2500,
    category: 'Food & Wine',
    organizer: 'The Wine Society',
    capacity: 30,
    registeredCount: 12
  }
];

export const mockBookings: Booking[] = [
  {
    id: 1,
    restaurantName: "1947",
    date: "April 15, 2025",
    time: "7:30 PM",
    guests: 2,
    status: "Confirmed"
  }
]; 
