import Image from "next/image";
import { projects } from "@/lib/content";
import { useLang } from "@/lib/lang-context";

type ProjectsHubCardProps = { project: (typeof projects.items)[number] };

const linkClass = "inline-flex min-h-6 items-center underline underline-offset-2 hover:opacity-70";

export function ProjectsHubCard({ project }: ProjectsHubCardProps) {
  const { t } = useLang();

  return (
    <article className="flex h-full flex-col border-2 border-ink">
      <Image
        src={`/images/projects/${project.slug}.webp`}
        alt={`${project.title} — ${t(projects.demoLabel)}`}
        width={800}
        height={500}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="aspect-[8/5] w-full border-b-2 border-ink object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        {project.category === "legacy" && (
          <span className="self-start bg-ink px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-cream">
            {t(projects.categories.legacy)}
          </span>
        )}
        <h2 className="font-display text-xl leading-[1.05]">{project.title}</h2>
        <p className="flex-1 text-sm leading-[1.5]">{t(project.desc)}</p>
        <ul className="flex list-none flex-wrap gap-1.5 p-0">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="border border-ink/40 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.05em]"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-4 font-mono text-xs">
          <a href={project.demoHref} target="_blank" rel="noreferrer" className={linkClass}>
            {t(projects.demoLabel)} ↗
          </a>
          {project.repos.map((repo) => (
            <a key={repo.href} href={repo.href} target="_blank" rel="noreferrer" className={linkClass}>
              {t(projects.codeLabel)}
              {project.repos.length > 1 ? ` (${repo.label})` : ""} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
