"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide splash screen after 2.5 seconds (2s viewing + 0.5s fade out buffer)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="splash-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src="/splash.jpg"
                            alt="Saving Little Smiles"
                            className="w-full h-full object-cover opacity-90"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
                    </div>

                    {/* Optional Text Overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="relative z-10 text-center px-4"
                    >
                        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-2">
                            Taraasha Foundation
                        </h1>
                        <p className="font-sans text-xl md:text-2xl text-white/90 font-light tracking-wide">
                            Saving Little Smiles
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
