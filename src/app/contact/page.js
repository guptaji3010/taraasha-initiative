"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { submitToGoogleSheet } from "@/utils/submitToGoogleSheet";

function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Manual Validation for Phone
        const phoneRegex = /^[0-9+\-\s]{10,15}$/;
        if (formData.phone && !phoneRegex.test(formData.phone)) { // Optional or strictly required? Assuming requested means input is needed.
            // User asked to "take input input of mobile no", implying it should be handled like other fields.
            // I will make it required to be consistent with Enroll.
            alert("Please enter a valid phone number (at least 10 digits).");
            return;
        }

        // 2. Manual Validation for Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);
        await submitToGoogleSheet({
            ...formData,
            form_type: "Contact"
        });
        alert("Message sent! We will get back to you shortly.");
        setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
        setIsSubmitting(false);
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your Full Name"
                        required
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="+91 78385 21920"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                        <option>General Inquiry</option>
                        <option>Patient Enrollment Help</option>
                        <option>Donation / Support</option>
                        <option>Doctor Partnership</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="How can we help you?"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 ${isSubmitting ? "opacity-70 cursor-wait" : ""}`}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </>
    );
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-20 bg-slate-900 text-white px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-slate-400">
                        Have questions about enrollment, medicine access, or how you can help? We are here to listen and support.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Visit Us at 212 Healthcare</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Block-C, C-79, C Block, Sector 2,<br />
                                        Noida, Uttar Pradesh 201301
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                    <p className="text-slate-600">
                                        <a href="tel:+917838521920" className="hover:text-primary transition-colors">+91 78385 21920</a>
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">Mon-Fri, 9am - 6pm IST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                    <p className="text-slate-600">
                                        <a href="mailto:support@taraasha.org" className="hover:text-primary transition-colors">support@taraasha.org</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        {/* Map Link */}
                        <div className="mt-12 w-full h-56 rounded-3xl overflow-hidden shadow-sm border border-stone-100 relative group">
                            <a
                                href="https://maps.app.goo.gl/X2v6caSvJY9UYESH7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 bg-[#F9F8F6] flex flex-col items-center justify-center hover:bg-[#F2F0EB] transition-colors duration-300"
                            >
                                <div className="w-16 h-16 bg-[#EBE9E4] rounded-full flex items-center justify-center mb-4 text-[#78716c] group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={32} strokeWidth={2} />
                                </div>
                                <span className="font-bold text-slate-800 text-lg">View on Google Maps</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white border-t border-slate-100 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <MessageCircle size={32} className="text-secondary mx-auto mb-4" />
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group bg-slate-50 p-6 rounded-xl cursor-pointer">
                            <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                                What kind of support do you provide?
                                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="text-slate-600 mt-4 leading-relaxed">
                                We provide financial assistance for medicines, connect patients with specialized doctors, and offer a community platform for emotional support. We also facilitate access to clinical trials.
                            </p>
                        </details>

                        <details className="group bg-slate-50 p-6 rounded-xl cursor-pointer">
                            <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                                Is my child eligible for free medicine?
                                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="text-slate-600 mt-4 leading-relaxed">
                                Eligibility depends on the diagnosis, financial background, and availability of donor programs. Please fill out the Enrollment Form so our team can assess your specific case.
                            </p>
                        </details>

                        <details className="group bg-slate-50 p-6 rounded-xl cursor-pointer">
                            <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                                How can I donate or volunteer?
                                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="text-slate-600 mt-4 leading-relaxed">
                                Thank you for your interest! Currently, we accept donations via bank transfer. Please contact us directly for account details. You can also volunteer by organizing awareness drives in your city.
                            </p>
                        </details>
                    </div>
                </div>
            </section >

            <Footer />
        </main >
    );
}
