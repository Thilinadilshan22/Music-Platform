// Mock music data for the platform
export interface Track {
    id: string;
    title: string;
    artist: string;
    album: string;
    duration: number; // in seconds
    coverUrl: string;
    audioUrl?: string;
    genre: string;
    releaseYear: number;
    plays: number;
}

export interface Playlist {
    id: string;
    name: string;
    description: string;
    coverUrl: string;
    tracks: Track[];
    createdBy: string;
    isPublic: boolean;
}

export interface Genre {
    id: string;
    name: string;
    color: string;
    iconName: string;
}

// Featured tracks
export const featuredTracks: Track[] = [
    {
        id: '1',
        title: 'Animals',
        artist: 'Martin Garrix',
        album: 'Gold Skies',
        duration: 245,
        coverUrl: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=400&fit=crop',
        genre: 'Progressive House',
        releaseYear: 2013,
        plays: 125000000
    },
    {
        id: '2',
        title: 'In The Name Of Love',
        artist: 'Martin Garrix',
        album: 'Seven',
        duration: 198,
        coverUrl: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=400&h=400&fit=crop',
        genre: 'Progressive House',
        releaseYear: 2016,
        plays: 98000000
    },
    {
        id: '3',
        title: 'A State of Trance',
        artist: 'Armin van Buuren',
        album: 'ASOT Radio',
        duration: 312,
        coverUrl: 'https://images.unsplash.com/photo-1571609842705-e8a13e62ff4b?w=400&h=400&fit=crop',
        genre: 'Trance',
        releaseYear: 2023,
        plays: 21000000
    },
    {
        id: '4',
        title: 'Adagio for Strings',
        artist: 'Tiësto',
        album: 'In Search of Sunrise',
        duration: 267,
        coverUrl: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?w=400&h=400&fit=crop',
        genre: 'Trance',
        releaseYear: 2005,
        plays: 75000000
    },
    {
        id: '5',
        title: 'Titanium',
        artist: 'David Guetta',
        album: 'Nothing but the Beat',
        duration: 223,
        coverUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
        genre: 'Electro House',
        releaseYear: 2011,
        plays: 180000000
    },
    {
        id: '6',
        title: 'Strobe',
        artist: 'Deadmau5',
        album: 'For Lack of a Better Name',
        duration: 201,
        coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
        genre: 'Progressive House',
        releaseYear: 2009,
        plays: 145000000
    },
    {
        id: '15',
        title: 'Happier',
        artist: 'Marshmello',
        album: 'Joytime II',
        duration: 214,
        coverUrl: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=400&fit=crop',
        genre: 'Future Bass',
        releaseYear: 2018,
        plays: 210000000
    },
    {
        id: '16',
        title: 'Firestone',
        artist: 'Kygo',
        album: 'Cloud Nine',
        duration: 228,
        coverUrl: 'https://images.unsplash.com/photo-1571609842705-e8a13e62ff4b?w=400&h=400&fit=crop',
        genre: 'Tropical House',
        releaseYear: 2014,
        plays: 125000000
    },
    {
        id: '17',
        title: 'Heroes',
        artist: 'Alesso',
        album: 'Forever',
        duration: 235,
        coverUrl: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?w=400&h=400&fit=crop',
        genre: 'Progressive House',
        releaseYear: 2014,
        plays: 98000000
    },
    {
        id: '18',
        title: 'Faded',
        artist: 'Alan Walker',
        album: 'Different World',
        duration: 212,
        coverUrl: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=400&h=400&fit=crop',
        genre: 'EDM',
        releaseYear: 2015,
        plays: 320000000
    },
    {
        id: '19',
        title: 'Scary Monsters and Nice Sprites',
        artist: 'Skrillex',
        album: 'Scary Monsters and Nice Sprites',
        duration: 245,
        coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
        genre: 'Dubstep',
        releaseYear: 2010,
        plays: 168000000
    },
    {
        id: '20',
        title: 'Levels',
        artist: 'Avicii',
        album: 'Levels',
        duration: 203,
        coverUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
        genre: 'Progressive House',
        releaseYear: 2011,
        plays: 389000000
    }
];

