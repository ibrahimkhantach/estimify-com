"use client";

import React from 'react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-14 sm:py-20 bg-[#0B1120] border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">About Estimify</h2>
                <div className="w-16 sm:w-20 h-1 bg-[#00B8DB] mx-auto rounded-full opacity-80" />
                <p className="text-gray-300 leading-loose text-base sm:text-lg px-2 sm:px-0">
                    Estimify is revolutionizing construction project evaluation by combining advanced analysis with deep industry expertise. We empower construction professionals, financial institutions, and project developers to make <strong className="text-white">data-driven commercial decisions</strong> with unprecedented confidence and clarity.
                </p>
            </div>
        </section>
    );
};
