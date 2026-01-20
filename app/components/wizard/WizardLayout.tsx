import React from 'react';

interface WizardLayoutProps {
    children: React.ReactNode;
}

export const WizardLayout: React.FC<WizardLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-background text-foreground flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle gradient blob for atmosphere */}
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
            </div>

            <main className="relative z-10 w-full max-w-6xl flex flex-col gap-8">
                <header className="text-center space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                        Smart Assessment Wizard
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Professional project estimation & risk analysis intelligence.
                    </p>
                </header>

                {children}
            </main>
        </div>
    );
};
