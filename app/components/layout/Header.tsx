"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/ui/Button';
import { useI18n } from '@/app/lib/i18n';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, locale, setLocale, dir } = useI18n();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: "/projects", label: t("header.myProjects") },
        { href: "/#how-it-works", label: t("header.howItWorks") },
        { href: "/#about", label: t("header.about") },
        { href: "/#pricing", label: t("header.pricing") },
        { href: "/contact", label: t("header.contact") },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                        <Image
                            src="/full-logo.png"
                            alt="Estimify Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-white">
                        Estimify<span className="text-[#00B8DB]">.co</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Language Switcher */}
                    <button
                        onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
                        className="px-3 py-1.5 text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors"
                    >
                        {locale === 'en' ? 'عربي' : 'EN'}
                    </button>

                    <Link href="/wizard" className="hidden sm:block">
                        <Button variant="primary" size="sm" className="bg-[#00B8DB] hover:bg-[#00B8DB]/90 text-white font-semibold">
                            {t("header.getStarted")}
                        </Button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0B1120]/95 backdrop-blur-lg border-b border-white/10 animate-in slide-in-from-top-2 duration-200">
                    <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-base font-medium text-gray-300 hover:text-white py-2 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-white/10 space-y-3">
                            <button
                                onClick={() => {
                                    setLocale(locale === 'en' ? 'ar' : 'en');
                                    closeMenu();
                                }}
                                className="w-full px-4 py-2 text-sm font-medium text-white/80 bg-white/5 hover:bg-white/10 rounded-md transition-colors"
                            >
                                {locale === 'en' ? 'العربية' : 'English'}
                            </button>
                            <Link href="/wizard" onClick={closeMenu}>
                                <Button fullWidth variant="primary" className="bg-[#00B8DB] hover:bg-[#00B8DB]/90 text-white font-semibold">
                                    {t("header.getStarted")}
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
