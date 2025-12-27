import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Music, TrendingUp, Headphones, Sparkles, Home, Zap, Waves, Volume2, Sunset, X, Search } from 'lucide-react';
import { TrackCard } from '@/components/music/TrackCard';
import { PlaylistCard } from '@/components/music/PlaylistCard';
import {
    featuredTracks,
    trendingTracks,
    featuredPlaylists,
    genres,
    Genre,
    Track
} from '@/data/mockMusicData';

// Icon mapping for dynamic rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Headphones,
    Home,
    Zap,
    Waves,
    Volume2,
    Sunset,
    Music,
    Sparkles
};

export function MusicPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const artistFilter = searchParams.get('artist');

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Filter tracks by artist if artist parameter is present
    const handleClearFilter = () => {
        setSearchParams({});
    };

    // Search filter function
    const searchFilter = (track: Track) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return (
            track.title.toLowerCase().includes(query) ||
            track.artist.toLowerCase().includes(query) ||
            track.album.toLowerCase().includes(query) ||
            track.genre.toLowerCase().includes(query)
        );
    };

    // Apply both artist filter and search filter
    const filteredFeaturedTracks = featuredTracks
        .filter(track => artistFilter ? track.artist.toLowerCase().includes(artistFilter.toLowerCase()) : true)
        .filter(searchFilter);

    const filteredTrendingTracks = trendingTracks
        .filter(track => artistFilter ? track.artist.toLowerCase().includes(artistFilter.toLowerCase()) : true)
        .filter(searchFilter);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950/30 pb-32 theme-transition">
            {/* Hero Section */}
            <section className="relative overflow-hidden px-4 sm:px-6 md:px-8 pt-8 pb-16">
                {/* Animated Background Orbs */}
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-700/20 dark:to-pink-700/20 rounded-full blur-3xl"
                />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                            <span className="text-slate-900 dark:text-white">Feel the Beat &</span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                                Live the Music
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Your ultimate destination for discovering, streaming, and sharing Electronic Dance Music
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search Bar Section */}
            <section className="px-4 sm:px-6 md:px-8 mb-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative flex items-center">
                            <Search className="absolute left-4 w-5 h-5 text-slate-400 dark:text-slate-500 z-10" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search tracks by title, artist, album, or genre..."
                                className="w-full pl-12 pr-12 py-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-2 border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg hover:shadow-xl focus:shadow-2xl focus:border-purple-500 dark:focus:border-purple-600 transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 font-semibold"
                            />
                            {searchQuery && (
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 p-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-purple-500 dark:hover:bg-purple-600 rounded-full transition-colors z-10 group"
                                >
                                    <X className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:text-white" />
                                </motion.button>
                            )}
                        </div>

                        {/* Search Stats */}
                        {searchQuery && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-3 text-sm text-slate-600 dark:text-slate-400 font-semibold"
                            >
                                Found {filteredFeaturedTracks.length + filteredTrendingTracks.length} track{filteredFeaturedTracks.length + filteredTrendingTracks.length !== 1 ? 's' : ''} matching "{searchQuery}"
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Artist Filter Badge */}
            {artistFilter && (
                <section className="px-4 sm:px-6 md:px-8 mb-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-300 dark:border-purple-700 rounded-xl"
                        >
                            <Music className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm font-bold text-purple-900 dark:text-purple-200">
                                Showing tracks by: {artistFilter}
                            </span>
                            <button
                                onClick={handleClearFilter}
                                className="ml-2 p-1 hover:bg-purple-200 dark:hover:bg-purple-800 rounded-full transition-colors"
                            >
                                <X className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            </button>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Featured Tracks */}
            <section className="px-4 sm:px-6 md:px-8 mb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                            {artistFilter ? `Tracks by ${artistFilter}` : searchQuery ? 'Search Results' : 'Featured Tracks'}
                        </h2>
                    </motion.div>
                    {filteredFeaturedTracks.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                            {filteredFeaturedTracks.map((track, index) => (
                                <TrackCard key={track.id} track={track} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700">
                            <Music className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                            <p className="text-slate-600 dark:text-slate-400 font-semibold">
                                {searchQuery ? `No tracks found matching "${searchQuery}"` : 'No tracks found for this artist'}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Genres */}
            {!searchQuery && (
                <section className="px-4 sm:px-6 md:px-8 mb-16">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <Music className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                                Browse by Genre
                            </h2>
                        </motion.div>
                        {!artistFilter && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {genres.map((genre, index) => (
                                    <GenreCard key={genre.id} genre={genre} index={index} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Trending Now */}
            {!searchQuery && (
                <section className="px-4 sm:px-6 md:px-8 mb-16">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                                Trending Now
                            </h2>
                        </motion.div>
                        {!artistFilter && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filteredTrendingTracks.map((track, index) => (
                                    <TrackCard key={track.id} track={track} index={index} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Featured Playlists */}
            <section className="px-4 sm:px-6 md:px-8 mb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <Music className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                            Featured Playlists
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredPlaylists.map((playlist, index) => (
                            <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

// Genre Card Component
interface GenreCardProps {
    genre: Genre;
    index: number;
}

function GenreCard({ genre, index }: GenreCardProps) {
    const IconComponent = iconMap[genre.iconName] || Music;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className={`relative overflow-hidden rounded-2xl p-6 cursor-pointer bg-gradient-to-br ${genre.color} shadow-lg hover:shadow-2xl transition-all h-32`}
        >
            <div className="relative z-10">
                <IconComponent className="w-8 h-8 text-white mb-2" />
                <h3 className="text-xl font-black text-white drop-shadow-lg">
                    {genre.name}
                </h3>
            </div>

            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white rounded-full" />
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white rounded-full" />
            </div>
        </motion.div>
    );
}
