"use client";

import React from 'react';
import Link from 'next/link';
import { Card } from '@/app/ui/Card';
import { Badge } from '@/app/ui/Badge';
import { Button } from '@/app/ui/Button';
import { useI18n } from '@/app/lib/i18n';

export interface Project {
    id: string;
    name: string;
    businessType: string;
    country: string;
    currency: string;
    status: 'draft' | 'completed' | 'in-progress';
    riskScore?: number;
    createdAt: string;
    updatedAt: string;
}

interface ProjectCardProps {
    project: Project;
    onDelete?: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDelete }) => {
    const { t, locale } = useI18n();

    const statusColors = {
        'draft': 'bg-gray-500/20 text-gray-400',
        'in-progress': 'bg-yellow-500/20 text-yellow-400',
        'completed': 'bg-green-500/20 text-green-400',
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'draft': return t("projects.draft");
            case 'in-progress': return t("projects.inProgress");
            case 'completed': return t("projects.completed");
            default: return status;
        }
    };

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <Card className="p-5 sm:p-6 bg-card/80 backdrop-blur-xl border border-white/10 hover:border-[#00B8DB]/30 transition-all duration-300 group">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-[#00B8DB] transition-colors">
                                {project.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{project.businessType}</p>
                        </div>
                        <Badge className={`${statusColors[project.status]} text-xs`}>
                            {getStatusLabel(project.status)}
                        </Badge>
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{project.country}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{project.currency}</span>
                        </div>
                        {project.riskScore !== undefined && (
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <span>Risk: <span className={project.riskScore > 70 ? 'text-red-400' : project.riskScore > 40 ? 'text-yellow-400' : 'text-green-400'}>{project.riskScore}%</span></span>
                            </div>
                        )}
                    </div>

                    {/* Date */}
                    <p className="text-xs text-gray-500">
                        {t("projects.updated")} {formatDate(project.updatedAt)}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col gap-2 sm:gap-2 shrink-0">
                    <Link href={`/wizard?project=${project.id}`} className="flex-1 sm:flex-none">
                        <Button size="sm" variant="primary" className="w-full bg-[#00B8DB] hover:bg-[#00B8DB]/90 text-white">
                            {project.status === 'completed' ? t("projects.view") : t("projects.continue")}
                        </Button>
                    </Link>
                    {onDelete && (
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => onDelete(project.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
};
