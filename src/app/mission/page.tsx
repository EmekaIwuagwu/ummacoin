"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Shield, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MissionPage() {
    const missions = [
        {
            icon: Heart,
            title: "Spiritual Empowerment",
            description: "Enable Muslims worldwide to fulfill their religious obligations through blockchain technology, making Zakat, Sadaqah, and charitable giving more transparent and accessible."
        },
        {
            icon: Globe,
            title: "Economic Unity",
            description: "Build a decentralized financial ecosystem that connects the global Ummah, fostering economic cooperation and reducing dependency on traditional banking systems."
        },
        {
            icon: Shield,
            title: "Shariah Compliance",
            description: "Ensure all operations align with Islamic principles, providing a halal alternative for digital transactions and investments in the cryptocurrency space."
        },
        {
            icon: Sparkles,
            title: "Social Impact",
            description: "Direct a portion of every transaction towards charitable initiatives, supporting Hajj funding, education, healthcare, and community development projects."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 islamic-pattern opacity-[0.03]" />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto mb-24"
                    >
                        <h1 className="text-5xl md:text-7xl font-heading mb-8 leading-tight">
                            Our <span className="text-gradient-gold">Mission</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-body leading-relaxed">
                            To revolutionize the global Muslim economy through blockchain technology, creating a transparent,
                            Shariah-compliant ecosystem that empowers the Ummah to achieve spiritual and economic prosperity.
                        </p>
                    </motion.div>

                    {/* Mission Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        {missions.map((mission, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="premium-glass p-10 rounded-[40px] border-white/10 hover:border-secondary/30 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <mission.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4">{mission.title}</h3>
                                <p className="text-slate-400 font-body leading-relaxed">{mission.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Vision Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto premium-glass p-12 rounded-[40px] border-secondary/20 text-center"
                    >
                        <h2 className="text-3xl font-heading font-bold mb-6">Our Vision</h2>
                        <p className="text-lg text-slate-400 font-body leading-relaxed mb-8">
                            We envision a world where every Muslim has access to a transparent, secure, and Shariah-compliant
                            financial system. Through Ummah Coin, we're building bridges between technology and faith, creating
                            opportunities for economic growth while maintaining our core Islamic values.
                        </p>
                        <div className="text-secondary font-heading text-2xl">
                            "And cooperate in righteousness and piety" - Quran 5:2
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
