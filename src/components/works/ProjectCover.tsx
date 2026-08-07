import { useState } from "react";
import type { Project } from "@/lib/projects";

type Theme = { from: string; to: string; accent: string };

const themes: Record<string, Theme> = {
  foraria: { from: "oklch(0.34 0.06 250)", to: "oklch(0.2 0.04 260)", accent: "oklch(0.75 0.13 250)" },
  bluesoft: { from: "oklch(0.42 0.1 245)", to: "oklch(0.24 0.07 255)", accent: "oklch(0.78 0.13 245)" },
  "ypf-luz": { from: "oklch(0.5 0.13 150)", to: "oklch(0.26 0.08 160)", accent: "oklch(0.82 0.16 150)" },
};

function Placeholder({ project, title }: { project: Project; title: string }) {
  const theme = themes[project.id] ?? themes.foraria;
  const initial = title.replace(/[^A-Za-z]/g, "").charAt(0).toUpperCase() || "•";

  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-lg border border-border p-6"
      style={{ background: `linear-gradient(150deg, ${theme.from}, ${theme.to})` }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-2xl"
        style={{ background: `radial-gradient(circle, ${theme.accent}, transparent 70%)` }}
      />
      <span
        className="font-serif-italic pointer-events-none absolute -bottom-10 right-2 text-[11rem] leading-none text-white opacity-10"
        aria-hidden
      >
        {initial}
      </span>
      <span className="relative text-xs uppercase tracking-[0.2em] text-white/60">
        {project.year}
      </span>
      <div className="relative">
        <p className="font-display text-2xl leading-tight text-white md:text-3xl">{title}</p>
        <p className="mt-2 text-xs text-white/70">{project.tags.slice(0, 3).join(" · ")}</p>
      </div>
    </div>
  );
}

/** Mockup de ventana de navegador que muestra la captura completa (sin recortar). */
function BrowserFrame({
  src,
  alt,
  onError,
}: {
  src: string;
  alt: string;
  onError: () => void;
}) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
      {/* barra superior */}
      <div className="flex items-center gap-1.5 border-b border-border bg-muted px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f96058]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbe3c]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3fc65c]" />
        <div className="mx-auto h-3.5 w-1/2 rounded-full bg-background/70" />
      </div>
      {/* captura completa, anclada arriba */}
      <div className="flex-1 overflow-hidden bg-white">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={onError}
          className="h-full w-full object-contain object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

/** Portada de un proyecto: usa la imagen (enmarcada) si carga; si no, un placeholder elegante. */
export function ProjectCover({
  project,
  title,
  className = "",
}: {
  project: Project;
  title: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!project.cover || failed) {
    return (
      <div className={className}>
        <Placeholder project={project} title={title} />
      </div>
    );
  }

  return (
    <div className={className}>
      <BrowserFrame src={project.cover} alt={title} onError={() => setFailed(true)} />
    </div>
  );
}
