import { useColorScheme } from 'nativewind';
import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [theme, setTheme] = useState<'light' | 'dark'>(colorScheme ?? 'light');

  useEffect(() => {
    setTheme(colorScheme as 'light' | 'dark');
  }, [colorScheme]);

  const toggleTheme = () => {
    setColorScheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
