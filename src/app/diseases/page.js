"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import diseasesData from "@/data/diseases.json";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DiseasesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const alphabet = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

    const filteredDiseases = useMemo(() => {
        return diseasesData.diseases.filter(disease => {
            const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (disease.synonyms && disease.synonyms.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())));

            const matchesFilter = activeFilter === "All" ? true : disease.name.toUpperCase().startsWith(activeFilter);

            return matchesSearch && matchesFilter;
        }).sort((a, b) => a.name.localeCompare(b.name));
    }, [searchTerm, activeFilter]);

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 bg-slate-900 px-4">
                <div className="container mx-auto max-w-4xl text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Lysosomal Storage Disorders
                    </h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
                        Comprehensive information on various types of LSDs, their symptoms, diagnosis, and treatments.
                    </p>

                    {/* Search and Filter Section - Compact & Centered */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative mb-6">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search diseases..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-white border-none rounded-full text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all font-medium shadow-lg"
                            />
                        </div>

                        {/* A-Z Filter */}
                        <div className="flex flex-wrap gap-1.5 justify-center">
                            {alphabet.map((letter) => (
                                <button
                                    key={letter}
                                    onClick={() => setActiveFilter(letter)}
                                    className={cn(
                                        "w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg transition-all",
                                        activeFilter === letter
                                            ? "bg-primary text-white shadow-lg scale-110"
                                            : "text-slate-400 hover:bg-slate-700 hover:text-white"
                                    )}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Disease List */}
            <section className="container mx-auto px-4 md:px-8 py-20">
                <div className="grid gap-6">
                    {filteredDiseases.length > 0 ? (
                        filteredDiseases.map((disease, index) => (
                            <Link
                                key={disease.id || index}
                                href={`/diseases/${disease.id}`}
                                className="block group"
                            >
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 hover:shadow-md transition-all hover:border-primary/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                                                {disease.name}
                                            </h2>
                                            {disease.synonyms && (
                                                <p className="text-sm text-slate-500 mt-2 font-medium">
                                                    Also known as: {disease.synonyms.join(", ")}
                                                </p>
                                            )}
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                            <ChevronDown size={20} className="-rotate-90" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">No diseases found</h3>
                            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
                            <button
                                onClick={() => { setSearchTerm(""); setActiveFilter("All"); }}
                                className="mt-4 px-6 py-2 text-primary hover:bg-primary/5 rounded-full transition-colors font-medium"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
