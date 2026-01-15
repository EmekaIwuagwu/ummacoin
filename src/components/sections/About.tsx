"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { BookOpen, Users, Compass, Scroll } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: BookOpen,
        title: "Eternal Waqf",
        desc: "Automated contributions to a global endowment fund that grows with every transaction."
    },
    {
        icon: Users,
        title: "Community First",
        desc: "Governance models that empower holders to vote on key charitable initiatives."
    },
    {
        icon: Compass,
        title: "Pilgrimage Support",
        desc: "Dedicated programs to assist those in financial need to fulfill their Hajj obligations."
    },
    {
        icon: Scroll,
        title: "Shariah Compliant",
        desc: "Built from the ground up to align with Islamic financial principles and justice."
    }
];

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="mission" className="section-padding bg-[rgba(6,78,59,0.02)] islamic-pattern">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-6">Our Foundation</h2>
                        <h3 className="text-4xl md:text-5xl font-heading mb-8 leading-tight">
                            A Digital Legacy Built on <br />
                            <span className="text-gradient-emerald">Timeless Values</span>
                        </h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 opacity-90">
                            The Ummah Coin project represents the intersection of ancient tradition and modern innovation. We believe that technology, when guided by faith, can solve the most pressing challenges of our global community.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4 border-l-2 border-secondary/30 pl-6 h-12">
                                <span className="text-3xl font-heading text-secondary">$3M+</span>
                                <span className="text-xs uppercase font-bold tracking-widest text-slate-500">Charitable Pledges</span>
                            </div>
                            <div className="flex items-center gap-4 border-l-2 border-secondary/30 pl-6 h-12">
                                <span className="text-3xl font-heading text-secondary">50k+</span>
                                <span className="text-xs uppercase font-bold tracking-widest text-slate-500">Global Contributors</span>
                            </div>
                        </div>

                        <Link href="/security">
                            <button className="btn-outline">Learn More About Shariah Logic</button>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="premium-card !items-start !text-left hover:border-secondary/20 group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="text-xl font-heading font-bold mb-3">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
