"use client";

import { useState } from "react";
import { ProjectsHubCard } from "@/components/projects/ProjectsHubCard";
import { projects, type ProjectCategory } from "@/lib/content";
import { useLang } from "@/lib/lang-context";

type Filter = ProjectCategory | "all";

const filters: Filter[] = ["all", "business", "experiments", "legacy"];

export function ProjectsHub() {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const visibleProjects = projects.items.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  return (
    <>
      <div role="group" aria-label={t(projects.filtersLabel)} className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`min-h-9 border-2 border-ink px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] transition-opacity hover:opacity-80 ${
              activeFilter === filter ? "bg-ink text-cream" : ""
            }`}
          >
            {t(filter === "all" ? projects.filterAllLabel : projects.categories[filter])}
          </button>
        ))}
      </div>
      <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <li key={project.slug}>
            <ProjectsHubCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
