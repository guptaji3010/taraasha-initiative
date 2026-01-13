"use client";
import { useEffect, useState } from "react";
import { Megaphone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fallbackNews = [
    { title: "🚨 Urgent: Funding gaps interrupt Enzyme Replacement Therapy for 60+ children in India.", link: "/news" },
    { title: "🔬 Breakthrough: New low-cost diagnostic test developed by Indian scientists for 29 LSDs.", link: "/research" },
    { title: "🏛️ Policy: Delhi High Court mandates dedicated fund for rare diseases; 300+ children await care.", link: "/resources" },
    { title: "🏥 Network: AIIMS Bhopal recognized as Centre of Excellence for Lysosomal Storage Disorders.", link: "/doctors" },
];

export default function NewsBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [news, setNews] = useState(fallbackNews);

    useEffect(() => {
        async function fetchNews() {
            try {
                const RSS_URL = "https://news.google.com/rss/search?q=Lysosomal+Storage+Disorders+health&hl=en-IN&gl=IN&ceid=IN:en";
                const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;
                const res = await fetch(API_URL);
                const data = await res.json();

                if (data.items && data.items.length > 0) {
                    const formattedNews = data.items.map(item => ({
                        title: `📰 ${item.title}`,
                        link: item.link
                    })).slice(0, 5);
                    setNews(formattedNews);
                }
            } catch (error) {
                console.error("NewsBar fetch failed, using fallback.");
            }
        }
        fetchNews();
    }, []);

    // Auto-advance news every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [news]);

    if (!isVisible) return null;

    return (
        <div className="bg-primary-dark text-white relative z-50 overflow-hidden">
            <div className="container mx-auto px-4 h-10 flex items-center justify-between">

                {/* News Label */}
                <div className="flex items-center gap-2 shrink-0 mr-4">
                    <Megaphone size={16} className="text-secondary" />
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded text-secondary-light">
                        Latest News
                    </span>
                </div>

                {/* Sliding Text */}
                <div className="flex-1 relative h-full overflow-hidden flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute w-full truncate text-sm font-medium text-slate-200"
                        >
                            <a
                                href={news[currentIndex].link}
                                target={news[currentIndex].link.startsWith("http") ? "_blank" : "_self"}
                                rel={news[currentIndex].link.startsWith("http") ? "noopener noreferrer" : ""}
                                className="hover:underline flex items-center gap-2"
                            >
                                {news[currentIndex].title} <span className="text-secondary-light text-xs opacity-70">Read More ↗</span>
                            </a>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="shrink-0 ml-4 hover:bg-white/10 p-1 rounded transition-colors"
                >
                    <X size={14} />
                </button>
            </div>
        </div>
    );
}
