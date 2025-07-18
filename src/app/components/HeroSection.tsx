import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const HeroSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <div
      className="transition-colors duration-300"
      style={{ backgroundColor: currentTheme.primary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-40 sm:h-48 lg:h-60 relative">
          <div className="absolute bottom-0 transform translate-y-1/2">
            <div
              className="rounded-full w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold border-4 transition-colors duration-300"
              style={{
                backgroundColor: currentTheme.accent,
                borderColor: currentTheme.surface,
              }}
            >
              NK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
