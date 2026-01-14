"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Sparkles, Trophy, Flag } from "lucide-react";

const phases = [
    {
        title: "Phase 1: Genesis",
        status: "complete",
        items: ["Shariah Logic Formulation", "Smart Contract Audit", "Website V1 Launch", "Seed Contribution Round"],
        icon: Sparkles
    },
    {
        title: "Phase 2: Revelation",
        status: "current",
        items: ["Public DEX Launch", "Coingecko & CMC Listing", "Ummah Council DAO Setup", "First Charity Recipient Selection"],
        icon: Flag
    },
    {
        title: "Phase 3: Expansion",
        status: "upcoming",
        items: ["Mobile Wallet Beta", "Merchant Adoption Program", "Cross-chain Bridges", "Hajj Aid Scale-up"],
        icon: Trophy
    }
];

export default function Roadmap() {
    return (
        <section id="roadmap" className="section-padding bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent -z-10 hidden lg:block" />

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-6">Our Trajectory</h2>
                    <h3 className="text-4xl md:text-5xl font-heading mb-8">The Path to <span className="text-gradient-gold">Global Impact</span></h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className={`p-10 rounded-[40px] border transition-all duration-500 relative ${phase.status === 'current'
                                    ? "bg-secondary/5 border-secondary/40 shadow-[0_0_50px_rgba(180,83,9,0.1)]"
                                    : "bg-white/[0.02] border-white/5"
                                }`}
                        >
                            {phase.status === 'current' && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary rounded-full text-[10px] uppercase font-bold text-white tracking-widest">
                                    Active Phase
                                </div>
                            )}

                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${phase.status === 'complete' ? "bg-emerald-500 text-white" : "bg-secondary/10 text-secondary"
                                }`}>
                                <phase.icon size={28} />
                            </div>

                            <h4 className="text-2xl font-heading font-bold mb-8">{phase.title}</h4>

                            <ul className="space-y-6">
                                {phase.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-4 group">
                                        {phase.status === 'complete' ? (
                                            <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                                        ) : (
                                            <Circle size={18} className="text-slate-700 mt-1 shrink-0 group-hover:text-secondary transition-colors" />
                                        )}
                                        <span className={`text-sm font-medium ${phase.status === 'complete' ? "text-slate-400 line-through opacity-60" : "text-slate-400"
                                            }`}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
