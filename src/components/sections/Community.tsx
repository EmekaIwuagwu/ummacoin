"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Twitter, MessageCircle, MessageSquare, Quote, Globe, Fingerprint } from "lucide-react";
import CountUp from "react-countup";

const testimonials = [
    {
        name: "Yusuf Al-Badr",
        role: "Strategic Partner",
        content: "We've seen many projects, but $ISLAM is the first to actually combine DeFi yield with genuine social responsibility in a way that respects Shariah law.",
        avatar: "YB"
    },
    {
        name: "Fatima Zahra",
        role: "Hajj Aid Recipient",
        content: "I never thought I would see the Kaaba in my lifetime. Through the Ummah Coin foundation, my dream became a reality. Allahu Akbar.",
        avatar: "FZ"
    },
    {
        name: "Dr. Karim Mansour",
        role: "Early Contributor",
        content: "The transparency of the smart contracts gives me peace of mind. Every transaction is a small contribution to a larger legacy of good.",
        avatar: "KM"
    }
];

export default function Community() {
    return (
        <section id="community" className="section-padding bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left: Stats & Socials */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-6">Proof of Impact</h2>
                            <h3 className="text-4xl md:text-5xl font-heading mb-8">The Circle of <span className="text-gradient-gold">Global Support</span></h3>
                            <p className="text-slate-400 text-lg leading-relaxed opacity-80">
                                We measure our success not just by market capitalization, but by the tangible change we bring to the lives of our brothers and sisters worldwide.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { label: "Pilgrims Sponsored", value: 142, icon: Globe, color: "text-secondary" },
                                { label: "Vested Capital", value: 8.5, suffix: "M+", icon: Fingerprint, color: "text-emerald-500" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-[32px] premium-glass gold-border flex flex-col items-center text-center"
                                >
                                    <div className={`mb-4 ${stat.color}`}>
                                        <stat.icon size={32} />
                                    </div>
                                    <div className="text-4xl font-heading font-bold mb-2">
                                        <CountUp end={stat.value} duration={3} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                                        {stat.suffix}
                                    </div>
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="flex items-center gap-3 px-8 py-3 rounded-xl bg-[#1DA1F2]/5 text-[#1DA1F2] border border-[#1DA1F2]/20 font-bold hover:bg-[#1DA1F2]/10 transition-all text-sm">
                                <Twitter size={18} /> Community Twitter
                            </button>
                            <button className="flex items-center gap-3 px-8 py-3 rounded-xl bg-[#24A1DE]/5 text-[#24A1DE] border border-[#24A1DE]/20 font-bold hover:bg-[#24A1DE]/10 transition-all text-sm">
                                <MessageCircle size={18} /> Global Telegram
                            </button>
                        </div>
                    </div>

                    {/* Right: Testimonials */}
                    <div className="lg:col-span-7 relative">
                        <div className="absolute top-0 right-0 p-8 text-secondary/5 rotate-12 -z-10">
                            <Quote size={300} />
                        </div>

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{ delay: 6000 }}
                            pagination={{ clickable: true }}
                            className="community-swiper"
                        >
                            {testimonials.map((t, i) => (
                                <SwiperSlide key={i}>
                                    <div className="premium-card !items-start !text-left p-12 min-h-[400px] flex flex-col justify-between border-white/10 group">
                                        <div>
                                            <div className="flex gap-1 mb-8">
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <span key={s} className="text-secondary text-lg">★</span>
                                                ))}
                                            </div>
                                            <p className="text-2xl italic text-slate-200 leading-relaxed mb-10 font-body">
                                                "{t.content}"
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl border border-secondary/20 shadow-lg">
                                                {t.avatar}
                                            </div>
                                            <div>
                                                <h4 className="font-heading font-bold text-xl">{t.name}</h4>
                                                <p className="text-xs text-secondary uppercase tracking-widest font-bold mt-1">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .community-swiper .swiper-pagination {
                    bottom: -10px !important;
                }
                .community-swiper .swiper-pagination-bullet {
                    background: rgba(180, 83, 9, 0.2) !important;
                    width: 40px !important;
                    height: 4px !important;
                    border-radius: 2px !important;
                }
                .community-swiper .swiper-pagination-bullet-active {
                    background: #b45309 !important;
                    width: 80px !important;
                }
            `}</style>
        </section>
    );
}
