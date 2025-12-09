export interface Video {
    id: number;
    youtubeId: string;
    title: string;
    artist: string;
    views: string;
    duration: string;
    category: 'edm' | 'famous' | 'unreleased';
    thumbnail: string;
}

export const videos: Video[] = [
    // EDM Music Videos
    {
        id: 1,
        youtubeId: '60ItHLz5WEA',
        title: 'Faded',
        artist: 'Alan Walker',
        views: '3.5B',
        duration: '3:32',
        category: 'edm',
        thumbnail: 'from-purple-500 to-blue-600'
    },
    {
        id: 2,
        youtubeId: 'IcrbM1l_BoI',
        title: 'Wake Me Up',
        artist: 'Avicii',
        views: '2.1B',
        duration: '4:09',
        category: 'edm',
        thumbnail: 'from-orange-500 to-pink-600'
    },
    {
        id: 3,
        youtubeId: 'izGwDsrQ1eQ',
        title: 'Titanium',
        artist: 'David Guetta ft. Sia',
        views: '1.9B',
        duration: '3:46',
        category: 'edm',
        thumbnail: 'from-cyan-500 to-purple-600'
    },
    {
        id: 4,
        youtubeId: 'D1sZ_vwqwcE',
        title: 'Levels',
        artist: 'Avicii',
        views: '890M',
        duration: '3:18',
        category: 'edm',
        thumbnail: 'from-green-500 to-teal-600'
    },
    {
        id: 5,
        youtubeId: 'GCdwKhTtNNw',
        title: 'Animals',
        artist: 'Martin Garrix',
        views: '1.4B',
        duration: '5:03',
        category: 'edm',
        thumbnail: 'from-red-500 to-orange-600'
    },
    {
        id: 6,
        youtubeId: 'Ry0jJf2S8KY',
        title: 'In My Mind',
        artist: 'Dynoro & Gigi D\'Agostino',
        views: '1.2B',
        duration: '3:24',
        category: 'edm',
        thumbnail: 'from-indigo-500 to-pink-600'
    },

    // Famous Tracks
    {
        id: 7,
        youtubeId: 'JH8eRff9DCs',
        title: 'Don\'t You Worry Child',
        artist: 'Swedish House Mafia',
        views: '1.1B',
        duration: '3:32',
        category: 'famous',
        thumbnail: 'from-blue-500 to-cyan-600'
    },
    {
        id: 8,
        youtubeId: 'YykjpeuMNEk',
        title: 'Alone',
        artist: 'Marshmello',
        views: '2.3B',
        duration: '4:33',
        category: 'famous',
        thumbnail: 'from-white-400 to-gray-600'
    },
    {
        id: 9,
        youtubeId: 'eWUC5Q0RCAA',
        title: 'The Nights',
        artist: 'Avicii',
        views: '823M',
        duration: '2:56',
        category: 'famous',
        thumbnail: 'from-yellow-500 to-orange-600'
    },
    {
        id: 10,
        youtubeId: 'HUxbnadlIz4',
        title: 'Waiting For Love',
        artist: 'Avicii',
        views: '945M',
        duration: '3:50',
        category: 'famous',
        thumbnail: 'from-pink-500 to-purple-600'
    },
    {
        id: 11,
        youtubeId: 'PT2_F-1esPk',
        title: 'The Spectre',
        artist: 'Alan Walker',
        views: '567M',
        duration: '3:13',
        category: 'famous',
        thumbnail: 'from-violet-500 to-blue-600'
    },
    {
        id: 12,
        youtubeId: 'IxuThNgl3YA',
        title: 'Heroes (we could be)',
        artist: 'Alesso ft. Tove Lo',
        views: '432M',
        duration: '3:52',
        category: 'famous',
        thumbnail: 'from-emerald-500 to-cyan-600'
    },

    // Unreleased / Recent Music
    {
        id: 13,
        youtubeId: 'Vn8phH0k5HI',
        title: 'Darkside',
        artist: 'Alan Walker ft. Au/Ra',
        views: '678M',
        duration: '3:26',
        category: 'unreleased',
        thumbnail: 'from-slate-600 to-purple-600'
    },
    {
        id: 14,
        youtubeId: 'F8c8f2nK82w',
        title: 'On My Way',
        artist: 'Alan Walker, Sabrina Carpenter & Farruko',
        views: '534M',
        duration: '3:13',
        category: 'unreleased',
        thumbnail: 'from-sky-500 to-indigo-600'
    },
    {
        id: 15,
        youtubeId: 'qeMFqkcPYcg',
        title: 'Electricity',
        artist: 'Silk City & Dua Lipa',
        views: '412M',
        duration: '3:59',
        category: 'unreleased',
        thumbnail: 'from-fuchsia-500 to-pink-600'
    },
    {
        id: 16,
        youtubeId: 'SlPhMPnQ58k',
        title: 'Scared to be Lonely',
        artist: 'Martin Garrix & Dua Lipa',
        views: '891M',
        duration: '3:38',
        category: 'unreleased',
        thumbnail: 'from-rose-500 to-red-600'
    },
    {
        id: 17,
        youtubeId: 'RgKAFK5djSk',
        title: 'Melody',
        artist: 'Lost Frequencies',
        views: '298M',
        duration: '3:28',
        category: 'unreleased',
        thumbnail: 'from-lime-500 to-green-600'
    },
    {
        id: 18,
        youtubeId: 'h--P8HzYZ74',
        title: 'Happier',
        artist: 'Marshmello ft. Bastille',
        views: '1.2B',
        duration: '3:34',
        category: 'unreleased',
        thumbnail: 'from-amber-500 to-orange-600'
    }
];

export const getVideosByCategory = (category: 'edm' | 'famous' | 'unreleased'): Video[] => {
    return videos.filter(video => video.category === category);
};
