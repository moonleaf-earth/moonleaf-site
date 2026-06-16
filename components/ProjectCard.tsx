import type { projects } from "@/lib/projects";

type Project = (typeof projects)[number];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex min-h-48 flex-col rounded-xl border border-green-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-green-900/50 dark:bg-green-950/10">
      <h3 className="text-xl font-semibold tracking-tight text-green-900 dark:text-green-100">
        {project.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-foreground/70">{project.tagline}</p>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition-colors hover:text-green-900 dark:text-green-300 dark:hover:text-green-100"
      >
        Visit project <span aria-hidden="true">&rarr;</span>
      </a>
    </article>
  );
}
