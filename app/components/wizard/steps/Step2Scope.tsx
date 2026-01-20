"use client";

import React, { useState } from 'react';
import { Card } from '@/app/ui/Card';
import { Button } from '@/app/ui/Button';
import { Select } from '@/app/ui/Select';
import { Badge } from '@/app/ui/Badge';

interface Step2Props {
    onNext: () => void;
}

export const Step2Scope: React.FC<Step2Props> = ({ onNext }) => {
    const [description, setDescription] = useState('');

    const suggestions = [
        "Includes full architectural design",
        "Requires LEED certification",
        "High-security clearance required",
        "Includes 3-year maintenance contract",
        "Multi-phase rollout strategy"
    ];

    const addSuggestion = (text: string) => {
        setDescription(prev => prev ? `${prev}\n- ${text}` : `- ${text}`);
    };

    return (
        <Card className="p-6 md:p-8 space-y-8 bg-card/80 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Scope & Intelligence</h2>
                <p className="text-muted-foreground">Define the project scope and leverage AI for risk detection.</p>
            </div>

            <div className="space-y-6">
                {/* Client Type */}
                <Select
                    label="Client Type"
                    options={[
                        { value: 'GOV', label: 'Government Entity (Public Sector)' },
                        { value: 'SEMI', label: 'Semi-Government / PIF Company' },
                        { value: 'PRIV', label: 'Private Sector Enterprise' },
                    ]}
                    defaultValue="GOV"
                />

                {/* Project Description */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Project Description & Scope</label>
                    <textarea
                        className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Describe the key deliverables, constraints, and objectives..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* AI Suggestions */}
                <div className="space-y-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2">
                        <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">AI Intelligence</Badge>
                        <span className="text-xs text-muted-foreground">Click to add common scope items</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {suggestions.map((sugo, i) => (
                            <button
                                key={i}
                                onClick={() => addSuggestion(sugo)}
                                className="text-xs px-3 py-1.5 rounded-full bg-secondary border border-border hover:border-primary/50 hover:text-primary transition-all text-left"
                            >
                                + {sugo}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-4">
                {/* Helper text or back button could go here */}
                <div />
                <Button onClick={onNext} size="lg" className="px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                    Continue to Financials
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Button>
            </div>
        </Card>
    );
};
