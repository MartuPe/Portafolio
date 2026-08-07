import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Github, Lock, KeyRound } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { Project } from "@/lib/projects";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, lang } = useLang();
  const c = project.content[lang];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm md:p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-4 w-full max-w-3xl rounded-2xl border border-border bg-background p-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.works.close}
          className="absolute right-4 top-4 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X size={16} />
        </button>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {project.number} · {c.service}
        </p>
        <h3 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">{c.title}</h3>

        {c.award && (
          <p className="mt-3 inline-block rounded-full bg-surface px-3 py-1 text-sm text-highlight">
            {c.award}
          </p>
        )}

        {/* Meta */}
        <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
              {t.works.client}
            </dt>
            <dd className="mt-1">{c.client}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
              {t.works.date}
            </dt>
            <dd className="mt-1">{c.date}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
              {t.works.role}
            </dt>
            <dd className="mt-1">{c.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
              {t.works.service}
            </dt>
            <dd className="mt-1">{c.service}</dd>
          </div>
        </dl>

        <p className="mt-6 text-base text-muted-foreground">{c.summary}</p>

        {/* Sections */}
        <div className="mt-8 space-y-6">
          {c.sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-sm font-semibold">{s.title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.content}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.gallery.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full rounded-lg border border-border object-cover"
              />
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Private note */}
        {project.isPrivate && (
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Lock size={13} /> {t.works.privateNote}
          </p>
        )}

        {/* Demo access */}
        {project.demoAccess && (
          <div className="mt-6 rounded-lg border border-border bg-surface p-4">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <KeyRound size={13} /> {t.works.demoAccess}
            </p>
            <p className="mt-2 font-mono text-sm">
              {project.demoAccess.user} &nbsp;/&nbsp; {project.demoAccess.password}
            </p>
          </div>
        )}

        {/* Links */}
        {project.links && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background transition-transform hover:scale-[1.03]"
              >
                <ExternalLink size={14} /> {t.works.viewDemo}
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-surface"
              >
                <Github size={14} /> {t.works.viewCode}
              </a>
            )}
            {project.links.landing && (
              <a
                href={project.links.landing}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-surface"
              >
                <Github size={14} /> Landing
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
