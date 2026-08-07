import type { Project } from "@/lib/projects";

const gradients: Record<string, string> = {
  foraria: "linear-gradient(150deg, oklch(0.32 0.05 250), oklch(0.24 0.04 260))",
  bluesoft: "linear-gradient(150deg, oklch(0.4 0.09 240), oklch(0.28 0.07 250))",
  "ypf-luz": "linear-gradient(150deg, oklch(0.42 0.11 150), oklch(0.3 0.08 160))",
  "casino-crusaders": "linear-gradient(150deg, oklch(0.38 0.09 20), oklch(0.28 0.07 30))",
};

/** Portada de un proyecto: usa la imagen si existe, si no un bloque con degradé + título. */
export function ProjectCover({
  project,
  title,
  className = "",
}: {
  project: Project;
  title: string;
  className?: string;
}) {
  if (project.cover) {
    return (
      <div className={`overflow-hidden rounded-lg border border-border ${className}`}>
        <img
          src={project.cover}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col justify-between rounded-lg border border-border p-6 ${className}`}
      style={{ background: gradients[project.id] ?? gradients.foraria }}
    >
      <span className="text-xs uppercase tracking-[0.2em] text-white/60">{project.year}</span>
      <div>
        <p className="font-display text-2xl leading-tight text-white md:text-3xl">{title}</p>
        <p className="mt-2 text-xs text-white/70">{project.tags.slice(0, 3).join(" · ")}</p>
      </div>
    </div>
  );
}
