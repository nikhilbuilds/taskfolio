"use client";
import React from "react";
import {
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contactInfo = [
    {
      type: "Email",
      value: "devnikhil0306@gmail.com",
      icon: <FaEnvelope className="text-red-500" />,
      href: "mailto:devnikhil0306@gmail.com",
      description: "Best way to reach me for professional inquiries",
    },
    {
      type: "Phone",
      value: "+91 8528907496",
      icon: <FaPhone className="text-green-500" />,
      href: "tel:+918528907496",
      description: "Available for urgent matters and interviews",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/nikhil-khanna03",
      icon: <FaLinkedin className="text-blue-600" />,
      href: "https://linkedin.com/in/nikhil-khanna03",
      description: "Professional network and career updates",
    },
    {
      type: "GitHub",
      value: "github.com/nikhilbuilds",
      icon: <FaGithub className="text-gray-800" />,
      href: "https://github.com/nikhilbuilds",
      description: "Open source contributions and personal projects",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl sm:text-2xl font-bold">Contact Information</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
            <FaTimes className="text-gray-600" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="space-y-4">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                  <div className="flex items-center w-full">
                    <div className="text-2xl mt-1">{contact.icon}</div>
                    <div className="sm:hidden flex-1 ml-4">
                      <h3 className="font-semibold text-gray-900">
                        {contact.type}
                      </h3>
                      <p className="text-gray-600 text-sm">{contact.value}</p>
                    </div>
                  </div>

                  <div className="flex-1 mt-4 sm:mt-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                      <div className="mb-4 sm:mb-0">
                        <h3 className="hidden sm:block font-semibold text-gray-900">
                          {contact.type}
                        </h3>
                        <p className="hidden sm:block text-gray-600">
                          {contact.value}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {contact.description}
                        </p>
                      </div>
                      <a
                        href={contact.href}
                        target={
                          contact.type === "LinkedIn" ||
                          contact.type === "GitHub"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          contact.type === "LinkedIn" ||
                          contact.type === "GitHub"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        <span>
                          {contact.type === "Email"
                            ? "Send Email"
                            : contact.type === "Phone"
                            ? "Call"
                            : "Visit"}
                        </span>
                        {(contact.type === "LinkedIn" ||
                          contact.type === "GitHub") && (
                          <FaExternalLinkAlt className="text-sm" />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Let's Connect!</h3>
            <p className="text-blue-800 text-sm">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology. Feel free to reach out
              through any of the channels above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
