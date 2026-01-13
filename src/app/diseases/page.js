"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import diseasesData from "@/data/diseases.json";
import { ChevronDown, ChevronUp, Activity, Stethoscope, Pill, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DiseasesPage() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Disease Info Hub
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Understanding Lysosomal Storage Disorders (LSDs) is the first step towards management. Explore key information about common conditions in India.
                    </p>
                </div>
            </section>

            {/* Diseases List */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-5xl space-y-6">
                    {diseasesData.diseases.map((disease) => (
                        <div
                            key={disease.id}
                            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                        >
                            {/* Header / Summary */}
                            <button
                                onClick={() => toggleExpand(disease.id)}
                                className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
                            >
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                                        {disease.name}
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed max-w-3xl">
                                        {disease.description}
                                    </p>
                                </div>
                                <div className={cn(
                                    "p-2 rounded-full bg-slate-50 text-slate-400 transition-transform duration-300 shrink-0",
                                    expandedId === disease.id && "rotate-180 bg-primary/10 text-primary"
                                )}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            {/* Expanded Content */}
                            <div className={cn(
                                "grid md:grid-cols-3 gap-6 px-6 md:px-8 bg-slate-50/50 border-t border-slate-100 transition-all duration-300 ease-in-out",
                                expandedId === disease.id ? "py-8 opacity-100 max-h-[1000px]" : "py-0 opacity-0 max-h-0 overflow-hidden"
                            )}>
                                {/* Symptoms */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-primary font-bold text-lg mb-2">
                                        <Activity size={20} />
                                        <h3>Symptoms</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {disease.symptoms.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Diagnosis */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-blue-700 font-bold text-lg mb-2">
                                        <Stethoscope size={20} />
                                        <h3>Diagnosis</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {disease.diagnosis.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Treatment */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-lg mb-2">
                                        <Pill size={20} />
                                        <h3>Treatment</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {disease.treatment.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="pb-16 px-4">
                <div className="container mx-auto max-w-4xl text-center bg-blue-50 border border-blue-100 rounded-2xl p-8">
                    <Info className="mx-auto text-blue-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Not seeing your condition?</h3>
                    <p className="text-blue-700 mb-0">
                        There are over 50 specific Lysosomal Storage Disorders. We are constantly updating this library.
                        Please consult a specialist for detailed information about rare variants.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
