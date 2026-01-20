"use client";

import React from 'react';
import { useI18n } from '@/app/lib/i18n';

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
    onStepClick: (step: number) => void;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps, onStepClick }) => {
    const { t } = useI18n();

    const steps = [
        { id: 1, name: t("wizard.steps.projectIdentity") },
        { id: 2, name: t("wizard.steps.scopeIntelligence") },
        { id: 3, name: t("wizard.steps.financialStrategy") },
        { id: 4, name: t("wizard.steps.analysisDashboard") }
    ];

    const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

    return (
        <div className="w-full bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 md:p-8">
            <div className="relative px-2 sm:px-4">
                {/* Track Background */}
                <div className="absolute top-3 sm:top-4 md:top-5 left-[10%] right-[10%] h-0.5 bg-secondary rounded-full" />

                {/* Active Progress Track */}
                <div
                    className="absolute top-3 sm:top-4 md:top-5 left-[10%] h-0.5 bg-primary rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${progressPercentage * 0.8}%` }}
                />

                <div className="flex justify-between w-full relative z-10">
                    {steps.map((step) => {
                        const isCompleted = currentStep > step.id;
                        const isCurrent = currentStep === step.id;

                        return (
                            <div key={step.id} className="flex flex-col items-center">
                                <button
                                    onClick={() => {
                                        if (step.id <= currentStep + 1) {
                                            onStepClick(step.id);
                                        }
                                    }}
                                    disabled={step.id > currentStep + 1}
                                    className="focus:outline-none flex flex-col items-center"
                                >
                                    {/* Circle Indicator */}
                                    <div
                                        className={`flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full border-2 transition-all duration-300 bg-[#0B1120]
                                        ${isCompleted
                                                ? 'bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/25'
                                                : isCurrent
                                                    ? 'border-primary text-primary shadow-lg shadow-primary/20 scale-110'
                                                    : 'border-muted text-muted-foreground'
                                            }`}
                                    >
                                        {isCompleted ? (
                                            <svg className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <span className="text-[10px] sm:text-xs md:text-sm font-semibold">{step.id}</span>
                                        )}
                                    </div>

                                    {/* Text Label */}
                                    <span
                                        className={`mt-2 sm:mt-3 w-16 sm:w-24 md:w-28 text-center text-[8px] sm:text-[10px] md:text-xs font-medium transition-colors duration-300 leading-tight
                                        ${isCurrent ? 'text-primary' : isCompleted ? 'text-foreground' : 'text-muted-foreground'}
                                        ${!isCurrent && !isCompleted ? 'hidden sm:block' : ''}`}
                                    >
                                        {step.name}
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
