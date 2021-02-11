
import React, { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = (currentTheme) => {
    if(currentTheme === 'light') setTheme('light');
    else setTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return {
    theme,
    toggleTheme
  };
};

