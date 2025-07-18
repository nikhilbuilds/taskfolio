"use client";
import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import { workedOnItems, WorkedOnItem } from "../data/projects";
import { useTheme } from "../contexts/ThemeContext";

const WorkedOnSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const { currentTheme } = useTheme();

  const displayedItems = showMore ? workedOnItems : workedOnItems.slice(0, 2);

  return (
    <div className="mb-6">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <div>
            <h2
              className="text-lg font-bold transition-colors duration-300"
              style={{ color: currentTheme.text }}
            >
              Worked on
            </h2>
            <p
              className="text-sm transition-colors duration-300"
              style={{ color: currentTheme.textSecondary }}
            >
              Others will only see what they can access.
            </p>
          </div>
          <a
            href="#"
            className="hover:underline transition-colors duration-300"
            style={{ color: currentTheme.primary }}
          >
            View all
          </a>
        </div>
      </div>

      <div
        className="p-6 rounded-md shadow-sm border transition-colors duration-300"
        style={{
          backgroundColor: currentTheme.surface,
          borderColor: currentTheme.border,
        }}
      >
        <div className="space-y-4">
          {displayedItems.map((item) => (
            <Link href={`/project/${item.id}`} key={item.id} className="block">
              <div
                className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 cursor-pointer p-3 rounded-lg transition-colors hover:opacity-80"
                style={{
                  backgroundColor: currentTheme.background,
                  borderColor: currentTheme.border,
                }}
              >
                <div
                  className="p-2 rounded flex-shrink-0"
                  style={{ backgroundColor: currentTheme.border }}
                >
                  <FaBook style={{ color: currentTheme.primary }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold transition-colors duration-300"
                    style={{ color: currentTheme.text }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm line-clamp-2 transition-colors duration-300"
                    style={{ color: currentTheme.textSecondary }}
                  >
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded text-xs transition-colors duration-300"
                        style={{
                          backgroundColor: currentTheme.border,
                          color: currentTheme.text,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{item.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-sm mt-4 text-blue-600 hover:underline"
          data-show-more="worked-on"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default WorkedOnSection;
