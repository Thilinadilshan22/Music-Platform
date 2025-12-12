import { motion } from 'motion/react';
import { Music, Heart, Share2, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function FeaturesSection() {
    const navigate = useNavigate();

    const features = [
        {
            id: 1,
            icon: Music,
            title: 'Discover & Save Music',
            description: 'Explore thousands of EDM tracks and save your favorites to personalized playlists.',
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-500',
            darkBgColor: 'dark:bg-purple-600'
        },
        {
            id: 2,
            icon: Heart,
            title: 'Like & React',
            description: 'Show love for tracks and artists — your preferences fuel personalized recommendations.',
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-500',
            darkBgColor: 'dark:bg-blue-600'
        },
        {
            id: 3,
            icon: Share2,
            title: 'Curate & Share',
            description: 'Build custom playlists and share your favorite EDM moments with the community.',
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-500',
            darkBgColor: 'dark:bg-orange-600'
        },
        {
            id: 4,
            icon: Users,
            title: 'Connect',
            description: 'Follow DJs, discover new artists, and join a vibrant community of EDM lovers.',
            color: 'from-teal-500 to-teal-600',
            bgColor: 'bg-teal-500',
            darkBgColor: 'dark:bg-teal-600'
        },
    ];

    const handleStartListening = () => {
        navigate('/music');
    };

    const handleBrowseArtists = () => {
        navigate('/artists');
    };

    return (
        <div className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/30 dark:from-purple-600/30 dark:to-pink-600/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                    }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 dark:from-blue-600/30 dark:to-cyan-600/30 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                        Electronic Dance Music
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                        Everything you need to explore, enjoy, and share the best EDM experiences
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group"
                            >
                                <div className="relative h-full bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-lg transition-all duration-300">
                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                                    >
                                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Corner accent */}
                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Start Listening Button */}
                    <motion.button
                        onClick={handleStartListening}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all overflow-hidden group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                            animate={{
                                x: ['-100%', '200%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <Music className="w-5 h-5" />
                            Start Listening
                        </span>
                    </motion.button>

                    {/* Browse Artists Button */}
                    <motion.button
                        onClick={handleBrowseArtists}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-600 hover:border-purple-500 dark:hover:border-purple-500 rounded-xl font-semibold shadow-sm hover:shadow-lg transition-all"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <Users className="w-5 h-5" />
                            Browse Artists
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}
