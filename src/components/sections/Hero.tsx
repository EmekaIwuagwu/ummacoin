"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 2 }}
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mb-8 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 flex items-center gap-2 text-secondary-light text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        <ShieldCheck size={14} />
                        The First Shariah-Compliant Digital Endowment
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-8 leading-[1.1] tracking-tight">
                        Empowering the <br />
                        <span className="text-gradient-gold">Global Ummah</span>
                    </h1>

                    <p className="text-lg md:text-xl font-body text-slate-300 max-w-2xl mb-12 leading-relaxed opacity-80">
                        Ummah Coin ($ISLAM) is a decentralized bridge for the faithful. A transparent, secure ecosystem designed to fulfill spiritual obligations and foster collective economic growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/join" className="btn-primary group">
                            Join the Movement <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/whitepaper" className="btn-outline">
                            View Whitepaper
                        </Link>
                    </div>

                    <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 opacity-40">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-heading font-bold text-gradient-gold">2.0B+</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Community</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-heading font-bold text-gradient-gold">100%</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Transparent</span>
                        </div>
                        <div className="flex flex-col sm:col-span-1 col-span-2 flex flex-col items-center">
                            <span className="text-2xl font-heading font-bold text-gradient-gold">∞</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Charitable Legacy</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Sublte Decorative Elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}
