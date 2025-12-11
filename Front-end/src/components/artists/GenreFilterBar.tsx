import { motion } from 'motion/react';
import { ArtistGenre, GenreInfo } from '@/data/artistsData';

interface GenreFilterBarProps {
    genres: GenreInfo[];
    activeGenre: ArtistGenre | 'all';
    onGenreChange: (genre: ArtistGenre | 'all') => void;
}

export function GenreFilterBar({ genres, activeGenre, onGenreChange }: GenreFilterBarProps) {
    return (
        <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-3 min-w-max px-1">
                {genres.map((genre, index) => {
                    const isActive = activeGenre === genre.id;

                    return (
                        <motion.button
                            key={genre.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onGenreChange(genre.id)}
                            className={`
                                relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg
                                ${isActive
                                    ? `bg-gradient-to-r ${genre.color} text-white shadow-lg`
                                    : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white border border-white/60'
                                }
                            `}
                        >
                            <span className="text-lg">{genre.icon}</span>
                            <span>{genre.name}</span>

                            {/* Active Indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeGenre"
                                    className={`absolute inset-0 bg-gradient-to-r ${genre.color} rounded-xl -z-10`}
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
