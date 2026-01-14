"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Heart, Star, Send } from "lucide-react";

export default function HajjPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-background/60 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-xl premium-glass rounded-[40px] border-secondary/30 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-emerald-500" />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-12 text-center">
                            <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary mx-auto mb-8 animate-bounce">
                                <Heart size={40} fill="currentColor" />
                            </div>

                            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">Hajj Dreams <span className="text-secondary">2026</span></h3>
                            <p className="text-slate-400 font-body leading-relaxed mb-10">
                                Applications are now open for the next selection round. We are sponsoring 50 dedicated Muslims for their first Hajj journey. Does someone you know deserve this?
                            </p>

                            <div className="space-y-4">
                                <button className="btn-primary w-full py-5 text-sm">
                                    Apply Now <Send size={16} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors py-2"
                                >
                                    Remind me later
                                </button>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-6 opacity-40">
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                                    <Star size={12} className="text-secondary" /> 50 Slots
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                                    <Star size={12} className="text-secondary" /> Fully Funded
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
