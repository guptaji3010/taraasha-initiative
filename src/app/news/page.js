"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import caseStudies from "@/data/case-studies.json";
import { Newspaper, ArrowRight, ExternalLink, Loader2, Microscope, FlaskConical, Globe } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [breakthroughs, setBreakthroughs] = useState([
        {
            title: "Gene Therapy Advances",
            description: "2024 has seen pivotal strides in Gene Therapy for **Fabry Disease** and **Metachromatic Leukodystrophy (MLD)**. New one-time infusion treatments are showing potential for durable, multi-organ clinical benefits.",
            source: "Sangamo / NIH",
            link: "https://www.sangamo.com/",
            icon: Microscope,
            color: "text-purple-600",
            bg: "bg-purple-100"
        },
        {
            title: "Next-Gen ERT",
            description: "Enzyme Replacement Therapy (ERT) remains a cornerstone. Newer formulations are focusing on better blood-brain barrier penetration availability to treat neurological symptoms effectively.",
            source: "Grand View Research",
            link: "https://www.grandviewresearch.com/industry-analysis/lysosomal-storage-diseases-market",
            icon: FlaskConical,
            color: "text-blue-600",
            bg: "bg-blue-100"
        },
        {
            title: "Global Collaboration",
            description: "International consortiums like the **Lysosomal Diseases Gordon Research Conference 2025** are fostering crucial dialogue on lysosome biology, neurodegeneration, and immunity.",
            source: "Gordon Research Conference",
            link: "https://www.grc.org/lysosomal-diseases-conference/2025/",
            icon: Globe,
            color: "text-teal-600",
            bg: "bg-teal-100"
        }
    ]);

    useEffect(() => {
        // Fetch news updates about Lysosomal Storage Disorders
        async function fetchNews() {
            try {
                const RSS_URL = "https://news.google.com/rss/search?q=Lysosomal+Storage+Disorders+health&hl=en-IN&gl=IN&ceid=IN:en";
                const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

                const res = await fetch(API_URL);
                const data = await res.json();

                if (data.items) {
                    // Filter for relevant items and limit to 6
                    setNews(data.items.slice(0, 6));
                }
            } catch (error) {
                console.error("Failed to fetch news:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchNews();

        // Fetch Specific Research Breakthroughs
        async function fetchBreakthroughs() {
            try {
                const RSS_URL = "https://news.google.com/rss/search?q=Lysosomal+Storage+Disorders+research+breakthrough+therapy&hl=en-IN&gl=IN&ceid=IN:en";
                const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;
                const res = await fetch(API_URL);
                const data = await res.json();

                if (data.items && data.items.length > 0) {
                    const apiBreakthroughs = data.items.slice(0, 3).map((item, index) => ({
                        title: item.title,
                        description: item.description.replace(/<[^>]+>/g, '').slice(0, 150) + "...",
                        source: item.source || "Google News",
                        link: item.link,
                        icon: [Microscope, FlaskConical, Globe][index % 3],
                        color: ["text-purple-600", "text-blue-600", "text-teal-600"][index % 3],
                        bg: ["bg-purple-100", "bg-blue-100", "bg-teal-100"][index % 3]
                    }));
                    // Prepend API results to static ones, or replace? User said "make it dynamic". 
                    // Let's Mix: Show API results first, then fallback to static if not enough.
                    // Actually, let's just replace if we get results, or show a mix.
                    // For safety, let's set it to API results if found, otherwise keep static.
                    setBreakthroughs(apiBreakthroughs);
                }
            } catch (error) {
                console.error("Failed to fetch breakthroughs:", error);
            }
        }
        fetchBreakthroughs();
    }, []);

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4">
                <div className="container mx-auto max-w-4xl text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        News & Updates
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Stay informed with the latest breakthroughs, foundation updates, and inspiring stories from our community.
                    </p>
                </div>
            </section>

            {/* Latest News Section (Automated) */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                            <Newspaper size={28} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900">
                            Latest News & Research
                        </h2>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-12">
                            <Loader2 className="animate-spin text-slate-400" size={40} />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {news.map((item, index) => (
                                <Link href={item.link} target="_blank" key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group flex flex-col">
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
                                            {new Date(item.pubDate).toLocaleDateString()}
                                        </p>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-3">
                                            {item.title}
                                        </h3>
                                        {/* Google News descriptions are often HTML snippets, stripping tags for clean preview */}
                                        <p className="text-slate-600 text-sm line-clamp-4 leading-relaxed">
                                            {item.description.replace(/<[^>]+>/g, '')}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex items-center text-primary font-bold text-sm">
                                        Read Full Article <ExternalLink size={14} className="ml-2" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {!loading && news.length === 0 && (
                        <p className="text-center text-slate-500">No recent updates found. Please check back later.</p>
                    )}
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-20 px-4 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Impact Stories</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2">
                            Stories of Hope
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {caseStudies.case_studies.map((study) => (
                            <div key={study.id} className="flex flex-col md:flex-row gap-8 bg-slate-50 rounded-3xl p-6 md:p-8 hover:shadow-md transition-shadow">
                                <div className="w-full md:w-48 h-48 flex-shrink-0 bg-slate-200 rounded-2xl overflow-hidden">
                                    <img src={study.imageUrl} alt={study.patientName} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <span className="inline-block px-3 py-1 bg-white text-slate-700 text-xs font-bold rounded-full mb-4 shadow-sm">
                                        {study.diagnosis}
                                    </span>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                        {study.title}
                                    </h3>
                                    <h4 className="text-sm font-semibold text-slate-500 mb-4">
                                        Patient: {study.patientName}
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {study.story}
                                    </p>
                                    <Link href="#" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                                        Read Full Story <ArrowRight size={18} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Breakthroughs Section (Moved from Research) */}
            <section className="py-20 px-4 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-12">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Innovation Watch</span>
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mt-2">Global Research Breakthroughs</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {breakthroughs.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col">
                                <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center ${item.color} mb-6`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                                    {item.description}
                                </p>
                                <Link href={item.link} target="_blank" className="text-xs text-primary font-bold hover:underline flex items-center gap-1">
                                    Source: {item.source} <ExternalLink size={10} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
