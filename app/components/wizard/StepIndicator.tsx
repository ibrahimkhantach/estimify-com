import React from 'react';
import { Badge } from '@/app/ui/Badge';

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
    onStepClick: (step: number) => void;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps, onStepClick }) => {
    const steps = [
        { id: 1, name: "Project Identity" },
        { id: 2, name: "Scope & Intelligence" },
        { id: 3, name: "Financial Strategy" },
        { id: 4, name: "Analysis Dashboard" }
    ];

    const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

    return (
        <div className="w-full bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8">
            <div className="relative">
                {/* Track Background */}
                <div className="absolute top-4 left-0 w-full h-0.5 bg-secondary rounded-full -z-10" />

                {/* Active Progress Track */}
                <div
                    className="absolute top-4 left-0 h-0.5 bg-primary rounded-full -z-10 transition-all duration-500 ease-in-out"
                    style={{ width: `${progressPercentage}%` }}
                />

                <div className="flex justify-between w-full">
                    {steps.map((step) => {
                        const isCompleted = currentStep > step.id;
                        const isCurrent = currentStep === step.id;
                        const isFuture = !isCompleted && !isCurrent;

                        return (
                            <div key={step.id} className="flex flex-col items-center relative group">
                                <button
                                    onClick={() => {
                                        if (step.id <= currentStep + 1) { // Allow next step or any previous
                                            onStepClick(step.id);
                                        }
                                    }}
                                    disabled={step.id > currentStep + 1}
                                    className="focus:outline-none flex flex-col items-center gap-3"
                                >
                                    {/* Circle Indicator */}
                                    <div
                                        className={`relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 transition-all duration-300 z-10
                                        ${isCompleted
                                                ? 'bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/25'
                                                : isCurrent
                                                    ? 'bg-background border-primary text-primary shadow-lg shadow-primary/20 scale-110'
                                                    : 'bg-card border-muted text-muted-foreground'
                                            }`}
                                    >
                                        {isCompleted ? (
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <span className="text-xs sm:text-sm font-semibold">{step.id}</span>
                                        )}
                                    </div>

                                    {/* Text Label */}
                                    <span
                                        className={`absolute top-12 sm:top-14 w-32 text-center text-[10px] sm:text-xs font-medium transition-colors duration-300
                                        ${isCurrent ? 'text-primary' : isCompleted ? 'text-foreground' : 'text-muted-foreground hidden sm:block'}
                                        `}
                                    >
                                        {step.name}
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Spacer for labels */}
            <div className="h-8 visible sm:h-10" />
        </div>
    );
};
