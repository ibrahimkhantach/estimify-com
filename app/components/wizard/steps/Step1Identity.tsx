"use client";

import React, { useState } from 'react';
import { Card } from '@/app/ui/Card';
import { Input } from '@/app/ui/Input';
import { Select } from '@/app/ui/Select';
import { Button } from '@/app/ui/Button';
import { Badge } from '@/app/ui/Badge';

interface Step1Props {
    onNext: () => void;
}

export const Step1Identity: React.FC<Step1Props> = ({ onNext }) => {
    const [analysisType, setAnalysisType] = useState<'full' | 'risk'>('full');
    const [distance, setDistance] = useState<'remote' | 'onsite'>('remote');

    return (
        <Card className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-card/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">Project Identity</h2>
                <p className="text-sm sm:text-base text-muted-foreground">Define the core parameters of your estimation context.</p>
            </div>

            <div className="space-y-6">
                {/* Analysis Type */}
                <div className="space-y-3">
                    <label className="text-sm font-medium text-muted-foreground">Analysis Type</label>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Card
                            selected={analysisType === 'full'}
                            onClick={() => setAnalysisType('full')}
                            className="flex-1 p-3 sm:p-4 flex items-center justify-center gap-2 hover:bg-secondary/40 transition-all"
                        >
                            <span className="font-medium text-sm sm:text-base">Full Analysis</span>
                            {analysisType === 'full' && <Badge variant="default" className="ml-2">Recommended</Badge>}
                        </Card>
                        <Card
                            selected={analysisType === 'risk'}
                            onClick={() => setAnalysisType('risk')}
                            className="flex-1 p-3 sm:p-4 flex items-center justify-center gap-2 hover:bg-secondary/40 transition-all"
                        >
                            <span className="font-medium text-sm sm:text-base">Risk Assessment</span>
                        </Card>
                    </div>
                </div>

                {/* Business Type */}
                <Input
                    label="Business Type"
                    placeholder="e.g. Design Agency, Construction Firm..."
                    defaultValue="Agency"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Country */}
                    <Select
                        label="Target Country"
                        options={[
                            { value: 'SA', label: 'Saudi Arabia' },
                            { value: 'AE', label: 'United Arab Emirates' },
                            { value: 'US', label: 'United States' },
                        ]}
                        defaultValue="SA"
                    />

                    {/* Currency */}
                    <Select
                        label="Currency"
                        options={[
                            { value: 'SAR', label: 'SAR - Saudi Riyal' },
                            { value: 'AED', label: 'AED - UAE Dirham' },
                            { value: 'USD', label: 'USD - US Dollar' },
                        ]}
                        defaultValue="SAR"
                    />
                </div>

                {/* Project Distance */}
                <div className="space-y-3">
                    <label className="text-sm font-medium text-muted-foreground">Project Distance</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card
                            selected={distance === 'remote'}
                            onClick={() => setDistance('remote')}
                            className="p-4 flex flex-col items-center text-center gap-2 group transition-all"
                        >
                            <div className={`p-3 rounded-full ${distance === 'remote' ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium">Remote Delivery</div>
                                <div className="text-xs text-muted-foreground">Off-site execution</div>
                            </div>
                        </Card>

                        <Card
                            selected={distance === 'onsite'}
                            onClick={() => setDistance('onsite')}
                            className="p-4 flex flex-col items-center text-center gap-2 group transition-all"
                        >
                            <div className={`p-3 rounded-full ${distance === 'onsite' ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium">On-site Delivery</div>
                                <div className="text-xs text-muted-foreground">Requires physical presence</div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <Button onClick={onNext} size="lg" className="px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                    Continue to Scope
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Button>
            </div>
        </Card>
    );
};
