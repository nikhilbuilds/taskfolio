"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface Theme {
  name: string;
  primary: string;
  primaryHover: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
}

const themes: Theme[] = [
  {
    name: "Jira Green",
    primary: "#36B37E",
    primaryHover: "#2E9B6B",
    primaryDark: "#0E7A47",
    secondary: "#00875A",
    accent: "#8B5CF6",
    background: "#F8FAFC",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
  },
  {
    name: "Ocean Blue",
    primary: "#0EA5E9",
    primaryHover: "#0284C7",
    primaryDark: "#0369A1",
    secondary: "#06B6D4",
    accent: "#F59E0B",
    background: "#F0F9FF",
    surface: "#F8FAFC",
    text: "#0F172A",
    textSecondary: "#475569",
    border: "#CBD5E1",
  },
  {
    name: "Purple Dream",
    primary: "#8B5CF6",
    primaryHover: "#7C3AED",
    primaryDark: "#6D28D9",
    secondary: "#A855F7",
    accent: "#EC4899",
    background: "#FAF5FF",
    surface: "#F3F4F6",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
  },
  {
    name: "Sunset Orange",
    primary: "#F97316",
    primaryHover: "#EA580C",
    primaryDark: "#C2410C",
    secondary: "#FB923C",
    accent: "#10B981",
    background: "#FFF7ED",
    surface: "#FEF3C7",
    text: "#92400E",
    textSecondary: "#B45309",
    border: "#FCD34D",
  },
  {
    name: "Dark Mode",
    primary: "#60A5FA",
    primaryHover: "#3B82F6",
    primaryDark: "#1D4ED8",
    secondary: "#4B5563",
    accent: "#10B981",
    background: "#0F172A",
    surface: "#1E293B",
    text: "#F8FAFC",
    textSecondary: "#CBD5E1",
    border: "#334155",
  },
];

interface ThemeContextType {
  currentTheme: Theme;
  themeIndex: number;
  switchTheme: () => void;
  setTheme: (index: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeIndex, setThemeIndex] = useState(0);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolioTheme");
    if (savedTheme) {
      const index = parseInt(savedTheme, 10);
      if (index >= 0 && index < themes.length) {
        setThemeIndex(index);
      }
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("portfolioTheme", themeIndex.toString());
  }, [themeIndex]);

  const switchTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  const setTheme = (index: number) => {
    if (index >= 0 && index < themes.length) {
      setThemeIndex(index);
    }
  };

  const value: ThemeContextType = {
    currentTheme: themes[themeIndex],
    themeIndex,
    switchTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
