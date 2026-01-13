"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, QrCode, CreditCard, Landmark, CheckCircle2 } from "lucide-react";

export default function DonatePage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 px-4 text-center">
                <div className="container mx-auto max-w-4xl">

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Make a Difference Today
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Your contribution helps us provide life-saving support, advocacy, and hope to families battling Lysosomal Storage Disorders in India.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-12">

                {/* Left Column: Bank Details & QR */}
                <div className="space-y-8">
                    {/* QR Code Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-2">
                            <QrCode className="text-primary" /> Scan to Donate
                        </h2>
                        <div className="bg-slate-100 w-64 h-64 mx-auto rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300 mb-6">
                            <p className="text-slate-400 font-bold text-sm">QR Code Placeholder</p>
                            {/* Replace with actual QR Code Image */}
                            {/* <img src="/qr-code.png" alt="Donate QR" className="w-full h-full object-contain mix-blend-multiply" /> */}
                        </div>
                        <p className="text-slate-500 text-sm">
                            Scan via UPI (GPay, PhonePe, Paytm)
                        </p>
                    </div>

                    {/* Bank Transfers */}
                    <div className="bg-slate-900 p-8 rounded-3xl shadow-lg text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Landmark size={120} />
                        </div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                            <Landmark className="text-primary" /> Bank Transfer (NEFT/RTGS)
                        </h3>
                        <div className="space-y-4 relative z-10">
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Account Name</p>
                                <p className="text-lg font-mono text-white">The Taraasha Foundation</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Account Number</p>
                                    <p className="text-lg font-mono text-white">1234 5678 9012</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">IFSC Code</p>
                                    <p className="text-lg font-mono text-white">HDFC0001234</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-bold">Bank Name</p>
                                <p className="text-base text-white">HDFC Bank, Sector 18, Noida</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Why Donate & Tax Info */}
                <div className="space-y-8">
                    <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                        <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="text-emerald-600" /> Tax Benefits
                        </h2>
                        <ul className="space-y-4 text-emerald-800">
                            <li className="flex gap-3">
                                <span className="font-bold text-lg">•</span>
                                <p>All donations to The Taraasha Foundation are eligible for <strong>50% tax exemption</strong> under Section 80G of the Income Tax Act.</p>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">How your donation helps</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: "Patient Advocacy", desc: "Fighting for policy changes and accessible treatment." },
                                { title: "Emergency Support", desc: "Providing bridge funding for critical diagnostics." },
                                { title: "Family Counseling", desc: "Mental health support for newly diagnosed families." },
                                { title: "Awareness Camps", desc: "Educating doctors and the public about LSDs." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-2">Need help?</h3>
                        <p className="text-slate-600 text-sm">
                            For any queries regarding donations, please write to us at <a href="mailto:donate@taraasha.org" className="text-primary font-bold hover:underline">donate@taraasha.org</a>
                        </p>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
