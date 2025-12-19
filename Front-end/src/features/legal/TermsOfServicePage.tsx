import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export function TermsOfServicePage() {
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
                        <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Terms of Service
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
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                By accessing and using edmloverr_ ("the Platform"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Service Description</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                edmloverr_ provides a music streaming platform that allows users to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 mt-3">
                                <li>Stream Electronic Dance Music (EDM) tracks and albums</li>
                                <li>Create and manage playlists</li>
                                <li>Discover new artists and music</li>
                                <li>Watch music videos and live performances</li>
                                <li>Access information about upcoming EDM events</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. User Accounts</h2>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Account Creation</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                To use certain features, you must create an account. You agree to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Notify us immediately of any unauthorized access</li>
                                <li>Be responsible for all activities under your account</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Account Termination</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We reserve the right to suspend or terminate your account if you violate these terms or engage in fraudulent, illegal, or abusive behavior.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Acceptable Use</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                You agree NOT to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                                <li>Download, copy, or redistribute content without authorization</li>
                                <li>Use automated systems or bots to access the Platform</li>
                                <li>Attempt to circumvent any security measures or access restrictions</li>
                                <li>Upload malicious code, viruses, or harmful software</li>
                                <li>Harass, abuse, or harm other users</li>
                                <li>Impersonate any person or entity</li>
                                <li>Use the Platform for any illegal purposes</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Intellectual Property</h2>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Our Content</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                All content on the Platform, including music, videos, text, graphics, logos, and software, is protected by copyright, trademark, and other intellectual property laws. This content is owned by edmloverr_, our licensors, or content providers.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">License Grant</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We grant you a limited, non-exclusive, non-transferable license to access and use the Platform for personal, non-commercial purposes. This license does not include the right to download or distribute content.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Subscription and Payment</h2>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Subscription Plans</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                We offer free and premium subscription plans. Premium features include:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                                <li>Ad-free listening experience</li>
                                <li>High-quality audio streaming</li>
                                <li>Offline downloads</li>
                                <li>Unlimited skips</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Billing</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                Subscriptions are billed on a recurring basis (monthly or annually). You authorize us to charge your payment method on each billing cycle. Prices are subject to change with advance notice.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Cancellation and Refunds</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. We do not provide refunds for partial subscription periods except as required by law.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Disclaimer of Warranties</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                The Platform is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Limitation of Liability</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                To the maximum extent permitted by law, edmloverr_ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising from your use of the Platform.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Modifications to Terms</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We reserve the right to modify these Terms of Service at any time. We will notify you of significant changes via email or through the Platform. Your continued use of the Platform after changes constitutes acceptance of the modified terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Governing Law</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the appropriate courts.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Contact Information</h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                For questions about these Terms of Service, please contact us:
                            </p>
                            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                                <p className="text-slate-700 dark:text-slate-300">
                                    <strong>Email:</strong> legal@edmloverr.com<br />
                                    <strong>Address:</strong> edmloverr_ Legal Team, 123 Music Street, Electronic City
                                </p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
