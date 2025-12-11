// Event data and types for the EDM platform

export interface Artist {
    id: string;
    name: string;
    genre: string;
    image: string;
}

export interface Venue {
    name: string;
    location: string;
    city: string;
    capacity: number;
}

export type EventCategory = 'upcoming' | 'this-weekend' | 'festival' | 'club-night' | 'virtual' | 'past';
export type EventStatus = 'live-now' | 'selling-fast' | 'few-seats' | 'sold-out' | 'upcoming';

export interface Event {
    id: string;
    title: string;
    description: string;
    date: string; // ISO date string
    endDate?: string; // For multi-day festivals
    time: string;
    venue: Venue;
    lineup: Artist[];
    price: {
        min: number;
        max: number;
        currency: string;
    };
    image: string; // Gradient or image URL
    category: EventCategory;
    status?: EventStatus;
    ticketUrl?: string;
    isFeatured: boolean;
}

// Featured Artists
export const featuredArtists: Artist[] = [
    {
        id: 'a1',
        name: 'Martin Garrix',
        genre: 'Progressive House',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop'
    },
    {
        id: 'a2',
        name: 'Armin van Buuren',
        genre: 'Trance',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
    },
    {
        id: 'a3',
        name: 'Tiësto',
        genre: 'Big Room',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300&h=300&fit=crop'
    },
    {
        id: 'a4',
        name: 'Alesso',
        genre: 'Progressive House',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop'
    },
    {
        id: 'a5',
        name: 'David Guetta',
        genre: 'Electro House',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
    },
    {
        id: 'a6',
        name: 'Deadmau5',
        genre: 'Progressive House',
        image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=300&h=300&fit=crop'
    },
    {
        id: 'a7',
        name: 'Marshmello',
        genre: 'Future Bass',
        image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop'
    },
    {
        id: 'a8',
        name: 'Kygo',
        genre: 'Tropical House',
        image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop'
    }
];

