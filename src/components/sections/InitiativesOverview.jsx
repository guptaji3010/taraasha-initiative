"use client";
import Link from "next/link";
import { Pill, UserPlus, Users, ArrowRight, BookOpen, Heart, Activity } from "lucide-react";
import { motion } from "framer-motion";

const initiatives = [
    {
        icon: Heart,
        title: "Patient-Centric Support",
        description: "Providing guidance, counseling, and emotional support to patients living with LSDs. Facilitating access to resources, care options, and treatment pathways.",
        link: "/support",
        color: "bg-red-50 text-red-600",
    },
    {
        icon: Users,
        title: "Parent & Family Connect",
        description: "Creating a platform for parents to connect and share experiences, strengthening community bonds so no family feels alone.",
        link: "https://chat.whatsapp.com/Kv6f653UPl75RjpDCW7H6W",
        color: "bg-blue-50 text-blue-600",
    },
    {
        icon: BookOpen,
        title: "Education & Awareness",
        description: "Spreading awareness among the public and healthcare professionals. Providing educational resources for early diagnosis and intervention.",
        link: "/news",
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        icon: Activity,
        title: "Advocacy & Collaboration",
        description: "Working with organizations to bring treatments to India and advocating for government support and inclusive healthcare policies.",
        link: "/initiatives",
        color: "bg-purple-50 text-purple-600",
    },
];

export default function InitiativesOverview() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                        Our Core Initiatives
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        We focus on four key pillars to improve the lives of children affected by Lysosomal Storage Disorders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {initiatives.map((item, index) => {
                        const isExternal = item.link.startsWith("http");
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full"
                            >
                                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6 text-xl group-hover:scale-110 transition-transform`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-slate-800 mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-grow">
                                    {item.description}
                                </p>
                                {isExternal ? (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all text-sm mt-auto"
                                    >
                                        Learn More <ArrowRight size={16} className="ml-1" />
                                    </a>
                                ) : (
                                    <Link
                                        href={item.link}
                                        className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all text-sm mt-auto"
                                    >
                                        Learn More <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
