"use client";

import React from 'react';
import { useI18n } from '@/app/lib/i18n';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="group relative p-6 sm:p-8 rounded-2xl bg-[#131B2C] border border-white/5 hover:border-[#00B8DB]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00B8DB]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#00B8DB] shadow-lg shadow-[#00B8DB]/20 text-white mb-1 sm:mb-2">
                {icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
    </div>
);

export const Features: React.FC = () => {
    const { t } = useI18n();

    return (
        <section id="how-it-works" className="py-16 sm:py-24 bg-[#0B1120]">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t("features.title")}</h2>
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
                        {t("features.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <FeatureCard
                        title={t("features.inputData.title")}
                        description={t("features.inputData.description")}
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    />
                    <FeatureCard
                        title={t("features.analysis.title")}
                        description={t("features.analysis.description")}
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                    />
                    <FeatureCard
                        title={t("features.decisionReport.title")}
                        description={t("features.decisionReport.description")}
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                    />
                    <FeatureCard
                        title={t("features.professionalDocs.title")}
                        description={t("features.professionalDocs.description")}
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>}
                    />
                </div>
            </div>
        </section>
    );
};
