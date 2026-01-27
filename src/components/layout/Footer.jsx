import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-12 relative flex items-center justify-center">
                                <img
                                    src="/hands_logo.png"
                                    alt="Taraasha Foundation Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-heading font-bold text-xl">Taraasha Foundation</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            A 212 Healthcare Foundation dedicated to supporting children with Lysosomal Storage Disorders. Bringing hope, medicine, and community together.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="/initiatives" className="hover:text-white transition-colors">Medicine Access</Link></li>
                            <li><Link href="/doctors" className="hover:text-white transition-colors">Find a Doctor</Link></li>
                            <li><Link href="/trials" className="hover:text-white transition-colors">Clinical Trials</Link></li>
                            <li><Link href="/enroll" className="hover:text-white transition-colors">Patient Enrollment</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Patient Care & Knowledge</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><Link href="/diseases" className="hover:text-white transition-colors">Disease Info</Link></li>
                            <li><Link href="/support" className="hover:text-white transition-colors">Family Support</Link></li>
                            <li><Link href="/news" className="hover:text-white transition-colors">News & Updates</Link></li>
                            <li><Link href="/resources" className="hover:text-white transition-colors">Books & Legal</Link></li>

                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                                <span className="text-sm">212 Healthcare, Block-C, C-79, C Block, Sector 2, Noida, Uttar Pradesh 201301</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-secondary shrink-0" />
                                <span className="text-sm">+91 78385 21920</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-secondary shrink-0" />
                                <span className="text-sm">support@taraasha.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Taraasha Foundation. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
