"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Initiatives", href: "/initiatives" },
    {
        name: "Care",
        href: "/support",
        children: [
            { name: "Disease Info Hub", href: "/diseases" },
            { name: "Medical Directory", href: "/doctors" },
            { name: "Support for Families", href: "/support" },
        ]
    },
    {
        name: "Resources",
        href: "/resources",
        children: [
            { name: "News & Updates", href: "/news" },
            { name: "Books & Legal", href: "/resources" },
            { name: "Clinical Trials", href: "/trials" },
        ]
    },
    { name: "Enroll", href: "/enroll" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-gray-100"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110">
                        {/* Actual Logo Image */}
                        <img
                            src="/hands_logo.png"
                            alt="Taraasha Foundation Logo"
                            className="w-full h-full object-contain drop-shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className={cn(
                            "font-heading font-bold text-base md:text-lg leading-none transition-colors",
                            scrolled ? "text-primary" : "text-white"
                        )}>
                            The Taraasha
                        </span>
                        <span className={cn(
                            "font-heading font-bold text-base md:text-lg leading-none transition-colors",
                            scrolled ? "text-primary" : "text-white"
                        )}>
                            Foundation
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.children ? (
                                <>
                                    <button
                                        className={cn(
                                            "flex items-center gap-1 font-bold text-sm transition-all focus:outline-none",
                                            scrolled
                                                ? "text-gray-700 hover:text-secondary"
                                                : "text-white hover:text-white/90 drop-shadow-md"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[200px] p-2">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors whitespace-nowrap"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "font-bold text-sm transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full",
                                        scrolled
                                            ? "text-gray-700 hover:text-secondary"
                                            : "text-white hover:text-white/90 drop-shadow-md"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/donate"
                        className={cn(
                            "flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg",
                            scrolled
                                ? "bg-primary text-white hover:bg-primary-dark"
                                : "bg-white text-primary hover:bg-gray-100"
                        )}
                    >
                        <Heart size={16} fill="currentColor" />
                        Support Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden p-2 rounded-full transition-colors",
                        scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div >

            {/* Mobile Menu Overlay */}
            < AnimatePresence >
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.children ? (
                                        <div className="flex flex-col gap-2">
                                            <span className="block text-gray-700 font-bold py-2 border-b border-gray-50 uppercase text-xs tracking-wider opacity-70">
                                                {link.name}
                                            </span>
                                            <div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-100 ml-2">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="text-gray-600 font-medium hover:text-primary py-1"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="block text-gray-700 font-medium hover:text-primary py-2 border-b border-gray-50 last:border-0"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/donate"
                                className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-xl font-bold mt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <Heart size={18} fill="currentColor" />
                                Support Us
                            </Link>
                        </div>
                    </motion.div>
                )
                }
            </AnimatePresence >
        </nav >
    );
}
