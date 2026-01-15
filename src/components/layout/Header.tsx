"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, ShieldCheck } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "Mission", href: "/mission" },
    { name: "Hajj Aid", href: "/hajj-aid" },
    { name: "Tokenomics", href: "/tokenomics" },
    { name: "Purchase", href: "/#buy" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-8"
                }`}
        >
            <div className="container mx-auto px-6">
                <div
                    className={`flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-500 ${isScrolled
                        ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-2xl"
                        : "bg-transparent border-transparent"
                        }`}
                >
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12 shadow-lg shadow-secondary/20">
                            <Moon size={24} fill="currentColor" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold font-heading tracking-tight leading-none text-white">Ummah Coin</span>
                            <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-secondary-light">Decentralized Waqf</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-secondary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-emerald-500/80 bg-emerald-500/5 px-3 py-1.5 rounded-lg border border-emerald-500/10">
                            <ShieldCheck size={14} />
                            Verified
                        </div>
                        <Link href="/join">
                            <button className="px-6 py-2.5 rounded-xl bg-secondary text-white text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-secondary/20">
                                Launch App
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-slate-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-12 flex flex-col gap-8 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-heading font-bold hover:text-secondary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/join" className="w-full">
                                <button className="btn-primary w-full">
                                    Launch App
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
