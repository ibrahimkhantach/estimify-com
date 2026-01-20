"use client";

import React from 'react';
import { Card } from '@/app/ui/Card';
import { Button } from '@/app/ui/Button';
import { useI18n } from '@/app/lib/i18n';

interface Step0Props {
    onSelect: (role: 'seller' | 'buyer') => void;
}

export const Step0RoleSelection: React.FC<Step0Props> = ({ onSelect }) => {
    const { t } = useI18n();

    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-full max-w-2xl mx-auto text-center space-y-8">
                <div className="space-y-3">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        {t("wizard.roleSelection.title")}
                    </h1>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
                        {t("wizard.roleSelection.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4">
                    {/* Seller Card */}
                    <Card
                        onClick={() => onSelect('seller')}
                        className="p-6 sm:p-8 cursor-pointer group hover:border-[#00B8DB]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00B8DB]/10"
                    >
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B8DB]/20 to-[#00B8DB]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-[#00B8DB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">{t("wizard.roleSelection.seller.title")}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {t("wizard.roleSelection.seller.description")}
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="mt-2 group-hover:bg-[#00B8DB] group-hover:text-white group-hover:border-[#00B8DB] transition-all"
                            >
                                {t("wizard.roleSelection.seller.cta")}
                            </Button>
                        </div>
                    </Card>

                    {/* Buyer Card */}
                    <Card
                        onClick={() => onSelect('buyer')}
                        className="p-6 sm:p-8 cursor-pointer group hover:border-[#00B8DB]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00B8DB]/10"
                    >
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B8DB]/20 to-[#00B8DB]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-[#00B8DB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">{t("wizard.roleSelection.buyer.title")}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {t("wizard.roleSelection.buyer.description")}
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="mt-2 group-hover:bg-[#00B8DB] group-hover:text-white group-hover:border-[#00B8DB] transition-all"
                            >
                                {t("wizard.roleSelection.buyer.cta")}
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
