import { motion } from 'motion/react';
import { NavLink } from '@/components/shared/NavLink';
import { Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  isLoaded: boolean;
}

export function Navigation({ isLoaded }: NavigationProps) {
  const navLinks = [
    'Home',
    'Music',
    'Videos',
    'Events',
    'Artists'
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Glass Card Container */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-xl border border-white/60">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg sm:text-xl">E</span>
              </div>
              <h1 className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-black tracking-tight">
                edmloverr_
              </h1>
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: -10 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <NavLink label={link} />
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <button className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all font-semibold text-slate-700">
                <Search className="w-4 h-4" />
                <span className="hidden xl:inline">Search</span>
              </button>

              {/* Get Started Button */}
              <Link
                to="/login"
                className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Get Started
              </Link>

              {/* Mobile Menu */}
              <button className="lg:hidden p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                <Menu className="w-5 h-5 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}