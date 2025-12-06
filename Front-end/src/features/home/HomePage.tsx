import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { HeroContent } from '@/features/home/HeroContent';
import { MusicSection } from '@/features/home/MusicSection';
import { VideoSection } from '@/features/home/VideoSection';

export function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();

  // Subtle parallax effect
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Clean Design */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30">

        {/* Subtle Background Gradient */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full bg-gradient-to-br from-purple-50/30 via-white to-pink-50/20"
          >
            {/* Minimal Decorative Orbs */}
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-20 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -40, 0],
                y: [0, 40, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-20 left-20 w-72 h-72 lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"
            />
          </motion.div>
        </motion.div>

        {/* Minimal Floating Elements */}
        <motion.div
          style={{ y: backgroundY, opacity }}
          className="absolute top-1/4 left-10 w-16 h-16 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg rotate-12"
        />
        <motion.div
          style={{ y: backgroundY, opacity }}
          className="absolute top-1/3 right-20 w-12 h-12 bg-white/25 backdrop-blur-xl rounded-full shadow-lg"
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <Navigation isLoaded={isLoaded} />
          <HeroContent isLoaded={isLoaded} />
        </div>
      </div>

      {/* Content Sections */}
      <MusicSection />
      <VideoSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}