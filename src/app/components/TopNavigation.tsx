"use client";
import React, { useState, useRef, useEffect } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaAngleDown, FaQuestionCircle, FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoRocket } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import SkillsModal from "./SkillsModal";
import ContactModal from "./ContactModal";
import SearchDropdown from "./SearchDropdown";
import { useTheme } from "../contexts/ThemeContext";
import AboutModal from "./AboutModal";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

interface TopNavigationProps {
  onYourWorkClick?: () => void;
  onProjectsClick?: () => void;
  onExperienceClick?: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({
  onYourWorkClick,
  onProjectsClick,
  onExperienceClick,
}) => {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { currentTheme, switchTheme } = useTheme();

  const handleDownloadCV = () => {
    window.open(
      "https://www.devnikhil.com/_files/ugd/87e30f_2a0386ac73fe453eb7bae1443af77327.pdf",
      "_blank"
    );
  };

  const handleSearchFocus = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className="relative p-3 flex justify-between items-center flex-wrap"
        style={{ backgroundColor: currentTheme.primary }}
      >
        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="flex items-center space-x-2 text-white">
            <BsGrid3X3GapFill size={20} />
            <span className="font-bold text-base lg:text-lg">
              Nikhil's Portfolio
            </span>
          </div>
          <ul className="hidden lg:flex items-center space-x-4 ml-4">
            <li
              onClick={onYourWorkClick}
              className="text-white flex items-center cursor-pointer hover:text-gray-200 transition-colors"
            >
              Your Work <FaAngleDown className="ml-1" />
            </li>
            <li
              onClick={onProjectsClick}
              className="text-white flex items-center cursor-pointer hover:text-gray-200 transition-colors"
            >
              Projects <FaAngleDown className="ml-1" />
            </li>
            <li
              onClick={() => setIsSkillsModalOpen(true)}
              className="text-white flex items-center cursor-pointer hover:text-gray-200 transition-colors"
            >
              Skills <FaAngleDown className="ml-1" />
            </li>
            <li
              onClick={onExperienceClick}
              className="text-white flex items-center cursor-pointer hover:text-gray-200 transition-colors"
            >
              Experience <FaAngleDown className="ml-1" />
            </li>
            <li
              onClick={() => setIsContactModalOpen(true)}
              className="text-white flex items-center cursor-pointer hover:text-gray-200 transition-colors"
            >
              Contact <FaAngleDown className="ml-1" />
            </li>
          </ul>
          <button
            onClick={handleDownloadCV}
            className="hidden sm:block text-white px-3 lg:px-4 py-2 rounded transition-colors text-sm lg:text-base"
            style={{
              backgroundColor: currentTheme.secondary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.primaryHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.secondary;
            }}
          >
            Download CV
          </button>
        </div>
        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="relative hidden sm:block" ref={searchRef}>
            <div className="relative">
              <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="Search projects, skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={handleSearchFocus}
                className="text-white placeholder-gray-300 p-2 pl-10 rounded w-64 sm:w-80 lg:w-96 border focus:outline-none focus:ring-2 transition-colors"
                style={
                  {
                    backgroundColor: currentTheme.primaryDark,
                    borderColor: currentTheme.secondary,
                    "--tw-ring-color": currentTheme.accent,
                  } as React.CSSProperties
                }
              />
            </div>
            <SearchDropdown
              isOpen={isSearchOpen}
              onClose={handleSearchClose}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4 text-white">
            <button
              onClick={switchTheme}
              className="hover:text-gray-200 transition-colors p-1 rounded"
              title={`Switch to next theme (Current: ${currentTheme.name})`}
            >
              <GoRocket size={20} />
            </button>
            <FaQuestionCircle
              size={20}
              className="hover:text-gray-200 transition-colors cursor-pointer"
              onClick={() => setIsAboutModalOpen(true)}
            />
            <IoMdSettings
              size={20}
              className="hidden sm:block hover:text-gray-200 transition-colors cursor-pointer"
            />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden hover:text-gray-200 transition-colors p-1 rounded"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden absolute top-full left-0 right-0 z-40 border-t"
            style={{
              backgroundColor: currentTheme.primary,
              borderTopColor: currentTheme.primaryHover,
            }}
          >
            <div className="px-4 py-4 space-y-2">
              <div className="relative mb-4" ref={searchRef}>
                <div className="relative">
                  <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    placeholder="Search projects, skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={handleSearchFocus}
                    className="text-white placeholder-gray-300 p-2 pl-10 rounded w-full border focus:outline-none focus:ring-2 transition-colors"
                    style={
                      {
                        backgroundColor: currentTheme.primaryDark,
                        borderColor: currentTheme.secondary,
                        "--tw-ring-color": currentTheme.accent,
                      } as React.CSSProperties
                    }
                  />
                </div>
                <SearchDropdown
                  isOpen={isSearchOpen}
                  onClose={handleSearchClose}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
              </div>
              <button
                onClick={() => {
                  onYourWorkClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left text-white py-3 px-3 hover:text-gray-200 transition-colors rounded hover:bg-black hover:bg-opacity-20"
              >
                Your Work
              </button>
              <button
                onClick={() => {
                  onProjectsClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left text-white py-3 px-3 hover:text-gray-200 transition-colors rounded hover:bg-black hover:bg-opacity-20"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  setIsSkillsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left text-white py-3 px-3 hover:text-gray-200 transition-colors rounded hover:bg-black hover:bg-opacity-20"
              >
                Skills
              </button>
              <button
                onClick={() => {
                  onExperienceClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left text-white py-3 px-3 hover:text-gray-200 transition-colors rounded hover:bg-black hover:bg-opacity-20"
              >
                Experience
              </button>
              <button
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left text-white py-3 px-3 hover:text-gray-200 transition-colors rounded hover:bg-black hover:bg-opacity-20"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  handleDownloadCV();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left text-white py-3 px-3 hover:text-gray-200 transition-colors rounded hover:bg-black hover:bg-opacity-20"
              >
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Modals */}
      <SkillsModal
        isOpen={isSkillsModalOpen}
        onClose={() => setIsSkillsModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </>
  );
};

export default TopNavigation;
