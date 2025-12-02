import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from '@/components/shared/Navigation';
import { HeroContent } from '@/features/home/HeroContent';
import { MusicSection } from '@/features/home/MusicSection';
import { VideoSection } from '@/features/home/VideoSection';

export function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();

  // Enhanced parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const floatingY1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const floatingY2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section with Modern White Theme */}
      <div className="relative h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">

        {/* Animated Background Gradient */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-pink-100/40"
          >
            {/* Floating Orbs */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl"
            />
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          style={{ y: floatingY1, opacity }}
          className="absolute top-1/4 left-10 w-20 h-20 bg-white/40 backdrop-blur-xl rounded-2xl shadow-lg rotate-12"
        />
        <motion.div
          style={{ y: floatingY2, opacity }}
          className="absolute top-1/3 right-20 w-16 h-16 bg-white/30 backdrop-blur-xl rounded-full shadow-lg"
        />
        <motion.div
          style={{ y: floatingY1, opacity }}
          className="absolute bottom-1/3 right-10 w-24 h-24 bg-white/35 backdrop-blur-xl rounded-3xl shadow-lg -rotate-12"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <Navigation isLoaded={isLoaded} />
          <HeroContent isLoaded={isLoaded} />
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content Sections */}
      <MusicSection />
      <VideoSection />

      {/* Footer Gradient */}
      <div className="h-20 bg-gradient-to-b from-transparent to-slate-100" />
    </div>
  );
}