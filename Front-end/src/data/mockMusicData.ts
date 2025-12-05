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
    icon: string;
}

// Featured tracks
export const featuredTracks: Track[] = [
    {
        id: '1',
        title: 'Midnight Dreams',
        artist: 'DJ Stellar',
        album: 'Night Vibes',
        duration: 245,
        coverUrl: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop',
        genre: 'EDM',
        releaseYear: 2024,
        plays: 1250000
    },
    {
        id: '2',
        title: 'Electric Pulse',
        artist: 'Neon Beats',
        album: 'Synthwave Sessions',
        duration: 198,
        coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
        genre: 'Synthwave',
        releaseYear: 2024,
        plays: 980000
    },
    {
        id: '3',
        title: 'Ocean Waves',
        artist: 'Liquid Motion',
        album: 'Fluid Dynamics',
        duration: 312,
        coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        genre: 'Chillout',
        releaseYear: 2023,
        plays: 2100000
    },
    {
        id: '4',
        title: 'Neon Lights',
        artist: 'Cyber Dreams',
        album: 'Digital Horizon',
        duration: 267,
        coverUrl: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop',
        genre: 'Techno',
        releaseYear: 2024,
        plays: 750000
    },
    {
        id: '5',
        title: 'Sunrise Festival',
        artist: 'Tropical Beats',
        album: 'Summer Anthems',
        duration: 223,
        coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        genre: 'House',
        releaseYear: 2024,
        plays: 1800000
    },
    {
        id: '6',
        title: 'Bass Drop',
        artist: 'SubWave',
        album: 'Low Frequency',
        duration: 201,
        coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        genre: 'Dubstep',
        releaseYear: 2023,
        plays: 1450000
    }
];

// Trending tracks
export const trendingTracks: Track[] = [
    {
        id: '7',
        title: 'Weekend Vibes',
        artist: 'Party Starter',
        album: 'Club Hits 2024',
        duration: 189,
        coverUrl: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=400&fit=crop',
        genre: 'EDM',
        releaseYear: 2024,
        plays: 3200000
    },
    {
        id: '8',
        title: 'Cosmic Journey',
        artist: 'Space Odyssey',
        album: 'Interstellar',
        duration: 298,
        coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
        genre: 'Trance',
        releaseYear: 2024,
        plays: 2850000
    },
    {
        id: '9',
        title: 'Urban Jungle',
        artist: 'City Lights',
        album: 'Metropolitan',
        duration: 234,
        coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
        genre: 'Deep House',
        releaseYear: 2024,
        plays: 1920000
    },
    {
        id: '10',
        title: 'Retro Wave',
        artist: 'Synthmaster',
        album: '80s Revival',
        duration: 256,
        coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
        genre: 'Synthwave',
        releaseYear: 2024,
        plays: 2340000
    }
];

// Genres
export const genres: Genre[] = [
    { id: 'edm', name: 'EDM', color: 'from-purple-500 to-pink-500', icon: '🎧' },
    { id: 'house', name: 'House', color: 'from-blue-500 to-cyan-500', icon: '🏠' },
    { id: 'techno', name: 'Techno', color: 'from-red-500 to-orange-500', icon: '⚡' },
    { id: 'trance', name: 'Trance', color: 'from-indigo-500 to-purple-500', icon: '🌀' },
    { id: 'dubstep', name: 'Dubstep', color: 'from-green-500 to-teal-500', icon: '🔊' },
    { id: 'synthwave', name: 'Synthwave', color: 'from-pink-500 to-purple-500', icon: '🌆' },
    { id: 'chillout', name: 'Chillout', color: 'from-cyan-500 to-blue-500', icon: '🌊' },
    { id: 'deep-house', name: 'Deep House', color: 'from-yellow-500 to-orange-500', icon: '🎵' }
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
