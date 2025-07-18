import React, { useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { workedOnItems } from "../data/projects";
import { useTheme } from "../contexts/ThemeContext";

interface PlaceWorked {
  title: string;
  company: string;
  duration: string;
}

const PlacesWorkedSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const { currentTheme } = useTheme();

  const placesWorked: PlaceWorked[] = [
    {
      title: "Senior Software Engineer",
      company: "Greenstory",
      duration: "May 2022 - July 2024",
    },
    {
      title: "Software Engineer",
      company: "Devtech Enterprise Pvt Ltd",
      duration: "October 2021 - April 2022",
    },
    {
      title: "Web Developer",
      company: "NRSYS TECHNOLOGIES",
      duration: "July 2020 to June 2021",
    },
    {
      title: "Web Developer and Founder",
      company: "PaperOut",
      duration: "July 2019 to July 2020",
    },
    {
      title: "Web developer",
      company: "INTOLEGAL WORLD",
      duration: "June 2018 to Aug 2018",
    },
  ];

  const displayedItems = showMore ? placesWorked : placesWorked.slice(0, 2);

  return (
    <div
      className="p-6 rounded-md shadow-sm border mt-6 transition-colors duration-300"
      style={{
        backgroundColor: currentTheme.surface,
        borderColor: currentTheme.border,
      }}
    >
      <h2
        className="text-lg font-bold mb-4 transition-colors duration-300"
        style={{ color: currentTheme.text }}
      >
        Places you work in
      </h2>
      <div className="space-y-4">
        {displayedItems.map((place, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 border-l-4 transition-colors duration-300"
            style={{ borderLeftColor: currentTheme.primary }}
          >
            <div
              className="p-2 rounded flex-shrink-0"
              style={{ backgroundColor: currentTheme.border }}
            >
              <FaRegBuilding style={{ color: currentTheme.primary }} />
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className="font-semibold transition-colors duration-300"
                style={{ color: currentTheme.text }}
              >
                {place.title}
              </h3>
              <p
                className="text-sm transition-colors duration-300"
                style={{ color: currentTheme.textSecondary }}
              >
                {place.company}
              </p>
              <p
                className="text-sm transition-colors duration-300"
                style={{ color: currentTheme.textSecondary }}
              >
                {place.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="text-sm mt-4 hover:underline transition-colors duration-300"
        style={{ color: currentTheme.primary }}
        data-show-more="places"
      >
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default PlacesWorkedSection;
