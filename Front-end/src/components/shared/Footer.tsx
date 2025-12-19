import { motion } from 'motion/react';
import { Music, Github, Twitter, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-purple-600 dark:hover:text-purple-400' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-500 dark:hover:text-blue-400' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600 dark:hover:text-pink-400' },
    ];

    const navigation = [
        { name: 'Home', to: '/' },
        { name: 'Music', to: '/music' },
        { name: 'Videos', to: '/videos' },
        { name: 'Events', to: '/events' },
        { name: 'Artists', to: '/artists' },
    ];

    const legal = [
        { name: 'Privacy Policy', to: '/privacy' },
        { name: 'Terms of Service', to: '/terms' },
        { name: 'Cookie Policy', to: '/cookies' },
    ];

    return (
        <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 theme-transition">
            {/* Decorative Gradient Top Border */}
            <div className="h-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600" />

            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Music className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                                edmloverr_
                            </h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md leading-relaxed">
                            Your ultimate destination for discovering, streaming, and sharing Electronic Dance Music.
                        </p>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Navigation</h4>
                        <nav className="flex flex-row flex-wrap gap-4">
                            {navigation.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Legal Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Legal</h4>
                        <nav className="flex flex-row flex-wrap gap-4">
                            {legal.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800"
                >
                    {/* Copyright */}
                    <p className="text-slate-600 dark:text-slate-400 text-xs flex items-center gap-2">
                        © {currentYear} edmloverr_. Made with
                        <Heart className="w-3 h-3 text-red-500 fill-red-500 inline animate-pulse" />
                        for music lovers.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 ${social.color} border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all`}
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
