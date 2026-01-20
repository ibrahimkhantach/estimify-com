"use client";

import React from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Features } from './Features';
import { Pricing } from './Pricing';
import { Footer } from '../layout/Footer';

export const LandingPage: React.FC = () => {
    return (
        <main className="min-h-screen bg-[#0B1120]">
            <Hero />
            <About />
            <Features />
            <Pricing />
            <Footer />
        </main>
    );
};
