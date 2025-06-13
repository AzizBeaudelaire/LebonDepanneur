import { useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export const useThemeStore = create()(persist((set) => ({
    theme: 'light',
    setTheme: (theme) => set({ theme }),
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}), {
    name: 'theme-storage',
}));
export const useTheme = () => {
    const { theme, setTheme, toggleTheme } = useThemeStore();
    useEffect(() => {
        // Check if there's a stored theme preference
        const storedTheme = localStorage.getItem('theme-storage');
        if (!storedTheme) {
            // If no stored preference, check time of day
            const currentHour = new Date().getHours();
            const isNightTime = currentHour < 6 || currentHour >= 20;
            // Also check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            // Set theme based on time or system preference
            setTheme(isNightTime || prefersDark ? 'dark' : 'light');
        }
        // Update document class for theme
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme, setTheme]);
    return { theme, setTheme, toggleTheme };
};
