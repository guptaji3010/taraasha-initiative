import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import books from "@/data/books.json";
import courtOrders from "@/data/court-orders.json";
import { BookOpen, Gavel, Download, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Resources | The Taraasha Foundation",
    description: "Books, Court Orders, and educational resources for Lysosomal Storage Disorders.",
};

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4">
                <div className="container mx-auto max-w-4xl text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Resources & Legal
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Empowering families with knowledge and legal precedents. Access books, guides, and important court orders related to LSDs.
                    </p>
                </div>
            </section>

            {/* Court Orders Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                            <Gavel size={28} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900">
                            Important Court Orders
                        </h2>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                        <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                            Relentless advocacy efforts have led to significant judicial interventions across India to secure rightful treatment for patients with Lysosomal Storage Diseases. Favorable court orders in several states have successfully enabled patients to access state-sponsored life-saving treatment, marking a major step forward for the rare disease community.
                        </p>

                        <Link
                            href="https://indiankanoon.org/search/?formInput=Lysosomal+Storage+Disease+&filters=sortby%3A+mostrecent"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-lg rounded-full shadow-xl hover:bg-primary-dark hover:scale-105 transition-all group"
                        >
                            View Latest Court Orders <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <p className="text-sm text-slate-400 mt-4">
                            Redirects to IndianKanoon.org for real-time updates
                        </p>
                    </div>
                </div>
            </section>

            {/* Books & Publications Section */}
            <section className="py-20 px-4 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center gap-3 mb-12 justify-center">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                            <BookOpen size={28} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900">
                            Books & Publications
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {books.books.map((book) => (
                            <Link
                                key={book.id}
                                href={book.link}
                                target="_blank"
                                className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all border border-slate-100 flex flex-col h-full group"
                            >
                                <div className="h-64 bg-slate-200 overflow-hidden relative">
                                    <img
                                        src={book.imageUrl}
                                        alt={book.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay Icon */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <div className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                            <ExternalLink size={24} className="text-primary" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-primary transition-colors">
                                        {book.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mb-4 font-medium">
                                        by {book.author}
                                    </p>
                                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                        {book.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
