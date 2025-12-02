import { motion } from 'motion/react';
import { Play, Eye, Clock, TrendingUp } from 'lucide-react';

export function VideoSection() {
  const videos = [
    {
      id: 1,
      title: 'EDM Mix 2024',
      artist: '@edmloverr_',
      views: '1.2M',
      duration: '45:23',
      thumbnail: 'from-violet-500 to-purple-600',
      youtubeId: 'YOUR_VIDEO_ID_1' // Replace with actual video ID from your channel
    },
    {
      id: 2,
      title: 'Festival Highlights',
      artist: '@edmloverr_',
      views: '890K',
      duration: '32:15',
      thumbnail: 'from-cyan-500 to-blue-600',
      youtubeId: 'YOUR_VIDEO_ID_2' // Replace with actual video ID from your channel
    },
    {
      id: 3,
      title: 'Live DJ Set',
      artist: '@edmloverr_',
      views: '2.1M',
      duration: '28:40',
      thumbnail: 'from-orange-500 to-pink-600',
      youtubeId: 'YOUR_VIDEO_ID_3' // Replace with actual video ID from your channel
    },
    {
      id: 4,
      title: 'Best of EDM',
      artist: '@edmloverr_',
      views: '750K',
      duration: '38:52',
      thumbnail: 'from-emerald-500 to-teal-600',
      youtubeId: 'YOUR_VIDEO_ID_4' // Replace with actual video ID from your channel
    },
  ];

  return (
    <div className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-sm font-semibold text-indigo-700 border border-indigo-200/50">
            <TrendingUp className="w-4 h-4" />
            Trending Videos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent px-4">
            Music Videos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Experience the energy with exclusive live sets and music videos
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Video Thumbnail/Player */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  {/* Gradient Placeholder */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${video.thumbnail} opacity-20`} />

                  {/* YouTube Embed */}
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-lg text-white text-xs font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>

                  {/* Views Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-bold flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {video.views} views
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Artist Avatar */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${video.thumbnail} flex items-center justify-center shadow-lg`}>
                      <Play className="w-5 h-5 text-white" fill="white" />
                    </div>

                    {/* Title and Artist */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-slate-600 font-medium">{video.artist}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://www.youtube.com/@edmloverr_`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Play className="w-4 h-4" fill="white" />
                      Watch Now
                    </a>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: video.title,
                            text: `Check out "${video.title}" by ${video.artist}`,
                            url: `https://www.youtube.com/@edmloverr_`
                          });
                        } else {
                          navigator.clipboard.writeText(`https://www.youtube.com/@edmloverr_`);
                          alert('Link copied to clipboard!');
                        }
                      }}
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl font-semibold text-slate-700 transition-colors"
                    >
                      Share
                    </button>
                  </div>
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
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            Load More Videos →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
