"use client";

import { motion } from "framer-motion";
import { Download, Moon } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function WhitepaperPage() {
    return (
        <main className="min-h-screen bg-background pt-20">
            <Header />
            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="w-20 h-20 bg-secondary rounded-[25px] mx-auto mb-8 flex items-center justify-center shadow-[0_0_60px_rgba(180,83,9,0.3)]">
                        <Moon size={40} fill="white" className="text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-heading mb-4">Ummah Coin</h1>
                    <p className="text-secondary text-sm uppercase tracking-[0.3em] font-bold mb-2">Sacred Economy Whitepaper</p>
                    <p className="text-slate-500 text-xs">Version 1.0 | January 2026</p>
                </motion.div>

                {/* Content Container */}
                <div className="premium-glass rounded-[40px] p-12 border-secondary/20">
                    {/* Executive Summary */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-6">Executive Summary</h2>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Ummah Coin ($ISLAM) represents a paradigm shift in Islamic finance, merging blockchain technology with Shariah-compliant principles to create a transparent, decentralized financial ecosystem serving the global Muslim community of 2+ billion people.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Built on the principles of <strong className="text-secondary">Waqf</strong> (endowment), <strong className="text-secondary">Sadaqah</strong> (charity), and <strong className="text-secondary">Shura</strong> (consultation), Ummah Coin provides a modern solution to age-old Islamic economic principles while maintaining complete Shariah compliance.
                        </p>
                    </section>

                    {/* Vision & Mission */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-6">Vision & Mission</h2>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Vision</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            To establish the world's first truly decentralized, Shariah-compliant financial ecosystem that empowers Muslims worldwide to transact, save, and contribute to charitable causes without compromising their religious values.
                        </p>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Mission</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex gap-3"><span className="text-secondary">→</span> Eliminate Riba (usury) and Gharar (excessive uncertainty) from digital transactions</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Create transparent, blockchain-verified charitable giving infrastructure</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Enable affordable Hajj pilgrimage through community-funded sponsorships</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Build decentralized governance based on Islamic Shura principles</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Foster economic unity across the global Ummah</li>
                        </ul>
                    </section>

                    {/* Token Economics */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-8">Token Economics</h2>

                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                                <div className="text-4xl font-heading font-bold text-gradient-gold mb-2">1B</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Total Supply</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                                <div className="text-4xl font-heading font-bold text-gradient-gold mb-2">10%</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Hajj Aid Fund</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                                <div className="text-4xl font-heading font-bold text-gradient-gold mb-2">100%</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Fair Launch</div>
                            </div>
                        </div>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Token Distribution</h3>
                        <ul className="space-y-3 text-slate-400 mb-6">
                            <li className="flex gap-3"><span className="text-secondary">→</span> <strong>40% - Public Sale:</strong> Fair launch with anti-whale mechanics</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> <strong>25% - Hajj Aid Fund:</strong> Multi-sig treasury for pilgrimage sponsorships</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> <strong>15% - Liquidity Pool:</strong> Ensuring stable trading and minimal slippage</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> <strong>10% - Development:</strong> Team allocation with 4-year vesting</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> <strong>10% - Community Rewards:</strong> Staking and governance incentives</li>
                        </ul>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Transaction Mechanics</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Each transaction is subject to a 10% fee structure designed to sustain the ecosystem:
                        </p>
                        <ul className="space-y-3 text-slate-400 mb-6">
                            <li className="flex gap-3"><span className="text-secondary">→</span> <strong>5% - Hajj Aid Fund:</strong> Automatically allocated to charitable treasury</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> <strong>3% - Liquidity:</strong> Auto-added to liquidity pools for price stability</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> <strong>2% - Holder Rewards:</strong> Distributed proportionally to all holders</li>
                        </ul>

                        <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-500/80">
                            <p className="text-sm leading-relaxed">
                                <strong>Shariah Compliance Note:</strong> All fee structures have been reviewed and approved by our Shariah Advisory Board. The transparency and charitable distribution align with Islamic principles of Zakat and Sadaqah.
                            </p>
                        </div>
                    </section>

                    {/* Hajj Aid Program */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-6">Hajj Aid Program</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            The cornerstone of Ummah Coin's social mission is making Hajj accessible to deserving Muslims who cannot afford the pilgrimage.
                        </p>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Selection Process</h3>
                        <ul className="space-y-3 text-slate-400 mb-6">
                            <li className="flex gap-3"><span className="text-secondary">→</span> Community-submitted applications reviewed transparently</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Priority given to elderly and first-time pilgrims</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Income verification and background checks</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> DAO governance voting for final beneficiary selection</li>
                        </ul>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Fund Management</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex gap-3"><span className="text-secondary">→</span> Multi-signature wallet requiring 5/7 signatures for disbursement</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Monthly transparency reports published on-chain</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> All transactions publicly auditable via blockchain explorer</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Independent third-party audits conducted quarterly</li>
                        </ul>
                    </section>

                    {/* Governance Model */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-6">Governance Model</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Inspired by the Islamic principle of <strong className="text-secondary">Shura</strong> (mutual consultation), Ummah Coin implements a decentralized autonomous organization (DAO) where token holders participate in key decisions.
                        </p>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Voting Rights</h3>
                        <ul className="space-y-3 text-slate-400 mb-6">
                            <li className="flex gap-3"><span className="text-secondary">→</span> One token = one vote on governance proposals</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Proposals require 10,000 $ISLAM to submit</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Quorum of 30% total supply for proposal passage</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> 7-day voting period for standard proposals</li>
                        </ul>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Shariah Oversight</h3>
                        <p className="text-slate-400 leading-relaxed">
                            All governance decisions are subject to review by our Shariah Advisory Board, ensuring compliance with Islamic law. Any proposal that violates Shariah principles will be vetoed, regardless of vote outcome.
                        </p>
                    </section>

                    {/* Technical Architecture */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-6">Technical Architecture</h2>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Smart Contract Security</h3>
                        <ul className="space-y-3 text-slate-400 mb-6">
                            <li className="flex gap-3"><span className="text-secondary">→</span> Audited by CertiK and Halborn security firms</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Multi-signature wallet protection</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Time-locked administrative functions</li>
                            <li className="flex gap-3"><span className="text-secondary">→</span> Upgradeable via DAO governance only</li>
                        </ul>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Blockchain Selection</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Deployed on Ethereum Mainnet for maximum security and decentralization, with plans for Layer 2 scaling solutions to reduce transaction costs for the community.
                        </p>

                        <h3 className="text-xl font-heading font-bold text-secondary mb-4">Oracle Integration</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Chainlink oracles provide reliable price feeds and external data verification, crucial for maintaining transparency in charitable distributions.
                        </p>
                    </section>

                    {/* Roadmap */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-8">Roadmap</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Q1 2026 - Foundation</h3>
                                <ul className="space-y-3 text-slate-400">
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Smart contract deployment and security audits</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Fair launch and liquidity provision</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Website and community channels establishment</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Initial Shariah board formation</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Q2 2026 - Growth</h3>
                                <ul className="space-y-3 text-slate-400">
                                    <li className="flex gap-3"><span className="text-secondary">→</span> First Hajj Aid Fund distribution</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> DAO governance activation</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> CEX listings (Binance, Coinbase applications)</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Mobile wallet application launch</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Q3 2026 - Expansion</h3>
                                <ul className="space-y-3 text-slate-400">
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Layer 2 deployment for reduced fees</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> International partnerships with Islamic organizations</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Educational grant program launch</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Staking platform deployment</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Q4 2026 - Innovation</h3>
                                <ul className="space-y-3 text-slate-400">
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Ummah Coin debit card (Shariah-compliant)</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Healthcare initiative rollout</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Cross-chain bridge development</li>
                                    <li className="flex gap-3"><span className="text-secondary">→</span> Annual transparency audit publication</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Risk Factors */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-6">Risk Factors</h2>
                        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-500/80">
                            <p className="font-bold mb-4">Investment Disclaimer:</p>
                            <p className="text-sm leading-relaxed mb-4">Cryptocurrency investments carry inherent risks. Ummah Coin token holders should be aware of:</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-3"><span>→</span> Market volatility and price fluctuations</li>
                                <li className="flex gap-3"><span>→</span> Regulatory changes affecting cryptocurrency</li>
                                <li className="flex gap-3"><span>→</span> Smart contract vulnerabilities (mitigated through audits)</li>
                                <li className="flex gap-3"><span>→</span> Liquidity risks in early stages</li>
                            </ul>
                            <p className="text-sm italic mt-4">Never invest more than you can afford to lose. Consult with a Shariah-compliant financial advisor before investing.</p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="p-8 rounded-2xl bg-secondary/5 border border-secondary/20 text-center">
                        <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
                        <div className="space-y-2 text-slate-400">
                            <p><strong className="text-secondary">Website:</strong> https://ummahcoin.xyz</p>
                            <p><strong className="text-secondary">Email:</strong> info@ummahcoin.xyz</p>
                            <p><strong className="text-secondary">Security:</strong> security@ummahcoin.xyz</p>
                            <p><strong className="text-secondary">Media:</strong> media@ummahcoin.xyz</p>
                        </div>
                    </section>

                    {/* Footer */}
                    <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
                        <p>© 2026 Ummah Coin. All rights reserved.</p>
                        <p className="mt-4 text-secondary">
                            تقبل الله منا ومنكم<br />
                            <span className="text-xs">May Allah accept from us and from you</span>
                        </p>
                    </div>
                </div>

                {/* Download Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => window.print()}
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <Download size={20} /> Download as PDF
                    </button>
                </div>
            </div>
            <Footer />
        </main>
    );
}