// Mock Events Data
export const events: Event[] = [
    {
        id: 'e1',
        title: 'Tomorrowland 2025',
        description: 'The world\'s biggest electronic music festival returns with an incredible lineup',
        date: '2025-07-18',
        endDate: '2025-07-27',
        time: '12:00 PM',
        venue: {
            name: 'De Schorre',
            location: 'Boom',
            city: 'Belgium',
            capacity: 400000
        },
        lineup: [featuredArtists[0], featuredArtists[1], featuredArtists[2], featuredArtists[4]],
        price: {
            min: 300,
            max: 1200,
            currency: 'EUR'
        },
        image: 'from-purple-600 to-pink-600',
        category: 'festival',
        status: 'selling-fast',
        isFeatured: true
    },
    {
        id: 'e2',
        title: 'Ultra Music Festival Miami',
        description: 'Experience the ultimate electronic music festival in the heart of Miami',
        date: '2025-03-28',
        endDate: '2025-03-30',
        time: '2:00 PM',
        venue: {
            name: 'Bayfront Park',
            location: 'Miami',
            city: 'Florida, USA',
            capacity: 165000
        },
        lineup: [featuredArtists[0], featuredArtists[3], featuredArtists[5]],
        price: {
            min: 400,
            max: 1500,
            currency: 'USD'
        },
        image: 'from-orange-500 to-red-600',
        category: 'festival',
        status: 'selling-fast',
        isFeatured: true
    },
    {
        id: 'e3',
        title: 'Electric Daisy Carnival',
        description: 'Under the electric sky - the largest EDM festival in North America',
        date: '2025-05-16',
        endDate: '2025-05-18',
        time: '7:00 PM',
        venue: {
            name: 'Las Vegas Motor Speedway',
            location: 'Las Vegas',
            city: 'Nevada, USA',
            capacity: 465000
        },
        lineup: [featuredArtists[1], featuredArtists[2], featuredArtists[6], featuredArtists[7]],
        price: {
            min: 350,
            max: 1000,
            currency: 'USD'
        },
        image: 'from-cyan-500 to-blue-600',
        category: 'festival',
        status: 'upcoming',
        isFeatured: true
    },
    {
        id: 'e4',
        title: 'Neon Nights - Miami Club',
        description: 'Saturday night vibes with the hottest DJs in town',
        date: '2025-12-13',
        time: '10:00 PM',
        venue: {
            name: 'Club Space',
            location: '34 NE 11th St',
            city: 'Miami, FL',
            capacity: 2500
        },
        lineup: [featuredArtists[3], featuredArtists[6]],
        price: {
            min: 40,
            max: 100,
            currency: 'USD'
        },
        image: 'from-fuchsia-600 to-purple-600',
        category: 'this-weekend',
        status: 'few-seats',
        isFeatured: true
    },
    {
        id: 'e5',
        title: 'Sunset House Session',
        description: 'Beach party with tropical house vibes and ocean views',
        date: '2025-12-14',
        time: '6:00 PM',
        venue: {
            name: 'Nikki Beach',
            location: 'South Beach',
            city: 'Miami, FL',
            capacity: 1500
        },
        lineup: [featuredArtists[7], featuredArtists[4]],
        price: {
            min: 50,
            max: 150,
            currency: 'USD'
        },
        image: 'from-amber-500 to-orange-600',
        category: 'this-weekend',
        status: 'upcoming',
        isFeatured: false
    },
    {
        id: 'e6',
        title: 'Creamfields',
        description: 'UK\'s biggest dance music festival featuring world-class artists',
        date: '2025-08-28',
        endDate: '2025-08-31',
        time: '12:00 PM',
        venue: {
            name: 'Daresbury Estate',
            location: 'Daresbury',
            city: 'Cheshire, UK',
            capacity: 70000
        },
        lineup: [featuredArtists[0], featuredArtists[5], featuredArtists[2]],
        price: {
            min: 250,
            max: 800,
            currency: 'GBP'
        },
        image: 'from-green-600 to-teal-600',
        category: 'festival',
        status: 'upcoming',
        isFeatured: false
    },
    {
        id: 'e7',
        title: 'Techno Tuesday',
        description: 'Underground techno night with Berlin\'s finest DJs',
        date: '2025-12-16',
        time: '11:00 PM',
        venue: {
            name: 'Berghain',
            location: 'Am Wriezener Bahnhof',
            city: 'Berlin, Germany',
            capacity: 1500
        },
        lineup: [featuredArtists[5]],
        price: {
            min: 20,
            max: 35,
            currency: 'EUR'
        },
        image: 'from-slate-700 to-gray-900',
        category: 'club-night',
        status: 'upcoming',
        isFeatured: false
    },
    {
        id: 'e8',
        title: 'Virtual Rave Universe',
        description: 'Immersive virtual reality EDM experience from the comfort of your home',
        date: '2025-12-20',
        time: '8:00 PM',
        venue: {
            name: 'Metaverse Arena',
            location: 'Online',
            city: 'Worldwide',
            capacity: 100000
        },
        lineup: [featuredArtists[6], featuredArtists[1]],
        price: {
            min: 15,
            max: 50,
            currency: 'USD'
        },
        image: 'from-violet-600 to-indigo-600',
        category: 'virtual',
        status: 'upcoming',
        isFeatured: false
    },
    {
        id: 'e9',
        title: 'A State of Trance 1100',
        description: 'Armin van Buuren\'s legendary trance celebration',
        date: '2025-02-14',
        time: '7:00 PM',
        venue: {
            name: 'Ziggo Dome',
            location: 'Amsterdam',
            city: 'Netherlands',
            capacity: 17000
        },
        lineup: [featuredArtists[1]],
        price: {
            min: 80,
            max: 200,
            currency: 'EUR'
        },
        image: 'from-blue-600 to-indigo-700',
        category: 'upcoming',
        status: 'selling-fast',
        isFeatured: true
    },
    {
        id: 'e10',
        title: 'Warehouse Project',
        description: 'Manchester\'s iconic warehouse party series',
        date: '2025-12-27',
        time: '10:00 PM',
        venue: {
            name: 'Depot Mayfield',
            location: 'Mayfield',
            city: 'Manchester, UK',
            capacity: 10000
        },
        lineup: [featuredArtists[5], featuredArtists[0]],
        price: {
            min: 35,
            max: 75,
            currency: 'GBP'
        },
        image: 'from-red-600 to-pink-600',
        category: 'club-night',
        status: 'upcoming',
        isFeatured: false
    },
    {
        id: 'e11',
        title: 'Coachella Valley Music Festival',
        description: 'Two weekends of music, art, and culture in the California desert',
        date: '2025-04-11',
        endDate: '2025-04-13',
        time: '12:00 PM',
        venue: {
            name: 'Empire Polo Club',
            location: 'Indio',
            city: 'California, USA',
            capacity: 125000
        },
        lineup: [featuredArtists[4], featuredArtists[7]],
        price: {
            min: 450,
            max: 1200,
            currency: 'USD'
        },
        image: 'from-yellow-500 to-pink-600',
        category: 'festival',
        status: 'upcoming',
        isFeatured: false
    },
    {
        id: 'e12',
        title: 'Friday Night Frequencies',
        description: 'Weekly house music session with rotating DJs',
        date: '2025-12-12',
        time: '9:00 PM',
        venue: {
            name: 'Ministry of Sound',
            location: 'Elephant & Castle',
            city: 'London, UK',
            capacity: 1800
        },
        lineup: [featuredArtists[3]],
        price: {
            min: 25,
            max: 50,
            currency: 'GBP'
        },
        image: 'from-indigo-600 to-purple-700',
        category: 'this-weekend',
        status: 'live-now',
        isFeatured: true
    }
];

// Helper Functions
export function getEventsByCategory(category: EventCategory): Event[] {
    return events.filter(event => event.category === category);
}

export function getFeaturedEvents(): Event[] {
    return events.filter(event => event.isFeatured);
}

export function getUpcomingEvents(): Event[] {
    const now = new Date();
    return events
        .filter(event => new Date(event.date) >= now)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function formatEventDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

export function formatEventPrice(price: Event['price']): string {
    if (price.min === price.max) {
        return `${price.currency} ${price.min}`;
    }
    return `${price.currency} ${price.min} - ${price.max}`;
}

export function getDaysUntilEvent(dateString: string): number {
    const now = new Date();
    const eventDate = new Date(dateString);
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

export function isThisWeekend(dateString: string): boolean {
    const eventDate = new Date(dateString);
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
    const nextFriday = new Date(now);
    nextFriday.setDate(now.getDate() + daysUntilFriday);
    nextFriday.setHours(0, 0, 0, 0);

    const nextSunday = new Date(nextFriday);
    nextSunday.setDate(nextFriday.getDate() + 2);
    nextSunday.setHours(23, 59, 59, 999);

    return eventDate >= nextFriday && eventDate <= nextSunday;
}
