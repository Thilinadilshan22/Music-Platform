import { motion } from 'motion/react';
import { Play, Heart, Share2 } from 'lucide-react';

export function MusicSection() {
  const tracks = [
    { id: 1, title: 'Midnight Dreams', artist: 'DJ Aurora', plays: '2.4M', gradient: 'from-purple-400 to-pink-400' },
    { id: 2, title: 'Electric Paradise', artist: 'Bass Master', plays: '1.8M', gradient: 'from-blue-400 to-cyan-400' },
    { id: 3, title: 'Neon Nights', artist: 'Synth Wave', plays: '3.2M', gradient: 'from-pink-400 to-orange-400' },
  ];

  return (
    <div className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-700 border border-purple-200/50">
            🎵 Trending Now
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent px-4">
            Latest Drops
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Discover the hottest tracks from top producers and emerging artists
          </p>
        </motion.div>

        {/* Music Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Album Art */}
                <div className="relative aspect-square rounded-2xl mb-6 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-90`} />

                  {/* Animated Wave Pattern */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-white/40"
                        style={{ bottom: `${i * 20}px` }}
                        animate={{
                          scaleX: [0.3, 0.7, 0.5, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-slate-900 ml-1" fill="currentColor" />
                    </button>
                  </motion.div>

                  {/* Plays Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-bold">
                    ▶ {track.plays}
                  </div>
                </div>

                {/* Track Info */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-slate-600 font-medium">{track.artist}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    Play Now
                  </button>
                  <button className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                    <Heart className="w-5 h-5 text-slate-600" />
                  </button>
                  <button className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                    <Share2 className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-purple-300 rounded-2xl text-slate-900 font-bold hover:shadow-xl transition-all hover:-translate-y-1">
            View All Tracks →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
