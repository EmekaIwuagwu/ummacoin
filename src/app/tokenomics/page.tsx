"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Tokenomics from "@/components/sections/Tokenomics";

export default function TokenomicsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-24">
                <Tokenomics />
            </section>

            <Footer />
        </main>
    );
}
