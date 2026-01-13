"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import homeData from "@/data/home.json";

export default function Hero() {
  const { hero } = homeData;
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      {/* Dynamic Background Image Layer */}
      {/* Background with Overlay */}
      {/* Dynamic Background Image Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-background/85 z-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-background/60 z-10" />
        <img
          src="/hero-bg.png"
          alt="Hopeful children"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Underlying gradients (optional, keeps them for the initial 2s) */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >


          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 text-foreground leading-tight">
            {hero.title_prefix} <br />
            <span className="text-secondary-dark">{hero.title_highlight}</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-primary/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={hero.button_primary_link}
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 group"
            >
              {hero.button_primary_text}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={hero.button_secondary_link}
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 group"
            >
              {hero.button_secondary_text}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl z-0" />
    </section>
  );
}
