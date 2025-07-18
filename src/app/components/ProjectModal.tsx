"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaPaperclip,
  FaLink,
  FaTimes,
  FaUser,
  FaCalendarAlt,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaThumbsUp,
  FaShareAlt,
  FaEllipsisH,
  FaAngleDown,
} from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { MdCreate } from "react-icons/md";
import ShareModal from "./ShareModal";
import { useTheme } from "../contexts/ThemeContext";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    images?: string[];
    status: string;
    assignee: string;
    reporter: string;
    createdDate: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [comment, setComment] = useState("");
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const commentsContainerRef = useRef<HTMLDivElement>(null);
  const { currentTheme } = useTheme();
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Nikhil Khanna",
      avatar: "NK",
      content: "Great progress on this project! The architecture looks solid.",
      timestamp: "2 hours ago",
    },
  ]);

  // Keyboard shortcut for "M" key to focus comment input
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Check if modal is open and "M" key is pressed
      if (
        isOpen &&
        event.key.toLowerCase() === "m" &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        // Check if user is not already typing in an input/textarea
        const activeElement = document.activeElement;
        const isTyping =
          activeElement?.tagName === "INPUT" ||
          activeElement?.tagName === "TEXTAREA" ||
          activeElement?.getAttribute("contenteditable") === "true";

        if (!isTyping) {
          event.preventDefault();
          handleGiveFeedbackClick();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen]);

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "Nikhil Khanna",
        avatar: "NK",
        content: comment,
        timestamp: "Just now",
      };
      setComments([...comments, newComment]);
      setComment("");
    }
  };

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  const handleShareModalClose = () => {
    setIsShareModalOpen(false);
  };

  const handleGiveFeedbackClick = () => {
    // Scroll to comments section
    if (commentsContainerRef.current) {
      commentsContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Focus the comment input after a short delay to ensure scrolling completes
    setTimeout(() => {
      if (commentInputRef.current) {
        commentInputRef.current.focus();
      }
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start sm:items-center justify-center z-50 p-0 sm:p-4">
        <div
          className="w-full max-w-6xl h-screen sm:h-5/6 lg:h-4/5 flex flex-col transition-colors duration-300 rounded-none sm:rounded-lg"
          style={{ backgroundColor: currentTheme.surface }}
        >
          {/* Common Header */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 transition-colors duration-300 border-b gap-2 sm:gap-0"
            style={{ borderBottomColor: currentTheme.border }}
          >
            <div className="flex items-center space-x-2">
              <span
                className="text-xs sm:text-sm transition-colors duration-300"
                style={{ color: currentTheme.textSecondary }}
              >
                PORTFOLIO-{project.id}
              </span>
              <div
                className="w-4 h-4 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <FaCode className="text-white text-xs" />
              </div>
              <span
                className="text-xs sm:text-sm transition-colors duration-300"
                style={{ color: currentTheme.textSecondary }}
              >
                PROJ-{String(project.id).padStart(3, "0")}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              <button
                onClick={handleGiveFeedbackClick}
                className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm p-2 rounded hover:opacity-80 transition-all duration-300"
                style={{
                  color: currentTheme.textSecondary,
                  backgroundColor: currentTheme.background,
                }}
              >
                <FaUser />
                <span className="hidden sm:inline">Give feedback</span>
              </button>
              <button
                className="p-1 sm:p-2 rounded hover:opacity-80 transition-all duration-300"
                style={{ backgroundColor: currentTheme.background }}
              >
                <FaThumbsUp style={{ color: currentTheme.textSecondary }} />
              </button>
              <button
                onClick={handleShareClick}
                className="p-1 sm:p-2 rounded hover:opacity-80 transition-all duration-300"
                style={{ backgroundColor: currentTheme.background }}
              >
                <FaShareAlt style={{ color: currentTheme.textSecondary }} />
              </button>
              <button
                className="p-1 sm:p-2 rounded hover:opacity-80 transition-all duration-300"
                style={{ backgroundColor: currentTheme.background }}
              >
                <FaEllipsisH style={{ color: currentTheme.textSecondary }} />
              </button>
              <button
                onClick={onClose}
                className="p-1 sm:p-2 rounded hover:opacity-80 transition-all duration-300"
                style={{ backgroundColor: currentTheme.background }}
              >
                <FaTimes style={{ color: currentTheme.textSecondary }} />
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
            {/* Left Panel */}
            <div className="flex-1 px-3 sm:px-4 py-4 overflow-y-auto max-h-full">
              {/* Project Title */}
              <h1
                className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 transition-colors duration-300"
                style={{ color: currentTheme.text }}
              >
                {project.title}
              </h1>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <button
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 rounded hover:opacity-80 transition-all duration-300 text-sm"
                  style={{
                    backgroundColor: currentTheme.border,
                    color: currentTheme.text,
                  }}
                >
                  <FaPaperclip />
                  <span>Attach</span>
                </button>
                <button
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 rounded hover:opacity-80 transition-all duration-300 text-sm"
                  style={{
                    backgroundColor: currentTheme.border,
                    color: currentTheme.text,
                  }}
                >
                  <BiTask />
                  <span className="hidden sm:inline">Create subtask</span>
                  <span className="sm:hidden">Subtask</span>
                </button>
                <button
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 rounded hover:opacity-80 transition-all duration-300 text-sm"
                  style={{
                    backgroundColor: currentTheme.border,
                    color: currentTheme.text,
                  }}
                >
                  <FaLink />
                  <span className="hidden sm:inline">Link issue</span>
                  <span className="sm:hidden">Link</span>
                </button>
              </div>

              {/* Description Section */}
              <div className="mb-6 sm:mb-8">
                <h3
                  className="font-semibold mb-3 text-base sm:text-lg transition-colors duration-300"
                  style={{ color: currentTheme.text }}
                >
                  Description
                </h3>
                <div
                  className="p-3 sm:p-4 rounded-lg transition-colors duration-300 border"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.border,
                  }}
                >
                  <p
                    className="mb-4 text-sm sm:text-base leading-relaxed transition-colors duration-300"
                    style={{ color: currentTheme.text }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4
                      className="font-medium mb-2 transition-colors duration-300"
                      style={{ color: currentTheme.text }}
                    >
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded text-sm transition-colors duration-300"
                          style={{
                            backgroundColor: currentTheme.border,
                            color: currentTheme.text,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4 mb-6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300"
                        style={{ color: currentTheme.primary }}
                      >
                        <FaGithub />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300"
                        style={{ color: currentTheme.accent }}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Image Thumbnails */}
                  {project.images && project.images.length > 0 && (
                    <div className="mt-6">
                      <h4
                        className="font-medium mb-3 transition-colors duration-300"
                        style={{ color: currentTheme.text }}
                      >
                        Attachments
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {project.images.map((image, index) => (
                          <div key={index} className="group relative">
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg border border-gray-200"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                              <FaExternalLinkAlt className="text-white opacity-0 group-hover:opacity-100" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Comments Section */}
              <div className="mb-6" ref={commentsContainerRef}>
                <h3
                  className="font-semibold mb-4 transition-colors duration-300"
                  style={{ color: currentTheme.text }}
                >
                  Activity
                </h3>
                <div className="space-y-4">
                  {comments.map((commentItem) => (
                    <div key={commentItem.id} className="flex space-x-3">
                      <div
                        className="text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold"
                        style={{ backgroundColor: currentTheme.accent }}
                      >
                        {commentItem.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span
                            className="font-medium transition-colors duration-300"
                            style={{ color: currentTheme.text }}
                          >
                            {commentItem.author}
                          </span>
                          <span
                            className="text-sm transition-colors duration-300"
                            style={{ color: currentTheme.textSecondary }}
                          >
                            {commentItem.timestamp}
                          </span>
                        </div>
                        <p
                          className="transition-colors duration-300"
                          style={{ color: currentTheme.text }}
                        >
                          {commentItem.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Comment */}
                <div className="flex space-x-3 mt-6">
                  <div
                    className="text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: currentTheme.accent }}
                  >
                    NK
                  </div>
                  <div className="flex-1">
                    <textarea
                      ref={commentInputRef}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Add a comment..."
                      className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 transition-colors duration-300"
                      style={{
                        backgroundColor: currentTheme.surface,
                        borderColor: currentTheme.border,
                        color: currentTheme.text,
                      }}
                      rows={3}
                    />
                    <div className="flex justify-between items-center mt-2">
                      <div
                        className="flex items-center space-x-2 text-sm transition-colors duration-300"
                        style={{ color: currentTheme.textSecondary }}
                      >
                        <span>Pro tip: press</span>
                        <kbd
                          className="px-2 py-1 rounded text-xs transition-colors duration-300"
                          style={{
                            backgroundColor: currentTheme.border,
                            color: currentTheme.text,
                          }}
                        >
                          M
                        </kbd>
                        <span>to comment</span>
                      </div>
                      <button
                        onClick={handleAddComment}
                        className="px-4 py-2 text-white rounded hover:opacity-80 disabled:opacity-50 transition-all duration-300"
                        style={{ backgroundColor: currentTheme.primary }}
                        disabled={!comment.trim()}
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div
              className="w-full lg:w-96 p-4 sm:p-6 overflow-y-auto border-t lg:border-t-0 lg:border-l transition-colors duration-300"
              style={{
                backgroundColor: currentTheme.background,
                borderLeftColor: currentTheme.border,
                borderTopColor: currentTheme.border,
              }}
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Status & Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-0">
                  <button
                    className="flex items-center justify-center space-x-2 px-3 py-2 rounded-md font-semibold hover:opacity-80 transition-all duration-300 text-sm"
                    style={{
                      backgroundColor: currentTheme.border,
                      color: currentTheme.text,
                    }}
                  >
                    <span>{project.status}</span>
                    <FaAngleDown />
                  </button>
                  <button
                    className="flex items-center justify-center space-x-2 px-3 py-2 rounded-md hover:opacity-80 transition-all duration-300 text-sm"
                    style={{
                      backgroundColor: currentTheme.border,
                      color: currentTheme.text,
                    }}
                  >
                    <span>Actions</span>
                    <FaAngleDown />
                  </button>
                </div>

                {/* Details */}
                <div>
                  <h3
                    className="font-semibold mb-4 transition-colors duration-300"
                    style={{ color: currentTheme.text }}
                  >
                    Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1 transition-colors duration-300"
                        style={{ color: currentTheme.textSecondary }}
                      >
                        Assignee
                      </label>
                      <div className="flex items-center space-x-2">
                        <div
                          className="text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: currentTheme.accent }}
                        >
                          NK
                        </div>
                        <span
                          className="text-sm transition-colors duration-300"
                          style={{ color: currentTheme.text }}
                        >
                          {project.assignee}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-1 transition-colors duration-300"
                        style={{ color: currentTheme.textSecondary }}
                      >
                        Reporter
                      </label>
                      <div className="flex items-center space-x-2">
                        <div
                          className="text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: currentTheme.primary }}
                        >
                          NK
                        </div>
                        <span
                          className="text-sm transition-colors duration-300"
                          style={{ color: currentTheme.text }}
                        >
                          {project.reporter}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-1 transition-colors duration-300"
                        style={{ color: currentTheme.textSecondary }}
                      >
                        Development
                      </label>
                      <div
                        className="text-sm transition-colors duration-300"
                        style={{ color: currentTheme.textSecondary }}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <FaGithub
                            style={{ color: currentTheme.textSecondary }}
                          />
                          <span>4 branches</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <FaCode
                            style={{ color: currentTheme.textSecondary }}
                          />
                          <span>15 commits</span>
                          <span
                            className="text-xs transition-colors duration-300"
                            style={{ color: currentTheme.textSecondary }}
                          >
                            5 hours ago
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MdCreate
                            style={{ color: currentTheme.textSecondary }}
                          />
                          <span>4 pull requests</span>
                          <span
                            className="px-2 py-1 rounded text-xs transition-colors duration-300"
                            style={{
                              backgroundColor: currentTheme.border,
                              color: currentTheme.text,
                            }}
                          >
                            OPEN
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-1 transition-colors duration-300"
                        style={{ color: currentTheme.textSecondary }}
                      >
                        Created
                      </label>
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt
                          style={{ color: currentTheme.textSecondary }}
                        />
                        <span
                          className="text-sm transition-colors duration-300"
                          style={{ color: currentTheme.text }}
                        >
                          {project.createdDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div>
                  <h3
                    className="font-semibold mb-2 transition-colors duration-300"
                    style={{ color: currentTheme.text }}
                  >
                    Labels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="px-2 py-1 rounded text-sm transition-colors duration-300"
                      style={{
                        backgroundColor: currentTheme.border,
                        color: currentTheme.text,
                      }}
                    >
                      JUNE19-RELEASE1
                    </span>
                  </div>
                </div>

                {/* Time Tracking */}
                <div>
                  <h3
                    className="font-semibold mb-2 transition-colors duration-300"
                    style={{ color: currentTheme.text }}
                  >
                    Time tracking
                  </h3>
                  <div
                    className="text-sm transition-colors duration-300"
                    style={{ color: currentTheme.textSecondary }}
                  >
                    <div className="flex justify-between mb-1">
                      <span>No time logged</span>
                      <span>4d remaining</span>
                    </div>
                    <div
                      className="w-full rounded-full h-2"
                      style={{ backgroundColor: currentTheme.border }}
                    >
                      <div
                        className="h-2 rounded-full w-1/4"
                        style={{ backgroundColor: currentTheme.primary }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleShareModalClose}
        projectTitle={project.title}
        projectUrl={`/project/${project.id}`}
      />
    </>
  );
};

export default ProjectModal;
