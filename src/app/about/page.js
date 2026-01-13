"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4">
                <div className="container mx-auto max-w-4xl text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Our Story
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A journey of love, loss, and unwavering hope. We are turning personal grief into a powerful movement for children with rare diseases.
                    </p>
                </div>
            </section>

            {/* Taraasha's Story */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-slate-200 min-h-[300px] relative">
                            {/* Profile Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <span className="text-sm">Taraasha's Photo</span>
                            </div>
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12">
                            <div className="flex items-center gap-2 text-secondary mb-4">
                                <Star size={20} fill="currentColor" />
                                <span className="font-bold tracking-widest text-sm uppercase">In Loving Memory</span>
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                                Remembering Taraasha
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p>
                                    The Taraasha Foundation has been established in loving memory of <span className="font-bold text-slate-900">Taraasha Bhargava</span>, to support, empower, and bring hope to patients and families affected by <span className="font-bold text-slate-900">Lysosomal Storage Disorders (LSDs)</span> and other rare genetic conditions in India.
                                </p>
                                <p>
                                    The Foundation is committed to providing patient-centric support, building caregiver and parent networks, creating awareness and education about rare diseases, and advocating for timely diagnosis and treatment access. It further seeks to collaborate with national and international organizations to improve research, training, and best practices in rare disease management.
                                </p>
                                <p>
                                    The Foundation is dedicated to improving the quality of life of patients, empowering families, and strengthening community support systems for rare disease care in India.
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* Purpose of Taraasha Foundation Section - Removed as per request to merge with intro */}

                    {/* Focus Areas Section */}
                    <div className="mt-16">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Our Purpose</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Patient-Centric Support */}
                            <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-heading font-bold text-sky-900 mb-4 flex items-center gap-2">
                                    <span className="p-2 bg-sky-100 rounded-lg text-sky-600">🤝</span>
                                    Patient-Centric Support
                                </h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0"></span>
                                        <span>To provide guidance, counseling, and emotional support to patients living with LSDs and their families.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0"></span>
                                        <span>To facilitate access to resources, care options, and treatment pathways.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Parent & Family Connect */}
                            <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-heading font-bold text-rose-900 mb-4 flex items-center gap-2">
                                    <span className="p-2 bg-rose-100 rounded-lg text-rose-600">👨‍👩‍👧‍👦</span>
                                    Parent & Family Connect
                                </h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0"></span>
                                        <span>To create a platform where parents and caregivers can connect, share experiences, and learn from one another.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0"></span>
                                        <span>To strengthen community bonds so that no family feels alone in their journey.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Education & Awareness */}
                            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-heading font-bold text-amber-900 mb-4 flex items-center gap-2">
                                    <span className="p-2 bg-amber-100 rounded-lg text-amber-600">💡</span>
                                    Education & Awareness
                                </h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"></span>
                                        <span>To spread awareness about LSDs among the general public, healthcare professionals, and policymakers.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"></span>
                                        <span>To provide educational resources that help in early diagnosis and timely interventions.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Advocacy & Collaboration */}
                            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-heading font-bold text-purple-900 mb-4 flex items-center gap-2">
                                    <span className="p-2 bg-purple-100 rounded-lg text-purple-600">📢</span>
                                    Advocacy & Collaboration
                                </h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0"></span>
                                        <span>To work with national and international organizations to bring best practices, research, and treatments to India.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0"></span>
                                        <span>To advocate for better access to therapies, government support, and inclusion of rare diseases in healthcare policies.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* Director's Note */}
            <section className="py-20 bg-slate-100 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <Heart size={40} className="text-primary mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-8">
                        A Note from the Founder
                    </h2>
                    <blockquote className="text-xl md:text-2xl font-serif text-slate-700 italic leading-relaxed mb-8">
                        "Through this foundation, we aim to <span className="font-bold text-slate-900">transform grief into hope</span> and ensure that every patient and family impacted by LSDs in India has a voice, a support system, and a chance at a better future."
                    </blockquote>
                    <cite className="not-italic font-bold text-slate-900 block">
                        — Karan Bhargava
                    </cite>
                    <span className="text-slate-500 text-sm">Founder, 212 Healthcare</span>
                </div>
            </section>

            <Footer />
        </main>
    );
}
