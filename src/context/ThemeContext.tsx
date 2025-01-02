import { useState, useEffect, ReactNode } from 'react';
import { ThemeContextType } from '../types/theme';
import { ThemeContext } from './theme-context';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const value: ThemeContextType = {
    darkMode,
    toggleTheme: () => setDarkMode(!darkMode)
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

