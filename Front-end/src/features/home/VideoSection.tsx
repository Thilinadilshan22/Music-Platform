import { motion } from 'motion/react';
import { Play, Eye, Clock, TrendingUp } from 'lucide-react';

export function VideoSection() {
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
    <div className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 theme-transition">
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
            <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
              Popular Videos
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
            Music Videos
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl">
            Experience the energy with exclusive live sets and music videos
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl transition-all duration-300">
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  {/* Gradient Placeholder */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${video.thumbnail} opacity-30`} />

                  {/* YouTube Embed */}
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-lg text-white text-xs font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>

                  {/* Views Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-lg text-white text-xs font-bold flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-4">{video.artist}</p>

                  {/* Action Button */}
                  <a
                    href={`https://www.youtube.com/@edmloverr_`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-slate-900 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-700 text-white rounded-xl font-semibold transition-all"
                  >
                    <Play className="w-4 h-4" fill="white" />
                    Watch Now
                  </a>
                </div>
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
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-slate-900 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg">
            Load More Videos →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
