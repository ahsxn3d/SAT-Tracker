'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  isThemeModalOpen: boolean;
  openThemeModal: () => void;
  closeThemeModal: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const THEME_STORAGE_KEY = 'sat_tracker_theme_mode';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>('dark');
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
      if (saved === 'dark' || saved === 'light') {
        setThemeState(saved);
        applyThemeToDOM(saved);
      } else {
        // Default to dark theme (top one in image)
        setThemeState('dark');
        applyThemeToDOM('dark');
      }
    } catch (e) {
      applyThemeToDOM('dark');
    }
  }, []);

  const applyThemeToDOM = (mode: ThemeMode) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.setAttribute('data-theme', mode);
    root.classList.remove('theme-dark', 'theme-mid', 'theme-light');
    root.classList.add(`theme-${mode}`);

    // Update body background and color directly
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#071526';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#edf2f7';
      document.body.style.color = '#0f172a';
    }
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    applyThemeToDOM(mode);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (e) {}
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isThemeModalOpen,
        openThemeModal: () => setIsThemeModalOpen(true),
        closeThemeModal: () => setIsThemeModalOpen(false)
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
