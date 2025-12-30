import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Music2, Sparkles, TrendingUp, Users } from 'lucide-react';
import { ArtistCard } from '@/components/artists/ArtistCard';
import { GenreFilterBar } from '@/components/artists/GenreFilterBar';
import { SearchBar } from '@/components/artists/SearchBar';
import {
    artists,
    genres,
    ArtistGenre,
    searchArtists,
    getTrendingArtists,
    getRisingStars,
    Artist
} from '@/data/artistsData';

export function ArtistsPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeGenre, setActiveGenre] = useState<ArtistGenre | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredArtists, setFilteredArtists] = useState<Artist[]>(artists);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        let result = artists;

        // Apply search filter
        if (searchQuery) {
            result = searchArtists(searchQuery);
        }

        // Apply genre filter
        if (activeGenre !== 'all') {
            result = result.filter(artist => artist.genres.includes(activeGenre));
        }

        setFilteredArtists(result);
    }, [activeGenre, searchQuery]);

    const trendingArtists = getTrendingArtists();
    const risingStars = getRisingStars();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Subtle Background Gradient */}
                <motion.div
                    className="absolute inset-0 w-full h-full -z-10"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full bg-gradient-to-br from-purple-50/30 via-white to-pink-50/20 dark:from-purple-950/30 dark:via-slate-950 dark:to-pink-950/20"
                    >
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
                        <motion.div
                            animate={{
                                x: [0, -40, 0],
                                y: [0, 40, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 dark:from-blue-700/20 dark:to-indigo-700/20 rounded-full blur-3xl"
                        />
                    </motion.div>
                </motion.div>

                <div className="relative z-10">
                    <div className="px-4 sm:px-6 md:px-8 py-16 sm:py-20">
                        <div className="max-w-6xl mx-auto w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-8"
                            >
                                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                                    <span className="text-slate-900 dark:text-white">Feel the Beat &</span>
                                    <br />
                                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                                        Meet the Artists
                                    </span>
                                </h1>
                                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                                    Explore the world's top EDM DJs, producers, and rising stars shaping the scene
                                </p>

                                {/* Search Bar */}
                                <SearchBar onSearch={setSearchQuery} />
                            </motion.div>

                            {/* Quick Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 }}
                                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
                            >
                                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 text-center shadow-lg border border-white/60 dark:border-slate-700/60 theme-transition">
                                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">{artists.length}</div>
                                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">Total Artists</div>
                                </div>
                                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 text-center shadow-lg border border-white/60 dark:border-slate-700/60 theme-transition">
                                    <Music2 className="w-6 h-6 text-pink-600 dark:text-pink-400 mx-auto mb-2" />
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">{genres.length - 1}</div>
                                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">Genres</div>
                                </div>
                                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 text-center shadow-lg border border-white/60 dark:border-slate-700/60 theme-transition">
                                    <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">{trendingArtists.length}</div>
                                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">Trending</div>
                                </div>
                                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 text-center shadow-lg border border-white/60 dark:border-slate-700/60 theme-transition">
                                    <Sparkles className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">{risingStars.length}</div>
                                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">Rising Stars</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="bg-white dark:bg-slate-950 pb-32">

                {/* Genre Filter Bar */}
                <section className="px-4 sm:px-6 md:px-8 mb-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                        >
                            <GenreFilterBar
                                genres={genres}
                                activeGenre={activeGenre}
                                onGenreChange={setActiveGenre}
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Trending Artists Section */}
                {!searchQuery && activeGenre === 'all' && trendingArtists.length > 0 && (
                    <section className="px-4 sm:px-6 md:px-8 mb-16">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-3 mb-6"
                            >
                                <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                                    Trending Artists
                                </h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
                            </motion.div>

                            <div className="relative">
                                <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                                    {trendingArtists.slice(0, 6).map((artist, index) => (
                                        <div key={artist.id} className="flex-shrink-0 w-72">
                                            <ArtistCard artist={artist} index={index} />
                                        </div>
                                    ))}
                                </div>
                                {/* Scroll Indicator */}
                                <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </section>
                )}

                {/* All Artists Grid */}
                <section className="px-4 sm:px-6 md:px-8 mb-16">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                                {searchQuery
                                    ? `Search Results (${filteredArtists.length})`
                                    : activeGenre === 'all'
                                        ? 'All Artists'
                                        : `${genres.find(g => g.id === activeGenre)?.name} Artists`}
                            </h2>
                            <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
                        </motion.div>

                        {/* Artists Grid */}
                        {filteredArtists.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {filteredArtists.map((artist, index) => (
                                    <ArtistCard key={artist.id} artist={artist} index={index} />
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Music2 className="w-10 h-10 text-slate-400 dark:text-slate-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No artists found</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {searchQuery
                                        ? `No results for "${searchQuery}". Try a different search term.`
                                        : 'Try selecting a different genre'}
                                </p>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Rising Stars Section */}
                {!searchQuery && activeGenre === 'all' && risingStars.length > 0 && (
                    <section className="px-4 sm:px-6 md:px-8 mb-16">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.7 }}
                                className="flex items-center gap-3 mb-6"
                            >
                                <Sparkles className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                                    Rising Stars
                                </h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {risingStars.map((artist, index) => (
                                    <ArtistCard key={artist.id} artist={artist} index={index} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
