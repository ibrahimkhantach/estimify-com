"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../../messages/en.json';
import ar from '../../messages/ar.json';

type Locale = 'en' | 'ar';
type Messages = typeof en;

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
    dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const messages: Record<Locale, Messages> = { en, ar };

function getNestedValue(obj: any, path: string): string {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj) || path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('en');

    useEffect(() => {
        const saved = localStorage.getItem('locale') as Locale;
        if (saved && (saved === 'en' || saved === 'ar')) {
            setLocaleState(saved);
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('locale', newLocale);
        document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLocale;
    };

    useEffect(() => {
        document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = locale;
    }, [locale]);

    const t = (key: string): string => {
        return getNestedValue(messages[locale], key);
    };

    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}
