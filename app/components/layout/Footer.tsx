"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { href: "/#how-it-works", label: "How It Works" },
        { href: "/#about", label: "About" },
        { href: "/#pricing", label: "Pricing" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <footer className="bg-[#0A0F1A] border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <div className="relative h-8 w-32">
                                <Image
                                    src="/full-logo.png"
                                    alt="Estimify Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Empowering construction professionals to make data-driven commercial decisions with confidence.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-gray-400 hover:text-[#00B8DB] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact / CTA Section */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Get Started</h4>
                        <p className="text-sm text-gray-400">
                            Ready to transform your project estimation?
                        </p>
                        <Link
                            href="/wizard"
                            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#00B8DB] hover:bg-[#00B8DB]/90 text-white text-sm font-medium rounded-md transition-colors"
                        >
                            Start Free Assessment
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {currentYear} Estimify. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
