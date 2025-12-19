import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export function PrivacyPolicyPage() {
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
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Privacy Policy
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
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Welcome to edmloverr_. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our music streaming platform.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Personal Information</h3>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                                <li>Name and contact information (email address, phone number)</li>
                                <li>Account credentials (username, password)</li>
                                <li>Profile information (profile picture, bio, preferences)</li>
                                <li>Payment information (processed securely through third-party providers)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Usage Information</h3>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                                <li>Music listening history and preferences</li>
                                <li>Playlists created and songs favorited</li>
                                <li>Device information (IP address, browser type, operating system)</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. How We Use Your Information</h2>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                                <li>Provide, operate, and maintain our music streaming services</li>
                                <li>Personalize your experience and deliver customized content recommendations</li>
                                <li>Process your transactions and manage your subscriptions</li>
                                <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
                                <li>Improve our platform through analytics and user feedback</li>
                                <li>Detect, prevent, and address technical issues and fraudulent activity</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data Sharing and Disclosure</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                We may share your information with:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                                <li><strong>Service Providers:</strong> Third-party companies that help us operate our platform</li>
                                <li><strong>Artists and Labels:</strong> Aggregated listening data to support content creators</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                            </ul>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
                                We do not sell your personal information to third parties.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Data Security</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Your Privacy Rights</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                                <li>Access and receive a copy of your personal data</li>
                                <li>Correct inaccurate or incomplete information</li>
                                <li>Request deletion of your personal data</li>
                                <li>Object to or restrict processing of your data</li>
                                <li>Withdraw consent for data processing</li>
                                <li>Data portability (receive your data in a structured format)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Children's Privacy</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Our platform is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Changes to This Policy</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Contact Us</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                If you have any questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                                <p className="text-slate-700 dark:text-slate-300">
                                    <strong>Email:</strong> privacy@edmloverr.com<br />
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
