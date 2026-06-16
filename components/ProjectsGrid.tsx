import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-300">
          Projects
        </h2>
        <p className="mt-3 text-2xl font-semibold tracking-tight text-green-900 sm:text-3xl dark:text-green-100">
          Current MoonLeaf work
        </p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
    </section>
  );
}
