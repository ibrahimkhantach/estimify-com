"use client";

import React from 'react';
import { Button } from '@/app/ui/Button';
import { Card } from '@/app/ui/Card';
import { useI18n } from '@/app/lib/i18n';

const ContactInfoItem = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => (
    <div className="flex gap-4 items-start">
        <div className="w-10 h-10 rounded-lg bg-[#00B8DB] flex items-center justify-center shrink-0 text-white">
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-gray-400 mb-1">{title}</p>
            <p className="text-white font-medium">{content}</p>
        </div>
    </div>
);

export default function ContactPage() {
    const { t } = useI18n();

    return (
        <main className="min-h-screen bg-[#0B1120] pt-20 pb-20">
            {/* Header Section */}
            <div className="text-center space-y-4 mb-16 container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">{t("contact.title")}</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    {t("contact.subtitle")}
                </p>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Form Section (Left - Wider) */}
                    <div className="lg:col-span-2">
                        <Card className="bg-[#131B2C] border-white/5 p-8 h-full">
                            <h2 className="text-2xl font-bold text-white mb-8">{t("contact.formTitle")}</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t("contact.fullName")}</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-[#0F1623] border border-white/10 text-white focus:outline-none focus:border-[#00B8DB] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t("contact.email")}</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-[#0F1623] border border-white/10 text-white focus:outline-none focus:border-[#00B8DB] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t("contact.subject")}</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-[#0F1623] border border-white/10 text-white focus:outline-none focus:border-[#00B8DB] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t("contact.message")}</label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg bg-[#0F1623] border border-white/10 text-white focus:outline-none focus:border-[#00B8DB] transition-colors resize-none"
                                    />
                                </div>
                                <Button fullWidth className="bg-[#00B8DB] hover:bg-[#00B8DB]/90 text-white py-6 text-base mt-2">
                                    {t("contact.sendMessage")}
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Contact Information Section (Right - Narrower) */}
                    <div className="lg:col-span-1">
                        <Card className="bg-[#131B2C] border-white/5 p-8 h-full">
                            <h2 className="text-xl font-bold text-white mb-8">{t("contact.infoTitle")}</h2>
                            <div className="space-y-8">
                                <ContactInfoItem
                                    title={t("contact.emailLabel")}
                                    content="hello@estimify.co"
                                    icon={
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    }
                                />
                                <ContactInfoItem
                                    title={t("contact.phoneLabel")}
                                    content="+1 (800) ESTIMIFY"
                                    icon={
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    }
                                />
                                <ContactInfoItem
                                    title={t("contact.locationLabel")}
                                    content="San Francisco, CA"
                                    icon={
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    }
                                />
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        </main>
    );
}
