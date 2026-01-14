"use client";

import { motion } from "framer-motion";
import { Twitter, MessageCircle, Mail, Send, MapPin, ShieldCheck, Moon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative pt-32 pb-16 overflow-hidden bg-background border-t border-white/5">
            <div className="absolute inset-0 islamic-pattern opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-14 h-14 bg-secondary rounded-[20px] flex items-center justify-center text-white transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-[0_0_40px_rgba(180,83,9,0.3)]">
                                <Moon size={32} fill="currentColor" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold font-heading tracking-tight">Ummah <span className="text-secondary">Coin</span></span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500">Sacred Economy</span>
                            </div>
                        </Link>

                        <p className="text-slate-500 text-sm leading-relaxed font-body max-w-sm">
                            Ummah Coin is a decentralized utility token designed to enhance the spiritual and economic lives of the global Muslim community through blockchain innovation and collective charity.
                        </p>

                        <div className="flex gap-4">
                            {[Twitter, MessageCircle, Mail].map((Icon, i) => (
                                <button key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary/50 hover:bg-secondary/5 transition-all">
                                    <Icon size={20} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-10">Navigation</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/mission" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Our Mission</Link>
                            </li>
                            <li>
                                <Link href="/hajj-aid" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Hajj Aid</Link>
                            </li>
                            <li>
                                <Link href="/tokenomics" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Tokenomics</Link>
                            </li>
                            <li>
                                <Link href="/whitepaper" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Whitepaper</Link>
                            </li>
                            <li>
                                <Link href="/governance" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Governance</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-10">Resources</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/contract" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Contract Address</Link>
                            </li>
                            <li>
                                <Link href="/security" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Security Audit</Link>
                            </li>
                            <li>
                                <Link href="/brand" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Brand Assets</Link>
                            </li>
                            <li>
                                <Link href="/transparency" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Transparency Log</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <h4 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-10">The Chronicles</h4>
                            <p className="text-slate-500 text-sm mb-6 font-body">Join our newsletter for selection updates and project milestones.</p>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="your@salvation.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-secondary/50 focus:bg-secondary/5 transition-all font-body"
                                />
                                <button className="absolute right-2 top-2 p-2.5 bg-secondary rounded-xl text-white hover:scale-105 active:scale-95 transition-all shadow-lg">
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-500/80 text-[10px] uppercase font-bold tracking-widest">
                            <ShieldCheck size={16} /> Secure Protocol • Shariah Reviewed 2024
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-center md:text-left">
                        <p className="text-secondary font-heading text-2xl mb-2">
                            May Allah accept from us and from you
                        </p>
                        <p className="text-slate-600 text-[11px] uppercase font-bold tracking-[0.4em]">
                            تقبل الله منا ومنكم
                        </p>
                    </div>

                    <div className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-bold text-center md:text-right">
                        © {new Date().getFullYear()} Ummah Coin ($ISLAM). <br className="md:hidden" /> Empowering the global faithful through technology.
                    </div>
                </div>
            </div>
        </footer>
    );
}
