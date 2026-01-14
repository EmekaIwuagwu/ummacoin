"use client";

import { motion } from "framer-motion";
import { Heart, Plane, Users, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function HajjAidPage() {
    const stats = [
        { value: "2026", label: "Next Hajj Year" },
        { value: "10%", label: "of Transactions" },
        { value: "∞", label: "Lives Impacted" }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 islamic-pattern opacity-[0.03]" />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    {/* Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto mb-24"
                    >
                        <div className="w-20 h-20 bg-secondary rounded-[25px] mx-auto mb-8 flex items-center justify-center shadow-[0_0_60px_rgba(180,83,9,0.3)]">
                            <Plane size={40} className="text-white" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading mb-8 leading-tight">
                            Hajj <span className="text-gradient-gold">Aid Program</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-body leading-relaxed">
                            Making the sacred pilgrimage accessible to all believers through collective charity and blockchain transparency.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mb-24 max-w-3xl mx-auto">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl font-heading font-bold text-gradient-gold mb-2">{stat.value}</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* How It Works */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {[
                            { icon: TrendingUp, title: "Transaction Fee", desc: "10% of every transaction contributes to the Hajj Aid Fund" },
                            { icon: Users, title: "Community Vote", desc: "Token holders vote on beneficiary selection through DAO governance" },
                            { icon: Heart, title: "Transparent Impact", desc: "All donations tracked on-chain with public verification" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="premium-glass p-8 rounded-[40px] border-white/10 text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-400 font-body text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto premium-glass p-12 rounded-[40px] border-secondary/20 text-center"
                    >
                        <h2 className="text-3xl font-heading font-bold mb-6">Support the Journey</h2>
                        <p className="text-lg text-slate-400 font-body mb-8 leading-relaxed">
                            Every transaction you make helps a brother or sister fulfill their religious obligation.
                            Join us in making Hajj accessible to all.
                        </p>
                        <Link href="/join" className="btn-primary inline-flex items-center">
                            Join the Movement
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
