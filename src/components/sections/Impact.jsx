"use client";
import { motion } from "framer-motion";
import { Users, Building2, HeartHandshake, IndianRupee } from "lucide-react";

const metrics = [
    {
        icon: Users,
        value: "500+",
        label: "Families Supported",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Building2,
        value: "15+",
        label: "Partner Hospitals",
        color: "text-secondary",
        bg: "bg-secondary/10",
    },
    {
        icon: HeartHandshake,
        value: "1000+",
        label: "Consultations Facilitated",
        color: "text-primary-light",
        bg: "bg-primary/5",
    },
    {
        icon: IndianRupee,
        value: "₹2Cr+",
        label: "Treatment Value",
        color: "text-accent-dark text-amber-700", // Fallback or mix if accent is too light
        bg: "bg-accent/20",
    },
];

export default function Impact() {
    return (
        <section className="py-16 bg-gradient-to-b from-transparent to-primary/5 border-y border-primary/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                        Our Impact
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className={`w-12 h-12 ${metric.bg} rounded-full flex items-center justify-center mb-3`}>
                                <metric.icon size={24} className={metric.color} />
                            </div>
                            <span className="text-3xl font-heading font-bold text-slate-900 mb-1">
                                {metric.value}
                            </span>
                            <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                                {metric.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
