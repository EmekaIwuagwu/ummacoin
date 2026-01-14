"use client";

import { motion } from "framer-motion";
import { Wallet, CreditCard, Repeat, Star } from "lucide-react";

const steps = [
    {
        icon: Wallet,
        title: "Secure a Wallet",
        desc: "Prepare for your journey by downloading Phantom or MetaMask. Keep your seed phrase sacred."
    },
    {
        icon: CreditCard,
        title: "Acquire Assets",
        desc: "Fund your wallet with SOL or ETH from your preferred exchange. This is your fuel for the expedition."
    },
    {
        icon: Repeat,
        title: "Sacred Exchange",
        desc: "Visit Raydium or Uniswap, input the official contract, and swap for your $ISLAM tokens."
    },
    {
        icon: Star,
        title: "Join the Council",
        desc: "You are now a guardian of the Ummah. Stake, hold, and participate in global decisions."
    }
];

export default function HowToBuy() {
    return (
        <section id="buy" className="section-padding bg-[rgba(180,83,9,0.02)] relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-6">The Journey Begins</h2>
                    <h3 className="text-4xl md:text-5xl font-heading mb-8">How to <span className="text-gradient-gold">Acquire $ISLAM</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group p-8 rounded-[40px] bg-background border border-white/5 hover:border-secondary/30 transition-all flex flex-col items-center text-center"
                        >
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white font-bold font-heading shadow-xl group-hover:scale-110 transition-transform">
                                {i + 1}
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <step.icon size={28} />
                            </div>

                            <h4 className="text-xl font-heading font-bold mb-4">{step.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-body">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 max-w-4xl mx-auto premium-glass p-10 rounded-[40px] border-secondary/20 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                        <Star size={48} className="animate-pulse" />
                    </div>
                    <div className="flex-1 space-y-4">
                        <h4 className="text-2xl font-heading font-bold">The Guardian's Promise</h4>
                        <p className="text-slate-400 font-body leading-relaxed">
                            Security is our highest priority. We will NEVER initiate a DM or ask for your private keys. The official contract address will be published exclusively through our verified channels and this website header.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-6 py-2 rounded-lg border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest hover:bg-secondary/10 transition-colors">
                                Verify Contract
                            </button>
                            <button className="px-6 py-2 rounded-lg border border-emerald-500/30 text-emerald-500 text-xs font-bold uppercase tracking-widest hover:bg-emerald-500/10 transition-colors">
                                Security Audit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
