"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/ui/Button';

export const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center text-center overflow-hidden bg-[#0B1120]">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-40">
                <Image
                    src="/background-image-desktop.png"
                    alt="Construction Planning"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-4xl space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    Make Commercial <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Decisions with Confidence
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Estimify leverages advanced analysis to identify and evaluate construction project risks across design, operations, and logistics covering both operational and on-site work risks to support informed commercial decisions with clarity, accuracy, and confidence.
                </p>

                <div className="pt-4">
                    <Link href="/wizard">
                        <Button className="bg-[#00B8DB] hover:bg-[#00B8DB]/90 text-white px-8 py-6 text-lg shadow-[0_0_20px_rgba(0,184,219,0.3)] border-none rounded-md">
                            Start Free Assessment →
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
