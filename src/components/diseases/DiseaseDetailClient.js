"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, AlertCircle, Home, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function DiseaseDetailClient({ disease }) {
    if (!disease) {
        return (
            <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
                <AlertCircle className="w-16 h-16 text-rose-500 mb-4" />
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Disease Not Found</h1>
                <p className="text-slate-600 mb-6">The disease information you are looking for could not be found.</p>
                <Link
                    href="/diseases"
                    className="px-6 py-2 bg-[#543D32] text-white rounded-full hover:bg-opacity-90 transition-colors"
                >
                    Back to Diseases
                </Link>
            </main>
        );
    }

    const handlePrint = () => {
        window.print();
    };

    // Custom accent color to match the site theme (Brown)
    const accentColor = "text-[#543D32]";

    return (
        <main className="min-h-screen bg-slate-50 font-sans print:bg-white">
            <Navbar />

            {/* Dark Header Section (Matches Privacy Policy Page) */}
            <section className="pt-32 pb-20 bg-slate-900 px-4 text-center print:hidden">
                <div className="container mx-auto max-w-4xl">
                    {/* Breadcrumbs (White/Opacity) */}
                    <nav className="flex items-center justify-center text-sm text-white/60 mb-6 gap-2">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/diseases" className="hover:text-white transition-colors">Conditions</Link>
                        <span>/</span>
                        <span className="text-white font-medium truncate max-w-[200px]">{disease.name}</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        {disease.name}
                    </h1>
                    {disease.synonyms && (
                        <p className="text-lg text-white/70 max-w-2xl mx-auto italic">
                            Also known as: {disease.synonyms.join(", ")}
                        </p>
                    )}

                    <div className="mt-8 flex justify-center gap-3">
                        <button
                            onClick={handlePrint}
                            className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                        >
                            <Printer size={16} className="mr-2" />
                            <span className="text-sm font-medium">Print / Save PDF</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Print Header (Visible only when printing) */}
            <div className="hidden print:block p-8 border-b border-slate-200">
                <h1 className="text-2xl font-bold text-[#543D32]">Taraasha Foundation</h1>
                <p className="text-sm text-slate-500">Disease Information Sheet: {disease.name}</p>
            </div>

            {/* Main Content Card */}
            <div className="container mx-auto max-w-4xl px-4 py-16 print:py-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-10 text-slate-700 leading-relaxed print:shadow-none print:border-none print:p-0">

                    {/* Description */}
                    <section>
                        <h2 className={`text-2xl font-heading font-bold ${accentColor} mb-4`}>What is it?</h2>
                        <div className="text-lg leading-relaxed whitespace-pre-line">
                            {disease.description}
                        </div>
                        {disease.prevalence && (
                            <div className="mt-6 bg-slate-50 p-6 rounded-xl border border-slate-100 print:bg-white print:border-slate-200">
                                <h3 className={`font-bold ${accentColor} mb-2`}>How common is it?</h3>
                                <p className="whitespace-pre-line">
                                    {disease.prevalence}
                                </p>
                            </div>
                        )}
                    </section>

                    <hr className="border-slate-100 print:hidden" />

                    {/* Symptoms */}
                    <section>
                        <h2 className={`text-2xl font-heading font-bold ${accentColor} mb-4`}>Signs & Symptoms</h2>
                        <div className="text-lg leading-relaxed whitespace-pre-line">
                            {disease.symptoms}
                        </div>
                    </section>

                    <hr className="border-slate-100 print:hidden" />

                    {/* Causes & Inheritance */}
                    <section>
                        <h2 className={`text-2xl font-heading font-bold ${accentColor} mb-4`}>Causes & Inheritance</h2>
                        <div className="text-lg leading-relaxed whitespace-pre-line">
                            {disease.causes}
                        </div>
                        <div className="mt-6 text-lg leading-relaxed whitespace-pre-line">
                            {disease.inheritance}
                        </div>
                        {disease.inheritance_image && (
                            <div className="mt-8 flex justify-center">
                                <img
                                    src={disease.inheritance_image}
                                    alt={`${disease.name} Inheritance Pattern`}
                                    className="rounded-xl border border-slate-200 shadow-sm w-full max-w-2xl"
                                />
                            </div>
                        )}
                    </section>

                    <hr className="border-slate-100 print:hidden" />

                    {/* Diagnosis */}
                    <section>
                        <h2 className={`text-2xl font-heading font-bold ${accentColor} mb-4`}>Diagnosis</h2>
                        <div className="text-lg leading-relaxed whitespace-pre-line">
                            {disease.diagnosis}
                        </div>
                    </section>

                    <hr className="border-slate-100 print:hidden" />

                    {/* Treatment */}
                    <section>
                        <h2 className={`text-2xl font-heading font-bold ${accentColor} mb-4`}>Treatment</h2>
                        <div className="text-lg leading-relaxed whitespace-pre-line">
                            {disease.treatment}
                        </div>

                        <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-500 italic flex gap-3 print:bg-white print:border-slate-200">
                            <AlertCircle size={20} className="shrink-0 text-slate-400" />
                            <p><strong>Disclaimer:</strong> The information provided here is for educational purposes only and should not be taken as medical advice. Always consult with a qualified healthcare professional for diagnosis and treatment. Information sourced from reliable medical databases.</p>
                        </div>
                    </section>

                </div>
            </div>

            <div className="print:hidden">
                <Footer />
            </div>
        </main>
    );
}
