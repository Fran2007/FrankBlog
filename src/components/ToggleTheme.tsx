import React, { useState, createContext } from "react";
import Index from "../pages/index.astro";

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Index />
    </ThemeContext.Provider>
  );
};