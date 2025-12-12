import { motion } from 'motion/react';
import { NavLink } from '@/components/shared/NavLink';
import { SearchBar } from '@/components/shared/SearchBar';
import { Menu, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

interface NavigationProps {
  isLoaded: boolean;
}

export function Navigation({ isLoaded }: NavigationProps) {
  const { theme, toggleTheme } = useTheme();
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
      className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-purple-950/30 theme-transition"
    >
      <div className="max-w-7xl mx-auto">
        {/* Glass Card Container */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-xl border border-white/60 dark:border-slate-700/60">
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
              <h1 className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-black tracking-tight">
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
              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                )}
              </motion.button>

              {/* Search Bar */}
              <SearchBar />

              {/* Get Started Button */}
              <Link
                to="/login"
                className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Get Started
              </Link>

              {/* Mobile Menu */}
              <button className="lg:hidden p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors">
                <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}