import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    selected?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick, selected }) => {
    const selectedStyles = selected
        ? "border-primary ring-1 ring-primary bg-primary/5"
        : "border-border bg-card text-card-foreground hover:bg-secondary/50";

    return (
        <div
            className={`rounded-xl border shadow-sm transition-all duration-200 ${selectedStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
