"use client";
import React from "react";
import { FaTimes, FaInfoCircle, FaLightbulb } from "react-icons/fa";
import { GoRocket } from "react-icons/go";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-auto transform transition-all duration-300 ease-out scale-95 hover:scale-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-200 rounded-t-xl bg-gray-50 sticky top-0 z-10">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <FaInfoCircle className="text-xl sm:text-2xl text-blue-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              About This Portfolio
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <FaTimes className="text-gray-600" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 text-gray-700">
          <p className="text-base sm:text-lg leading-relaxed">
            Welcome to my interactive portfolio! This isn't just a static
            website—it's a dynamic, Jira-inspired platform designed to showcase
            my skills and projects in a more engaging way.
          </p>

          <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <FaLightbulb className="text-xl sm:text-2xl text-yellow-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  How to Use This Site:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600">
                  <li>
                    <strong>Explore Projects:</strong> Click on any project card
                    to see a detailed modal with descriptions, tech stacks, and
                    live demos.
                  </li>
                  <li>
                    <strong>Interactive Search:</strong> Use the search bar in
                    the top navigation to filter projects and skills instantly.
                  </li>
                  <li>
                    <strong>Switch Themes:</strong> Like a different color
                    scheme? Click the{" "}
                    <GoRocket className="inline-block text-base sm:text-lg text-purple-600" />{" "}
                    icon to cycle through different themes.
                  </li>
                  <li>
                    <strong>Leave a Comment:</strong> Sign in with your Google
                    account to leave a comment on my projects.
                  </li>
                  <li>
                    <strong>Get in Touch:</strong> The contact modal provides
                    multiple ways to connect with me.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-base">
            This portfolio was built with Next.js, TypeScript, and Tailwind CSS,
            and is designed to be fully responsive. Have fun exploring!
          </p>
        </div>

        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200 rounded-b-xl sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 sm:py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
