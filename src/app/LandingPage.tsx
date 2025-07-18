"use client";
import React from "react";
import TopNavigation from "./components/TopNavigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WorkedOnSection from "./components/WorkedOnSection";
import PlacesWorkedSection from "./components/PlacesWorkedSection";
import ThemeIndicator from "./components/ThemeIndicator";
import { useTheme } from "./contexts/ThemeContext";

const LandingPage: React.FC = () => {
  const { currentTheme } = useTheme();

  const handleYourWorkClick = () => {
    // Focus both worked on and places sections
    const workedOnElement = document.getElementById("worked-on-section");
    const placesElement = document.getElementById("places-worked-section");

    if (workedOnElement) {
      workedOnElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleProjectsClick = () => {
    // Focus worked on section and show more
    const workedOnElement = document.getElementById("worked-on-section");
    if (workedOnElement) {
      workedOnElement.scrollIntoView({ behavior: "smooth", block: "start" });
      // Trigger show more for worked on section
      const showMoreButton = workedOnElement.querySelector(
        'button[data-show-more="worked-on"]'
      ) as HTMLButtonElement;
      if (showMoreButton && showMoreButton.textContent?.includes("Show more")) {
        showMoreButton.click();
      }
    }
  };

  const handleExperienceClick = () => {
    // Focus places worked section and show more
    const placesElement = document.getElementById("places-worked-section");
    if (placesElement) {
      placesElement.scrollIntoView({ behavior: "smooth", block: "start" });
      // Trigger show more for places section
      const showMoreButton = placesElement.querySelector(
        'button[data-show-more="places"]'
      ) as HTMLButtonElement;
      if (showMoreButton && showMoreButton.textContent?.includes("Show more")) {
        showMoreButton.click();
      }
    }
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: currentTheme.background }}
    >
      <TopNavigation
        onYourWorkClick={handleYourWorkClick}
        onProjectsClick={handleProjectsClick}
        onExperienceClick={handleExperienceClick}
      />
      <HeroSection />

      <div
        className="shadow-sm transition-colors duration-300"
        style={{ backgroundColor: currentTheme.surface }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row pt-8 lg:pt-20 pb-4 gap-6 lg:gap-0">
            <AboutSection />

            {/* Right side - Main content */}
            <div className="w-full lg:w-2/3">
              <div id="worked-on-section">
                <WorkedOnSection />
              </div>
              <div id="places-worked-section">
                <PlacesWorkedSection />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeIndicator />
    </div>
  );
};

export default LandingPage;
