import { motion } from 'motion/react';
import { Play, Plus } from 'lucide-react';
import { Track } from '@/data/mockMusicData';
import { useMusic } from '@/contexts/MusicContext';
import { formatDuration, formatPlayCount } from '@/data/mockMusicData';

interface TrackCardProps {
    track: Track;
    index?: number;
}

export function TrackCard({ track, index }: TrackCardProps) {
    const { playTrack, setQueue, queue, currentTrack, addToQueue } = useMusic();

    const handlePlay = () => {
        const newQueue = queue.length > 0 ? queue : [track];
        setQueue(newQueue);
        playTrack(track);
    };

    const isCurrentTrack = currentTrack?.id === track.id;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index || 0) * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-4 border border-white/60 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
        >
            {/* Album Art */}
            <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                    src={track.coverUrl}
                    alt={track.title}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Play Button Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePlay}
                        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl"
                    >
                        <Play className="w-6 h-6 text-white fill-current ml-1" />
                    </motion.button>
                </motion.div>

                {/* Playing Indicator */}
                {isCurrentTrack && (
                    <div className="absolute top-2 right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <div className="flex gap-0.5 items-end h-4">
                            <motion.div
                                animate={{ height: ['4px', '16px', '4px'] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="w-1 bg-white rounded-full"
                            />
                            <motion.div
                                animate={{ height: ['8px', '12px', '8px'] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                                className="w-1 bg-white rounded-full"
                            />
                            <motion.div
                                animate={{ height: ['12px', '4px', '12px'] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                                className="w-1 bg-white rounded-full"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Track Info */}
            <div className="space-y-1">
                <h3 className="font-bold text-slate-900 truncate group-hover:text-purple-600 transition-colors">
                    {track.title}
                </h3>
                <p className="text-sm text-slate-600 truncate">{track.artist}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{formatDuration(track.duration)}</span>
                    <span>{formatPlayCount(track.plays)} plays</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        addToQueue(track);
                    }}
                    className="flex-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg font-semibold text-xs text-slate-700 transition-colors flex items-center justify-center gap-1"
                >
                    <Plus className="w-3 h-3" />
                    Queue
                </button>
            </div>
        </motion.div>
    );
}
