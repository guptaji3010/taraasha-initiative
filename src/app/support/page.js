"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
    HelpCircle,
    Stethoscope,
    Users,
    HeartHandshake,
    IndianRupee,
    FileText,
    ExternalLink,
    AlertCircle,
    ShieldCheck,
    Globe
} from "lucide-react";


export default function SupportPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Support for Families
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        You are not alone. Whether you have just received a diagnosis or are seeking financial aid, we are here to guide you through every step.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-12">

                {/* Section 1: Newly Diagnosed Guide */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
                            <HelpCircle size={32} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900">
                            Newly Diagnosed?
                        </h2>
                    </div>

                    <div className="relative border-l-2 border-slate-200 ml-4 space-y-12 pl-8 py-2">
                        {/* Step 1 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-sm" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                1. Understand the Diagnosis
                            </h3>
                            <p className="text-slate-600 mb-4">
                                Take a deep breath. Ask your doctor for a detailed medical report. Write down the specific type of LSD (e.g., Gaucher Type 1).
                            </p>
                            <Link href="/diseases" className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1">
                                Read about the disease <ExternalLink size={14} />
                            </Link>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-0 w-6 h-6 bg-slate-300 rounded-full border-4 border-white shadow-sm" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                2. Find a Specialist
                            </h3>
                            <p className="text-slate-600 mb-4">
                                General pediatricians may not have expertise in LSDs. You need a <strong>Medical Geneticist</strong> or a Metabolic Specialist.
                            </p>
                            <Link href="/doctors" className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1">
                                Search our Medical Directory <ExternalLink size={14} />
                            </Link>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-0 w-6 h-6 bg-slate-300 rounded-full border-4 border-white shadow-sm" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                3. Join a Support Group
                            </h3>
                            <p className="text-slate-600 mb-4">
                                Connecting with other families is efficient for mental support and practical advice.
                            </p>
                            <Link href="https://chat.whatsapp.com/Gdbx2Oq8t7iJ6Nn4x8D38Q" target="_blank" className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1">
                                Join our WhatsApp Community <ExternalLink size={14} />
                            </Link>
                        </div>
                    </div>
                </section>


                {/* Section 2: Financial Aid Guide */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                            <IndianRupee size={32} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900">
                            Financial Aid Support
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* NPRD Scheme */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">National Policy for Rare Diseases (NPRD)</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                The Government of India provides financial support of up to <strong>₹50 Lakhs</strong> for treatment of rare diseases at notified Centers of Excellence (COEs).
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="https://rarediseases.mohfw.gov.in/"
                                    target="_blank"
                                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors text-center"
                                >
                                    Read Policy & Apply
                                </Link>
                                <Link
                                    href="/doctors"
                                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors text-center"
                                >
                                    Find nearest COE Hospital
                                </Link>
                            </div>
                        </div>

                        {/* Crowdfunding */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Crowdfunding Platforms</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                For costs not covered by government schemes, verified crowdfunding campaigns can help raise funds for enzyme replacement therapies.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://milaap.org/" target="_blank" className="text-xs font-bold bg-green-50 text-green-700 px-2 py-1 rounded hover:bg-green-100 transition-colors">Milaap</a>
                                <a href="https://www.impactguru.com/" target="_blank" className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition-colors">ImpactGuru</a>
                                <a href="https://www.ketto.org/" target="_blank" className="text-xs font-bold bg-orange-50 text-orange-700 px-2 py-1 rounded hover:bg-orange-100 transition-colors">Ketto</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                            <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={20} />
                            <div>
                                <h4 className="font-bold text-amber-800 text-sm">Need application assistance?</h4>
                                <p className="text-amber-700 text-xs mt-1">
                                    Our volunteers can help you verify your documents for NPRD applications. <Link href="/contact" className="underline font-bold">Contact us</Link>.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

            </div >





            <Footer />
        </main >
    );
}
