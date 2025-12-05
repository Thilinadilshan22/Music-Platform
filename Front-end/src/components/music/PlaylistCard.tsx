import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Playlist } from '@/data/mockMusicData';
import { useMusic } from '@/contexts/MusicContext';

interface PlaylistCardProps {
    playlist: Playlist;
    index?: number;
}

export function PlaylistCard({ playlist, index }: PlaylistCardProps) {
    const { setQueue, playTrack } = useMusic();

    const handlePlayPlaylist = () => {
        setQueue(playlist.tracks);
        if (playlist.tracks.length > 0) {
            playTrack(playlist.tracks[0]);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (index || 0) * 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-5 border border-white/60 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            onClick={handlePlayPlaylist}
        >
            {/* Cover Image */}
            <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                    src={playlist.coverUrl}
                    alt={playlist.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Play Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-3 right-3"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePlayPlaylist();
                        }}
                        className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Playlist Info */}
            <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1 truncate group-hover:text-purple-600 transition-colors">
                    {playlist.name}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2 mb-2">
                    {playlist.description}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{playlist.tracks.length} tracks</span>
                    <span className="truncate ml-2">by {playlist.createdBy}</span>
                </div>
            </div>
        </motion.div>
    );
}
