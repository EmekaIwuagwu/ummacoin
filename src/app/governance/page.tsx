"use client";

import { motion } from "framer-motion";
import { Vote, Users, FileText, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GovernancePage() {
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
                            DAO <span className="text-gradient-gold">Governance</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-body leading-relaxed">
                            Decentralized decision-making guided by Shariah principles and community consensus.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        {[
                            {
                                icon: Vote,
                                title: "Voting Rights",
                                desc: "Token holders participate in governance decisions, from protocol upgrades to charitable allocations."
                            },
                            {
                                icon: Users,
                                title: "Community Proposals",
                                desc: "Any member can submit proposals for community consideration and voting."
                            },
                            {
                                icon: FileText,
                                title: "Shariah Oversight",
                                desc: "All decisions reviewed by our Shariah advisory board to ensure Islamic compliance."
                            },
                            {
                                icon: TrendingUp,
                                title: "Transparent Execution",
                                desc: "All governance actions executed on-chain with full transparency and auditability."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="premium-glass p-10 rounded-[40px] border-white/10"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-400 font-body leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto premium-glass p-12 rounded-[40px] border-secondary/20 text-center"
                    >
                        <h2 className="text-3xl font-heading font-bold mb-6">Shura Council</h2>
                        <p className="text-lg text-slate-400 font-body leading-relaxed">
                            Inspired by the Islamic principle of Shura (consultation), our governance model ensures that
                            important decisions are made collectively, transparently, and in accordance with Islamic values.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
