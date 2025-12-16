// Artist data and types for the EDM platform

export interface SocialLinks {
    spotify?: string;
    soundcloud?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
}

export interface ArtistStats {
    followers: number;
    monthlyListeners: number;
    totalTracks: number;
    totalAlbums: number;
}

export type ArtistGenre =
    | 'edm'
    | 'progressive-house'
    | 'trance'
    | 'techno'
    | 'dubstep'
    | 'future-bass'
    | 'drum-bass'
    | 'deep-house'
    | 'electro-house'
    | 'tropical-house'
    | 'trap'
    | 'tech-house';

export interface Artist {
    id: string;
    name: string;
    bio: string;
    profileImage: string;
    coverImage: string;
    genres: ArtistGenre[];
    primaryGenre: string;
    country: string;
    verified: boolean;
    socialLinks: SocialLinks;
    stats: ArtistStats;
    trending?: boolean;
    risingStar?: boolean;
    isFollowing?: boolean;
}

// Mock Artists Data
export const artists: Artist[] = [
    {
        id: 'a1',
        name: 'Martin Garrix',
        bio: 'Dutch DJ and record producer. Known for hits like "Animals" and "Scared to be Lonely".',
        profileImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop',
        genres: ['progressive-house', 'edm', 'electro-house'],
        primaryGenre: 'Progressive House',
        country: 'Netherlands',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ',
            instagram: 'https://instagram.com/martingarrix',
            youtube: 'https://youtube.com/@MartinGarrix'
        },
        stats: {
            followers: 28500000,
            monthlyListeners: 25000000,
            totalTracks: 156,
            totalAlbums: 12
        },
        trending: true
    },
    {
        id: 'a2',
        name: 'Armin van Buuren',
        bio: 'Dutch DJ and producer, five-time #1 DJ in the world. Creator of A State of Trance.',
        profileImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=400&fit=crop',
        genres: ['trance', 'progressive-house'],
        primaryGenre: 'Trance',
        country: 'Netherlands',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5',
            instagram: 'https://instagram.com/arminvanbuuren',
            soundcloud: 'https://soundcloud.com/arminvanbuuren'
        },
        stats: {
            followers: 18200000,
            monthlyListeners: 8500000,
            totalTracks: 342,
            totalAlbums: 28
        },
        trending: true
    },
    {
        id: 'a3',
        name: 'Tiësto',
        bio: 'Dutch DJ and producer, Grammy Award winner and one of the greatest DJs of all time.',
        profileImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop',
        genres: ['edm', 'progressive-house', 'electro-house'],
        primaryGenre: 'Big Room',
        country: 'Netherlands',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/2o5jDhtHVPhrJdv3cEQ99Z',
            instagram: 'https://instagram.com/tiesto',
            youtube: 'https://youtube.com/@tiesto'
        },
        stats: {
            followers: 22100000,
            monthlyListeners: 15800000,
            totalTracks: 289,
            totalAlbums: 18
        },
        trending: true
    },
    {
        id: 'a4',
        name: 'David Guetta',
        bio: 'French DJ and producer, two-time Grammy Award winner with numerous chart-topping hits.',
        profileImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=1200&h=400&fit=crop',
        genres: ['electro-house', 'edm', 'progressive-house'],
        primaryGenre: 'Electro House',
        country: 'France',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai',
            instagram: 'https://instagram.com/davidguetta',
            twitter: 'https://twitter.com/davidguetta'
        },
        stats: {
            followers: 31200000,
            monthlyListeners: 28500000,
            totalTracks: 412,
            totalAlbums: 22
        }
    },
    {
        id: 'a5',
        name: 'Deadmau5',
        bio: 'Canadian producer and DJ known for progressive house and electro. Iconic mouse helmet.',
        profileImage: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1200&h=400&fit=crop',
        genres: ['progressive-house', 'electro-house', 'techno'],
        primaryGenre: 'Progressive House',
        country: 'Canada',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx',
            soundcloud: 'https://soundcloud.com/deadmau5',
            instagram: 'https://instagram.com/deadmau5'
        },
        stats: {
            followers: 12800000,
            monthlyListeners: 6200000,
            totalTracks: 234,
            totalAlbums: 16
        }
    },
    {
        id: 'a6',
        name: 'Marshmello',
        bio: 'American DJ and producer known for future bass and electronic pop hits.',
        profileImage: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=400&fit=crop',
        genres: ['future-bass', 'edm', 'trap'],
        primaryGenre: 'Future Bass',
        country: 'USA',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/64KEffDW9EtZ1y2vBYgq8T',
            instagram: 'https://instagram.com/marshmello',
            youtube: 'https://youtube.com/@marshmello'
        },
        stats: {
            followers: 52400000,
            monthlyListeners: 45800000,
            totalTracks: 178,
            totalAlbums: 8
        },
        trending: true
    },
    {
        id: 'a7',
        name: 'Kygo',
        bio: 'Norwegian DJ and producer, pioneer of tropical house. Known for melodic and uplifting tracks.',
        profileImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&h=400&fit=crop',
        genres: ['tropical-house', 'deep-house', 'edm'],
        primaryGenre: 'Tropical House',
        country: 'Norway',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/23fqKkggKUBHNkbKtXEls4',
            instagram: 'https://instagram.com/kygomusic',
            soundcloud: 'https://soundcloud.com/kygo'
        },
        stats: {
            followers: 24600000,
            monthlyListeners: 18900000,
            totalTracks: 142,
            totalAlbums: 6
        }
    },
    {
        id: 'a8',
        name: 'Alesso',
        bio: 'Swedish DJ and producer known for progressive house anthems and festival performances.',
        profileImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=400&fit=crop',
        genres: ['progressive-house', 'edm'],
        primaryGenre: 'Progressive House',
        country: 'Sweden',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/4AVFqumd2ogHFlRbKIjp1t',
            instagram: 'https://instagram.com/alesso'
        },
        stats: {
            followers: 14200000,
            monthlyListeners: 9800000,
            totalTracks: 98,
            totalAlbums: 4
        },
        trending: true
    },
    {
        id: 'a9',
        name: 'Alan Walker',
        bio: 'British-Norwegian DJ known for "Faded" and signature masked performances.',
        profileImage: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=1200&h=400&fit=crop',
        genres: ['edm', 'electro-house'],
        primaryGenre: 'EDM',
        country: 'Norway',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN',
            youtube: 'https://youtube.com/@alanwalker',
            instagram: 'https://instagram.com/alanwalkermusic'
        },
        stats: {
            followers: 43200000,
            monthlyListeners: 35600000,
            totalTracks: 134,
            totalAlbums: 7
        },
        risingStar: true
    },
    {
        id: 'a10',
        name: 'Skrillex',
        bio: 'American DJ and producer, pioneer of dubstep and bass music. Multiple Grammy awards.',
        profileImage: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1200&h=400&fit=crop',
        genres: ['dubstep', 'edm', 'trap'],
        primaryGenre: 'Dubstep',
        country: 'USA',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/5he5w2lnU9x7JFhnwcekXX',
            soundcloud: 'https://soundcloud.com/skrillex',
            instagram: 'https://instagram.com/skrillex'
        },
        stats: {
            followers: 16800000,
            monthlyListeners: 11200000,
            totalTracks: 187,
            totalAlbums: 11
        }
    },
    {
        id: 'a11',
        name: 'Avicii',
        bio: 'Swedish DJ and producer (1989-2018). Legacy includes hits like "Wake Me Up" and "Levels".',
        profileImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=400&fit=crop',
        genres: ['progressive-house', 'edm'],
        primaryGenre: 'Progressive House',
        country: 'Sweden',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6',
            youtube: 'https://youtube.com/@Avicii'
        },
        stats: {
            followers: 38900000,
            monthlyListeners: 32400000,
            totalTracks: 124,
            totalAlbums: 6
        }
    },
    {
        id: 'a12',
        name: 'Calvin Harris',
        bio: 'Scottish DJ and producer, one of the highest-paid DJs with numerous chart hits.',
        profileImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=400&fit=crop',
        genres: ['edm', 'electro-house', 'deep-house'],
        primaryGenre: 'Electro House',
        country: 'UK',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY',
            instagram: 'https://instagram.com/calvinharris',
            twitter: 'https://twitter.com/CalvinHarris'
        },
        stats: {
            followers: 42100000,
            monthlyListeners: 38700000,
            totalTracks: 267,
            totalAlbums: 14
        },
        trending: true
    },
    {
        id: 'a13',
        name: 'Zedd',
        bio: 'Russian-German DJ and producer. Grammy winner known for "Clarity" and "Stay".',
        profileImage: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop',
        genres: ['electro-house', 'progressive-house', 'edm'],
        primaryGenre: 'Electro House',
        country: 'Germany',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/2qxJFvFYMEDqd7ui6kSAcq',
            instagram: 'https://instagram.com/zedd'
        },
        stats: {
            followers: 19400000,
            monthlyListeners: 14600000,
            totalTracks: 156,
            totalAlbums: 9
        }
    },
    {
        id: 'a14',
        name: 'Diplo',
        bio: 'American DJ and producer. Founder of Major Lazer and member of Silk City.',
        profileImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=1200&h=400&fit=crop',
        genres: ['edm', 'trap', 'future-bass'],
        primaryGenre: 'EDM',
        country: 'USA',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/5fMUXHkw8R8eOP2RNVYEZX',
            soundcloud: 'https://soundcloud.com/diplo',
            instagram: 'https://instagram.com/diplo'
        },
        stats: {
            followers: 8600000,
            monthlyListeners: 12300000,
            totalTracks: 423,
            totalAlbums: 19
        }
    },
    {
        id: 'a15',
        name: 'KSHMR',
        bio: 'American DJ and producer known for cinematic EDM and festival anthems.',
        profileImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop',
        genres: ['edm', 'progressive-house', 'electro-house'],
        primaryGenre: 'Big Room',
        country: 'USA',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/5M0yC2jB5R8aReCLFDkSY2',
            instagram: 'https://instagram.com/kshmr'
        },
        stats: {
            followers: 5200000,
            monthlyListeners: 4800000,
            totalTracks: 89,
            totalAlbums: 5
        },
        risingStar: true
    },
    {
        id: 'a16',
        name: 'Hardwell',
        bio: 'Dutch DJ and producer, former #1 DJ in the world. Known for big room house.',
        profileImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1200&h=400&fit=crop',
        genres: ['edm', 'progressive-house', 'electro-house'],
        primaryGenre: 'Big Room',
        country: 'Netherlands',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/6BxRhcl8Dx8vqAT9C7ccIk',
            youtube: 'https://youtube.com/@Hardwell'
        },
        stats: {
            followers: 9800000,
            monthlyListeners: 5600000,
            totalTracks: 142,
            totalAlbums: 8
        }
    },
    {
        id: 'a17',
        name: 'Don Diablo',
        bio: 'Dutch DJ and producer, pioneer of future house. Known for superhero persona.',
        profileImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=1200&h=400&fit=crop',
        genres: ['future-bass', 'progressive-house', 'edm'],
        primaryGenre: 'Future House',
        country: 'Netherlands',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/5FsFkCzERbloIBk2mPXPLy',
            instagram: 'https://instagram.com/dondiablo'
        },
        stats: {
            followers: 6400000,
            monthlyListeners: 4200000,
            totalTracks: 234,
            totalAlbums: 11
        },
        risingStar: true
    },
    {
        id: 'a18',
        name: 'Afrojack',
        bio: 'Dutch DJ and producer. Grammy winner known for collaborations and electro house.',
        profileImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=400&fit=crop',
        genres: ['electro-house', 'edm'],
        primaryGenre: 'Electro House',
        country: 'Netherlands',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz',
            twitter: 'https://twitter.com/afrojack'
        },
        stats: {
            followers: 11200000,
            monthlyListeners: 7800000,
            totalTracks: 198,
            totalAlbums: 9
        }
    },
    {
        id: 'a19',
        name: 'Steve Aoki',
        bio: 'American DJ and producer. Known for energetic performances and cake throwing.',
        profileImage: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop',
        genres: ['edm', 'electro-house'],
        primaryGenre: 'Electro House',
        country: 'USA',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/77AiFEVeAVj2ORpC85QVJs',
            instagram: 'https://instagram.com/steveaoki',
            youtube: 'https://youtube.com/@steveaoki'
        },
        stats: {
            followers: 13600000,
            monthlyListeners: 9200000,
            totalTracks: 387,
            totalAlbums: 23
        }
    },
    {
        id: 'a20',
        name: 'Oliver Heldens',
        bio: 'Dutch DJ and producer. Known for future house and deep house tracks.',
        profileImage: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop',
        coverImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=400&fit=crop',
        genres: ['deep-house', 'future-bass', 'tech-house'],
        primaryGenre: 'Future House',
        country: 'Netherlands',
        verified: true,
        socialLinks: {
            spotify: 'https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca',
            soundcloud: 'https://soundcloud.com/oliverheldens',
            instagram: 'https://instagram.com/oliverheldens'
        },
        stats: {
            followers: 7800000,
            monthlyListeners: 6400000,
            totalTracks: 156,
            totalAlbums: 7
        },
        risingStar: true
    }
];

