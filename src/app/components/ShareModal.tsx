"use client";
import React, { useState } from "react";
import {
  FaTimes,
  FaWhatsapp,
  FaEnvelope,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectUrl: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  projectUrl,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareText = `Check out this project: ${projectTitle}`;
  const fullUrl = `${window.location.origin}${projectUrl}`;

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${shareText} ${fullUrl}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Check out: ${projectTitle}`);
    const body = encodeURIComponent(
      `I wanted to share this interesting project with you:\n\n${projectTitle}\n\n${fullUrl}`
    );
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.open(mailtoUrl);
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = fullUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Share Project</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
            <FaTimes className="text-gray-600" />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Share "{projectTitle}"</p>
          <div className="bg-gray-50 p-3 rounded border text-sm text-gray-700 break-all">
            {fullUrl}
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleWhatsAppShare}
            className="w-full flex items-center space-x-3 p-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp size={20} />
            <span>Share on WhatsApp</span>
          </button>

          <button
            onClick={handleEmailShare}
            className="w-full flex items-center space-x-3 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            <FaEnvelope size={20} />
            <span>Share via Email</span>
          </button>

          <button
            onClick={handleCopyToClipboard}
            className={`w-full flex items-center space-x-3 p-3 rounded transition-colors ${
              copied
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {copied ? <FaCheck size={20} /> : <FaCopy size={20} />}
            <span>{copied ? "Copied to clipboard!" : "Copy to clipboard"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
