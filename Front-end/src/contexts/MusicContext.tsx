import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Track } from '@/data/mockMusicData';

interface MusicContextType {
    // Current playback state
    currentTrack: Track | null;
    isPlaying: boolean;
    queue: Track[];
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    isShuffled: boolean;
    repeatMode: 'off' | 'all' | 'one';

    // Actions
    playTrack: (track: Track) => void;
    togglePlay: () => void;
    playNext: () => void;
    playPrevious: () => void;
    seekTo: (time: number) => void;
    setVolume: (volume: number) => void;
    toggleMute: () => void;
    toggleShuffle: () => void;
    toggleRepeat: () => void;
    addToQueue: (track: Track) => void;
    removeFromQueue: (trackId: string) => void;
    clearQueue: () => void;
    setQueue: (tracks: Track[]) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [queue, setQueueState] = useState<Track[]>([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolumeState] = useState(70);
    const [isMuted, setIsMuted] = useState(false);
    const [isShuffled, setIsShuffled] = useState(false);
    const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');

    const playTrack = useCallback((track: Track) => {
        setCurrentTrack(track);
        setIsPlaying(true);
        setCurrentTime(0);
        setDuration(track.duration);
    }, []);

    const togglePlay = useCallback(() => {
        setIsPlaying(prev => !prev);
    }, []);

    const playNext = useCallback(() => {
        if (queue.length === 0) return;

        if (repeatMode === 'one' && currentTrack) {
            setCurrentTime(0);
            return;
        }

        const currentIndex = currentTrack
            ? queue.findIndex(t => t.id === currentTrack.id)
            : -1;

        let nextIndex = currentIndex + 1;

        if (nextIndex >= queue.length) {
            if (repeatMode === 'all') {
                nextIndex = 0;
            } else {
                setIsPlaying(false);
                return;
            }
        }

        if (isShuffled) {
            nextIndex = Math.floor(Math.random() * queue.length);
        }

        playTrack(queue[nextIndex]);
    }, [queue, currentTrack, repeatMode, isShuffled, playTrack]);

    const playPrevious = useCallback(() => {
        if (currentTime > 3) {
            setCurrentTime(0);
            return;
        }

        if (queue.length === 0) return;

        const currentIndex = currentTrack
            ? queue.findIndex(t => t.id === currentTrack.id)
            : -1;

        let prevIndex = currentIndex - 1;

        if (prevIndex < 0) {
            if (repeatMode === 'all') {
                prevIndex = queue.length - 1;
            } else {
                return;
            }
        }

        playTrack(queue[prevIndex]);
    }, [queue, currentTrack, currentTime, repeatMode, playTrack]);

    const seekTo = useCallback((time: number) => {
        setCurrentTime(time);
    }, []);

    const setVolume = useCallback((newVolume: number) => {
        setVolumeState(newVolume);
        if (newVolume > 0 && isMuted) {
            setIsMuted(false);
        }
    }, [isMuted]);

    const toggleMute = useCallback(() => {
        setIsMuted(prev => !prev);
    }, []);

    const toggleShuffle = useCallback(() => {
        setIsShuffled(prev => !prev);
    }, []);

    const toggleRepeat = useCallback(() => {
        setRepeatMode(prev => {
            if (prev === 'off') return 'all';
            if (prev === 'all') return 'one';
            return 'off';
        });
    }, []);

    const addToQueue = useCallback((track: Track) => {
        setQueueState(prev => [...prev, track]);
    }, []);

    const removeFromQueue = useCallback((trackId: string) => {
        setQueueState(prev => prev.filter(t => t.id !== trackId));
    }, []);

    const clearQueue = useCallback(() => {
        setQueueState([]);
    }, []);

    const setQueue = useCallback((tracks: Track[]) => {
        setQueueState(tracks);
    }, []);

    const value: MusicContextType = {
        currentTrack,
        isPlaying,
        queue,
        currentTime,
        duration,
        volume,
        isMuted,
        isShuffled,
        repeatMode,
        playTrack,
        togglePlay,
        playNext,
        playPrevious,
        seekTo,
        setVolume,
        toggleMute,
        toggleShuffle,
        toggleRepeat,
        addToQueue,
        removeFromQueue,
        clearQueue,
        setQueue
    };

    return (
        <MusicContext.Provider value={value}>
            {children}
        </MusicContext.Provider>
    );
}

export function useMusic() {
    const context = useContext(MusicContext);
    if (context === undefined) {
        throw new Error('useMusic must be used within a MusicProvider');
    }
    return context;
}
