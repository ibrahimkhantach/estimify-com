"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ProjectCard, Project } from './ProjectCard';
import { Button } from '@/app/ui/Button';
import { useI18n } from '@/app/lib/i18n';

// Mock data for demonstration
const mockProjects: Project[] = [
    {
        id: '1',
        name: 'Al Riyadh Commercial Complex',
        businessType: 'Commercial Construction',
        country: 'Saudi Arabia',
        currency: 'SAR',
        status: 'completed',
        riskScore: 35,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-18T14:30:00Z',
    },
    {
        id: '2',
        name: 'Dubai Marina Residential Tower',
        businessType: 'Residential Development',
        country: 'UAE',
        currency: 'AED',
        status: 'in-progress',
        riskScore: 58,
        createdAt: '2024-01-10T09:00:00Z',
        updatedAt: '2024-01-19T11:00:00Z',
    },
    {
        id: '3',
        name: 'Jeddah Industrial Facility',
        businessType: 'Industrial Construction',
        country: 'Saudi Arabia',
        currency: 'SAR',
        status: 'draft',
        createdAt: '2024-01-20T08:00:00Z',
        updatedAt: '2024-01-20T08:00:00Z',
    },
];

export const ProjectsLibrary: React.FC = () => {
    const { t } = useI18n();
    const [projects, setProjects] = useState<Project[]>(mockProjects);
    const [filter, setFilter] = useState<'all' | 'draft' | 'in-progress' | 'completed'>('all');

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this project?')) {
            setProjects(projects.filter(p => p.id !== id));
        }
    };

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.status === filter);

    const getFilterLabel = (status: string) => {
        switch (status) {
            case 'all': return t("projects.allProjects");
            case 'draft': return t("projects.draft");
            case 'in-progress': return t("projects.inProgress");
            case 'completed': return t("projects.completed");
            default: return status;
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1120] py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-white">{t("projects.title")}</h1>
                        <p className="text-muted-foreground mt-1">{t("projects.subtitle")}</p>
                    </div>
                    <Link href="/wizard">
                        <Button className="bg-[#00B8DB] hover:bg-[#00B8DB]/90 text-white">
                            <svg className="w-4 h-4 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            {t("projects.newAssessment")}
                        </Button>
                    </Link>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {(['all', 'draft', 'in-progress', 'completed'] as const).map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
                                ${filter === status
                                    ? 'bg-[#00B8DB] text-white'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                        >
                            {getFilterLabel(status)}
                            {status !== 'all' && (
                                <span className="ms-2 text-xs opacity-70">
                                    ({projects.filter(p => p.status === status).length})
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-card/30 rounded-xl border border-white/5">
                        <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-lg font-medium text-white mb-2">{t("projects.noProjects")}</h3>
                        <p className="text-muted-foreground mb-6">
                            {t("projects.noProjectsDescription")}
                        </p>
                        <Link href="/wizard">
                            <Button className="bg-[#00B8DB] hover:bg-[#00B8DB]/90 text-white">
                                {t("projects.startFirst")}
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
