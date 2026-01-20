"use client";

import React from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Features } from './Features';
import { Pricing } from './Pricing';

export const LandingPage: React.FC = () => {
    return (
        <main className="min-h-screen bg-[#0B1120]">
            <Hero />
            <About />
            <Features />
            <Pricing />

            {/* Simple Footer */}
            <footer className="py-8 border-t border-white/5 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Estimify. All rights reserved.</p>
            </footer>
        </main>
    );
};
