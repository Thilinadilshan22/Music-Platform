import { motion } from 'motion/react';
import { CTAButton } from '@/components/shared/CTAButton';
import { Music, Heart, Share2, Users, Headphones, Radio, Sparkles, TrendingUp } from 'lucide-react';

interface HeroContentProps {
  isLoaded: boolean;
}

export function HeroContent({ isLoaded }: HeroContentProps) {
  const features = [
    {
      icon: Music,
      title: 'Discover & Save Music',
      description: 'Explore thousands of EDM tracks and save your favorites to personalized playlists.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Like & React',
      description: 'Show love for tracks and artists — your preferences fuel personalized recommendations.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Share2,
      title: 'Curate & Share',
      description: 'Build custom playlists and share your favorite EDM moments with the community.',
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Connect',
      description: 'Follow DJs, discover new artists, and join a vibrant community of EDM lovers.',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-12">
      <div className="max-w-6xl w-full">
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-slate-900">Welcome to</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              edmloverr_
            </span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-medium">
            Your ultimate destination for discovering, streaming, and sharing Electronic Dance Music
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/60 hover:border-purple-300 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CTAButton variant="primary">Start Listening</CTAButton>
          <CTAButton variant="secondary">Browse Artists</CTAButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-16 pt-12 border-t border-slate-200"
        >
          {[
            { icon: Headphones, number: '10K+', label: 'Tracks' },
            { icon: Radio, number: '5K+', label: 'Artists' },
            { icon: Users, number: '50K+', label: 'Listeners' },
            { icon: TrendingUp, number: '1M+', label: 'Plays' }
          ].map((stat) => {
            const StatIcon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <StatIcon className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
