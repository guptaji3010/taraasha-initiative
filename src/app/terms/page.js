"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Guidelines for using our website and understanding our disclaimer regarding medical information.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-4xl px-4 py-16">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-8 text-slate-600 leading-relaxed">
                    <p className="text-sm text-slate-400 border-b border-slate-100 pb-8">Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Taraasha Foundation website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">2. Medical Disclaimer (Important)</h2>
                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-amber-900">
                            <strong>No Medical Advice:</strong> The content on this website (including text, graphics, and resources) is for informational purposes only. It is NOT intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions you may have regarding a medical condition.
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">3. Use of Content</h2>
                        <p>
                            All content on this site is the property of The Taraasha Foundation or its content suppliers. You may not reproduce, distribute, or create derivative works without our express written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
                        <p>
                            The Taraasha Foundation shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">5. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">6. Contact Information</h2>
                        <p>
                            For questions about these Terms, please contact us at support@taraasha.org.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
