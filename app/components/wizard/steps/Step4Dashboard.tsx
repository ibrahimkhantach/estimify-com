"use client";

import React from 'react';
import { DashboardCard } from '@/app/ui/DashboardCard';
import { Badge } from '@/app/ui/Badge';
import { Button } from '@/app/ui/Button';

export const Step4Dashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white">Analysis Report</h2>
                    <p className="text-sm text-muted-foreground">AI-Generated Risk & Opportunity Assessment</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Export Report
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                {/* 4. AI Risk Assessment (Top Left - High Impact) */}
                <DashboardCard title="AI Risk Assessment" className="md:col-span-6 lg:col-span-4 border-l-4 border-l-amber-500">
                    <div className="flex flex-col items-center justify-center h-full gap-2">
                        <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-4 border-amber-500/20">
                            <span className="text-3xl font-bold text-amber-500">65%</span>
                            <div className="absolute inset-0 border-4 border-amber-500 rounded-full border-t-transparent animate-spin-slow" style={{ animationDuration: '3s' }} />
                        </div>
                        <Badge variant="outline" className="text-amber-500 border-amber-500/50 bg-amber-500/10 mt-2">Moderate Risk</Badge>
                        <p className="text-xs text-center text-muted-foreground mt-2">
                            Project has potential volatility due to undefined scope elements.
                        </p>
                    </div>
                </DashboardCard>

                {/* 1. Attention Required (Top Middle - Critical) */}
                <DashboardCard title="Attention Required" className="md:col-span-6 lg:col-span-5 border-l-4 border-l-red-500">
                    <ul className="space-y-3">
                        <li className="flex gap-3 items-start p-2 rounded-md bg-red-500/10 border border-red-500/10">
                            <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div>
                                <p className="text-sm font-medium text-red-400">Undefined Payment Terms</p>
                                <p className="text-xs text-muted-foreground">Defaulting to standard 60-day terms may impact cash flow.</p>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start p-2 rounded-md bg-red-500/10 border border-red-500/10">
                            <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div>
                                <p className="text-sm font-medium text-red-400">Aggressive Timeline</p>
                                <p className="text-xs text-muted-foreground">12 months is tight for the proposed scope.</p>
                            </div>
                        </li>
                    </ul>
                </DashboardCard>

                {/* 3. Cost Reasonableness (Top Right) */}
                <DashboardCard title="Cost Reasonableness" className="md:col-span-12 lg:col-span-3">
                    <div className="flex flex-col justify-between h-full gap-4">
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs font-medium">
                                <span>Estimated</span>
                                <span>450k SAR</span>
                            </div>
                            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                <div className="h-full w-[80%] bg-emerald-500" />
                            </div>
                            <p className="text-[10px] text-emerald-500 text-right">OPTIMAL</p>
                        </div>

                        <div className="space-y-1">
                            <div className="flex justify-between text-xs font-medium">
                                <span>Market Avg</span>
                                <span>420k - 480k</span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Your estimation aligns with current Riyadh market rates for similar government contracts.
                            </div>
                        </div>
                    </div>
                </DashboardCard>

                {/* 2. Hidden Scope Detection (Middle Full Width) */}
                <DashboardCard title="Hidden Scope Detection" className="md:col-span-12 lg:col-span-12 border-l-4 border-l-blue-500">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            "Foundation design and execution requirements",
                            "Crane rental for heavy equipment installation",
                            "Third-party inspection & certification fees"
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-3 items-center p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-foreground/90">{item}</span>
                            </div>
                        ))}
                    </div>
                </DashboardCard>

                {/* 6. Commercial Conclusion (Bottom Left) */}
                <DashboardCard title="Commercial Conclusion" className="md:col-span-6 lg:col-span-6">
                    <div className="space-y-3">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            The project is commercially viable but carries moderate execution risk. The recommended pricing structure allows for a healthy <strong className="text-emerald-500">25% margin</strong>, provided scope creep is managed aggressively via the contract terms.
                        </p>
                        <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="border-emerald-500/30 text-emerald-500">Profitable</Badge>
                            <Badge variant="outline" className="border-amber-500/30 text-amber-500">Operationally Complex</Badge>
                        </div>
                    </div>
                </DashboardCard>

                {/* 5. Recommended Actions (Bottom Right) */}
                <DashboardCard title="Recommended Actions" className="md:col-span-6 lg:col-span-6">
                    <ul className="space-y-2">
                        {[
                            "Include strict change order clause in contract",
                            "Verify site access availability before mobilization",
                            "Secure back-to-back warranty from suppliers"
                        ].map((action, i) => (
                            <li key={i} className="flex gap-2 items-center text-sm text-foreground/80">
                                <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {action}
                            </li>
                        ))}
                    </ul>
                </DashboardCard>

                {/* 7. Risk Legend (Footer) */}
                <div className="md:col-span-12 flex items-center gap-4 text-xs text-muted-foreground bg-black/20 p-2 rounded-lg border border-white/5">
                    <span className="font-semibold uppercase tracking-wider">Risk Severity Legend:</span>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500" /> Critical</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-500" /> Major</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> Moderate</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Low</div>
                </div>

            </div>

            {/* 9. Key Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                <Button variant="secondary" fullWidth>Save Project</Button>
                <Button variant="outline" fullWidth>Generate Contract</Button>
                <Button variant="primary" fullWidth className="shadow-lg shadow-primary/25">Generate Proposal</Button>
            </div>

        </div>
    );
};
