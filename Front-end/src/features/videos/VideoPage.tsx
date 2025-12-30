import { motion } from 'motion/react';
import { VideoCard } from '@/features/videos/VideoCard';
import { getVideosByCategory } from '@/data/videoData';
import { Music2, Sparkles, TrendingUp } from 'lucide-react';
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
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Subtle Background Gradient */}
                <motion.div
                    className="absolute inset-0 w-full h-full -z-10"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full bg-gradient-to-br from-purple-50/30 via-white to-pink-50/20 dark:from-purple-950/30 dark:via-slate-950 dark:to-pink-950/20"
                    >
                        {/* Animated Background Orbs */}
                        <motion.div
                            animate={{
                                x: [0, 50, 0],
                                y: [0, -30, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-700/20 dark:to-pink-700/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                x: [0, -40, 0],
                                y: [0, 40, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-0 left-0 w- h-80 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 dark:from-blue-700/20 dark:to-indigo-700/20 rounded-full blur-3xl"
                        />
                    </motion.div>
                </motion.div>

                <div className="relative z-10">
                    <div className="px-4 sm:px-6 md:px-8 py-16 sm:py-20">
                        <div className="max-w-6xl mx-auto w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-12"
                            >
                                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                                    <span className="text-slate-900 dark:text-white">Feel the Beat &</span>
                                    <br />
                                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                                        Watch the Music
                                    </span>
                                </h1>
                                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                                    Immerse yourself in the world's best EDM music videos and visual experiences
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Sections */}
            <div className="bg-white dark:bg-slate-950 relative z-10 py-12 sm:py-16 md:py-20 pb-32">
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
                                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                                                {section.title}
                                            </h2>
                                            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-1">
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
                                    <div className="h-px bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-700 to-transparent" />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
