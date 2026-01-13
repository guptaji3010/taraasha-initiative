import Link from "next/link";
import { Construction } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function UnderConstruction() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-6 animate-pulse">
                    <Construction size={48} />
                </div>
                <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">
                    Work in Progress
                </h1>
                <p className="text-xl text-slate-600 max-w-md mx-auto mb-8">
                    We are currently crafting this page. It will be live very soon! <br />
                    Thank you for your patience.
                </p>
                <Link
                    href="/"
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-primary/20"
                >
                    Back to Home
                </Link>
            </div>
            <Footer />
        </main>
    );
}
