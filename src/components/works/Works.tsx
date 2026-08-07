import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { projects, type Project } from "@/lib/projects";
import { ProjectCover } from "./ProjectCover";
import { ProjectModal } from "./ProjectModal";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t, lang } = useLang();
  const c = project.content[lang];
  const featured = project.featured;

  return (
    <motion.button
      type="button"
      variants={fadeUp}
      onClick={onOpen}
      className={`group flex flex-col text-left ${featured ? "md:col-span-2" : ""}`}
    >
      <ProjectCover
        project={project}
        title={c.title}
        className={featured ? "aspect-[16/10] md:aspect-[16/7]" : "aspect-[4/3]"}
      />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{project.number}</span>
            <h3 className="font-display text-lg tracking-tight">{c.title}</h3>
            {project.isPrivate && (
              <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                Private
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{c.brief}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, featured ? 6 : 3).map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="mt-1 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight size={18} />
        </span>
      </div>
      {c.award && <p className="mt-2 text-xs text-highlight">{c.award}</p>}
      <span className="sr-only">{t.works.eyebrow}</span>
    </motion.button>
  );
}

export function Works() {
  const { t } = useLang();
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="works" className="border-t border-border px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.works.eyebrow}{" "}
            <span className="font-serif-italic text-foreground normal-case">{t.works.title}</span>
          </p>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            {t.works.description}
          </p>
        </div>

        <motion.div
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
