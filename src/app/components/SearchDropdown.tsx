"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaCode, FaBook, FaBuilding } from "react-icons/fa";
import { workedOnItems } from "../data/projects";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";

interface SearchResult {
  type: "project" | "tech" | "experience";
  id?: number;
  title: string;
  description?: string;
  techStack?: string[];
  status?: string;
  matchType?: string;
  projects?: any[];
  company?: string;
  duration?: string;
}

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  isOpen,
  onClose,
  searchTerm,
  onSearchChange,
}) => {
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const { currentTheme } = useTheme();

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results: SearchResult[] = [];

      // Search in projects
      workedOnItems.forEach((project) => {
        const matchesTitle = project.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesDescription = project.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesTechStack = project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (matchesTitle || matchesDescription || matchesTechStack) {
          results.push({
            type: "project",
            id: project.id,
            title: project.title,
            description: project.description,
            techStack: project.techStack,
            status: project.status,
            matchType: matchesTitle
              ? "title"
              : matchesDescription
              ? "description"
              : "tech",
          });
        }
      });

      // Search in tech stack (unique technologies)
      const allTechStack = [
        ...new Set(workedOnItems.flatMap((p) => p.techStack)),
      ];
      allTechStack.forEach((tech) => {
        if (tech.toLowerCase().includes(searchTerm.toLowerCase())) {
          const projectsWithTech = workedOnItems.filter((p) =>
            p.techStack.includes(tech)
          );
          results.push({
            type: "tech",
            title: tech,
            description: `Used in ${projectsWithTech.length} project${
              projectsWithTech.length > 1 ? "s" : ""
            }`,
            projects: projectsWithTech,
          });
        }
      });

      // Search in experience
      const experience = [
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

      experience.forEach((exp) => {
        if (
          exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exp.company.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          results.push({
            type: "experience",
            title: exp.title,
            company: exp.company,
            duration: exp.duration,
          });
        }
      });

      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm]);

  const getIcon = (type: string) => {
    switch (type) {
      case "project":
        return <FaBook className="text-blue-600" />;
      case "tech":
        return <FaCode className="text-green-600" />;
      case "experience":
        return <FaBuilding className="text-purple-600" />;
      default:
        return <FaSearch className="text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-full sm:w-80 lg:w-96 border rounded-b-lg shadow-lg z-50 max-h-96 overflow-hidden mt-1 transition-colors duration-300"
      style={{
        backgroundColor: currentTheme.surface,
        borderColor: currentTheme.border,
      }}
    >
      <div className="overflow-y-auto max-h-80">
        {searchTerm.length === 0 ? (
          <div className="p-6 text-center">
            <p
              className="text-sm transition-colors duration-300"
              style={{ color: currentTheme.textSecondary }}
            >
              Start typing to search projects, skills, and experience...
            </p>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="p-6 text-center">
            <div className="mb-2">
              <FaSearch
                size={24}
                className="mx-auto"
                style={{ color: currentTheme.textSecondary }}
              />
            </div>
            <p
              className="font-medium transition-colors duration-300"
              style={{ color: currentTheme.text }}
            >
              We couldn't find anything matching your search.
            </p>
            <p
              className="text-sm mt-1 transition-colors duration-300"
              style={{ color: currentTheme.textSecondary }}
            >
              Try again with a different term
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {/* Projects Section */}
            {filteredResults.filter((r) => r.type === "project").length > 0 && (
              <div className="p-3">
                <h3
                  className="text-xs font-semibold uppercase tracking-wide mb-3 px-2 transition-colors duration-300"
                  style={{ color: currentTheme.textSecondary }}
                >
                  Projects
                </h3>
                {filteredResults
                  .filter((r) => r.type === "project")
                  .map((result, index) => (
                    <Link
                      key={`project-${index}`}
                      href={`/project/${result.id}`}
                      onClick={onClose}
                      className="block p-3 rounded-md mb-2 hover:opacity-80 transition-all duration-300"
                      style={{ backgroundColor: currentTheme.background }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="mt-1">{getIcon(result.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1">
                            <h4
                              className="font-medium truncate pr-2 transition-colors duration-300"
                              style={{ color: currentTheme.text }}
                            >
                              {result.title}
                            </h4>
                            <span
                              className={`px-2 py-0.5 text-xs rounded-full whitespace-nowrap flex-shrink-0 ${getStatusColor(
                                result.status || "Unknown"
                              )}`}
                            >
                              {result.status}
                            </span>
                          </div>
                          <p
                            className="text-sm line-clamp-2 mb-2 transition-colors duration-300"
                            style={{ color: currentTheme.textSecondary }}
                          >
                            {result.description || ""}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {result.techStack
                              ?.slice(0, 4)
                              .map((tech: string, techIndex: number) => (
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
                            {result.techStack &&
                              result.techStack.length > 4 && (
                                <span
                                  className="px-2 py-1 rounded text-xs transition-colors duration-300"
                                  style={{
                                    backgroundColor: currentTheme.border,
                                    color: currentTheme.text,
                                  }}
                                >
                                  +{result.techStack.length - 4} more
                                </span>
                              )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            )}

            {/* Tech Stack Section */}
            {filteredResults.filter((r) => r.type === "tech").length > 0 && (
              <div className="p-3">
                <h3
                  className="text-xs font-semibold uppercase tracking-wide mb-3 px-2 transition-colors duration-300"
                  style={{ color: currentTheme.textSecondary }}
                >
                  Technologies
                </h3>
                {filteredResults
                  .filter((r) => r.type === "tech")
                  .map((result, index) => (
                    <div
                      key={`tech-${index}`}
                      className="p-3 rounded-md cursor-pointer mb-2 hover:opacity-80 transition-all duration-300"
                      style={{ backgroundColor: currentTheme.background }}
                      onClick={onClose}
                    >
                      <div className="flex items-center space-x-3">
                        <div>{getIcon(result.type)}</div>
                        <div>
                          <h4
                            className="font-medium transition-colors duration-300"
                            style={{ color: currentTheme.text }}
                          >
                            {result.title}
                          </h4>
                          <p
                            className="text-sm transition-colors duration-300"
                            style={{ color: currentTheme.textSecondary }}
                          >
                            {result.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* Experience Section */}
            {filteredResults.filter((r) => r.type === "experience").length >
              0 && (
              <div className="p-3">
                <h3
                  className="text-xs font-semibold uppercase tracking-wide mb-3 px-2 transition-colors duration-300"
                  style={{ color: currentTheme.textSecondary }}
                >
                  Experience
                </h3>
                {filteredResults
                  .filter((r) => r.type === "experience")
                  .map((result, index) => (
                    <div
                      key={`exp-${index}`}
                      className="p-3 rounded-md cursor-pointer mb-2 hover:opacity-80 transition-all duration-300"
                      style={{ backgroundColor: currentTheme.background }}
                      onClick={onClose}
                    >
                      <div className="flex items-center space-x-3">
                        <div>{getIcon(result.type)}</div>
                        <div>
                          <h4
                            className="font-medium transition-colors duration-300"
                            style={{ color: currentTheme.text }}
                          >
                            {result.title}
                          </h4>
                          <p
                            className="text-sm transition-colors duration-300"
                            style={{ color: currentTheme.textSecondary }}
                          >
                            {result.company}
                          </p>
                          <p
                            className="text-xs transition-colors duration-300"
                            style={{ color: currentTheme.textSecondary }}
                          >
                            {result.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>

      {filteredResults.length > 0 && (
        <div
          className="p-3 border-t transition-colors duration-300"
          style={{
            backgroundColor: currentTheme.background,
            borderTopColor: currentTheme.border,
          }}
        >
          <div className="flex items-center justify-between text-sm">
            <span style={{ color: currentTheme.textSecondary }}>
              {filteredResults.length} result
              {filteredResults.length > 1 ? "s" : ""} found
            </span>
            <button
              onClick={onClose}
              className="font-medium hover:opacity-80 transition-all duration-300"
              style={{ color: currentTheme.primary }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
