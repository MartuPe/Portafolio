import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { site } from "@/lib/site";

export function Contact() {
  const { t, lang } = useLang();
  const cvHref = lang === "es" ? site.cvEs : site.cvEn;

  return (
    <section id="contact" className="border-t border-border px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-start gap-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            {t.contact.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-xl text-base text-muted-foreground md:text-lg">
            {t.contact.body}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-transform hover:scale-[1.03]"
            >
              <Mail size={15} /> {t.contact.email}
            </a>
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-surface"
            >
              <FileText size={15} /> {lang === "es" ? t.contact.cvEs : t.contact.cvEn}
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-5 pt-2 text-muted-foreground">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <Github size={20} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${site.email}`} className="text-sm transition-colors hover:text-foreground">
              {site.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
