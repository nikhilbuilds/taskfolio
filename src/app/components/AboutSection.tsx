import React from "react";
import {
  FaRegBuilding,
  FaUsers,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const AboutSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <div className="w-full lg:w-1/3 lg:pr-6">
      <div className="mb-8 mt-12 sm:mt-14 lg:mt-16">
        <h1
          className="text-2xl sm:text-3xl font-bold transition-colors duration-300"
          style={{ color: currentTheme.text }}
        >
          Nikhil khanna
        </h1>
        <button
          className="mt-6 px-6 py-2 rounded w-full transition-colors duration-300 hover:opacity-80"
          style={{
            backgroundColor: currentTheme.border,
            color: currentTheme.text,
          }}
        >
          Manage your account
        </button>
      </div>

      <div
        className="p-6 rounded-md shadow-sm border transition-colors duration-300"
        style={{
          backgroundColor: currentTheme.surface,
          borderColor: currentTheme.border,
        }}
      >
        <h2
          className="font-bold text-xs mb-6 transition-colors duration-300"
          style={{ color: currentTheme.textSecondary }}
        >
          ABOUT
        </h2>
        <ul className="space-y-4">
          <li
            className="flex items-center py-2 transition-colors duration-300"
            style={{ color: currentTheme.text }}
          >
            <FaRegBuilding
              className="mr-3"
              style={{ color: currentTheme.textSecondary }}
            />
            Senior Software Engineer
          </li>
          <li
            className="flex items-center py-2 transition-colors duration-300"
            style={{ color: currentTheme.text }}
          >
            <FaUsers
              className="mr-3"
              style={{ color: currentTheme.textSecondary }}
            />
            Engineering / Development
          </li>
          <li
            className="flex items-center py-2 transition-colors duration-300"
            style={{ color: currentTheme.text }}
          >
            <FaRegBuilding
              className="mr-3"
              style={{ color: currentTheme.textSecondary }}
            />
            GreenStory
          </li>
          <li
            className="flex items-center py-2 transition-colors duration-300"
            style={{ color: currentTheme.text }}
          >
            <FaMapMarkerAlt
              className="mr-3"
              style={{ color: currentTheme.textSecondary }}
            />
            Toronto, Canada
          </li>
        </ul>
        <h2
          className="font-bold text-xs mb-4 mt-8 transition-colors duration-300"
          style={{ color: currentTheme.textSecondary }}
        >
          CONTACT
        </h2>
        <ul className="space-y-4">
          <li
            className="flex items-center py-2 transition-colors duration-300"
            style={{ color: currentTheme.text }}
          >
            <FaEnvelope
              className="mr-3"
              style={{ color: currentTheme.textSecondary }}
            />{" "}
            devnikhil0306@gmail.com
          </li>
        </ul>
        <h2
          className="font-bold text-xs mb-4 mt-8 transition-colors duration-300"
          style={{ color: currentTheme.textSecondary }}
        >
          TEAMS
        </h2>
        <div
          className="text-sm transition-colors duration-300"
          style={{ color: currentTheme.textSecondary }}
        >
          <p>Full Stack Developer & Computer Enthusiast</p>
          <p className="mt-2">
            26 years old, passionate about open source development
          </p>
          <p className="mt-2">
            Specializes in React, Node.js, TypeScript, and Microservices
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
