"use client";

import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-border">
            <button
                className="flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:text-primary"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <svg
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${isOpen ? 'pb-4 pt-0' : 'h-0'}`}
            >
                <div className="pt-0">{children}</div>
            </div>
        </div>
    );
};

export const Accordion = {
    Item: AccordionItem,
};
