"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/app/ui/Button';
import { useI18n } from '@/app/lib/i18n';

const PricingCard = ({ title, price, features, recommended = false, ctaText }: any) => (
    <div className={`relative flex flex-col p-6 sm:p-8 rounded-2xl border transition-all duration-300 h-full
        ${recommended
            ? 'bg-[#131B2C] border-[#00B8DB] shadow-2xl shadow-[#00B8DB]/10 md:scale-105 z-10'
            : 'bg-[#0F1623] border-white/5 hover:border-white/10'}`}>

        {recommended && (
            <div className="absolute -top-4 right-8 bg-[#00B8DB] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {ctaText}
            </div>
        )}

        <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
            {price ? (
                <div className="flex items-baseline gap-1 animate-in slide-in-from-bottom-2 fade-in duration-500">
                    <span className="text-2xl sm:text-3xl font-bold text-white">{price}</span>
                </div>
            ) : (
                <span className="text-gray-400">Perfect for initial evaluation</span>
            )}
        </div>

        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
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
                {ctaText}
            </Button>
        </Link>
    </div>
);

export const Pricing: React.FC = () => {
    const { t } = useI18n();

    return (
        <section id="pricing" className="py-16 sm:py-24 bg-[#0B1120] relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-10 sm:mb-16">{t("pricing.title")}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-4xl mx-auto">
                    <PricingCard
                        title={t("pricing.freePreview.title")}
                        features={[
                            t("pricing.freePreview.features.0"),
                            t("pricing.freePreview.features.1"),
                            t("pricing.freePreview.features.2")
                        ]}
                        ctaText={t("pricing.freePreview.cta")}
                    />
                    <PricingCard
                        title={t("pricing.fullReport.title")}
                        price={t("pricing.fullReport.price")}
                        recommended={true}
                        features={[
                            t("pricing.fullReport.features.0"),
                            t("pricing.fullReport.features.1"),
                            t("pricing.fullReport.features.2"),
                            t("pricing.fullReport.features.3")
                        ]}
                        ctaText={t("pricing.fullReport.cta")}
                    />
                </div>
            </div>
        </section>
    );
};
