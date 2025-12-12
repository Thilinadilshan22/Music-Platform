import { motion, useScroll, useTransform } from 'motion/react';
import { Play, Eye, Clock, TrendingUp, Sparkles, Zap } from 'lucide-react';
import { useRef } from 'react';

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const videos = [
    {
      id: 1,
      title: 'EDM Mix 2024 - Best Festival Anthems',
      artist: '@edmloverr_',
      views: '1.2M',
      duration: '45:23',
      thumbnail: 'from-violet-500 to-purple-600',
      youtubeId: 'YOUR_VIDEO_ID_1'
    },
    {
      id: 2,
      title: 'Festival Highlights 2024',
      artist: '@edmloverr_',
      views: '890K',
      duration: '32:15',
      thumbnail: 'from-cyan-500 to-blue-600',
      youtubeId: 'YOUR_VIDEO_ID_2'
    },
    {
      id: 3,
      title: 'Live DJ Set - Tomorrowland',
      artist: '@edmloverr_',
      views: '2.1M',
      duration: '28:40',
      thumbnail: 'from-orange-500 to-pink-600',
      youtubeId: 'YOUR_VIDEO_ID_3'
    },
    {
      id: 4,
      title: 'Best of EDM 2024',
      artist: '@edmloverr_',
      views: '750K',
      duration: '38:52',
      thumbnail: 'from-emerald-500 to-teal-600',
      youtubeId: 'YOUR_VIDEO_ID_4'
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black theme-transition"
    >
      {/* Animated 3D Grid Background */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-20 dark:opacity-30"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center top'
          }}
        />
      </motion.div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-500/20 dark:border-purple-400/30 rounded-2xl"
          style={{ transform: 'rotateX(45deg) rotateZ(45deg)' }}
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 right-16 w-40 h-40 border-2 border-cyan-500/20 dark:border-cyan-400/30 rounded-full"
        />
      </div>

      {/* Gradient Orbs with Parallax */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 dark:from-purple-600/40 dark:to-pink-600/40 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/30 to-blue-500/30 dark:from-cyan-600/40 dark:to-blue-600/40 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent uppercase tracking-wide">
              Popular Videos
            </span>
            <Zap className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent inline-block animate-gradient">
              Music Videos
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl">
            Experience the energy with exclusive live sets and music videos
          </p>
        </motion.div>

        {/* Video Grid - Smaller & More Attractive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group perspective-1000"
            >
              <div className="relative">
                {/* Animated Neon Glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    rotateX: 3,
                    rotateY: -3,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 group-hover:border-transparent shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Rainbow Shine */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/50 via-purple-200/30 to-pink-200/30"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Compact Video Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                    <div className={`absolute inset-0 bg-gradient-to-br ${video.thumbnail} opacity-40`} />
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    {/* Duration Badge */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute bottom-2 right-2 px-2.5 py-1 bg-gradient-to-r from-black/80 to-slate-900/80 backdrop-blur-xl rounded-lg text-white text-xs font-bold flex items-center gap-1 border border-white/20"
                    >
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </motion.div>

                    {/* Views Badge */}
                    <motion.div
                      animate={{
                        boxShadow: ['0 0 20px rgba(139, 92, 246, 0.3)', '0 0 30px rgba(139, 92, 246, 0.6)', '0 0 20px rgba(139, 92, 246, 0.3)'],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-2 left-2 px-2.5 py-1 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-xl rounded-lg text-white text-xs font-bold flex items-center gap-1 border border-white/30"
                    >
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </motion.div>

                    {/* Trending Icon */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-2 right-2 p-1.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-lg"
                    >
                      <TrendingUp className="w-3 h-3 text-white" />
                    </motion.div>

                    {/* Play Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center"
                      >
                        <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="p-3 sm:p-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 group-hover:bg-clip-text transition-all min-h-[2.5rem]">
                        {video.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-3 flex items-center gap-1.5">
                        <motion.span
                          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full"
                        />
                        {video.artist}
                      </p>

                      <a
                        href={`https://www.youtube.com/@edmloverr_`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center justify-center gap-2 w-full px-3 py-2 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-purple-600 dark:to-pink-600 hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-500 dark:hover:to-pink-500 text-white text-sm rounded-lg font-semibold transition-all duration-300 overflow-hidden group/btn shadow-md hover:shadow-xl hover:shadow-purple-500/40"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-200%', '200%'] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        />
                        <Play className="w-3.5 h-3.5 relative z-10 group-hover/btn:scale-110 transition-transform" fill="white" />
                        <span className="relative z-10 text-xs sm:text-sm">Watch</span>
                      </a>
                    </div>
                  </div>

                  {/* Corner Sparkles */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-400/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-500 dark:via-pink-500 dark:to-purple-500 text-white rounded-xl font-bold text-sm sm:text-base transition-all hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden group/more"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Load More Videos
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
