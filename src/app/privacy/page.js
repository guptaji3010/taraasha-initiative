"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        We value your trust. Learn how we collect, use, and protect your personal information transparently.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-4xl px-4 py-16">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-8 text-slate-600 leading-relaxed">
                    <p className="text-sm text-slate-400 border-b border-slate-100 pb-8">Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">1. Introduction</h2>
                        <p>
                            The Taraasha Foundation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our initiatives.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and postal address when you donate or fill out our contact forms.</li>
                            <li><strong>Donation Details:</strong> Payment transaction details and PAN number (mandatory for 80G tax exemption in India). usage of this data is strictly for regulatory compliance.</li>
                            <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2 marker:text-primary">
                            <li>Process donations.</li>
                            <li>Send updates about our initiatives and annual reports (you can opt-out at any time).</li>
                            <li>Respond to your queries and support requests.</li>
                            <li>Comply with legal obligations under Indian law.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">4. Data Protection</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information. We do not sell, trade, or rent your personal identification information to others.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:<br />
                            <strong>Email:</strong> support@taraasha.org<br />
                            <strong>Address:</strong> 212 Healthcare, Sector 63, Noida, Uttar Pradesh, India
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
