"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

import { submitToGoogleSheet } from "@/utils/submitToGoogleSheet";

export default function EnrollPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        patientName: "",
        age: "",
        diseaseType: "",
        parentName: "",
        email: "",
        phone: "",
        details: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Manual Validation for Phone
        const phoneRegex = /^[0-9+\-\s]{10,15}$/;
        if (!phoneRegex.test(formData.phone)) {
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
            form_type: "Enrollment"
        });

        // Always show success for better UX with no-cors
        alert("Thank you for enrolling! We have received your details and will contact you soon.");
        setFormData({
            patientName: "",
            age: "",
            diseaseType: "",
            parentName: "",
            email: "",
            phone: "",
            details: ""
        });
        setIsSubmitting(false);
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4">
                <div className="container mx-auto max-w-4xl text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Patient Enrollment
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        We are here to help. Please fill out the form below to register with The Taraasha Foundation. All information is kept confidential.
                    </p>
                </div>
            </section>

            <section className="px-4 pb-20 -mt-12 relative z-10">
                <div className="container mx-auto max-w-4xl">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Patient Name *</label>
                                    <input
                                        type="text"
                                        name="patientName"
                                        value={formData.patientName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Enter patient's full name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Age *</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Patient's age"
                                        required
                                        min="0"
                                        max="100"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Disease / Diagnosis *</label>
                                <select
                                    name="diseaseType"
                                    value={formData.diseaseType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    required
                                >
                                    <option value="">Select a condition...</option>
                                    <option value="LSD - General">Lysosomal Storage Disorder (General)</option>
                                    <option value="Gaucher">Gaucher Disease</option>
                                    <option value="Pompe">Pompe Disease</option>
                                    <option value="Fabry">Fabry Disease</option>
                                    <option value="MPS">Mucopolysaccharidosis (MPS)</option>
                                    <option value="Other">Other / Unknown</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Parent/Guardian Name *</label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="+91 98765 43210"
                                        required
                                        pattern="[0-9+\-\s]{10,15}"
                                        title="Please enter a valid phone number"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Additional Details / History *</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Please describe the condition, diagnosis history, or any specific help needed..."
                                    required
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    disabled={isSubmitting}
                                    className={`w-full py-4 bg-primary hover:bg-primary-light text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:scale-[1.01] ${isSubmitting ? "opacity-70 cursor-wait" : ""}`}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Enrollment Request"}
                                </button>
                                <p className="text-xs text-slate-400 text-center mt-4">
                                    By submitting this form, you agree to our privacy policy and allow us to contact you regarding the initiative.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
