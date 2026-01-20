"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/ui/Button';

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-8 w-32">
                        <Image
                            src="/full-logo.png"
                            alt="Estimify Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        How Estimify Works
                    </Link>
                    <Link href="/#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Pricing
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="/wizard">
                        <Button variant="primary" size="sm" className="bg-[#00B8DB] hover:bg-[#00B8DB]/90 text-white font-semibold">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};
