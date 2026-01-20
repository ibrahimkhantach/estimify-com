"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/app/ui/Button';

const PricingCard = ({ title, price, features, recommended = false, onClick }: any) => (
    <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full
        ${recommended
            ? 'bg-[#131B2C] border-[#00B8DB] shadow-2xl shadow-[#00B8DB]/10 scale-105 z-10'
            : 'bg-[#0F1623] border-white/5 hover:border-white/10'}`}>

        {recommended && (
            <div className="absolute -top-4 right-8 bg-[#00B8DB] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recommended
            </div>
        )}

        <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            {price ? (
                <div className="flex items-baseline gap-1 animate-in slide-in-from-bottom-2 fade-in duration-500">
                    <span className="text-3xl font-bold text-white">{price}</span>
                </div>
            ) : (
                <span className="text-gray-400">Perfect for initial evaluation</span>
            )}
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature: string, i: number) => (
                <li key={i} className="flex gap-3 items-start text-sm text-gray-300">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-[#00B8DB] flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    {feature}
                </li>
            ))}
        </ul>

        <Link href="/wizard" className="mt-auto">
            <Button
                fullWidth
                variant={recommended ? 'primary' : 'outline'}
                className={recommended ? 'bg-[#00B8DB] hover:bg-[#00B8DB]/90 text-white' : 'text-white border-white/20 hover:bg-white/5'}
            >
                {recommended ? 'Start Full Assessment' : 'Get Started'}
            </Button>
        </Link>
    </div>
);

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 bg-[#0B1120] relative">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Transparent Pricing</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    <PricingCard
                        title="Free Preview"
                        features={[
                            "1 Basic risk assessment",
                            "Limited project data",
                            "5 page summary report"
                        ]}
                    />
                    <PricingCard
                        title="Full Report"
                        price="14.99$"
                        recommended={true}
                        features={[
                            "Unlimited Complete risk assessment",
                            "Unlimited project data",
                            "20+ page detailed report",
                            "PDF export & analytics"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};
