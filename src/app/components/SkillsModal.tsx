"use client";
import React from "react";
import {
  FaTimes,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiGraphql,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiLaravel,
} from "react-icons/si";

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const skillCategories = [
    {
      category: "Programming Languages & Core Technologies",
      skills: [
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-500" />,
          level: "Expert",
          years: "6+",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" />,
          level: "Expert",
          years: "5+",
        },
        {
          name: "React",
          icon: <FaReact className="text-blue-500" />,
          level: "Expert",
          years: "4+",
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="text-pink-500" />,
          level: "Advanced",
          years: "3+",
        },
        {
          name: "NestJS",
          icon: <SiNestjs className="text-red-500" />,
          level: "Advanced",
          years: "2+",
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-600" />,
          level: "Expert",
          years: "4+",
        },
        {
          name: "Laravel",
          icon: <SiLaravel className="text-red-600" />,
          level: "Intermediate",
          years: "2+",
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" />,
          level: "Advanced",
          years: "3+",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
          level: "Advanced",
          years: "3+",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-500" />,
          level: "Advanced",
          years: "4+",
        },
      ],
    },
    {
      category: "Architecture & DevOps",
      skills: [
        {
          name: "Microservices",
          icon: <FaDatabase className="text-purple-500" />,
          level: "Advanced",
          years: "3+",
        },
        {
          name: "Domain-Driven Design",
          icon: <FaDatabase className="text-indigo-500" />,
          level: "Intermediate",
          years: "2+",
        },
        {
          name: "Docker",
          icon: <FaDocker className="text-blue-400" />,
          level: "Learning",
          years: "1+",
        },
        {
          name: "AWS",
          icon: <FaAws className="text-orange-500" />,
          level: "Learning",
          years: "1+",
        },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800";
      case "Advanced":
        return "bg-blue-100 text-blue-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Learning":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Technical Skills</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
            <FaTimes className="text-gray-600" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{skill.icon}</div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {skill.years} experience
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              Currently Learning
            </h3>
            <p className="text-blue-800 text-sm">
              Domain-Driven Design (DDD), Docker containerization, and AWS cloud
              technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;
