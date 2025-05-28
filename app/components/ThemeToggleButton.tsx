'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ThemeToggleButton() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted)
        return (
            <Image
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-sun'%3E%3Ccircle cx='12' cy='12' r='5'%3E%3C/circle%3E%3Cpath d='M12 1v2'%3E%3C/path%3E%3Cpath d='M12 21v2'%3E%3C/path%3E%3Cpath d='M4.22 4.22l1.42 1.42'%3E%3C/path%3E%3Cpath d='M18.36 18.36l1.42 1.42'%3E%3C/path%3E%3Cpath d='M1 12h2'%3E%3C/path%3E%3Cpath d='M21 12h2'%3E%3C/path%3E%3Cpath d='M4.22 19.78l1.42-1.42'%3E%3C/path%3E%3Cpath d='M18.36 5.64l1.42-1.42'%3E%3C/path%3E%3C/svg%3E"
                alt="Theme Toggle Button"
                width={36}
                height={36}
                sizes="36x36"
            />
        );

    const commonClasses =
        'w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-colors transition-duration-300 ease-in-out hover:scale-105';

    return (
        <div className="fixed bottom-20 right-6 z-50">
            {resolvedTheme === 'dark' ? (
                <div
                    className={`${commonClasses} bg-white text-black`}
                    onClick={() => setTheme('light')}
                >
                    <Sun className="w-7 h-7" />
                </div>
            ) : (
                <div
                    className={`${commonClasses} bg-black text-white`}
                    onClick={() => setTheme('dark')}
                >
                    <Moon className="w-7 h-7" />
                </div>
            )}
        </div>
    );
}
