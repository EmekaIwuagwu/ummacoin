"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        q: "What makes Ummah Coin shariah-compliant?",
        a: "Our protocol is designed to eliminate Riba (usury) and Gharar (excessive uncertainty). Every transaction supports a documented charitable endowment (Waqf) and our smart contracts are reviewed by independent Shariah advisors."
    },
    {
        q: "How are Hajj aid recipients selected?",
        a: "Recipients are selected through a transparent, merit-based application process. Priority is given to elderly Muslims and those from economically disadvantaged backgrounds who have never performed Hajj."
    },
    {
        q: "Is the Hajj Fund secure?",
        a: "Yes. The Hajj Aid Fund is a multi-signature treasury held on-chain. All expenditures are logged transparently on the blockchain for the community to audit at any time."
    },
    {
        q: "Can I participate in governance?",
        a: "Absolutely. Holding $ISLAM grants you voting rights in our 'Ummah Council' DAO, where you can help decide which charities to support and how to evolve the ecosystem."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-background islamic-pattern">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3 space-y-8">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest">
                            <HelpCircle size={14} /> Knowledge Base
                        </div>
                        <h3 className="text-4xl md:text-5xl font-heading leading-tight">
                            Common <br />
                            <span className="text-gradient-gold">Inquiries</span>
                        </h3>
                        <p className="text-slate-400 text-lg leading-relaxed font-body">
                            Understanding the intersection of faith and decentralized finance.
                        </p>
                        <div className="p-6 rounded-3xl premium-glass border-white/5 space-y-4">
                            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-300">Need more depth?</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">Our technical whitepaper covers the Shariah logic and mathematical foundations in detail.</p>
                            <Link href="/whitepaper" className="block w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 transition-colors text-center">
                                Download Documentation
                            </Link>
                        </div>
                    </div>

                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${activeIndex === i
                                    ? "bg-secondary/5 border-secondary/30"
                                    : "bg-white/[0.02] border-white/5 hover:border-white/10"
                                    }`}
                            >
                                <button
                                    className="w-full p-8 flex items-center justify-between text-left"
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                >
                                    <span className="text-xl font-heading font-bold pr-8">{faq.q}</span>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIndex === i ? "bg-secondary text-white rotate-45" : "bg-white/5 text-slate-500"
                                        }`}>
                                        <Plus size={20} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-8 pb-8 text-slate-400 leading-relaxed font-body">
                                                <div className="pt-4 border-t border-white/5">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
