import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Music, TrendingUp, Headphones, Sparkles, Home, Zap, Waves, Volume2, Sunset } from 'lucide-react';
import { TrackCard } from '@/components/music/TrackCard';
import { PlaylistCard } from '@/components/music/PlaylistCard';
import {
    featuredTracks,
    trendingTracks,
    featuredPlaylists,
    genres,
    Genre
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

    useEffect(() => {
        setIsLoaded(true);
    }, []);

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
                            Featured Tracks
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {featuredTracks.map((track, index) => (
                            <TrackCard key={track.id} track={track} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Genres */}
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {genres.map((genre, index) => (
                            <GenreCard key={genre.id} genre={genre} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Now */}
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {trendingTracks.map((track, index) => (
                            <TrackCard key={track.id} track={track} index={index} />
                        ))}
                    </div>
                </div>
            </section>

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
