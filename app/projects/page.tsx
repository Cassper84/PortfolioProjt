import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function ProjectsPage() {
  return (
    <>
      <div className="space-y-12">
        <h1 className="text-center font-bold text-3xl mb-8 mt-8">Projects that I've worked on</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </>
  );
}
