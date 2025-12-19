import { motion } from 'motion/react';
import { Cookie } from 'lucide-react';

export function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-purple-950/30 theme-transition">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4">
                        <Cookie className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Cookie Policy
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Last Updated: December 19, 2025
                    </p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/60 dark:border-slate-700/60"
                >
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. What Are Cookies?</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our platform, and improving our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Types of Cookies We Use</h2>

                            <div className="space-y-6">
                                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Essential Cookies</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                        These cookies are necessary for the Platform to function properly. They enable core functionality such as:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                                        <li>User authentication and account access</li>
                                        <li>Security and fraud prevention</li>
                                        <li>Load balancing</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                                        <strong>Duration:</strong> Session or up to 1 year
                                    </p>
                                </div>

                                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Functional Cookies</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                        These cookies allow us to remember your preferences and settings, such as:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                                        <li>Language preferences</li>
                                        <li>Volume settings and playback preferences</li>
                                        <li>Theme preferences (light/dark mode)</li>
                                        <li>Previously viewed content</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                                        <strong>Duration:</strong> Up to 1 year
                                    </p>
                                </div>

                                <div className="p-4 bg-pink-50 dark:bg-pink-950/30 rounded-xl">
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Analytics Cookies</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                        These cookies help us understand how visitors interact with our Platform by collecting anonymous information:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                                        <li>Pages visited and time spent on pages</li>
                                        <li>Click patterns and navigation paths</li>
                                        <li>Error messages encountered</li>
                                        <li>Device and browser information</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                                        <strong>Duration:</strong> Up to 2 years
                                    </p>
                                </div>

                                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-xl">
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Marketing Cookies</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                        These cookies are used to deliver personalized advertisements and track campaign effectiveness:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                                        <li>Track ad performance</li>
                                        <li>Deliver relevant advertisements</li>
                                        <li>Prevent showing the same ad repeatedly</li>
                                        <li>Measure conversion rates</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                                        <strong>Duration:</strong> Up to 1 year
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Third-Party Cookies</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                We may use third-party services that also set cookies on your device:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                                <li><strong>Social Media Platforms:</strong> To enable social sharing features</li>
                                <li><strong>Advertising Networks:</strong> To deliver targeted advertisements</li>
                                <li><strong>Payment Processors:</strong> To facilitate secure transactions</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. How We Use Cookie Data</h2>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                                <li>Personalize your music recommendations based on listening history</li>
                                <li>Remember your login status and preferences</li>
                                <li>Analyze platform performance and identify areas for improvement</li>
                                <li>Understand user demographics and interests</li>
                                <li>Deliver relevant content and advertisements</li>
                                <li>Prevent fraud and enhance security</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Managing Your Cookie Preferences</h2>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Browser Settings</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                Most web browsers allow you to control cookies through their settings. You can:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                                <li>Block all cookies</li>
                                <li>Block third-party cookies only</li>
                                <li>Delete cookies when you close your browser</li>
                                <li>View and delete individual cookies</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Cookie Consent Manager</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                When you first visit edmloverr_, you'll see a cookie consent banner. You can manage your preferences by:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                                <li>Accepting all cookies</li>
                                <li>Rejecting non-essential cookies</li>
                                <li>Customizing your cookie preferences by category</li>
                            </ul>

                            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-xl border-l-4 border-yellow-500">
                                <p className="text-slate-700 dark:text-slate-300 text-sm">
                                    <strong>Note:</strong> Blocking or deleting cookies may affect your experience on our Platform. Some features may not function properly without cookies.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Do Not Track Signals</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Some browsers offer a "Do Not Track" (DNT) feature that signals websites not to track you. Currently, there is no industry standard for responding to DNT signals. We do not currently respond to DNT signals, but we provide you with cookie management options as described above.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Updates to This Policy</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by updating the "Last Updated" date at the top of this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Contact Us</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                If you have questions about our use of cookies or this Cookie Policy, please contact us:
                            </p>
                            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                                <p className="text-slate-700 dark:text-slate-300">
                                    <strong>Email:</strong> cookies@edmloverr.com<br />
                                    <strong>Address:</strong> edmloverr_ Privacy Team, 123 Music Street, Electronic City
                                </p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
