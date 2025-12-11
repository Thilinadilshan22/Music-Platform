import { motion } from 'motion/react';
import { Artist } from '@/data/eventsData';

interface ArtistLineupCardProps {
    artist: Artist;
    index: number;
}

export function ArtistLineupCard({ artist, index }: ArtistLineupCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="flex-shrink-0 w-32 cursor-pointer group"
        >
            <div className="relative">
                {/* Artist Image */}
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg mb-3 ring-4 ring-white group-hover:ring-purple-300 transition-all">
                    <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Artist Info */}
                <div className="text-center">
                    <h4 className="font-black text-slate-900 text-sm mb-1 line-clamp-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                        {artist.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium line-clamp-1">
                        {artist.genre}
                    </p>
                </div>

                {/* Decorative Badge */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.2, type: 'spring' }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <span className="text-white text-xs font-bold">🎧</span>
                </motion.div>
            </div>
        </motion.div>
    );
}
