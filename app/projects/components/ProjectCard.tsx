"use client";

import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  tech: string;
  demoUrl: string;
  githubUrl: string;
};

const tagColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-indigo-100 text-indigo-800",
  "bg-red-100 text-red-800",
];

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  image,
  tech,
  demoUrl,
  githubUrl,
}) => {
  const techList = tech.split(",").map((item) => item.trim());

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-800 dark:shadow-[0_0_15px_#60a5fa]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5 space-y-4">
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {techList.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                tagColors[index % tagColors.length]
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4 mt-6">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition"
          >
            Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 text-white text-center py-2 rounded hover:bg-gray-900 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
