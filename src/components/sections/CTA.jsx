"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-[0%] left-[0%] w-[400px] h-[400px] rounded-full bg-secondary blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                    Every Child Deserves a Chance
                </h2>
                <p className="text-accent-light text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Whether you are a parent seeking help or a donor looking to make a difference, your action today can change a life forever.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/enroll"
                        className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-full shadow-md hover:bg-slate-50 transition-colors transform hover:-translate-y-1 flex items-center justify-center gap-2 text-center border border-white"
                    >
                        Register a Patient <ArrowRight size={20} className="text-primary" />
                    </Link>
                    <Link
                        href="https://chat.whatsapp.com/Kv6f653UPl75RjpDCW7H6W"
                        target="_blank"
                        className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-full shadow-md hover:bg-slate-50 transition-colors transform hover:-translate-y-1 flex items-center justify-center gap-2 text-center border border-white"
                    >
                        Join Our Community <ArrowRight size={20} className="text-primary" />
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-full shadow-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-center border border-white"
                    >
                        Contact Us <ArrowRight size={20} className="text-primary" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
