"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeIndicator: React.FC = () => {
  const { currentTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentTheme]);

  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      style={{
        backgroundColor: currentTheme.primary,
        color: "white",
      }}
    >
      <div className="flex items-center space-x-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: currentTheme.accent }}
        />
        <span className="text-sm font-medium">{currentTheme.name}</span>
      </div>
    </div>
  );
};

export default ThemeIndicator;
