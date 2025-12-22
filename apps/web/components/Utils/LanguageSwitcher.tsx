'use client';

import { useState, useEffect } from 'react';
import { useCookie } from 'react-use';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
    const router = useRouter();
    const [localeCookie, updateCookie] = useCookie('NEXT_LOCALE');
    const [currentLocale, setCurrentLocale] = useState('en');

    useEffect(() => {
        if (localeCookie) {
            setCurrentLocale(localeCookie);
        }
    }, [localeCookie]);

    const toggleLanguage = () => {
        const newLocale = currentLocale === 'en' ? 'pt' : 'en';

        // Set cookie that expires in 1 year
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; expires=${date.toUTCString()}`;

        setCurrentLocale(newLocale);
        router.refresh(); // Refresh server components
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
            title={currentLocale === 'en' ? 'Mudar para Português' : 'Switch to English'}
        >
            <span className="uppercase">{currentLocale}</span>
            <span className="text-gray-400">|</span>
            <span>{currentLocale === 'en' ? '🇧🇷 PT' : '🇺🇸 EN'}</span>
        </button>
    );
}
