import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { testimonials, isTestimonialReady } from "@/lib/site";

export function Testimonials() {
  const { t, lang } = useLang();
  const ready = testimonials.filter(isTestimonialReady);

  // Si todavía no hay recomendaciones cargadas, no renderizamos la sección.
  if (ready.length === 0) return null;

  return (
    <section id="testimonials" className="border-t border-border px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            {t.testimonials.title}
          </h2>
        </div>

        <motion.div
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {ready.map((item) => (
            <motion.figure
              key={item.name}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <blockquote className="font-serif-italic text-lg leading-relaxed">
                “{item.quote[lang] || item.quote.es || item.quote.en}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.title[lang]}</p>
                </div>
                {item.linkedin && (
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${item.name}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
