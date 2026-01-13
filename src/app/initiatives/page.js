"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Pill, UserPlus, Users, BookOpen, Activity, Heart, ArrowRight, Globe } from "lucide-react";

export default function InitiativesPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Our Initiatives
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        We are driven by a four-fold mission to support, connect, educate, and advocate for the LSD community in India.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 py-16 space-y-24">

                {/* Pillar 1: Patient-Centric Support */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                            <Heart size={28} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                            Patient-Centric Support
                        </h2>
                        <ul className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                To provide guidance, counseling, and emotional support to patients living with LSDs and their families.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                To facilitate access to resources, care options, and treatment pathways.
                            </li>
                        </ul>
                        <div className="flex gap-4 flex-wrap">
                            <Link href="/support" className="inline-flex items-center text-red-700 font-bold hover:gap-2 transition-all">
                                View Support Resources <ArrowRight size={18} className="ml-1" />
                            </Link>
                            <Link href="/doctors" className="inline-flex items-center text-red-700 font-bold hover:gap-2 transition-all">
                                Find a Specialist <ArrowRight size={18} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 bg-white rounded-3xl overflow-hidden h-80 shadow-lg border border-red-50">
                        <img src="/patient_support_v2.png" alt="Patient Support" className="w-full h-full object-cover" />
                    </div>
                </section>

                {/* Pillar 2: Parent & Family Connect */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-1 bg-white rounded-3xl overflow-hidden h-80 shadow-lg border border-blue-50">
                        <img src="/family_connect.jpg" alt="Parent and Family Connect" className="w-full h-full object-cover" />
                    </div>
                    <div className="md:order-2">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <Users size={28} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                            Parent & Family Connect
                        </h2>
                        <ul className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                To create a platform where parents and caregivers can connect, share experiences, and learn from one another.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                To strengthen community bonds so that no family feels alone in their journey.
                            </li>
                        </ul>
                        <div className="flex gap-4">
                            <a
                                href="https://chat.whatsapp.com/Kv6f653UPl75RjpDCW7H6W"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-700 font-bold hover:gap-2 transition-all"
                            >
                                Join WhatsApp Community <ArrowRight size={18} className="ml-1" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Pillar 3: Education & Awareness */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                            <BookOpen size={28} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                            Education & Awareness
                        </h2>
                        <ul className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                To spread awareness about LSDs among the general public, healthcare professionals, and policymakers.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                To provide educational resources that help in early diagnosis and timely interventions.
                            </li>
                        </ul>
                        <div className="flex gap-4">
                            <Link href="/diseases" className="inline-flex items-center text-emerald-700 font-bold hover:gap-2 transition-all">
                                Explore Disease Info Hub <ArrowRight size={18} className="ml-1" />
                            </Link>
                            <Link href="/news" className="inline-flex items-center text-emerald-700 font-bold hover:gap-2 transition-all ml-4">
                                Read Latest News <ArrowRight size={18} className="ml-1" />
                            </Link>
                        </div>
                        <div className="mt-4">
                            <Link href="/resources" className="inline-flex items-center text-emerald-700 font-bold hover:gap-2 transition-all">
                                Books & Legal Resources <ArrowRight size={18} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 bg-white rounded-3xl overflow-hidden h-80 shadow-lg border border-emerald-50">
                        <img src="/education_awareness.png" alt="Education and Awareness" className="w-full h-full object-cover" />
                    </div>
                </section>

                {/* Pillar 4: Advocacy & Collaboration */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-1 bg-white rounded-3xl overflow-hidden h-80 shadow-lg border border-purple-50">
                        <img src="/initiative_medicine.jpg" alt="Advocacy and Medicine Access" className="w-full h-full object-cover" />
                    </div>
                    <div className="md:order-2">
                        <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                            <Globe size={28} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                            Advocacy & Collaboration
                        </h2>
                        <ul className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                To work with national and international organizations to bring best practices, research, and treatments to India.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                To advocate for better access to therapies, government support, and inclusion of rare diseases in healthcare policies.
                            </li>
                        </ul>
                        <div className="flex gap-4 flex-wrap">
                            <Link href="/support" className="inline-flex items-center text-purple-700 font-bold hover:gap-2 transition-all">
                                Learn about Financial Aid <ArrowRight size={18} className="ml-1" />
                            </Link>
                            <Link href="/trials" className="inline-flex items-center text-purple-700 font-bold hover:gap-2 transition-all">
                                View Ongoing Clinical Trials <ArrowRight size={18} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </main>
    );
}
