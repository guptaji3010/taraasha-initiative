"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import doctorsData from "@/data/doctors.json";
import hospitalsData from "@/data/hospitals.json";
import Link from "next/link";
import { MapPin, Building2, User, Search, ArrowRight, Stethoscope, Hospital } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function DirectoryPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("doctors"); // 'doctors' | 'hospitals'

    const filteredDoctors = doctorsData.doctors.filter(doc =>
        doc.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.hospital.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredHospitals = hospitalsData.hospitals.filter(hos =>
        hos.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hos.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hos.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-slate-900 text-white px-4 transition-colors duration-500">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Medical Directory
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                        Find skilled metabolic specialists and Centres of Excellence (COE) for rare diseases across India.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative z-10">
                        <input
                            type="text"
                            placeholder={activeTab === 'doctors' ? "Search doctors, cities, or hospitals..." : "Search centres, cities..."}
                            className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/20 shadow-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    </div>
                </div>
            </section>

            {/* Tab Navigation */}
            <div className="bg-white border-b border-slate-200 sticky top-16 z-20 shadow-sm">
                <div className="container mx-auto max-w-4xl flex justify-center">
                    <div className="flex w-full md:w-auto">
                        <button
                            onClick={() => setActiveTab("doctors")}
                            className={cn(
                                "flex-1 md:flex-none px-8 py-4 font-bold text-sm md:text-base flex items-center justify-center gap-2 border-b-2 transition-all",
                                activeTab === "doctors"
                                    ? "border-primary text-primary bg-primary/5"
                                    : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                            )}
                        >
                            <Stethoscope size={18} /> Specialists
                        </button>
                        <button
                            onClick={() => setActiveTab("hospitals")}
                            className={cn(
                                "flex-1 md:flex-none px-8 py-4 font-bold text-sm md:text-base flex items-center justify-center gap-2 border-b-2 transition-all",
                                activeTab === "hospitals"
                                    ? "border-primary text-primary bg-primary/5"
                                    : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                            )}
                        >
                            <Hospital size={18} /> Hospitals & COEs
                        </button>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">

                    {/* Doctors Tab Content */}
                    {activeTab === 'doctors' && (
                        <>
                            {filteredDoctors.length === 0 ? (
                                <div className="text-center text-slate-500 py-12">
                                    <p className="text-xl">No doctors found matching your search.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredDoctors.map((doc) => (
                                        <div key={doc.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col h-full animate-in fade-in zoom-in duration-300">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                                    <User size={24} />
                                                </div>
                                                <Link
                                                    href={doc.profileUrl}
                                                    target="_blank"
                                                    className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                                                >
                                                    Profile <ArrowRight size={14} />
                                                </Link>
                                            </div>

                                            <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                                                {doc.name}
                                            </h3>
                                            <p className="text-primary font-medium text-sm mb-4 min-h-[40px]">
                                                {doc.specialty}
                                            </p>

                                            <div className="mt-auto space-y-3 pt-4 border-t border-slate-50">
                                                <div className="flex items-start gap-3 text-slate-600">
                                                    <Building2 size={18} className="mt-1 shrink-0 text-slate-400" />
                                                    <span className="text-sm">{doc.hospital}</span>
                                                </div>
                                                <div className="flex items-start gap-3 text-slate-600">
                                                    <MapPin size={18} className="mt-1 shrink-0 text-slate-400" />
                                                    <span className="text-sm">{doc.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {/* Hospitals Tab Content */}
                    {activeTab === 'hospitals' && (
                        <>
                            {filteredHospitals.length === 0 ? (
                                <div className="text-center text-slate-500 py-12">
                                    <p className="text-xl">No hospitals found matching your search.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredHospitals.map((hos) => (
                                        <div key={hos.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col animate-in fade-in zoom-in duration-300">
                                            <div className="flex items-start justify-between mb-2">
                                                <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                                    {hos.type}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">
                                                {hos.name}
                                            </h3>
                                            <p className="text-slate-500 mb-6">{hos.address}</p>

                                            <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <Link
                                                    href={hos.website}
                                                    target="_blank"
                                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-colors"
                                                >
                                                    Visit Website
                                                </Link>
                                                <a
                                                    href={`tel:${hos.phone}`}
                                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
                                                >
                                                    Call Now
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    <div className="mt-16 text-center bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <p className="text-blue-900 text-lg mb-2 font-bold">Need help finding the right specialist?</p>
                        <p className="text-blue-700 mb-6">
                            Our team can help guide you to the nearest reliable centre based on your location.
                        </p>
                        <Link href="/contact" className="inline-block px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-100 transition-colors shadow-sm">
                            Contact Us for Assistance
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
