"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Wallet, Moon, Shield } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function JoinPage() {
    const [walletAddress, setWalletAddress] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
                    <div className="absolute inset-0 islamic-pattern opacity-[0.03]" />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-2xl mx-auto">
                        {!isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Header */}
                                <div className="text-center mb-12">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="w-20 h-20 bg-secondary rounded-[25px] mx-auto mb-8 flex items-center justify-center shadow-[0_0_60px_rgba(180,83,9,0.3)]"
                                    >
                                        <Moon size={40} fill="white" className="text-white" />
                                    </motion.div>

                                    <h1 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
                                        Join the <span className="text-gradient-gold">Movement</span>
                                    </h1>

                                    <p className="text-lg text-slate-400 font-body leading-relaxed max-w-xl mx-auto">
                                        Become part of the global Ummah economic revolution. Submit your wallet address to stay connected and receive updates.
                                    </p>
                                </div>

                                {/* Form */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="premium-glass p-10 rounded-[40px] border-white/10"
                                >
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        {/* Wallet Address */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">
                                                <Wallet size={16} />
                                                Wallet Address
                                            </label>
                                            <input
                                                type="text"
                                                value={walletAddress}
                                                onChange={(e) => setWalletAddress(e.target.value)}
                                                placeholder="0x... or your Solana wallet address"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-secondary/50 focus:bg-secondary/5 transition-all font-mono text-sm"
                                            />
                                        </div>

                                        {/* Email (Optional) */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                                                Email (Optional)
                                            </label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your@email.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-secondary/50 focus:bg-secondary/5 transition-all font-body"
                                            />
                                        </div>

                                        {/* Info Box */}
                                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-500/80">
                                            <Shield size={20} className="shrink-0 mt-0.5" />
                                            <p className="text-xs font-body leading-relaxed">
                                                Your wallet address is stored securely and will only be used for official Ummah Coin communications and airdrops. We will never ask for your private keys.
                                            </p>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Processing...
                                                </span>
                                            ) : (
                                                <>
                                                    Submit & Join <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </motion.div>

                                {/* Benefits */}
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { title: "Early Access", desc: "Priority updates on launches" },
                                        { title: "Community", desc: "Join exclusive discussions" },
                                        { title: "Rewards", desc: "Eligible for airdrops" }
                                    ].map((benefit, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + i * 0.1 }}
                                            className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center"
                                        >
                                            <h4 className="text-sm font-bold text-secondary mb-2">{benefit.title}</h4>
                                            <p className="text-xs text-slate-500 font-body">{benefit.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-24 h-24 bg-emerald-500/10 rounded-full mx-auto mb-8 flex items-center justify-center">
                                    <CheckCircle2 size={48} className="text-emerald-500" />
                                </div>

                                <h2 className="text-4xl font-heading mb-6">
                                    Welcome to the <span className="text-gradient-gold">Ummah</span>
                                </h2>

                                <p className="text-lg text-slate-400 font-body mb-12 max-w-lg mx-auto">
                                    You've successfully joined the movement. Check your wallet for exclusive updates and rewards.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/" className="btn-primary">
                                        Return Home
                                    </Link>
                                    <Link href="/whitepaper" className="btn-outline">
                                        Read Whitepaper
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
