"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Search, MapPin, FlaskConical, ExternalLink, Loader2, AlertCircle, Globe } from "lucide-react";
import Link from "next/link";

export default function TrialsPage() {
    const [trials, setTrials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("Lysosomal Storage Diseases");
    const [status, setStatus] = useState("RECRUITING");

    // Function to map API status to user-friendly label
    const getStatusColor = (status) => {
        switch (status) {
            case 'RECRUITING': return 'bg-green-100 text-green-700';
            case 'ACTIVE_NOT_RECRUITING': return 'bg-blue-100 text-blue-700';
            case 'COMPLETED': return 'bg-slate-100 text-slate-700';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    async function fetchTrials() {
        setLoading(true);
        setError(null);
        try {
            // ClinicalTrials.gov API v2
            const baseUrl = "https://clinicaltrials.gov/api/v2/studies";
            const queryParams = new URLSearchParams({
                "query.cond": searchTerm,
                "filter.overallStatus": status,
                "pageSize": "10",
                "sort": "LastUpdatePostDate:desc",
                "fields": "NCTId,BriefTitle,OverallStatus,ContactsLocationsModule,BriefSummary,ArmsInterventionsModule,SponsorCollaboratorsModule,StatusModule"
            });

            const res = await fetch(`${baseUrl}?${queryParams.toString()}`);
            if (!res.ok) throw new Error("Failed to fetch trials");

            const data = await res.json();
            setTrials(data.studies || []);
        } catch (err) {
            console.error(err);
            setError("Unable to load clinical trials at this moment. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    // Initial load
    useEffect(() => {
        fetchTrials();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchTrials();
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4">
                <div className="container mx-auto max-w-4xl text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Clinical Trials
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Search for ongoing clinical studies and new treatments. Data provided directly by the U.S. National Library of Medicine.
                    </p>
                </div>
            </section>

            {/* Search & Filter Section */}
            <section className="py-12 px-4 shadow-sm bg-white relative z-10 -mt-8 mx-4 rounded-3xl max-w-5xl md:mx-auto border border-slate-100">
                <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-end md:items-center">
                    <div className="flex-1 w-full">
                        <label className="block text-sm font-bold text-slate-700 mb-2">Condition / Disease</label>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-64">
                        <label className="block text-sm font-bold text-slate-700 mb-2">Study Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium appearance-none"
                        >
                            <option value="RECRUITING">Recruiting</option>
                            <option value="ACTIVE_NOT_RECRUITING">Active, Not Recruiting</option>
                            <option value="COMPLETED">Completed</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors h-[50px]">
                        Search
                    </button>
                </form>
            </section>

            {/* Results Section */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-5xl">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                            <Loader2 size={48} className="animate-spin mb-4" />
                            <p>Fetching latest trials...</p>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 text-red-600 p-6 rounded-2xl flex items-center gap-4 border border-red-100">
                            <AlertCircle size={24} />
                            <p>{error}</p>
                        </div>
                    ) : trials.length === 0 ? (
                        <div className="text-center py-20 text-slate-500">
                            <FlaskConical size={48} className="mx-auto mb-4 opacity-20" />
                            <p className="text-xl font-bold text-slate-700">No trials found.</p>
                            <p>Try adjusting your search terms or status filter.</p>
                        </div>
                    ) : (
                        <div className="grid gap-6">
                            {trials.map((study) => {
                                const nctId = study.protocolSection.identificationModule.nctId;
                                const title = study.protocolSection.identificationModule.briefTitle;
                                const locations = study.protocolSection.contactsLocationsModule?.locations || [];
                                const countryCount = new Set(locations.map(l => l.country)).size;
                                const firstLocation = locations[0]?.city ? `${locations[0].city}, ${locations[0].country}` : (locations.length > 0 ? "Multiple Locations" : "Location N/A");

                                // New Fields from "Enhance with RSS" logic
                                const sponsor = study.protocolSection.sponsorCollaboratorsModule?.leadSponsor?.name;
                                const interventions = study.protocolSection.armsInterventionsModule?.interventions || [];
                                const lastUpdate = study.protocolSection.statusModule?.lastUpdatePostDateStruct?.date;

                                return (
                                    <div key={nctId} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-3 text-xs font-bold mb-3">
                                                    <span className={`px-3 py-1 rounded-full ${getStatusColor(study.protocolSection.statusModule.overallStatus)}`}>
                                                        {study.protocolSection.statusModule.overallStatus.replace(/_/g, ' ')}
                                                    </span>
                                                    <span className="text-slate-400">ID: {nctId}</span>
                                                    {lastUpdate && <span className="text-slate-400 border-l border-slate-200 pl-3">Updated: {lastUpdate}</span>}
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                                                    {title}
                                                </h3>
                                                {sponsor && (
                                                    <p className="text-sm text-slate-500 font-medium mb-1">
                                                        <span className="text-slate-400">Sponsor:</span> {sponsor}
                                                    </p>
                                                )}
                                                {interventions.length > 0 && (
                                                    <p className="text-sm text-slate-500 font-medium">
                                                        <span className="text-slate-400">Interventions:</span> {interventions.map(i => i.name).join(", ")}
                                                    </p>
                                                )}
                                            </div>
                                            <Link
                                                href={`https://clinicaltrials.gov/study/${nctId}`}
                                                target="_blank"
                                                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2 border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-50 transition-colors"
                                            >
                                                View Details <ExternalLink size={16} />
                                            </Link>
                                        </div>

                                        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed mt-4">
                                            {study.protocolSection.descriptionModule?.briefSummary || "No summary available."}
                                        </p>

                                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                                            <MapPin size={16} className="text-slate-400" />
                                            <span>
                                                {firstLocation}
                                                {countryCount > 1 && <span className="text-slate-400 ml-1">(+ {countryCount - 1} other countries)</span>}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