// Trending tracks
export const trendingTracks: Track[] = [
    {
        id: '7',
        title: 'Summer Days',
        artist: 'Martin Garrix',
        album: 'Seven',
        duration: 189,
        coverUrl: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop',
        genre: 'Progressive House',
        releaseYear: 2019,
        plays: 93200000
    },
    {
        id: '8',
        title: 'Wake Me Up',
        artist: 'Avicii',
        album: 'True',
        duration: 298,
        coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        genre: 'Progressive House',
        releaseYear: 2013,
        plays: 528500000
    },
    {
        id: '9',
        title: 'Summer',
        artist: 'Calvin Harris',
        album: 'Motion',
        duration: 234,
        coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        genre: 'Deep House',
        releaseYear: 2014,
        plays: 192000000
    },
    {
        id: '10',
        title: 'Clarity',
        artist: 'Zedd',
        album: 'Clarity',
        duration: 256,
        coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        genre: 'Electro House',
        releaseYear: 2012,
        plays: 234000000
    },
    {
        id: '11',
        title: 'Alone',
        artist: 'Marshmello',
        album: 'Joytime',
        duration: 278,
        coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
        genre: 'Future Bass',
        releaseYear: 2016,
        plays: 168000000
    },
    {
        id: '12',
        title: 'Apollonia',
        artist: 'Don Diablo',
        album: 'Hexagon',
        duration: 219,
        coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
        genre: 'Future House',
        releaseYear: 2019,
        plays: 21500000
    },
    {
        id: '13',
        title: 'Spaceman',
        artist: 'Hardwell',
        album: 'United We Are',
        duration: 241,
        coverUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop',
        genre: 'Big Room',
        releaseYear: 2012,
        plays: 92000000
    },
    {
        id: '14',
        title: 'Gecko (Overdrive)',
        artist: 'Oliver Heldens',
        album: 'Heldeep',
        duration: 203,
        coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
        genre: 'Future House',
        releaseYear: 2014,
        plays: 57000000
    },
    {
        id: '21',
        title: 'The Nights',
        artist: 'Avicii',
        album: 'Stories',
        duration: 178,
        coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        genre: 'Progressive House',
        releaseYear: 2014,
        plays: 285000000
    },
    {
        id: '22',
        title: 'Red Lights',
        artist: 'Tiësto',
        album: 'A Town Called Paradise',
        duration: 224,
        coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
        genre: 'Electro House',
        releaseYear: 2014,
        plays: 125000000
    }
];

// Genres
export const genres: Genre[] = [
    { id: 'edm', name: 'EDM', color: 'from-purple-500 to-pink-500', iconName: 'Headphones' },
    { id: 'house', name: 'House', color: 'from-blue-500 to-cyan-500', iconName: 'Home' },
    { id: 'techno', name: 'Techno', color: 'from-red-500 to-orange-500', iconName: 'Zap' },
    { id: 'trance', name: 'Trance', color: 'from-indigo-500 to-purple-500', iconName: 'Waves' },
    { id: 'dubstep', name: 'Dubstep', color: 'from-green-500 to-teal-500', iconName: 'Volume2' },
    { id: 'synthwave', name: 'Synthwave', color: 'from-pink-500 to-purple-500', iconName: 'Sunset' },
    { id: 'chillout', name: 'Chillout', color: 'from-cyan-500 to-blue-500', iconName: 'Waves' },
    { id: 'deep-house', name: 'Deep House', color: 'from-yellow-500 to-orange-500', iconName: 'Music' }
];

// Featured playlists
export const featuredPlaylists: Playlist[] = [
    {
        id: 'p1',
        name: 'Today\'s Top Hits',
        description: 'The hottest tracks right now',
        coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
        tracks: [featuredTracks[0], featuredTracks[1], trendingTracks[0]],
        createdBy: 'EDMLoverr',
        isPublic: true
    },
    {
        id: 'p2',
        name: 'Workout Motivation',
        description: 'High energy beats to power your workout',
        coverUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop',
        tracks: [featuredTracks[4], trendingTracks[0], featuredTracks[5]],
        createdBy: 'EDMLoverr',
        isPublic: true
    },
    {
        id: 'p3',
        name: 'Chill Vibes',
        description: 'Relax and unwind with these smooth tracks',
        coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        tracks: [featuredTracks[2], featuredTracks[3]],
        createdBy: 'EDMLoverr',
        isPublic: true
    },
    {
        id: 'p4',
        name: 'Festival Anthems',
        description: 'The biggest tracks from the world\'s best festivals',
        coverUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
        tracks: [featuredTracks[4], trendingTracks[0], trendingTracks[3]],
        createdBy: 'EDMLoverr',
        isPublic: true
    }
];

// Helper function to format duration
export function formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Helper function to format play count
export function formatPlayCount(plays: number): string {
    if (plays >= 1000000) {
        return `${(plays / 1000000).toFixed(1)}M`;
    } else if (plays >= 1000) {
        return `${(plays / 1000).toFixed(1)}K`;
    }
    return plays.toString();
}
