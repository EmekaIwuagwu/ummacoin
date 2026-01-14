"use client";

import { motion } from "framer-motion";
import { PieChart, Landmark, ShieldCheck, HeartPulse } from "lucide-react";

const allocation = [
    { title: "Public Endowment", value: "40%", icon: Landmark, color: "text-secondary", desc: "Locked for community liquidity and long-term stability." },
    { title: "Hajj Aid Fund", value: "25%", icon: HeartPulse, color: "text-emerald-500", desc: "Permanently dedicated to sponsoring pilgrimages for the needy." },
    { title: "Development", value: "20%", icon: ShieldCheck, color: "text-white", desc: "Funding core infrastructure, security audits, and Shariah reviews." },
    { title: "Ecosystem Growth", value: "15%", icon: PieChart, color: "text-slate-400", desc: "Strategic partnerships and marketing within the Ummah." },
];

export default function Tokenomics() {
    return (
        <section id="tokenomics" className="section-padding bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-6">The Wealth of Spirit</h2>
                    <h3 className="text-4xl md:text-5xl font-heading mb-8">Sustainable <span className="text-gradient-gold">Tokenomics</span></h3>
                    <p className="text-slate-400 text-lg leading-relaxed opacity-80">
                        Our economic model is designed for circulation and growth, ensuring that as the token thrives, the charitable impact scales proportionally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {allocation.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="premium-card group border-white/5 hover:border-secondary/20"
                        >
                            <div className="absolute top-0 right-0 p-6">
                                <item.icon className={`opacity-10 group-hover:opacity-20 transition-opacity ${item.color}`} size={80} />
                            </div>

                            <div className={`text-5xl font-heading font-bold mb-6 ${item.color}`}>
                                {item.value}
                            </div>

                            <h4 className="text-xl font-heading font-bold mb-4">{item.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 md:p-12 rounded-[40px] premium-glass gold-border max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 space-y-6">
                        <h4 className="text-2xl font-heading font-bold">The $ISLAM Burn Protocol</h4>
                        <p className="text-slate-400 leading-relaxed font-body">
                            Unlike traditional tokens, we implement a "Circular Sadaqah" mechanism. Every quarter, a portion of the development wallet is recycled into the Hajj fund or permanently removed from circulation to foster scarcity and value.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold font-body">
                            <li className="flex items-center gap-2 text-emerald-500"><ShieldCheck size={16} /> Liquidity Locked 2 Years</li>
                            <li className="flex items-center gap-2 text-emerald-500"><ShieldCheck size={16} /> No Hidden Minting</li>
                            <li className="flex items-center gap-2 text-emerald-500"><ShieldCheck size={16} /> Anti-Whale Protection</li>
                            <li className="flex items-center gap-2 text-emerald-500"><ShieldCheck size={16} /> Shariah Audited</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-64 aspect-square bg-gradient-to-br from-secondary/20 to-transparent rounded-[32px] border border-secondary/20 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 islamic-pattern opacity-10 animate-slow-pan" />
                        <PieChart className="text-secondary group-hover:scale-110 transition-transform" size={64} />
                    </div>
                </div>
            </div>
        </section>
    );
}
