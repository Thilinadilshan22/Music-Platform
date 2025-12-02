import { motion } from 'motion/react';
import { CTAButton } from '@/components/shared/CTAButton';

interface HeroContentProps {
  isLoaded: boolean;
}

export function HeroContent({ isLoaded }: HeroContentProps) {
  return (
    <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 bg-white/80 backdrop-blur-xl rounded-full shadow-lg border border-white/40"
        >
          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            LIVE NOW
          </span>
        </motion.div>

        {/* Main Heading with Modern Gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent leading-tight tracking-tight px-4">
            edmloverr_
          </h1>
        </motion.div>

        {/* Subheading with Enhanced Typography */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-slate-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-4"
        >
          Your ultimate destination for discovering, streaming, and sharing the{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
            latest and greatest
          </span>{' '}
          in Electronic Dance Music.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
        >
          {['🎵 Curated Playlists', '🎧 Live DJ Sets', '🎪 Festival Updates'].map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/60 backdrop-blur-md rounded-full text-xs sm:text-sm font-semibold text-slate-700 shadow-md border border-white/60"
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons with Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <CTAButton variant="primary">Explore Music</CTAButton>
          <CTAButton variant="secondary">Watch Videos</CTAButton>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 sm:mt-16 px-4"
        >
          {[
            { number: '10K+', label: 'Tracks' },
            { number: '5K+', label: 'Artists' },
            { number: '50K+', label: 'Listeners' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
