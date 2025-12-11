import { motion } from 'motion/react';
import { Calendar, MapPin, Ticket, Users } from 'lucide-react';
import { Event, formatEventDate, formatEventPrice, getDaysUntilEvent } from '@/data/eventsData';

interface EventCardProps {
    event: Event;
    index: number;
}

export function EventCard({ event, index }: EventCardProps) {
    const daysUntil = getDaysUntilEvent(event.date);

    const getStatusBadge = () => {
        if (event.status === 'live-now') {
            return (
                <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-red-500 text-white rounded-full text-sm font-bold shadow-lg animate-pulse">
                    🔴 Live Now
                </div>
            );
        }
        if (event.status === 'selling-fast') {
            return (
                <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-bold shadow-lg">
                    🔥 Selling Fast
                </div>
            );
        }
        if (event.status === 'few-seats') {
            return (
                <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-bold shadow-lg">
                    ⚡ Few Seats Left
                </div>
            );
        }
        if (event.status === 'sold-out') {
            return (
                <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-gray-600 text-white rounded-full text-sm font-bold shadow-lg">
                    Sold Out
                </div>
            );
        }
        return null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-white/60 dark:border-slate-700/60 transition-all theme-transition"
        >
            {getStatusBadge()}

            {/* Event Image/Gradient */}
            <div className={`relative h-48 bg-gradient-to-br ${event.image} overflow-hidden`}>
                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white rounded-full" />
                    <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white rounded-full" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 shadow-md capitalize">
                    {event.category.replace('-', ' ')}
                </div>

                {/* Days Until Event */}
                {daysUntil > 0 && daysUntil < 30 && (
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                        In {daysUntil} {daysUntil === 1 ? 'day' : 'days'}
                    </div>
                )}
            </div>

            {/* Event Details */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                    {event.title}
                </h3>

                {/* Date & Time */}
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mb-3">
                    <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-semibold">
                        {formatEventDate(event.date)}
                        {event.endDate && ` - ${formatEventDate(event.endDate)}`}
                    </span>
                </div>

                {/* Venue */}
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mb-3">
                    <MapPin className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-sm font-medium line-clamp-1">
                        {event.venue.name}, {event.venue.city}
                    </span>
                </div>

                {/* Lineup - First 3 Artists */}
                {event.lineup.length > 0 && (
                    <div className="flex items-center gap-2 mb-4">
                        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {event.lineup.slice(0, 3).map((artist) => (
                                    <div
                                        key={artist.id}
                                        className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white dark:border-slate-800 shadow-md flex items-center justify-center text-white text-xs font-bold"
                                        title={artist.name}
                                    >
                                        {artist.name.charAt(0)}
                                    </div>
                                ))}
                            </div>
                            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                                {event.lineup.length > 3
                                    ? `${event.lineup.slice(0, 2).map(a => a.name).join(', ')} +${event.lineup.length - 2} more`
                                    : event.lineup.map(a => a.name).join(', ')}
                            </span>
                        </div>
                    </div>
                )}

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">From</div>
                        <div className="text-lg font-black text-slate-900 dark:text-white">
                            {formatEventPrice(event.price)}
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={event.status === 'sold-out'}
                    >
                        <Ticket className="w-4 h-4" />
                        {event.status === 'sold-out' ? 'Sold Out' : 'Get Tickets'}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
