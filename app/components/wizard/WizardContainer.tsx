"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { WizardLayout } from './WizardLayout';
import { StepIndicator } from './StepIndicator';
import { Step1Identity } from './steps/Step1Identity';
import { Step2Scope } from './steps/Step2Scope';
import { Step3Financial } from './steps/Step3Financial';
import { Step4Dashboard } from './steps/Step4Dashboard';

const WizardContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        const stepParam = searchParams.get('step');
        if (stepParam) {
            const step = parseInt(stepParam, 10);
            if (step >= 1 && step <= 4) {
                setCurrentStep(step);
            }
        } else {
            // Default to step 1 if no param
            router.replace('/wizard?step=1', { scroll: false });
        }
    }, [searchParams, router]);

    const handleStepChange = (step: number) => {
        setCurrentStep(step);
        router.push(`/wizard?step=${step}`, { scroll: false });
    };

    const nextStep = () => {
        if (currentStep < 4) {
            handleStepChange(currentStep + 1);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1Identity onNext={nextStep} />;
            case 2:
                return <Step2Scope onNext={nextStep} />;
            case 3:
                return <Step3Financial onNext={nextStep} />;
            case 4:
                return <Step4Dashboard />;
            default:
                return <Step1Identity onNext={nextStep} />;
        }
    };

    return (
        <WizardLayout>
            <StepIndicator
                currentStep={currentStep}
                totalSteps={4}
                onStepClick={handleStepChange}
            />
            <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {renderStep()}
            </div>
        </WizardLayout>
    );
};

export const WizardContainer = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary">Loading Wizard...</div>}>
            <WizardContent />
        </Suspense>
    );
};