// Genre Information
export interface GenreInfo {
    id: ArtistGenre | 'all';
    name: string;
    color: string;
    iconName: string;
}

export const genres: GenreInfo[] = [
    { id: 'all', name: 'All Artists', color: 'from-slate-600 to-gray-700', iconName: 'Music' },
    { id: 'edm', name: 'EDM', color: 'from-purple-500 to-pink-500', iconName: 'Headphones' },
    { id: 'progressive-house', name: 'Progressive House', color: 'from-blue-500 to-cyan-500', iconName: 'Home' },
    { id: 'trance', name: 'Trance', color: 'from-indigo-500 to-purple-500', iconName: 'Waves' },
    { id: 'techno', name: 'Techno', color: 'from-red-500 to-orange-500', iconName: 'Zap' },
    { id: 'dubstep', name: 'Dubstep', color: 'from-green-500 to-teal-500', iconName: 'Volume2' },
    { id: 'future-bass', name: 'Future Bass', color: 'from-pink-500 to-purple-500', iconName: 'Sparkles' },
    { id: 'deep-house', name: 'Deep House', color: 'from-cyan-500 to-blue-500', iconName: 'Waves' }
];

// Helper Functions
export function searchArtists(query: string): Artist[] {
    const lowercaseQuery = query.toLowerCase().trim();
    if (!lowercaseQuery) return artists;

    return artists.filter(artist =>
        artist.name.toLowerCase().includes(lowercaseQuery) ||
        artist.primaryGenre.toLowerCase().includes(lowercaseQuery) ||
        artist.country.toLowerCase().includes(lowercaseQuery)
    );
}

export function filterArtistsByGenre(genre: ArtistGenre | 'all'): Artist[] {
    if (genre === 'all') return artists;
    return artists.filter(artist => artist.genres.includes(genre));
}

export function getTrendingArtists(): Artist[] {
    return artists.filter(artist => artist.trending === true);
}

export function getRisingStars(): Artist[] {
    return artists.filter(artist => artist.risingStar === true);
}

export function sortArtistsByPopularity(artistList: Artist[]): Artist[] {
    return [...artistList].sort((a, b) => b.stats.followers - a.stats.followers);
}

export function sortArtistsByName(artistList: Artist[]): Artist[] {
    return [...artistList].sort((a, b) => a.name.localeCompare(b.name));
}

export function formatFollowers(count: number): string {
    if (count >= 1000000) {
        return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
}

export function formatMonthlyListeners(count: number): string {
    return formatFollowers(count);
}
