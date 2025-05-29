'use client';

import { useState } from "react";

type EducationItem = {
  title: string;
  date: string;
  institution: string;
};

type ExperienceItem = {
  title: string;
  date: string;
  company: string;
};

type ResumeData = {
  Education: EducationItem[];
  Experience: ExperienceItem[];
  Skills: string[];
};

const sections: ResumeData = {
  Education: [
    {
      title: "BSc in Biochemistry",
      date: "2018 - 2022",
      institution: "Nnamdi Azikwe University, Awka Anambra State Nigeria.",
    },
  ],
  Experience: [
    {
      title: "Fullstack Developer",
      date: "2023 - Present",
      company: "iZone5 Nigeria Ltd",
    },
  ],
  Skills: [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Mern Stack", "Node.js", "Express.js", "MongoDB", "NoGraphQL", "REST APIs", "Git", "CI/CD", "Problem Solving", "Team Collaboration"
  ],
};

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<keyof ResumeData>("Education");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <h2 className="text-3xl font-bold">Resume</h2>

      {/* Tabs */}
      <div className="flex gap-4">
        {(Object.keys(sections) as Array<keyof ResumeData>).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded transition-colors duration-200 ${activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="border p-6 rounded-md shadow-sm bg-white dark:bg-gray-800/80 dark:border-gray-700 transition-colors duration-300">
        {activeTab === "Skills" ? (
          <div className="flex flex-wrap gap-2">
            {sections.Skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          sections[activeTab].map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
              {"institution" in item && (
                <p className="text-sm">{item.institution}</p>
              )}
              {"company" in item && (
                <p className="text-sm">{item.company}</p>
              )}
            </div>
          ))
        )}

        <div className="mt-6 flex flex-wrap gap-4">
          {/* Preview Button */}
          <a
            href="/My Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Preview Resume
          </a>

          {/* Download Button */}
          <a
            href="/My Resume.pdf"
            download
            className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-colors"
          >
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}
