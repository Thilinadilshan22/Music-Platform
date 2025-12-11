import { motion } from 'motion/react';
import { Calendar, Zap, Music, Globe, Clock } from 'lucide-react';

export type FilterCategory = 'all' | 'upcoming' | 'this-weekend' | 'festival' | 'club-night' | 'virtual';

interface EventFilterBarProps {
    activeFilter: FilterCategory;
    onFilterChange: (filter: FilterCategory) => void;
}

interface FilterOption {
    id: FilterCategory;
    label: string;
    icon: React.ReactNode;
}

const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'upcoming', label: 'Upcoming', icon: <Clock className="w-4 h-4" /> },
    { id: 'this-weekend', label: 'This Weekend', icon: <Zap className="w-4 h-4" /> },
    { id: 'festival', label: 'Festivals', icon: <Music className="w-4 h-4" /> },
    { id: 'club-night', label: 'Club Nights', icon: <Music className="w-4 h-4" /> },
    { id: 'virtual', label: 'Virtual', icon: <Globe className="w-4 h-4" /> }
];

export function EventFilterBar({ activeFilter, onFilterChange }: EventFilterBarProps) {
    return (
        <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-3 min-w-max px-1">
                {filterOptions.map((option, index) => {
                    const isActive = activeFilter === option.id;

                    return (
                        <motion.button
                            key={option.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onFilterChange(option.id)}
                            className={`
                                relative flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg
                                ${isActive
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-500/30'
                                    : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white border border-white/60'
                                }
                            `}
                        >
                            {option.icon}
                            <span>{option.label}</span>

                            {/* Active Indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl -z-10"
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
