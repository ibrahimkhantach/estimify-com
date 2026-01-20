"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { WizardLayout } from './WizardLayout';
import { StepIndicator } from './StepIndicator';
import { Step0RoleSelection } from './steps/Step0RoleSelection';
import { Step1Identity } from './steps/Step1Identity';
import { Step2Scope } from './steps/Step2Scope';
import { Step3Financial } from './steps/Step3Financial';
import { Step4Dashboard } from './steps/Step4Dashboard';

const WizardContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentStep, setCurrentStep] = useState(0);
    const [userRole, setUserRole] = useState<'seller' | 'buyer' | null>(null);

    useEffect(() => {
        const stepParam = searchParams.get('step');
        if (stepParam) {
            const step = parseInt(stepParam, 10);
            if (step >= 0 && step <= 4) {
                setCurrentStep(step);
            }
        } else {
            // Default to step 0 (role selection) if no param
            router.replace('/wizard?step=0', { scroll: false });
        }
    }, [searchParams, router]);

    const handleStepChange = (step: number) => {
        setCurrentStep(step);
        router.push(`/wizard?step=${step}`, { scroll: false });
    };

    const handleRoleSelect = (role: 'seller' | 'buyer') => {
        setUserRole(role);
        handleStepChange(1);
    };

    const nextStep = () => {
        if (currentStep < 4) {
            handleStepChange(currentStep + 1);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <Step0RoleSelection onSelect={handleRoleSelect} />;
            case 1:
                return <Step1Identity onNext={nextStep} />;
            case 2:
                return <Step2Scope onNext={nextStep} />;
            case 3:
                return <Step3Financial onNext={nextStep} />;
            case 4:
                return <Step4Dashboard />;
            default:
                return <Step0RoleSelection onSelect={handleRoleSelect} />;
        }
    };

    // For step 0, show a simpler layout without the step indicator
    if (currentStep === 0) {
        return (
            <WizardLayout>
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {renderStep()}
                </div>
            </WizardLayout>
        );
    }

    return (
        <WizardLayout>
            <StepIndicator
                currentStep={currentStep}
                totalSteps={4}
                onStepClick={(step) => {
                    if (step >= 1) handleStepChange(step);
                }}
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
