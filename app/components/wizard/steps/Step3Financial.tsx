"use client";

import React from 'react';
import { Card } from '@/app/ui/Card';
import { Button } from '@/app/ui/Button';
import { Input } from '@/app/ui/Input';
import { Accordion } from '@/app/ui/Accordion';
import { useI18n } from '@/app/lib/i18n';

interface Step3Props {
    onNext: () => void;
}

export const Step3Financial: React.FC<Step3Props> = ({ onNext }) => {
    const { t } = useI18n();

    return (
        <Card className="p-6 md:p-8 space-y-8 bg-card/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t("wizard.step3.title")}</h2>
                <p className="text-muted-foreground">{t("wizard.step3.subtitle")}</p>
            </div>

            <div className="space-y-6">

                {/* Core Financials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label={t("wizard.step3.estimatedCost")}
                        type="number"
                        placeholder="0.00"
                        defaultValue="450000"
                    />
                    <Input
                        label={t("wizard.step3.targetMargin")}
                        type="number"
                        placeholder="20%"
                        defaultValue="25"
                    />
                </div>

                {/* Advanced Options Accordion */}
                <div className="pt-2">
                    <Accordion.Item title={t("wizard.step3.advancedParams")} defaultOpen={true}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                            <Input
                                label={t("wizard.step3.projectDuration")}
                                type="number"
                                defaultValue="12"
                            />
                            <Input
                                label={t("wizard.step3.retention")}
                                type="number"
                                defaultValue="10"
                            />
                            <Input
                                label={t("wizard.step3.dealContext")}
                                placeholder={t("wizard.step3.dealContextPlaceholder")}
                                className="md:col-span-2"
                            />
                            <Input
                                label={t("wizard.step3.forcedPrice")}
                                type="number"
                                placeholder={t("wizard.step3.forcedPricePlaceholder")}
                                className="md:col-span-2"
                            />
                        </div>
                    </Accordion.Item>
                </div>

            </div>

            <div className="flex justify-end pt-4">
                <Button onClick={onNext} size="lg" className="px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 bg-emerald-600 hover:bg-emerald-500 text-white border-transparent">
                    {t("wizard.step3.generateAnalysis")}
                    <svg className="w-4 h-4 ms-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Button>
            </div>
        </Card>
    );
};
