import { motion } from 'motion/react';
import { Music, Github, Twitter, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    const quickLinks = [
        { name: 'Home', to: '/' },
        { name: 'Music', to: '/music' },
        { name: 'Videos', to: '/videos' },
    ];

    return (
        <footer className="relative mt-20 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

            {/* Decorative Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
            />

            <div className="relative z-10">
                {/* Top Wave Decoration */}
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent mb-12" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center md:items-start"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Music className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
                                    edmloverr_
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm text-center md:text-left max-w-xs">
                                Experience the future of music streaming with stunning visuals and seamless playback.
                            </p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col items-center md:items-start"
                        >
                            <h4 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h4>
                            <nav className="flex flex-col gap-2">
                                {quickLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        className="text-slate-600 hover:text-purple-600 font-semibold transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col items-center md:items-start"
                        >
                            <h4 className="text-lg font-bold text-slate-900 mb-4">Connect With Us</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-purple-600 hover:border-purple-300 hover:shadow-lg transition-all"
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-12 pt-8 border-t border-slate-200/60"
                    >
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-slate-600 text-sm flex items-center gap-1">
                                © {currentYear} edmloverr_. Made with{' '}
                                <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" />{' '}
                                for music lovers.
                            </p>
                            <div className="flex gap-6 text-sm">
                                <button className="text-slate-600 hover:text-purple-600 font-semibold transition-colors">
                                    Privacy Policy
                                </button>
                                <button className="text-slate-600 hover:text-purple-600 font-semibold transition-colors">
                                    Terms of Service
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
