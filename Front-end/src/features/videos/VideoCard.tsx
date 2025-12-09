import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Download, PictureInPicture, Eye, Clock } from 'lucide-react';
import { Video } from '@/data/videoData';

interface VideoCardProps {
    video: Video;
    index: number;
}

export function VideoCard({ video, index }: VideoCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handleDownload = () => {
        window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
    };

    const handlePictureInPicture = async () => {
        try {
            // Request picture-in-picture for the iframe's video element
            // Note: This requires the video to be playing and user interaction
            if (iframeRef.current) {
                // Open video in new window as fallback for PiP (since iframe PiP is complex)
                window.open(
                    `https://www.youtube.com/watch?v=${video.youtubeId}`,
                    'PiP Window',
                    'width=640,height=360,left=100,top=100'
                );
            }
        } catch (error) {
            console.error('Picture-in-Picture failed:', error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
        >
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-200/60 hover:border-purple-300 hover:shadow-2xl transition-all duration-500">
                {/* Video Player */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${video.thumbnail} opacity-40`} />

                    {/* YouTube Embed */}
                    {isPlaying ? (
                        <iframe
                            ref={iframeRef}
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <>
                            {/* Thumbnail with Play Button */}
                            <img
                                src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                                alt={video.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback to standard quality if maxres not available
                                    e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                                }}
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                            {/* Play Button Overlay */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsPlaying(true)}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                                    <Play className="w-10 h-10 text-slate-900 group-hover:text-white ml-1" fill="currentColor" />
                                </div>
                            </motion.button>
                        </>
                    )}

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-white text-xs font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                    </div>

                    {/* Views Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1.5 bg-black/70 backdrop-blur-md rounded-lg text-white text-xs font-bold flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {video.views}
                    </div>
                </div>

                {/* Video Info */}
                <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors line-clamp-1">
                        {video.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-semibold mb-4">{video.artist}</p>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleDownload}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                        >
                            <Download className="w-4 h-4" />
                            Download
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePictureInPicture}
                            className="px-3 py-2.5 bg-white border-2 border-purple-200 hover:border-purple-400 rounded-xl transition-all hover:shadow-lg"
                            title="Picture in Picture"
                        >
                            <PictureInPicture className="w-5 h-5 text-purple-600" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
