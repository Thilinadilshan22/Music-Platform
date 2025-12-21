import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Calendar, Sparkles, Music } from 'lucide-react';
import { EventCard } from '@/components/events/EventCard';
import { EventFilterBar, FilterCategory } from '@/components/events/EventFilterBar';
import { ArtistLineupCard } from '@/components/events/ArtistLineupCard';
import {
    events,
    featuredArtists,
    getEventsByCategory,
    Event
} from '@/data/eventsData';

export function EventsPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
    const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredEvents(events);
        } else {
            const filtered = getEventsByCategory(activeFilter as any);
            setFilteredEvents(filtered);
        }
    }, [activeFilter]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-purple-950/30 pb-32 theme-transition">
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
                                Live the Events
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Your ultimate destination for discovering, attending, and experiencing Electronic Dance Music events
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="px-4 sm:px-6 md:px-8 mb-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <EventFilterBar
                            activeFilter={activeFilter}
                            onFilterChange={setActiveFilter}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Featured Events */}
            <section className="px-4 sm:px-6 md:px-8 mb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                            {activeFilter === 'all' ? 'All Events' :
                                activeFilter === 'this-weekend' ? 'This Weekend' :
                                    activeFilter === 'upcoming' ? 'Upcoming Events' :
                                        activeFilter === 'festival' ? 'Festivals' :
                                            activeFilter === 'club-night' ? 'Club Nights' : 'Virtual Events'}
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
                    </motion.div>

                    {/* Events Grid */}
                    {filteredEvents.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredEvents.map((event, index) => (
                                <EventCard key={event.id} event={event} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-10 h-10 text-slate-400 dark:text-slate-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No events found</h3>
                            <p className="text-slate-600 dark:text-slate-400">Try selecting a different filter</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Featured Artists */}
            <section className="px-4 sm:px-6 md:px-8 mb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <Music className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                            Featured Artists
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
                    </motion.div>

                    {/* Horizontal Scrollable Artist List */}
                    <div className="relative">
                        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                            {featuredArtists.map((artist, index) => (
                                <ArtistLineupCard
                                    key={artist.id}
                                    artist={artist}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="px-4 sm:px-6 md:px-8 mb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                        className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 shadow-2xl"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute -right-8 -top-8 w-40 h-40 bg-white rounded-full" />
                            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white rounded-full" />
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                                Don't Miss Out!
                            </h3>
                            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                                Subscribe to get notified about upcoming events and exclusive early-bird tickets
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
                            >
                                Subscribe Now
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
