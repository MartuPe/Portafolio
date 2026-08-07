import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { education } from "@/lib/site";

export function About() {
  const { t, lang } = useLang();
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-10 md:grid-cols-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3"
          >
            {t.about.eyebrow}
          </motion.p>

          <div className="space-y-8 md:col-span-9">
            <motion.p
              variants={fadeUp}
              className="font-display text-2xl leading-[1.2] tracking-tight md:text-4xl"
            >
              {t.about.headline}
            </motion.p>

            <div className="max-w-2xl space-y-4">
              {t.about.body.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-base text-muted-foreground md:text-lg"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-2"
            >
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.about.education}
                </h3>
                <ul className="mt-4 space-y-3">
                  {education.map((e) => (
                    <li key={e.place + e.title[lang]}>
                      <p className="text-sm font-medium">{e.title[lang]}</p>
                      <p className="text-xs text-muted-foreground">
                        {e.place} · {e.period[lang]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.about.languages}
                </h3>
                <p className="mt-4 text-sm">{t.about.languagesValue}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
