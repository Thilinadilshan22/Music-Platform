import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, EyeOff, Music, Mail, Lock, ArrowLeft, User, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your authentication logic here
        console.log('Form submitted:', { email, password });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
            {/* Animated Background Orbs */}
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
                className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
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
                className="absolute bottom-20 left-20 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl"
            />

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Glass Card */}
                <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 p-6 sm:p-8 md:p-10">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-purple-600 font-semibold mb-6 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    {/* Logo/Brand */}
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center mb-8"
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                            <Music className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
                            edmloverr_
                        </h1>
                        <p className="text-slate-600 text-sm sm:text-base mt-2">
                            {isLogin ? 'Welcome back!' : 'Join the community'}
                        </p>
                    </motion.div>

                    {/* Toggle Login/Signup */}
                    <div className="flex gap-2 mb-6 sm:mb-8 bg-slate-100 rounded-xl p-1">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 px-4 py-2.5 rounded-lg font-semibold transition-all ${isLogin
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                                : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 px-4 py-2.5 rounded-lg font-semibold transition-all ${!isLogin
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                                : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isLogin ? 'login' : 'signup'}
                                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="space-y-4 sm:space-y-5"
                            >
                                {/* Name Input (Signup only) */}
                                {!isLogin && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="John Doe"
                                                className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                                required={!isLogin}
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {/* Email Input */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Location Input (Signup only) */}
                                {!isLogin && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Location
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                placeholder="City, Country"
                                                className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                                required={!isLogin}
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {/* Password Input */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full pl-12 pr-12 py-3 sm:py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Forgot Password (Login only) */}
                                {isLogin && (
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="text-sm text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full px-6 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all text-base sm:text-lg"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6 sm:my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white/80 text-slate-500 font-medium">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-3">
                        <button className="px-4 py-3 bg-white border-2 border-slate-200 rounded-xl hover:border-purple-300 hover:bg-slate-50 transition-all font-semibold text-slate-700 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="hidden sm:inline">Google</span>
                        </button>
                        <button className="px-4 py-3 bg-white border-2 border-slate-200 rounded-xl hover:border-purple-300 hover:bg-slate-50 transition-all font-semibold text-slate-700 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span className="hidden sm:inline">Facebook</span>
                        </button>
                    </div>

                    {/* Footer Note */}
                    <p className="text-center text-sm text-slate-500 mt-6">
                        By continuing, you agree to our{' '}
                        <button className="text-purple-600 hover:text-purple-700 font-semibold">
                            Terms
                        </button>{' '}
                        and{' '}
                        <button className="text-purple-600 hover:text-purple-700 font-semibold">
                            Privacy Policy
                        </button>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
