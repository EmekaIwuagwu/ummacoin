"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Heart, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TransparencyPage() {
    const transactions = [
        {
            date: "Jan 10, 2026",
            type: "Hajj Aid Distribution",
            amount: "$125,000",
            recipients: "25 Families",
            txHash: "0x742d35...438f44e"
        },
        {
            date: "Jan 5, 2026",
            type: "Educational Grant",
            amount: "$50,000",
            recipients: "Islamic School, Jakarta",
            txHash: "0x8a3f21...9c2d88f"
        },
        {
            date: "Dec 28, 2025",
            type: "Healthcare Initiative",
            amount: "$75,000",
            recipients: "Medical Clinic, Gaza",
            txHash: "0x1e5b92...3a7c66d"
        }
    ];

    const stats = [
        { icon: Heart, value: "$2.5M", label: "Total Donated" },
        { icon: Users, value: "500+", label: "Beneficiaries" },
        { icon: TrendingUp, value: "100%", label: "Transparency" }
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
                            Transparency <span className="text-gradient-gold">Log</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-body leading-relaxed">
                            Every donation, every transaction, every impact - tracked and verified on-chain.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="premium-glass p-8 rounded-[40px] border-white/10 text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6">
                                    <stat.icon size={32} />
                                </div>
                                <div className="text-3xl font-heading font-bold text-gradient-gold mb-2">{stat.value}</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Recent Transactions */}
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-10 text-center">Recent Charitable Distributions</h2>
                        <div className="space-y-4">
                            {transactions.map((tx, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="premium-glass p-6 rounded-[30px] border-white/10 hover:border-secondary/30 transition-all"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Clock size={16} className="text-slate-500" />
                                                <span className="text-xs text-slate-500 font-body">{tx.date}</span>
                                            </div>
                                            <h3 className="text-lg font-heading font-bold mb-1">{tx.type}</h3>
                                            <p className="text-sm text-slate-400 font-body">Recipients: {tx.recipients}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <div className="text-2xl font-heading font-bold text-emerald-500">{tx.amount}</div>
                                            <code className="text-xs text-slate-500 font-mono">{tx.txHash}</code>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto premium-glass p-12 rounded-[40px] border-secondary/20 text-center"
                    >
                        <h2 className="text-3xl font-heading font-bold mb-6">On-Chain Verification</h2>
                        <p className="text-lg text-slate-400 font-body mb-8 leading-relaxed">
                            All transactions are permanently recorded on the blockchain. Anyone can verify our charitable
                            distributions and ensure funds reach their intended recipients.
                        </p>
                        <button className="btn-primary">
                            View All Transactions
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
