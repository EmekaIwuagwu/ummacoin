"use client";

import { motion } from "framer-motion";
import { Download, Image, FileText, Palette } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BrandPage() {
    const assets = [
        { name: "Logo Package", desc: "SVG, PNG, EPS formats", icon: Image },
        { name: "Brand Guidelines", desc: "Colors, typography, usage", icon: Palette },
        { name: "Press Kit", desc: "Media resources and images", icon: FileText }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 islamic-pattern opacity-[0.03]" />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto mb-24"
                    >
                        <h1 className="text-5xl md:text-7xl font-heading mb-8 leading-tight">
                            Brand <span className="text-gradient-gold">Assets</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-body leading-relaxed">
                            Official Ummah Coin brand materials for partners, media, and community members.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                        {assets.map((asset, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="premium-glass p-8 rounded-[40px] border-white/10 text-center group hover:border-secondary/30 transition-all"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <asset.icon size={32} />
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-2">{asset.name}</h3>
                                <p className="text-slate-400 text-sm font-body mb-6">{asset.desc}</p>
                                <button className="w-full px-6 py-3 rounded-xl bg-secondary/10 hover:bg-secondary text-secondary hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                                    <Download size={16} /> Download
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto premium-glass p-12 rounded-[40px] border-white/10"
                    >
                        <h2 className="text-3xl font-heading font-bold mb-6 text-center">Usage Guidelines</h2>
                        <div className="space-y-4 text-slate-400 font-body">
                            <p className="leading-relaxed">
                                • Always use the official logo files - do not recreate or modify the logo
                            </p>
                            <p className="leading-relaxed">
                                • Maintain adequate clear space around the logo
                            </p>
                            <p className="leading-relaxed">
                                • Do not alter the brand colors or apply filters
                            </p>
                            <p className="leading-relaxed">
                                • For commercial use, please contact brand@ummahcoin.xyz
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
