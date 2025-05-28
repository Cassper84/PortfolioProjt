export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'ABC Tech',
    duration: 'Jan 2022 - Present',
    description: 'Developed and maintained responsive web applications.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    role: 'Intern Developer',
    company: 'XYZ Solutions',
    duration: 'Jun 2021 - Dec 2021',
    description: 'Worked on automation tools and minor feature improvements.',
    technologies: ['JavaScript', 'Node.js', 'Express'],
  },
  {
    role: 'Web Developer',
    company: 'Creative Devs',
    duration: 'Mar 2020 - May 2021',
    description: 'Built custom websites and dashboards for clients across industries.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'jQuery'],
  },
  {
    role: 'Software Engineer',
    company: 'NextGen Systems',
    duration: 'Aug 2018 - Feb 2020',
    description: 'Contributed to full-stack development and system integration tasks.',
    technologies: ['Angular', 'TypeScript', 'MongoDB'],
  },
];
