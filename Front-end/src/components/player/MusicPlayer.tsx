import { motion, AnimatePresence } from 'motion/react';
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    VolumeX,
    Shuffle,
    Repeat,
    Repeat1,
    ListMusic,
    Heart
} from 'lucide-react';
import { useMusic } from '@/contexts/MusicContext';
import { formatDuration } from '@/data/mockMusicData';
import { useState, useEffect } from 'react';

export function MusicPlayer() {
    const {
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        isShuffled,
        repeatMode,
        togglePlay,
        playNext,
        playPrevious,
        seekTo,
        setVolume,
        toggleMute,
        toggleShuffle,
        toggleRepeat
    } = useMusic();

    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [localTime, setLocalTime] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    // Simulate time progression
    useEffect(() => {
        if (isPlaying && currentTrack) {
            const interval = setInterval(() => {
                setLocalTime(prev => {
                    const newTime = prev + 1;
                    if (newTime >= duration) {
                        playNext();
                        return 0;
                    }
                    return newTime;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isPlaying, currentTrack, duration, playNext]);

    // Sync local time with context
    useEffect(() => {
        if (!isDragging) {
            setLocalTime(currentTime);
        }
    }, [currentTime, isDragging]);

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const newTime = Math.floor(percent * duration);
        setLocalTime(newTime);
        seekTo(newTime);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseInt(e.target.value));
    };

    if (!currentTrack) return null;

    const progress = (localTime / duration) * 100 || 0;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-t border-slate-200 dark:border-slate-700 shadow-2xl theme-transition"
            >
                {/* Progress Bar */}
                <div
                    className="h-1 bg-slate-200 dark:bg-slate-700 cursor-pointer group relative"
                    onClick={handleSeek}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 relative"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                </div>

                <div className="px-4 py-3 flex items-center justify-between gap-4">
                    {/* Track Info */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <motion.img
                            src={currentTrack.coverUrl}
                            alt={currentTrack.title}
                            className="w-14 h-14 rounded-lg shadow-lg object-cover"
                            whileHover={{ scale: 1.05 }}
                        />
                        <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-white truncate">{currentTrack.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 truncate">{currentTrack.artist}</p>
                        </div>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors hidden sm:block">
                            <Heart className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        </button>
                    </div>

                    {/* Player Controls */}
                    <div className="flex flex-col items-center gap-2 flex-1">
                        <div className="flex items-center gap-2">
                            {/* Shuffle */}
                            <button
                                onClick={toggleShuffle}
                                className={`p-2 rounded-full transition-all hidden md:block ${isShuffled
                                    ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400'
                                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                                    }`}
                            >
                                <Shuffle className="w-4 h-4" />
                            </button>

                            {/* Previous */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={playPrevious}
                                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                            >
                                <SkipBack className="w-5 h-5 text-slate-700 dark:text-slate-300 fill-current" />
                            </motion.button>

                            {/* Play/Pause */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={togglePlay}
                                className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                            >
                                {isPlaying ? (
                                    <Pause className="w-6 h-6 text-white fill-current" />
                                ) : (
                                    <Play className="w-6 h-6 text-white fill-current ml-0.5" />
                                )}
                            </motion.button>

                            {/* Next */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={playNext}
                                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                            >
                                <SkipForward className="w-5 h-5 text-slate-700 dark:text-slate-300 fill-current" />
                            </motion.button>

                            {/* Repeat */}
                            <button
                                onClick={toggleRepeat}
                                className={`p-2 rounded-full transition-all hidden md:block ${repeatMode !== 'off'
                                    ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400'
                                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                                    }`}
                            >
                                {repeatMode === 'one' ? (
                                    <Repeat1 className="w-4 h-4" />
                                ) : (
                                    <Repeat className="w-4 h-4" />
                                )}
                            </button>
                        </div>

                        {/* Time Display */}
                        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <span>{formatDuration(localTime)}</span>
                            <span>/</span>
                            <span>{formatDuration(duration)}</span>
                        </div>
                    </div>

                    {/* Volume & Queue */}
                    <div className="flex items-center gap-3 flex-1 justify-end">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors hidden lg:block">
                            <ListMusic className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        </button>

                        {/* Volume Control */}
                        <div
                            className="relative hidden md:block"
                            onMouseEnter={() => setShowVolumeSlider(true)}
                            onMouseLeave={() => setShowVolumeSlider(false)}
                        >
                            <button
                                onClick={toggleMute}
                                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                            >
                                {isMuted || volume === 0 ? (
                                    <VolumeX className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                ) : (
                                    <Volume2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                )}
                            </button>

                            <AnimatePresence>
                                {showVolumeSlider && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute bottom-full right-0 mb-2 bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-3 border border-slate-200 dark:border-slate-700"
                                    >
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={isMuted ? 0 : volume}
                                            onChange={handleVolumeChange}
                                            className="w-24 accent-purple-600"
                                            style={{
                                                writingMode: 'vertical-lr' as const,
                                                direction: 'rtl' as const,
                                                transform: 'rotate(180deg)'
                                            }}
                                        />
                                        <div className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">
                                            {isMuted ? 0 : volume}%
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
