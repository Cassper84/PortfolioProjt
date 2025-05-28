// app/experience/Experience.tsx
'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, ExperienceItem } from '@/data/experiences';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <VerticalTimeline>
        {experiences.map((exp: ExperienceItem, index: number) => (
          <VerticalTimelineElement
            key={index}
            date={exp.duration}
            iconStyle={{ background: '#4F46E5', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <h4 className="text-md">{exp.company}</h4>
            <p className="mt-2">{exp.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-white px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
