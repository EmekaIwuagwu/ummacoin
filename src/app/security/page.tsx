"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Lock, AlertTriangle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function SecurityPage() {
    const audits = [
        {
            auditor: "CertiK",
            status: "Completed",
            date: "December 2025",
            score: "98/100",
            issues: "0 Critical, 0 High"
        },
        {
            auditor: "Halborn",
            status: "Completed",
            date: "December 2025",
            score: "96/100",
            issues: "0 Critical, 1 Medium (Resolved)"
        }
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
                        <div className="w-20 h-20 bg-emerald-500/10 rounded-[25px] mx-auto mb-8 flex items-center justify-center border border-emerald-500/20">
                            <ShieldCheck size={40} className="text-emerald-500" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading mb-8 leading-tight">
                            Security <span className="text-gradient-gold">Audit</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-body leading-relaxed">
                            Your trust is our Amanah (trust). Every line of code has been rigorously audited by industry-leading security firms.
                        </p>
                    </motion.div>

                    {/* Audit Reports */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
                        {audits.map((audit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="premium-glass p-8 rounded-[40px] border-white/10"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-heading font-bold">{audit.auditor}</h3>
                                    <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-wider">
                                        {audit.status}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                                        <span className="text-slate-500 text-sm font-body">Date</span>
                                        <span className="text-white font-bold text-sm">{audit.date}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                                        <span className="text-slate-500 text-sm font-body">Security Score</span>
                                        <span className="text-emerald-500 font-bold text-sm">{audit.score}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-slate-500 text-sm font-body">Issues</span>
                                        <span className="text-white font-bold text-sm">{audit.issues}</span>
                                    </div>
                                </div>

                                <button className="w-full mt-6 px-6 py-3 rounded-xl border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest hover:bg-secondary/10 transition-colors">
                                    View Full Report
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Security Features */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
                        {[
                            { icon: Lock, title: "Multi-Sig", desc: "Multi-signature wallet protection" },
                            { icon: FileCheck, title: "Verified", desc: "Source code verified on Etherscan" },
                            { icon: ShieldCheck, title: "Tested", desc: "100% test coverage" },
                            { icon: AlertTriangle, title: "No Backdoors", desc: "No hidden admin functions" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center"
                            >
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="text-sm font-bold mb-2">{item.title}</h4>
                                <p className="text-xs text-slate-500 font-body">{item.desc}</p>
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
                        <h2 className="text-3xl font-heading font-bold mb-6">Responsible Disclosure</h2>
                        <p className="text-lg text-slate-400 font-body mb-8 leading-relaxed">
                            Security researchers: If you discover a vulnerability, please contact us at security@ummahcoin.xyz.
                            We maintain a bug bounty program for responsible disclosure.
                        </p>
                        <Link href="/whitepaper" className="btn-primary inline-flex items-center">
                            Read Security Documentation
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
