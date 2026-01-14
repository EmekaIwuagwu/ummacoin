"use client";

import { motion } from "framer-motion";
import { Copy, CheckCircle2, ExternalLink } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContractPage() {
    const [copied, setCopied] = useState(false);

    // Placeholder contract address - replace with actual when deployed
    const contractAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-heading mb-8 leading-tight">
                            Contract <span className="text-gradient-gold">Address</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-body leading-relaxed">
                            Official Ummah Coin smart contract address. Always verify before transacting.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto premium-glass p-12 rounded-[40px] border-white/10 mb-8"
                    >
                        <h2 className="text-2xl font-heading font-bold mb-8 text-center">Ethereum Mainnet</h2>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3">Contract Address</div>
                            <div className="flex items-center gap-4">
                                <code className="flex-1 text-secondary font-mono text-sm break-all">{contractAddress}</code>
                                <button
                                    onClick={copyToClipboard}
                                    className="p-3 rounded-xl bg-secondary/10 hover:bg-secondary hover:text-white text-secondary transition-colors shrink-0"
                                >
                                    {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={`https://etherscan.io/address/${contractAddress}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-6 py-3 rounded-xl border border-secondary/30 text-secondary text-sm font-bold uppercase tracking-widest hover:bg-secondary/10 transition-colors text-center flex items-center justify-center gap-2"
                            >
                                View on Etherscan <ExternalLink size={16} />
                            </a>
                            <a
                                href="https://app.uniswap.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-6 py-3 rounded-xl border border-emerald-500/30 text-emerald-500 text-sm font-bold uppercase tracking-widest hover:bg-emerald-500/10 transition-colors text-center flex items-center justify-center gap-2"
                            >
                                Trade on Uniswap <ExternalLink size={16} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-500/80"
                    >
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-4">⚠️ Security Notice</h3>
                        <p className="text-sm font-body leading-relaxed">
                            Always verify the contract address from official sources. We will NEVER DM you first or ask for your private keys.
                            Use only verified decentralized exchanges for trading.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
