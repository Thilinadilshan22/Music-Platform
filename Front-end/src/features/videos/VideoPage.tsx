import { motion } from 'motion/react';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { VideoCard } from '@/features/videos/VideoCard';
import { getVideosByCategory } from '@/data/videoData';
import { Video, Music2, Sparkles, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function VideoPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const edmVideos = getVideosByCategory('edm');
    const famousVideos = getVideosByCategory('famous');
    const unreleasedVideos = getVideosByCategory('unreleased');

    const sections = [
        {
            id: 'edm',
            title: 'EDM Music Videos',
            description: 'The biggest EDM anthems and legendary tracks that defined the genre',
            icon: Music2,
            videos: edmVideos,
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            id: 'famous',
            title: 'Famous Tracks',
            description: 'Chart-topping hits and festival favorites loved by millions',
            icon: TrendingUp,
            videos: famousVideos,
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'unreleased',
            title: 'Recent Releases',
            description: 'Latest drops and fresh beats from your favorite artists',
            icon: Sparkles,
            videos: unreleasedVideos,
            gradient: 'from-orange-500 to-pink-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-purple-50/30">
            {/* Hero Section */}
            <div className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/40 to-pink-50/30">
                {/* Decorative Orbs */}
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 left-20 w-[450px] h-[450px] bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"
                />

                {/* Content */}
                <div className="relative z-10">
                    <Navigation isLoaded={isLoaded} />

                    {/* Hero Content */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl border border-purple-200 rounded-full mb-6"
                            >
                                <Video className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-bold text-purple-600 uppercase tracking-wide">
                                    Music Videos
                                </span>
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 leading-tight">
                                Watch & Feel
                                <br />
                                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                                    The Music
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                                Immerse yourself in the world's best EDM music videos. Watch, download, and enjoy in picture-in-picture mode.
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap justify-center gap-8 text-center">
                                <div className="px-6 py-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-200/60">
                                    <div className="text-3xl font-black text-slate-900">{edmVideos.length + famousVideos.length + unreleasedVideos.length}+</div>
                                    <div className="text-sm font-semibold text-slate-600">Videos</div>
                                </div>
                                <div className="px-6 py-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-200/60">
                                    <div className="text-3xl font-black text-slate-900">4K</div>
                                    <div className="text-sm font-semibold text-slate-600">Quality</div>
                                </div>
                                <div className="px-6 py-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-200/60">
                                    <div className="text-3xl font-black text-slate-900">Free</div>
                                    <div className="text-sm font-semibold text-slate-600">Always</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Video Sections */}
            <div className="relative z-10 py-12 sm:py-16 md:py-20">
                {sections.map((section, sectionIndex) => {
                    const Icon = section.icon;
                    return (
                        <div key={section.id} className="mb-20 last:mb-0">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                {/* Section Header */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-10"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${section.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
                                                {section.title}
                                            </h2>
                                            <p className="text-slate-600 text-sm sm:text-base mt-1">
                                                {section.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Video Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {section.videos.map((video, index) => (
                                        <VideoCard key={video.id} video={video} index={index} />
                                    ))}
                                </div>
                            </div>

                            {/* Divider between sections */}
                            {sectionIndex < sections.length - 1 && (
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20">
                                    <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
