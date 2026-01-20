import React from 'react';

interface DashboardCardProps {
    title: string;
    className?: string;
    children: React.ReactNode;
    headerAction?: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, className = '', children, headerAction }) => {
    return (
        <div className={`bg-card/50 backdrop-blur-md rounded-xl border border-border overflow-hidden flex flex-col ${className}`}>
            <div className="px-4 py-3 border-b border-border/50 bg-secondary/30 flex justify-between items-center">
                <h3 className="font-semibold text-sm tracking-wide text-foreground/90 uppercase">{title}</h3>
                {headerAction}
            </div>
            <div className="p-4 flex-1">
                {children}
            </div>
        </div>
    );
};
