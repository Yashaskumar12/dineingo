// Event service for handling event-related operations
import { Event } from '../types';

const mockEvents: Event[] = [
  {
    id: "1",
    name: "Wine Tasting Evening",
    description: "Experience an evening of fine wines from around the world",
    date: "2024-03-20",
    time: "19:00",
    location: "Wine Cellar, Downtown",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
    price: 75,
    category: "Wine & Dine",
    organizer: "Wine Enthusiasts Club",
    capacity: 30,
    registeredCount: 15
  },
  {
    id: "2",
    name: "Cooking Masterclass",
    description: "Learn to cook authentic Italian dishes with Chef Mario",
    date: "2024-03-25",
    time: "18:00",
    location: "Culinary Institute",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
    price: 120,
    category: "Cooking Class",
    organizer: "Culinary Institute",
    capacity: 20,
    registeredCount: 12
  }
];

export const getMockEventById = (id: string): Event | null => {
  return mockEvents.find(event => event.id === id) || null;
};

export const getAllMockEvents = (): Event[] => {
  return mockEvents;
};

export const getMockEventCapacity = (id?: string): number => {
  if (id) {
    const event = mockEvents.find(event => event.id === id);
    return event ? event.capacity : 0;
  }
  // If no ID is provided, return a random capacity between 20 and 100
  return Math.floor(Math.random() * 81) + 20;
}; 