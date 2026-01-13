"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Show button after a small delay for a nice entrance effect
        const entranceTimer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(entranceTimer);
    }, []);

    useEffect(() => {
        // Popup Logic: Only on Home Page ("/")
        if (pathname === "/") {
            let showTimer;
            let hideTimer;

            // Show popup after 1 second
            showTimer = setTimeout(() => {
                setShowPopup(true);
            }, 1000);

            // Hide popup 10 seconds after showing
            hideTimer = setTimeout(() => {
                setShowPopup(false);
            }, 11000);

            return () => {
                clearTimeout(showTimer);
                clearTimeout(hideTimer);
            };
        } else {
            setShowPopup(false);
        }
    }, [pathname]);

    return (
        <>
            {/* Promotional Popup Bubble (Only on Home) */}
            <div
                className={cn(
                    "fixed bottom-4 right-24 z-50 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-start gap-1 transition-all duration-500 origin-right max-w-[200px]",
                    showPopup ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-90 pointer-events-none"
                )}
            >
                {/* Triangle pointing to the button */}
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-white transform -translate-y-1/2 rotate-45 border-t border-r border-slate-100"></div>

                <p className="text-slate-900 font-bold text-sm">
                    Hello There! 👋
                </p>
                <p className="text-slate-600 text-xs leading-tight">
                    Join our community to connect with families & experts.
                </p>
            </div>

            <Link
                href="https://chat.whatsapp.com/Kv6f653UPl75RjpDCW7H6W"
                target="_blank"
                className={cn(
                    "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                aria-label="Join WhatsApp Community"
            >
                {/* WhatsApp SVG Logo */}
                <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </Link>
        </>
    );
}
