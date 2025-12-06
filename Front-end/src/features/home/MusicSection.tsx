import { motion } from 'motion/react';
import { Play, Heart, Share2, Sparkles } from 'lucide-react';

export function MusicSection() {
  const tracks = [
    { id: 1, title: 'Midnight Dreams', artist: 'DJ Aurora', plays: '2.4M', gradient: 'from-purple-400 to-pink-400' },
    { id: 2, title: 'Electric Paradise', artist: 'Bass Master', plays: '1.8M', gradient: 'from-blue-400 to-cyan-400' },
    { id: 3, title: 'Neon Nights', artist: 'Synth Wave', plays: '3.2M', gradient: 'from-pink-400 to-orange-400' },
    { id: 4, title: 'Digital Dreams', artist: 'Electro Beats', plays: '1.5M', gradient: 'from-emerald-400 to-teal-400' },
    { id: 5, title: 'Future Bass', artist: 'Wave Rider', plays: '2.1M', gradient: 'from-indigo-400 to-purple-400' },
    { id: 6, title: 'Sunset Vibes', artist: 'Chill Master', plays: '1.9M', gradient: 'from-orange-400 to-red-400' },
  ];

  return (
    <div className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
              Trending Now
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4">
            Tracks
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            Discover the hottest tracks from top producers and emerging artists
          </p>
        </motion.div>

        {/* Music Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                {/* Album Art */}
                <div className="relative aspect-square overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient}`} />

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <button className="w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-slate-900 ml-0.5" fill="currentColor" />
                    </button>
                  </motion.div>

                  {/* Plays Badge */}
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-md rounded-lg text-white text-xs font-bold">
                    {track.plays}
                  </div>
                </div>

                {/* Track Info */}
                <div className="p-3">
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5 truncate group-hover:text-purple-700 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs text-slate-600 truncate">{track.artist}</p>
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-slate-900 hover:bg-purple-600 text-white rounded-xl font-semibold transition-all hover:shadow-lg">
            View All Tracks →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
