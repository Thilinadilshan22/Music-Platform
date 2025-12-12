import { useState, useEffect, useRef } from 'react';
import { Search, X, Music, User, Video, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { featuredTracks, trendingTracks, Track } from '@/data/mockMusicData';
import { artists, Artist } from '@/data/artistsData';
import { videos } from '@/data/videoData';
import { events } from '@/data/eventsData';

interface SearchResult {
    id: string;
    title: string;
    subtitle: string;
    type: 'track' | 'artist' | 'video' | 'event';
    url: string;
}

export function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Search function
    useEffect(() => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }

        const query = searchQuery.toLowerCase();
        const searchResults: SearchResult[] = [];
        const allTracks = [...featuredTracks, ...trendingTracks];

        // Search tracks
        allTracks
            .filter((track: Track) =>
                track.title.toLowerCase().includes(query) ||
                track.artist.toLowerCase().includes(query)
            )
            .slice(0, 3)
            .forEach((track: Track) => {
                searchResults.push({
                    id: track.id,
                    title: track.title,
                    subtitle: track.artist,
                    type: 'track',
                    url: '/music'
                });
            });

        // Search artists
        artists
            .filter((artist: Artist) =>
                artist.name.toLowerCase().includes(query) ||
                artist.genres.some(genre => genre.toLowerCase().includes(query))
            )
            .slice(0, 3)
            .forEach((artist: Artist) => {
                searchResults.push({
                    id: artist.id.toString(),
                    title: artist.name,
                    subtitle: artist.genres.join(', '),
                    type: 'artist',
                    url: '/artists'
                });
            });

        // Search videos
        videos
            .filter(video =>
                video.title.toLowerCase().includes(query) ||
                video.artist.toLowerCase().includes(query)
            )
            .slice(0, 2)
            .forEach(video => {
                searchResults.push({
                    id: video.id,
                    title: video.title,
                    subtitle: video.artist,
                    type: 'video',
                    url: '/videos'
                });
            });

        // Search events
        events
            .filter(event =>
                event.title.toLowerCase().includes(query) ||
                event.lineup.some(artist => artist.name.toLowerCase().includes(query)) ||
                event.venue.city.toLowerCase().includes(query)
            )
            .slice(0, 2)
            .forEach(event => {
                searchResults.push({
                    id: event.id,
                    title: event.title,
                    subtitle: `${event.lineup[0]?.name || 'Various Artists'} • ${event.venue.city}`,
                    type: 'event',
                    url: '/events'
                });
            });

        setResults(searchResults);
    }, [searchQuery]);

    const handleResultClick = (result: SearchResult) => {
        navigate(result.url);
        setIsOpen(false);
        setSearchQuery('');
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'track': return Music;
            case 'artist': return User;
            case 'video': return Video;
            case 'event': return Calendar;
            default: return Search;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'track': return 'text-purple-600 dark:text-purple-400';
            case 'artist': return 'text-blue-600 dark:text-blue-400';
            case 'video': return 'text-pink-600 dark:text-pink-400';
            case 'event': return 'text-orange-600 dark:text-orange-400';
            default: return 'text-slate-600 dark:text-slate-400';
        }
    };

    return (
        <div ref={searchRef} className="relative">
            {/* Search Button */}
            {!isOpen && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(true)}
                    className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all font-semibold text-slate-700 dark:text-slate-300"
                >
                    <Search className="w-4 h-4" />
                    <span className="hidden xl:inline">Search</span>
                </motion.button>
            )}

            {/* Search Input */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 'auto', opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-0 z-50"
                    >
                        <div className="relative">
                            <div className="flex items-center bg-white dark:bg-slate-800 rounded-xl border-2 border-purple-500 dark:border-purple-600 shadow-lg">
                                <Search className="w-4 h-4 ml-3 text-slate-400" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search tracks, artists, videos..."
                                    className="px-3 py-2.5 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400 w-64 sm:w-80"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors mr-1"
                                    >
                                        <X className="w-4 h-4 text-slate-400" />
                                    </button>
                                )}
                            </div>

                            {/* Search Results */}
                            <AnimatePresence>
                                {results.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl max-h-96 overflow-y-auto"
                                    >
                                        <div className="p-2">
                                            {results.map((result) => {
                                                const Icon = getIcon(result.type);
                                                return (
                                                    <motion.button
                                                        key={`${result.type}-${result.id}`}
                                                        whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                                                        onClick={() => handleResultClick(result)}
                                                        className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left"
                                                    >
                                                        <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-700`}>
                                                            <Icon className={`w-4 h-4 ${getTypeColor(result.type)}`} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-semibold text-slate-900 dark:text-white truncate">
                                                                {result.title}
                                                            </p>
                                                            <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                                                                {result.subtitle} • {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                                                            </p>
                                                        </div>
                                                    </motion.button>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* No Results */}
                            {searchQuery && results.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl p-4"
                                >
                                    <p className="text-center text-slate-600 dark:text-slate-400">
                                        No results found for "{searchQuery}"
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
